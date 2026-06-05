# PHP（可选）{#php}

::: warning 注意
**如果选择使用 [MAMP](https://www.mamp.info/en/mamp-pro/mac/)、[Herd](https://herd.laravel.com/)、[Homestead](https://laravel.com/docs/master/homestead) 或 [Sail](https://laravel.com/docs/master/sail) 作为开发环境的话，可以不使用这种方式单独安装 PHP。**
:::

## 安装 [homebrew-php](https://github.com/shivammathur/homebrew-php) Tap {#homebrew-php-tap}

```shell
brew tap shivammathur/php
```

## 搜索当前可用php版本
```shell
brew search php

==> Formulae
brew-php-switcher     php-cs-fixer          php@8.3               phpbrew               phpstan               pcp (disabled)
php                   php@8.1 (deprecated)  php@8.4               phpmd (disabled)      phpunit               pyp
php-code-sniffer      php@8.2               phpantom-lsp          phpmyadmin            pop
```

## 安装指定版本php {#install-specified-php-version}

这里以 `PHP 8.4` 为例。

```shell
brew install php@8.4
```

也可以安装其他版本的 PHP，比如再安装一个 `PHP 8.2`

```shell
brew install php@8.2
```

## PHP 扩展 {#php-extensions}

安装 [shivammathur/extensions](https://github.com/shivammathur/homebrew-extensions)
```shell
brew tap shivammathur/extensions
```

### [mcrypt](https://pecl.php.net/package/mcrypt) {#mcrypt-extension}

这里选择使用 [pecl](https://pecl.php.net) 进行安装，安装前先使用 `brew install mcrypt` 再 MacOS 上安装 mcrypt。

确定本机 `pecl` 可执行文件所在路径，比如在 Apple M1 电脑上给 `PHP 8.1` 安装 `mcrypt` 扩展，`pecl` 可执行命令 所在路径大概是：`/opt/homebrew/opt/php@8.1/bin/pecl`

```shell
# 搜索要安装的扩展包
/opt/homebrew/opt/php@8.1/bin/pecl search mcrypt

# 安装
arch -arm64 sudo /opt/homebrew/opt/php@8.1/bin/pecl install redis
# 在安装的过程中需要提供 libmcrypt 前缀
# 可以通过 `locate libmcrypt` 获取
## Apple M1 系统上的路径是 `/opt/homebrew/opt/libmcrypt`
## Intel 系统上的路径是 `/usr/local/opt/libmcrypt`

### 直到编译完毕后出现下面的提示 ###
# Build process completed successfully
# Installing '/opt/homebrew/Cellar/php@8.1/8.1.13/pecl/20210902/mcrypt.so'
# install ok: channel://pecl.php.net/mcrypt-1.0.5
# Extension mcrypt enabled in php.ini

# 配置
## 默认情况 php 的默认配置文件中已经加载了 `mcrypt.so` 扩展，也可以这部分配置将它们放在 conf.d/ 目录下统一管理
## 新建一个配置文件 /opt/homebrew/etc/php/8.1/conf.d/ext-mcrypt.ini

echo <<EOT >> /opt/homebrew/etc/php/8.1/conf.d/ext-mcrypt.ini
[mcrypt]
extension=mcrypt.so
EOT

# 检查
php -m |grep mcrypt
```

### [yaml](https://pecl.php.net/package/yaml) {#yaml-extension}

这里选择使用 [pecl](https://pecl.php.net) 进行安装，安装前先使用 `brew install libyaml` 再 MacOS 上安装 libyaml。

确定本机 `pecl` 可执行文件所在路径，比如在 Apple M1 电脑上给 `PHP 8.2` 安装 `libyaml` 扩展，`pecl` 可执行命令 所在路径大概是：`/opt/homebrew/opt/php@8.2/bin/pecl`

```shell
# 搜索要安装的扩展包
/opt/homebrew/opt/php@8.2/bin/pecl search yaml 

# 安装
/opt/homebrew/opt/php@8.2/bin/pecl install yaml
# 在安装的过程中需要提供 libyaml 前缀
# 可以通过 `locate libyaml` 获取
## Apple M1 系统上的路径是 `/opt/homebrew/opt/libyaml`
## Intel 系统上的路径是 `/usr/local/opt/libyaml`

### 直到编译完毕后出现下面的提示 ###
# Build process completed successfully
# Installing '/opt/homebrew/Cellar/php/8.2.1/pecl/20220829/yaml.so'
# install ok: channel://pecl.php.net/yaml-2.2.2
# Extension yaml enabled in php.ini

# 配置
## 默认情况 php 的默认配置文件中已经加载了 `yaml.so` 扩展，也可以这部分配置将它们放在 conf.d/ 目录下统一管理
## 新建一个配置文件 /opt/homebrew/etc/php/8.2/conf.d/ext-yaml.ini

echo <<EOT >> /opt/homebrew/etc/php/8.2/conf.d/ext-yaml.ini
[yaml]
extension=yaml.so
EOT

# 检查
php -m |grep yaml
```

### [redis](https://pecl.php.net/package/redis) {#redis-extension}

选择使用源代码的方式安装最新版 `5.3.7` 的 [redis 扩展](https://pecl.php.net/package/redis)。

下面以 PHP 8.2 安装 redis 扩展为例。

1. 使用 `wget` 下载 `redis-5.3.7.tgz` 压缩包

    ```shell
    wget https://pecl.php.net/get/redis-5.3.7.tgz
    ```

2. 解压并进入到目录

    ```shell
    tar xf redis-5.3.7.tgz && cd redis-5.3.7
    ```
   
3. 执行 `phpize` （根据当前 PHP 版本不同找到对应的可执行文件 `phpize` ）

    ```shell
    /opt/homebrew/opt/php@8.2/bin/phpize # M1
    /usr/local/Cellar/php/8.2.3/bin/phpize # Intel
    # 执行完毕之后当前目录下生成 configure 文件
    ```

4. 配置（根据当前 PHP 版本不同找到对应的可执行文件 `php-config`）

   ```
   ./configure --with-php-config=/opt/homebrew/opt/php@8.2/bin/php-config # M1
   ./configure --with-php-config=/usr/local/Cellar/php/8.2.3/bin/php-config # Intel
   ```

5. 执行安装

    ```shell
    make && make install
    ```

6. 添加扩展
   ```shell
    echo <<EOT >> /opt/homebrew/etc/php/8.2/conf.d/ext-redis.ini
    [redis]
    extension=redis.so
    EOT
    ```

7. 检查

   ```shell
   php -m |grep redis
   ```


## [brew-php-switcher](https://github.com/philcook/brew-php-switcher) {#brew-php-switcher}

### 安装 {#install-brew-php-switcher}

```shell
brew install brew-php-switcher
```

### 检查 {#check-brew-php-switcher}
```shell
brew search brew-php-switcher

# ==> Formulae
# brew-php-switcher ✔
```

### [valet](https://laravel.com/docs/master/valet)可选 {#valet-option}

```shell
brew-php-switcher 8.2 -c=valet
```
