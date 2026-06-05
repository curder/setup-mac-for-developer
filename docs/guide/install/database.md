# Database

数据库是软件系统中非常重要的组成部分，开发中常用的关系型数据库可以安装 MySQL，非关系型数据库可以安装 Redis。

在本节中，将介绍如何安装 Redis 和 MySQL 数据库。

## 安装 DBngin

[DBngin](https://dbngin.com/) 是一个数据库管理工具，它可以帮助启动 Redis，同时它也能快速的启动 MySQL 和 PostgreSQL。

```bash
brew install --cask dbngin
```

## 启动 MySQL

MySQL 是最流行的关系型数据库，在开发和生产环境中都得到了广泛的应用。

打开 DBngin，点击添加一个 MySQL 服务，版本选择 8.0.32，然后点击创建。

![](images/database/create-new-database-server-for-mysql.jpg)

:::info MySQL 默认的数据库用户名是 `root`，密码是空。
:::

## 启动 Redis

Redis 作为最流程的内存数据库，在开发和生产环境中都得到了广泛的应用。

打开 DBngin，点击添加一个 Redis 服务，版本选择 7.0.0，然后点击创建。

![](images/database/create-new-database-server-for-redis.jpg)
