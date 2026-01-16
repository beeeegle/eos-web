<template>
  <v-app-bar class="glass-effect" color="rgba(255, 255, 255, 0.8)" flat>
    <v-container class="d-flex align-center">
      <v-toolbar-title class="font-weight-bold logo-text">Eos</v-toolbar-title>
      <v-spacer />
      <div class="hidden-sm-and-down">
        <v-btn variant="text">CONCEPT</v-btn>
        <v-btn variant="text">MENU</v-btn>
        <v-btn variant="text">PRICE</v-btn>
        <v-btn variant="text">ACCESS</v-btn>
      </div>
      <v-btn class="grad-btn ml-4" elevation="2">RESERVE</v-btn>
    </v-container>
  </v-app-bar>
</template>

<style scoped lang="sass">
/* フォント設定（適宜読み込みが必要） */
.logo-text
  font-family: 'Playfair Display', serif
  letter-spacing: 0.1em

/* グラデーション背景 */
.hero-section
  height: 80vh
  background: linear-gradient(135deg, #e3f2fd 0%, #fce4ec 100%)
  position: relative
  overflow: hidden

.bg-light-grad 
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)

/* セクションタイトル */
.section-title
  font-family: 'Playfair Display', serif
  font-size: 1.5rem
  letter-spacing: 0.3em
  margin-bottom: 2rem
  color: #3a506b

/* ボタン */
.grad-btn
  background: linear-gradient(45deg, #5c7cfa, #f06595) !important
  color: white !important

.grad-btn-lg
  background: linear-gradient(45deg, #5c7cfa, #f06595) !important
  color: white !important
  padding: 0 40px !important
  letter-spacing: 0.1em

/* カード & エフェクト */
.menu-card
  border-radius: 12px
  overflow: hidden
  transition: transform 0.3s ease

.menu-card:hover
  transform: translateY(-5px)

.coming-soon-overlay
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  background: rgba(255, 255, 255, 0.6)
  backdrop-filter: blur(4px)
  color: #f06595
  font-weight: bold
  font-size: 1.2rem

.bg-navy
  background-color: #1a2a44

.tracking-widest
  letter-spacing: 0.5em
</style>
