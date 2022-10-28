import{_ as s,c as a,o as e,a as n}from"./app.c30a3164.js";const g=JSON.parse('{"title":"\u5B89\u88C5 Hub","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u68C0\u67E5\u662F\u5426\u5B89\u88C5","slug":"\u68C0\u67E5\u662F\u5426\u5B89\u88C5","link":"#\u68C0\u67E5\u662F\u5426\u5B89\u88C5","children":[]},{"level":2,"title":"\u63A8\u8350\u914D\u7F6E","slug":"\u63A8\u8350\u914D\u7F6E","link":"#\u63A8\u8350\u914D\u7F6E","children":[]},{"level":2,"title":"\u7B80\u5355\u4F7F\u7528","slug":"\u7B80\u5355\u4F7F\u7528","link":"#\u7B80\u5355\u4F7F\u7528","children":[]}],"relativePath":"guide/install/hub.md","lastUpdated":1666926661000}'),l={name:"guide/install/hub.md"},t=n(`<h1 id="\u5B89\u88C5-hub" tabindex="-1">\u5B89\u88C5 Hub <a class="header-anchor" href="#\u5B89\u88C5-hub" aria-hidden="true">#</a></h1><p>Hub \u662F\u4E00\u4E2Agit\u7684\u547D\u4EE4\u884C\u62D3\u5C55\uFF0C\u9488\u5BF9\u4E8E\u6211\u4EEC\u7ECF\u5E38\u64CD\u4F5C<a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>\u76F8\u5173\u4EFB\u52A1\uFF0C\u4F8B\u5982\uFF1A\u521B\u5EFA\u4ED3\u5E93\u3001\u514B\u9686\u4ED3\u5E93\u7B49\uFF0C\u800C\u65E0\u9700\u79BB\u5F00\u7EC8\u7AEF\u3002</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">brew install hub</span></span>
<span class="line"></span></code></pre></div><h2 id="\u68C0\u67E5\u662F\u5426\u5B89\u88C5" tabindex="-1">\u68C0\u67E5\u662F\u5426\u5B89\u88C5 <a class="header-anchor" href="#\u68C0\u67E5\u662F\u5426\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">hub version</span></span>
<span class="line"></span></code></pre></div><h2 id="\u63A8\u8350\u914D\u7F6E" tabindex="-1">\u63A8\u8350\u914D\u7F6E <a class="header-anchor" href="#\u63A8\u8350\u914D\u7F6E" aria-hidden="true">#</a></h2><ul><li>\u73AF\u5883\u53D8\u91CF \u5C06\u4E0B\u9762\u7684\u8BED\u53E5\u6DFB\u52A0\u5230\u5BF9\u5E94\u7684bash\u914D\u7F6E\u4E2D\uFF0C\u6BD4\u5982\uFF1A<code>~/.zshrc</code></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># hub integration</span></span>
<span class="line"><span style="color:#82AAFF;">eval</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#C3E88D;">hub </span><span style="color:#82AAFF;">alias</span><span style="color:#C3E88D;"> -s</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"></span></code></pre></div><p>\u6DFB\u52A0\u5B8C\u6210\u4E4B\u540E\u9700\u8981\u6267\u884C <code>source ~/.zshrc</code> \u91CD\u8F7D\u914D\u7F6E\u6587\u4EF6\u6216\u8005\u91CD\u65B0\u6253\u5F00\u7EC8\u7AEF\u3002\u6267\u884C <code>git --version</code> \u547D\u4EE4\u770B\u5230\u8F93\u51FA\u672B\u5C3E\u591A\u51FA\u4E00\u884C hub \u7684\u7248\u672C\u4FE1\u606F\u3002</p><ul><li>\u914D\u7F6E\u6388\u6743</li></ul><p>\u8BBF\u95EEGitHub\u5E76\u767B\u5F55\uFF0C\u5730\u5740\u4E3A\uFF1A<a href="https://github.com/settings/tokens" target="_blank" rel="noreferrer">https://github.com/settings/tokens</a> \uFF0C\u9009\u62E9 <a href="https://github.com/settings/tokens/new" target="_blank" rel="noreferrer">Generate new token</a> \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6388\u6743token\u3002\u5728\u8868\u5355\u9875\u9762\u52FE\u9009\u8D4B\u4E88 <strong>repo</strong> \u76F8\u5173\u6743\u9650\uFF0C\u5982\u679C\u9700\u8981\u5220\u9664\u4ED3\u5E93\u7684\u6743\u9650\u9700\u8981\u52FE\u9009 <strong>delete_repo</strong> \u9009\u9879\u3002</p><p>\u5C06\u751F\u6210\u7684token\u503C\u5199\u5165\u5230 <code>~/.config/hub</code>\u6587\u4EF6\u4E2D, \u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">github.com:</span></span>
<span class="line"><span style="color:#A6ACCD;">- user: curder</span></span>
<span class="line"><span style="color:#A6ACCD;">  oauth_token: {{GITHUB_TOKEN}}</span></span>
<span class="line"><span style="color:#A6ACCD;">  protocol: https</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u6DFB\u52A0git\u534F\u8BAE</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git config --global hub.protocol git</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global hub.host github.com</span></span>
<span class="line"></span></code></pre></div><p>\u66F4\u591A <a href="https://hub.github.com/hub.1.html#configuration" target="_blank" rel="noreferrer">\u914D\u7F6E\u53C2\u8003\u8FD9\u91CC</a>\u3002</p><h2 id="\u7B80\u5355\u4F7F\u7528" tabindex="-1">\u7B80\u5355\u4F7F\u7528 <a class="header-anchor" href="#\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u7B2C\u4E00\u6B21\u4F7F\u7528\u547D\u4EE4\u64CD\u4F5C\u4ED3\u5E93\u65F6\uFF0C\u53EF\u80FD\u4F1A\u9700\u8981\u9700\u8981\u8F93\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801\u7684\u4EA4\u4E92\u754C\u9762\uFF0C\u8BF7\u8F93\u5165\u7528\u6237\u540D\uFF0C\u5BC6\u7801\u4E3A\uFF1A<strong>\u4E0A\u9762\u5F97\u5230\u7684TOKEN</strong>\uFF0C\u540E\u7EED\u5219\u4E0D\u9700\u8981\u91CD\u590D\u7528\u6237\u540D\u548C\u5BC6\u7801\u7684\u64CD\u4F5C\u3002</p><ul><li>\u4E0B\u8F7D\u4ED3\u5E93</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git clone curder/setup-mac-for-developer-src</span></span>
<span class="line"></span></code></pre></div><ul><li>\u521B\u5EFA\u4ED3\u5E93</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git create curder/hub-demo</span></span>
<span class="line"></span></code></pre></div><ul><li>\u521B\u5EFArelease</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git release create 1.1.0</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u4ED3\u5E93\u5F53\u524D\u4ED3\u5E93\u7684 <code>release</code> \u7248\u672C\u4E3A<code>1.1.0</code></p></blockquote><p>\u66F4\u591Ahub\u76F8\u5173\u547D\u4EE4\u64CD\u4F5C\u53EF\u4EE5\u67E5\u770B<a href="https://hub.github.com/" target="_blank" rel="noreferrer">hub.github.com</a></p>`,26),o=[t];function p(c,i,r,h,d,u){return e(),a("div",null,o)}const C=s(l,[["render",p]]);export{g as __pageData,C as default};
