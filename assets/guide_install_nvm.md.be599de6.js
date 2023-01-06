import{_ as s,c as a,o as n,a as e}from"./app.5e91c03f.js";const D=JSON.parse('{"title":"安装 nvm | nrm 和 yarn","description":"","frontmatter":{},"headers":[{"level":2,"title":"安装 nvm","slug":"安装-nvm","link":"#安装-nvm","children":[]},{"level":2,"title":"简单使用 nvm","slug":"简单使用-nvm","link":"#简单使用-nvm","children":[{"level":3,"title":"查看可供使用稳定版本","slug":"查看可供使用稳定版本","link":"#查看可供使用稳定版本","children":[]},{"level":3,"title":"查看本地已经有的 NodeJS","slug":"查看本地已经有的-nodejs","link":"#查看本地已经有的-nodejs","children":[]},{"level":3,"title":"安装指定版本的 NodeJS","slug":"安装指定版本的-nodejs","link":"#安装指定版本的-nodejs","children":[]},{"level":3,"title":"指定默认的 NodeJS 版本","slug":"指定默认的-nodejs-版本","link":"#指定默认的-nodejs-版本","children":[]},{"level":3,"title":"查看系统当前使用的 NodeJS 版本","slug":"查看系统当前使用的-nodejs-版本","link":"#查看系统当前使用的-nodejs-版本","children":[]},{"level":3,"title":"卸载指定的 NodeJS 版本","slug":"卸载指定的-nodejs-版本","link":"#卸载指定的-nodejs-版本","children":[]}]},{"level":2,"title":"nrm","slug":"nrm","link":"#nrm","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"简单使用 nrm","slug":"简单使用-nrm","link":"#简单使用-nrm","children":[]}]},{"level":2,"title":"安装 yarn","slug":"安装-yarn","link":"#安装-yarn","children":[]},{"level":2,"title":"安装全局依赖","slug":"安装全局依赖","link":"#安装全局依赖","children":[]}],"relativePath":"guide/install/nvm.md","lastUpdated":1672118908000}'),l={name:"guide/install/nvm.md"},o=e(`<h1 id="安装-nvm-nrm-和-yarn" tabindex="-1">安装 nvm | nrm 和 yarn <a class="header-anchor" href="#安装-nvm-nrm-和-yarn" aria-hidden="true">#</a></h1><p>目前主流的 node 版本管理工具有两种，<a href="https://github.com/creationix/nvm" target="_blank" rel="noreferrer">nvm</a> 和 <a href="https://github.com/tj/n" target="_blank" rel="noreferrer">n</a>。 两者差异挺大的，具体分析可以参考一下淘宝 FED 团队的一篇文章：<a href="http://taobaofed.org/blog/2015/11/17/nvm-or-n/" target="_blank" rel="noreferrer">管理 node 版本，选择 nvm 还是 n？</a>。</p><p>这里选择 nvm 管理 node 版本。</p><h2 id="安装-nvm" tabindex="-1">安装 nvm <a class="header-anchor" href="#安装-nvm" aria-hidden="true">#</a></h2><blockquote><p><strong>安装前请保证电脑已经正确安装并配置好了Oh-My-Zsh。</strong></p></blockquote><p>安装可以参考<a href="https://github.com/creationix/nvm" target="_blank" rel="noreferrer">nvm</a>项目的 README 文档，可以在下面的命令二选一条在终端执行。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://raw.githubusercontent.com/nvm-sh/nvm/v0.</span><span style="color:#F78C6C;">39.3</span><span style="color:#C3E88D;">/install.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">wget</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-qO-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://raw.githubusercontent.com/nvm-sh/nvm/v0.</span><span style="color:#F78C6C;">39.3</span><span style="color:#C3E88D;">/install.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span></span>
<span class="line"></span></code></pre></div><p>如果安装并配置好了 Oh-My-Zsh 终端的话，默认自动将对应的配置写入了 <code>~/.zshrc</code> 文件中，内容为：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> NVM_DIR</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$HOME</span><span style="color:#C3E88D;">/.nvm</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-s</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#A6ACCD;">$NVM_DIR</span><span style="color:#C3E88D;">/nvm.sh</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">\\</span><span style="color:#82AAFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$NVM_DIR</span><span style="color:#C3E88D;">/nvm.sh</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># This loads nvm</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-s</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#A6ACCD;">$NVM_DIR</span><span style="color:#C3E88D;">/bash_completion</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">\\</span><span style="color:#82AAFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$NVM_DIR</span><span style="color:#C3E88D;">/bash_completion</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># This loads nvm bash_completion</span></span>
<span class="line"></span></code></pre></div><p>可以通过命令 <code>source ~/.zshrc</code> 加载，或者重新打开一个终端。</p><blockquote><p>执行上面的命令时请在用户家目录执行。进入用户家目录的命令为：<code>cd ~</code>，检查是否为用户家目录的命令 <code>pwd</code>，显示为：<code>~/你的用户名</code>。</p></blockquote><h2 id="简单使用-nvm" tabindex="-1">简单使用 nvm <a class="header-anchor" href="#简单使用-nvm" aria-hidden="true">#</a></h2><h3 id="查看可供使用稳定版本" tabindex="-1">查看可供使用稳定版本 <a class="header-anchor" href="#查看可供使用稳定版本" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ls-remote</span></span>
<span class="line"></span></code></pre></div><blockquote><p>NodeJS 的版本发布很频繁，一般可以在<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">NodeJS 官网</a>看到 LTS 版本进行下载。</p></blockquote><h3 id="查看本地已经有的-nodejs" tabindex="-1">查看本地已经有的 NodeJS <a class="header-anchor" href="#查看本地已经有的-nodejs" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span></span>
<span class="line"></span></code></pre></div><h3 id="安装指定版本的-nodejs" tabindex="-1">安装指定版本的 NodeJS <a class="header-anchor" href="#安装指定版本的-nodejs" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v16.</span><span style="color:#F78C6C;">13.0</span></span>
<span class="line"></span></code></pre></div><h3 id="指定默认的-nodejs-版本" tabindex="-1">指定默认的 NodeJS 版本 <a class="header-anchor" href="#指定默认的-nodejs-版本" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alias</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v16.</span><span style="color:#F78C6C;">13.0</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 指定默认的NodeJS版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">default</span></span>
<span class="line"></span></code></pre></div><blockquote><p>如果是切换不同版本的node，请确保对应的依赖已经安装，比如<code>yarn</code>，因为不同版本的node，对应的bin目录不一致，目录为：<code>~/.nvm/versions/node/v16.13.0/bin</code>。</p></blockquote><h3 id="查看系统当前使用的-nodejs-版本" tabindex="-1">查看系统当前使用的 NodeJS 版本 <a class="header-anchor" href="#查看系统当前使用的-nodejs-版本" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">current</span></span>
<span class="line"></span></code></pre></div><blockquote><p>nvm管理的node安装的目录在 <code>~/.nvm/versions/node/</code> 下。</p></blockquote><h3 id="卸载指定的-nodejs-版本" tabindex="-1">卸载指定的 NodeJS 版本 <a class="header-anchor" href="#卸载指定的-nodejs-版本" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uninstall</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v16.</span><span style="color:#F78C6C;">13.0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">卸载v16.</span><span style="color:#F78C6C;">13.0</span></span>
<span class="line"></span></code></pre></div><p>至此，nvm 相关的基本操作完成，更多的操作请查看<a href="https://github.com/creationix/nvm" target="_blank" rel="noreferrer">nvm</a>项目的 README 说明。</p><h2 id="nrm" tabindex="-1"><a href="https://github.com/Pana/nrm" target="_blank" rel="noreferrer">nrm</a> <a class="header-anchor" href="#nrm" aria-hidden="true">#</a></h2><p><code>nrm</code> 是 <code>npm</code> 镜像仓库管理命令，可以帮助我们管理 <code>npm</code> 镜像资源的下载地址。</p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nrm</span></span>
<span class="line"></span></code></pre></div><blockquote><p>鉴于国内网络环境，如果下载速度慢或者下载失败，建议修改 npm 的从淘宝镜像地址下载资源，可以执行命令：<code>npm install -g nrm --registry=https://registry.npm.taobao.org/</code></p></blockquote><h3 id="简单使用-nrm" tabindex="-1">简单使用 nrm <a class="header-anchor" href="#简单使用-nrm" aria-hidden="true">#</a></h3><h4 id="查看可用源" tabindex="-1">查看可用源 <a class="header-anchor" href="#查看可用源" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ls</span></span>
<span class="line"></span></code></pre></div><h4 id="使用指定源" tabindex="-1">使用指定源 <a class="header-anchor" href="#使用指定源" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">taobao</span></span>
<span class="line"></span></code></pre></div><h4 id="检查当前使用源" tabindex="-1">检查当前使用源 <a class="header-anchor" href="#检查当前使用源" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">current</span></span>
<span class="line"></span></code></pre></div><blockquote><p>此时，在 <code>~/.npmrc</code> 配置中自动配置：<code>registry=https://registry.npm.taobao.org/</code></p></blockquote><h2 id="安装-yarn" tabindex="-1">安装 yarn <a class="header-anchor" href="#安装-yarn" aria-hidden="true">#</a></h2><p><a href="https://yarn.bootcss.com/docs/install/#mac-stable" target="_blank" rel="noreferrer">参考这里</a></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span></span>
<span class="line"></span></code></pre></div><h2 id="安装全局依赖" tabindex="-1">安装全局依赖 <a class="header-anchor" href="#安装全局依赖" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cross-env</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">live-server</span></span>
<span class="line"></span></code></pre></div><h4 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-hidden="true">#</a></h4><ul><li><a href="https://segmentfault.com/a/1190000004404505" target="_blank" rel="noreferrer">node 版本管理工具 nvm-Mac 下安装及使用</a></li></ul>`,49),p=[o];function t(r,c,i,d,h,C){return n(),a("div",null,p)}const u=s(l,[["render",t]]);export{D as __pageData,u as default};