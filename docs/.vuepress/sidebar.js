module.exports = [
  {
    text: "软件安装",
    children: prefix("install", [
      "home-brew",
      "iterm2",
      "browser",
      "oh-my-zsh",
      "sublime-text-3",
      "phpstorm",
      "nvm",
      "php",
      "composer",
      "hub",
      "redis",
      "mkcert"
    ])
  },
  {
    text: "软件配置",
    children: prefix("config", [
      "home-brew",
      "iterm2",
      "oh-my-zsh",
      "composer",
      "git",
      "mkcert",
      "other"
    ])
  }
];

function prefix(prefix, children) {
  return children.map(child => `/${prefix}/${child}.md`);
}
