import type { ExpoConfig } from 'expo/config'

const OWNER = 'mariuzm'
const BUNDLE_IDENTIFIER = 'com.mariuz.metestapp'
const NAME = 'Test App'
const SLUG = 'test-app'

const VERSION = '1.0.0'

const BACKGROUND_COLOR = '#cacaca'

export default (): ExpoConfig => {
	return {
		owner: OWNER,
		name: NAME,
		slug: SLUG,
		scheme: SLUG,
		version: VERSION,
		orientation: 'portrait',
		icon: './assets/icon.png',

		userInterfaceStyle: 'dark',

		experiments: {
			typedRoutes: true,
		},

		backgroundColor: BACKGROUND_COLOR,

		splash: {
			backgroundColor: BACKGROUND_COLOR,
		},

		assetBundlePatterns: ['**/*'],
		platforms: ['ios', 'android'],

		ios: {
			bundleIdentifier: BUNDLE_IDENTIFIER,
			runtimeVersion: VERSION,
			supportsTablet: false,
			infoPlist: {
				CADisableMinimumFrameDurationOnPhone: true,
			},
			config: {
				usesNonExemptEncryption: false,
			},
		},

		android: {
			package: BUNDLE_IDENTIFIER,
			adaptiveIcon: {
				foregroundImage: './assets/adaptive-icon.png',
				backgroundColor: '#ffffff',
			},
		},

		plugins: ['expo-router'],

		extra: {
			eas: {
				projectId: '',
			},
		},

		updates: {
			enabled: false,
			checkAutomatically: 'NEVER',
			fallbackToCacheTimeout: 0,
		},
	}
}
