<template>
<div class="p-4" v-if="response">
    <div class="p-8 ">
        <v-data-table :headers="headers" :items="items" class="elevation-1">
            <template v-slot:item.actions="{ item }">
                <div>
                    <v-btn @click="removeBrokerAccount(item.id)" color="error" small>delete</v-btn>
                </div>
            </template>
        </v-data-table>
    </div>
</div>
</template>

<script>
import {
    HistoryAccount
} from '~/vuexes/historyaccount'
import {
    Core
} from '@/vuexes/core'
import _ from 'lodash'
import {
    Auth
} from '@/vuexes/auth'
export default {
    data: () => ({
        historyaccountea: [],
    }),
    async created() {
        await this.startup();
        this.response = true
    },
    methods: {
        async startup() {

        },
        async getTableEA() {
            this.items = await Core.getHttp(`/api/finance/brokeraccount/?user=${Auth.user.id}`)
            this.items = _.maps(this.items, (r)=>{
                let obj =r 
               
            })
        },
        async getOrderEA(){
            this.productEA = await Core.getHttp('/api/ea/order/')
        },
        async getNameProductEA(){
             return _.find(this.productEA,{id:id}).name
        },

    },
    computed: {

    }
}
</script>

<style>

</style>
