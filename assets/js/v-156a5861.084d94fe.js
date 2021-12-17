"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[299],{3868:(e,a,l)=>{l.r(a),l.d(a,{data:()=>c});const c={key:"v-156a5861",path:"/install/sublime-text-3.html",title:"安装 Sublime Text 3",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"安装 Package Control",slug:"安装-package-control",children:[]},{level:2,title:"卸载",slug:"卸载",children:[]},{level:2,title:"使用",slug:"使用",children:[{level:3,title:"安装插件",slug:"安装插件",children:[]},{level:3,title:"卸载插件",slug:"卸载插件",children:[]},{level:3,title:"禁用插件",slug:"禁用插件",children:[]},{level:3,title:"启用插件",slug:"启用插件",children:[]},{level:3,title:"插件列表",slug:"插件列表",children:[]}]},{level:2,title:"命令关键字",slug:"命令关键字",children:[]},{level:2,title:"插件",slug:"插件",children:[]}],filePathRelative:"install/sublime-text-3.md",git:{updatedTime:163972034e4,contributors:[{name:"curder",email:"q.curder@gmail.com",commits:1}]}}},7263:(e,a,l)=>{l.r(a),l.d(a,{default:()=>p});var c=l(6252),d=l(8876),o=l(3589);const t=(0,c._)("h1",{id:"安装-sublime-text-3",tabindex:"-1"},[(0,c._)("a",{class:"header-anchor",href:"#安装-sublime-text-3","aria-hidden":"true"},"#"),(0,c.Uk)(" 安装 Sublime Text 3")],-1),i=(0,c.Uk)("Sublime Text 3 的"),r={href:"https://www.sublimetext.com/",target:"_blank",rel:"noopener noreferrer"},n=(0,c.Uk)("官方网站"),s=(0,c.Uk)("，找到适合自己的平台进行下载并安装。"),h=(0,c.uE)('<p>这里选择使用 Homebrew 进行安装。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> caskroom/cask/sublime-text\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="'+d+'" alt=""></p><blockquote><p>从命令行的提示中可以看出默认已经建立了一个 <code>subl</code> 的软连接，后期在使用中可以在命令行直接呼出 sublime text 3。</p></blockquote><h2 id="安装-package-control" tabindex="-1"><a class="header-anchor" href="#安装-package-control" aria-hidden="true">#</a> 安装 Package Control</h2><ul><li><p>在 <code>Sublime Text 3</code> 顶级菜单的 <code>Tools</code> 下点击 <code>Install Package Control...</code>，稍等片刻即可安装成功。如下图： <img src="'+o+'" alt=""></p></li><li><p>使用快捷键<code>⌘(Command) + ⇧(Shift) + P</code>，输入 <code>Install Package Control</code> 字符后点击回车完成安装。</p></li></ul><h2 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h2><p>使用快捷键<code>Command + Shift + p</code>，输入<code>Package Control: Remove Package</code>字符后点击回车完成卸载。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>通过<code>Package Control</code>能很方便的安装其它插件。</p><h3 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件" aria-hidden="true">#</a> 安装插件</h3><p>这里以<code>Emmet</code>插件的安装为例，一般插件的安装都可以通过这种方式。</p><p>使用快捷键<code>Command + Shift + p</code>，输入<code>Install Package</code>字符后再输入要安装的插件名称<code>Emmet</code>回车等待安装完成。</p><h3 id="卸载插件" tabindex="-1"><a class="header-anchor" href="#卸载插件" aria-hidden="true">#</a> 卸载插件</h3><p>使用快捷键<code>Command + Shift + p</code>，输入<code>Remove Package</code>字符后再输入要安装的插件名称<code>Emmet</code>回车等待安装完成。</p><h3 id="禁用插件" tabindex="-1"><a class="header-anchor" href="#禁用插件" aria-hidden="true">#</a> 禁用插件</h3><p>使用快捷键<code>Command + Shift + p</code>，输入<code>Disable Package</code>字符后再输入要安装的插件名称禁用插件。（其实就是在个人配置中的<code>ignored_packages</code>中添加插件名称。）</p><blockquote><p>使用这个命令可以禁用系统默认安装的插件。</p></blockquote><h3 id="启用插件" tabindex="-1"><a class="header-anchor" href="#启用插件" aria-hidden="true">#</a> 启用插件</h3><p>使用快捷键<code>Command + Shift + p</code>，输入<code>Enable Package</code>字符后再输入要安装的插件名称禁用插件。（其实就是在个人配置中的<code>ignored_packages</code>中移除插件名称。）</p><h3 id="插件列表" tabindex="-1"><a class="header-anchor" href="#插件列表" aria-hidden="true">#</a> 插件列表</h3><p>使用快捷键<code>Command + Shift + p</code>，输入<code>List Package</code>字符后查看当前环境已经安装的插件。</p><h2 id="命令关键字" tabindex="-1"><a class="header-anchor" href="#命令关键字" aria-hidden="true">#</a> 命令关键字</h2><ul><li><code>Install Package</code> 升级插件</li><li><code>Remove Package</code> 移除插件</li><li><code>Disable Package</code> 禁用插件</li><li><code>Enable Package</code> 启用插件</li><li><code>List Package</code> 插件列表</li></ul><h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h2><p>TODO</p>',26),u={},p=(0,l(3744).Z)(u,[["render",function(e,a){const l=(0,c.up)("OutboundLink");return(0,c.wg)(),(0,c.iD)(c.HY,null,[t,(0,c._)("p",null,[i,(0,c._)("a",r,[n,(0,c.Wm)(l)]),s]),h],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{const l=e.__vccOpts||e;for(const[e,c]of a)l[e]=c;return l}},3589:(e,a,l)=>{e.exports=l.p+"assets/img/sublime-text-3-install-package-control.02ffb55e.png"},8876:(e,a,l)=>{e.exports=l.p+"assets/img/sublime-text-3-using-homebrew-installation.47c37be7.png"}}]);