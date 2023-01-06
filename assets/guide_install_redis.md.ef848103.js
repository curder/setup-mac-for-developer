import{_ as s,c as a,o as e,a as n}from"./app.5e91c03f.js";const u=JSON.parse('{"title":"安装 Redis（可选）","description":"","frontmatter":{},"headers":[{"level":2,"title":"配置开机自启动","slug":"配置开机自启动","link":"#配置开机自启动","children":[]},{"level":2,"title":"启动 Redis","slug":"启动-redis","link":"#启动-redis","children":[]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]}],"relativePath":"guide/install/redis.md","lastUpdated":1672984113000}'),l={name:"guide/install/redis.md"},t=n(`<h1 id="安装-redis-可选" tabindex="-1">安装 Redis（可选） <a class="header-anchor" href="#安装-redis-可选" aria-hidden="true">#</a></h1><blockquote><p><strong>如果选择使用 MAMP 作为开发环境的话，可以不用使用这种方式单独安装 Redis</strong></p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">redis</span></span>
<span class="line"></span></code></pre></div><h2 id="配置开机自启动" tabindex="-1">配置开机自启动 <a class="header-anchor" href="#配置开机自启动" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">ln</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-sfv</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/local/opt/redis/</span><span style="color:#A6ACCD;">*</span><span style="color:#C3E88D;">.plist</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/Library/LaunchAgents</span></span>
<span class="line"></span></code></pre></div><h2 id="启动-redis" tabindex="-1">启动 Redis <a class="header-anchor" href="#启动-redis" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">launchctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">load</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/Library/LaunchAgents/homebrew.mxcl.redis.plist</span></span>
<span class="line"></span></code></pre></div><h2 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">redis-cli</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ping</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 执行完这个命令后返回 PONG 字样则表示安装成功</span></span>
<span class="line"></span></code></pre></div>`,9),o=[t];function p(i,c,r,d,h,C){return e(),a("div",null,o)}const g=s(l,[["render",p]]);export{u as __pageData,g as default};
