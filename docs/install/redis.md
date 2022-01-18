# 安装 Redis(选)

> **如果选择使用 MAMP 作为开发环境的话，可以不用使用这种方式单独安装 Redis**

```bash
brew install redis
```

### 配置开机自启动

```bash
ln -sfv /usr/local/opt/redis/*.plist ~/Library/LaunchAgents
```

### 启动 Redis

```bash
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.redis.plist
```

### 测试

```bash
redis-cli ping # 执行完这个命令后返回 PONG 字样则表示安装成功
```
