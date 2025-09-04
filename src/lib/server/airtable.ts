import { AIRTABLE_API_KEY } from '$env/static/private';
import { submissionsTable } from '$lib/types/airtable-dev';
import { AirtableTs } from 'airtable-ts';

const db = new AirtableTs({
	apiKey: AIRTABLE_API_KEY
});

export const submissions = await db.scan(submissionsTable);

export const fetchProjectData = async (projectId: string) => {
	const project = await db.get(submissionsTable, projectId);
	return project;
};
