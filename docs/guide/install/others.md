# Others

## git

### 初始化用户信息

```bash
git config --global user.name <"John Doe">
git config --global user.email <johndoe@example.com>
```

> 其中 `<>` 里的内容根据实际情况变更为自己的用户名或邮箱。

参考 [Git 文档](https://git-scm.com/book/zh/v1/%E8%B5%B7%E6%AD%A5-%E5%88%9D%E6%AC%A1%E8%BF%90%E8%A1%8C-Git-%E5%89%8D%E7%9A%84%E9%85%8D%E7%BD%AE#%E7%94%A8%E6%88%B7%E4%BF%A1%E6%81%AF)

```bash
git config --list # 通过命令查看当前配置
```

### 配置 Git 全局忽略文件

- 忽略文件内容

  ```bash
  echo '# .gitignore_global
  ####################################
  ######## OS generated files ########
  ####################################
  .DS_Store
  .DS_Store?
  *.swp
  ._*
  .Spotlight-V100
  .Trashes
  # Icon?
  ehthumbs.db
  Thumbs.db
  .idea/
  node_modules
  .php_cs.cache
  .phpunit.result.cache
  __pycache__' > ~/.gitignore_global
  ```

  > 执行完上面的命令后，内容被保存到 `~/.gitignore_global`

- 执行命令使配置文件生效
  ```bash
  git config --global core.excludesfile ~/.gitignore_global
  ```

- 执行命令检查配置是否生效
  ```bash
  git config core.excludesfile
  ```

## 屏蔽新建窗口 last login 提示

```bash
touch ~/.hushlogin
```

> 更多详情[参考这里](http://osxdaily.com/2010/06/22/remove-the-last-login-message-from-the-terminal/)

## 启用简单密码

从 Mac 10.14 Mojave 开始，Mac 的密码就要求复杂，如果想设置简短一点的密码，可以使用下面的命令行终端命令开启它。

1. 打开终端，比如系统自带的 `Terminal` 或 `iTerm2`
2. 输入命令 `pwpolicy -clearaccountpolicies` 回车后输入当前密码
   > 如果执行完上面的命令后提示 `This tool does not update the login keychain password.`（比如 Mac 14.2 系统就会有这个提示）， 则可以根据提示中的命令 `security set-keychain-password` 执行并修改 KeyChain 的密码。
3. 显示 `Clearing global account policies` 提示表示成功启用
4. 输入 `passwd` 按回车来变更当前账户密码（MacOS 15 版本的系统使用 `security set-keychain-passwor` 命令更新密码）


## 设置新的主机名

```bash
sudo scutil --set HostName <new host name> # sudo scutil --set HostName mac-mini
```

## 设置本地网络上可用的名称

```bash
sudo scutil --set LocalHostName <new host name> # sudo scutil --set LocalHostName curder-mac-mini
```

## 更改计算机名称

这是在 Finder 中看到的用户友好的计算机名称，例如 myMac

```bash
sudo scutil --set ComputerName <new computer name> # sudo scutil --set ComputerName curder-mac-mini 
```

## 刷新 DNS 缓存

| MacOS 版本                     | 命令                                                                             |
|------------------------------|--------------------------------------------------------------------------------|
| MacOS 14 (Sonoma)            | <small>`sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder`</small> |
| MacOS 13 (Ventura)           | <small>`sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder`</small> |
| MacOS 12 (Monterey)          | <small>`sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder`</small> |
| MacOS 11 (Big Sur)           | <small>`sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder`</small> |
| MacOS 10.15 (Catalina)       | <small>`sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder`</small> |
| MacOS 10.14 (Mojave)	        | `sudo killall -HUP mDNSResponder`                                              |
| MacOS 10.13 (High Sierra)    | 	`sudo killall -HUP mDNSResponder`                                             |
| MacOS 10.12 (Sierra)	        | `sudo killall -HUP mDNSResponder`                                              |
| OS X 10.11 (El Capitan)	     | `sudo killall -HUP mDNSResponder`                                              |
| OS X 10.10 (Yosemite)        | 	`sudo discoveryutil udnsflushcaches`                                          |
| OS X 10.9 (Mavericks)        | 	`sudo killall -HUP mDNSResponder`                                             |
| OS X 10.8 (Mountain Lion)    | 	`sudo killall -HUP mDNSResponder`                                             |
| Mac OS X 10.7 (Lion)         | 	`sudo killall -HUP mDNSResponder`                                             |
| Mac OS X 10.6 (Snow Leopard) | 	`sudo dscacheutil -flushcache`                                                |
| Mac OS X 10.5 (Leopard)      | 	`sudo lookupd -flushcache`                                                    |
| Mac OS X 10.4 (Tiger)        | 	`lookupd -flushcache`                                                         |

## 添加命令行别名

将下面的配置文件写入到 `$HOME/.config/zsh/alias.zsh` 文件中，并在 `~/.zshrc` 中通过 `source $HOME/.config/zsh/alias.zsh` 的方式引入。

```bash
# paths
alias ...='../..'
alias ....='../../..'
alias .....='../../../..'
alias ......='../../../../..'

# git
alias ga='git add'
alias gaa='git add --all'
alias gam='git am'
alias gb='git branch'
alias gc='git commit -v'
alias gcb='git checkout -b'
alias gcd='git checkout develop'
alias gcm='git checkout master'
alias gcf='git config --list'
alias gco='git checkout'
alias gd='git diff'
alias gdca='git diff --cached'
alias gl='git pull'
alias gll='git log --graph --abbrev-commit --decorate --all --format=format:'\''%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(dim white) - %an%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n %C(white)%s%C(reset)'\'
alias gm='git merge'
alias gmd='git merge develop'
alias gp='git push'
alias gr='git remote'
alias gra='git remote add'
alias grb='git rebase'
alias gst='git status'
alias nah='git reset --hard;git clean -df'
alias wip='git add . && git commit -m WIP'
alias wipa='git add . && git commit --amend -m '\''WIP'\'

alias l='ls -lah'
alias la='ls -lAh'
alias ll='ls -lh'
alias ls='ls -G'
alias lsa='ls -lah'
alias lsof='sudo lsof -nP -iTCP -sTCP:LISTEN | grep '
alias md='mkdir -p'

alias updatedb='sudo /usr/libexec/locate.updatedb'
alias refreshdns='sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder'

# For PHP
## For Laravel
alias tinker='php artisan tinker'
alias artisan='php artisan '
alias sail='bash ./vendor/bin/sail'
alias php74ssh='php74 artisan deploy:run ssh'

## Ipinfo.io
alias getip='curl https://ipinfo.io/'

# Proxy
alias proxy="export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890"
alias unproxy="unset http_proxy;unset https_proxy;unset all_proxy"

# Zzz
alias z="Zzz"
alias zz="Zzz"
alias zzz="Zzz"
```

```bash
echo "# Aliases" >> ~/.zshrc

echo '[ -f "$HOME/.config/zsh/alias.zsh" ] && source "$HOME/.config/zsh/alias.zsh"' >> ~/.zshrc

source ~/.zshrc # 重载配置
```


## 添加命令行方法

将下面的配置文件写入到 `$HOME/.config/zsh/functions.zsh` 文件中，并在 `~/.zshrc` 中通过 `source $HOME/.config/zsh/functions.zsh` 的方式引入。

```bash
# phpUnit or pest test
function p() {
    if [ -f vendor/bin/pest ]; then
       vendor/bin/pest "$@"
    else
       vendor/bin/phpunit "$@"
    fi
}

function pf() {
    if [ -f vendor/bin/pest ]; then
       vendor/bin/pest --filter "$@"
    else
       vendor/bin/phpunit --filter "$@"
    fi
}
```


```bash
echo "# Functions" >> ~/.zshrc
echo '[ -f "$HOME/.config/zsh/functions.zsh" ] && source "$HOME/.config/zsh/functions.zsh"' >> ~/.zshrc

source ~/.zshrc # 重载配置
```
