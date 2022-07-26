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
          Registry
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import HeaderView from "@/components/Header";
export default {
  name: "RegistryView",
  components: {HeaderView}
}
</script>

<style scoped>

</style>