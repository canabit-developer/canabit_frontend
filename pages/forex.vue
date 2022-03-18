<template>
<div>

    <v-toolbar color="transparent" flat>
        <h2 class="text-xl font-semibold">
            <v-icon size="20" class="me-3">em em-chart_with_upwards_trend</v-icon>
            FOREX BROKER</h2>
        <v-spacer></v-spacer>
        <Forex-AddAccount></Forex-AddAccount>
    </v-toolbar>

    <ul class="breadcrumb">
        <li><a @click="$router.push('/')" href="#">Home</a></li>
        <li>Forex Broker</li>
    </ul>

    <div class=" font-sans bg-white flex flex-col min-h-screen w-full">
        <v-card class="m-4 rounded-xl" flat>
            <v-img src="https://sv1.picz.in.th/images/2022/03/10/rnABtv.png"></v-img>
        </v-card> 
        <Forex-TableAccount></Forex-TableAccount>

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
