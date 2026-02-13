<template>
  <!-- Hero Section -->
  <section class="hero-section d-flex align-center justify-center">
    <div class="text-center hero-content">
      <h2 class="text-subtitle-1 text-uppercase mb-4 tracking-widest opacity-80">
        The Luxury Urban Sanctuary
      </h2>
      <div class="hero-logo-wrapper">
        <img
          alt="Eos Logo Emblem"
          class="hero-logo-bg"
          src="@/assets/images/eos_logo.png"
        >
        <h1 class="text-h2 font-weight-bold logo-text text-uppercase">
          Eos
        </h1>
      </div>
      <v-divider class="mx-auto mb-8" color="primary-gold" thickness="1" width="60" />
      <p class="text-h6 mb-10 tracking-widest font-weight-thin leading-relaxed">
        至高のポテンシャルを、<br class="d-md-none">
        呼び覚ます。
      </p>
      <v-btn
        class="grad-btn-lg px-12"
        elevation="4"
        size="x-large"
      >
        BOOK AN EXPERIENCE
      </v-btn>
    </div>
  </section>

  <!-- Concept Section -->
  <section id="concept" class="py-16">
    <v-container class="py-16 text-center">
      <h2 class="section-title">CONCEPT</h2>
      <v-row justify="center">
        <v-col cols="12" lg="8" md="10">
          <h3 class="text-h5 font-weight-bold mb-8 tracking-widest text-navy">
            「自分」を研ぎ澄ます、静寂と光。
          </h3>

          <p class="text-body-1 leading-loose tracking-widest text-grey-darken-3">
            Eos（イオス）は、光と最新のテクノロジーを融合させた<br class="d-none d-md-block">
            ハイエンド・セルフコンディショニングサロンです。<br><br>
            24時間、常にフロントラインで活躍し続けるすべての人々へ。<br>
            喧騒を離れたプライベートな空間で、<br class="d-none d-md-block">
            本来のポテンシャルを最大限に引き出し、<br class="d-none d-md-block">
            明日への確信を整えるための特別なひとときを提供します。
          </p>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <!-- Menu & Facility Section -->
  <section id="menu" class="bg-light-grad py-16">
    <v-container class="py-10">
      <div class="text-center mb-16">
        <h2 class="section-title">MENU & FACILITY</h2>
        <p class="text-subtitle-1 text-navy tracking-widest font-weight-bold mt-2">
          至高のメンテナンスを、洗練されたプライベート空間で
        </p>
      </div>

      <v-row>
        <v-col
          v-for="item in menuItems"
          :key="item.title"
          class="pa-4"
          cols="12"
          md="3"
          sm="6"
        >
          <v-card border class="menu-card h-100 elevation-0">
            <v-img
              class="align-end"
              cover
              gradient="to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.3) 100%"
              height="240"
              :src="item.image"
            >
              <v-fade-transition v-if="item.comingSoon">
                <div class="coming-soon-overlay">
                  <span class="text-uppercase tracking-widest text-h6">Coming Soon</span>
                </div>
              </v-fade-transition>
            </v-img>

            <v-card-item class="text-center pt-6 pb-2">
              <v-card-title class="text-h6 font-weight-bold tracking-widest text-navy text-uppercase">
                {{ item.title }}
              </v-card-title>
            </v-card-item>

            <v-card-text class="text-center text-body-2 text-grey-darken-2 pb-6 px-4">
              {{ item.desc }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <!-- Price List Section -->
  <section id="price" class="py-16 bg-light-grad">
    <v-container class="py-16">
      <v-row class="mb-12" justify="center">
        <v-col class="text-center" cols="12">
          <h2 class="section-title">Price List</h2>
          <p class="text-subtitle-1 text-grey-darken-3 tracking-widest mt-2">
            SESSION & MEMBERSHIP
          </p>
        </v-col>
      </v-row>

      <v-tabs
        v-model="activeMachine"
        align-tabs="center"
        class="mb-12"
        color="primary-gold"
        height="60"
      >
        <v-tab class="text-uppercase tracking-widest" value="tanning">Sun tanning</v-tab>
        <v-tab class="text-uppercase tracking-widest" value="collagen">Collagen</v-tab>
        <v-tab class="text-uppercase tracking-widest" value="options">Options</v-tab>
      </v-tabs>

      <v-window v-model="activeMachine">
        <v-window-item value="tanning">
          <v-card class="price-card mx-auto overflow-hidden" elevation="16" max-width="1000">
            <v-sheet
              class="pa-8 text-center"
              style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
            >
              <div class="text-h4 font-weight-bold logo-text text-white mb-2">Sun tanning</div>
              <div class="text-caption tracking-widest text-primary-gold font-weight-bold text-uppercase">
                Professional Ultra Class Machine
              </div>
            </v-sheet>

            <v-card-text class="pa-0">
              <v-table class="price-table">
                <thead>
                  <tr class="bg-navy">
                    <th class="text-center text-white">SESSION</th>
                    <th class="text-center text-white border-left">MENS</th>
                    <th class="text-center text-white border-left">LADIES</th>
                    <th class="text-center text-white border-left">STUDENT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in tanning" :key="row.time">
                    <td class="text-center font-weight-bold bg-grey-lighten-4 py-6">
                      <div class="text-h5 mb-1">{{ row.time }} min</div>
                      <div class="text-caption text-primary-gold font-weight-bold">VIP MEMBER</div>
                    </td>
                    <td v-for="cat in ['male', 'female', 'student']" :key="cat" class="text-center border-left">
                      <div class="text-body-2 text-grey-darken-1 mb-1">Standard: ¥{{ row[cat].normal }}</div>
                      <div class="text-h5 font-weight-bold text-navy">
                        {{ row[cat].vip === '-' ? '-' : '¥' + row[cat].vip }}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-card-text>
            <v-divider />
            <v-card-actions class="pa-12 justify-center flex-column bg-white">
              <p class="text-body-2 text-grey-darken-2 mb-6">※表示価格はすべて税込です。VIPメンバーの詳細はカウンセリングにてご案内いたします。</p>
              <v-btn class="grad-btn-lg px-16" height="60" size="large">RESERVE NOW</v-btn>
            </v-card-actions>
          </v-card>
        </v-window-item>

        <v-window-item value="collagen">
          <v-card class="price-card mx-auto overflow-hidden" elevation="16" max-width="900">
            <v-sheet
              class="pa-8 text-center"
              style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%)"
            >
              <div class="text-h4 font-weight-bold logo-text text-white mb-2">Collagen Therapy</div>
              <div class="text-caption tracking-widest text-primary-gold font-weight-bold text-uppercase">
                Beauty Light Conditioning
              </div>
            </v-sheet>
            <v-card-text class="pa-0">
              <v-table class="price-table">
                <thead>
                  <tr>
                    <th class="text-center bg-navy text-white">MENU</th>
                    <th class="text-center bg-navy text-white">STANDARD</th>
                    <th class="text-center bg-navy text-white">VIP MEMBER</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in collagenPrices" :key="row.time">
                    <td class="text-center font-weight-bold bg-grey-lighten-4 py-6">
                      <div class="text-h5 mb-1">{{ row.time }} min</div>
                      <div class="text-caption text-primary-gold font-weight-bold">VIP MEMBER</div>
                    </td>
                    <td v-for="cat in ['male', 'female', 'student']" :key="cat" class="text-center border-left">
                      <div class="text-body-2 text-grey-darken-1 mb-1">Standard: ¥{{ row[cat].normal }}</div>
                      <div class="text-h5 font-weight-bold text-navy">
                        {{ row[cat].vip === '-' ? '-' : '¥' + row[cat].vip }}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-card-text>
            <v-card-actions class="pa-12 justify-center bg-white border-top">
              <v-btn class="grad-btn-lg px-16" height="60" size="large">RESERVE NOW</v-btn>
            </v-card-actions>
          </v-card>
        </v-window-item>

        <v-window-item value="options">
          <v-card class="price-card mx-auto overflow-hidden" elevation="16" max-width="900">
            <v-sheet
              class="pa-8 text-center"
              style="background: linear-gradient(135deg, #334155 0%, #0f172a 100%)"
            >
              <div class="text-h4 font-weight-bold logo-text text-white mb-2">Options</div>
              <div class="text-caption tracking-widest text-primary-gold font-weight-bold text-uppercase">
                Refined Detail Enhancement
              </div>
            </v-sheet>

            <v-card-text class="pa-0">
              <v-table class="price-table">
                <thead>
                  <tr>
                    <th class="text-center bg-navy text-white">COURSE</th>
                    <th class="text-center bg-navy text-white">STANDARD</th>
                    <th class="text-center bg-navy text-white">VIP MEMBER</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in optionsPrices" :key="row.name">
                    <td class="text-center font-weight-bold bg-grey-lighten-4 py-6">
                      <div class="text-h6 text-navy">{{ row.name }}</div>
                      <div class="text-caption text-grey-darken-1">{{ row.desc }}</div>
                    </td>
                    <td class="text-center text-h6 text-grey-darken-1 font-weight-light">
                      ¥{{ row.normal }}
                    </td>
                    <td class="text-center text-h5 text-navy font-weight-bold">
                      ¥{{ row.vip }}
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-card-text>

            <v-card-actions class="pa-12 justify-center flex-column bg-white">
              <v-btn class="grad-btn-lg px-16" height="60" size="large">
                RESERVE NOW
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-window-item>
      </v-window>
    </v-container>
  </section>

  <!-- Access Section -->
  <section id="access">
    <v-container class="py-16 bg-navy text-white" fluid>
      <v-container class="py-10">
        <v-row class="mb-12" justify="center">
          <v-col class="text-center" cols="12">
            <h2 class="section-title text-white">ACCESS</h2>
            <v-divider class="mx-auto mt-n4 mb-6" color="primary-gold" thickness="1" width="60" />
            <p class="text-subtitle-1 opacity-80 tracking-widest">
              洗練された静寂の空間
            </p>
          </v-col>
        </v-row>

        <v-row align="center">
          <v-col class="pa-8" cols="12" md="5">
            <div class="mb-10">
              <h3 class="logo-text text-h4 mb-2 tracking-widest text-primary-gold">Eos Beauty Salon</h3>
              <p class="text-caption tracking-widest opacity-60 mb-8 text-uppercase">
                High-End Conditioning Salon
              </p>
              <v-list bg-transparent class="text-white pl-4" density="relaxed">
                <v-list-item class="px-0 mb-6 align-start">
                  <template #prepend>
                    <v-icon class="mr-4 mt-1" color="primary-gold" icon="mdi-map-marker-outline" size="large" />
                  </template>
                  <v-list-item-title class="font-weight-bold mb-1 tracking-widest text-body-2 text-primary-gold">ADDRESS</v-list-item-title>
                  <div class="text-white opacity-80 text-wrap leading-loose style-normal custom-font-size">
                    〒254-0045<br>
                    神奈川県平塚市見附町<br>
                    ２３−１６
                  </div>
                </v-list-item>

                <v-list-item class="px-0 mb-6">
                  <template #prepend>
                    <v-icon class="mr-4" color="primary-gold" icon="mdi-clock-outline" size="large" />
                  </template>
                  <v-list-item-title class="font-weight-bold mb-1 tracking-widest text-body-2 text-primary-gold">OPENING HOURS</v-list-item-title>
                  <div class="text-white opacity-80 style-normal custom-font-size">
                    11:00 〜 20:30M<br>
                    （Last Entry 20:00）
                  </div>
                </v-list-item>

                <v-list-item class="px-0 mb-6">
                  <template #prepend>
                    <v-icon class="mr-4" color="primary-gold" icon="mdi-phone-outline" size="large" />
                  </template>
                  <v-list-item-title class="font-weight-bold mb-1 tracking-widest text-body-2 text-primary-gold">CONTACT</v-list-item-title>
                  <div class="text-white opacity-80 style-normal custom-font-size">
                    0463-59-9487
                  </div>
                </v-list-item>
              </v-list>
            </div>

            <v-btn
              block
              class="grad-btn-lg"
              elevation="4"
              height="56"
              href="https://www.google.com/maps/search/?api=1&query=254-0045"
              target="_blank"
            >
              <v-icon icon="mdi-directions" start />
              GOOGLE MAPSで見る
            </v-btn>
          </v-col>

          <v-col class="pa-0 pa-md-4" cols="12" md="7">
            <v-card border class="map-container rounded-lg overflow-hidden" elevation="16">
              <iframe
                height="480"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509.920094458313!2d139.3414674!3d35.33181359999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019ace1c3485917%3A0x146ab8995d71195e!2z44CSMjU0LTAwNDUg56We5aWI5bed55yM5bmz5aGa5biC6KaL6ZmE55S677yS77yT4oiS77yR77yWIOODmeODrOODvOOCtua5mOWNlw!5e0!3m2!1sja!2sjp!4v1770963112144!5m2!1sja!2sjp"
                style="border:0; filter: contrast(1.1) brightness(0.9);"
                width="100%"
              />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </section>

  <section id="contact">
    <v-container class="py-16 bg-light-grad" fluid>
      <v-container class="py-10">
        <v-row>
          <v-col class="d-flex flex-column justify-center pa-8" cols="12" md="5">
            <h2 class="section-title text-navy mb-4">CONTACT</h2>
            <h3 class="text-h4 font-weight-bold mb-6 text-navy leading-relaxed">
              理想の自分を、<br>
              手に入れる。
            </h3>
            <p class="text-body-1 text-grey-darken-3 mb-8 tracking-widest leading-loose">
              サービスに関するご相談、体験予約の調整、<br class="d-none d-md-block">
              法人・提携に関するお問い合わせなど、<br class="d-none d-md-block">
              こちらからお気軽にご連絡ください。
            </p>
            <div class="d-flex align-center text-caption text-navy font-weight-bold tracking-widest">
              <v-icon class="mr-2" color="primary-gold" icon="mdi-information-outline" />
              通常2営業日以内にコンシェルジュより返信いたします。
            </div>
          </v-col>

          <v-col cols="12" md="7">
            <v-card border class="pa-8 pa-md-12 rounded-lg elevation-16">
              <v-form ref="form">
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      class="mb-2"
                      color="navy"
                      label="Name"
                      placeholder="お名前"
                      variant="underlined"
                    />
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      class="mb-2"
                      color="navy"
                      label="Email"
                      placeholder="メールアドレス"
                      variant="underlined"
                    />
                  </v-col>

                  <v-col cols="12">
                    <v-select
                      class="mb-2"
                      color="navy"
                      :items="['初回体験予約', 'メニューに関するご質問', '提携・取材のご相談']"
                      label="Subject"
                      variant="underlined"
                    />
                  </v-col>

                  <v-col cols="12">
                    <v-textarea
                      class="mb-8"
                      color="navy"
                      label="Message"
                      placeholder="お問い合わせ内容をご入力ください"
                      rows="4"
                      variant="underlined"
                    />
                  </v-col>

                  <v-col cols="12">
                    <v-btn
                      block
                      class="grad-btn-lg text-h6"
                      elevation="8"
                      height="70"
                    >
                      SEND MESSAGE
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue' // この行が必要です

  const activeMachine = ref('matrix')

  const menuItems = [
    { title: '日焼けマシン', desc: '最新のタンニングマシンで健康的な小麦肌へ', image: new URL('@/assets/images/menu_1.png', import.meta.url).href },
    { title: 'コラーゲンマシン', desc: '全身光エステで潤いとハリをチャージ', image: new URL('@/assets/images/menu_2.png', import.meta.url).href },
    { title: 'シャワー完備', desc: '高級感のあるパウダールームを完備', image: new URL('@/assets/images/facility_1.png', import.meta.url).href },
    { title: 'ホワイトニング', desc: '【オプション】自信の持てる白い歯へ。痛くないセルフケア', image: new URL('@/assets/images/menu_3.png', import.meta.url).href, comingSoon: true },
  ]
  // 画像のデータを反映
  const tanning = [
    {
      time: 15,
      male: { normal: '3,930', vip: '-' },
      female: { normal: '3,430', vip: '2,680' },
      student: { normal: '2,940', vip: '2,190' },
    },
    {
      time: 25,
      male: { normal: '4,590', vip: '3,340' },
      female: { normal: '4,090', vip: '2,840' },
      student: { normal: '3,600', vip: '2,350' },
    },
    {
      time: 35,
      male: { normal: '5,250', vip: '4,000' },
      female: { normal: '4,750', vip: '3,500' },
      student: { normal: '4,260', vip: '3,010' },
    },
  ]
  const collagenPrices = [
    {
      time: 20,
      male: { normal: '2,940', vip: '-' },
      female: { normal: '2,610', vip: '2,110' },
      student: { normal: '2,280', vip: '1,780' },
    },
    {
      time: 30,
      male: { normal: '3,600', vip: '2,600' },
      female: { normal: '3,270', vip: '2,270' },
      student: { normal: '2,940', vip: '1,940' },
    },
    {
      time: 40,
      male: { normal: '4,260', vip: '3,260' },
      female: { normal: '3,930', vip: '2,930' },
      student: { normal: '3,600', vip: '2,600' },
    },
  ]
  const optionsPrices = [
    { name: 'ホワイトニング', desc: '(coming soon)', normal: '-', vip: '-' },
  ]

</script>

<style scoped lang="sass">
// ==========================================
// 1. Variables & Mixins
// ==========================================
$luxury-black: #050505
$deep-offset: #0a0a0a
$primary-gold: #c5a059
$gold-shadow: rgba($primary-gold, 0.4)

@mixin gold-text-grad
  background: linear-gradient(to bottom, #ffffff 20%, $primary-gold 100%)
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent

@mixin text-glow($color, $blur: 15px)
  text-shadow: 0 0 $blur $color

// ==========================================
// 2. Global Layout & Vuetify Overrides
// ==========================================
:deep(body), :deep(.v-application), .v-application
  color: #ffffff !important
  background-color: $luxury-black

#concept, #menu, #price, #access, #contact
  background-color: $luxury-black !important
  color: #ffffff

.bg-light-grad
  background: linear-gradient(180deg, $luxury-black 0%, $deep-offset 100%) !important

.v-card, .v-table, .v-card-actions, .v-card-title, .v-card-text, .v-card-item
  background-color: rgba(255, 255, 255, 0.03) !important
  color: #ffffff !important
  border-color: rgba($primary-gold, 0.15) !important

.v-table
  background: transparent !important
  th, td
    background: transparent !important
    border-color: rgba(255, 255, 255, 0.1) !important
    color: #ffffff !important
  .bg-grey-lighten-4
    background: rgba(255, 255, 255, 0.05) !important

:deep(.v-field__outline), :deep(.v-divider)
  color: rgba($primary-gold, 0.5) !important
  border-color: rgba($primary-gold, 0.5) !important

.text-navy, .text-grey-darken-3, .text-grey-darken-2
  color: rgba(255, 255, 255, 0.7) !important

// ==========================================
// 3. Hero Section
// ==========================================
.hero-section
  height: 90vh
  background: $luxury-black url('@/assets/images/hero-bg.png') center / cover
  position: relative
  display: flex
  align-items: center
  justify-content: center
  &::before
    content: ''
    position: absolute
    inset: 0
    background: radial-gradient(circle, rgba(0,0,0,0.2) 0%, $luxury-black 100%)
    z-index: 1

.hero-content
  position: relative
  z-index: 2
  text-align: center
  padding: 0 20px

  // ロゴとテキストの重ね合わせ
  .hero-logo-wrapper
    position: relative
    display: flex
    align-items: center
    justify-content: center
    margin-bottom: 2rem

    .hero-logo-bg
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      // 修正ポイント：インターポレーションと !important を追加
      width: clamp(#{350px}, #{65vw}, #{600px}) !important
      height: auto !important
      opacity: 0.15
      pointer-events: none
      filter: brightness(1.1) sepia(0.3) blur(1px)
      z-index: 0

    .logo-text
      position: relative
      z-index: 1
      @include gold-text-grad
      font-size: clamp(4rem, 12vw, 7.5rem) !important
      font-weight: 200 !important
      letter-spacing: 0.3em !important
      filter: drop-shadow(0 0 20px $gold-shadow)
      background-size: 200% auto
      animation: shine 4s linear infinite
      margin-bottom: 0 !important

  .text-subtitle-1
    color: $primary-gold !important
    letter-spacing: 0.5em !important
    font-weight: 500
    @include text-glow(rgba($primary-gold, 0.3), 10px)

  p.text-h6
    color: rgba(255, 255, 255, 0.9) !important
    font-weight: 200 !important
    line-height: 2.2 !important
    letter-spacing: 0.5em !important
    @include text-glow(rgba(255, 255, 255, 0.2))

// ==========================================
// 4. Components & Utilities
// ==========================================
.section-title
  margin-bottom: 3rem
  text-align: center
  color: #ffffff !important
  @include text-glow(rgba($primary-gold, 0.2), 20px)

.grad-btn-lg
  background: linear-gradient(135deg, $primary-gold 0%, #8c6d46 100%) !important
  color: white !important
  font-weight: bold
  letter-spacing: 0.2em
  transition: all 0.4s ease
  &:hover
    filter: brightness(1.2)
    box-shadow: 0 0 25px $gold-shadow !important
    transform: translateY(-2px)

.coming-soon-overlay
  position: absolute
  inset: 0
  background: rgba(0,0,0,0.7)
  backdrop-filter: blur(4px)
  display: flex
  align-items: center
  justify-content: center

@keyframes shine
  to
    background-position: 200% center

// v-list-item-subtitle のデフォルトの省略設定を解除
:deep(.v-list-item-subtitle.style-normal)
  -webkit-line-clamp: unset !important // 行数制限を解除
  white-space: normal !important       // 折り返しを許可
  overflow: visible !important         // はみ出しを表示

// アクセス情報のテキストサイズを一括制御
.custom-font-size
  font-size: 1.1rem !important // ここで全体のサイズを微調整できます
  letter-spacing: 0.05em
  line-height: 1.8

.style-normal
  white-space: normal !important
  overflow: visible !important

// ラベル（ADDRESS等）のサイズ調整
.text-body-2
  font-size: 0.85rem !important
  opacity: 0.9
</style>
