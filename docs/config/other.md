# 其他

## 屏蔽新建窗口 last login 提示

```bash
touch ~/.hushlogin
```

## 添加命令行快捷方式

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

alias p='vendor/bin/phpunit '
alias pf='vendor/bin/phpunit --filter '
alias tinker='php artisan tinker'
```

```bash
echo "# command alias" >> ~/.zshrc
echo "source ~/.alias" >> ~/.zshrc

source ~/.zshrc # 重载配置
```

将上面的配置文件写入到 `~/.alias` 文件中，并在 `~/.zshrc` 中通过 `source ~/.alias` 的方式引入。

> 更多详情[参考这里](http://osxdaily.com/2010/06/22/remove-the-last-login-message-from-the-terminal/)
