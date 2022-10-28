import{_ as e,c as a,o as s,a as o}from"./app.c30a3164.js";const l="/setup-mac-for-developer/assets/xcode-command-line-tools.650710f0.png",_=JSON.parse('{"title":"\u5B89\u88C5 Homebrew","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7CFB\u7EDF\u4F9D\u8D56","slug":"\u7CFB\u7EDF\u4F9D\u8D56","link":"#\u7CFB\u7EDF\u4F9D\u8D56","children":[]},{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5","link":"#\u5B89\u88C5","children":[]},{"level":2,"title":"\u6D4B\u8BD5\u5B89\u88C5","slug":"\u6D4B\u8BD5\u5B89\u88C5","link":"#\u6D4B\u8BD5\u5B89\u88C5","children":[]}],"relativePath":"guide/install/home-brew.md","lastUpdated":1666926661000}'),n={name:"guide/install/home-brew.md"},r=o('<h1 id="\u5B89\u88C5-homebrew" tabindex="-1">\u5B89\u88C5 Homebrew <a class="header-anchor" href="#\u5B89\u88C5-homebrew" aria-hidden="true">#</a></h1><p>brew \u7684\u5730\u5740\u662F\uFF1A<a href="https://brew.sh/index_zh-cn" target="_blank" rel="noreferrer">brew zh-cn</a></p><h2 id="\u7CFB\u7EDF\u4F9D\u8D56" tabindex="-1">\u7CFB\u7EDF\u4F9D\u8D56 <a class="header-anchor" href="#\u7CFB\u7EDF\u4F9D\u8D56" aria-hidden="true">#</a></h2><ul><li>64 \u4F4D\u7684 CPU</li><li>MacOSX \u7248\u672C\u5927\u4E8E 10.12</li><li>Xcode \u7684\u547D\u4EE4\u884C\u5DE5\u5177 <code>xcode-select --install</code> <a href="https://developer.apple.com/downloads" target="_blank" rel="noreferrer">developer.apple.com/downloads</a> \u6216\u8005 <a href="https://itunes.apple.com/us/app/xcode/id497799835" target="_blank" rel="noreferrer">Xcode</a></li><li>\u4F7F\u7528 <code>bash</code> \u6216\u8005 <code>zsh</code></li></ul><p>\u5B89\u88C5\u524D\u53EF\u80FD\u6D89\u53CA\u5230\u9700\u8981\u5B89\u88C5<code>Xcode Command Line Tools</code></p><p>\u5728\u6267\u884C\u547D\u4EE4\u7684\u65F6\u5019\u4F1A\u4E00\u76F4\u505C\u7559\u5728\u8FD9\u884C\u63D0\u793A\u4E0A\uFF0C<code>Downloading Command Line Tools (macOS High Sierra version 10.13) for Xcode</code>\u3002\u9700\u8981\u8010\u5FC3\u7B49\u5F85\uFF0C\u5982\u679C\u5931\u8D25\u4E86\u4E5F\u53EF\u4EE5\u5728 Apple \u5B98\u7F51\u4E0B\u8F7D<code>.dmg</code>\u6587\u4EF6\u8FDB\u884C\u5B89\u88C5\u3002</p><p><img src="'+l+`" alt="An image"></p><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">/usr/bin/ruby -e </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#C3E88D;">curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"></span></code></pre></div><p>\u6267\u884C\u4E0A\u9762\u7684\u547D\u4EE4\u5B8C\u6210\u5B89\u88C5\u3002</p><h2 id="\u6D4B\u8BD5\u5B89\u88C5" tabindex="-1">\u6D4B\u8BD5\u5B89\u88C5 <a class="header-anchor" href="#\u6D4B\u8BD5\u5B89\u88C5" aria-hidden="true">#</a></h2><p>\u8FD9\u91CC\u5B89\u88C5 <code>wget</code> \u547D\u4EE4\u4E3A\u4F8B\uFF1A</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">brew install wget</span></span>
<span class="line"></span></code></pre></div><p>\u9488\u5BF9Intel\u7684CPU\uFF0CHomebrew \u4F1A\u5C06\u8F6F\u4EF6\u5305\u5B89\u88C5\u5230\u72EC\u7ACB\u76EE\u5F55\uFF0C\u5E76\u5C06\u5176\u6587\u4EF6\u8F6F\u94FE\u63A5\u81F3 <code>/usr/local</code>\u3002</p><p>\u800C\u82F9\u679C\u81EA\u7814ARM\u67B6\u6784\u7684CPU\uFF0CHomebrew \u4F1A\u5C06\u8F6F\u4EF6\u5305\u5B89\u88C5\u5230\u72EC\u7ACB\u7684\u76EE\u5F55\uFF0C\u5E76\u5C06\u5176\u6587\u4EF6\u8F6F\u94FE\u63A5\u81F3 <code>/opt/homebrew</code>\u3002</p>`,15),t=[r];function c(d,i,p,h,m,b){return s(),a("div",null,t)}const g=e(n,[["render",c]]);export{_ as __pageData,g as default};
