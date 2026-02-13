<template>
  <v-app v-scroll="onScroll" class="eos-app">
    <app-header />

    <v-main>
      <v-container class="pa-0" fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-fade-transition>
      <v-btn
        v-if="fab"
        class="back-to-top-btn"
        elevation="12"
        icon="mdi-chevron-up"
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

  function onScroll () {
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

<style lang="sass">
/* scopedを外し、グローバルスタイルとして定義します */

// ==========================================
// 1. Luxury Midnight Variables
// ==========================================
$luxury-black: #050505
$deep-offset: #0a0a0a
$primary-gold: #c5a059

// ==========================================
// 2. Base Reset & Typography
// ==========================================
html, body
  background-color: #000 !important // 下地の完全な黒
  overflow-x: hidden
  font-feature-settings: "palt"

// ==========================================
// 3. Eos App Deep Black Layout
// ==========================================
.eos-app.v-application
  // 放射状グラデーションで「ただの黒」に奥行きを出す
  background: radial-gradient(circle at 50% 50%, $deep-offset 0%, $luxury-black 100%) !important
  color: #ffffff !important

  // フィルムノイズテクスチャ（オーバーレイ）
  &::before
    content: ""
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")
    opacity: 0.04
    pointer-events: none
    z-index: 1

.v-application__wrap
  background: transparent !important // Vuetifyのデフォルト白背景を透明化

// ==========================================
// 4. Global Components
// ==========================================

// セクションタイトル：金白グラデを標準化
.section-title
  font-family: 'Playfair Display', serif !important
  font-size: clamp(2rem, 5vw, 2.8rem) !important
  font-weight: 300 !important
  letter-spacing: 0.3em !important
  text-align: center
  margin-bottom: 3rem
  text-transform: uppercase
  // 金白グラデーション
  background: linear-gradient(135deg, #ffffff 0%, #f9f1d0 50%, $primary-gold 100%)
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent

// ページ上部へ戻るボタン
.back-to-top-btn
  bottom: 40px !important
  right: 40px !important
  z-index: 9999 !important
  background-color: rgba(0, 0, 0, 0.8) !important
  backdrop-filter: blur(10px)
  color: $primary-gold !important
  border: 1px solid rgba($primary-gold, 0.5) !important

  &:hover
    transform: translateY(-5px)
    border-color: $primary-gold !important
    box-shadow: 0 0 20px rgba($primary-gold, 0.3) !important

// ==========================================
// 5. Utility Classes
// ==========================================
.bg-navy-black
  background-color: #000000 !important

.bg-deep-navy
  background-color: $deep-offset !important

.price-card-luxury
  background: rgba(255, 255, 255, 0.03) !important
  border: 1px solid rgba($primary-gold, 0.2) !important
  backdrop-filter: blur(20px)
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5) !important
</style>
