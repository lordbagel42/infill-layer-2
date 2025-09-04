<script lang="ts">
	import type { PageProps } from './$types';
	import { Link } from '$lib/components/ui/link';

	let { data }: PageProps = $props();

	let submissions = data.submissions;
</script>

{#if submissions}
	<ul>
		{#each submissions as submission}
			<li>
				<Link href={`projects/${submission.id}`}>{submission.projectName}</Link>: {submission.description}
			</li>
		{/each}
	</ul>
{/if}
