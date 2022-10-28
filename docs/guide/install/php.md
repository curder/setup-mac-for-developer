# 安装 PHP（可选）

> **如果选择使用 MAMP 作为开发环境的话，可以不使用这种方式单独安装 PHP**

## 安装 [homebrew-php](https://github.com/shivammathur/homebrew-php) Tap

```bash
brew tap shivammathur/php
```

## 安装brew-php-switcher
```bash
brew install brew-php-switcher
```

## 检查安装的效果
```bash
brew search brew-php-switcher

# ==> Formulae
# brew-php-switcher ✔
```

## 搜索当前可用php版本
```bash
brew search php

# ==> Formulae
# brew-php-switcher ✔               phplint                           shivammathur/php/php@7.0 ✔
# php ✔                             phpmd                             shivammathur/php/php@7.1 ✔
# php-code-sniffer                  phpmyadmin                        shivammathur/php/php@7.2 ✔
# php-cs-fixer                      phpstan                           shivammathur/php/php@7.3 ✔
# php@7.2 ✔                         phpunit                           shivammathur/php/php@7.4 ✔
# php@7.3 ✔                         shivammathur/php/php ✔            shivammathur/php/php@8.1 ✔
# php@7.4 ✔                         shivammathur/php/php@5.6 ✔        wilmoore/formulae/php-version ✔
```

## 安装指定版本php

这里以 `php7.4` 为例。

```bash
brew install shivammathur/php/php@7.4
```

## [valet](https://laravel.com/docs/8.x/valet#introduction)可选

```bash
brew-php-switcher 7.4 -c=valet
```
