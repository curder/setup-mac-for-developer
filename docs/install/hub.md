# 安装 Hub

Hub 是一个git的命令行拓展，针对于我们经常操作[GitHub](https://github.com)相关任务，例如：创建仓库、克隆仓库等，而无需离开终端。

```bash
brew install hub
```

## 检查是否安装

```bash
hub version
```

## 推荐配置

- 环境变量
将下面的语句添加到对应的bash配置中，比如：`~/.zshrc`
```bash
# hub integration
eval "$(hub alias -s)"
```
添加完成之后需要执行 `source ~/.zshrc` 重载配置文件或者重新打开终端。执行 `git --version` 命令看到输出末尾多出一行 hub 的版本信息。

- 配置授权

访问GitHub并登录，地址为：[https://github.com/settings/tokens](https://github.com/settings/tokens) ，选择 [Generate new token](https://github.com/settings/tokens/new) 创建一个新的授权token。在表单页面勾选赋予 **repo** 相关权限，如果需要删除仓库的权限需要勾选 **delete_repo** 选项。

将生成的token值写入到 `~/.config/hub`文件中, 格式如下：

```
github.com:
- user: curder
  oauth_token: {{GITHUB_TOKEN}}
  protocol: https
```

更多 [配置参考这里](https://hub.github.com/hub.1.html#configuration)。

## 简单使用

第一次使用命令操作仓库时，可能会需要需要输入用户名和密码的交互界面，请输入用户名，密码为：**上面得到的TOKEN**，后续则不需要重复用户名和密码的操作。

- 下载仓库
```bash
git clone curder/setup-mac-for-developer-src
```

- 创建仓库
```bash
git create curder/hub-demo
```

- 创建release
```bash
git release create 1.1.0
```
> 仓库当前仓库的 `release` 版本为`1.1.0`

更多hub相关命令操作可以查看[hub.github.com](https://hub.github.com/)
