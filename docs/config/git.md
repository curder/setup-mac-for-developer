# 配置 Git

Mac 系统自带 git，命令行路径在 `/usr/bin/git`，在编辑器如 PHPStorm 中使用 git 的路径是：`/usr/local/bin/git`。

### 建立 git 软连接

```bash
ln -s /usr/bin/git /usr/local/bin/git
```

> 当然也可以修改 IDE 的 git 路径为默认路径 `/usr/bin/git`。

### 初始化 git 数据

#### 初始化用户信息

```bash
git config --global user.name <"John Doe">
git config --global user.email <johndoe@example.com>
```

> 其中 `<>` 里的内容根据实际情况变更为自己的用户名或邮箱。

参考 [Git 文档](https://git-scm.com/book/zh/v1/%E8%B5%B7%E6%AD%A5-%E5%88%9D%E6%AC%A1%E8%BF%90%E8%A1%8C-Git-%E5%89%8D%E7%9A%84%E9%85%8D%E7%BD%AE#%E7%94%A8%E6%88%B7%E4%BF%A1%E6%81%AF)

```bash
git config --list # 通过命令查看当前配置
```

#### 配置 Git 全局忽略文件

- 忽略文件内容

  ```
  # .gitignore_global
  ####################################
  ######## OS generated files ########
  ####################################
  .DS_Store
  .DS_Store?
  *.swp
  ._*
  .Spotlight-V100
  .Trashes
  # Icon?
  ehthumbs.db
  Thumbs.db
  .idea/
  node_modules
  .php_cs.cache
  ```

  > 将上面的内容保存到`~/.gitignore_global`文件

- 执行命令使配置文件生效
  ```bash
  git config --global core.excludesfile ~/.gitignore_global
  ```

- 执行命令检查配置是否生效
  ```bash
  git config core.excludesfile
  ```
