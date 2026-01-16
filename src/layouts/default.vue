<template>
  <v-app v-scroll="onScroll">
    <app-header />

    <v-main>
      <v-container class="px-3 px-md-4 py-4 responsive-container">
        <router-view />
      </v-container>
    </v-main>
    <v-fade-transition>
      <v-btn
        v-if="fab"
        class="back-to-top-btn grad-btn"
        elevation="8"
        icon="mdi-chevron-up"
        location="bottom right"
        position="fixed"
        size="large"
        @click="toTop"
      />
    </v-fade-transition>

    <AppFooter />
  </v-app>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const fab = ref(false)

  // スクロール検知
  function onScroll () {
    // windowオブジェクトが存在することを確認
    const top = window.scrollY || document.documentElement.scrollTop
    fab.value = top > 300
  }

  function toTop () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
</script>

<style scoped lang="sass">
// ==========================================
// 1. Variables (変数)
// ==========================================
$primary-blue: #5c7cfa
$primary-pink: #f06595
$grad-main: linear-gradient(135deg, rgba($primary-blue, 0.9) 0%, rgba($primary-pink, 0.9) 100%)
$grad-hover: linear-gradient(135deg, $primary-blue 0%, $primary-pink 100%)

// ==========================================
// 2. Global Layout Helpers (レイアウト補助)
// ==========================================
// ページ全体での横揺れ・はみ出しを防止
:deep(html), :deep(body)
  overflow-x: hidden !important
  width: 100%
  position: relative

.v-application
  overflow-x: hidden !important

main
  padding-top: 0 !important

.responsive-container
  max-width: 1200px
  margin: 0 auto

// ==========================================
// 3. Back to Top Button (トップへ戻るボタン)
// ==========================================
.back-to-top-btn
  position: fixed !important
  bottom: 20px !important
  right: 20px !important
  z-index: 9999 !important
  background: $grad-main !important
  color: white !important
  border: 1px solid rgba(255, 255, 255, 0.3)
  backdrop-filter: blur(4px)
  animation: floating 3s ease-in-out infinite
  transition: all 0.3s ease

  // ホバーエフェクト
  &:hover
    transform: translateY(-5px) scale(1.1)
    box-shadow: 0 10px 20px rgba($primary-pink, 0.4) !important
    background: $grad-hover !important

  // スマートフォン対応 (Responsive)
  @media (max-width: 600px)
    bottom: 16px !important
    right: 16px !important
    width: 48px !important
    height: 48px !important

// ==========================================
// 4. Animations (アニメーション)
// ==========================================
@keyframes floating
  0%, 100%
    transform: translateY(0px)
  50%
    transform: translateY(-10px)
</style>
