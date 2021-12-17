"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[836],{5142:(s,n,e)=>{e.r(n),e.d(n,{data:()=>a});const a={key:"v-79cbc4ec",path:"/install/composer.html",title:"安装 Composer",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"安装命令",slug:"安装命令",children:[]},{level:2,title:"移动到全局 bin 路径",slug:"移动到全局-bin-路径",children:[]},{level:2,title:"将 Composer 包关联的命令添加到 bin",slug:"将-composer-包关联的命令添加到-bin",children:[]}],filePathRelative:"install/composer.md",git:{updatedTime:163972034e4,contributors:[{name:"curder",email:"q.curder@gmail.com",commits:1}]}}},8697:(s,n,e)=>{e.r(n),e.d(n,{default:()=>i});var a=e(6252);const o=(0,a.uE)('<h1 id="安装-composer" tabindex="-1"><a class="header-anchor" href="#安装-composer" aria-hidden="true">#</a> 安装 Composer</h1><h2 id="安装命令" tabindex="-1"><a class="header-anchor" href="#安装命令" aria-hidden="true">#</a> 安装命令</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php -r <span class="token string">&quot;copy(&#39;https://getcomposer.org/installer&#39;, &#39;composer-setup.php&#39;);&quot;</span>\nphp composer-setup.php\nphp -r <span class="token string">&quot;unlink(&#39;composer-setup.php&#39;);&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',3),r=(0,a.Uk)("See: "),p={href:"https://getcomposer.org/download/",target:"_blank",rel:"noopener noreferrer"},c=(0,a.Uk)("getcompose v1.10.7"),l=(0,a.uE)('<h2 id="移动到全局-bin-路径" tabindex="-1"><a class="header-anchor" href="#移动到全局-bin-路径" aria-hidden="true">#</a> 移动到全局 bin 路径</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mv</span> composer.phar /usr/local/bin/composer\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>通过上面的命令将可执行文件 composer 移动到全局 bin 路径</p></blockquote><p>默认情况下安装的 composer 为 <code>2.1.11</code> 的版本。切换到 <code>1.10.23</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> self-update --1\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>检查并确定下版本</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> -V <span class="token comment"># 查看当前composer版本</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="将-composer-包关联的命令添加到-bin" tabindex="-1"><a class="header-anchor" href="#将-composer-包关联的命令添加到-bin" aria-hidden="true">#</a> 将 Composer 包关联的命令添加到 bin</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$PATH</span>:<span class="token environment constant">$HOME</span>/.composer/vendor/bin&quot;</span> <span class="token comment"># MacOSX 配置到 `~/.zshrc` 文件</span>\n\n<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$PATH</span>:<span class="token environment constant">$HOME</span>/.config/composer/vendor/bin&quot;</span> <span class="token comment"># CentOS 配置到 `/etc/profile` 文件</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',9),t={},i=(0,e(3744).Z)(t,[["render",function(s,n){const e=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[o,(0,a._)("blockquote",null,[(0,a._)("p",null,[r,(0,a._)("a",p,[c,(0,a.Wm)(e)])])]),l],64)}]])},3744:(s,n)=>{n.Z=(s,n)=>{const e=s.__vccOpts||s;for(const[s,a]of n)e[s]=a;return e}}}]);