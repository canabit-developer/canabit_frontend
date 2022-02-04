<template>
<section class="mt-6">
    <v-toolbar color="transparent" flat>
        <h2 class="text-2xl font-semibold">You Favorite</h2>
    </v-toolbar>
    <div>
        <vs-card-group >
            <vs-card v-for="card in 5">
                <template #title>
                    <h3>Pot with a plant</h3>
                </template>
                <template #img>
                     <img :src="`/foto${card}.png`" alt="">
                </template>
                <template #text>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                </template>
                <template #interactions>
                    <vs-button class="btn-chat" shadow primary>
                        <v-icon x-small color="pink">mdi-cards-heart</v-icon>
                    </vs-button>
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
            this.lists = await Core.getHttp(`/api/connection/user/favourite/?user=${this.user.id}`)
            console.log(this.lists)
            this.response = true
        }
    }
}
</script>

<style>

</style>
