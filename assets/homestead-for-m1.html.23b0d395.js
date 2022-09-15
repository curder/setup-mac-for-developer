import{r as o,o as r,c as l,a,b as n,F as d,e as t,d as s}from"./app.e53a7e6e.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";var c="/setup-mac-for-developer/assets/show-mac-os-version.1eb50ac1.png",i="/setup-mac-for-developer/assets/vagrant-version.86e0fe5d.png",u="/setup-mac-for-developer/assets/download-parallels.4e1952d2.png",h="/setup-mac-for-developer/assets/vagrant-box-add-homestead-arm.f597aeac.png",m="/setup-mac-for-developer/assets/vagrant-box-list-boxes.5d69cb22.png",b="/setup-mac-for-developer/assets/homestead-preview.e9a39772.png";const g={},v=t('<h1 id="apple-m1-\u4E0A\u5B89\u88C5-homestead" tabindex="-1"><a class="header-anchor" href="#apple-m1-\u4E0A\u5B89\u88C5-homestead" aria-hidden="true">#</a> Apple M1 \u4E0A\u5B89\u88C5 Homestead</h1><h2 id="\u524D\u7F6E\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u524D\u7F6E\u51C6\u5907" aria-hidden="true">#</a> \u524D\u7F6E\u51C6\u5907</h2><p>\u73AF\u5883\u8981\u6C42\uFF1A</p><ul><li><code>Apple M1</code> \u7CFB\u7EDF</li><li>\u7CFB\u7EDF\u7248\u672C\u5927\u4E8E\u6216\u7B49\u4E8E <code>macOS Monterey 12</code><img src="'+c+'" alt=""></li></ul><h2 id="\u8F6F\u4EF6\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u8F6F\u4EF6\u5B89\u88C5" aria-hidden="true">#</a> \u8F6F\u4EF6\u5B89\u88C5</h2><h3 id="parallels-desktop-18-for-mac" tabindex="-1"><a class="header-anchor" href="#parallels-desktop-18-for-mac" aria-hidden="true">#</a> Parallels Desktop 18 for Mac</h3>',6),_=s("\u5728 "),k={href:"https://www.parallels.com/products/desktop/trial/",target:"_blank",rel:"noopener noreferrer"},f=s("Parallels Desktop 18 for Mac \u5B98\u65B9\u5730\u5740"),x=s("\u4E0B\u8F7D\u5E76\u5B89\u88C5\u5230 Mac \u7535\u8111\u3002\u8F6F\u4EF6\u9ED8\u8BA4\u6709 14 \u5929\u7684\u8BD5\u7528\u671F\u3002"),q=a("h3",{id:"vagrant",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#vagrant","aria-hidden":"true"},"#"),s(" Vagrant")],-1),w=s("\u5728 "),y={href:"https://www.vagrantup.com/downloads",target:"_blank",rel:"noopener noreferrer"},H=s("Vagrant \u5B98\u65B9\u5730\u5740"),V=s(" \u4E0B\u8F7D "),M=a("code",null,"vagrant",-1),P=s(" \u5E76\u5B89\u88C5\u5230\u672C\u5730\uFF0C\u8F6F\u4EF6\u5F00\u6E90\u514D\u8D39\u3002"),D=a("p",null,"\u901A\u8FC7\u4E0B\u9762\u7684\u65B9\u5F0F\u9A8C\u8BC1\u662F\u5426\u6B63\u5E38\uFF1A",-1),E=a("p",null,[a("img",{src:i,alt:"Show vagrant version"})],-1),A=a("h3",{id:"homestead",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#homestead","aria-hidden":"true"},"#"),s(" Homestead")],-1),T=s("\u4E0B\u8F7D "),S={href:"https://github.com/laravel/homestead.git",target:"_blank",rel:"noopener noreferrer"},j=s("Homestead"),B=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Homestead \u6E90\u7801\u4E0B\u8F7D\u5230\u672C\u5730\u7684 \`~/Homestead\` \u53EF\u4EE5\u6839\u636E\u9700\u8981\u4FEE\u6539\u5B58\u653E\u4F4D\u7F6E</span>
<span class="token assign-left variable">HOMESTEAD_PATH</span><span class="token operator">=~</span>/Homestead
<span class="token function">git</span> clone https://github.com/laravel/homestead.git <span class="token variable">$HOMESTEAD_PATH</span> 
<span class="token builtin class-name">cd</span> <span class="token variable">$HOMESTEAD_PATH</span>
<span class="token function">git</span> checkout release
<span class="token function">bash</span> init.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,1),N=a("p",null,"\u914D\u7F6E Homestead",-1),O=s("\u5B89\u88C5 "),F=a("code",null,"vagrant-parallels",-1),I=s(" \u63D2\u4EF6 Vagrant\u652F\u6301 "),L={href:"https://www.virtualbox.org/wiki/Downloads",target:"_blank",rel:"noopener noreferrer"},$=s("VirtualBox"),C=s(" \u548C "),z={href:"https://www.parallels.com/products/desktop/",target:"_blank",rel:"noopener noreferrer"},G=s("Parallels"),J=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vagrant plugin <span class="token function">install</span> vagrant-parallels
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,1),K=s("\u7531\u4E8E\u8FD9\u91CC\u9009\u62E9\u7684\u662F Parallels \u65B9\u6848\uFF0C\u6240\u4EE5\u5C06\u9700\u8981\u5B89\u88C5 "),Q={href:"https://github.com/Parallels/vagrant-parallels",target:"_blank",rel:"noopener noreferrer"},R=s("Parallels Vagrant"),U=s(" \u63D2\u4EF6\u3002\u8FD9\u4E2A\u662F\u514D\u8D39\u7684\u3002"),W=t(`<li><p>\u4FEE\u6539 <code>Homestead.yaml</code> \u6587\u4EF6\u4E2D\u7684 <code>provider</code> \u952E\u914D\u7F6E\u4E3A\uFF1A<code>parallels</code>\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">ip</span><span class="token punctuation">:</span> <span class="token string">&quot;192.168.56.56&quot;</span>
<span class="token key atrule">memory</span><span class="token punctuation">:</span> <span class="token number">2048</span>
<span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token number">2</span>
<span class="token key atrule">provider</span><span class="token punctuation">:</span> parallels
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>\u4FEE\u6539 <code>scripts/homestead.rb</code> \u6587\u4EF6\u4EE3\u7801\u903B\u8F91</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u4FEE\u6539\u524D
config.vm.box = settings[&#39;box&#39;] ||= &#39;laravel/homestead&#39;
config.vm.box_version = settings[&#39;version&#39;] ||= &#39;&gt;= 12.0.0, &lt; 13.0.0&#39;

# \u4FEE\u6539\u540E
config.vm.box = settings[&#39;box&#39;] ||= &#39;laravel/homestead-arm&#39;
config.vm.box_version = settings[&#39;version&#39;] ||= &#39;&gt;= 12.0.0, &lt;= 13.0.0&#39;
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p>\u7531\u4E8E\u5F53\u524D\u4E0B\u8F7D\u7684 laravel/homestead-arm \u4E3A <code>13.0.0</code> \u6240\u4EE5\u9700\u8981\u4FEE\u6539\u4E00\u4E0B\u7248\u672C\u9650\u5B9A\u6761\u4EF6</p></blockquote></li>`,2),X=s("\u66F4\u591AHomestead \u914D\u7F6E\u8BF7\u770B "),Y={href:"https://laravel.com/docs/9.x/homestead#configuring-homestead",target:"_blank",rel:"noopener noreferrer"},Z=s("\u67E5\u770B\u6587\u6863"),aa=s("\u3002"),sa=s("\u5B89\u88C5 "),ea={href:"https://app.vagrantup.com/laravel/boxes/homestead-arm",target:"_blank",rel:"noopener noreferrer"},na=s("laravel/homestead-arm"),ta=a("blockquote",null,[a("p",null,"\u8FD9\u91CC\u901A\u8FC7\u5C06box\u4E0B\u8F7D\u5230\u672C\u5730\u7684\u65B9\u5F0F\uFF0C\u5728\u901A\u8FC7\u8DEF\u5F84\u6307\u5B9Abox\u7684\u5F62\u5F0F\u8FDB\u884C\u5B89\u88C5\uFF0C\u80FD\u589E\u52A0\u6210\u529F\u7387\u3002")],-1),oa=s("\u4E0B\u8F7D\u5F53\u524D\u6700\u65B0\u7248\u672C\u7684Box, "),ra={href:"https://app.vagrantup.com/laravel/boxes/homestead-arm/versions/13.0.0",target:"_blank",rel:"noopener noreferrer"},la=s("v13.0.0"),da=a("p",null,[a("img",{src:u,alt:""})],-1),pa=a("blockquote",null,[a("p",null,[s("\u5047\u5982\u4E0B\u8F7D\u5230\u672C\u5730 "),a("code",null,"~/Downloads"),s(" \u76EE\u5F55\u4E0B\uFF0C\u5E76\u5C06\u4E0B\u8F7D\u540E\u547D\u540D\u4E3A "),a("code",null,"parallels-homestead-arm.box")])],-1),ca=t(`<li><p>\u4F7F\u7528 <code>vagrant box add</code> \u6DFB\u52A0\u5230 Vagrant</p></li><li><p>\u7F16\u5199\u6587\u4EF6 <code>metadata.json</code> \u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;laravel/homestead-arm&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;versions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;13.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;providers&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;parallels&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~/Downloads/parallels-homestead-arm.box&quot;</span>
     <span class="token punctuation">}</span><span class="token punctuation">]</span>
   <span class="token punctuation">}</span><span class="token punctuation">]</span>
 <span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li><p>\u6267\u884C\u547D\u4EE4 <code>vagrant box add metadata.json</code></p><p><img src="`+h+`" alt=""></p></li><li><p>\u6267\u884C\u547D\u4EE4\u67E5\u770B\u662F\u5426\u6B63\u5E38\u6DFB\u52A0</p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vagrant box list
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="`+m+'" alt=""></p></li>',2),ia=t(`<h2 id="\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8" aria-hidden="true">#</a> \u542F\u52A8</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vagrant up
vagrant up homestead <span class="token comment"># \u6307\u5B9A\u540D\u79F0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4F7F\u7528\u4E0A\u9762\u7684\u547D\u4EE4\u53EF\u4EE5\u542F\u52A8 vagrant\uFF0C\u5E76\u5728 Parallels Desktop \u4E2D\u770B\u5230 Homestead \u7684\u955C\u50CF\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="`+b+`" alt=""></p><h2 id="\u8FDE\u63A5-homestead-\u865A\u62DF\u673A" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u63A5-homestead-\u865A\u62DF\u673A" aria-hidden="true">#</a> \u8FDE\u63A5 Homestead \u865A\u62DF\u673A</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vagrant <span class="token function">ssh</span>
<span class="token function">ssh</span> -i ~/.ssh/id_rsa vagrant@192.168.56.56 <span class="token comment"># \u4F7F\u7528ssh\u65B9\u5F0F\u767B\u5F55</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="vagrant\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#vagrant\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> Vagrant\u5E38\u7528\u547D\u4EE4</h2><table><thead><tr><th>\u547D\u4EE4</th><th>\u7B80\u5355\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>vagrant init [options] [name [url]]</code></td><td>\u521D\u59CB\u5316box\u7684\u64CD\u4F5C</td></tr><tr><td><code>vagrant up [options] [name or id]</code></td><td>\u542F\u52A8\u865A\u62DF\u673A\u7684\u64CD\u4F5C</td></tr><tr><td><code>vagrant ssh [options] [name or id] [-- extra ssh args]</code></td><td>\u767B\u5F55\u865A\u62DF\u673A\u7684\u64CD\u4F5C</td></tr><tr><td><code>vagrant box add [options] &lt;name, url, or path&gt;</code></td><td>\u6DFB\u52A0box\u7684\u64CD\u4F5C</td></tr><tr><td><code>vagrant box remove &lt;name&gt;</code></td><td>\u5220\u9664\u67D0\u4E2Abox</td></tr><tr><td><code>vagrant box list</code></td><td>\u67E5\u770Bbox\u5217\u8868</td></tr><tr><td><code>vagrant box remove</code></td><td>\u5220\u9664\u76F8\u5E94\u7684box</td></tr><tr><td><code>vagrant destroy [options] [name or id]</code></td><td>\u505C\u6B62\u5F53\u524D\u6B63\u5728\u8FD0\u884C\u7684\u865A\u62DF\u673A\u5E76\u9500\u6BC1\u6240\u6709\u521B\u5EFA\u7684\u8D44\u6E90</td></tr><tr><td><code>vagrant halt [options] [name or id]</code></td><td>\u5173\u95ED\u865A\u62DF\u673A</td></tr><tr><td><code>vagrant package [options] [name or id]</code></td><td>\u6253\u5305\u547D\u4EE4\uFF0C\u53EF\u4EE5\u628A\u5F53\u524D\u7684\u8FD0\u884C\u7684\u865A\u62DF\u673A\u73AF\u5883\u8FDB\u884C\u6253\u5305</td></tr><tr><td><code>vagrant reload [vm-name]</code></td><td>\u91CD\u65B0\u542F\u52A8\u865A\u62DF\u673A\uFF0C\u4E3B\u8981\u7528\u4E8E\u91CD\u65B0\u8F7D\u5165\u914D\u7F6E\u6587\u4EF6</td></tr><tr><td><code>vagrant suspend [name or id]</code></td><td>\u6302\u8D77\u5F53\u524D\u865A\u62DF\u673A</td></tr><tr><td><code>vagrant resume [vm-name]</code></td><td>\u6062\u590D\u88AB\u6302\u8D77\u7684\u72B6\u6001</td></tr><tr><td><code>vagrant ssh-config [options] [name or id]</code></td><td>\u8F93\u51FA\u7528\u4E8Essh\u8FDE\u63A5\u7684\u4E00\u4E9B\u4FE1\u606F</td></tr><tr><td><code>vagrant status [name or id]</code></td><td>\u83B7\u53D6\u5F53\u524D\u865A\u62DF\u673A\u7684\u72B6\u6001</td></tr></tbody></table>`,8);function ua(ha,ma){const e=o("ExternalLinkIcon");return r(),l(d,null,[v,a("p",null,[_,a("a",k,[f,n(e)]),x]),q,a("p",null,[w,a("a",y,[H,n(e)]),V,M,P]),D,E,A,a("ul",null,[a("li",null,[a("p",null,[T,a("a",S,[j,n(e)])]),B]),a("li",null,[N,a("ul",null,[a("li",null,[a("p",null,[O,F,I,a("a",L,[$,n(e)]),C,a("a",z,[G,n(e)])]),J,a("blockquote",null,[a("p",null,[K,a("a",Q,[R,n(e)]),U])])]),W]),a("blockquote",null,[a("p",null,[X,a("a",Y,[Z,n(e)]),aa])])]),a("li",null,[a("p",null,[sa,a("a",ea,[na,n(e)])]),ta,a("ul",null,[a("li",null,[a("p",null,[oa,a("a",ra,[la,n(e)])]),da,pa]),ca])])]),ia],64)}var va=p(g,[["render",ua]]);export{va as default};
