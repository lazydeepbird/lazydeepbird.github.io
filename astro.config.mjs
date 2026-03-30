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
			social: [{ icon: 'github', label: 'LazyDeepbird', href: 'https://lazydeepbird.github.io/' }],
			// 스타일 커스터마이징을 위한 CSS 파일 경로
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: '학습 요약',
					autogenerate: { directory: 'ai-specialist/01-n8n' },
				},
//				{
//					label: 'Guides',
//					items: [
//						// Each item here is one entry in the navigation menu.
//						{ label: 'Example Guide', slug: 'guides/example' },
//					],
//				},
//				{
//					label: 'Reference',
//					autogenerate: { directory: 'reference' },
//				},
			],
		}),
	],
});
