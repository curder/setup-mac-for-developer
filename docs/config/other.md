# 其他

## 屏蔽新建窗口 last login 提示

```
touch ~/.hushlogin
```

## 添加命令行快捷方式

```
-='cd -'
...=../..
....=../../..
.....=../../../..
......=../../../../..

# git
ga='git add'
gaa='git add --all'
gam='git am'
gb='git branch'
gc='git commit -v'
gcb='git checkout -b'
gcd='git checkout develop'
gcm='git checkout master'
gcf='git config --list'
gco='git checkout'
gd='git diff'
gdca='git diff --cached'
gl='git pull'
gll='git log --graph --abbrev-commit --decorate --all --format=format:'\''%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(dim white) - %an%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n %C(white)%s%C(reset)'\'
gm='git merge'
gmd='git merge develop'
gp='git push'
gr='git remote'
gra='git remote add'
grb='git rebase'
gst='git status'
nah='git reset --hard;git clean -df'
wip='git add . && git commit -m WIP'
wipa='git add . && git commit --amend -m '\''WIP'\'

l='ls -lah'
la='ls -lAh'
ll='ls -lh'
ls='ls -G'
lsa='ls -lah'
lsof='sudo lsof -nP -iTCP -sTCP:LISTEN | grep '
md='mkdir -p'

p='vendor/bin/phpunit '
pf='vendor/bin/phpunit --filter '
tinker='php artisan tinker'
```

将上面的配置文件写入到 `~/.alias` 文件中，并在 `~/.zshrc` 中通过 `source ~/.alias` 的方式引入。

> 更多详情[参考这里](http://osxdaily.com/2010/06/22/remove-the-last-login-message-from-the-terminal/)
