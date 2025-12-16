#!/usr/bin/env bun
/**
 * Script to fetch GitHub repository information including README content
 * Usage: bun run infrastructure/scripts/fetch-github-repos.ts [repo-names...]
 */

interface GitHubRepo {
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  created_at: string;
  updated_at: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

interface GitHubReadme {
  content: string;
  encoding: string;
}

async function fetchRepoInfo(
  owner: string,
  repo: string,
): Promise<GitHubRepo | null> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.warn("GITHUB_TOKEN not set, using unauthenticated requests");
  }

  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`,
      { headers },
    );

    if (!response.ok) {
      console.warn(`Failed to fetch repo ${owner}/${repo}: ${response.status}`);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching repo ${owner}/${repo}:`, error);
    return null;
  }
}

async function fetchReadme(
  owner: string,
  repo: string,
): Promise<string | null> {
  const token = process.env.GITHUB_TOKEN;
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/readme`,
      { headers },
    );

    if (!response.ok) {
      console.warn(`No README found for ${owner}/${repo}`);
      return null;
    }

    const data = (await response.json()) as GitHubReadme;
    const decoded = Buffer.from(data.content, "base64").toString("utf-8");
    return decoded;
  } catch (error) {
    console.error(`Error fetching README for ${owner}/${repo}:`, error);
    return null;
  }
}

async function main() {
  const owner = "votrungquan1999";
  const repos = [
    "AI-rules-setup",
    "nghiep-hung-website",
    "finance-calculator",
    "stem-venture-router",
    "stemventure-landing-page",
  ];

  console.log(`Fetching GitHub repositories for ${owner}...\n`);

  const results = [];

  for (const repo of repos) {
    console.log("=".repeat(80));
    console.log(`Repository: ${repo}`);
    console.log("=".repeat(80));

    const repoInfo = await fetchRepoInfo(owner, repo);
    if (!repoInfo) {
      console.log("Could not fetch repository info\n");
      continue;
    }

    console.log(`Full Name: ${repoInfo.full_name}`);
    console.log(`Description: ${repoInfo.description || "No description"}`);
    console.log(`Homepage: ${repoInfo.homepage || "No homepage"}`);
    console.log(`Language: ${repoInfo.language || "Not specified"}`);
    console.log(`Topics: ${repoInfo.topics.join(", ") || "None"}`);
    console.log(`Stars: ${repoInfo.stargazers_count}`);
    console.log(
      `Created: ${new Date(repoInfo.created_at).toLocaleDateString()}`,
    );
    console.log(
      `Updated: ${new Date(repoInfo.updated_at).toLocaleDateString()}`,
    );

    // Fetch README
    console.log("\nFetching README...");
    const readme = await fetchReadme(owner, repo);
    if (readme) {
      // Show first 500 chars of README
      const preview =
        readme.length > 500 ? `${readme.substring(0, 500)}...` : readme;
      console.log("\nREADME Preview:");
      console.log("-".repeat(80));
      console.log(preview);
      console.log("-".repeat(80));
    } else {
      console.log("No README available");
    }

    console.log("\n");

    results.push({
      name: repo,
      description: repoInfo.description,
      homepage: repoInfo.homepage,
      language: repoInfo.language,
      topics: repoInfo.topics,
      githubUrl: repoInfo.html_url,
      hasReadme: !!readme,
      readmePreview: readme
        ? readme.substring(0, 300).replace(/\n/g, " ")
        : null,
    });

    // Rate limiting pause
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  console.log(`\n${"=".repeat(80)}`);
  console.log("JSON Summary:");
  console.log("=".repeat(80));
  console.log(JSON.stringify(results, null, 2));
}

main();

// Export empty object to make this file a module (avoids global scope conflicts)
export {};
