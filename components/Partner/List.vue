<template>
<div class="m-6">
 

    <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Finance </h2>

    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
        <div class="  group relative" v-for="(brand,index) in brands" :key="index">
            <v-item v-slot="{ }">
                <v-hover v-slot="{ hover }">
                    <v-card>
                        <v-img :aspect-ratio="18/9" contain :src="brand.image" alt="Front of men&#039;s Basic Tee in black." class="w-full h-full object-center object-cover lg:w-full lg:h-full">
                            <v-expand-transition>
                                <div v-if="hover" class="d-flex   primary  text-h6   v-card--reveal text-center white--text" style="height:100%;">
                                    <v-card-text class="my-4 text-center text-h6">
                                        Hover over me!
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
                        </v-img>
                        <v-card-text class="pt-6" style="position: relative;">
                            <v-btn absolute color="primary" class="white--text" fab small right top>
                                <v-icon dark>
                                    mdi-arrow-right
                                </v-icon>
                            </v-btn>
                            <div class="font-weight-light grey--text text-h6 mb-2 text-center">
                                {{brand.name}}
                            </div>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-item>
        </div>

    </div>

    <br> <br>
    <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">E-commerce </h2>
    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
        <div class="  group relative" v-for="(brand,index) in brands" :key="index">
            <v-item v-slot="{ }">
                <v-hover v-slot="{ hover }">
                    <v-card>
                        <v-img :aspect-ratio="18/9" contain :src="brand.image" alt="Front of men&#039;s Basic Tee in black." class="w-full h-full object-center object-cover lg:w-full lg:h-full">
                            <v-expand-transition>
                                <div v-if="hover" class="d-flex   primary  text-h6   v-card--reveal text-center white--text" style="height:100%;">
                                    <v-card-text class="my-4 text-center text-h6">
                                        Hover over me!
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
                        </v-img>
                        <v-card-text class="pt-6" style="position: relative;">
                            <v-btn absolute color="primary" class="white--text" fab small right top>
                                <v-icon dark>
                                    mdi-arrow-right
                                </v-icon>
                            </v-btn>
                            <div class="font-weight-light grey--text text-h6 mb-2 text-center">
                                {{brand.name}}
                            </div>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-item>
        </div>

    </div>

</div>
</template>

<script>
import {
    Auth
} from '~/vuexes/auth'
import {
    Core
} from '~/vuexes/core'
import _ from 'lodash'
export default {
    data: () => {
        return ({
            brands: []
        })
    },
    async created() {
        await this.loadList()
    },
    methods: {
        async loadList() {
            this.brands = await Core.getHttp(`/api/connection/brand/`)
        }
    }
}
</script>

<style>

</style>
