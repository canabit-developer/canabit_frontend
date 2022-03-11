<template>
<div class="p-4" v-if="response">
    <div class="p-8 ">
        <div class="p-8 "><span class="text-6xl"></span>
             <v-data-table :search="search" :headers="headers" :items="items" class="elevation-1">
                <template v-slot:item.products="{ item }">
                    <div class="flex">
                        <img class="h-6" :src="item.products_imgae" alt=""> <span class="ml-2">{{item.products}}</span>
                    </div>
                </template>
                <template v-slot:item.account_no="{ item }">
                    <div class="flex">
                        <img class="h-6" :src="item.account_type_image" alt=""> <span class="ml-2">{{item.account_no}}</span>
                    </div>
                </template>
                <template v-slot:item.status="{ item }">
                    <Core-Status :status="item.status" />
                </template>
            </v-data-table>
        </div>
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
        response: false,
        filterProduct: [],
        filterBroker:[],
        filterAccountType:[],
        listFilerProduct: [],
        listsFilterAccount:[],
        listsFilterBroker:[],

        no: 1,
        headers: [{
                text: 'Order Number',
                value: "no",

            },
            {
                text: 'Order',
                value: "product",

            },
            {
                text: 'Broker',
                value: "broker",

            },
            {
                text: 'Account Type',
                value: "account_type",

            },
            {
                text: 'Price',
                value: "",

            },
            {
                text: 'Status',
                value: "status",

            },
            {
                text: 'Remark',
                value: "remark",

            },
        ]
    }),
    async created() {
        await this.startup();
        this.response = true
    },
    methods: {
        async startup() {
            await this.getOrderEA()
            await this.getTableEA()
        },
        async getTableEA() {
            let no = 1
            this.items = await Core.getHttp(`/api/ea/order/?user=${Auth.user.id}${this.filterProduct}${this.filterBroker}${this.filterAccountType}`)
            this.items = _.map(this.items, (r) => {
                let obj = r
                obj.on = no++
                obj.product_image = this.getProduct(obj.product).image
                obj.product_id = r.product
                obj.product = this.getProduct(obj.product).name
                obj.broker_image = this.getBroker(obj.broker).image
                obj.broker_id = r.broker
                obj.broker = this.getBroker(obj.broker).name
                obj.act = this.getAccountType(obj.account_type)
                obj.account_type = obj.act.name
                obj.account_type_image = obj.act.image
                obj.created_at = Core.convertDate(obj.created_at)
                return obj
            })
        },
        async getOrderEA() {
            this.products = await Core.getHttp(`/api/ea/product/`)
            this.listFilerProduct = _.map(this.products, (r) => {
                return {
                    id: `&product=` + r.id,
                    name: r.name
                }
            })
            this.listFilerProduct.push({
                id: ``,
                name: 'All'
            })
            console.log(this.listFilerProduct);

            this.brokers = await Core.getHttp(`/api/finance/broker/`)
            this.listsFilterBroker = _.map(this.brokers, (r) => {
                return {
                    id: `&broker=` + r.id,
                    name: r.name
                }
            })
            this.listsFilterBroker.push({
                id: ``,
                name: 'All'
            })
             console.log(this.listFilerProduct);


            this.accountTypes = await Core.getHttp(`/api/finance/accounttype/`)
            this.listsFilterAccount = this.accountTypes
            this.listsFilterAccount = _.map(this.listsFilterAccount, (r) => {
                return {
                    id: `&account_type=` + r.id,
                    name: r.name,
                    broker:r.broker
                }
            })
            this.listsFilterAccount.push({
                id: ``,
                name: 'All'
            })
        },

        getProduct(id) {
            return _.find(this.products, {
                id: id
            })
        },
        getBroker(id) {
            return _.find(this.brokers, {
                id: id
            })
        },
        getAccountType(id) {
            return _.find(this.accountTypes, {
                id: id
            })
        },
    },

    computed: {

    }
}
</script>

<style>

</style>
