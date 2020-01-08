# 安装与使用 nvm | smart-npm 和 yarn

目前主流的 node 版本管理工具有两种，[nvm](https://github.com/creationix/nvm) 和 [n](https://github.com/tj/n)。 两者差异挺大的，具体分析可以参考一下淘宝 FED 团队的一篇文章：[管理 node 版本，选择 nvm 还是 n？](http://taobaofed.org/blog/2015/11/17/nvm-or-n/)。

## 安装 nvm

安装可以参考[nvm](https://github.com/creationix/nvm)项目的 README 文档，这里使用 curl 命令安装。

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.2/install.sh | bash
```

默认自动将对应的配置写入了`~/.zshrc`中，内容为：

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

## 简单使用 nvm

### 查看可供使用的 NodeJS

```
nvm ls-remote
```

> NodeJS 的版本发布很频繁，一般可以在[NodeJS 官网](https://nodejs.org/en/)看到 LTS 版本进行下载。

### 查看本地已经有的 NodeJS

```
nvm list
```

### 安装指定版本的 NodeJS

```
nvm install v10.16.3
```

### 指定默认的 NodeJS 版本

```
nvm alias default v10.16.3 # 指定默认的NodeJS版本
nvm use default
```

### 查看当前使用的 NodeJS 版本

```
nvm current
```

> NodeJS 安装的目录一般在`~/.nvm/versions/node`下。

### 卸载指定的 NodeJS 版本

```
nvm uninstall v10.16.3 // 卸载v10.16.3
```

### 查看本地安装的 NodeJS 版本

```
nvm list
```

至此，nvm 相关的基本操作完成，更多的操作请查看[nvm](https://github.com/creationix/nvm)项目的 README 说明。

## smart-npm

### 安装

```
npm install --global smart-npm --registry=https://registry.npm.taobao.org/
```

### 配置

在 `~/.zshrc`这个配置文件中添加别名。

```
echo "alias npm=smart-npm" >> ~/.zshrc
```

重新打开一个终端应该就能看到`smart-npm`安装在了系统里。

### 卸载

```
npm uninstall --global smart-npm
```

> 成功卸载 `smart-npm` 安装包的同时需要将 `~/.zshrc` 里的 `alias npm=smart-npm` 一并删除。

更多 `smart-npm` 的使用[参考这里](https://github.com/qiu8310/smart-npm)。

## 安装 yarn

[参考这里](https://yarn.bootcss.com/docs/install/#mac-stable)

```
brew install yarn --without-node
```

如果上面的命令安装缓慢或者无法安装可以使用 `npm -g install yarn`。

#### 参考链接

- [node 版本管理工具 nvm-Mac 下安装及使用](https://segmentfault.com/a/1190000004404505)
