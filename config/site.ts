export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "一随的导航页",
  description: "一个简单的导航网站",
  mainNav: [],
  links: {
    blog: "https://blog.zhangyisui.top/",
    github: "https://github.com/zhangyisui/nav-page"
  }
}

export interface NavLink {
  /** 站点图标 */
  icon: string
  /** 站点名称 */
  title: string
  /** 站点名称 */
  desc: string
  /** 站点链接 */
  link: string
}

type NavData = {
  title: string
  items: NavLink[]
}

export const NavData: NavData[] = [
  {
    title: "常用工具",
    items: [
      {
        icon: "logo.ico",
        title: "一阁",
        desc: "我的博客",
        link: "https://blog.zhangyisui.top"
      },
      {
        icon: "https://caniuse.com/img/favicon-128.png",
        title: "Can I use",
        desc: "前端 API 兼容性查询",
        link: "https://caniuse.com"
      },
      {
        icon: "https://tinypng.com/images/apple-touch-icon.png",
        title: "TinyPNG",
        desc: "在线图片压缩工具",
        link: "https://tinypng.com"
      },
      {
        icon: "https://tool.lu/favicon.ico",
        title: "在线工具",
        desc: "开发人员的工具箱",
        link: "https://tool.lu"
      },
      {
        icon: "https://processon.com/favicon.ico",
        title: "ProcessOn",
        desc: "免费在线流程图思维导图",
        link: "https://processon.com/"
      },
      {
        icon: "/icons/autohotkey.ico",
        title: "AutoHotKey",
        desc: "强大且易用的windows脚本软件",
        link: "https://www.autohotkey.com/"
      },
      {
        icon: "https://pin.gl/favicon.ico",
        title: "pin.gl",
        desc: "快速的在线屏幕共享工具",
        link: "https://pin.gl/"
      },
      {
        title: "anyvoice",
        desc: "AI声音克隆,有免费额度",
        icon: "https://anyvoice.net/favicon.ico",
        link: "https://anyvoice.net/"
      },
      {
        icon: "https://transform.tools/static/favicon.png",
        title: "transform",
        desc: "各类数据格式与对象转换",
        link: "https://transform.tools"
      }
    ]
  },
  {
    title: "实用项目",
    items: [
      {
        title: "sharpkeys",
        desc: "快速改变键盘映射",
        icon: "/icons/github.svg",
        link: "https://github.com/randyrants/sharpkeys"
      },
      {
        title: "ContextMenuManager",
        desc: "纯粹的Windows右键菜单管理程序",
        icon: "/icons/github.svg",
        link: "https://github.com/BluePointLilac/ContextMenuManager"
      }
    ]
  },
  {
    title: "好玩的",
    items: [
      {
        title: "eva-title",
        desc: "福音戰士標題生成器",
        icon: "/icons/github.svg",
        link: "https://lab.magiconch.com/eva-title/"
      },
      {
        title: "SNOOKER",
        desc: "在线斯诺克",
        icon: "/icons/github.svg",
        link: "http://www.heyzxz.me/pcol/"
      }
    ]
  },
  {
    title: "Vue",
    items: [
      {
        icon: "https://cn.vuejs.org/logo.svg",
        title: "Vue 3",
        desc: "渐进式 JavaScript 框架",
        link: "https://cn.vuejs.org"
      },
      {
        icon: "https://cn.vuejs.org/logo.svg",
        title: "Vue 2",
        desc: "渐进式 JavaScript 框架",
        link: "https://v2.cn.vuejs.org"
      },
      {
        icon: "https://cn.vuejs.org/logo.svg",
        title: "Vue Router",
        desc: "Vue.js 的官方路由\n为 Vue.js 提供富有表现力、可配置的、方便的路由",
        link: "https://router.vuejs.org/zh"
      },
      {
        icon: "https://pinia.vuejs.org/logo.svg",
        title: "Pinia",
        desc: "符合直觉的 Vue.js 状态管理库",
        link: "https://pinia.vuejs.org/zh"
      },
      {
        icon: "https://nuxt.com/icon.png",
        title: "Nuxt.js",
        desc: "一个基于 Vue.js 的通用应用框架",
        link: "https://nuxt.com"
      },
      {
        icon: "https://vueuse.org/favicon.svg",
        title: "VueUse",
        desc: "Vue Composition API 的常用工具集",
        link: "https://vueuse.org"
      },
      {
        icon: "https://vitest.dev/favicon.ico",
        title: "Vitest",
        desc: "一个 Vite 原生单元测试框架。它很快！",
        link: "https://cn.vitest.dev/"
      },
      {
        icon: "https://element-plus.org/images/element-plus-logo-small.svg",
        title: "Element Plus",
        desc: "基于 Vue 3，面向设计师和开发者的组件库",
        link: "https://element-plus.org"
      },
      {
        icon: "https://www.antdv.com/assets/logo.1ef800a8.svg",
        title: "Ant Design Vue",
        desc: "Ant Design 的 Vue 实现，开发和服务于企业级后台产品",
        link: "https://antdv.com"
      },
      {
        icon: "https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",
        title: "Vant",
        desc: "轻量、可定制的移动端 Vue 组件库",
        link: "https://vant-ui.github.io/vant"
      },
      {
        icon: "https://webapp.didistatic.com/static/webapp/shield/Cube-UI_logo.ico",
        title: "Cube UI",
        desc: "基于 Vue.js 实现的精致移动端组件库",
        link: "https://didi.github.io/cube-ui"
      },
      {
        icon: "https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png",
        title: "NutUI",
        desc: "京东风格的轻量级移动端组件库",
        link: "https://nutui.jd.com"
      }
    ]
  },
  {
    title: "CSS",
    items: [
      {
        title: "WindiCSS",
        desc: "Windi CSS 是下一代工具优先的 CSS 框架",
        icon: "https://windicss.org/assets/logo.svg",
        link: "https://windicss.org"
      },
      {
        title: "Twind",
        desc: "现存最小、最快、功能最齐全的完整 Tailwind-in-JS 解决方案",
        icon: "/icons/twind.svg",
        link: "https://github.com/tw-in-js/twind"
      },
      {
        title: "Bootstrap",
        desc: "Bootstrap 是全球最受欢迎的前端开源工具库。",
        icon: "https://img.kuizuo.cn/20210907055816.png",
        link: "https://v5.bootcss.com/"
      },
      {
        title: "w3schools Css 教程",
        desc: "w3schools 从基础到高级的CSS教程",
        icon: "https://www.w3schools.com/favicon.ico",
        link: "https://www.w3schools.com/css"
      },
      {
        title: "CSS-Inspiration",
        desc: "CSS灵感",
        icon: "/icons/css-inspiration.png",
        link: "https://csscoco.com/inspiration"
      },
      {
        title: "CSS常用样式",
        desc: "CSS常用样式",
        icon: "https://tse1-mm.cn.bing.net/th?id=OIP-C.EgSPriuEnAtlIWJV8R_E1QHaGs&w=107&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        link: "https://github.com/QiShaoXuan/css_tricks"
      },
      {
        title: "CSSFX",
        desc: "一个精心制作的集合设计的重点是流动性，简单性和易用性。使用最小标记的 CSS 支持",
        icon: "/icons/cssfx.png",
        link: "https://cssfx.netlify.app/"
      },
      {
        title: "NES.css",
        desc: "一个像素风格的CSS框架",
        icon: "https://nostalgic-css.github.io/NES.css/favicon.png",
        link: "https://nostalgic-css.github.io/NES.css/"
      },
      {
        title: "clay.css",
        desc: "claymorphism 泥陶态风格CSS",
        icon: "https://codeadrian.github.io/clay.css/apple-touch-icon.png",
        link: "https://codeadrian.github.io/clay.css/"
      },
      {
        title: "loading.io",
        desc: "Animation Made Easy",
        icon: "/icons/loading.ico",
        link: "https://loading.io/"
      },
      {
        title: "神奇UI样式",
        desc: "我们赋予任何人创建、分享和使用用 CSS 和 HTML 制作的漂亮自定义元素的权力。",
        icon: "/icons/uiverse.png",
        link: "https://uiverse.io"
      },
      {
        title: "HYPE4",
        desc: "透明玻璃态生成器",
        icon: "https://hype4.academy/favicon/ms-icon-144x144.png",
        link: "https://hype4.academy/tools/glassmorphism-generator"
      },
      {
        title: "Omatsuri",
        desc: "收集不同的发电机，让您的生活更轻松。",
        icon: "https://omatsuri.app/assets/favicon.ico",
        link: "https://omatsuri.app"
      },
      {
        title: "FANCY-BORDER-RADIUS",
        desc: "花式边界半径,有助于创建 CSS 花式边框。",
        icon: "https://9elements.github.io/fancy-border-radius/favicon-32x32.png",
        link: "https://9elements.github.io/fancy-border-radius/"
      },
      {
        title: "Coolors",
        desc: "创建调色板",
        icon: "/icons/coolors.png",
        link: "https://coolors.co/"
      }
    ]
  },
  {
    title: "Node",
    items: [
      {
        icon: "https://nodejs.org/static/images/favicons/favicon.png",
        title: "Node.js",
        desc: "Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境",
        link: "https://nodejs.org/zh-cn"
      },
      {
        icon: "https://expressjs.com/images/favicon.png",
        title: "Express",
        desc: "基于 Node.js 平台，快速、开放、极简的 Web 开发框架",
        link: "https://expressjs.com"
      },
      {
        icon: "https://nodejs.org/static/images/favicons/favicon.png",
        title: "Koa",
        desc: "基于 Node.js 平台的下一代 web 开发框架",
        link: "https://koajs.com"
      },
      {
        icon: "https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg",
        title: "Nest.js 中文文档",
        desc: "用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架",
        link: "https://docs.nestjs.cn"
      },
      {
        title: "TypeORM",
        desc: "TypeORM 是一个 ORM 框架，它可以运行在 NodeJS、Browser、Cordova、PhoneGap、Ionic、React Native、Expo 和 Electron 平台上，可以与 TypeScript 和 JavaScript (ES5,ES6,ES7,ES8)一起使用",
        icon: "/icons/typeorm.ico",
        link: "https://typeorm.bootcss.com"
      },
      {
        title: "Axios",
        desc: "Axios 是一个基于 promise 的网络请求库，可以用于浏览器和 node.js",
        icon: "/icons/axios.ico",
        link: "https://axios-http.cn/"
      },
      {
        title: "NPM",
        desc: "NPM是世界上最大的包管理器",
        icon: "https://static-production.npmjs.com/58a19602036db1daee0d7863c94673a4.png",
        link: "https://www.npmjs.com"
      },
      {
        title: "Yarn",
        desc: "Yarn 是一个软件包管理器，还可以作为项目管理工具。无论你是小型项目还是大型单体仓库（monorepos），无论是业余爱好者还是企业用户，Yarn 都能满足你的需求",
        icon: "https://www.yarnpkg.cn/favicon-32x32.png",
        link: "https://www.yarnpkg.cn"
      },
      {
        title: "Pnpm",
        desc: "速度快、节省磁盘空间的软件包管理器",
        icon: "https://www.pnpm.cn/img/favicon.png",
        link: "https://pnpm.io"
      }
    ]
  },
  {
    title: "构建工具",
    items: [
      {
        icon: "https://www.webpackjs.com/icon_180x180.png",
        title: "Webpack 中文网",
        desc: "一个用于现代 JavaScript 应用程序的静态模块打包工具",
        link: "https://www.webpackjs.com"
      },
      {
        icon: "https://cn.vitejs.dev/logo.svg",
        title: "Vite 中文文档",
        desc: "下一代前端工具链",
        link: "https://cn.vitejs.dev"
      },
      {
        icon: "https://www.rollupjs.com/img/favicon.png",
        title: "Rollup",
        desc: "Rollup 是一个 JavaScript 模块打包器",
        link: "https://www.rollupjs.com"
      },
      {
        icon: "https://turbo.build/images/favicon-dark/apple-touch-icon.png",
        title: "Turbo",
        desc: "Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust",
        link: "https://turbo.build"
      },
      {
        icon: "https://www.babeljs.cn/img/favicon.png",
        title: "Babel",
        desc: "Babel 是一个 JavaScript 编译器",
        link: "https://www.babeljs.cn"
      },
      {
        icon: "https://esbuild.github.io/favicon.svg",
        title: "esbuild",
        desc: "An extremely fast bundler for the web",
        link: "https://esbuild.github.io"
      },
      {
        icon: "https://swc.rs/favicon/apple-touch-icon.png",
        title: "SWC",
        desc: "Rust-based platform for the Web",
        link: "https://swc.rs"
      }
    ]
  },
  {
    title: "前端文档",
    items: [
      {
        icon: "https://www.runoob.com/favicon.ico",
        title: "菜鸟教程",
        desc: "学的不仅是技术，更是梦想！",
        link: "https://www.runoob.com"
      },
      {
        icon: "/icons/es6.png",
        title: "ES6 入门教程",
        desc: "《ECMAScript 6 入门教程》是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性",
        link: "https://es6.ruanyifeng.com/"
      },
      {
        icon: "/icons/typescript.png",
        title: "深入理解 TypeScript",
        desc: "《TypeScript Deep Dive》 是一本很好的开源书，从基础到深入，很全面的阐述了 TypeScript 的各种魔法",
        link: "https://jkchao.github.io/typescript-book-chinese/"
      },
      {
        icon: "/icons/rust.svg",
        title: "Rust语言圣经",
        desc: "一份高质量 Rust 教程",
        link: "https://course.rs"
      }
    ]
  },
  {
    title: "字体图标",
    items: [
      {
        title: "iconify",
        desc: "数千个图标，一个统一的框架",
        icon: "https://icon-sets.iconify.design/favicon.ico",
        link: "https://icon-sets.iconify.design/"
      },
      {
        title: "iconfont",
        desc: "iconfont-国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能",
        icon: "https://img.alicdn.com/imgextra/i4/O1CN01EYTRnJ297D6vehehJ_!!6000000008020-55-tps-64-64.svg",
        link: "https://www.iconfont.cn/"
      },
      {
        title: "feathericons",
        desc: "简单美丽的开源图标",
        icon: "https://feathericons.com/favicon.ico",
        link: "https://feathericons.com/"
      },
      {
        title: "undraw",
        desc: "一个不断更新的设计项目与美丽的SVG图像，使用完全免费",
        icon: "https://undraw.co/apple-touch-icon.png",
        link: "https://undraw.co/"
      },
      {
        title: "igoutu",
        desc: "图标、插图、照片、音乐和设计工具",
        icon: "https://maxst.icons8.com/vue-static/landings/primary-landings/favs/icons8_fav_32×32.png",
        link: "https://igoutu.cn/"
      },
      {
        title: "Emojiall",
        desc: "Emoji表情大全",
        icon: "https://www.emojiall.com/apple-touch-icon.png",
        link: "https://www.emojiall.com/zh-hans"
      },
      {
        title: "谷歌字体",
        desc: "一个生成渐变色背景的网站",
        icon: "/icons/google_fonts.ico",
        link: "https://googlefonts.cn/"
      },
      {
        title: "Typing SVG",
        desc: "一个动态生成的可自定义 SVG 打字效果",
        icon: "/icons/typing-svg.png",
        link: "https://readme-typing-svg.herokuapp.com/demo/"
      },
      {
        title: "free-icons-for-commercial-use",
        desc: "一篇文章，里面提到了18个包含可商用图标的网站，来自用户推荐",
        icon: "https://dt2sdf0db8zob.cloudfront.net/wp-content/themes/websiteplanet/img/favicons/apple-icon-57x57.png",
        link: "https://www.websiteplanet.com/blog/free-icons-for-commercial-use/"
      }
    ]
  },
  {
    title: "跨平台",
    items: [
      {
        title: "Electron",
        desc: "使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序",
        icon: "/icons/electron.ico",
        link: "https://www.electronjs.org/"
      },
      {
        title: "Tauri",
        desc: "Tauri是一个框架，用于为所有主要桌面平台构建小巧、快速的二进制文件",
        icon: "https://tauri.app/favicon.svg",
        link: "https://tauri.app/"
      },
      {
        title: "Flutter",
        desc: "Flutter 是 Google 开源的应用开发框架，仅通过一套代码库，就能构建精美的、原生平台编译的多平台应用",
        icon: "https://docs.flutter.cn/assets/images/cn/flutter-icon.png",
        link: "https://flutter.cn/"
      },
      {
        title: "Uni-app",
        desc: "uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/QQ/快手/钉钉/淘宝）、快应用等多个平台",
        icon: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/icon.png",
        link: "https://uniapp.dcloud.io/"
      },
      {
        title: "Taro",
        desc: "Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ / 飞书 小程序 / H5 / RN 等应用",
        icon: "/icons/taro.png",
        link: "https://taro.jd.com"
      }
    ]
  },
  {
    title: "网站托管",
    items: [
      {
        title: "Vercel",
        desc: "Vercel将最好的开发人员体验与对最终用户性能的执着关注相结合",
        icon: "https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/57x57.png",
        link: "https://vercel.com"
      },
      {
        title: "Netlify",
        desc: "Netlify 是一家提供静态网站托管的云平台，支持从 Github, GitLab, Bitbucket 等代码仓库中自动拉取代码 然后进行项目打包和部署等功能",
        icon: "/icons/netlify.png",
        link: "https://www.netlify.com"
      },
      {
        title: "Coolify",
        desc: "一个开源和自我托管的 Heroku/Netlify 替代品",
        icon: "/icons/coolify.png",
        link: "https://coolify.io"
      },
      {
        title: "GitHub Codespace",
        desc: "全球最大的软件项目托管平台，发现优质开源项目",
        icon: "https://github.githubassets.com/favicons/favicon.svg",
        link: "https://github.com/codespaces"
      },
      {
        title: "Railway",
        desc: "带上你的代码，剩下交给我们 ",
        icon: "/icons/railway.png",
        link: "https://railway.app/"
      },
      {
        title: "Supabase",
        desc: "Supabase 是一个开源的后端即服务（BaaS）平台，它可以帮助开发者快速构建应用程序，无需编写后端代码。",
        icon: "/icons/supabase.png",
        link: "https://supabase.com/"
      }
    ]
  }
]
