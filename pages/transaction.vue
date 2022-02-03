<template>
<row>
    <v-col cols="12">
        <Transaction-Loyalty />
    </v-col>
    <v-col cols="12" md="4">
       <ButtonRebate-Cashout />
    </v-col>
     <v-col cols="12" md="4">
       <ButtonRebate-Redeem />
    </v-col>
     <v-col cols="12" md="4">
       <ButtonRebate-Cashout />
    </v-col>
    <v-col cols="12">
        <Transaction-History />
    </v-col>
</row>
</template>

<script>
export default {
    // async created(){
    //       this.$vs.loading({})
    // }
}
</script>

<style>

</style>
