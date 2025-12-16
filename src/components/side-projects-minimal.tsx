import { SideProjectsMinimalUI } from "./side-projects-minimal.ui";
import { resumeData } from "src/data/resume";

/**
 * Minimal side projects list for variant pages
 * Server component showing brief project list with thumbnails
 */
export function SideProjectsMinimal() {
	if (!resumeData.sideProjects || resumeData.sideProjects.length === 0) {
		return null;
	}

	return (
		<section className="mb-20 max-md:mb-16">
			<SideProjectsMinimalUI projects={resumeData.sideProjects} />
		</section>
	);
}
