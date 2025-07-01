import { dirname, join } from 'path'
import type { StorybookConfig } from '@storybook/web-components-vite'

const config: StorybookConfig = {
    stories: [
        '../src/components/**/*.mdx',
        '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: [
        getAbsolutePath('@storybook/addon-links'),
        getAbsolutePath('@storybook/addon-essentials'),
    ],
    framework: {
        name: getAbsolutePath('@storybook/web-components-vite'),
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    // staticDirs: ['../../../assets'],
}
export default config

function getAbsolutePath(value: string): any {
    return dirname(require.resolve(join(value, 'package.json')))
}
