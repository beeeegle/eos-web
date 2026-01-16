<template>
  <!-- Hero Section -->
  <section class="hero-section d-flex align-center justify-center">
    <div class="text-center hero-content">
      <h2 class="text-h6 text-uppercase mb-2 tracking-widest">Total Beauty Salon</h2>
      <h1 class="text-h2 font-weight-thin mb-6 logo-text">Eos</h1>
      <p class="text-subtitle-1 mb-10">女神（Eos）が目覚める、至福の光。</p>
      <v-btn class="grad-btn-lg" rounded="pill" size="large">体験予約はこちら</v-btn>
    </div>
  </section>

  <!-- Concept Section -->
  <v-container class="py-16 text-center">
    <h2 class="section-title">CONCEPT</h2>
    <v-divider class="mx-auto mt-n4 mb-6" color="primary-blue" thickness="2" width="40" />
    <v-row justify="center">
      <v-col cols="12" md="8">
        <p class="text-body-1 leading-loose">
          Eosは、光と水、そして癒やしをテーマにした総合美容サロンです。<br>
          24時間忙しく活躍する女性たちへ、本来の輝きを取り戻すための特別な空間を提供します。
        </p>
      </v-col>
    </v-row>
  </v-container>

  <!-- Menu & Facility Section -->
  <section class="bg-light-grad py-16">
    <v-container>
      <h2 class="section-title text-center mb-10">MENU & FACILITY</h2>
      <v-divider class="mx-auto mt-n4 mb-6" color="primary-blue" thickness="2" width="40" />
      <p class="text-subtitle-1 text-grey-darken-2 tracking-widest">極上のケアを、明快な価格で</p>
      <v-row>
        <v-col
          v-for="item in menuItems"
          :key="item.title"
          cols="12"
          md="3"
          sm="6"
        >
          <v-card class="menu-card" hover>
            <v-img cover height="200" :src="item.image">
              <v-fade-transition v-if="item.comingSoon">
                <div class="coming-soon-overlay d-flex align-center justify-center">
                  <span>Coming Soon</span>
                </div>
              </v-fade-transition>
            </v-img>
            <v-card-title class="text-center font-weight-bold">{{ item.title }}</v-card-title>
            <v-card-text class="text-center text-caption">{{ item.desc }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <!-- Price List Section -->
  <v-container id="price" class="py-16 bg-light-grad" fluid>
    <v-container>
      <v-row class="mb-12" justify="center">
        <v-col class="text-center" cols="12">
          <h2 class="section-title logo-text text-uppercase">Price List</h2>
          <v-divider class="mx-auto mt-n4 mb-6" color="primary-blue" thickness="2" width="40" />
          <p class="text-subtitle-1 text-grey-darken-2 tracking-widest">極上のケアを、明快な価格で</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col v-for="(plan, index) in pricePlans" :key="index" cols="12" md="4">
          <v-card
            class="menu-card mx-auto h-100 d-flex flex-column border-0"
            elevation="10"
          >
            <v-sheet
              class="grad-btn pa-8 text-center"
              style="min-height: 140px; display: flex; flex-direction: column; justify-content: center;"
            >
              <div class="logo-text text-h5 font-weight-bold mb-1">{{ plan.title }}</div>
              <div class="text-caption opacity-80 tracking-widest">{{ plan.subtitle }}</div>
            </v-sheet>

            <v-card-text class="pa-8 text-center flex-grow-1">
              <div class="mb-6">
                <span class="text-h4 font-weight-bold" style="color: #3a506b;">
                  ¥{{ plan.price.toLocaleString() }}
                </span>
                <span class="text-body-2 text-grey-darken-1"> / {{ plan.unit }}</span>
              </div>

              <v-divider class="mb-6" />

              <v-list class="text-left bg-transparent" density="compact">
                <v-list-item v-for="(feature, fIndex) in plan.features" :key="fIndex" class="px-0">
                  <template #prepend>
                    <v-icon class="mr-2" color="#5c7cfa" icon="mdi-check-circle-outline" size="small" />
                  </template>
                  <v-list-item-title class="text-body-2 text-grey-darken-3">{{ feature }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>

            <v-card-actions class="pa-8 pt-0">
              <v-btn
                block
                class="grad-btn-lg rounded-pill font-weight-bold"
                elevation="2"
                height="54"
              >
                RESERVE
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>

  <!-- Access Section -->
  <v-container id="access" class="py-16 bg-navy text-white" fluid>
    <v-container>
      <v-row class="mb-12" justify="center">
        <v-col class="text-center" cols="12">
          <h2 class="section-title logo-text text-uppercase text-white">Access</h2>
          <v-divider class="mx-auto mt-n4 mb-6" color="primary-pink" thickness="2" width="40" />
          <p class="text-subtitle-1 opacity-80 tracking-widest">横浜駅徒歩5分のプライベート空間</p>
        </v-col>
      </v-row>

      <v-row align="center">
        <v-col class="pa-8" cols="12" md="5">
          <div class="mb-10">
            <h3 class="logo-text text-h4 mb-2">Eos Yokohama</h3>
            <p class="text-caption tracking-widest opacity-60 mb-6">セルフ美容サロン イオス 横浜店</p>

            <v-list bg-transparent class="text-white">
              <v-list-item class="px-0 mb-4" prepend-icon="mdi-map-marker-outline">
                <v-list-item-title class="font-weight-bold mb-1">ADDRESS</v-list-item-title>
                <v-list-item-subtitle class="text-white opacity-80 text-wrap">
                  〒220-0004 神奈川県横浜市西区北幸２丁目５−１３ 西口幸ビル 5F
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item class="px-0 mb-4" prepend-icon="mdi-clock-outline">
                <v-list-item-title class="font-weight-bold mb-1">OPENING HOURS</v-list-item-title>
                <v-list-item-subtitle class="text-white opacity-80">
                  11:00 〜 20:30（最終受付 20:00）
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item class="px-0 mb-4" prepend-icon="mdi-phone-outline">
                <v-list-item-title class="font-weight-bold mb-1">CONTACT</v-list-item-title>
                <v-list-item-subtitle class="text-white opacity-80">
                  045-534-8879
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </div>

          <v-btn
            block
            class="grad-btn-lg rounded-pill"
            height="54"
            href="https://maps.app.goo.gl/3wG8NnU6wP7zH9y96"
            target="_blank"
          >
            <v-icon icon="mdi-directions" start />
            GOOGLE MAPSで見る
          </v-btn>
        </v-col>

        <v-col class="pa-0 pa-md-4" cols="12" md="7">
          <v-card class="map-container rounded-xl overflow-hidden" elevation="12">
            <iframe
              allowfullscreen=""
              height="450"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.4678142324314!2d139.6145646763435!3d35.46741384133496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185d4c605cd65f%3A0x31ffb75fc8dcda01!2z6Ieq55Sf6Ki66YGp5pyf56S-IOWcs-W5vOOCueODreODvOODoA!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
              style="border:0;"
              width="100%"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
  const menuItems = [
    { title: '日焼けマシン', desc: '最新のタンニングマシンで健康的な小麦肌へ', image: new URL('@/assets/images/menu_1.png', import.meta.url).href },
    { title: 'コラーゲンマシン', desc: '全身光エステで潤いとハリをチャージ', image: new URL('@/assets/images/menu_2.png', import.meta.url).href },
    { title: 'ホワイトニング', desc: '自信の持てる白い歯へ。痛くないセルフケア', image: new URL('@/assets/images/menu_3.png', import.meta.url).href, comingSoon: true },
    { title: 'シャワー完備', desc: '高級感のあるパウダールームを完備', image: new URL('@/assets/images/facility_1.png', import.meta.url).href }
  ]
  const pricePlans = [
    {
      title: 'Tanning',
      subtitle: '日焼けマシン',
      price: 3300,
      unit: '30分',
      color: 'orange-darken-3',
      features: ['最新のハイパワーマシン', 'シャワー利用込み', 'タオル・アメニティ無料'],
    },
    {
      title: 'Collagen',
      subtitle: 'コラーゲンマシン',
      price: 4400,
      unit: '30分',
      color: 'pink-lighten-2',
      features: ['全身光エステ', '美肌保湿ケア', 'リラックス効果'],
    },
    {
      title: 'Whitening',
      subtitle: 'ホワイトニング',
      price: 3500,
      unit: '1回',
      color: 'cyan-darken-1',
      features: ['セルフホワイトニング', '痛みなし', '自然な白さへ'],
    },
  ]
</script>

<style scoped lang="sass">
// ==========================================
// 1. Variables (変数)
// ==========================================
$primary-blue: #5c7cfa
$primary-pink: #f06595
$navy: #1a2a44
$text-main: #3a506b
$grad-main: linear-gradient(135deg, $primary-blue 0%, $primary-pink 100%)
$grad-sub: linear-gradient(45deg, $primary-blue, $primary-pink)

// ==========================================
// 2. Common Styles (共通設定)
// ==========================================
.logo-text
  font-family: 'Playfair Display', serif
  letter-spacing: 0.1em

.section-title
  @extend .logo-text
  font-size: 2rem
  letter-spacing: 0.3em
  color: $text-main
  margin-bottom: 2rem

.tracking-widest
  letter-spacing: 0.3em // 0.2〜0.5の中間で調整

.opacity-80
  opacity: 0.8
.opacity-60
  opacity: 0.6

// ==========================================
// 3. Backgrounds (背景)
// ==========================================
.bg-navy
  background-color: $navy

.bg-light-grad
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)

// ==========================================
// 4. Buttons (ボタン)
// ==========================================
.grad-btn
  background: $grad-main !important
  color: white !important

.grad-btn-lg
  background: $grad-sub !important
  color: white !important
  padding: 0 40px !important
  letter-spacing: 0.2em
  border: 1px solid rgba(255, 255, 255, 0.3)

// ==========================================
// 5. Sections & Components (特定要素)
// ==========================================
.hero-section
  height: 80vh
  position: relative
  overflow: hidden
  display: flex
  align-items: center
  justify-content: center
  background-image: url('@/assets/images/hero-bg.png')
  background-size: cover
  background-position: center

  &::before
    content: ''
    position: absolute
    inset: 0
    background: linear-gradient(135deg, rgba($primary-blue, 0.5) 0%, rgba($primary-pink, 0.5) 100%)
    z-index: 1

.hero-content
  position: relative
  z-index: 2
  color: white
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.2)

.menu-card
  border-radius: 16px !important
  overflow: hidden
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)
  background: white

  &:hover
    transform: translateY(-10px)
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important

.coming-soon-overlay
  position: absolute
  inset: 0
  background: rgba(255, 255, 255, 0.6)
  backdrop-filter: blur(4px)
  color: $primary-pink
  font-weight: bold
  font-size: 1.2rem
  display: flex
  align-items: center
  justify-content: center

.map-container
  border: 1px solid rgba(255, 255, 255, 0.1)
  filter: grayscale(0.2) contrast(1.1)
  transition: filter 0.5s ease

  &:hover
    filter: grayscale(0) contrast(1)
</style>
