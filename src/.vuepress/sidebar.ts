import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/posts/": ["", { text: "", children: "structure" }],
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
