// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// GitHub Pages 주소
	site: 'https://lazydeepbird.github.io', 
	// 루트 경로를 사용
	// base: '/',
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: '학습 요약',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'n8n 완벽 가이드', slug: 'ai-specialist/01-n8n/n8n-perfect-guide' },
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
