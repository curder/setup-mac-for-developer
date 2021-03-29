(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{377:function(a,t,e){"use strict";e.r(t);var r=e(41),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"安装与使用-nvm-nrm-和-yarn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装与使用-nvm-nrm-和-yarn"}},[a._v("#")]),a._v(" 安装与使用 nvm | nrm 和 yarn")]),a._v(" "),e("p",[a._v("目前主流的 node 版本管理工具有两种，"),e("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[a._v("nvm"),e("OutboundLink")],1),a._v(" 和 "),e("a",{attrs:{href:"https://github.com/tj/n",target:"_blank",rel:"noopener noreferrer"}},[a._v("n"),e("OutboundLink")],1),a._v("。 两者差异挺大的，具体分析可以参考一下淘宝 FED 团队的一篇文章："),e("a",{attrs:{href:"http://taobaofed.org/blog/2015/11/17/nvm-or-n/",target:"_blank",rel:"noopener noreferrer"}},[a._v("管理 node 版本，选择 nvm 还是 n？"),e("OutboundLink")],1),a._v("。")]),a._v(" "),e("h2",{attrs:{id:"安装-nvm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-nvm"}},[a._v("#")]),a._v(" 安装 nvm")]),a._v(" "),e("p",[a._v("安装可以参考"),e("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[a._v("nvm"),e("OutboundLink")],1),a._v("项目的 README 文档，这里使用 curl 命令安装。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.2/install.sh | bash\n")])])]),e("p",[a._v("默认自动将对应的配置写入了"),e("code",[a._v("~/.zshrc")]),a._v("中，内容为：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('export NVM_DIR="$HOME/.nvm"\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"  # This loads nvm\n[ -s "$NVM_DIR/bash_completion" ] && \\. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion\n')])])]),e("h2",{attrs:{id:"简单使用-nvm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单使用-nvm"}},[a._v("#")]),a._v(" 简单使用 nvm")]),a._v(" "),e("h3",{attrs:{id:"查看可供使用的-nodejs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看可供使用的-nodejs"}},[a._v("#")]),a._v(" 查看可供使用的 NodeJS")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("nvm ls-remote\n")])])]),e("blockquote",[e("p",[a._v("NodeJS 的版本发布很频繁，一般可以在"),e("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[a._v("NodeJS 官网"),e("OutboundLink")],1),a._v("看到 LTS 版本进行下载。")])]),a._v(" "),e("h3",{attrs:{id:"查看本地已经有的-nodejs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看本地已经有的-nodejs"}},[a._v("#")]),a._v(" 查看本地已经有的 NodeJS")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("nvm list\n")])])]),e("h3",{attrs:{id:"安装指定版本的-nodejs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装指定版本的-nodejs"}},[a._v("#")]),a._v(" 安装指定版本的 NodeJS")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("nvm install v10.16.3\n")])])]),e("h3",{attrs:{id:"指定默认的-nodejs-版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#指定默认的-nodejs-版本"}},[a._v("#")]),a._v(" 指定默认的 NodeJS 版本")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("nvm alias default v10.16.3 # 指定默认的NodeJS版本\nnvm use default\n")])])]),e("h3",{attrs:{id:"查看当前使用的-nodejs-版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看当前使用的-nodejs-版本"}},[a._v("#")]),a._v(" 查看当前使用的 NodeJS 版本")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("nvm current\n")])])]),e("blockquote",[e("p",[a._v("NodeJS 安装的目录一般在"),e("code",[a._v("~/.nvm/versions/node")]),a._v("下。")])]),a._v(" "),e("h3",{attrs:{id:"卸载指定的-nodejs-版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#卸载指定的-nodejs-版本"}},[a._v("#")]),a._v(" 卸载指定的 NodeJS 版本")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("nvm uninstall v10.16.3 // 卸载v10.16.3\n")])])]),e("h3",{attrs:{id:"查看本地安装的-nodejs-版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看本地安装的-nodejs-版本"}},[a._v("#")]),a._v(" 查看本地安装的 NodeJS 版本")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("nvm list\n")])])]),e("p",[a._v("至此，nvm 相关的基本操作完成，更多的操作请查看"),e("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[a._v("nvm"),e("OutboundLink")],1),a._v("项目的 README 说明。")]),a._v(" "),e("h2",{attrs:{id:"nrm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nrm"}},[a._v("#")]),a._v(" "),e("a",{attrs:{href:"https://github.com/Pana/nrm",target:"_blank",rel:"noopener noreferrer"}},[a._v("nrm"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("code",[a._v("nrm")]),a._v(" 是 "),e("code",[a._v("npm")]),a._v(" 镜像仓库管理命令，可以帮助我们管理 "),e("code",[a._v("npm")]),a._v(" 镜像资源的下载地址。")]),a._v(" "),e("h3",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("npm install -g nrm\n")])])]),e("blockquote",[e("p",[a._v("鉴于国内网络环境，如果下载速度慢或者下载失败，建议修改 npm 的从淘宝镜像地址下载资源，可以执行命令："),e("code",[a._v("npm install -g nrm --registry=https://registry.npm.taobao.org/")])])]),a._v(" "),e("h3",{attrs:{id:"简单使用-nrm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单使用-nrm"}},[a._v("#")]),a._v(" 简单使用 nrm")]),a._v(" "),e("h4",{attrs:{id:"查看可用源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看可用源"}},[a._v("#")]),a._v(" 查看可用源")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("nrm ls\n")])])]),e("h4",{attrs:{id:"使用指定源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用指定源"}},[a._v("#")]),a._v(" 使用指定源")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("nrm use taobao\n")])])]),e("h4",{attrs:{id:"检查当前使用源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#检查当前使用源"}},[a._v("#")]),a._v(" 检查当前使用源")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("nrm current\n")])])]),e("blockquote",[e("p",[a._v("此时，在 "),e("code",[a._v("~/.npmrc")]),a._v(" 配置中自动配置："),e("code",[a._v("registry=https://registry.npm.taobao.org/")])])]),a._v(" "),e("h2",{attrs:{id:"安装-yarn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-yarn"}},[a._v("#")]),a._v(" 安装 yarn")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://yarn.bootcss.com/docs/install/#mac-stable",target:"_blank",rel:"noopener noreferrer"}},[a._v("参考这里"),e("OutboundLink")],1)]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("brew install yarn --without-node\n")])])]),e("p",[a._v("如果上面的命令安装缓慢或者无法安装可以使用 "),e("code",[a._v("npm -g install yarn")]),a._v("。")]),a._v(" "),e("h2",{attrs:{id:"安装全局依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装全局依赖"}},[a._v("#")]),a._v(" 安装全局依赖")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("yarn global add cross-env live-server\n")])])]),e("h4",{attrs:{id:"参考链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[a._v("#")]),a._v(" 参考链接")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000004404505",target:"_blank",rel:"noopener noreferrer"}},[a._v("node 版本管理工具 nvm-Mac 下安装及使用"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);