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
      <form style="margin-top: 50px;">
        <v-row>
          <v-col align="center">
            <div class="ibarra txt-large">
              Select your name
            </div>
          </v-col>
        </v-row>
        <v-row v-if="loading" justify="center">
          <v-col align="center">
            <v-progress-circular
                :size="50"
                color="#9CAF88"
                indeterminate
            ></v-progress-circular>
          </v-col>
        </v-row>
        <v-row v-else justify="center">
          <v-col align="center" style="max-width: 700px;">
            <v-row v-for="guest in guests" v-bind:key="guest.id">
              <v-col>
                <input class="radio" type="radio" :value="guest.id" :id="guest.id" v-model="selected"/>
                <label :for="guest.id" class="ibarra bold" style="margin-left: 10px;">{{ guest.name }}</label>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col align="center">
            <v-btn class="submit ibarra txt-white bold" color="#9CAF88" @click="submitGuestName">Next</v-btn>
          </v-col>
        </v-row>
      </form>
    </v-col>
  </v-row>
</template>

<script>
import { initializeApp } from 'firebase/app'
import { ref, getDatabase, onValue } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyAxIlavv4dePmQzgrib5NgrZu0mYCOrWo4",
  authDomain: "wedding-website-4a01e.firebaseapp.com",
  projectId: "wedding-website-4a01e",
  storageBucket: "wedding-website-4a01e.appspot.com",
  messagingSenderId: "879310956944",
  appId: "1:879310956944:web:7e6e22a02a934483b76b15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

export default {
  name: "RSVPResultsView",

  data() {
    return {
      guests: [],
      selected: '',
      loading: true
    }
  },

  props: {
    search: String
  },

  mounted() {
    this.getGuests()
  },

  methods: {
    getGuests() {
      const max = 1
      let count = 0
      for (var x = 1; x <= max; x++) {
        const num = x
        const name = ref(db, 'guests/' + x + '/name')
        onValue(name, (snapshot) => {
          const data = snapshot.val()
          if (this.stringContains(data, this.search)) {
            this.guests.push({
              id: num,
              name: data
            })
            count += 1
            this.loading = false
          }
          else {
            count += 1
          }
          if (count === max) {
            if (this.guests.length == 0) {
              this.$router.push({ name: 'rsvp', params: { error: "I'm sorry, but you are not showing up on the guest list. If you think there is an error, please notify the bride or the groom." } })
            }
          }
        })
      }
    },

    stringContains(str, subStr) {
      return str.toUpperCase().includes(subStr.toUpperCase())
    },

    submitGuestName() {
      if (this.selected !== '') {
        this.$router.push({ name: 'rsvp-info', params: { guest_id: this.selected } })
      }
    }
  }
}
</script>

<style scoped>
.radio {
  transform: scale(1.5)
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
  font-size: 40px;
}
.txt-med {
  font-size: 25px;
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
.justify {
  text-align: justify;
  text-justify: inter-word;
}
.txt-white {
  color: white;
}
</style>