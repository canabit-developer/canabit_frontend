<template>
<section class="mt-6">
    <v-toolbar color="transparent" flat>
        <h2 class="text-2xl font-semibold">Copy Trade</h2>
         <v-spacer></v-spacer>
        <v-btn  @click="$router.push('/copytrade')"   ><span class="capitalize font-semibold">View All</span></v-btn>
    </v-toolbar>
    <div>
        <v-slide-group multiple show-arrows>
            <v-slide-item v-for="list,i in copytradeproduct" :key="i" v-slot="{ active, toggle }">
                <div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer  m-4" @click="$router.push(`/detailcopytrade?id=${list.id}`)" >
                    <div class="w-full block h-full">
                        <img alt="blog photo" :src="$url+list.image" class="max-h-40 w-full object-cover" />
                        <div class="bg-white w-full p-4">
                            <div class="grid grid-cols-6">
                                <div class="col-span-3 px-3 font-semibold flex flex-col">
                                    <div class=""> {{list.name}} </div>
                                    <div class="text-sm text-gray-400 font-light"> @Broker Partner </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </v-slide-item>
        </v-slide-group>
    </div>
</section>
</template>

<script>
import {
    Core
} from '~/vuexes/core'
import {
    Auth
} from '~/vuexes/auth'
import _ from 'lodash'
 import {
     Product
 } from '~/vuexes/product'
export default {
    data: () => {
        return ({
            copytradeproduct: [],
            user: Auth.user,
            response: false
        })
    },

    async created() {
        await this.initial();
    },
    methods: {
        async initial() {
           this.copytradeproduct = await Product.getCopytradeProduct()
            console.log(this.lists)
            this.response = true 
        }
    }
}
</script>

<style>

</style>
