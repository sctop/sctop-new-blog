<script setup lang="ts">
import { computed, h } from "vue";
import { isString } from "@vuepress/helper/client";
import { useData } from "vuepress-theme-hope/composables/useData";
import { usePageAuthor } from "vuepress-theme-hope/composables/usePageInfo";
import "vuepress-theme-hope/styles/base/page-footer.scss";

const { frontmatter, theme, themeLocale } = useData();
const author = usePageAuthor();

const enabled = computed(() => {
  const { copyright, footer } = frontmatter.value;
  return (
    footer !== false &&
    Boolean(copyright || footer || themeLocale.value.displayFooter)
  );
});

const footerContent = computed(() => {
  const { footer } = frontmatter.value;
  return isString(footer) ? footer : themeLocale.value.footer ?? "";
});

const authorText = computed(() =>
  author.value.map(({ name }) => name).join(", ")
);

const getCopyrightText = (license: string = "") =>
  `Copyright © ${new Date().getFullYear()} ${authorText.value} ${
    license ? `${license} Licensed` : ""
  }`;

const copyright = computed(() => {
  const { copyright, license = "" } = frontmatter.value;
  const { license: globalLicense } = theme.value;
  const { copyright: globalCopyright } = themeLocale.value;

  return (
    copyright ??
    (license
      ? getCopyrightText(license)
      : globalCopyright ??
        (authorText.value || globalLicense
          ? getCopyrightText(globalLicense)
          : false))
  );
});
</script>

<template>
  <footer v-if="enabled" class="vp-footer-wrapper" vp-footer>
    <!-- google adsense -->
    <div v-if="footerContent" class="vp-footer" v-html="footerContent"></div>
    <div v-if="copyright" class="vp-copyright" v-html="copyright"></div>
  </footer>
</template>

<style scoped lang="scss">
.vp-footer-wrapper {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding-block: 0.75rem;
  padding-inline: calc(var(--sidebar-space) + 2rem) 2rem;
  border-top: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-mute);
  text-align: center;
  transition: border-top-color var(--vp-t-color), background var(--vp-t-color),
    padding var(--vp-t-transform);
}
@media (max-width: 719px) {
  .vp-footer-wrapper {
    padding-inline-start: 2rem;
  }
}
@media (min-width: 1440px) {
  .vp-footer-wrapper {
    z-index: 50;
    padding-inline-start: 2rem;
  }
}
@media print {
  .vp-footer-wrapper {
    margin: 0 !important;
    padding: 0 !important;
  }
}
@media (max-width: 419px) {
  .vp-footer-wrapper {
    display: block;
  }
}
.no-sidebar .vp-footer-wrapper,
.sidebar-collapsed .vp-footer-wrapper {
  padding-inline-start: 2rem;
}

.vp-footer {
  margin: 0.5rem 1rem;
  font-size: 14px;
}
@media print {
  .vp-footer {
    display: none;
  }
}

.vp-copyright {
  margin: 6px 0;
  font-size: 13px;
}

.vp-page:not(.not-found) + .vp-footer-wrapper {
  margin-top: -2rem;
}
</style>
