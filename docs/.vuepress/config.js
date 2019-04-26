module.exports = {
  title: "Mac开发软件安装",
  description: "",
  base: "/",
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
