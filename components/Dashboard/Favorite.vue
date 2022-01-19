<template>
   <section class="mt-6">
        <v-toolbar color="transparent" flat>
            <h2 class="text-2xl font-semibold">You Favorite</h2>
        </v-toolbar>
        <div> 
            <v-slide-group  class="pa-4" active-class="success" show-arrows>
                <v-slide-item v-for="list,index in lists" :key="index" v-slot="{ active, toggle }">
                    <v-card elevation="4" :color="active ? undefined : 'white lighten-1'" class="ma-4" height="200" width="350" @click="toggle">
                        <v-img class="w-full h-full" :src="list.brand.image"></v-img>
                        <v-row class="fill-height" align="center" justify="center">
                            <v-scale-transition>
                                <v-icon v-if="active" color="white" size="48" v-text="'mdi-close-circle-outline'"></v-icon>
                            </v-scale-transition>
                        </v-row>
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </div>
    </section>
</template>

<script>
import { initial } from 'lodash'
import {
    Core
} from '~/vuexes/core'
import {
    Auth
} from '~/vuexes/auth'
import _ from 'lodash'
export default {
    data: () => {
        return ({
            lists:[],
            user:Auth.user,
            response:false
        })
    },

    async created(){
        await this.initial();
    },
    methods:{
        async initial(){
            this.lists = await Core.getHttp(`/api/connection/user/favourite/?user=${this.user.id}`)
            console.log(this.lists)
            this.response = true
        }
    }
}
</script>

<style>

</style>
