<template>
<div>
    <div class="p-4" v-if="response">
        <v-slide-group multiple show-arrows>
            <v-slide-item v-for="list,i in brokers" :key="i" v-slot="{ active, toggle }">
                <div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer  m-4">
                    <div class="w-full block h-full">
                        <img alt="blog photo" :src="list.image" class="max-h-40 w-full object-cover" />
                        <div class="bg-white w-full p-4">
                            <div class="grid grid-cols-6">
                                <div class="col-span-3 px-3 font-semibold flex flex-col">
                                    <div class=""> {{list.name}} </div>
                                    <div class="text-sm text-gray-400 font-light"> </div>
                                </div>
                                <div class="col-span-3 py-2 ml-8 justify-self-end">
                                    <v-chip color="success" label>
                                        <v-icon left> 
                                            mdi-account-circle-outline
                                        </v-icon>
                                        {{countAccount(list.id)}} Account
                                    </v-chip>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </v-slide-item>
        </v-slide-group>
        <div class="p-8 ">

            <div class="flex flex-col md:flex-row">
                <div class="w-1/2">
                    <v-btn x-large color="success" rounded>
                        <v-icon class="mr-2 text-4xl" dark>mdi-account</v-icon>Account Forex
                    </v-btn>
                </div>
                <div class="w-1/2">
                    <div class="flex flex-col md:flex-row">
                        <v-select @change="getTable()" v-model="filterBroker" class="mr-2" dense :items="listsFilterBroker" item-text="name" item-value="id" outlined label="Broker"></v-select>
                        <v-select @change="getTable()" v-model="filterAccountType" dense :items="listsFilterAccount" item-text="name" item-value="id" outlined label="Account Type"></v-select>

                    </div>
                </div>
            </div>
            <!-- <v-toolbar flat color="transparent">
               <v-spacer></v-spacer>
                <v-text-field dense outlined v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
           </v-toolbar> --><br>
            <v-data-table :search="search" :headers="headers" :items="items" class="elevation-1">
                <template v-slot:item.broker="{ item }">
                    <div class="flex">
                        <img class="h-6" :src="item.broker_image" alt=""> <span class="ml-2">{{item.broker}}</span>
                    </div>
                </template>
                <template v-slot:item.actions="{ item }">
                    <div>
                        <v-btn @click="removeBrokerAccount(item.id)" color="error" small>delete</v-btn>
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
            <v-row class="d-flex align-content-space-between flex-wrap justify-center mt-6">
                <span text class="ml-3 text-sm" v-for="ac,i  in accountTypes" :key="i">
                    <v-avatar size="23">
                        <img :src="ac.image">
                    </v-avatar> {{ac.name}}
                </span>
            </v-row>
        </div>
    </div>

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
    data: () => ({
        items: [],
        headers: [],
        brokers: [],
        accountTypes: [],
        search: '',
        response: false,
        listsFilterAccount: [],
        filterAccountType: '',
        listsFilterBroker: [],
        filterBroker: '',
        no: 1,
        headers: [{
                text: 'No.',
                value: "no",

            },
            {
                text: 'Broker',
                value: "broker",

            },
            {
                text: 'Account No.',
                value: "account_no",

            },
            {
                text: 'Date Create',
                value: "created_at",

            },
            {
                text: 'Status',
                value: "status",

            },
            {
                text: 'Remark',
                value: "remark",

            },
            // {
            //     text: 'Action',
            //     value: "actions",
            //     sortable: false
            // },
        ]

    }),
    async created() {
        await this.startup()
        this.response = true
    },
    methods: {
        async startup() {
            await this.getBrokers()
            await this.getTable();
        },
        async getTable() {
            let no = 1
            this.items = await Core.getHttp(`/api/finance/brokeraccount/?user=${Auth.user.id}${this.filterAccountType}${this.filterBroker}`)
            this.items = _.map(this.items, (r) => {
                let obj = r
                obj.no = no++
                obj.broker_image = this.getBroker(obj.broker).image
                obj.broker_id = r.broker
                obj.broker = this.getBroker(obj.broker).name
                obj.act = this.getAccountType(obj.account_type)
                obj.account_type = obj.act.name
                obj.account_type_image = obj.act.image
                obj.created_at = Core.convertDate(obj.created_at)
                obj.updated_at = Core.convertDate(obj.updated_at)
                delete obj.user
                return obj
            })

        },
        async removeBrokerAccount(id) {
            let remove = await Core.deleteHttpAlert(`/api/finance/brokeraccount/${id}/`)
            await this.startup();
        },
        async getBrokers() {
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
            console.log(this.listsFilterBroker);
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

        async getFilter() {
            await this.getTable()
        },

        countAccount(id) { 
            let account = _.filter(this.items, {
                broker_id: id
            })
            return account.length
        }

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
