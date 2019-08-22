module.exports = [
  {
    title: "软件安装",
    collapsable: false,
    children: prefix("install", [
      "home-brew",
      "iterm2",
      "browser",
      "oh-my-zsh",
      "sublime-text-3",
      "phpstorm",
      "nvm",
      "composer",
      "redis"
    ])
  },
  {
    title: "软件配置",
    collapsable: false,
    children: prefix("config", [
      "iterm2",
      "oh-my-zsh",
      "composer",
      "git",
      "other"
    ])
  }
];

function prefix(prefix, children) {
  return children.map(child => `${prefix}/${child}`);
}
