import{_ as s,c as a,o as i,a1 as e}from"./chunks/framework.BymHr5sA.js";const b=JSON.parse('{"title":"安装 Redis（可选）","description":"","frontmatter":{},"headers":[],"relativePath":"guide/install/redis.md","filePath":"guide/install/redis.md","lastUpdated":1672984113000}'),t={name:"guide/install/redis.md"},l=e('<h1 id="安装-redis-可选" tabindex="-1">安装 Redis（可选） <a class="header-anchor" href="#安装-redis-可选" aria-label="Permalink to &quot;安装 Redis（可选）&quot;">​</a></h1><blockquote><p><strong>如果选择使用 MAMP 作为开发环境的话，可以不用使用这种方式单独安装 Redis</strong></p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis</span></span></code></pre></div><h2 id="配置开机自启动" tabindex="-1">配置开机自启动 <a class="header-anchor" href="#配置开机自启动" aria-label="Permalink to &quot;配置开机自启动&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sfv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/opt/redis/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.plist</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/Library/LaunchAgents</span></span></code></pre></div><h2 id="启动-redis" tabindex="-1">启动 Redis <a class="header-anchor" href="#启动-redis" aria-label="Permalink to &quot;启动 Redis&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">launchctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> load</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/Library/LaunchAgents/homebrew.mxcl.redis.plist</span></span></code></pre></div><h2 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-label="Permalink to &quot;测试&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">redis-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ping</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 执行完这个命令后返回 PONG 字样则表示安装成功</span></span></code></pre></div>',9),n=[l];function h(d,p,r,o,c,k){return i(),a("div",null,n)}const u=s(t,[["render",h]]);export{b as __pageData,u as default};
