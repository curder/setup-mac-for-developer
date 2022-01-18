import{e as s}from"./app.feabc0ab.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";var a="/setup-mac-for-developer/assets/mkcert-notification-message.2047a553.jpeg",e="/setup-mac-for-developer/assets/mamp-apply-ssl-to-protected-website.10d1047c.png";const p={},l=s('<h1 id="\u914D\u7F6E-mkcert" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-mkcert" aria-hidden="true">#</a> \u914D\u7F6E mkcert</h1><h3 id="\u521D\u59CB\u5316\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u914D\u7F6E" aria-hidden="true">#</a> \u521D\u59CB\u5316\u914D\u7F6E</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mkcert -install\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u521B\u5EFA\u7EDF\u4E00\u5B58\u653E\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u7EDF\u4E00\u5B58\u653E\u76EE\u5F55" aria-hidden="true">#</a> \u521B\u5EFA\u7EDF\u4E00\u5B58\u653E\u76EE\u5F55</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p ~/.certs/ <span class="token comment"># \u521B\u5EFA\u5BF9\u5E94\u5B58\u653E\u76EE\u5F55</span>\n\n<span class="token function">ls</span> -l ~/.certs <span class="token comment"># \u67E5\u770B\u76EE\u5F55\u662F\u5426\u5B58\u5728</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u751F\u6210\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u8BC1\u4E66" aria-hidden="true">#</a> \u751F\u6210\u8BC1\u4E66</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">ssl_path</span><span class="token operator">=~</span>/.certs\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">domain</span><span class="token operator">=</span>example.test\n\n<span class="token function">mkdir</span> -p <span class="token variable">${ssl_path}</span>/<span class="token variable">${domain}</span> <span class="token comment"># \u521B\u5EFA\u8BC1\u4E66\u5BF9\u5E94\u76EE\u5F55</span>\n\nmkcert -key-file <span class="token variable">${ssl_path}</span>/<span class="token variable">${domain}</span>/privkey.pem <span class="token punctuation">\\</span>\n       -cert-file <span class="token variable">${ssl_path}</span>/<span class="token variable">${domain}</span>/fullchain.pem <span class="token punctuation">\\</span>\n       <span class="token string">&quot;www.<span class="token variable">${domain}</span>&quot;</span> <span class="token string">&quot;m.<span class="token variable">${domain}</span>&quot;</span> <span class="token string">&quot;<span class="token variable">${domain}</span>&quot;</span> <span class="token string">&quot;*.<span class="token variable">${domain}</span>&quot;</span> <span class="token string">&quot;localhost&quot;</span>\n\n<span class="token comment"># ls -l `echo ${ssl_path}/${domain}` # \u67E5\u770B\u8BC1\u4E66\u6587\u4EF6</span>\n<span class="token comment"># ls -ld `echo ${ssl_path}/${domain}` # \u8BC1\u4E66\u6240\u5728\u8DEF\u5F84</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p>\u5728\u6267\u884C\u4E0A\u9762\u547D\u4EE4\u7684\u65F6\u5019\uFF0C<code>ssl_path</code>\u53EF\u4EE5\u9009\u62E9\u5408\u9002\u7684\u8BC1\u4E66\u5B58\u653E\u7684\u8DEF\u5F84\uFF0C<code>domain</code> \u6839\u636E\u5B9E\u9645\u60C5\u51B5\u5B9A\u4E49\uFF0C<strong>\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u540E\u671F\u589E\u51CF\u91CD\u65B0\u6267\u884C\u547D\u4EE4\u751F\u6210</strong>\u3002</p></blockquote><p>\u4E0B\u56FE\u662F\u6267\u884C\u6210\u529F\u7684\u4E00\u4E9B\u4FE1\u606F\u3002</p><p><img src="'+a+'" alt="mkcert notification message"></p><h3 id="nginx\u914D\u7F6Essl\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#nginx\u914D\u7F6Essl\u8BC1\u4E66" aria-hidden="true">#</a> Nginx\u914D\u7F6ESSL\u8BC1\u4E66</h3><p>\u4EE5MAMP\u5BA2\u6237\u7AEF\u4E3A\u4F8B\u3002</p><ol><li>\u9009\u62E9\u8981\u52A0\u5BC6\u7684\u4E3B\u673A</li><li>\u9009\u62E9SSL\u9009\u9879</li><li>\u6253\u5F00SSL\u9009\u9879</li><li>\u70B9\u51FB\u6587\u4EF6\u5939\u9009\u62E9\u521A\u521A\u7533\u8BF7\u7684\u8BC1\u4E66\u6587\u4EF6\uFF0C\u6CE8\u610F\u4E00\u822C\u662F<code>fullchain.pem</code></li><li>\u70B9\u51FB\u6587\u4EF6\u5939\u9009\u62E9\u521A\u521A\u7533\u8BF7\u7684\u5BC6\u94A5\u6587\u4EF6\uFF0C\u6CE8\u610F\u4E00\u822C\u662F<code>privkey.pem</code></li><li>\u53EF\u9009\u64CD\u4F5C\uFF0C\u662F\u5426\u5F3A\u5236<code>http</code>\u8DF3\u8F6C\u5230<code>https</code>\u8BBF\u95EE</li><li>\u70B9\u51FB\u4FDD\u5B58\uFF0C\u5E76\u91CD\u542F\u670D\u52A1</li><li>\u5982\u679C\u914D\u7F6E\u6210\u529F\u4E00\u822C\u5728\u5217\u8868\u5904\u4F1A\u6709\u4E00\u628A\u9501</li></ol><p><img src="'+e+`" alt="mkcert notification message"></p><h3 id="\u5728laravel-mix\u9879\u76EE\u4E2D\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5728laravel-mix\u9879\u76EE\u4E2D\u4F7F\u7528" aria-hidden="true">#</a> \u5728<code>laravel-mix</code>\u9879\u76EE\u4E2D\u4F7F\u7528</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>mix<span class="token punctuation">.</span><span class="token function">browserSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token string">&quot;https://www.example.com&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">https</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;~/.certs/example.com/privkey.pem&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">cert</span><span class="token operator">:</span> <span class="token string">&quot;~/.certs/example.com/fullchain.pem&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p>\u914D\u7F6E\u4E4B\u524D\u9700\u8981\u4FDD\u8BC1<code>https://example.com</code>\u80FD\u6B63\u5E38\u8BBF\u95EE\u3002</p><p><code>key</code> \u548C <code>cert</code> \u7684\u914D\u7F6E\u8DDF\u5F53\u524D\u751F\u6210\u8BC1\u4E66\u65F6\u6307\u5B9A\u7684\u6587\u4EF6\u4FDD\u6301\u4E00\u81F4\u3002</p></blockquote><h3 id="\u5728-docker-nginx-\u4E2D\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5728-docker-nginx-\u4E2D\u4F7F\u7528" aria-hidden="true">#</a> \u5728 Docker nginx \u4E2D\u4F7F\u7528</h3><p>\u5728\u9879\u76EE\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u6DFB\u52A0\u5982\u4E0B\u6837\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>  example.com</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">return</span> <span class="token number">301</span> https://<span class="token variable">$server_name</span><span class="token variable">$request_uri</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">443</span> ssl</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>  example.com</span><span class="token punctuation">;</span>

    <span class="token comment"># \u5BB9\u5668\u4E2D\u516C\u3001\u79C1\u94A5\u5BF9\u5E94\u8DEF\u5F84</span>
    <span class="token directive"><span class="token keyword">ssl_certificate</span>     /etc/nginx/ssl/example.com/fullchain.pem</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_certificate_key</span> /etc/nginx/ssl/example.com/privkey.pem</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">root</span>   /usr/share/nginx/html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>

    <span class="token comment"># ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,20);function t(c,r){return l}var u=n(p,[["render",t]]);export{u as default};