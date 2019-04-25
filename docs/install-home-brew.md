# 安装 Homebrew

brew 的地址是：[brew zh-cn](https://brew.sh/index_zh-cn)

## 系统依赖

- 64 位的 CPU
- MacOSX 版本大于 10.12
- Xcode 的命令行工具 `xcode-select --install` [developer.apple.com/downloads](https://developer.apple.com/downloads) 或者 [Xcode](https://itunes.apple.com/us/app/xcode/id497799835)
- 使用 `bash` 或者 `zsh`

## 安装

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

执行上面的命令完成安装，如果在

## 测试安装

这里安装 `wget` 命令为例：

```
brew install wget
```

Homebrew 会将软件包安装到独立目录，并将其文件软链接至 `/usr/local`
