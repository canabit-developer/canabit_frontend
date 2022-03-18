<template>
  <div>
    <v-toolbar color="transparent" flat>
          <h2 class="text-xl font-semibold">
              <v-icon size="20" class="me-3">em em-trophy</v-icon>
              REWARDS</h2>
          <v-spacer></v-spacer>
      </v-toolbar>

      <ul class="breadcrumb">
        <li><a @click="$router.push('/')" href="#">Home</a></li>
        <li>Rewards</li>
    </ul>

    <v-row class="mt-2" >
        <v-col cols="12" md="4" >
      <Profilebrand-CardBrand></Profilebrand-CardBrand>
      </v-col>
      <v-col cols="12" md="8" class="mt-1" >
      <Profilebrand-CardCondition></Profilebrand-CardCondition>
      </v-col>
      
      <v-col cols="12" >
        <Profilebrand-RedeemList></Profilebrand-RedeemList>
      </v-col>
    </v-row>

  </div>
   
</template>

<script>
export default {

}
</script>

<style>

</style>