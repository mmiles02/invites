<template>
  <v-row style="margin-top: 30px;">
    <v-col align="center">
      <v-row>
        <v-col align="center">
          <div class="ibarra txt-large">
            RSVP
          </div>
        </v-col>
      </v-row>
      <form style="margin-top: 50px;" v-if="!submit">
        <v-row justify="center">
          <v-col align="center">
            <v-tabs
                center-active
                color="#9CAF88"
                grow
                show-arrows
                v-model="tab"
            >
              <v-tab v-for="guest in guests" v-bind:key="guest.id">
                {{ guest.name }}
              </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
              <v-tab-item
                  v-for="guest in guests" v-bind:key="guest.id"
                  style="margin-top: 30px;"
              >
                <v-row style="max-width: 700px; margin-right: 30px; margin-left: 30px;">
                  <v-col align="left">
                    <v-row>
                      <v-col>
                        <div class="ibarra txt-small bold">
                          Attending? <i style="color: red">{{ attending_error[guest.id-1] }}</i>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-row>
                          <v-col>
                            <input class="radio" type="radio" id="yes" value="yes" v-model="form.attending[guest.id-1]"/>
                            <label for="yes" class="ibarra bold" style="margin-left: 10px;">Yes</label>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col>
                            <input class="radio" type="radio" id="no" value="no" v-model="form.attending[guest.id-1]"/>
                            <label for="no" class="ibarra bold" style="margin-left: 10px;"> No</label>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                    <v-row style="margin-top: 50px;" v-if="form.attending[guest.id-1]==='yes'">
                      <v-col>
                        <div class="ibarra txt-small bold">
                          Meal Selection <i style="color: red">{{ meal_selection_error[guest.id-1] }}</i>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row v-if="form.attending[guest.id-1]==='yes'">
                      <v-col>
                        <v-row>
                          <v-col>
                            <input class="radio" type="radio" id="pizza" value="pizza" v-model="form.meal_selection[guest.id-1]"/>
                            <label for="pizza" class="ibarra bold" style="margin-left: 10px;"> Pizza</label>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col>
                            <input class="radio" type="radio" id="cake" value="cake" v-model="form.meal_selection[guest.id-1]"/>
                            <label for="cake" class="ibarra bold" style="margin-left: 10px;"> Cake</label>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                    <v-row style="margin-top: 50px;" v-if="form.attending[guest.id-1]==='yes'">
                      <v-col>
                        <div class="ibarra txt-small bold">
                          Dietary Restrictions? (optional)
                        </div>
                      </v-col>
                    </v-row>
                    <v-row v-if="form.attending[guest.id-1]==='yes'">
                      <v-col>
                        <v-textarea
                            v-model="form.dietary_restrictions[guest.id-1]"
                            counter
                            outlined
                            maxlength="200"
                            style="max-width: 700px;"
                            class="ibarra"
                        >
                        </v-textarea>
                      </v-col>
                    </v-row>
                    <v-row style="margin-top: 50px;">
                      <v-col>
                        <div class="ibarra txt-small bold">
                          Other Comments for the Couple? (optional)
                        </div>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-textarea
                            v-model="form.comments[guest.id-1]"
                            counter
                            outlined
                            maxlength="200"
                            style="max-width: 700px;"
                            class="ibarra"
                        >
                        </v-textarea>
                      </v-col>
                    </v-row>
                    <v-row v-if="error != ''" justify="center">
                      <v-col align="center">
                        <div class="ibarra txt-small bold">
                          <i style="color: red">{{ error }}</i>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row style="margin-top: 50px;">
                      <v-col align="left" v-if="tab !== 0">
                        <v-btn
                            @click="tab -= 1"
                            color="grey"
                            class="submit"
                        >
                          <div class="ibarra bold" style="color: white">
                            Previous
                          </div>
                        </v-btn>
                      </v-col>
                      <v-col align="right" v-if="tab !== guests.length-1">
                        <v-btn
                            @click="tab += 1"
                            color="grey"
                            class="submit"
                        >
                          <div class="ibarra bold" style="color: white">
                            Next
                          </div>
                        </v-btn>
                      </v-col>
                      <v-col align="right" v-if="tab === guests.length-1">
                        <v-btn class="submit ibarra txt-white bold" color="#9CAF88" @click="showEmail">Submit</v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-tab-item>
            </v-tabs-items>
          </v-col>
        </v-row>
      </form>
      <v-row v-else style="margin-top: 100px;">
        <v-col>
          <v-progress-circular
              :value="submit_progress"
              :size="200"
              :width="20"
              color="#9CAF88"
          >
            <v-icon
              color="#9CAF88"
              :size="200"
              v-if="submit_progress === 100"
            >
              mdi-check-circle</v-icon>
          </v-progress-circular>
        </v-col>
      </v-row>
      <v-dialog
          v-model="show_email"
          width="500"
      >
        <v-card>
          <v-card-title>
            Enter email for reminders!
          </v-card-title>
          <v-row style="padding-right: 20px; padding-left: 20px;">
            <v-col>
              <v-text-field
                label="Email"
                v-model="email"
                ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col align="center">
              <div class="ibarra txt-small"><i style="color: red">{{ email_error }}</i></div>
            </v-col>
          </v-row>
          <v-row justify="center" style="padding-bottom: 30px;">
            <v-col align="center">
              <v-btn class="submit ibarra txt-white bold" color="#9CAF88" @click="submitForm">Submit</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import { initializeApp } from 'firebase/app'
import { ref, getDatabase, onValue, set } from 'firebase/database'

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
  name: "RSVPInfo",

  data() {
    return {
      guests: [],
      step: 1,
      tab: null,
      form: {
        attending: [],
        meal_selection: [],
        dietary_restrictions: [],
        comments: [],
      },
      submit: false,
      submit_progress: 0,
      error: '',
      attending_error: [],
      meal_selection_error: [],
      show_email: false,
      email: '',
      email_error: ''
    }
  },

  props: {
    guest_id: Number
  },

  mounted() {
    this.getGuests()
  },

  methods: {
    getGuests() {
      const count = ref(db, 'guests/' + this.guest_id + '/number')
      onValue(count, (snapshot) => {
        const data = snapshot.val()
        for (let x = 1; x <= data; x++) {
          const num = x
          const name = ref(db, 'guests/' + this.guest_id + '/extras/' + x + '/name')
          onValue(name, (snapshot) => {
            const data2 = snapshot.val()
            this.guests.push({
              id: num,
              name: data2
            })
          })
        }
      })
    },
    showEmail() {
      let err = false
      for (let y = 0; y < this.guests.length; y++) {
        this.attending_error[y] = ''
        this.meal_selection_error[y] = ''
        if (this.form.attending[y] === undefined) {
          this.attending_error[y] = '*Required'
          err = true
        } else if (this.form.attending[y] === 'no') {
          this.form.meal_selection[y] = 'N/A'
        }
        if (this.form.meal_selection[y] === undefined) {
          this.meal_selection_error[y] = '*Required'
          err = true
        }
        if (this.form.dietary_restrictions[y] === undefined) {
          this.form.dietary_restrictions[y] = ''
        }
        if (this.form.comments[y] === undefined) {
          this.form.comments[y] = ''
        }
      }
      if (err) {
        this.error = 'There are errors that need to be corrected.'
        let temp = this.attending_error
        this.attending_error = []
        this.attending_error = temp
        temp = this.meal_selection_error
        this.meal_selection_error = []
        this.meal_selection_error = temp
      } else {
        this.error = ''
        this.show_email = true
      }
    },
    submitForm() {
      if (this.email === '') {
        this.email_error = 'Email required.'
        return
      }
      let re = /\S+@\S+\.\S+/
      if (!re.test(this.email)) {
        this.email_error = 'Must be an email.'
        return
      }
      this.submit = true
      this.show_email = false
      for (let x = 0; x < this.guests.length; x++) {
        set(ref(db, 'guests/' + this.guest_id + '/extras/' + (x + 1)), {
          name: this.guests[x].name,
          attending: this.form.attending[x],
          meal_selection: this.form.meal_selection[x],
          dietary_restrictions: this.form.dietary_restrictions[x],
          comments: this.form.comments[x]
        })
        setTimeout(() => {
          this.submit_progress = ((x + 1) / this.guests.length) * 100
          if (this.submit_progress === 100) {
            setTimeout(() => {
              this.$router.push({ name: 'home' })
            }, 2000)
          }
        }, 500)
      }
      set(ref(db, 'guests/' + this.guest_id + '/email'), this.email)
    }
  }
}
</script>

<style scoped>
.radio {
  transform: scale(1.5)
}
.float-bottom {
  position: absolute;
  bottom: 0px;
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