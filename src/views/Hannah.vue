<template>
  <v-row align="center" justify="center">
    <v-col align="center" justify="center">


      <v-row v-if="next && !locked" class="banner" align="center">
        <v-col justify="center" cols="12" sm="1">
          <img src="@/assets/ring.png" style="width: 50px; padding-top: 20px;" @click="goHome">
        </v-col>
        <v-col cols="12" sm="3" justify="left">
          <div class="ibarra txt-large" style="padding-top: 10px; color: white">
            Dear Hannah,
          </div>
        </v-col>
      </v-row>


      <v-row v-if="locked" style="padding: 30px">
        <v-col align="center">
          <v-row>
            <v-col>
              <v-text-field
                  style="max-width: 500px;"
                  v-model="password"
                  label="Password"
                  outlined
                  type="password"
                  @keydown.enter="validatePassword"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn x-large color="#9CAF88" @click="validatePassword">Submit</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>


      <v-row v-if="!locked" align="center" justify="center" style="padding: 30px">
        <v-col align="center" justify="center">



          <v-row v-if="!next">
            <v-col>
              <div class="ibarra bold red white--text">
                {{ getDaysToGo() }} DAYS UNTIL WE SEE EACH OTHER IN PERSON AGAIN!
              </div>
            </v-col>
          </v-row>

          <v-row v-if="!next">
            <v-col>
              <div class="ibarra txt-large">
                Dear Hannah,
              </div>
            </v-col>
          </v-row>

          <v-row v-if="next" align="center" justify="center">
            <v-col style="max-width: 1100px" align="center" justify="center">
              <v-card>
                <v-row align="center" justify="center">
                  <v-col align="center" justify="center">
                    <div class="ibarra txt-x-large" style="color: red">
                      {{ getDaysToGo() }}
                    </div>
                  </v-col>
                  <v-col>
                    <div class="ibarra txt-large">
                      DAYS UNTIL WE SEE EACH OTHER IN PERSON AGAIN!
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>

          <v-row v-if="!next" align="center" justify="center">
            <v-col style="max-width: 700px;" align="center" justify="center">
              <div class="ibarra txt-med justify">
                Welcome to 9/10ish months of absolute fun. Every day, you will be greeted with the opportunity to do something fun.
                Whether that is reading something, clicking on something, or doing something, every day until we live together again will contain a new and exciting activity for you to do.
                Today is day 1, so nothing super involved, but we will slowly ramp up until we get crazy.
              </div>
              <v-spacer style="height: 30px"></v-spacer>
              <div class="ibarra txt-med justify">
                I love you so much Hannah Flanders (soon to be Miles (not soon enough lol)). I miss you so damn much already and I cannot wait til I visit you.
                Your fun activity for today was finding this page lol (but if you're reading this, you already solved it).
                I promise there wont be a lot of puzzles lol, but I wanted to start with one since you figured out yesterdays way too fast.
              </div>
              <v-spacer style="height: 30px"></v-spacer>
              <div class="ibarra txt-med justify">
                Also, the message at the top updates daily, so if you ever need a reminder of how long we have til we see each other again, feel free to visit this page.
              </div>
            </v-col>
          </v-row>

          <v-row v-if="next" style="max-width: 1100px; margin-top: 50px;">
            <v-col>
              <v-card>
                <v-row style="padding: 10px;">
                  <v-col class="justify">
                    <div class="ibarra bold txt-med" style="padding-left: 15px; padding-right: 15px;">
                      Day 2 Message
                    </div>
                    <br>
                    <div class="ibarra txt-small" style="padding-left: 15px; padding-right: 15px;">
                      Welcome my dear Hannah Flanders to day 2 of your journey.
                      You might have pulled off one of the best trades in history today.
                      Getting to see a baby and also getting your haircut was a brilliant move on your part.
                      And add in a dog for good effect.
                      I hope that you had an absolutely fabulous day with Tinsley and I hope you're in love with your haircut.
                      When you are reading this, I will probably be in Milwaukee attempting to eat an absurd number of hot dogs, so wish me luck lol.
                      I love you so much baby girl and I already miss you a ton.
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col>
              <v-card>
                <v-row style="padding: 10px;">
                  <v-col class="justify">
                    <div class="ibarra bold txt-med" style="padding-left: 15px; padding-right: 15px;">
                      Day 2 Activity
                    </div>
                    <br>
                    <div class="ibarra txt-small" style="padding-left: 15px; padding-right: 15px;">
                      Today, you have something fun to go check out!
                      Click the link below to head to a super personalized playlist.
                      Find the hidden message and feel free to listen to any of the songs!
                    </div>
                    <br>
                    <div class="ibarra txt-small" style="padding-left: 15px; padding-right: 15px;">
                      <a
                          href="https://open.spotify.com/playlist/5R6WvbVHMtPsaY1e5uWqs7?si=vewQ8_jNQViGWTiQQbMBFA"
                          style="text-decoration: none" target="_blank"
                      >
                        Link</a>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>


        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "HannahView",

  data() {
    return {
      locked: true,
      password: '',
      next: false
    }
  },

  mounted() {
    this.next = this.nextDay()
  },

  methods: {
    getDaysToGo() {
      let currentDate = new Date()
      let weddingDate = new Date('9/2/2022')

      let difference = weddingDate.getTime() - currentDate.getTime()

      return Math.ceil(difference / (1000 * 3600 * 24))
    },
    validatePassword() {
      if (this.password === 'cathrYn') {
        this.locked = false
      } else {
        this.password = ''
      }
    },
    nextDay() {
      let startTime = '18:00:00'

      let currentDate = new Date()

      let startDate = new Date(currentDate.getTime())
      startDate.setHours(startTime.split(":")[0])
      startDate.setMinutes(startTime.split(":")[1])
      startDate.setSeconds(startTime.split(":")[2])
      startDate.setDate(17)

      return startDate < currentDate
    },
    goHome() {
      this.$router.push({ name: 'home' })
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
.txt-x-large {
  font-size: 100px;
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
.justify {
  text-align: justify;
  text-justify: inter-word;
}
.circle {
  width: 500px;
  height: 500px;
  line-height: 500px;
  border-radius: 50%;
  font-size: 50px;
  color: #fff;
  text-align: center;
  background: #000
}
.banner {
  background-color: #9CAF88;
  height: 100px;
}
img:hover {
  cursor: pointer;
}
</style>