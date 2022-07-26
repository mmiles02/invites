<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col align="center">
          <Header></Header>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          Home
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>


<script>
import Header from '@/components/Header.vue'

  export default {
    name: 'HomeView',

    components: {
      Header
    }
  }
</script>

<style>
.ibarra {
  font-family: 'Ibarra Real Nova', serif;
  font-size: 48px;
}
</style>
