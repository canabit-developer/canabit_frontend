<template>
<div class="p-4">
    <div class="p-8 ">
          <vs-table>
            <template #thead>
                <vs-tr>
                    <vs-th>
                        Order Number
                    </vs-th>
                    <vs-th>
                        Order  
                    </vs-th>
                    <vs-th>
                        Broker
                    </vs-th>
                    <vs-th>
                        Account Type
                    </vs-th>
                    <vs-th>
                        Price
                    </vs-th>
                    <vs-th>
                        Date Create
                    </vs-th>
                    <vs-th>
                        Status
                    </vs-th>
                    <vs-th>
                        Remark
                    </vs-th>
                </vs-tr>
            </template>
            <template #tbody>
                <vs-tr :key="i" v-for="(historyaccountea, i) in historyaccountea" :data="historyaccountea">
                    <vs-td>
                        {{ historyaccountea.code }}
                    </vs-td>
                    <vs-td>
                        <v-avatar class=" m-1" size="30" tile>
                           <img src="@/assets/misc/logo_highrisk.png" alt="John" class="rounded-lg ">    
                        </v-avatar>{{ historyaccountea.product }}
                    </vs-td>
                    <vs-td>
                        <v-avatar class=" m-1" size="30" tile>
                            <img src="@/assets/misc/fbs.png" alt="John" class="rounded-lg ">
                        </v-avatar>{{ historyaccountea.broker }} 
                    </vs-td>
                    <vs-td>
                        <v-avatar class=" m-1" size="18" tile>
                            <img src="../../assets/misc/CENT.png"  class="rounded-lg">
                        </v-avatar>{{ historyaccountea.account_type }}
                    </vs-td>
                    <vs-td>
                        {{ historyaccountea.price }} $
                    </vs-td>
                    <vs-td>
                        {{ historyaccountea.created_at }}
                    </vs-td>
                    <vs-td>
                        <vs-tooltip success>
                            <vs-button success flat>
                                {{ historyaccountea.status }}
                            </vs-button>
                            <template #tooltip>
                                This is a beautiful button
                            </template>
                        </vs-tooltip>
                    </vs-td>
                    <vs-td>
                        {{ historyaccountea.remark }} 
                    </vs-td>
                </vs-tr>
            </template>
            <template #footer>
                <vs-pagination v-model="page" :length="$vs.getLength(users, max)" />
            </template>
        </vs-table>
    </div>
</div>
</template>

<script>
import {HistoryAccount} from '~/vuexes/historyaccount'
export default {
    data: () => ({
        historyaccountea:[],
        page: 1,
        max: 3,
        users: [{
                "id": 1,
                "name": "High Risk",
                "brokername": "FBS",
                "price": "140",
                "accountno": "01124839",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",
            },
            {
                "id": 2,
                "name": "Gri 6.0",
                "brokername": "FBS",
                "price": "140",
                "accountno": "01124839",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",

            },
            {
                "id": 3,
                "name": "Gri 6.0",
                "brokername": "FBS",
                "price": "140",
                "accountno": "01124839",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",
            },
            {
                "id": 4,
                "name": "High Risk",
                "brokername": "FBS",
                "price": "170",
                "accountno": "kale.biz",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",
            },
            {
                "id": 5,
                "name": "High Risk",
                "brokername": "FBS",
                "price": "140",
                "accountno": "01124839",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",
            },
            {
                "id": 6,
                "name": "Grid pro ",
                "brokername": "FBS",
                "price": "170",
                "accountno": "01124839",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",
            },
            {
                "id": 7,
                "name": "Gri 6.0",
                "brokername": "FBS",
                "price": "170",
                "accountno": "01124839",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",
            },
            {
                "id": 8,
                "name": "High Risk",
                "brokername": "FBS",
                "price": "140",
                "accountno": "01124839",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",
            },
            {
                "id": 9,
                "name": "High Risk",
                "brokername": "FBS",
                "price": "140",
                "accountno": "01124839",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",
            },
            {
                "id": 10,
                "name": "Gri 6.0",
                "brokername": "FBS",
                "price": "170",
                "accountno": "01124839",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",
            }
        ]
    }),
    async created() {
        await this.startup();
    },
    methods:{
        async startup(){
            this.historyaccountea = await HistoryAccount.getEA()
        }
    },
    computed:{

    }
}
</script>

<style>

</style>
