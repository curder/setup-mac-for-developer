# 其他

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
4. 输入 `passwd` 按回车来变更当前账户密码


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

```bash
dscacheutil -flushcache
```

## 添加命令行别名

将下面的配置文件写入到 `~/.alias` 文件中，并在 `~/.zshrc` 中通过 `source ~/.alias` 的方式引入。

```bash
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

# For PHP
## For Laravel
alias tinker='php artisan tinker'
alias artisan='php artisan '
alias sail='bash ./vendor/bin/sail'
alias php74ssh='php74 artisan deploy:run ssh'

## Ipinfo.io
alias getip='curl https://ipinfo.io'
```

```bash
echo "# command alias" >> ~/.zshrc
echo "source ~/.alias" >> ~/.zshrc

source ~/.zshrc # 重载配置
```


## 添加命令行方法

将下面的配置文件写入到 `~/.functions` 文件中，并在 `~/.zshrc` 中通过 `source ~/.functions` 的方式引入。

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
echo "# command functions" >> ~/.zshrc
echo "source ~/.functions" >> ~/.zshrc

source ~/.zshrc # 重载配置
```