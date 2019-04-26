module.exports = {
  base: "/setup-mac-for-developer/",
  title: "Mac开发软件安装",
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
