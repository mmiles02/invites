<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col align="center">
          <Header></Header>
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
        <v-row justify="center">
          <v-col align="center" style="max-width: 700px;">
            <v-row v-for="guest in guests" v-bind:key="guest.id">
              <v-col>
                <input type="radio" :value="guest.name" :id="guest.id" v-model="selected"/>
                <label :for="guest.id"> {{ guest.name }}</label>
              </v-col>
            </v-row>
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

// import firebase from '@/firebaseInit.js'
import { initializeApp } from 'firebase/app'
import { ref, getDatabase, onValue } from 'firebase/database'

// Import the functions you need from the SDKs you need
//import firebase from "firebase";

// Your web app's Firebase configuration
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
      selected: ''
    }
  },

  props: {
    search: String
  },

  mounted() {
    this.getGuests()
  },

  components: {
    Header,
    Footer
  },

  methods: {
    getGuests() {
      for (var x = 1; x <= 1; x++) {
        const num = x
        const name = ref(db, 'guests/' + x + '/name')
        onValue(name, (snapshot) => {
          const data = snapshot.val()
          if (this.stringContains(data, this.search)) {
            console.log(x)
            this.guests.push({
              id: num,
              name: data
            })
          }
        })
      }
    },

    stringContains(str, subStr) {
      return str.toUpperCase().includes(subStr.toUpperCase())
    }
  }
}
</script>

<style scoped>
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
</style>