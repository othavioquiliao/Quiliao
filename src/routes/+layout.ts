import type { Config } from '@sveltejs/adapter-vercel';

export const config: Config = {
	runtime: 'nodejs20.x',
	regions: ['gru1', 'nyc1']
};
