#!/usr/bin/env bun
/**
 * Script to fetch information about Vercel projects
 * Usage: bun run infrastructure/scripts/fetch-vercel-projects.ts [project-names...]
 */

interface VercelProject {
	id: string;
	name: string;
	accountId: string;
	updatedAt: number;
	createdAt: number;
	framework: string | null;
	devCommand: string | null;
	installCommand: string | null;
	buildCommand: string | null;
	outputDirectory: string | null;
	publicSource: boolean | null;
	link?: {
		type: string;
		repo: string;
		repoId: number;
		org?: string;
		gitCredentialId?: string;
		productionBranch?: string;
		sourceless?: boolean;
		createdAt?: number;
		updatedAt?: number;
	};
	latestDeployments?: Array<{
		uid: string;
		name: string;
		url: string;
		created: number;
		state: string;
		type: string;
		creator: {
			uid: string;
			username: string;
		};
		target: string;
	}>;
}

interface VercelProjectsResponse {
	projects: VercelProject[];
	pagination: {
		count: number;
		next: number | null;
		prev: number | null;
	};
}

interface VercelDomain {
	name: string;
	apexName: string;
	projectId: string;
	verified: boolean;
	createdAt: number;
	updatedAt: number;
}

async function fetchVercelProjects(
	projectNames?: string[],
): Promise<VercelProject[]> {
	const token = process.env.VERCEL_API_TOKEN;
	if (!token) {
		throw new Error("VERCEL_API_TOKEN environment variable is not set");
	}

	// Fetch all projects
	const response = await fetch("https://api.vercel.com/v9/projects", {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		throw new Error(
			`Failed to fetch projects: ${response.status} ${response.statusText}`,
		);
	}

	const data = (await response.json()) as VercelProjectsResponse;

	// Filter by project names if provided
	if (projectNames && projectNames.length > 0) {
		return data.projects.filter((project) =>
			projectNames.includes(project.name),
		);
	}

	return data.projects;
}

async function fetchProjectDomains(projectId: string): Promise<VercelDomain[]> {
	const token = process.env.VERCEL_API_TOKEN;
	if (!token) {
		throw new Error("VERCEL_API_TOKEN environment variable is not set");
	}

	const response = await fetch(
		`https://api.vercel.com/v9/projects/${projectId}/domains`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
	);

	if (!response.ok) {
		console.warn(
			`Failed to fetch domains for project ${projectId}: ${response.status}`,
		);
		return [];
	}

	const data = await response.json();
	return data.domains || [];
}

async function main() {
	// Get project names from command line arguments
	const projectNames = process.argv.slice(2);

	console.log("Fetching Vercel projects...\n");

	try {
		const projects = await fetchVercelProjects(
			projectNames.length > 0 ? projectNames : undefined,
		);

		if (projects.length === 0) {
			console.log("No projects found");
			return;
		}

		console.log(`Found ${projects.length} project(s)\n`);

		// Fetch detailed information for each project
		for (const project of projects) {
			console.log("=".repeat(80));
			console.log(`Project: ${project.name}`);
			console.log("=".repeat(80));
			console.log(`ID: ${project.id}`);
			console.log(`Framework: ${project.framework || "Not specified"}`);
			console.log(
				`Created: ${new Date(project.createdAt).toLocaleDateString()}`,
			);
			console.log(
				`Updated: ${new Date(project.updatedAt).toLocaleDateString()}`,
			);

			if (project.link) {
				console.log(`\nGit Repository:`);
				console.log(`  Type: ${project.link.type}`);
				console.log(`  Repo: ${project.link.repo}`);
				if (project.link.org) console.log(`  Org: ${project.link.org}`);
				if (project.link.productionBranch)
					console.log(`  Production Branch: ${project.link.productionBranch}`);
			}

			// Fetch domains for this project
			const domains = await fetchProjectDomains(project.id);
			if (domains.length > 0) {
				console.log(`\nDomains:`);
				for (const domain of domains) {
					console.log(
						`  - ${domain.name} ${domain.verified ? "(verified)" : "(unverified)"}`,
					);
				}
			}

			// Show latest deployment if available
			if (project.latestDeployments && project.latestDeployments.length > 0) {
				const latest = project.latestDeployments[0];
				console.log(`\nLatest Deployment:`);
				console.log(`  URL: https://${latest.url}`);
				console.log(`  State: ${latest.state}`);
				console.log(`  Target: ${latest.target}`);
				console.log(
					`  Created: ${new Date(latest.created).toLocaleString()}`,
				);
			}

			console.log(`\nBuild Configuration:`);
			console.log(
				`  Build Command: ${project.buildCommand || "Default (next build)"}`,
			);
			console.log(
				`  Output Directory: ${project.outputDirectory || "Default (.next)"}`,
			);
			console.log(
				`  Install Command: ${project.installCommand || "Default (npm install)"}`,
			);
			console.log(
				`  Dev Command: ${project.devCommand || "Default (next dev)"}`,
			);

			console.log("\n");
		}

		// Export as JSON for programmatic use
		const jsonOutput = projects.map((project) => ({
			name: project.name,
			id: project.id,
			framework: project.framework,
			repo: project.link?.repo,
			url:
				project.latestDeployments?.[0]?.url
					? `https://${project.latestDeployments[0].url}`
					: null,
		}));

		console.log("\n" + "=".repeat(80));
		console.log("JSON Output (for programmatic use):");
		console.log("=".repeat(80));
		console.log(JSON.stringify(jsonOutput, null, 2));
	} catch (error) {
		console.error("Error fetching projects:", error);
		process.exit(1);
	}
}

main();
