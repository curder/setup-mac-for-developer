import{_ as s,c as a,o as n,a as l}from"./app.c30a3164.js";const C=JSON.parse('{"title":"\u5176\u4ED6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5C4F\u853D\u65B0\u5EFA\u7A97\u53E3 last login \u63D0\u793A","slug":"\u5C4F\u853D\u65B0\u5EFA\u7A97\u53E3-last-login-\u63D0\u793A","link":"#\u5C4F\u853D\u65B0\u5EFA\u7A97\u53E3-last-login-\u63D0\u793A","children":[]},{"level":2,"title":"\u6DFB\u52A0\u547D\u4EE4\u884C\u5FEB\u6377\u65B9\u5F0F","slug":"\u6DFB\u52A0\u547D\u4EE4\u884C\u5FEB\u6377\u65B9\u5F0F","link":"#\u6DFB\u52A0\u547D\u4EE4\u884C\u5FEB\u6377\u65B9\u5F0F","children":[]}],"relativePath":"guide/config/other.md","lastUpdated":1666926661000}'),p={name:"guide/config/other.md"},o=l(`<h1 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h1><h2 id="\u5C4F\u853D\u65B0\u5EFA\u7A97\u53E3-last-login-\u63D0\u793A" tabindex="-1">\u5C4F\u853D\u65B0\u5EFA\u7A97\u53E3 last login \u63D0\u793A <a class="header-anchor" href="#\u5C4F\u853D\u65B0\u5EFA\u7A97\u53E3-last-login-\u63D0\u793A" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">touch </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.hushlogin</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6DFB\u52A0\u547D\u4EE4\u884C\u5FEB\u6377\u65B9\u5F0F" tabindex="-1">\u6DFB\u52A0\u547D\u4EE4\u884C\u5FEB\u6377\u65B9\u5F0F <a class="header-anchor" href="#\u6DFB\u52A0\u547D\u4EE4\u884C\u5FEB\u6377\u65B9\u5F0F" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki has-diff"><code><span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> ...=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../..</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> ....=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../../..</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> .....=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../../../..</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> ......=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../../../../..</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># git</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> ga=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git add</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> gaa=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git add --all</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> gam=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git am</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> gb=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git branch</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> gc=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git commit -v</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> gcb=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git checkout -b</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> gcd=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git checkout develop</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> gcm=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git checkout master</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> gcf=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git config --list</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> gco=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git checkout</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> gd=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git diff</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> gdca=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git diff --cached</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> gl=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git pull</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> gll=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git log --graph --abbrev-commit --decorate --all --format=format:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\&#39;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(dim white) - %an%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n %C(white)%s%C(reset)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> gm=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git merge</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> gmd=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git merge develop</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> gp=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git push</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> gr=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git remote</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> gra=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git remote add</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> grb=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git rebase</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> gst=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git status</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> nah=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git reset --hard;git clean -df</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> wip=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git add . &amp;&amp; git commit -m WIP</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> wipa=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">git add . &amp;&amp; git commit --amend -m </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\&#39;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">WIP</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> l=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ls -lah</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> la=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ls -lAh</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> ll=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ls -lh</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> ls=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ls -G</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> lsa=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ls -lah</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> lsof=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sudo lsof -nP -iTCP -sTCP:LISTEN | grep </span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> md=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mkdir -p</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> p=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vendor/bin/phpunit </span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> pf=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vendor/bin/phpunit --filter </span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;"> tinker=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">php artisan tinker</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"># command alias</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.zshrc</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">source ~/.alias</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.zshrc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.zshrc </span><span style="color:#676E95;"># \u91CD\u8F7D\u914D\u7F6E</span></span>
<span class="line"></span></code></pre></div><p>\u5C06\u4E0A\u9762\u7684\u914D\u7F6E\u6587\u4EF6\u5199\u5165\u5230 <code>~/.alias</code> \u6587\u4EF6\u4E2D\uFF0C\u5E76\u5728 <code>~/.zshrc</code> \u4E2D\u901A\u8FC7 <code>source ~/.alias</code> \u7684\u65B9\u5F0F\u5F15\u5165\u3002</p><blockquote><p>\u66F4\u591A\u8BE6\u60C5<a href="http://osxdaily.com/2010/06/22/remove-the-last-login-message-from-the-terminal/" target="_blank" rel="noreferrer">\u53C2\u8003\u8FD9\u91CC</a></p></blockquote>`,8),e=[o];function t(c,r,D,F,y,i){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};
