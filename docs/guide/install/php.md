# 安装 PHP（可选）

> **如果选择使用 MAMP 作为开发环境的话，可以不使用这种方式单独安装 PHP**

## 安装PHP

### 安装 [homebrew-php](https://github.com/shivammathur/homebrew-php) Tap

```bash
brew tap shivammathur/php
```

### 搜索当前可用php版本
```bash
brew search php

# ==> Formulae
# brew-php-switcher ✔               phplint                           shivammathur/php/php@7.0          shivammathur/php/php@7.4-debug
# php ✔                             phpmd                             shivammathur/php/php@7.0-debug    # shivammathur/php/php@8.0 ✔
# php-code-sniffer                  phpmyadmin                        shivammathur/php/php@7.1          shivammathur/php/php@8.0-debug
# php-cs-fixer                      phpstan                           shivammathur/php/php@7.1-debug    shivammathur/php/php@8.1 ✔
# php-cs-fixer@2                    phpunit                           shivammathur/php/php@7.2          shivammathur/php/php@8.1-debug
# php@7.4 ✔                         shivammathur/php/php ✔            shivammathur/php/php@7.2-debug    shivammathur/php/php@8.3
# php@8.0 ✔                         shivammathur/php/php-debug        shivammathur/php/php@7.3 ✔        shivammathur/php/php@8.3-debug
# php@8.1 ✔                         shivammathur/php/php@5.6          shivammathur/php/php@7.3-debug    pup
# phpbrew                           shivammathur/php/php@5.6-debug    shivammathur/php/php@7.4 ✔        pcp
```

### 安装指定版本php

这里以 `php8.2` 为例。

```bash
brew install php@8.2
```

## [brew-php-switcher](https://github.com/philcook/brew-php-switcher)

### 安装

```bash
brew install brew-php-switcher
```

### 检查
```bash
brew search brew-php-switcher

# ==> Formulae
# brew-php-switcher ✔
```

### [valet](https://laravel.com/docs/master/valet)可选

```bash
brew-php-switcher 8.2 -c=valet
```
