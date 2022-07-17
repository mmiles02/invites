<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col align="center">
          <div class="cursive large">
            Hannah and Mitchell Miles
          </div>
          <img src="../assets/hannahandmitch.png" style="width: 500px">
        </v-col>
      </v-row>
      <v-row>
        <v-col align="right">
          <div class="cursive medium">
            Enter code found on invite:
          </div>
        </v-col>
        <v-col align="left">
          <v-text-field
              v-model="code"
              dense
              filled
              rounded
              :append-icon=" code != '' ? 'mdi-arrow-right' : undefined"
              @click:append="enter"
              @keyup.enter="enter"
              style="width: 250px"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "LockView",

  data() {
    return {
      code: ''
    }
  },

  methods: {
    enter() {
      if (this.code === 'XCF') {
        this.$router.push({ name: 'home' })
      }
    }
  }
}
</script>

<style scoped>

</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

.cursive {
  font-family: 'Dancing Script', cursive;
}

.cursive.large {
  font-family: 'Dancing Script', cursive;
  font-size: 50pt;
}

.cursive.medium {
  font-family: 'Dancing Script', cursive;
  font-size: 20pt;
}

.v-input__icon--append .v-icon {
  color: royalblue;
}
</style>