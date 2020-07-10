## 配置 mkcert

### 初始化配置

```
mkcert -install
```

### 生成证书

```
mkcert -key-file key.pem -cert-file cert.pem "www.example.test" "m.example.test" "example.test" "*.example.test" "localhost"
```

> 通过上面的命令会生成对应的cert和key文件。

### Nginx配置SSL证书

以MAMP客户端为例。

```

```


### 在`laravel-mix`项目中使用

```
mix.browserSync({
    proxy: "https://www.example.com",
    https: {
        key: "/path-to-custom/key.pem",
        cert: "/path-to-custom/cert.pem"
    }
});
```

> 配置之前需要保证`https://example.com`能正常访问。
>
> `key` 和 `cert` 的配置跟当前生成证书时指定的文件保持一致。
