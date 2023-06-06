import{_ as a,o as s,c as e,O as o}from"./chunks/framework.379dab66.js";const l="/setup-mac-for-developer/assets/show-mac-os-version.1eb50ac1.png",t="/setup-mac-for-developer/assets/vagrant-version.86e0fe5d.png",n="/setup-mac-for-developer/assets/download-parallels.4e1952d2.png",p="/setup-mac-for-developer/assets/vagrant-box-add-homestead-arm.f597aeac.png",r="/setup-mac-for-developer/assets/vagrant-box-list-boxes.5d69cb22.png",c="/setup-mac-for-developer/assets/homestead-preview.e9a39772.png",d="/setup-mac-for-developer/assets/uninstall-homestead.fcd86015.png",v=JSON.parse('{"title":"Apple M1 上安装 Homestead","description":"","frontmatter":{},"headers":[],"relativePath":"guide/install/homestead-for-m1.md","filePath":"guide/install/homestead-for-m1.md","lastUpdated":1672983623000}'),i={name:"guide/install/homestead-for-m1.md"},h=o('<h1 id="apple-m1-上安装-homestead" tabindex="-1">Apple M1 上安装 Homestead <a class="header-anchor" href="#apple-m1-上安装-homestead" aria-label="Permalink to &quot;Apple M1 上安装 Homestead&quot;">​</a></h1><p><a href="https://laravel.com/docs/homestead" target="_blank" rel="noreferrer">Homestead</a> 提供了一个统一的 Laravel 开发环境，而无需在本地机器上安装 PHP、Web 服务器和任何其他服务器软件。</p><h2 id="前置准备" tabindex="-1">前置准备 <a class="header-anchor" href="#前置准备" aria-label="Permalink to &quot;前置准备&quot;">​</a></h2><p>环境要求：</p><ul><li><code>Apple M1</code> 系统</li><li>系统版本大于或等于 <code>macOS Monterey 12</code><img src="'+l+'" alt=""><blockquote><p>在电脑顶部主菜单的黑苹果图标处点击下拉菜单找到 &quot;关于本机&quot; 处找到当前电脑的系统概览</p></blockquote></li></ul><h2 id="软件安装" tabindex="-1">软件安装 <a class="header-anchor" href="#软件安装" aria-label="Permalink to &quot;软件安装&quot;">​</a></h2><h3 id="parallels-desktop-18-for-mac" tabindex="-1">Parallels Desktop 18 for Mac <a class="header-anchor" href="#parallels-desktop-18-for-mac" aria-label="Permalink to &quot;Parallels Desktop 18 for Mac&quot;">​</a></h3><p>在 <a href="https://www.parallels.com/products/desktop/trial/" target="_blank" rel="noreferrer">Parallels Desktop 18 for Mac 官方地址</a>下载并安装到 Mac 电脑，软件默认有 14 天的试用期。</p><h3 id="vagrant" tabindex="-1">Vagrant <a class="header-anchor" href="#vagrant" aria-label="Permalink to &quot;Vagrant&quot;">​</a></h3><p>在 <a href="https://www.vagrantup.com/downloads" target="_blank" rel="noreferrer">Vagrant 官方地址</a> 下载 <code>vagrant</code> 并安装到本地，软件开源免费。</p><p>通过下面的方式验证是否正常：</p><p><img src="'+t+`" alt="Show vagrant version"></p><h3 id="homestead" tabindex="-1">Homestead <a class="header-anchor" href="#homestead" aria-label="Permalink to &quot;Homestead&quot;">​</a></h3><ul><li><p>下载 <a href="https://github.com/laravel/homestead.git" target="_blank" rel="noreferrer">Homestead</a></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Homestead 源码下载到本地的 \`~/Homestead\` 可以根据需要修改存放位置</span></span>
<span class="line"><span style="color:#A6ACCD;">HOMESTEAD_PATH</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">~/Homestead</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/laravel/homestead.git</span><span style="color:#A6ACCD;"> $HOMESTEAD_PATH </span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> $HOMESTEAD_PATH</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">release</span></span>
<span class="line"><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init.sh</span></span></code></pre></div></li><li><p>配置 Homestead</p><ul><li><p>安装 <code>vagrant-parallels</code> 插件 Vagrant支持 <a href="https://www.virtualbox.org/wiki/Downloads" target="_blank" rel="noreferrer">VirtualBox</a> 和 <a href="https://www.parallels.com/products/desktop/" target="_blank" rel="noreferrer">Parallels</a></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vagrant</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">plugin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vagrant-parallels</span></span></code></pre></div><blockquote><p>由于这里选择的是 Parallels 方案，所以将需要安装 <a href="https://github.com/Parallels/vagrant-parallels" target="_blank" rel="noreferrer">Parallels Vagrant</a> 插件，这个插件是免费的。</p></blockquote></li><li><p>修改 <code>Homestead.yaml</code> 文件中分别配置：</p><ul><li><p><code>provider: parallels</code></p></li><li><p><code>box: laravel/homestead-arm</code></p></li><li><p><code>version: 13.0.0</code>：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#F07178;">ip</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">192.168.56.56</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">memory</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2048</span></span>
<span class="line"><span style="color:#F07178;">cpus</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line highlighted"><wbr></span>
<span class="line highlighted"><span style="color:#F07178;">provider</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">parallels</span></span>
<span class="line highlighted"><span style="color:#F07178;">box</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">laravel/homestead-arm</span></span>
<span class="line highlighted"><span style="color:#F07178;">version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">13.0.0</span></span></code></pre></div></li></ul></li></ul><blockquote><p>更多Homestead 配置请看 <a href="https://laravel.com/docs/9.x/homestead#configuring-homestead" target="_blank" rel="noreferrer">查看文档</a>。</p></blockquote></li><li><p>下载并安装 <a href="https://app.vagrantup.com/laravel/boxes/homestead-arm" target="_blank" rel="noreferrer">laravel/homestead-arm</a></p><blockquote><p>这里通过将box下载到本地的方式，在通过路径指定box的形式进行安装，能增加成功率。</p></blockquote><ul><li><p>下载当前最新版本的Box, <a href="https://app.vagrantup.com/laravel/boxes/homestead-arm/versions/13.0.0" target="_blank" rel="noreferrer">v13.0.0</a></p><p><img src="`+n+`" alt=""></p><blockquote><p>假如下载到本地 <code>~/Downloads</code> 目录下，并将下载后命名为 <code>parallels-homestead-arm.box</code></p></blockquote></li><li><p>使用 <code>vagrant box add</code> 添加到 Vagrant</p></li><li><p>编写文件 <code>metadata.json</code> 内容如下：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">laravel/homestead-arm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">versions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">13.0.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">providers</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:[{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">parallels</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">url</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">~/Downloads/parallels-homestead-arm.box</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">}]</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">}]</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span></code></pre></div><ul><li><p>执行命令 <code>vagrant box add metadata.json</code></p><p><img src="`+p+'" alt=""></p><blockquote><p>镜像文件被添加到 <code>~/.vagrant.d/boxes</code> 目录下</p></blockquote></li><li><p>执行命令查看是否正常添加</p></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vagrant</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span></span></code></pre></div><p><img src="'+r+`" alt=""></p></li></ul></li></ul><h2 id="启动" tabindex="-1">启动 <a class="header-anchor" href="#启动" aria-label="Permalink to &quot;启动&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vagrant</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">up</span></span>
<span class="line"><span style="color:#FFCB6B;">vagrant</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">up</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">homestead</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 指定名称</span></span></code></pre></div><p>使用上面的命令可以启动 vagrant，并在 Parallels Desktop 中看到 Homestead 的镜像，如下图所示：</p><p><img src="`+c+`" alt=""></p><h2 id="连接-homestead-虚拟机" tabindex="-1">连接 Homestead 虚拟机 <a class="header-anchor" href="#连接-homestead-虚拟机" aria-label="Permalink to &quot;连接 Homestead 虚拟机&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vagrant</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ssh</span></span>
<span class="line"><span style="color:#FFCB6B;">ssh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.ssh/id_rsa</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vagrant@192.168.56.56</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 使用ssh方式登录</span></span></code></pre></div><h2 id="卸载" tabindex="-1">卸载 <a class="header-anchor" href="#卸载" aria-label="Permalink to &quot;卸载&quot;">​</a></h2><ul><li>卸载 Homestead 虚拟机</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vagrant</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">destroy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">homestead</span></span></code></pre></div><ul><li>删除 Box</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vagrant</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remove</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">laravel/homestead-arm</span></span></code></pre></div><p><img src="`+d+'" alt=""></p><p>再依次卸载 <code>Vagrant</code> 和 <code>Palallels Desktop 18 for Mac</code> 即可。</p><h2 id="vagrant常用命令" tabindex="-1">Vagrant常用命令 <a class="header-anchor" href="#vagrant常用命令" aria-label="Permalink to &quot;Vagrant常用命令&quot;">​</a></h2><table><thead><tr><th>命令</th><th>简单说明</th></tr></thead><tbody><tr><td><code>vagrant init [options] [name [url]]</code></td><td>初始化box的操作</td></tr><tr><td><code>vagrant up [options] [name or id]</code></td><td>启动虚拟机的操作</td></tr><tr><td><code>vagrant ssh [options] [name or id] [-- extra ssh args]</code></td><td>登录虚拟机的操作</td></tr><tr><td><code>vagrant box add [options] &lt;name, url, or path&gt;</code></td><td>添加box的操作</td></tr><tr><td><code>vagrant box remove &lt;name&gt;</code></td><td>删除某个box</td></tr><tr><td><code>vagrant box list</code></td><td>查看box列表</td></tr><tr><td><code>vagrant box remove</code></td><td>删除相应的box</td></tr><tr><td><code>vagrant destroy [options] [name or id]</code></td><td>停止当前正在运行的虚拟机并销毁所有创建的资源</td></tr><tr><td><code>vagrant halt [options] [name or id]</code></td><td>关闭虚拟机</td></tr><tr><td><code>vagrant package [options] [name or id]</code></td><td>打包命令，可以把当前的运行的虚拟机环境进行打包</td></tr><tr><td><code>vagrant reload [vm-name]</code></td><td>重新启动虚拟机，主要用于重新载入配置文件</td></tr><tr><td><code>vagrant suspend [name or id]</code></td><td>挂起当前虚拟机</td></tr><tr><td><code>vagrant resume [vm-name]</code></td><td>恢复被挂起的状态</td></tr><tr><td><code>vagrant ssh-config [options] [name or id]</code></td><td>输出用于ssh连接的一些信息</td></tr><tr><td><code>vagrant status [name or id]</code></td><td>获取当前虚拟机的状态</td></tr></tbody></table>',29),y=[h];function D(C,m,g,u,F,b){return s(),e("div",null,y)}const f=a(i,[["render",D]]);export{v as __pageData,f as default};
