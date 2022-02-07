<template>
   <v-row>
       <v-col
      cols="12"
      md="4"
    >
    <Profilebrand-CardBrand></Profilebrand-CardBrand>
    </v-col>
    <v-col
      cols="12"
      md="8"
      class="mt-1"
    >
    <Profilebrand-CardCondition></Profilebrand-CardCondition>
    </v-col>
    <v-col
      cols="12"
      md="4"
      >
      <Profilebrand-CardTimeline></Profilebrand-CardTimeline>
    </v-col>
    <v-col
        md="6"
        lg="8"
        cols="12"
        class="-mt-3"
      >
      <Profilebrand-CardIntroduce></Profilebrand-CardIntroduce>
    </v-col>
    <v-col
      cols="12"
      >
      <Profilebrand-RedeemList></Profilebrand-RedeemList>
    </v-col>
   </v-row>
</template>

<script>
export default {

}
</script>

<style>

</style>