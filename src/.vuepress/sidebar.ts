import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/posts/": [
    "",
    {
      text: "明日方舟",
      prefix: "arknights/",
      link: "arknights/",
      icon: "https://blog-assets.sctop.dev/shared/icons/catalog/Arknights_icon.png",
      children: "structure",
    },
  ],
  "/": [
    "",
    {
      text: "本站公告",
      icon: "streamline-plump:announcement-megaphone-solid",
      prefix: "announcements/",
      link: "announcements/",
      children: "structure",
    },
    "intro",
    "friends",
    "about",
  ],
});
