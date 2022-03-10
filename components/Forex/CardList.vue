<template>
<div>

    <v-slide-group multiple show-arrows>
        <v-slide-item v-for="list,i in lists" :key="i" v-slot="{ active, toggle }">
            <div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer  m-4">
                <div class="w-full block h-full">
                    <img alt="blog photo" :src="list.image" class="max-h-40 w-full object-cover" />
                    <div class="bg-white w-full p-4">
                        <div class="grid grid-cols-6">
                            <div class="col-span-3 px-3 font-semibold flex flex-col">
                                <div class=""> {{list.name}} </div>
                                <div class="text-sm text-gray-400 font-light"> @Broker Partner </div>
                            </div>
                            <div class="col-span-3 py-2 ml-8 justify-self-end">
                                <v-chip color="success" label>
                                    <v-icon left>
                                        mdi-account-circle-outline
                                    </v-icon>
                                    1 Account
                                </v-chip>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </v-slide-item>
    </v-slide-group>

</div>
</template>

<script>
import {
    Forex
} from '~/vuexes/forex'
import {
    Core
} from '@/vuexes/core'
import _ from 'lodash'
import {
    Auth
} from '@/vuexes/auth'
export default {
    data: () => {
        return {
            lists: []
        }
    },
    async created() {
        await this.startup();
    },
    methods: {
        async startup() {
            this.lists = await Core.getHttp(`/api/finance/broker/`)
        }
    }
}
</script>

<style>

</style>
