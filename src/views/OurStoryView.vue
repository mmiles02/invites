<template>
  <v-row>
    <v-col align="center">
      <v-row>
        <v-col align="center">
          <Header></Header>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col align="center" style="max-width: 600px">
          <div class="ibarra txt-med justify">
            Mitchell and Hannah met at their high school in 2016.
            Hannah sat in front of Mitchell in their sophomore year history class,
            but didn't start talking until she pied him in the face with whip cream at a post-Turkey Bowl celebration.
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col align="center" style="max-width: 600px">
          <div class="ibarra txt-med justify">
            After graduating high school, they both attended The Pennsylvania State University and experienced college together.
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col align="center" style="max-width: 600px">
          <div class="ibarra txt-med justify">
            Their proposal story is a funny story.
            Mitchell took Hannah out to dinner to celebrate one of their last night's in Pittsburgh before Mitchell moved to Madison, Wisconsin.
            Afterwards, they took a walk to the Point where they accidentally ran into Hannah's friends who were there to take pictures of the proposal.
            They played it off on the fly, and Hannah and Mitchell continued their walk.
            After finding the perfect spot, Mitchell got down on one knee and of course Hannah said yes.
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
export default {
  name: "OurStoryView",
  components: {
    Header,
    Footer
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