import{_ as s,c as a,o as n,a as l}from"./app.c30a3164.js";const p="/setup-mac-for-developer/assets/notification-message.2047a553.jpeg",e="/setup-mac-for-developer/assets/mamp-apply-ssl-to-protected-website.10d1047c.png",h=JSON.parse('{"title":"mkcert","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u521D\u59CB\u5316\u914D\u7F6E","slug":"\u521D\u59CB\u5316\u914D\u7F6E","link":"#\u521D\u59CB\u5316\u914D\u7F6E","children":[]},{"level":3,"title":"\u521B\u5EFA\u7EDF\u4E00\u5B58\u653E\u76EE\u5F55","slug":"\u521B\u5EFA\u7EDF\u4E00\u5B58\u653E\u76EE\u5F55","link":"#\u521B\u5EFA\u7EDF\u4E00\u5B58\u653E\u76EE\u5F55","children":[]},{"level":3,"title":"\u751F\u6210\u8BC1\u4E66","slug":"\u751F\u6210\u8BC1\u4E66","link":"#\u751F\u6210\u8BC1\u4E66","children":[]},{"level":3,"title":"Nginx\u914D\u7F6ESSL\u8BC1\u4E66","slug":"nginx\u914D\u7F6Essl\u8BC1\u4E66","link":"#nginx\u914D\u7F6Essl\u8BC1\u4E66","children":[]},{"level":3,"title":"\u5728laravel-mix\u9879\u76EE\u4E2D\u4F7F\u7528","slug":"\u5728laravel-mix\u9879\u76EE\u4E2D\u4F7F\u7528","link":"#\u5728laravel-mix\u9879\u76EE\u4E2D\u4F7F\u7528","children":[]},{"level":3,"title":"\u5728 Docker nginx \u4E2D\u4F7F\u7528","slug":"\u5728-docker-nginx-\u4E2D\u4F7F\u7528","link":"#\u5728-docker-nginx-\u4E2D\u4F7F\u7528","children":[]}],"relativePath":"guide/config/mkcert.md","lastUpdated":1666926661000}'),o={name:"guide/config/mkcert.md"},c=l('<h1 id="mkcert" tabindex="-1">mkcert <a class="header-anchor" href="#mkcert" aria-hidden="true">#</a></h1><h3 id="\u521D\u59CB\u5316\u914D\u7F6E" tabindex="-1">\u521D\u59CB\u5316\u914D\u7F6E <a class="header-anchor" href="#\u521D\u59CB\u5316\u914D\u7F6E" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">mkcert -install</span></span>\n<span class="line"></span></code></pre></div><h3 id="\u521B\u5EFA\u7EDF\u4E00\u5B58\u653E\u76EE\u5F55" tabindex="-1">\u521B\u5EFA\u7EDF\u4E00\u5B58\u653E\u76EE\u5F55 <a class="header-anchor" href="#\u521B\u5EFA\u7EDF\u4E00\u5B58\u653E\u76EE\u5F55" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">mkdir -p </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.certs/ </span><span style="color:#676E95;"># \u521B\u5EFA\u5BF9\u5E94\u5B58\u653E\u76EE\u5F55</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">ls -l </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.certs </span><span style="color:#676E95;"># \u67E5\u770B\u76EE\u5F55\u662F\u5426\u5B58\u5728</span></span>\n<span class="line"></span></code></pre></div><h3 id="\u751F\u6210\u8BC1\u4E66" tabindex="-1">\u751F\u6210\u8BC1\u4E66 <a class="header-anchor" href="#\u751F\u6210\u8BC1\u4E66" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> ssl_path=</span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.certs</span></span>\n<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> domain=example.test</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">mkdir -p </span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">ssl_path</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">/</span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">domain</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># \u521B\u5EFA\u8BC1\u4E66\u5BF9\u5E94\u76EE\u5F55</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">mkcert -key-file </span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">ssl_path</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">/</span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">domain</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">/privkey.pem \\</span></span>\n<span class="line"><span style="color:#A6ACCD;">       -cert-file </span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">ssl_path</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">/</span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">domain</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">/fullchain.pem \\</span></span>\n<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">www.</span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">domain</span><span style="color:#89DDFF;">}&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">m.</span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">domain</span><span style="color:#89DDFF;">}&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;${</span><span style="color:#A6ACCD;">domain</span><span style="color:#89DDFF;">}&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*.</span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">domain</span><span style="color:#89DDFF;">}&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">localhost</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;"># ls -l `echo ${ssl_path}/${domain}` # \u67E5\u770B\u8BC1\u4E66\u6587\u4EF6</span></span>\n<span class="line"><span style="color:#676E95;"># ls -ld `echo ${ssl_path}/${domain}` # \u8BC1\u4E66\u6240\u5728\u8DEF\u5F84</span></span>\n<span class="line"></span></code></pre></div><blockquote><p>\u5728\u6267\u884C\u4E0A\u9762\u547D\u4EE4\u7684\u65F6\u5019\uFF0C<code>ssl_path</code>\u53EF\u4EE5\u9009\u62E9\u5408\u9002\u7684\u8BC1\u4E66\u5B58\u653E\u7684\u8DEF\u5F84\uFF0C<code>domain</code> \u6839\u636E\u5B9E\u9645\u60C5\u51B5\u5B9A\u4E49\uFF0C<strong>\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u540E\u671F\u589E\u51CF\u91CD\u65B0\u6267\u884C\u547D\u4EE4\u751F\u6210</strong>\u3002</p></blockquote><p>\u4E0B\u56FE\u662F\u6267\u884C\u6210\u529F\u7684\u4E00\u4E9B\u4FE1\u606F\u3002</p><p><img src="'+p+'" alt="mkcert notification message"></p><h3 id="nginx\u914D\u7F6Essl\u8BC1\u4E66" tabindex="-1">Nginx\u914D\u7F6ESSL\u8BC1\u4E66 <a class="header-anchor" href="#nginx\u914D\u7F6Essl\u8BC1\u4E66" aria-hidden="true">#</a></h3><p>\u4EE5MAMP\u5BA2\u6237\u7AEF\u4E3A\u4F8B\u3002</p><ol><li>\u9009\u62E9\u8981\u52A0\u5BC6\u7684\u4E3B\u673A</li><li>\u9009\u62E9SSL\u9009\u9879</li><li>\u6253\u5F00SSL\u9009\u9879</li><li>\u70B9\u51FB\u6587\u4EF6\u5939\u9009\u62E9\u521A\u521A\u7533\u8BF7\u7684\u8BC1\u4E66\u6587\u4EF6\uFF0C\u6CE8\u610F\u4E00\u822C\u662F<code>fullchain.pem</code></li><li>\u70B9\u51FB\u6587\u4EF6\u5939\u9009\u62E9\u521A\u521A\u7533\u8BF7\u7684\u5BC6\u94A5\u6587\u4EF6\uFF0C\u6CE8\u610F\u4E00\u822C\u662F<code>privkey.pem</code></li><li>\u53EF\u9009\u64CD\u4F5C\uFF0C\u662F\u5426\u5F3A\u5236<code>http</code>\u8DF3\u8F6C\u5230<code>https</code>\u8BBF\u95EE</li><li>\u70B9\u51FB\u4FDD\u5B58\uFF0C\u5E76\u91CD\u542F\u670D\u52A1</li><li>\u5982\u679C\u914D\u7F6E\u6210\u529F\u4E00\u822C\u5728\u5217\u8868\u5904\u4F1A\u6709\u4E00\u628A\u9501</li></ol><p><img src="'+e+`" alt="mkcert notification message"></p><h3 id="\u5728laravel-mix\u9879\u76EE\u4E2D\u4F7F\u7528" tabindex="-1">\u5728<code>laravel-mix</code>\u9879\u76EE\u4E2D\u4F7F\u7528 <a class="header-anchor" href="#\u5728laravel-mix\u9879\u76EE\u4E2D\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">mix</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">browserSync</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">proxy</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://www.example.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">https</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">~/.certs/example.com/privkey.pem</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">cert</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">~/.certs/example.com/fullchain.pem</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u914D\u7F6E\u4E4B\u524D\u9700\u8981\u4FDD\u8BC1<code>https://example.com</code>\u80FD\u6B63\u5E38\u8BBF\u95EE\u3002</p><p><code>key</code> \u548C <code>cert</code> \u7684\u914D\u7F6E\u8DDF\u5F53\u524D\u751F\u6210\u8BC1\u4E66\u65F6\u6307\u5B9A\u7684\u6587\u4EF6\u4FDD\u6301\u4E00\u81F4\u3002</p></blockquote><h3 id="\u5728-docker-nginx-\u4E2D\u4F7F\u7528" tabindex="-1">\u5728 Docker nginx \u4E2D\u4F7F\u7528 <a class="header-anchor" href="#\u5728-docker-nginx-\u4E2D\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u5728\u9879\u76EE\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u6DFB\u52A0\u5982\u4E0B\u6837\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;"> example.com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">301</span><span style="color:#A6ACCD;"> https://</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">server_name</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">request_uri;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">443</span><span style="color:#A6ACCD;"> ssl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;"> example.com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># \u5BB9\u5668\u4E2D\u516C\u3001\u79C1\u94A5\u5BF9\u5E94\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> ssl_certificate </span><span style="color:#A6ACCD;">    /etc/nginx/ssl/example.com/fullchain.pem</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> ssl_certificate_key </span><span style="color:#A6ACCD;">/etc/nginx/ssl/example.com/privkey.pem</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> root </span><span style="color:#A6ACCD;">  /usr/share/nginx/html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> index </span><span style="color:#A6ACCD;"> index.html index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><p><a href="https://ssl-config.mozilla.org/#server=nginx&amp;version=1.17.7&amp;config=intermediate&amp;openssl=1.1.1k&amp;ocsp=false&amp;guideline=5.6" target="_blank" rel="noreferrer">Nginx SSL\u914D\u7F6E</a></p>`,21),t=[c];function r(i,D,y,C,A,F){return n(),a("div",null,t)}const m=s(o,[["render",r]]);export{h as __pageData,m as default};
