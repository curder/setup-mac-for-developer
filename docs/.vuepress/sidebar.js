module.exports = [
  {
    title: "软件安装",
    collapsable: false,
    children: prefix("install", ["home-brew", "iterm2", "browser", "oh-my-zsh"])
  },
  {
    title: "软件配置",
    collapsable: false,
    children: prefix("config", ["iterm2", "oh-my-zsh"])
  }
];

function prefix(prefix, children) {
  return children.map(child => `${prefix}/${child}`);
}
