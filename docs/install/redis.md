## 安装 Redis

```
brew install redis
```

### 配置开机自启动

```
ln -sfv /usr/local/opt/redis/*.plist ~/Library/LaunchAgents
```

### 启动 Redis

```
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.redis.plist
```

### 测试

```
redis-cli ping # 执行完这个命令后返回 PONG 字样则表示安装成功
```
