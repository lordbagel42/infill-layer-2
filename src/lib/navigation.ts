import type { Component } from 'svelte';

export type NavItem = {
	title: string;
	href?: string;
	disabled?: boolean;
	external?: boolean;
	label?: string;
	icon?: Component;
};

export const mainNavItems: NavItem[] = [
	{
		title: 'Projects',
		href: '/projects'
	},
	{
		title: 'Resources',
		href: '/resources'
	}
];
