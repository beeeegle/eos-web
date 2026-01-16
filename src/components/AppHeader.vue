<template>
  <v-app-bar class="header-glass" flat height="80">
    <v-container class="d-flex align-center">
      <v-toolbar-title class="logo-text text-h4 font-weight-bold">
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
        class="grad-btn-header ml-4 rounded-pill font-weight-bold px-6 hidden-sm-and-down"
        @click="scrollToSection('#contact')"
      >
        RESERVE
      </v-btn>

      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        color="primary-blue"
        @click="drawer = !drawer"
      />
    </v-container>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    class="sp-nav-drawer"
    fixed
    location="right"
    :scrim="true"
    style="z-index: 9999 !important;"
    temporary
    touchless
    width="300"
  >
    <div class="d-flex flex-column pa-6 h-100">
      <div class="d-flex justify-end mb-4">
        <v-btn icon="mdi-close" variant="text" @click="drawer = false" />
      </div>

      <v-list class="bg-transparent text-center">
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          class="mb-2"
          @click="handleSpNav(item.target)"
        >
          <v-list-item-title class="logo-text text-h6 tracking-widest text-grey-darken-2">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>

      <v-spacer />

      <v-btn
        block
        class="grad-btn-header rounded-pill font-weight-bold mb-6"
        height="56"
        style="max-height: 56px;"
        @click="handleSpNav('#contact')"
      >
        RESERVE
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
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
      offset: 30,
    })
  }
  // スマホ用：メニューを閉じてからスクロール
  function handleSpNav (target: string) {
    drawer.value = false
    setTimeout(() => {
      scrollToSection(target)
    }, 300) // ドロワーが閉じるアニメーションを待つ
  }
</script>

<style scoped lang="sass">
$primary-blue: #5c7cfa
$primary-pink: #f06595

// グラスモフィズム（すりガラス）の強化
.header-glass
  background: rgba(255, 255, 255, 0.7) !important
  backdrop-filter: blur(12px)
  -webkit-backdrop-filter: blur(12px)
  border-bottom: 1px solid rgba(255, 255, 255, 0.3)
  position: sticky !important

.logo-text
  font-family: 'Playfair Display', serif
  letter-spacing: 0.15em

  .logo-gradient
  background: linear-gradient(135deg, $primary-blue, $primary-pink)
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent
  display: inline-block

// ナビゲーションの装飾
.nav-link
  letter-spacing: 0.15em
  font-size: 0.85rem
  color: #3a506b !important
  position: relative
  transition: color 0.3s ease

  &::after
    content: ''
    position: absolute
    bottom: 8px
    left: 50%
    width: 0
    height: 1px
    background: linear-gradient(90deg, $primary-blue, $primary-pink)
    transition: all 0.3s ease
    transform: translateX(-50%)

  &:hover
    background: transparent !important
    color: $primary-blue !important
    &::after
      width: 60%

// ボタンをヘッダー用に微調整
.grad-btn-header
  background: linear-gradient(45deg, $primary-blue, $primary-pink) !important
  color: white !important
  letter-spacing: 0.1em
  transition: transform 0.2s ease

  &:hover
    transform: scale(1.05)
    box-shadow: 0 4px 15px rgba($primary-pink, 0.4) !important

// スマホ用ドロワーの背景
.sp-nav-drawer
  background: rgba(255, 255, 255, 0.8) !important
  backdrop-filter: blur(20px)
  border-left: 1px solid rgba($primary-blue, 0.1)

.logo-gradient
  background: linear-gradient(135deg, $primary-blue, $primary-pink)
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent
  display: inline-block

.tracking-widest
  letter-spacing: 0.3em

// 既存の grad-btn-header をドロワー内でも使い回す
.grad-btn-header
  background: linear-gradient(45deg, $primary-blue, $primary-pink) !important
  color: white !important
  letter-spacing: 0.1em

.sp-nav-drawer
  top: 0 !important
  height: 100vh !important
</style>
