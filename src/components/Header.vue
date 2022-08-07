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
        <v-col align="center" id="tab-holder">
          <router-link to="/" :class="['tabs', currentPath('home') ? 'tab-selected' : '']">Home</router-link>
<!--        </v-col>-->
<!--        <v-col align="center">-->
          <router-link to="/our-story" :class="['tabs', currentPath('our-story') ? 'tab-selected' : '']">Our Story</router-link>
<!--        </v-col>-->
<!--        <v-col align="center">-->
          <router-link to="/photos" :class="['tabs', currentPath('photos') ? 'tab-selected' : '']">Photos</router-link>
<!--        </v-col>-->
<!--        <v-col align="center">-->
          <router-link to="/wedding-party" :class="['tabs', currentPath('wedding-party') ? 'tab-selected' : '']">Wedding Party</router-link>
<!--        </v-col>-->
<!--        <v-col align="center">-->
          <router-link to="/q+a" :class="['tabs', currentPath('q+a') ? 'tab-selected' : '']">Q + A</router-link>
<!--        </v-col>-->
<!--        <v-col align="center">-->
          <router-link to="/travel" :class="['tabs', currentPath('travel') ? 'tab-selected' : '']">Travel</router-link>
<!--        </v-col>-->
<!--        <v-col align="center">-->
          <router-link to="/registry" :class="['tabs', currentPath('registry') ? 'tab-selected' : '']">Registry</router-link>
<!--        </v-col>-->
<!--        <v-col align="center">-->
          <router-link to="/rsvp" :class="['tabs', currentPath('rsvp') ? 'tab-selected' : '']">RSVP</router-link>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "HeaderView",

  data() {
    return {
      selected_tab: 0,
      home_tab: true,
      our_story_tab: false,
      photos_tab: false,
      wedding_party_tab: false,
      qa_tab: false,
      travel_tab: false,
      registry_tab: false,
      rsvp_tab: false
    }
  },

  methods: {
    getDaysToGo() {
      let currentDate = new Date()
      let weddingDate = new Date('10/8/2023')

      let difference = weddingDate.getTime() - currentDate.getTime()

      return Math.ceil(difference / (1000 * 3600 * 24))
    },
    log() {
      console.log("hi")
      console.log(this.$router)
    },
    currentPath(route) {
      return this.$router.currentRoute.name === route
    },
    resetTabs() {
      this.home_tab = false
      this.our_story_tab = false
      this.photos_tab = false
      this.wedding_party_tab = false
      this.qa_tab = false
      this.travel_tab = false
      this.registry_tab = false
      this.rsvp_tab = false
    }
  }
}
</script>

<style scoped>
.ibarra {
  font-family: 'Ibarra Real Nova', serif;
  color: dimgray;
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
.tab-selected{
  text-decoration: underline 3px dimgrey;
  text-underline-offset: .25em;
}
.tabs:hover {
  text-decoration: underline 3px darkgray;
  text-underline-offset: .25em;
}
.underline {
  text-decoration: underline 3px;
  text-underline-offset: .25em;
}
</style>