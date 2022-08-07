<template>
  <v-row>
    <v-col align="center">
      <v-row>
        <v-col align="center">
          <Header></Header>
        </v-col>
      </v-row>
      <v-row style="margin-top: 30px">
        <v-col align="center">
          <img src="@/assets/mitchandhannah1.jpg" class="home-img">
        </v-col>
      </v-row>
      <v-row style="margin-top: 40px; margin-bottom: 20px">
        <v-col align="center">
          <v-row justify="center">
            <v-col style="border-right: 1px solid dimgray;" cols="12" sm="4">
              <div class="ibarra txt-large">
                OCTOBER 7,<br>2023
              </div>
            </v-col>
            <v-col style="border-left: 1px solid dimgray;" cols="12" sm="4">
              <div class="ibarra txt-large">
                PITTSBURGH,<br>PA
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row style="margin-bottom: 40px;">
        <v-col>
          <v-btn
              @click="rsvp()"
              x-large
              color="grey"
          >
            <div class="ibarra txt-small bold" style="color: white">
              RSVP
            </div>
          </v-btn>
        </v-col>
      </v-row>
      <v-row style="margin-top: 20px;">
        <v-col align="center">
          <div class="ibarra txt-med">
            WEDDING DAY TIMELINE
          </div>
        </v-col>
      </v-row>
      <v-divider width="30%"></v-divider>
      <v-row>
        <v-col>
          <v-timeline>
            <v-timeline-item
                color="grey"
            >
              <template v-slot:opposite>
                <span>
                  <v-row>
                    <v-col>
                      <div class="ibarra txt-small bold">
                        5:00 PM - 5:30 PM
                      </div>
                    </v-col>
                  </v-row>
                </span>
              </template>
              <v-row>
                <v-col align="left" style="max-width: 550px;">
                  <div class="ibarra txt-small">
                    CEREMONY
                  </div>
                  <div class="ibarra txt-small">
                    The Frick Pittsburgh
                  </div>
                  <div class="ibarra txt-small">
                    <a href="https://www.google.com/maps/place/The+Frick/@40.4474811,-79.903945,17z/data=!3m1!4b1!4m5!3m4!1s0x8834ede8b258fb03:0xf7ba8ff6e267bcb2!8m2!3d40.4474811!4d-79.9017563"
                       style="text-decoration: none; color: dimgray" target="_blank">7227 Reynolds Street, Pittsburgh, PA 15208</a>
                  </div>
                  <div class="ibarra txt-x-small" style="margin-top: 8px; font-style: italic">
                    Please note we will be having an unplugged ceremony with a Photo Minute Opportunity - please see Q+A for more information.
                  </div>
                </v-col>
              </v-row>
            </v-timeline-item>
            <v-timeline-item
                color="grey"
            >
              <template v-slot:opposite>
                <span
                  class="ibarra txt-small"
                >
                   <v-row>
                    <v-col align="left">
                      <div class="ibarra txt-small">
                        RECEPTION
                      </div>
                      <div class="ibarra txt-small">
                        The Frick Pittsburgh
                      </div>
                      <div class="ibarra txt-small">
                        <a href="https://www.google.com/maps/place/The+Frick/@40.4474811,-79.903945,17z/data=!3m1!4b1!4m5!3m4!1s0x8834ede8b258fb03:0xf7ba8ff6e267bcb2!8m2!3d40.4474811!4d-79.9017563"
                           style="text-decoration: none; color: dimgray" target="_blank">7227 Reynolds Street, Pittsburgh, PA 15208</a>
                      </div>
                    </v-col>
                  </v-row>
<!--                  <v-row>-->
<!--                    <v-col>-->
<!--                      <div class="ibarra txt-small bold">-->
<!--                        6:45 PM - 10:00 PM-->
<!--                      </div>-->
<!--                    </v-col>-->
<!--                  </v-row>-->
                </span>
              </template>
              <v-row>
                <v-col align="right" style="margin-top: 32px">
                  <div class="ibarra txt-small bold">
                    6:45 PM - 10:00 PM
                  </div>
                </v-col>
              </v-row>
<!--              <v-row>-->
<!--                <v-col align="right">-->
<!--                  <div class="ibarra txt-small">-->
<!--                    RECEPTION-->
<!--                  </div>-->
<!--                  <div class="ibarra txt-small">-->
<!--                    The Frick Pittsburgh-->
<!--                  </div>-->
<!--                  <div class="ibarra txt-small">-->
<!--                    <a href="https://www.google.com/maps/place/The+Frick/@40.4474811,-79.903945,17z/data=!3m1!4b1!4m5!3m4!1s0x8834ede8b258fb03:0xf7ba8ff6e267bcb2!8m2!3d40.4474811!4d-79.9017563"-->
<!--                       style="text-decoration: none; color: dimgray" target="_blank">7227 Reynolds Street, Pittsburgh, PA 15208</a>-->
<!--                  </div>-->
<!--                </v-col>-->
<!--              </v-row>-->
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
      <v-row>
          <v-col>
            <div class="ibarra txt-small">
              <a href="https://twitter.com/search?q=%23gethitched&src=typed_query"
                 style="text-decoration: none; color: dimgray" target="_blank">#GETHITCHED</a>
            </div>
          </v-col>
        </v-row>
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
// import WeddingCard from '@/components/WeddingCard.vue'

  export default {
    name: 'HomeView',

    components: {
      Header,
      Footer
    },

    methods: {
      rsvp() {
        this.$router.push( {name: 'rsvp' })
      }
    }
  }
</script>

<style>
.ibarra {
  font-family: 'Ibarra Real Nova', serif;
  color: dimgray;
}
.home-img {
  width: 90%;
  height: 700px;
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
</style>
