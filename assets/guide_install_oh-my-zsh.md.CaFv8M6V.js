import{_ as s,c as a,o as i,a1 as h}from"./chunks/framework.BymHr5sA.js";const t="/setup-mac-for-developer/assets/install-information-in-terminal.BMokRjSV.png",y=JSON.parse('{"title":"Oh-My-Zsh","description":"","frontmatter":{},"headers":[],"relativePath":"guide/install/oh-my-zsh.md","filePath":"guide/install/oh-my-zsh.md","lastUpdated":1718265651000}'),e={name:"guide/install/oh-my-zsh.md"},l=h(`<h1 id="oh-my-zsh" tabindex="-1">Oh-My-Zsh <a class="header-anchor" href="#oh-my-zsh" aria-label="Permalink to &quot;Oh-My-Zsh&quot;">​</a></h1><p><a href="http://ohmyz.sh/" target="_blank" rel="noreferrer">Oh My Zsh</a> 能给开发者带来很多愉悦，节省时间。</p><h2 id="安装-zsh" tabindex="-1">安装 zsh <a class="header-anchor" href="#安装-zsh" aria-label="Permalink to &quot;安装 zsh&quot;">​</a></h2><p>在命令行终端 iTerm2 下使用命令安装 zsh。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zsh</span></span></code></pre></div><h2 id="切换到-zsh-并检查" tabindex="-1">切换到 zsh 并检查 <a class="header-anchor" href="#切换到-zsh-并检查" aria-label="Permalink to &quot;切换到 zsh 并检查&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chsh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">which</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zsh\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> root</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 为root用户修改默认shell为zsh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chsh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /bin/zsh</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 为当前用户修改默认shell为zsh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chsh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /bin/bash</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 恢复bash命令</span></span></code></pre></div><p>执行上面的命令需要输入当前用户的密码后确认切换至 <code>zsh</code> ，然后注销当前会话并重新打开终端后查看是否真正切换至 <code>zsh</code>。</p><h2 id="安装-oh-my-zsh" tabindex="-1">安装 Oh-My-Zsh <a class="header-anchor" href="#安装-oh-my-zsh" aria-label="Permalink to &quot;安装 Oh-My-Zsh&quot;">​</a></h2><ul><li><p>curl 和 wget 两种安装方式二选一即可</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-NA-jy" id="tab-tBkXyrT" checked><label for="tab-tBkXyrT">Curl</label><input type="radio" name="group-NA-jy" id="tab-Qvo1JdK"><label for="tab-Qvo1JdK">Wget</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)&quot;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-O</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -)&quot;</span></span></code></pre></div></div></div></li></ul><p>安装成功后显示一个如下的欢迎界面</p><p><img src="`+t+`" alt=""></p><p>至此，Oh-My-Zsh 已经安装完毕。</p><h2 id="配置-oh-my-zsh" tabindex="-1">配置 Oh-My-Zsh <a class="header-anchor" href="#配置-oh-my-zsh" aria-label="Permalink to &quot;配置 Oh-My-Zsh&quot;">​</a></h2><p>Oh-My-Zsh 的默认配置在 <code>~/.zshrc</code> 文件中配置可以配置，修改默认的基本配置。</p><blockquote><p><strong>注意：</strong> 如果配置文件 <code>~/.zshrc</code> 不存在则通过手动创建它，默认的配置文件在 <a href="https://github.com/ohmyzsh/ohmyzsh/blob/master/templates/zshrc.zsh-template" target="_blank" rel="noreferrer">github.com/ohmyzsh/ohmyzsh/blob/templates/zshrc.zsh-template</a>。</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ZSH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$HOME/.oh-my-zsh</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ZSH_THEME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;robbyrussell&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">plugins</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> autojump</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zsh-autosuggestions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 开启常用插件,其中 git 是默认自带，其他两个插件的安装在下面有介绍</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ZSH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/oh-my-zsh.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> UPDATE_ZSH_DAYS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 30天检查更新 zsh 并提示是否更新</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HIST_STAMPS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;yyyy-mm-dd&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 历史记录时间格式</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LANG</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">en_US.UTF-8   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 语言</span></span></code></pre></div><h2 id="插件管理" tabindex="-1">插件管理 <a class="header-anchor" href="#插件管理" aria-label="Permalink to &quot;插件管理&quot;">​</a></h2><h3 id="插件配置" tabindex="-1">插件配置 <a class="header-anchor" href="#插件配置" aria-label="Permalink to &quot;插件配置&quot;">​</a></h3><p>插件的配置很简单，只需要找到配置文件 <code>~/.zshrc</code> 中的配置项 <code>plugins=()</code> 的 <code>()</code> 中添加上插件名称即可。</p><p>例如添加插件 <code>git</code> 则是 <code>plugins=(git)</code>，多个插件使用<strong>空格</strong>隔开。</p><blockquote><p>Oh-My-Zsh 自带的插件一般放置在目录 <code>~/.oh-my-zsh/plugins</code> 目录下，而通过互联网我们也可以下载更多的插件一般放置在 <code>~/.oh-my-zsh/custom/plugins</code> 目录下。</p></blockquote><p>Oh-My-Zsh 默认开启了 <code>git</code> 插件，提供了大量 <code>git</code> 别名，具体用法参见 <a href="https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git/" target="_blank" rel="noreferrer">GitHub 地址</a></p><h3 id="安装-autojump-插件" tabindex="-1">安装 autojump 插件 <a class="header-anchor" href="#安装-autojump-插件" aria-label="Permalink to &quot;安装 autojump 插件&quot;">​</a></h3><p><a href="https://github.com/wting/autojump" target="_blank" rel="noreferrer">autojump</a> 是一个命令行工具，它允许用户可以直接跳转到常用的目录，而不用管用户现在身在何处。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> autojump</span></span></code></pre></div><blockquote><p>更多使用<a href="https://curder.github.io/blog/others/how-to-use-autojump-plugin.html" target="_blank" rel="noreferrer">查看这里</a></p></blockquote><h3 id="安装-autosuggestions-插件" tabindex="-1">安装 autosuggestions 插件 <a class="header-anchor" href="#安装-autosuggestions-插件" aria-label="Permalink to &quot;安装 autosuggestions 插件&quot;">​</a></h3><p><a href="https://github.com/zsh-users/zsh-autosuggestions" target="_blank" rel="noreferrer">zsh-autosuggestions</a> 是一款根据命令历史输入时的命令进行输入提示的插件。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git://github.com/zsh-users/zsh-autosuggestions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ZSH_CUSTOM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/plugins/zsh-autosuggestions</span></span></code></pre></div><h3 id="其他插件" tabindex="-1">其他插件 <a class="header-anchor" href="#其他插件" aria-label="Permalink to &quot;其他插件&quot;">​</a></h3><p>Oh-My-Zsh 的强大之处是安装各种插件加速命令行终端的体验，更多插件相关的安装和使用请<a href="https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins" target="_blank" rel="noreferrer">查看这里</a>。</p><h2 id="手动升级-oh-my-zsh" tabindex="-1">手动升级 Oh-My-Zsh <a class="header-anchor" href="#手动升级-oh-my-zsh" aria-label="Permalink to &quot;手动升级 Oh-My-Zsh&quot;">​</a></h2><p>执行下面的命令手动升级</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">omz</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span></code></pre></div><h2 id="卸载-oh-my-zsh" tabindex="-1">卸载 Oh-My-Zsh <a class="header-anchor" href="#卸载-oh-my-zsh" aria-label="Permalink to &quot;卸载 Oh-My-Zsh&quot;">​</a></h2><p>如果想卸载 Oh-My-Zsh, 从命令行运行下面的命令， 将删除本身和恢复系统以前的 <code>bash</code> 或者 <code>zsh</code> 配置。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">uninstall_oh_my_zsh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zsh</span></span></code></pre></div>`,38),n=[l];function p(o,k,r,d,c,g){return i(),a("div",null,n)}const b=s(e,[["render",p]]);export{y as __pageData,b as default};
