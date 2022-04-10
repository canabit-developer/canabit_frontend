<template>
<div class="bg-gray-100">
    <Core-BgProfile></Core-BgProfile>
    <div class="relative  md:m-24 mt-20">
        <Core-Title :image="require('~/static/png/5180646.png')" title="Forex Broker" :paths="[{name:'Forex Broker',link:null}]"></Core-Title>
 
 

    <div class=" font-sans  flex flex-col min-h-screen w-full">
        <v-card class="m-4 rounded-xl" flat>
            <v-img src="https://sv1.picz.in.th/images/2022/03/10/rnABtv.png"></v-img>
        </v-card> 
          <Forex-AddAccount></Forex-AddAccount>
        <Forex-TableAccount></Forex-TableAccount>

    </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style>

</style>
