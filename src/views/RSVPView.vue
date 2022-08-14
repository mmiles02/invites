<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col align="center">
          <Header></Header>
        </v-col>
      </v-row>
      <form style="margin-top: 50px;" @submit="submitGuestName">
        <v-row justify="center">
          <v-col align="center" style="max-width: 700px;">
            <v-text-field
                label="Enter guest name"
                v-model="name"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col align="center">
            <v-btn class="submit" color="#9CAF88" @click="submitGuestName">Submit</v-btn>
          </v-col>
        </v-row>
      </form>
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
  name: "RSVPView",

  data() {
    return {
      name: ''
    }
  },

  components: {
    Header,
    Footer
  },
  methods: {
    submitGuestName() {
      if (this.name !== '') {
        this.$router.push({ name: 'rsvp-results', params: { search: this.name } })
      }
    }
  }
}
</script>

<style scoped>
.submit {
  color: white;
}
</style>