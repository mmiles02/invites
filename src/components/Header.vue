<template>
  <v-row>
    <v-col>
      <v-spacer style="height: 100px"/>
      <v-row>
        <v-col align="center" class="ibarra txt-large">
          HANNAH & MITCHELL
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center" class="ibarra txt-small">
          <div>
            OCTOBER 8, 2023 • PITTSBURGH, PA
          </div>
          <div>
            {{ getDaysToGo() }} DAYS TO GO!
          </div>
        </v-col>
      </v-row>
      <v-spacer style="height: 50px"/>
      <v-row style="margin-left: 220px;margin-right:220px;">
        <v-col align="center">
          <router-link to="/" class="tabs">Home</router-link>
<!--        </v-col>-->
<!--        <v-col align="center">-->
          <router-link to="/our-story" class="tabs">Our Story</router-link>
<!--        </v-col>-->
<!--        <v-col align="center">-->
          <router-link to="/photos" class="tabs">Photos</router-link>
<!--        </v-col>-->
<!--        <v-col align="center">-->
          <router-link to="/wedding-party" class="tabs">Wedding Party</router-link>
<!--        </v-col>-->
<!--        <v-col align="center">-->
          <router-link to="/q+a" class="tabs">Q + A</router-link>
<!--        </v-col>-->
<!--        <v-col align="center">-->
          <router-link to="/travel" class="tabs">Travel</router-link>
<!--        </v-col>-->
<!--        <v-col align="center">-->
          <router-link to="/registry" class="tabs">Registry</router-link>
<!--        </v-col>-->
<!--        <v-col align="center">-->
          <router-link to="/rsvp" class="tabs">RSVP</router-link>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "HeaderView",

  methods: {
    getDaysToGo() {
      let currentDate = new Date()
      let weddingDate = new Date('10/8/2023')

      let difference = weddingDate.getTime() - currentDate.getTime()

      return Math.ceil(difference / (1000 * 3600 * 24))
    }
  }
}
</script>

<style scoped>
.ibarra {
  font-family: 'Ibarra Real Nova', serif;
}
.txt-small {
  font-size: 20px;
}
.txt-large {
  font-size: 56px;
}
.tabs {
  text-decoration: none;
  color: dimgray;
  margin-left: 30px;
  margin-right: 30px;
}
.tabs:hover {
  background-color: darkgray;
}
</style>