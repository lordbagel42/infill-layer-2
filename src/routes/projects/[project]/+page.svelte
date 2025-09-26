<script lang="ts">
	import { marked } from 'marked';
	import '../../../markdown.css';
	import type { PageProps } from './$types';
	import { onMount } from 'svelte';
	import fm from 'front-matter';
	import DOMPurify from 'isomorphic-dompurify';

	let { data }: PageProps = $props();

	const project = $derived(data.project);

	let markdown = $state();
	let frontmatter = $state();

	onMount(async () => {
		if (!project.githubLink) {
			markdown = '<p>No project found.</p>';
			return;
		}
		const rawUrlBase =
			project.githubLink.replace('github.com', 'raw.githubusercontent.com') + '/main/';
		const response = await fetch(rawUrlBase + 'JOURNAL.md');
		const text = await response.text();

		const content = fm<any>(text);
		frontmatter = content.attributes;

		const fixedBody = content.body.replace(
			/!\[([^\]]*)\]\((?!https?:\/\/)([^)]+)\)/g,
			(_, alt, relPath) => {
				const absolute = rawUrlBase + relPath;
				console.log(`Replacing ![${alt}](${relPath}) with ![${alt}](${absolute})`);
				return `![${alt}](${absolute})`;
			}
		);

		markdown = DOMPurify.sanitize(await marked(fixedBody));
	});
</script>

<svelte:boundary>
	<article class="markdown">
		{@html markdown}
	</article>
	{#snippet pending()}
		<p>loading...</p>
	{/snippet}
</svelte:boundary>
