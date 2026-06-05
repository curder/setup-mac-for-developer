import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'

export default defineConfig({
    base: '/setup-mac-for-developer/',
    lang: 'zh-CN',
    title: 'MacOS 开发软件安装和配置',
    description: 'Setup mac for PHP developer.',
    lastUpdated: true,
    themeConfig: {
        siteTitle: 'MacOS 开发软件安装和配置',
        lastUpdated: {
            text: '最后更新时间',
        },
        outline: {
            label: '章节导航',
            level: 'deep',
        },
        editLink: {
            pattern: 'https://github.com/curder/setup-mac-for-developer/edit/master/docs/:path',
            text: '编辑它',
        },
        socialLinks: [{ icon: 'github', link: 'https://github.com/curder/setup-mac-for-developer' }],
        nav: [
            { text: 'Guide', link: '/guide/install/homebrew', activeMatch: '/guide/install' },
            {
                // text: 'More',
                items: [
                    { text: 'Laravel 学习', link: 'https://curder.github.io/laravel-study/' },
                    { text: 'Python 学习', link: 'https://curder.github.io/python-study/' },
                    { text: 'Scrapy 学习', link: 'https://curder.github.io/scrapy-study/' },
                    { text: 'Yaml 学习', link: 'https://curder.github.io/yaml-study/' },
                ],
            },
        ],
        sidebar: {
            '/guide/': sidebarGuide(),
        },
    } satisfies DefaultTheme.Config,
})

function sidebarGuide(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '',
            collapsed: false,
            items: [
                { text: '1. Homebrew', link: '/guide/install/homebrew' },
                { text: '2. iTerm2', link: '/guide/install/iterm2' },
                { text: '3. Oh-My-Zsh', link: '/guide/install/oh-my-zsh' },
                { text: '4. Browsers', link: '/guide/install/browser' },
                { text: '5. Editor', link: '/guide/install/editor' },
                { text: '6. Herd', link: '/guide/install/herd' },
                { text: '7. Database', link: '/guide/install/database' },
                { text: '8. Others', link: '/guide/install/others' },
            ],
        },
        {
            text: '选装',
            collapsed: true,
            items: [
                { text: 'PHP', link: '/guide/optional/php' },
                { text: 'Node', link: '/guide/optional/nvm' },
                { text: 'Composer', link: '/guide/optional/composer' },
                { text: 'Hub', link: '/guide/optional/hub' },
                { text: 'mkcert', link: '/guide/optional/mkcert' },
                { text: 'Homestead', link: '/guide/optional/homestead-for-m1' },
            ],
        },
    ]
}