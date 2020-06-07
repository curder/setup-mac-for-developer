## 安装 Composer

## 安装命令

```
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === 'e0012edf3e80b6978849f5eff0d4b4e4c79ff1609dd1e613307e16318854d24ae64f26d17af3ef0bf7cfb710ca74755a') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

> See: [getcompose v1.10.7](https://getcomposer.org/download/)

## 移动到全局 bin 路径

```
sudo mv composer.phar /usr/local/bin/composer
```

> 通过上面的命令将可执行文件 composer 移动到全局 bin 路径

![](./../assets/install/show-composer-install-info.png)

## 将 Composer 包关联的命令添加到 bin

```
export PATH="$PATH:$HOME/.composer/vendor/bin" # MacOSX 配置

sudo echo 'export PATH="$PATH:$HOME/.config/composer/vendor/bin"' >> /etc/profile # CentOS 配置
```
