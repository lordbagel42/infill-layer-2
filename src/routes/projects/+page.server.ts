import { submissions } from '$lib/server/airtable';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return { submissions };
};
