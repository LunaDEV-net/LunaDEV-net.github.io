/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector',
	theme: {
		extend: {
			fontFamily: {
				// Standard JetBrains Mono Fonts
				jetbrains: [
					'JetBrainsMono-Regular', 'JetBrainsMono', 'monospace',
				],
				jetbrainsBold: [
					'JetBrainsMono-Bold', 'JetBrainsMono', 'monospace',
				],
				jetbrainsItalic: [
					'JetBrainsMono-Italic', 'JetBrainsMono', 'monospace',
				],
				jetbrainsLight: [
					'JetBrainsMono-Light', 'JetBrainsMono', 'monospace',
				],
				jetbrainsThin: [
					'JetBrainsMono-Thin', 'JetBrainsMono', 'monospace',
				],
				jetbrainsExtraLight: [
					'JetBrainsMono-ExtraLight', 'JetBrainsMono', 'monospace',
				],
				jetbrainsMedium: [
					'JetBrainsMono-Medium', 'JetBrainsMono', 'monospace',
				],
				jetbrainsSemiBold: [
					'JetBrainsMono-SemiBold', 'JetBrainsMono', 'monospace',
				],
				jetbrainsExtraBold: [
					'JetBrainsMono-ExtraBold', 'JetBrainsMono', 'monospace',
				],

				// JetBrains Mono NL Fonts (narrow)
				jetbrainsNL: [
					'JetBrainsMonoNL-Regular', 'JetBrainsMonoNL', 'monospace',
				],
				jetbrainsNLBold: [
					'JetBrainsMonoNL-Bold', 'JetBrainsMonoNL', 'monospace',
				],
				jetbrainsNLItalic: [
					'JetBrainsMonoNL-Italic', 'JetBrainsMonoNL', 'monospace',
				],
				jetbrainsNLLight: [
					'JetBrainsMonoNL-Light', 'JetBrainsMonoNL', 'monospace',
				],
				jetbrainsNLThin: [
					'JetBrainsMonoNL-Thin', 'JetBrainsMonoNL', 'monospace',
				],
				jetbrainsNLExtraLight: [
					'JetBrainsMonoNL-ExtraLight', 'JetBrainsMonoNL', 'monospace',
				],
				jetbrainsNLMedium: [
					'JetBrainsMonoNL-Medium', 'JetBrainsMonoNL', 'monospace',
				],
				jetbrainsNLSemiBold: [
					'JetBrainsMonoNL-SemiBold', 'JetBrainsMonoNL', 'monospace',
				],
				jetbrainsNLExtraBold: [
					'JetBrainsMonoNL-ExtraBold', 'JetBrainsMonoNL', 'monospace',
				],
			},
			colors: {
				nord: {
					"0": "#2e3440", // polar night
					"1": "#3b4252", // polar night
					"2": "#434c5e", // polar night
					"3": "#4c566a", // polar night
					"4": "#d8dee9", // snow storm
					"5": "#e5e9f0", // snow storm
					"6": "#eceff4", // snow storm
					"7": "#8fbcbb", // frost
					"8": "#88c0d0", // frost
					"9": "#81a1c1", // frost
					"10": "#5e81ac", // frost
					"11": "#bf616a", // red
					"12": "#d08770", // orange
					"13": "#ebcb8b", // yellow
					"14": "#a3be8c", // green
					"15": "#b48ead", // purple
				},
			},
		},
	},
	plugins: [],
}
