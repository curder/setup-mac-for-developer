module.exports = {
  base: "/setup-mac-for-developer/",
  title: "MacOSX开发软件配置",
  description: "",
  themeConfig: {
    editLinks: false,
    displayAllHeaders: false,
    sidebarDepth: 2,
    nav: [{ text: "README", link: "/" }],
    sidebar: {
      "/": require("./sidebar")
    }
  }
};
