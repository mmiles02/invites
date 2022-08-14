<template>
  <v-row>
    <v-col>
      <v-row v-if="isMobile">
        <v-col align="left">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-col>
      </v-row>
      <v-navigation-drawer
          v-model="drawer"
          absolute
          bottom
          temporary
        >
        <v-list
          nav
          dense
          >
          <v-list-item-group
            v-model="group"
            >
            <router-link to="/" :class="['mobile-tabs', currentPath('photos') ? 'mobile-tab-selected' : '']">
              <v-list-item>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>
            </router-link>
            <router-link to="/our-story" :class="['mobile-tabs', currentPath('photos') ? 'mobile-tab-selected' : '']">
              <v-list-item>
                <v-list-item-title>Our Story</v-list-item-title>
              </v-list-item>
            </router-link>
            <router-link to="/photos" :class="['mobile-tabs', currentPath('photos') ? 'mobile-tab-selected' : '']">
              <v-list-item>
                <v-list-item-title>Photos</v-list-item-title>
              </v-list-item>
            </router-link>
            <router-link to="/wedding-party" :class="['mobile-tabs', currentPath('wedding-party') ? 'mobile-tab-selected' : '']">
              <v-list-item>
                <v-list-item-title>Wedding Party</v-list-item-title>
              </v-list-item>
            </router-link>
            <router-link to="/q+a" :class="['mobile-tabs', currentPath('q+a') ? 'mobile-tab-selected' : '']">
              <v-list-item>
                <v-list-item-title>Q + A</v-list-item-title>
              </v-list-item>
            </router-link>
            <router-link to="/travel" :class="['mobile-tabs', currentPath('travel') ? 'mobile-tab-selected' : '']">
              <v-list-item>
                <v-list-item-title>Travel</v-list-item-title>
              </v-list-item>
            </router-link>
            <router-link to="/registry" :class="['mobile-tabs', currentPath('registry') ? 'mobile-tab-selected' : '']">
              <v-list-item>
                <v-list-item-title>Registry</v-list-item-title>
              </v-list-item>
            </router-link>
            <router-link to="/rsvp" :class="['mobile-tabs', currentPath('rsvp') ? 'mobile-tab-selected' : '']">
              <v-list-item>
                <v-list-item-title>RSVP</v-list-item-title>
              </v-list-item>
            </router-link>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
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
      <v-row v-if="!isMobile" style="margin-left: 220px;margin-right:220px;">
        <v-col align="center" id="tab-holder">
          <router-link to="/" :class="['tabs', currentPath('home') ? 'tab-selected' : '']">Home</router-link>
          <router-link to="/our-story" :class="['tabs', currentPath('our-story') ? 'tab-selected' : '']">Our Story</router-link>
          <router-link to="/photos" :class="['tabs', currentPath('photos') ? 'tab-selected' : '']">Photos</router-link>
          <router-link to="/wedding-party" :class="['tabs', currentPath('wedding-party') ? 'tab-selected' : '']">Wedding Party</router-link>
          <router-link to="/q+a" :class="['tabs', currentPath('q+a') ? 'tab-selected' : '']">Q + A</router-link>
          <router-link to="/travel" :class="['tabs', currentPath('travel') ? 'tab-selected' : '']">Travel</router-link>
          <router-link to="/registry" :class="['tabs', currentPath('registry') ? 'tab-selected' : '']">Registry</router-link>
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
      rsvp_tab: false,
      drawer: false,
      group: null
    }
  },

  watch: {
    group() {
      this.drawer = false
    }
  },

  computed: {
    /**
     * Returns whether a device is mobile
     */
    isMobile() {
      return window.innerWidth <= 576
    }
  },

  methods: {
    getDaysToGo() {
      let currentDate = new Date()
      let weddingDate = new Date('10/8/2023')

      let difference = weddingDate.getTime() - currentDate.getTime()

      return Math.ceil(difference / (1000 * 3600 * 24))
    },
    currentPath(route) {
      return this.$router.currentRoute.name === route
    },
    navigate(path) {
      this.$router.push({name: path})
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
.tab-selected {
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
.mobile-tabs {
  text-decoration: none;
  color: dimgray;
}
.mobile-tab-selected {
  color: #9CAF88;
}
</style>