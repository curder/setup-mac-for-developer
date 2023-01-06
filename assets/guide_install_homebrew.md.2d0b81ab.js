import{_ as e,c as a,o as s,a as o}from"./app.5e91c03f.js";const l="/setup-mac-for-developer/assets/xcode-command-line-tools.650710f0.png",_=JSON.parse('{"title":"安装 Homebrew","description":"","frontmatter":{},"headers":[{"level":2,"title":"系统依赖","slug":"系统依赖","link":"#系统依赖","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"测试安装","slug":"测试安装","link":"#测试安装","children":[]}],"relativePath":"guide/install/homebrew.md","lastUpdated":1672984262000}'),n={name:"guide/install/homebrew.md"},r=o('<h1 id="安装-homebrew" tabindex="-1">安装 Homebrew <a class="header-anchor" href="#安装-homebrew" aria-hidden="true">#</a></h1><p>brew 的地址是：<a href="https://brew.sh/index_zh-cn" target="_blank" rel="noreferrer">brew zh-cn</a></p><h2 id="系统依赖" tabindex="-1">系统依赖 <a class="header-anchor" href="#系统依赖" aria-hidden="true">#</a></h2><ul><li>64 位的 CPU</li><li>MacOSX 版本大于 10.12</li><li>Xcode 的命令行工具 <code>xcode-select --install</code> <a href="https://developer.apple.com/downloads" target="_blank" rel="noreferrer">developer.apple.com/downloads</a> 或者 <a href="https://itunes.apple.com/us/app/xcode/id497799835" target="_blank" rel="noreferrer">Xcode</a></li><li>使用 <code>bash</code> 或者 <code>zsh</code></li></ul><p>安装前可能涉及到需要安装<code>Xcode Command Line Tools</code></p><p>在执行命令的时候会一直停留在这行提示上，<code>Downloading Command Line Tools (macOS High Sierra version 10.13) for Xcode</code>。需要耐心等待，如果失败了也可以在 Apple 官网下载<code>.dmg</code>文件进行安装。</p><p><img src="'+l+`" alt="An image"></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">/usr/bin/ruby</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#FFCB6B;">curl</span><span style="color:#C3E88D;"> -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"></span></code></pre></div><p>执行上面的命令完成安装。</p><h2 id="测试安装" tabindex="-1">测试安装 <a class="header-anchor" href="#测试安装" aria-hidden="true">#</a></h2><p>这里安装 <code>wget</code> 命令为例：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wget</span></span>
<span class="line"></span></code></pre></div><p>针对Intel的CPU，Homebrew 会将软件包安装到独立目录，并将其文件软链接至 <code>/usr/local</code>。</p><p>而苹果自研ARM架构的CPU，Homebrew 会将软件包安装到独立的目录，并将其文件软链接至 <code>/opt/homebrew</code>。</p>`,15),t=[r];function c(p,d,i,h,m,b){return s(),a("div",null,t)}const g=e(n,[["render",c]]);export{_ as __pageData,g as default};