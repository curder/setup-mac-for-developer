import{_ as e,c as a,o as l,a as c}from"./app.9ecd2784.js";const o="/setup-mac-for-developer/assets/using-homebrew-installation.e31fd8c1.png",t="/setup-mac-for-developer/assets/install-package-control.4ab573ce.png",b=JSON.parse('{"title":"安装 Sublime Text 3","description":"","frontmatter":{},"headers":[{"level":2,"title":"安装 Package Control","slug":"安装-package-control","link":"#安装-package-control","children":[]},{"level":2,"title":"卸载","slug":"卸载","link":"#卸载","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[{"level":3,"title":"安装插件","slug":"安装插件","link":"#安装插件","children":[]},{"level":3,"title":"卸载插件","slug":"卸载插件","link":"#卸载插件","children":[]},{"level":3,"title":"禁用插件","slug":"禁用插件","link":"#禁用插件","children":[]},{"level":3,"title":"启用插件","slug":"启用插件","link":"#启用插件","children":[]},{"level":3,"title":"插件列表","slug":"插件列表","link":"#插件列表","children":[]}]},{"level":2,"title":"命令关键字","slug":"命令关键字","link":"#命令关键字","children":[]},{"level":2,"title":"插件","slug":"插件","link":"#插件","children":[]}],"relativePath":"guide/install/sublime-text-3.md","lastUpdated":1666926661000}'),d={name:"guide/install/sublime-text-3.md"},i=c(`<h1 id="安装-sublime-text-3" tabindex="-1">安装 Sublime Text 3 <a class="header-anchor" href="#安装-sublime-text-3" aria-hidden="true">#</a></h1><p>Sublime Text 3 的<a href="https://www.sublimetext.com/" target="_blank" rel="noreferrer">官方网站</a>，找到适合自己的平台进行下载并安装。</p><p>这里选择使用 Homebrew 进行安装。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">homebrew/cask/sublime-text</span></span>
<span class="line"></span></code></pre></div><p><img src="`+o+'" alt=""></p><blockquote><p>从命令行的提示中可以看出默认已经建立了一个 <code>subl</code> 的软连接，后期在使用中可以在命令行直接呼出 sublime text 3。</p></blockquote><h2 id="安装-package-control" tabindex="-1">安装 Package Control <a class="header-anchor" href="#安装-package-control" aria-hidden="true">#</a></h2><ul><li><p>在 <code>Sublime Text 3</code> 顶级菜单的 <code>Tools</code> 下点击 <code>Install Package Control...</code>，稍等片刻即可安装成功。如下图： <img src="'+t+'" alt=""></p></li><li><p>使用快捷键<code>⌘(Command) + ⇧(Shift) + P</code>，输入 <code>Install Package Control</code> 字符后点击回车完成安装。</p></li></ul><h2 id="卸载" tabindex="-1">卸载 <a class="header-anchor" href="#卸载" aria-hidden="true">#</a></h2><p>使用快捷键<code>Command + Shift + p</code>，输入<code>Package Control: Remove Package</code>字符后点击回车完成卸载。</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-hidden="true">#</a></h2><p>通过<code>Package Control</code>能很方便的安装其它插件。</p><h3 id="安装插件" tabindex="-1">安装插件 <a class="header-anchor" href="#安装插件" aria-hidden="true">#</a></h3><p>这里以<code>Emmet</code>插件的安装为例，一般插件的安装都可以通过这种方式。</p><p>使用快捷键<code>Command + Shift + p</code>，输入<code>Install Package</code>字符后再输入要安装的插件名称<code>Emmet</code>回车等待安装完成。</p><h3 id="卸载插件" tabindex="-1">卸载插件 <a class="header-anchor" href="#卸载插件" aria-hidden="true">#</a></h3><p>使用快捷键<code>Command + Shift + p</code>，输入<code>Remove Package</code>字符后再输入要安装的插件名称<code>Emmet</code>回车等待安装完成。</p><h3 id="禁用插件" tabindex="-1">禁用插件 <a class="header-anchor" href="#禁用插件" aria-hidden="true">#</a></h3><p>使用快捷键<code>Command + Shift + p</code>，输入<code>Disable Package</code>字符后再输入要安装的插件名称禁用插件。（其实就是在个人配置中的<code>ignored_packages</code>中添加插件名称。）</p><blockquote><p>使用这个命令可以禁用系统默认安装的插件。</p></blockquote><h3 id="启用插件" tabindex="-1">启用插件 <a class="header-anchor" href="#启用插件" aria-hidden="true">#</a></h3><p>使用快捷键<code>Command + Shift + p</code>，输入<code>Enable Package</code>字符后再输入要安装的插件名称禁用插件。（其实就是在个人配置中的<code>ignored_packages</code>中移除插件名称。）</p><h3 id="插件列表" tabindex="-1">插件列表 <a class="header-anchor" href="#插件列表" aria-hidden="true">#</a></h3><p>使用快捷键<code>Command + Shift + p</code>，输入<code>List Package</code>字符后查看当前环境已经安装的插件。</p><h2 id="命令关键字" tabindex="-1">命令关键字 <a class="header-anchor" href="#命令关键字" aria-hidden="true">#</a></h2><ul><li><code>Install Package</code> 升级插件</li><li><code>Remove Package</code> 移除插件</li><li><code>Disable Package</code> 禁用插件</li><li><code>Enable Package</code> 启用插件</li><li><code>List Package</code> 插件列表</li></ul><h2 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-hidden="true">#</a></h2><p>TODO</p>',28),n=[i];function s(r,h,p,u,m,g){return l(),a("div",null,n)}const _=e(d,[["render",s]]);export{b as __pageData,_ as default};