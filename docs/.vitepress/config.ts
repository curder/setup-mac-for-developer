import {defineConfig} from 'vitepress'

export default defineConfig({
    base: "/setup-mac-for-developer/",
    lang: "zh-CN",
    title: "MacOS 开发软件安装和配置",
    description: "Setup mac for PHP developer.",
    lastUpdated: true,
    themeConfig: {
        siteTitle: "MacOS 开发软件安装和配置",
        outlineTitle: "章节导航",
        lastUpdatedText: "最后更新时间",
        outline: 'deep',
        editLink: {
            pattern: "https://github.com/curder/setup-mac-for-developer/edit/master/docs/:path",
            text: '编辑它'
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/curder/setup-mac-for-developer'}
        ],
        nav: nav(),
        sidebar: {
            '/guide/': sidebarGuide(),
        },
    }
});

function nav() {
    return [
        {text: 'Guide', link: '/guide/install/homebrew', activeMatch: '/guide/install'},
        {
            text: 'More',
            items: [
                {text: 'Laravel 学习', link: 'https://curder.github.io/laravel-study/'}
            ]
        },
    ];
}

function sidebarGuide() {
    return [
        {
            text: '软件安装',
            collapsible: false,
            items: [
                {text: "Homebrew", link: '/guide/install/homebrew'},
                {text: "iTerm2", link: "/guide/install/iterm2"},
                {text: "浏览器", link: "/guide/install/browser"},
                {text: "Oh-My-Zsh", link: "/guide/install/oh-my-zsh"},
                {text: "Sublime Text 3", link: "/guide/install/sublime-text-3"},
                {text: "PHPStorm", link: "/guide/install/phpstorm"},
                {text: "nvm | nrm 和 yarn", link: "/guide/install/nvm"},
                {text: "PHP（可选）", link: "/guide/install/php"},
                {text: "Composer", link: "/guide/install/composer"},
                {text: "Hub", link: "/guide/install/hub"},
                {text: "Redis（可选）", link: "/guide/install/redis"},
                {text: "mkcert（可选）", link: "/guide/install/mkcert"},
                {text: "Apple M1 上安装 Homestead", link: "/guide/install/homestead-for-m1"},
            ]
        },
        {
            text: '软件配置',
            collapsible: false,
            items: [
                {text: "Homebrew 安装依赖", link: "/guide/config/homebrew"},
                {text: "配置 iTerm2", link: "/guide/config/iterm2"},
                {text: "配置 Oh-My-Zsh", link: "/guide/config/oh-my-zsh"},
                {text: "配置 Composer", link: "/guide/config/composer"},
                {text: "配置 Git", link: "/guide/config/git"},
                {text: "配置 mkcert", link: "/guide/config/mkcert"},
                {text: "其他", link: "/guide/config/other"},
            ]
        },
    ]
}
