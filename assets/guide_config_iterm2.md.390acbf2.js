import{_ as e,c as s,o as a,a as o}from"./app.9ecd2784.js";const t="/setup-mac-for-developer/assets/set-resue-previous-session-directory.a6fe4d8d.png",n="/setup-mac-for-developer/assets/set-font-size-and-spacing.3d172af1.png",l="/setup-mac-for-developer/assets/show-or-hiden-all-windows.3788ed31.png",y=JSON.parse('{"title":"iTerm2","description":"","frontmatter":{},"headers":[{"level":2,"title":"打开新窗口停留在上一次的路径","slug":"打开新窗口停留在上一次的路径","link":"#打开新窗口停留在上一次的路径","children":[]},{"level":2,"title":"修改字体大小和行间距","slug":"修改字体大小和行间距","link":"#修改字体大小和行间距","children":[]},{"level":2,"title":"设置快速切换快捷键","slug":"设置快速切换快捷键","link":"#设置快速切换快捷键","children":[]},{"level":2,"title":"设置正确的SSH连接字符集","slug":"设置正确的ssh连接字符集","link":"#设置正确的ssh连接字符集","children":[{"level":3,"title":"No such file or directory","slug":"no-such-file-or-directory","link":"#no-such-file-or-directory","children":[]},{"level":3,"title":"服务端乱码","slug":"服务端乱码","link":"#服务端乱码","children":[]}]}],"relativePath":"guide/config/iterm2.md","lastUpdated":1673230138000}'),c={name:"guide/config/iterm2.md"},i=o('<h1 id="iterm2" tabindex="-1">iTerm2 <a class="header-anchor" href="#iterm2" aria-hidden="true">#</a></h1><p>使用快捷键 <code>Command + ,</code> 打开 iTerm2 的设置。</p><h2 id="打开新窗口停留在上一次的路径" tabindex="-1">打开新窗口停留在上一次的路径 <a class="header-anchor" href="#打开新窗口停留在上一次的路径" aria-hidden="true">#</a></h2><ul><li>快捷键 <code>Command+,</code> -&gt;&gt; <code>Profiles</code> -&gt;&gt; 选中当前项目名 -&gt;&gt; 选择<code>Reuse Pevious session&#39;s directory</code></li></ul><p><img src="'+t+'" alt=""></p><h2 id="修改字体大小和行间距" tabindex="-1">修改字体大小和行间距 <a class="header-anchor" href="#修改字体大小和行间距" aria-hidden="true">#</a></h2><ul><li>快捷键 <code>Command+,</code> -&gt;&gt; <code>Profiles</code> -&gt;&gt; 选中当前项目名 -&gt;&gt; 在右侧 Tabs 中选择 Text 选项 -&gt;&gt; 找到 Font 选项，点击进入字体配置。</li></ul><p>字体大小选择为： <code>16pt</code>，行间距为：<code>130%</code>。</p><p><img src="'+n+'" alt=""></p><h2 id="设置快速切换快捷键" tabindex="-1">设置快速切换快捷键 <a class="header-anchor" href="#设置快速切换快捷键" aria-hidden="true">#</a></h2><ul><li>快捷键 <code>Command+,</code> -&gt;&gt; 选择 <code>Keys</code> -&gt;&gt; 找到 HotKey，并点击记录你的快捷键，我这里使用的是 <strong>Command + `</strong></li></ul><p><img src="'+l+`" alt=""></p><p>设置好快捷键之后，在任意界面使用快捷键都能快速切换 iTerm2。</p><h2 id="设置正确的ssh连接字符集" tabindex="-1">设置正确的SSH连接字符集 <a class="header-anchor" href="#设置正确的ssh连接字符集" aria-hidden="true">#</a></h2><p>sshd 配置文件在 <code>/etc/ssh/ssh_config</code>，可以通过对这个文件编写一些自定义配置。</p><h3 id="no-such-file-or-directory" tabindex="-1">No such file or directory <a class="header-anchor" href="#no-such-file-or-directory" aria-hidden="true">#</a></h3><p>当我们需要使用SSH连接远程服务器，会报如下错误：</p><div class="danger custom-block"><p class="custom-block-title">报错</p><p>-bash: warning: setlocale: LC_CTYPE: cannot change locale (UTF-8): No such file or directory</p></div><p>在 <code>/etc/ssh/ssh_config</code> 文件的末尾，将 <code>SendEnv LANG LC_*</code> 使用<code>#</code>注释，添加指定的字符集 <code>SendEnv LANG LC_ALL=en_US.UTF-8</code>，如下：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-palenight has-highlighted-lines"><code><span class="line"><span style="color:#C3E88D;">Host *</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#SendEnv LANG LC_* # 注释默认配置</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">SendEnv LANG LC_ALL=en_US.UTF-8</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 添加这一行</span></span>
<span class="line"></span></code></pre></div><p>相关链接<a href="https://segmentfault.com/a/1190000022755839" target="_blank" rel="noreferrer">查看这里</a></p><h3 id="服务端乱码" tabindex="-1">服务端乱码 <a class="header-anchor" href="#服务端乱码" aria-hidden="true">#</a></h3><p>默认SSH配置链接到服务器上编辑文件时可能出现乱码。</p><p>可以禁用 SSH locale 环境变量转发来修复这个错误，在本地计算机上打开 SSH 客户端配置文件 <code>/etc/ssh/ssh_config</code>，找到这一行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">SendEnv LANG LC_*</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在开头加 <code>#</code> 号将其注释掉，保存文件后再次链接服务器查看是否乱码问题解决。</p><p>相关链接<a href="https://www.linuxbabe.com/linux-server/fix-ssh-locale-environment-variable-error" target="_blank" rel="noreferrer">查看这里</a></p>`,27),r=[i];function d(p,h,g,u,m,_){return a(),s("div",null,r)}const C=e(c,[["render",d]]);export{y as __pageData,C as default};
