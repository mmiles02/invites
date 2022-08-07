<template>
  <v-row style="margin-top: 25px;">
    <v-col>
      <v-divider></v-divider>
      <v-row>
        <v-col>
          <div class="ibarra txt-large">
            H & M
          </div>
        </v-col>
      </v-row>
      <hr style="width: 15%">
      <v-row style="padding-top: 10px;">
        <v-col>
          <div class="ibarra txt-small">
            10.7.2023
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "FooterView",
}
</script>

<style scoped>
.ibarra {
  font-family: 'Ibarra Real Nova', serif;
  color: dimgray;
}
.txt-small {
  font-size: 26px;
}
.txt-large {
  font-size: 56px;
}
</style>