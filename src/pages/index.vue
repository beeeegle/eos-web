<template>
  <v-app>
    <v-app-bar flat class="glass-effect" color="rgba(255, 255, 255, 0.8)">
      <v-container class="d-flex align-center">
        <v-toolbar-title class="font-weight-bold logo-text">Eos</v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-down">
          <v-btn variant="text">CONCEPT</v-btn>
          <v-btn variant="text">MENU</v-btn>
          <v-btn variant="text">PRICE</v-btn>
          <v-btn variant="text">ACCESS</v-btn>
        </div>
        <v-btn class="grad-btn ml-4" elevation="2">RESERVE</v-btn>
      </v-container>
    </v-app-bar>

    <v-main>
      <section class="hero-section d-flex align-center justify-center">
        <div class="text-center hero-content">
          <h2 class="text-h6 text-uppercase mb-2 tracking-widest">Total Beauty Salon</h2>
          <h1 class="text-h2 font-weight-thin mb-6 logo-text">Eos</h1>
          <p class="text-subtitle-1 mb-10">女神（Eos）が目覚める、至福の光。</p>
          <v-btn size="large" class="grad-btn-lg" rounded="pill">体験予約はこちら</v-btn>
        </div>
      </section>

      <v-container class="py-16 text-center">
        <h2 class="section-title">CONCEPT</h2>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <p class="text-body-1 leading-loose">
              Eosは、光と水、そして癒やしをテーマにした総合美容サロンです。<br>
              24時間忙しく活躍する女性たちへ、本来の輝きを取り戻すための特別な空間を提供します。
            </p>
          </v-col>
        </v-row>
      </v-container>

      <section class="bg-light-grad py-16">
        <v-container>
          <h2 class="section-title text-center mb-10">MENU & FACILITY</h2>
          <v-row>
            <v-col v-for="item in menuItems" :key="item.title" cols="12" sm="6" md="3">
              <v-card class="menu-card" hover>
                <v-img :src="item.image" height="200" cover>
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

      <v-footer class="bg-navy py-10">
        <v-container class="text-center">
          <div class="mb-6">
            <v-btn v-for="icon in ['mdi-twitter', 'mdi-instagram', 'mdi-facebook', 'mdi-whatsapp']" 
                   :key="icon" :icon="icon" variant="text" color="white" class="mx-2"></v-btn>
          </div>
          <p class="text-caption text-grey-lighten-1">&copy; 2024 Eos Total Beauty. All Rights Reserved.</p>
        </v-container>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script setup>
const menuItems = [
  { title: '日焼けマシン', desc: '最新のタンニングマシンで健康的な小麦肌へ', image: 'https://via.placeholder.com/400x300/3a506b/ffffff' },
  { title: 'コラーゲンマシン', desc: '全身光エステで潤いとハリをチャージ', image: 'https://via.placeholder.com/400x300/ff99ac/ffffff' },
  { title: 'ホワイトニング', desc: '自信の持てる白い歯へ。痛くないセルフケア', image: 'https://via.placeholder.com/400x300/ffffff/000000', comingSoon: true },
  { title: 'シャワー完備', desc: '高級感のあるパウダールームを完備', image: 'https://via.placeholder.com/400x300/8d99ae/ffffff' }
]
</script>

<style scoped>
/* フォント設定（適宜読み込みが必要） */
.logo-text {
  font-family: 'Playfair Display', serif;
  letter-spacing: 0.1em;
}

/* グラデーション背景 */
.hero-section {
  height: 80vh;
  background: linear-gradient(135deg, #e3f2fd 0%, #fce4ec 100%);
  position: relative;
  overflow: hidden;
}

.bg-light-grad {
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
}

/* セクションタイトル */
.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  letter-spacing: 0.3em;
  margin-bottom: 2rem;
  color: #3a506b;
}

/* ボタン */
.grad-btn {
  background: linear-gradient(45deg, #5c7cfa, #f06595) !important;
  color: white !important;
  font-weight: bold;
}

.grad-btn-lg {
  background: linear-gradient(45deg, #5c7cfa, #f06595) !important;
  color: white !important;
  padding: 0 40px !important;
  letter-spacing: 0.1em;
}

/* カード & エフェクト */
.menu-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
}
.menu-card:hover {
  transform: translateY(-5px);
}

.coming-soon-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(4px);
  color: #f06595;
  font-weight: bold;
  font-size: 1.2rem;
}

.bg-navy {
  background-color: #1a2a44;
}

.tracking-widest {
  letter-spacing: 0.5em;
}
</style>