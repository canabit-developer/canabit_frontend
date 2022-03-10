<template>
<div>
    <div class="p-4"  v-if="response">
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
export default {
    data: () => ({
        items: [],
        headers:[], 
        brokers:[],
        accountTypes:[],
        response:false
      
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

        async getTable(){
                this.items = await Core.getHttp(`/api/finance/brokeraccount/`) 
            this.items = _.map(this.items,(r)=>{
                let obj = r 
                obj.broker = this.getNameBroker(obj.broker)
                obj.account_type = this.getAccountType(obj.account_type)
                obj.created_at = Core.convertDate(obj.created_at)
                obj.updated_at = Core.convertDate(obj.updated_at)
                delete obj.user
                return obj
            })

            if (this.items.length > 0) {
                this.headers = _.map(Object.keys(this.items[0]), (r) => { 
                    return {
                        text: r,
                        value: r
                    }
                }) 
                this.headers.push({
                        text: 'Action',
                        value: "actions",
                        sortable: false
                })
            }
        },
        async removeBrokerAccount(id){
            let remove = await Core.deleteHttpAlert(`/api/finance/brokeraccount/${id}/`)
            await this.startup();
        },
        async getBrokers(){
            this.brokers = await Core.getHttp(`/api/finance/broker/`)
            this.accountTypes = await Core.getHttp(`/api/finance/accounttype/`)
        },
        getNameBroker(id){
           return _.find(this.brokers,{id:id}).name
        },
        getAccountType(id){
            return _.find(this.accountTypes,{id:id}).name
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
