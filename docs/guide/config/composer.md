# Composer

## Composer 源管理工具 [CRM](https://github.com/slince/composer-registry-manager)

### 安装

```bash
composer global require slince/composer-registry-manager
```

- 如果在安装的时候比较慢，可以使用命令临时使用 aliyun 镜像来安装。
    ```bash
    composer config -g repos.packagist composer https://mirrors.aliyun.com/composer
    ```

- 如果需要还原镜像使用命令
  ```bash
  composer config -g repo.packagist composer https://packagist.org
  ```

通过上面的命令，可以得到命令 `composer repo`

![](images/composer/repository-manager-info.png)

### 配置 [CRM](https://github.com/slince/composer-registry-manager)

```bash
composer repo:use aliyun
```

> 通过上面的命令配置镜像地址为 `aliyun`

```bash
composer repo:ls # 查看所有镜像地址

composer repo:use $Mirror # 在列表中选择镜像地址，其中 $Mirror 为列表项
```

![](images/composer/repository-manager-select-aliyun.png)

至此，[CRM](https://github.com/slince/composer-registry-manager) 安装完毕。

### 安装报错

```
Peer's certificate issuer has been marked as not trusted by the user.
```

在安装的过程中 报错：[Peer's certificate issuer has been marked as not trusted by the user.](https://discuss.devopscube.com/t/solved-git-github-peers-certificate-issuer-has-been-marked-as-not-trusted-by-the-user/474)

```bash
git config --global http.sslVerify false
```

> 通过设置上面的 git 配置，可以忽略 ssl 的检查。

## 多线程下载 [hirak/prestissimo](https://github.com/hirak/prestissimo)

```bash
composer global require hirak/prestissimo
```

## 自动部署工具 [deployer/deployer](https://github.com/deployphp/deployer)

```bash
composer global require deployer/deployer deployer/recipes curder/deployphp-recipes --no-progress --profile --prefer-dist
```

```bash
composer global require phpunit/phpunit laravel/installer friendsofphp/php-cs-fixer squizlabs/php_codesniffer --no-progress --profile --prefer-dist
```

## 下载全局命令

```bash
composer global require laravel/installer -vvv
```
