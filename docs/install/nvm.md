# 安装与使用 nvm | nrm 和 yarn

目前主流的 node 版本管理工具有两种，[nvm](https://github.com/creationix/nvm) 和 [n](https://github.com/tj/n)。 两者差异挺大的，具体分析可以参考一下淘宝 FED 团队的一篇文章：[管理 node 版本，选择 nvm 还是 n？](http://taobaofed.org/blog/2015/11/17/nvm-or-n/)。

## 安装 nvm

安装可以参考[nvm](https://github.com/creationix/nvm)项目的 README 文档，这里使用 curl 命令安装。

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.2/install.sh | bash
```

默认自动将对应的配置写入了`~/.zshrc`中，内容为：

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

## 简单使用 nvm

### 查看可供使用的 NodeJS

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
nvm install v10.16.3
```

### 指定默认的 NodeJS 版本

```bash
nvm alias default v10.16.3 # 指定默认的NodeJS版本
nvm use default
```

### 查看当前使用的 NodeJS 版本

```bash
nvm current
```

> NodeJS 安装的目录一般在`~/.nvm/versions/node`下。

### 卸载指定的 NodeJS 版本

```bash
nvm uninstall v10.16.3 // 卸载v10.16.3
```

### 查看本地安装的 NodeJS 版本

```bash
nvm list
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
brew install yarn --without-node
```

如果上面的命令安装缓慢或者无法安装可以使用 `npm -g install yarn`。

## 安装全局依赖

```bash
yarn global add cross-env live-server
```

#### 参考链接

- [node 版本管理工具 nvm-Mac 下安装及使用](https://segmentfault.com/a/1190000004404505)
