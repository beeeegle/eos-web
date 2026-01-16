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
  <section id="concept" class="py-16">
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
  </section>

  <!-- Menu & Facility Section -->
  <section id="menu" class="bg-light-grad py-16">
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
  <section id="price" class="py-16">
    <v-container id="price" class="py-16 bg-light-grad">
      <v-row class="mb-10" justify="center">
        <v-col class="text-center" cols="12">
          <h2 class="section-title logo-text text-uppercase">Price List</h2>
          <p class="text-subtitle-1 text-grey-darken-2 tracking-widest mt-n4">
            ご利用時間・属性に合わせた最適なプラン
          </p>
        </v-col>
      </v-row>

      <v-tabs
        v-model="activeMachine"
        align-tabs="center"
        class="mb-8"
        color="primary-blue"
      >
        <v-tab value="tanning">Sun tanning</v-tab>
        <v-tab value="collagen">Collagen</v-tab>
        <v-tab value="whitening">Whitening</v-tab>
      </v-tabs>

      <v-window v-model="activeMachine">
        <v-window-item value="tanning">
          <v-card class="price-card mx-auto overflow-hidden" elevation="10" max-width="900">
            <v-sheet
              class="pa-6 text-center"
              style="background: linear-gradient(135deg, #5c7cfa 0%, #f8faff 100%)"
            >
              <div class="text-h5 font-weight-bold logo-text" style="color: #1a2a44;">Sun tanning</div>
              <div class="text-caption tracking-widest text-blue-darken-3">Ultra Class Tanning Machine</div>
            </v-sheet>

            <v-card-text class="pa-0">
              <v-table class="price-table">
                <thead>
                  <tr>
                    <th class="text-center bg-grey-lighten-4">時間</th>
                    <th class="text-center">男性</th>
                    <th class="text-center">女性</th>
                    <th class="text-center">学生</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in tanning" :key="row.time">
                    <td class="text-center font-weight-bold bg-grey-lighten-4 py-4">
                      <div class="text-h6">{{ row.time }}分</div>
                      <div class="text-caption text-primary-pink font-weight-bold">VIPメンバー</div>
                    </td>

                    <td class="text-center">
                      <div class="text-body-1 text-grey-darken-1">¥{{ row.male.normal }}</div>
                      <div class="text-h6 text-primary-pink font-weight-bold">
                        {{ row.male.vip === '-' ? '-' : '¥' + row.male.vip }}
                      </div>
                    </td>

                    <td class="text-center">
                      <div class="text-body-1 text-grey-darken-1">¥{{ row.female.normal }}</div>
                      <div class="text-h6 text-primary-pink font-weight-bold">¥{{ row.female.vip }}</div>
                    </td>

                    <td class="text-center">
                      <div class="text-body-1 text-grey-darken-1">¥{{ row.student.normal }}</div>
                      <div class="text-h6 text-primary-pink font-weight-bold">¥{{ row.student.vip }}</div>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-card-text>

            <v-divider />

            <v-card-actions class="pa-8 justify-center flex-column">
              <p class="text-caption text-grey-darken-1 mb-4">※価格はすべて税込表示です。VIPメンバーの詳細は店頭にてご確認ください。</p>
              <v-btn class="grad-btn-lg rounded-pill px-12" height="54">RESERVE</v-btn>
            </v-card-actions>
          </v-card>
        </v-window-item>
        <v-window-item value="collagen">
          <v-card class="price-card mx-auto overflow-hidden" elevation="10" max-width="900">
            <v-sheet
              class="pa-6 text-center"
              style="background: linear-gradient(135deg, #f06595 0%, #fff5f8 100%)"
            >
              <div class="text-h5 font-weight-bold logo-text" style="color: #862e4c;">Collagen Machine</div>
              <div class="text-caption tracking-widest text-pink-darken-3">Beauty Light Therapy</div>
            </v-sheet>
            <v-card-text class="pa-0">
              <v-table class="price-table">
                <thead>
                  <tr>
                    <th class="text-center bg-grey-lighten-4">メニュー</th>
                    <th class="text-center">通常料金</th>
                    <th class="text-center">VIPメンバー</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in collagenPrices" :key="row.name">
                    <td class="text-center font-weight-bold bg-grey-lighten-4 py-4">
                      <div class="text-body-1">{{ row.name }}</div>
                      <div class="text-caption text-grey">{{ row.desc }}</div>
                    </td>
                    <td class="text-center text-body-1 text-grey-darken-1">¥{{ row.normal }}</td>
                    <td class="text-center text-h6 text-primary-pink font-weight-bold">¥{{ row.vip }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card-text>
            <v-card-actions class="pa-8 justify-center">
              <v-btn class="grad-btn-lg rounded-pill px-12" height="54">RESERVE</v-btn>
            </v-card-actions>
          </v-card>
        </v-window-item>
        <v-window-item value="whitening">
          <v-card class="price-card mx-auto overflow-hidden" elevation="10" max-width="900">
            <v-sheet
              class="pa-6 text-center"
              style="background: linear-gradient(135deg, #8a84ff 45%, #fafdff 100%)"
            >
              <div class="text-h5 font-weight-bold logo-text" style="color: #fafdff; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                Self Whitening
              </div>
              <div class="text-caption tracking-widest text-white opacity-9 text-blue-darken-3">Medical Grade Gel</div>
            </v-sheet>

            <v-card-text class="pa-0">
              <v-table class="price-table">
                <thead>
                  <tr>
                    <th class="text-center bg-grey-lighten-4">コース</th>
                    <th class="text-center">通常料金</th>
                    <th class="text-center">VIPメンバー</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in whiteningPrices" :key="row.name">
                    <td class="text-center font-weight-bold bg-grey-lighten-4 py-4">
                      <div class="text-body-1">{{ row.name }}</div>
                      <div class="text-caption text-grey">{{ row.desc }}</div>
                    </td>
                    <td class="text-center text-body-1 text-grey-darken-1">¥{{ row.normal }}</td>
                    <td class="text-center text-h6 text-primary-pink font-weight-bold">¥{{ row.vip }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card-text>
            <v-card-actions class="pa-8 justify-center">
              <v-btn class="grad-btn-lg rounded-pill px-12" height="54">RESERVE</v-btn>
            </v-card-actions>
          </v-card>
        </v-window-item>
      </v-window>
    </v-container>
  </section>

  <!-- Access Section -->
  <section id="access" class="py-16">
    <v-container class="py-16 bg-navy text-white" fluid>
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

    <v-container id="contact" class="py-16 bg-light-grad" fluid>
      <v-container>
        <v-row>
          <v-col class="d-flex flex-column justify-center pa-8" cols="12" md="5">
            <h2 class="section-title logo-text text-uppercase mb-4">Contact</h2>
            <p class="text-h5 font-weight-bold mb-4" style="color: #3a506b;">
              光を纏う準備は、<br>できていますか？
            </p>
            <p class="text-body-2 text-grey-darken-2 mb-6 tracking-widest leading-loose">
              サービスに関するご質問や、<br>
              取材のご依頼、提携のご相談など、<br>
              お気軽にお問い合わせください。
            </p>
            <div class="d-flex align-center text-caption text-grey">
              <v-icon class="mr-2" icon="mdi-information-outline" />
              通常2営業日以内にご返信いたします。
            </div>
          </v-col>

          <!-- Contact Form -->
          <v-col cols="12" md="7">
            <v-card class="pa-8 rounded-xl border-0" elevation="10">
              <v-form ref="form">
                <v-row gutter="20">
                  <v-col cols="12" sm="6">
                    <v-text-field
                      class="mb-4"
                      color="primary-blue"
                      hide-details="auto"
                      label="Name"
                      placeholder="お名前"
                      variant="outlined"
                    />
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      class="mb-4"
                      color="primary-blue"
                      hide-details="auto"
                      label="Email"
                      placeholder="メールアドレス"
                      variant="outlined"
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      class="mb-4"
                      color="primary-blue"
                      hide-details="auto"
                      :items="['ご予約について', 'メニューに関するご質問', '取材・その他']"
                      label="Subject"
                      variant="outlined"
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      class="mb-6"
                      color="primary-blue"
                      hide-details="auto"
                      label="Message"
                      placeholder="お問い合わせ内容をご入力ください"
                      rows="4"
                      variant="outlined"
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      block
                      class="grad-btn-lg rounded-pill font-weight-bold"
                      height="60"
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
    { title: 'ホワイトニング', desc: '自信の持てる白い歯へ。痛くないセルフケア', image: new URL('@/assets/images/menu_3.png', import.meta.url).href, comingSoon: true },
    { title: 'シャワー完備', desc: '高級感のあるパウダールームを完備', image: new URL('@/assets/images/facility_1.png', import.meta.url).href },
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
    { name: 'ベーシック 30分', desc: 'まずはお試し', normal: '4,400', vip: '3,300' },
    { name: '集中ケア 45分', desc: 'しっかり美肌効果', normal: '6,600', vip: '4,950' }
  ]
  const whiteningPrices = [
    { name: '初回体験', desc: 'カウンセリング込', normal: '3,500', vip: '2,500' },
    { name: '通常 1セット', desc: '8分×2回照射', normal: '4,900', vip: '3,900' },
    { name: '回数券 5回', desc: '1回あたりお得', normal: '22,000', vip: '18,000' }
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

.price-card
  border-radius: 16px !important
  overflow: hidden
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)
  background: white

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

.price-table
  th
    font-weight: bold !important
    color: #3a506b !important
  td
    border-bottom: 1px solid #f0f0f0
    transition: background 0.2s
  tr:hover td
    background-color: rgba($primary-blue, 0.02)

.text-primary-pink
  color: $primary-pink !important

// モバイル対応：表が横に長くなるので、必要に応じてスクロールさせる
@media (max-width: 600px)
  .price-table
    display: block
    overflow-x: auto
    white-space: nowrap
.v-window
  padding-bottom: 10px
</style>
