<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col align="center">
          <Header></Header>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          Wedding Party
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center">
          <Footer></Footer>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: "WeddingPartyView",
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>