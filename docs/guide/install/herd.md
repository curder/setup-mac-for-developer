# Herd

Herd 是一款速度超快的原生 Laravel 和 PHP 开发环境，适用于 macOS。它提供了开始使用 Laravel 开发所需的一切。它附带 PHP、nginx、dnsmasq、laravel、composer 和 Node.js。

## 安装

要安装 Herd，请打开终端并运行以下命令：

```bash
brew install --cask herd

# 或者使用下面的命令
/bin/bash -c "$(curl -fsSL https://php.new/install/mac)"
```

安装完成并启动 Herd，支持如下可执行脚本：

```bash
php --version
laravel --version
composer --version
node --version
```

更多用法和配置可以参考[官方文档](https://herd.laravel.com/docs)。

## 一些配置

### Composer

```bash
# 使用阿里云镜像
composer config -g repos.packagist composer https://mirrors.aliyun.com/composer

# 还原官方镜像
composer config -g repo.packagist composer https://packagist.org
```
