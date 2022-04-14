# nvm | nrm 和 yarn

目前主流的 node 版本管理工具有两种，[nvm](https://github.com/creationix/nvm) 和 [n](https://github.com/tj/n)。 两者差异挺大的，具体分析可以参考一下淘宝 FED 团队的一篇文章：[管理 node 版本，选择 nvm 还是 n？](http://taobaofed.org/blog/2015/11/17/nvm-or-n/)。

这里选择 nvm 管理 node 版本。

## 安装 nvm

> **安装前请保证电脑已经正确安装并配置好了Oh-My-Zsh。**

安装可以参考[nvm](https://github.com/creationix/nvm)项目的 README 文档，可以在下面的命令二选一条在终端执行。

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
````

如果安装并配置好了 Oh-My-Zsh 终端的话，默认自动将对应的配置写入了 `~/.zshrc` 文件中，内容为：

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

可以通过命令 `source ~/.zshrc` 加载，或者重新打开一个终端。

> 执行上面的命令时请在用户家目录执行。进入用户家目录的命令为：`cd ~`，检查是否为用户家目录的命令 `pwd`，显示为：`~/你的用户名`。

## 简单使用 nvm

### 查看可供使用稳定版本

```bash
nvm ls-remote
```

> NodeJS 的版本发布很频繁，一般可以在[NodeJS 官网](https://nodejs.org/en/)看到 LTS 版本进行下载。

### 查看本地已经有的 NodeJS

```bash
nvm list
```

### 安装指定版本的 NodeJS

```bash
nvm install v16.13.0
```

### 指定默认的 NodeJS 版本

```bash
nvm alias default v16.13.0 # 指定默认的NodeJS版本
nvm use default
```
> 如果是切换不同版本的node，请确保对应的依赖已经安装，比如`yarn`，因为不同版本的node，对应的bin目录不一致，目录为：`~/.nvm/versions/node/v16.13.0/bin`。

### 查看系统当前使用的 NodeJS 版本

```bash
nvm current
```

> nvm管理的node安装的目录在 `~/.nvm/versions/node/` 下。

### 卸载指定的 NodeJS 版本

```bash
nvm uninstall v16.13.0 // 卸载v16.13.0
```

至此，nvm 相关的基本操作完成，更多的操作请查看[nvm](https://github.com/creationix/nvm)项目的 README 说明。

## [nrm](https://github.com/Pana/nrm)

`nrm` 是 `npm` 镜像仓库管理命令，可以帮助我们管理 `npm` 镜像资源的下载地址。

### 安装

```bash
npm install -g nrm
```

> 鉴于国内网络环境，如果下载速度慢或者下载失败，建议修改 npm 的从淘宝镜像地址下载资源，可以执行命令：`npm install -g nrm --registry=https://registry.npm.taobao.org/`

### 简单使用 nrm

#### 查看可用源

```bash
nrm ls
```
#### 使用指定源

```bash
nrm use taobao
```

#### 检查当前使用源

```bash
nrm current
```

> 此时，在 `~/.npmrc` 配置中自动配置：`registry=https://registry.npm.taobao.org/`

## 安装 yarn

[参考这里](https://yarn.bootcss.com/docs/install/#mac-stable)

```bash
npm -g install yarn
```

## 安装全局依赖

```bash
yarn global add cross-env live-server
```

#### 参考链接

- [node 版本管理工具 nvm-Mac 下安装及使用](https://segmentfault.com/a/1190000004404505)
