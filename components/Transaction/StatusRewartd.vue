<template>
<div class="p-4" v-if="response">
    <div class="p-8 "><span class="text-6xl"></span>
          <v-data-table :search="search" :headers="headers" :items="items" class="elevation-1">
            <template v-slot:item.product="{ item }">
                <div class="flex p-4 items-center">
                    <img class="h-20 w-20" :src="$url+item.product_image" alt="">
                    <span class="ml-2">{{item.product_name}}</span>
                 </div>
            </template>
            <template v-slot:item.point_use="{ item }">
                <span class="text-red-600 -m-3">- {{item.point_use}}</span>
            </template>
            <template v-slot:item.status="{ item }">
                <Core-Status :status="item.status" />
            </template>
            <template v-slot:item.action="{ item }">
                <v-btn v-if="item.status == 0" text x-small @click="removeRedeem(item)" color="error">
                    <v-icon>mdi-delete</v-icon> Cancel
                </v-btn>
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
import {
    Web
} from '@/vuexes/web'
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
                text: 'No',
                value: "no",
            },
            {
                text: 'Order number.',
                value: "code",
            }, {
                text: 'Reward name',
                value: "product",
            },
            {
                text: 'Date',
                value: "created_at",
            },
            {
                text: 'Point',
                value: "point_use",
            }, {
                text: 'Status',
                value: "status",
            }, {
                text: 'Action',
                value: "action",
            }, {
                text: 'Remark',
                value: "remark",
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
            this.items = await Core.getHttp(`/api/store/rewardhistory/?user=${Auth.user.id}`)
            this.items = _.map(this.items, (r) => {
                let obj = r 
                 obj.no = no++ 
                 return obj
            })
        },
   
        async removeRedeem(item) {
            let check = await Web.confirm("Do you want to cancle?")
            if (check) {
                let remove = await Core.putHttp(`/api/store/rewardhistory/${item.id}/`, {
                    status: 2,
                    remark: "Cancle By User",
                })
                if (remove.id) {
                    await Auth.addPointWithoutTotal(item.point_use)
                    await Auth.logPoint(`Redeem ${item.code}`, item.point_use, 0, 1)
                    let call = await Core.getHttp(`/api/account/userpointhistory/?user=${this.user.id}&received_from=Redeem ${item.code}`)
                    if (call.length > 0) {
                        let callData = call[0]
                        await Core.putHttp(`/api/account/userpointhistory/${callData.id}/`, {
                            status: 2,
                            remark: "Cancle By User"
                        })
                    }
                }
                await location.reload();
            }
            await this.startup();
        }
    },
    computed: {
        user: () => {
            return Auth.user
        },
        point: () => {
            return Auth.point
        },
        tier: () => {
            return Auth.tier
        },
        tiers: () => {
            return Auth.tiers
        },
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
