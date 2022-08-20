<template>
  <v-row style="margin-top: 30px;">
    <v-col>
      <v-row>
        <v-col align="center">
          <div class="ibarra txt-large">
            RSVP
          </div>
        </v-col>
      </v-row>
      <form style="margin-top: 50px; margin-left: 30px; margin-right: 30px;" @submit="submitGuestName">
        <v-row justify="center">
          <v-col align="center" style="max-width: 700px;">
            <v-text-field
                label="Enter guest/party name"
                v-model="name"
                class="ibarra"
            ></v-text-field>
            <div class="error--text">{{ error }}</div>
          </v-col>
        </v-row>
        <v-row>
          <v-col align="center">
            <v-btn class="submit ibarra txt-white bold" color="#9CAF88" @click="submitGuestName">Submit</v-btn>
          </v-col>
        </v-row>
      </form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "RSVPView",

  data() {
    return {
      name: ''
    }
  },

  props: {
    error: {
      type: String,
      required: false
    }
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
.ibarra {
  font-family: 'Ibarra Real Nova', serif;
  color: dimgray;
}
.home-img {
  width: 90%;
  height: auto;
  object-fit: cover;
  object-position: 43% 57%
}
.location-cards {
  width: 80%;
  margin-bottom: 40px;
}
.txt-large {
  font-size: 50px;
}
.txt-med {
  font-size: 30px;
}
.txt-small {
  font-size: 20px;
}
.txt-x-small {
  font-size: 18px;
}
.bold {
  font-weight: bold;
}
.txt-white {
  color: white;
}
</style>