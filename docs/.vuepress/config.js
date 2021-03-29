module.exports = {
  base: "/setup-mac-for-developer/",
  title: "MacOSX开发软件配置",
  description: "",
  themeConfig: {
    repo: 'curder/setup-mac-for-developer',
    editLinks: true,
    editLinkText: "编辑页面",
    // docsRepo: 'https://github.com/curder/setup-mac-for-developer',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/-/edit/:branch/:path',
    displayAllHeaders: false,
    sidebarDepth: 2,
    lastUpdated: true,
    lastUpdatedText: '最后更新时间',
    contributors: true,
    contributorsText: '贡献者列表',
    nav: [{ text: "README", link: "/" }],
    sidebar: {
      "/": require("./sidebar")
    }
  }
};
