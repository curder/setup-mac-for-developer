import{_ as i,c as a,o as e,ae as t}from"./chunks/framework.DPmbuUrd.js";const c=JSON.parse('{"title":"安装 Composer","description":"","frontmatter":{},"headers":[],"relativePath":"guide/install/composer.md","filePath":"guide/install/composer.md","lastUpdated":1695268814000}'),p={name:"guide/install/composer.md"};function n(h,s,l,o,r,k){return e(),a("div",null,s[0]||(s[0]=[t('<h1 id="安装-composer" tabindex="-1">安装 Composer <a class="header-anchor" href="#安装-composer" aria-label="Permalink to &quot;安装 Composer&quot;">​</a></h1><blockquote><p><strong>注意：</strong> 执行安装命令前保证 PHP 已经安装到电脑并放在对应的 bin 目录下。</p><p>在终端执行 <code>php --version</code>，可以查看PHP版本，这里建议使用 <a href="https://www.php.net/releases/8.1/zh.php" target="_blank" rel="noreferrer">PHP 8.1</a> 作为面向未来的语言版本。</p></blockquote><h2 id="安装命令" tabindex="-1">安装命令 <a class="header-anchor" href="#安装命令" aria-label="Permalink to &quot;安装命令&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;copy(&#39;https://getcomposer.org/installer&#39;, &#39;composer-setup.php&#39;);&quot;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> composer-setup.php</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;unlink(&#39;composer-setup.php&#39;);&quot;</span></span></code></pre></div><blockquote><p>See: <a href="https://getcomposer.org/download/" target="_blank" rel="noreferrer">getcompose v1.10.26</a></p></blockquote><h2 id="移动到全局-bin-路径" tabindex="-1">移动到全局 bin 路径 <a class="header-anchor" href="#移动到全局-bin-路径" aria-label="Permalink to &quot;移动到全局 bin 路径&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> composer.phar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/composer</span></span></code></pre></div><blockquote><p>通过上面的命令将可执行文件 composer 移动到全局 bin 路径</p></blockquote><p>默认情况下安装的 composer 为 <code>2.5.5</code> 的版本。切换到 <code>1.10.26</code></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">composer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> self-update</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --1</span></span></code></pre></div><p>检查并确定下版本</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">composer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -V</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 查看当前composer版本</span></span></code></pre></div><h2 id="将-composer-包关联的命令添加到-bin" tabindex="-1">将 Composer 包关联的命令添加到 bin <a class="header-anchor" href="#将-composer-包关联的命令添加到-bin" aria-label="Permalink to &quot;将 Composer 包关联的命令添加到 bin&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.composer/vendor/bin:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$PATH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # MacOSX 配置到 `~/.zshrc` 文件</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.config/composer/vendor/bin:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$PATH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # CentOS 配置到 `/etc/profile` 文件</span></span></code></pre></div>',14)]))}const g=i(p,[["render",n]]);export{c as __pageData,g as default};
