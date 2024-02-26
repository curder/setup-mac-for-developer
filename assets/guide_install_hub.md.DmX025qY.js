import{_ as s,c as a,o as i,a2 as e}from"./chunks/framework.tf4LBX_x.js";const u=JSON.parse('{"title":"安装 Hub","description":"","frontmatter":{},"headers":[],"relativePath":"guide/install/hub.md","filePath":"guide/install/hub.md","lastUpdated":1666924780000}'),t={name:"guide/install/hub.md"},h=e(`<h1 id="安装-hub" tabindex="-1">安装 Hub <a class="header-anchor" href="#安装-hub" aria-label="Permalink to &quot;安装 Hub&quot;">​</a></h1><p>Hub 是一个git的命令行拓展，针对于我们经常操作<a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>相关任务，例如：创建仓库、克隆仓库等，而无需离开终端。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hub</span></span></code></pre></div><h2 id="检查是否安装" tabindex="-1">检查是否安装 <a class="header-anchor" href="#检查是否安装" aria-label="Permalink to &quot;检查是否安装&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hub</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span></code></pre></div><h2 id="推荐配置" tabindex="-1">推荐配置 <a class="header-anchor" href="#推荐配置" aria-label="Permalink to &quot;推荐配置&quot;">​</a></h2><ul><li>环境变量 将下面的语句添加到对应的bash配置中，比如：<code>~/.zshrc</code></li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># hub integration</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">eval</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hub</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> alias </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)&quot;</span></span></code></pre></div><p>添加完成之后需要执行 <code>source ~/.zshrc</code> 重载配置文件或者重新打开终端。执行 <code>git --version</code> 命令看到输出末尾多出一行 hub 的版本信息。</p><ul><li>配置授权</li></ul><p>访问GitHub并登录，地址为：<a href="https://github.com/settings/tokens" target="_blank" rel="noreferrer">https://github.com/settings/tokens</a> ，选择 <a href="https://github.com/settings/tokens/new" target="_blank" rel="noreferrer">Generate new token</a> 创建一个新的授权token。在表单页面勾选赋予 <strong>repo</strong> 相关权限，如果需要删除仓库的权限需要勾选 <strong>delete_repo</strong> 选项。</p><p>将生成的token值写入到 <code>~/.config/hub</code>文件中, 格式如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>github.com:</span></span>
<span class="line"><span>- user: curder</span></span>
<span class="line"><span>  oauth_token: {{GITHUB_TOKEN}}</span></span>
<span class="line"><span>  protocol: https</span></span></code></pre></div><ul><li>添加git协议</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hub.protocol</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hub.host</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> github.com</span></span></code></pre></div><p>更多 <a href="https://hub.github.com/hub.1.html#configuration" target="_blank" rel="noreferrer">配置参考这里</a>。</p><h2 id="简单使用" tabindex="-1">简单使用 <a class="header-anchor" href="#简单使用" aria-label="Permalink to &quot;简单使用&quot;">​</a></h2><p>第一次使用命令操作仓库时，可能会需要需要输入用户名和密码的交互界面，请输入用户名，密码为：<strong>上面得到的TOKEN</strong>，后续则不需要重复用户名和密码的操作。</p><ul><li>下载仓库</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> curder/setup-mac-for-developer-src</span></span></code></pre></div><ul><li>创建仓库</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> curder/hub-demo</span></span></code></pre></div><ul><li>创建release</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> release</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0</span></span></code></pre></div><blockquote><p>仓库当前仓库的 <code>release</code> 版本为<code>1.1.0</code></p></blockquote><p>更多hub相关命令操作可以查看<a href="https://hub.github.com/" target="_blank" rel="noreferrer">hub.github.com</a></p>`,26),l=[h];function n(p,o,r,d,c,k){return i(),a("div",null,l)}const b=s(t,[["render",n]]);export{u as __pageData,b as default};
