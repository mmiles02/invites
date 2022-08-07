<template>
  <v-row>
    <v-col>
      <v-card
          elevation="5"
          class="rounded-card"
      >
        <v-row align="center" style="padding-top: 50px; padding-bottom: 50px">
<!--          <v-col cols="12" sm="5" align="center">-->
<!--            <v-icon size="100">{{ icon }}</v-icon>-->
<!--          </v-col>-->
<!--          <v-divider vertical inset></v-divider>-->
          <v-col class="ibarra" align="center">
            {{ text }}
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "WeddingCard",
  props: {
    icon: String,
    text: String
  }
}
</script>

<style scoped>
.ibarra {
  font-family: 'Ibarra Real Nova', serif;
  font-size: 48px;
  color: dimgray;
}
.rounded-card {
  border-radius: 50px;
}
</style>