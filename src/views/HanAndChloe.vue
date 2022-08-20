<template>
  <v-row style="padding: 30px;">
    <v-col align="center">
      <v-row>
        <v-col>
          <div class="ibarra txt-large">
            Hannah and Chloe
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row style="margin-top: 15px;">
        <v-col>
          <img src="@/assets/hanandchloe.jpg" class="home-img">
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "HanAndChloe"
}
</script>

<style scoped>
.home-img {
  max-width: 350px;
}
.ibarra {
  font-family: 'Ibarra Real Nova', serif;
  color: dimgray;
}
.txt-large {
  font-size: 40px;
}
</style>