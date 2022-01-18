import{r as o,o as r,c as l,a as s,b as a,F as c,d as e,e as t}from"./app.feabc0ab.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const d={},u=s("h1",{id:"\u5B89\u88C5-hub",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5B89\u88C5-hub","aria-hidden":"true"},"#"),e(" \u5B89\u88C5 Hub")],-1),h=e("Hub \u662F\u4E00\u4E2Agit\u7684\u547D\u4EE4\u884C\u62D3\u5C55\uFF0C\u9488\u5BF9\u4E8E\u6211\u4EEC\u7ECF\u5E38\u64CD\u4F5C"),p={href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},b=e("GitHub"),_=e("\u76F8\u5173\u4EFB\u52A1\uFF0C\u4F8B\u5982\uFF1A\u521B\u5EFA\u4ED3\u5E93\u3001\u514B\u9686\u4ED3\u5E93\u7B49\uFF0C\u800C\u65E0\u9700\u79BB\u5F00\u7EC8\u7AEF\u3002"),g=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> hub
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u68C0\u67E5\u662F\u5426\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u68C0\u67E5\u662F\u5426\u5B89\u88C5" aria-hidden="true">#</a> \u68C0\u67E5\u662F\u5426\u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>hub version
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u63A8\u8350\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u63A8\u8350\u914D\u7F6E" aria-hidden="true">#</a> \u63A8\u8350\u914D\u7F6E</h2><ul><li>\u73AF\u5883\u53D8\u91CF \u5C06\u4E0B\u9762\u7684\u8BED\u53E5\u6DFB\u52A0\u5230\u5BF9\u5E94\u7684bash\u914D\u7F6E\u4E2D\uFF0C\u6BD4\u5982\uFF1A<code>~/.zshrc</code></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># hub integration</span>
<span class="token builtin class-name">eval</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>hub <span class="token builtin class-name">alias</span> -s<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6DFB\u52A0\u5B8C\u6210\u4E4B\u540E\u9700\u8981\u6267\u884C <code>source ~/.zshrc</code> \u91CD\u8F7D\u914D\u7F6E\u6587\u4EF6\u6216\u8005\u91CD\u65B0\u6253\u5F00\u7EC8\u7AEF\u3002\u6267\u884C <code>git --version</code> \u547D\u4EE4\u770B\u5230\u8F93\u51FA\u672B\u5C3E\u591A\u51FA\u4E00\u884C hub \u7684\u7248\u672C\u4FE1\u606F\u3002</p><ul><li>\u914D\u7F6E\u6388\u6743</li></ul>`,8),m=e("\u8BBF\u95EEGitHub\u5E76\u767B\u5F55\uFF0C\u5730\u5740\u4E3A\uFF1A"),v={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},k=e("https://github.com/settings/tokens"),f=e(" \uFF0C\u9009\u62E9 "),x={href:"https://github.com/settings/tokens/new",target:"_blank",rel:"noopener noreferrer"},N=e("Generate new token"),E=e(" \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6388\u6743token\u3002\u5728\u8868\u5355\u9875\u9762\u52FE\u9009\u8D4B\u4E88 "),H=s("strong",null,"repo",-1),q=e(" \u76F8\u5173\u6743\u9650\uFF0C\u5982\u679C\u9700\u8981\u5220\u9664\u4ED3\u5E93\u7684\u6743\u9650\u9700\u8981\u52FE\u9009 "),B=s("strong",null,"delete_repo",-1),G=e(" \u9009\u9879\u3002"),T=t(`<p>\u5C06\u751F\u6210\u7684token\u503C\u5199\u5165\u5230 <code>~/.config/hub</code>\u6587\u4EF6\u4E2D, \u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>github.com:
- user: curder
  oauth_token: {{GITHUB_TOKEN}}
  protocol: https
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,2),V=e("\u66F4\u591A "),w={href:"https://hub.github.com/hub.1.html#configuration",target:"_blank",rel:"noopener noreferrer"},I=e("\u914D\u7F6E\u53C2\u8003\u8FD9\u91CC"),j=e("\u3002"),z=t(`<h2 id="\u7B80\u5355\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a> \u7B80\u5355\u4F7F\u7528</h2><p>\u7B2C\u4E00\u6B21\u4F7F\u7528\u547D\u4EE4\u64CD\u4F5C\u4ED3\u5E93\u65F6\uFF0C\u53EF\u80FD\u4F1A\u9700\u8981\u9700\u8981\u8F93\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801\u7684\u4EA4\u4E92\u754C\u9762\uFF0C\u8BF7\u8F93\u5165\u7528\u6237\u540D\uFF0C\u5BC6\u7801\u4E3A\uFF1A<strong>\u4E0A\u9762\u5F97\u5230\u7684TOKEN</strong>\uFF0C\u540E\u7EED\u5219\u4E0D\u9700\u8981\u91CD\u590D\u7528\u6237\u540D\u548C\u5BC6\u7801\u7684\u64CD\u4F5C\u3002</p><ul><li>\u4E0B\u8F7D\u4ED3\u5E93</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone curder/setup-mac-for-developer-src
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>\u521B\u5EFA\u4ED3\u5E93</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> create curder/hub-demo
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>\u521B\u5EFArelease</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> release create <span class="token number">1.1</span>.0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>\u4ED3\u5E93\u5F53\u524D\u4ED3\u5E93\u7684 <code>release</code> \u7248\u672C\u4E3A<code>1.1.0</code></p></blockquote>`,9),F=e("\u66F4\u591Ahub\u76F8\u5173\u547D\u4EE4\u64CD\u4F5C\u53EF\u4EE5\u67E5\u770B"),K={href:"https://hub.github.com/",target:"_blank",rel:"noopener noreferrer"},L=e("hub.github.com");function O(C,S){const n=o("ExternalLinkIcon");return r(),l(c,null,[u,s("p",null,[h,s("a",p,[b,a(n)]),_]),g,s("p",null,[m,s("a",v,[k,a(n)]),f,s("a",x,[N,a(n)]),E,H,q,B,G]),T,s("p",null,[V,s("a",w,[I,a(n)]),j]),z,s("p",null,[F,s("a",K,[L,a(n)])])],64)}var y=i(d,[["render",O]]);export{y as default};