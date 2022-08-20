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
                      Day 5 Message
                    </div>
                    <br>
                    <div class="ibarra txt-small" style="padding-left: 15px; padding-right: 15px;">
                      HANNAH! Its day 5. Stay strong today baby. I know it's going to get hard, but I know you are so strong.
                      Be prepared for lots of hugs in T-13 days! Today I'm going to have an easy day.
                      Coding our website and Steelers football should consume most of it. Prepare for many changes on the site!
                      You are literally one day from moving in. It's crazy how time flies. I hope your travel is smooth and easy.
                      Feel free to call me at any point if you get bored in the car. We can play some iMessage games too if you want.
                      I love you Hannah.
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
                      Day 5 Activity
                    </div>
                    <br>
                    <div class="ibarra txt-small" style="padding-left: 15px; padding-right: 15px;">
                      Today's fun activity is a stupid website that I found. I spent like 10 minutes on it.
                      Maybe it's because I'm way too easily amused, but hopefully you can find some enjoyment lol.
                    </div>
                    <br>
                    <div class="ibarra txt-small" style="padding-left: 15px; padding-right: 15px;">
                      <a
                          href="https://thisissand.com/"
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
  name: "Day3View",

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
    goToDog() {
      this.$router.push({ name: 'han-and-chloe'} )
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