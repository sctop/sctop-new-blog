import { getDirname, path } from "vuepress/utils";
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "童年是个风筝",
  description: "童年是个风筝的博客",

  theme,

  alias: {
    "@theme-hope/components/base/PageFooter": path.resolve(
      __dirname,
      "./components/PageFooter.vue"
    ),
  },

  head: [
    // Google AdSense
    [
      "script",
      {},
      '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4183661421082557" crossorigin="anonymous"></script>',
    ],
    // Google Analytics
    [
      "script",
      {},
      `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-W3VP6K3EH9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-W3VP6K3EH9');
</script>`,
    ],
    // Microsoft Clarity
    [
      "script",
      {},
      `<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "uqlr89xlf3");
</script>`,
    ],
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
