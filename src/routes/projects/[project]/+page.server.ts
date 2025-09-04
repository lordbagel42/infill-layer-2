import { fetchProjectData } from '$lib/server/airtable';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { project } = params;

	// Fetch project data from a database or API
	const projectData = await fetchProjectData(project);

	return {
		project: projectData
	};
};
