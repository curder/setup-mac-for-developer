# 安装 Composer

> **注意：** 执行安装命令前保证 PHP 已经安装到电脑并放在对应的 bin 目录下。
>
>在终端执行 `php --version`，可以查看PHP版本，这里建议使用 [PHP 8.1](https://www.php.net/releases/8.1/zh.php) 作为面向未来的语言版本。

## 安装命令

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

> See: [getcompose v1.10.7](https://getcomposer.org/download/)

## 移动到全局 bin 路径

```bash
sudo mv composer.phar /usr/local/bin/composer
```

> 通过上面的命令将可执行文件 composer 移动到全局 bin 路径



默认情况下安装的 composer 为 `2.1.11` 的版本。切换到 `1.10.23`

```bash
composer self-update --1
```

检查并确定下版本

```bash
composer -V # 查看当前composer版本
```

## 将 Composer 包关联的命令添加到 bin

```bash
export PATH="$PATH:$HOME/.composer/vendor/bin" # MacOSX 配置到 `~/.zshrc` 文件

export PATH="$PATH:$HOME/.config/composer/vendor/bin" # CentOS 配置到 `/etc/profile` 文件
```
