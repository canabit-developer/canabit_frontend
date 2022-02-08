<template>
<section class="mt-6">
    <v-toolbar color="transparent" flat>
        <h2 class="text-2xl font-semibold">Special for you</h2>
    </v-toolbar>
    <div>
        <vs-card-group v-if="response">
            <vs-card v-for="list,index in lists" :key="index" @click="$router.push(`/profilebrand?id=${list.id}`)">
                <template #title>
                    <h3 class="font-semibold">{{list.name}}</h3>
                </template>
                <template #img>
                    <v-img contain class="h-48 w-auto mx-auto" :src="`${$url}${list.image}`" ></v-img>
              
                </template>
                <template #text>
                    <p class="text-orange-500 font-semibold">
                       เงินคืนสูงสุด {{list.point_back}} %
                    </p>
                </template>
            
            </vs-card>
        </vs-card-group>
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
export default {
    data: () => {
        return ({
            lists: [],
            user: Auth.user,
            response: false
        })
    },

    async created() {
        await this.initial();
    },
    methods: {
        async initial() {
            this.lists = await Core.getHttp(`/api/connection/brand/`)
            console.log(this.lists)
            this.response = true 
        }
    }
}
</script>

<style>

</style>
