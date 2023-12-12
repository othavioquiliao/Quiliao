import type { Config } from '@sveltejs/adapter-vercel';

export const config: Config = {
	runtime: 'nodejs18.x',
	regions: ['gru1', 'nyc1']
};
