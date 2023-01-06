import{_ as s,c as n,o as a,a as l}from"./app.5e91c03f.js";const d=JSON.parse('{"title":"Homebrew 安装依赖","description":"","frontmatter":{},"headers":[{"level":2,"title":"解决国内速度慢的问题","slug":"解决国内速度慢的问题","link":"#解决国内速度慢的问题","children":[]}],"relativePath":"guide/config/homebrew.md","lastUpdated":1672984262000}'),p={name:"guide/config/homebrew.md"},e=l(`<h1 id="homebrew-安装依赖" tabindex="-1">Homebrew 安装依赖 <a class="header-anchor" href="#homebrew-安装依赖" aria-hidden="true">#</a></h1><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">libzip</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">libpq</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mozjpeg</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pngquant</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wget</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">autoconf</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">openssl</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">libjpeg</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">libpng</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lzlib</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">curl</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">imap-uw</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">readline</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">postgresql</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">libxml2</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mcrypt</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gettext</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">libxslt</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">libiconv</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">icu4c</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">expat</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bison</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">webp</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">freetype</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tree</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pkg-config</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">telnet</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--verbose</span></span>
<span class="line"></span></code></pre></div><h2 id="解决国内速度慢的问题" tabindex="-1">解决国内速度慢的问题 <a class="header-anchor" href="#解决国内速度慢的问题" aria-hidden="true">#</a></h2><p>如果在安装的过程中比较慢的话可以通过下面的链接解决更新下载 homebrew 慢的问题</p><ul><li><a href="https://www.raydbg.com/2019/Homebrew-Update-Slow/" target="_blank" rel="noreferrer">解决 Homebrew 下载更新极慢的问题</a></li><li><a href="https://xu3352.github.io/mac/2018/09/06/mac-homebrew-update-slowly" target="_blank" rel="noreferrer">Mac brew update 非常慢... 更换 brew 镜像源解决</a></li></ul>`,5),o=[e];function t(c,r,C,A,y,D){return a(),n("div",null,o)}const b=s(p,[["render",t]]);export{d as __pageData,b as default};
