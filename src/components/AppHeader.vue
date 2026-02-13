<template>
  <v-app-bar class="header-glass" flat height="80">
    <v-container class="d-flex align-center">
      <v-toolbar-title class="logo-text text-h4">
        <span class="logo-gradient">Eos</span>
      </v-toolbar-title>

      <v-spacer />

      <div class="hidden-sm-and-down nav-wrapper">
        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          class="nav-link mx-1"
          variant="text"
          @click="scrollToSection(item.target)"
        >
          {{ item.title }}
        </v-btn>
      </div>

      <v-btn
        class="grad-btn-header ml-6 px-8 hidden-sm-and-down"
        @click="scrollToSection('#contact')"
      >
        RESERVE
      </v-btn>

      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        color="navy"
        @click="drawer = !drawer"
      />
    </v-container>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    class="sp-nav-drawer"
    fixed
    location="right"
    temporary
    width="300"
  >
    <div class="d-flex flex-column pa-8 h-100">
      <div class="d-flex justify-end mb-8">
        <v-btn color="navy" icon="mdi-close" variant="text" @click="drawer = false" />
      </div>

      <v-list class="bg-transparent text-center">
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          class="mb-6"
          @click="handleSpNav(item.target)"
        >
          <v-list-item-title class="logo-text text-h5 tracking-widest text-navy">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>

      <v-spacer />

      <v-btn
        block
        class="grad-btn-header"
        height="64"
        @click="handleSpNav('#contact')"
      >
        RESERVE
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
  // スクリプト部分は変更なし（機能維持）
  import { ref } from 'vue'
  import { useGoTo } from 'vuetify'

  const drawer = ref(false)
  const goTo = useGoTo()

  const menuItems = [
    { title: 'CONCEPT', target: '#concept' },
    { title: 'MENU', target: '#menu' },
    { title: 'PRICE', target: '#price' },
    { title: 'ACCESS', target: '#access' },
    { title: 'CONTACT', target: '#contact' },
  ]

  function scrollToSection (target: string) {
    goTo(target, {
      duration: 800,
      easing: 'easeInOutCubic',
      offset: -80, // ヘッダーの高さ分調整
    })
  }

  function handleSpNav (target: string) {
    drawer.value = false
    setTimeout(() => {
      scrollToSection(target)
    }, 350)
  }
</script>

<style scoped lang="sass">
// 変数の再定義（Sassファイルから読み込んでいる場合は不要）
$navy: #0f172a
$primary-gold: #c5a059

.header-glass
  background: rgba(255, 255, 255, 0.8) !important
  backdrop-filter: blur(12px)
  -webkit-backdrop-filter: blur(12px)
  border-bottom: 1px solid rgba($navy, 0.05)
  position: sticky !important

.logo-text
  font-family: 'Playfair Display', serif
  letter-spacing: 0.1em
  color: $navy

  .logo-gradient
    // ピンクを抜き、白〜ゴールドの神々しいグラデーションへ
    background: linear-gradient(135deg, $navy 0%, $primary-gold 100%)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
    display: inline-block

.nav-link
  letter-spacing: 0.2em
  font-size: 0.75rem
  font-weight: 600
  color: $navy !important
  position: relative

  &::after
    content: ''
    position: absolute
    bottom: 12px
    left: 50%
    width: 0
    height: 1px
    background: $primary-gold
    transition: all 0.3s ease
    transform: translateX(-50%)

  &:hover
    background: transparent !important
    color: $primary-gold !important
    &::after
      width: 40%

.grad-btn-header
  background: $navy !important // シンプルにネイビー背景
  color: white !important
  letter-spacing: 0.2em
  font-size: 0.8rem
  border-radius: 4px // Pillからシャープな角丸へ
  transition: all 0.3s ease

  &:hover
    background: $primary-gold !important
    transform: translateY(-2px)
    box-shadow: 0 4px 12px rgba($primary-gold, 0.3)

.sp-nav-drawer
  background: rgba(255, 255, 255, 0.95) !important
  backdrop-filter: blur(20px)

.tracking-widest
  letter-spacing: 0.3em
</style>
