<template>
  <v-footer class="bg-navy py-10">
    <v-container class="text-center">
      <div class="mb-6">
        <v-btn
          v-for="icon in ['mdi-twitter', 'mdi-instagram', 'mdi-facebook', 'mdi-whatsapp']"
          :key="icon"
          class="mx-2"
          color="white"
          :icon="icon"
          variant="text"
        />
      </div>
      <p class="text-caption text-grey-lighten-1">&copy; 2024 Eos Total Beauty. All Rights Reserved.</p>
    </v-container>
  </v-footer>
</template>

<style scoped lang="sass">
.bg-navy
  background-color: #1a2a44
</style>
