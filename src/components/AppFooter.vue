<template>
  <v-footer class="bg-navy pt-16 pb-8">
    <v-container>
      <v-row align="center" class="text-center" justify="center">
        <v-col cols="12">
          <div class="logo-text text-h4 mb-2 tracking-widest text-primary-gold">Eos</div>
          <div class="text-caption text-grey-lighten-1 mb-10 tracking-widest">
            HIGH-END SELF CONDITIONING
          </div>

          <div class="mb-10">
            <v-btn
              v-for="sns in snsInfo"
              :key="sns.name"
              class="mx-3 social-icon"
              color="primary-gold"
              :href="sns.url"
              :icon="sns.icon"
              variant="text"
            />
          </div>

          <div class="text-caption d-flex justify-center flex-wrap">
            <a
              v-for="about in abouts"
              :key="about?.name"
              class="footer-link mx-6"
              :href="about?.url"
            >
              {{ about?.name }}
            </a>
          </div>

          <v-divider class="mb-8 footer-divider" />

          <p class="text-caption text-grey-darken-1 tracking-widest uppercase">
            &copy; 2026 Eos Luxury Conditioning. All Rights Reserved.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
  const snsInfo = [
    { name: 'Instagram', icon: 'mdi-instagram', url: 'https://www.instagram.com/eos_hiratsuka' },
  ]
  const abouts = [
    { name: 'PRIVACY POLICY', url: '#' },
    { name: 'TERMS OF SERVICE', url: '#' },,
  ]
</script>

<style scoped lang="sass">
// 全体で定義したラグジュアリー変数を適用
$navy: #0f172a
$primary-gold: #c5a059

.bg-navy
  background-color: $navy !important
  border-top: 1px solid rgba($primary-gold, 0.2) // わずかにゴールドのラインを上部に入れる

.logo-text
  font-family: 'Playfair Display', serif
  letter-spacing: 0.3em
  // ゴールドの質感を文字にも
  background: linear-gradient(to right, #ffffff, $primary-gold)
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent

.social-icon
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)
  &:hover
    color: white !important
    transform: translateY(-5px) scale(1.1)
    filter: drop-shadow(0 0 8px rgba($primary-gold, 0.5))

.footer-link
  color: rgba(255, 255, 255, 0.5)
  text-decoration: none
  font-weight: 500
  letter-spacing: 0.2em
  font-size: 0.7rem
  transition: all 0.3s ease
  &:hover
    color: $primary-gold
    letter-spacing: 0.25em // ホバーで少し広がる演出

.footer-divider
  border-color: rgba($primary-gold, 0.1) !important
  max-width: 600px
  margin: 0 auto

.tracking-widest
  letter-spacing: 0.3em

button
  color: aliceblue
</style>
