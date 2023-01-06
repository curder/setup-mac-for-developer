# 安装 Homebrew

brew 的地址是：[brew zh-cn](https://brew.sh/index_zh-cn)

## 系统依赖

- 64 位的 CPU
- MacOSX 版本大于 10.12
- Xcode 的命令行工具 `xcode-select --install` [developer.apple.com/downloads](https://developer.apple.com/downloads) 或者 [Xcode](https://itunes.apple.com/us/app/xcode/id497799835)
- 使用 `bash` 或者 `zsh`

安装前可能涉及到需要安装`Xcode Command Line Tools`

在执行命令的时候会一直停留在这行提示上，`Downloading Command Line Tools (macOS High Sierra version 10.13) for Xcode`。需要耐心等待，如果失败了也可以在 Apple 官网下载`.dmg`文件进行安装。

![An image](images/homebrew/xcode-command-line-tools.png)

## 安装

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

执行上面的命令完成安装。

## 测试安装

这里安装 `wget` 命令为例：

```bash
brew install wget
```

针对Intel的CPU，Homebrew 会将软件包安装到独立目录，并将其文件软链接至 `/usr/local`。

而苹果自研ARM架构的CPU，Homebrew 会将软件包安装到独立的目录，并将其文件软链接至 `/opt/homebrew`。
