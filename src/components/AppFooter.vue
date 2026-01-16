<template>
  <v-footer class="bg-navy pt-16 pb-8">
    <v-container>
      <v-row justify="center" align="center" class="text-center">
        <v-col cols="12">
          <div class="logo-text text-h4 text-white mb-2 tracking-widest">Eos</div>
          <div class="text-caption text-grey-lighten-1 mb-8 tracking-widest">TOTAL BEAUTY SALON</div>

          <div class="mb-10">
            <v-btn
              v-for="icon in ['mdi-instagram', 'mdi-twitter', 'mdi-facebook', 'mdi-line']"
              :key="icon"
              class="mx-2 social-icon"
              color="white"
              :icon="icon"
              variant="text"
            />
          </div>

          <div class="mb-10 text-caption d-flex justify-center flex-wrap">
            <a href="#menu" class="footer-link mx-4">MENU</a>
            <a href="#price" class="footer-link mx-4">PRICE</a>
            <a href="#access" class="footer-link mx-4">ACCESS</a>
            <a href="#" class="footer-link mx-4">PRIVACY POLICY</a>
          </div>

          <v-divider class="mb-8 opacity-20" color="white"></v-divider>

          <p class="text-caption text-grey-lighten-1 tracking-widest">
            &copy; 2026 Eos Total Beauty. All Rights Reserved.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped lang="sass">
// 先ほどのリファクタリング変数を活用
$primary-pink: #f06595
$navy: #1a2a44

.bg-navy
  background-color: $navy
  border-top: 1px solid rgba(255, 255, 255, 0.05)

.logo-text
  font-family: 'Playfair Display', serif
  letter-spacing: 0.2em

.social-icon
  transition: transform 0.3s ease, color 0.3s ease
  &:hover
    color: $primary-pink !important
    transform: translateY(-3px)

.footer-link
  color: rgba(255, 255, 255, 0.6)
  text-decoration: none
  letter-spacing: 0.1em
  transition: color 0.3s ease
  &:hover
    color: white

.opacity-20
  opacity: 0.2

.tracking-widest
  letter-spacing: 0.2em
</style>
