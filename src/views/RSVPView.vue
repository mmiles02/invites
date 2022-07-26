<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col align="center">
          <HeaderView></HeaderView>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          RSVP
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import HeaderView from "@/components/Header";
export default {
  name: "RSVPView",
  components: {HeaderView}
}
</script>

<style scoped>

</style>