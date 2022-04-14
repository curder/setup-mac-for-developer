# Oh-My-Zsh

Oh-My-Zsh 的默认配置在 `~/.zshrc` 文件中配置可以配置，修改默认的基本配置。

> **注意：** 如果配置文件 `~/.zshrc` 不存在则通过手动创建它，默认的配置文件在 [github.com/ohmyzsh/ohmyzsh/blob/templates/zshrc.zsh-template](https://github.com/ohmyzsh/ohmyzsh/blob/master/templates/zshrc.zsh-template)。

```bash
export ZSH=$HOME/.oh-my-zsh
ZSH_THEME="robbyrussell"
plugins=(git autojump zsh-autosuggestions) # 开启常用插件,其中 git 是默认自带，其他两个插件的安装在下面有介绍
source $ZSH/oh-my-zsh.sh

export UPDATE_ZSH_DAYS=30 # 30天检查更新 zsh 并提示是否更新
HIST_STAMPS="yyyy-mm-dd"  # 历史记录时间格式
export LANG=en_US.UTF-8   # 语言
```

## 插件管理

### 插件配置

插件的配置很简单，只需要找到配置文件 `~/.zshrc` 中的配置项 `plugins=()` 的 `()` 中添加上插件名称即可。

例如添加插件 `git` 则是 `plugins=(git)`，多个插件使用**空格**隔开。

> Oh-My-Zsh 自带的插件一般放置在目录 `~/.oh-my-zsh/plugins` 目录下，而通过互联网我们也可以下载更多的插件一般放置在 `~/.oh-my-zsh/custom/plugins` 目录下。

Oh-My-Zsh 默认开启了 `git` 插件，提供了大量 `git` 别名，具体用法参见 [GitHub 地址](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git/)

### 安装 autojump 插件

[autojump](https://github.com/wting/autojump) 是一个命令行工具，它允许用户可以直接跳转到常用的目录，而不用管用户现在身在何处。

```bash
brew install autojump
```

> 更多使用[查看这里](https://curder.github.io/blog/others/how-to-use-autojump-plugin.html)

### 安装 autosuggestions 插件

[zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) 是一款根据命令历史输入时的命令进行输入提示的插件。

```bash
git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
```

### 其他插件

Oh-My-Zsh 的强大之处是安装各种插件加速命令行终端的体验，更多插件相关的安装和使用请[查看这里](https://github.com/curder/blog/blob/master/docs/others/oh-my-zsh-common-plugins.md)。

## 手动升级 Oh-My-Zsh

执行下面的命令手动升级

```bash
upgrade_oh_my_zsh
```

## 卸载 Oh-My-Zsh

如果想卸载 Oh-My-Zsh, 从命令行运行下面的命令， 将删除本身和恢复系统以前的 `bash` 或者 `zsh` 配置。

```bash
uninstall_oh_my_zsh zsh
```
