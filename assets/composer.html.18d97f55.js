import{r as o,o as i,c as t,a as e,b as n,F as c,d as s,e as r}from"./app.feabc0ab.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";var p="/setup-mac-for-developer/assets/composer-repository-manager-info.591fb830.png",d="/setup-mac-for-developer/assets/composer-repository-manager-select-aliyun.b6a75098.png";const h={},u=e("h1",{id:"\u914D\u7F6E-composer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u914D\u7F6E-composer","aria-hidden":"true"},"#"),s(" \u914D\u7F6E Composer")],-1),m={id:"composer-\u6E90\u7BA1\u7406\u5DE5\u5177-crm",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#composer-\u6E90\u7BA1\u7406\u5DE5\u5177-crm","aria-hidden":"true"},"#",-1),g=s(" Composer \u6E90\u7BA1\u7406\u5DE5\u5177 "),_={href:"https://github.com/slince/composer-registry-manager",target:"_blank",rel:"noopener noreferrer"},f=s("CRM"),v=r(`<h4 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> global require slince/composer-registry-manager
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><p>\u5982\u679C\u5728\u5B89\u88C5\u7684\u65F6\u5019\u6BD4\u8F83\u6162\uFF0C\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4\u4E34\u65F6\u4F7F\u7528 aliyun \u955C\u50CF\u6765\u5B89\u88C5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> config -g repos.packagist <span class="token function">composer</span> https://mirrors.aliyun.com/composer
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>\u5982\u679C\u9700\u8981\u8FD8\u539F\u955C\u50CF\u4F7F\u7528\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> config -g repo.packagist <span class="token function">composer</span> https://packagist.org
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul><p>\u901A\u8FC7\u4E0A\u9762\u7684\u547D\u4EE4\uFF0C\u53EF\u4EE5\u5F97\u5230\u547D\u4EE4 <code>composer repo</code></p><p><img src="`+p+'" alt=""></p>',5),k={id:"\u914D\u7F6E-crm",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#\u914D\u7F6E-crm","aria-hidden":"true"},"#",-1),y=s(" \u914D\u7F6E "),q={href:"https://github.com/slince/composer-registry-manager",target:"_blank",rel:"noopener noreferrer"},C=s("CRM"),M=r(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> repo:use aliyun
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>\u901A\u8FC7\u4E0A\u9762\u7684\u547D\u4EE4\u914D\u7F6E\u955C\u50CF\u5730\u5740\u4E3A <code>aliyun</code></p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> repo:ls <span class="token comment"># \u67E5\u770B\u6240\u6709\u955C\u50CF\u5730\u5740</span>

<span class="token function">composer</span> repo:use <span class="token variable">$Mirror</span> <span class="token comment"># \u5728\u5217\u8868\u4E2D\u9009\u62E9\u955C\u50CF\u5730\u5740\uFF0C\u5176\u4E2D $Mirror \u4E3A\u5217\u8868\u9879</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="`+d+'" alt=""></p>',4),V=s("\u81F3\u6B64\uFF0C"),N={href:"https://github.com/slince/composer-registry-manager",target:"_blank",rel:"noopener noreferrer"},B=s("CRM"),E=s(" \u5B89\u88C5\u5B8C\u6BD5\u3002"),R=r(`<h4 id="\u5B89\u88C5\u62A5\u9519" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u62A5\u9519" aria-hidden="true">#</a> \u5B89\u88C5\u62A5\u9519</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Peer&#39;s certificate issuer has been marked as not trusted by the user.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,2),j=s("\u5728\u5B89\u88C5\u7684\u8FC7\u7A0B\u4E2D \u62A5\u9519\uFF1A"),F={href:"https://discuss.devopscube.com/t/solved-git-github-peers-certificate-issuer-has-been-marked-as-not-trusted-by-the-user/474",target:"_blank",rel:"noopener noreferrer"},I=s("Peer's certificate issuer has been marked as not trusted by the user."),L=r(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global http.sslVerify <span class="token boolean">false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>\u901A\u8FC7\u8BBE\u7F6E\u4E0A\u9762\u7684 git \u914D\u7F6E\uFF0C\u53EF\u4EE5\u5FFD\u7565 ssl \u7684\u68C0\u67E5\u3002</p></blockquote>`,2),P={id:"\u591A\u7EBF\u7A0B\u4E0B\u8F7D-hirak-prestissimo",tabindex:"-1"},$=e("a",{class:"header-anchor",href:"#\u591A\u7EBF\u7A0B\u4E0B\u8F7D-hirak-prestissimo","aria-hidden":"true"},"#",-1),z=s(" \u591A\u7EBF\u7A0B\u4E0B\u8F7D "),S={href:"https://github.com/hirak/prestissimo",target:"_blank",rel:"noopener noreferrer"},T=s("hirak/prestissimo"),w=r(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> global require hirak/prestissimo
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,1),A={id:"\u81EA\u52A8\u90E8\u7F72\u5DE5\u5177-deployer-deployer",tabindex:"-1"},D=e("a",{class:"header-anchor",href:"#\u81EA\u52A8\u90E8\u7F72\u5DE5\u5177-deployer-deployer","aria-hidden":"true"},"#",-1),G=s(" \u81EA\u52A8\u90E8\u7F72\u5DE5\u5177 "),H={href:"https://github.com/deployphp/deployer",target:"_blank",rel:"noopener noreferrer"},J=s("deployer/deployer"),K=r(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> global require deployer/deployer deployer/recipes curder/deployphp-recipes --no-progress --profile --prefer-dist
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> global require phpunit/phpunit laravel/installer friendsofphp/php-cs-fixer squizlabs/php_codesniffer --no-progress --profile --prefer-dist
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u4E0B\u8F7D\u5168\u5C40\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u5168\u5C40\u547D\u4EE4" aria-hidden="true">#</a> \u4E0B\u8F7D\u5168\u5C40\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> global require laravel/installer -vvv
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,4);function O(Q,U){const a=o("ExternalLinkIcon");return i(),t(c,null,[u,e("h3",m,[b,g,e("a",_,[f,n(a)])]),v,e("h4",k,[x,y,e("a",q,[C,n(a)])]),M,e("p",null,[V,e("a",N,[B,n(a)]),E]),R,e("p",null,[j,e("a",F,[I,n(a)])]),L,e("h3",P,[$,z,e("a",S,[T,n(a)])]),w,e("h3",A,[D,G,e("a",H,[J,n(a)])]),K],64)}var Y=l(h,[["render",O]]);export{Y as default};