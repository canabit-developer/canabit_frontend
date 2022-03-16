<template>
<div class="p-4" v-if="response">
    <div class="p-8 "><span class="text-6xl"></span>
          <v-data-table :search="search" :headers="headers" :items="items" class="elevation-1">
            <template v-slot:item.product="{ item }">
                <div class="flex">
                    <img class="h-6" :src="item.product_image" alt=""> <span class="ml-2">{{item.product}}</span>
                </div>
            </template>
                  <template v-slot:item.point="{ item }">
                    <span class="text-red-600" v-if="item.type == 1">- {{item.point}}</span> 
                    <span class="text-green-600" v-if="item.type == 0">+ {{item.point}}</span> 
                </template>
            <template v-slot:item.status="{ item }">
                    <Core-Status :status="item.status" />
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
        historyaccountindicator: [],
        no: 1,
        search: '',
        items: [],
        response: false,
        products: [],
        listProduct: [],
        filterProduct: '',
        headers: [{
                text: 'No.',
                value: "no",

            },
            {
                text: 'Transaction',
                value: "received_from",

            },
            {
                text: 'Point',
                value: "point",

            },
            {
                text: 'Date',
                value: "created_at",

            },
            {
                text: 'Status',
                value: "status",

            },
        ],

    }),
    async created() {
        await this.startup()
        this.response = true

    },
    methods: {
        async startup() {
            await this.getTableIndicator()
        },
        async getTableIndicator() {
            let no = 1
            this.items = await Core.getHttp(`/api/account/userpointhistory/?user=${Auth.user.id}`)
            this.items = _.map(this.items, (r) => {
                let obj = r
                obj.no = no++
                obj.created_at = Core.convertDate(obj.created_at)
                obj.updated_at = Core.convertDate(obj.updated_at)
                return obj
            })

        },

    },
    computed: {
        
    },
    watch: {
        async page(oldVal, newVal) {
            await this.startup();
        }
    }
}
</script>

<style>

</style>
