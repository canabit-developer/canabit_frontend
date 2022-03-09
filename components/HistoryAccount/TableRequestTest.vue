<template>
<div class="p-4">
    <div class="p-8 "><span class="text-6xl"></span>
          <vs-table>
            <template #thead>
                <vs-tr>
                    <vs-th>
                        Order No.
                    </vs-th>
                    <vs-th>
                        Request Test Name
                    </vs-th>
                    <vs-th>
                        Date Create
                    </vs-th>
                </vs-tr>
            </template>
            <template #tbody>
                <vs-tr :key="i" v-for="(requestea, i) in requestea" :data="requestea">
                    <vs-td>
                        {{ requestea.code }}
                    </vs-td>
                    <vs-td>
                        <v-avatar class="m-1" size="30" tile>
                            <img src="@/assets/misc/gri.png" alt="John" class="rounded-lg ">
                        </v-avatar>{{ requestea.product }}
                    </vs-td>
                    <vs-td>
                        {{ requestea.created_at }} 
                    </vs-td>
                </vs-tr>
            </template>
            <template #footer>
                <vs-pagination v-model="page" :length="$vs.getLength(users, max)" />
            </template>
        </vs-table>
        <pre>{{requestea}}</pre>
    </div>
</div>
</template>

<script>
import {HistoryAccount} from '~/vuexes/historyaccount'
export default {
    data: () => ({
        requestea:[],
        page: 1,
        max: 3,
        users: [{
                "id": 1,
                "name": "High Risk",
                "username": "Gri 6.0",
                "price": "140",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Reject",
            },
            {
                "id": 2,
                "name": "Gri 6.0",
                "username": "Gri 6.0",
                "price": "140",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Reject",

            },
            {
                "id": 3,
                "name": "Gri 6.0",
                "username": "Gri 6.0",
                "price": "140",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Reject",
            },
            {
                "id": 4,
                "name": "High Risk",
                "username": "Gri 6.0",
                "price": "170",
                "signals": "kale.biz",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Reject",
            },
            {
                "id": 5,
                "name": "High Risk",
                "username": "Gri 6.0",
                "price": "140",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Reject",
            },
            {
                "id": 6,
                "name": "Grid pro ",
                "username": "Gri 6.0",
                "price": "170",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Reject",
            },
            {
                "id": 7,
                "name": "Gri 6.0",
                "username": "Gri 6.0",
                "price": "170",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Reject",
            },
            {
                "id": 8,
                "name": "High Risk",
                "username": "Gri 6.0",
                "price": "140",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Reject",
            },
            {
                "id": 9,
                "name": "High Risk",
                "username": "Gri 6.0",
                "price": "140",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Reject",
            },
            {
                "id": 10,
                "name": "Gri 6.0",
                "username": "Gri 6.0",
                "price": "170",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Reject",
            }
        ]
    }),
    async created(){
        this.startup()
    },
    methods:{
         async startup(){
            this.requestea = await HistoryAccount.getRquestTestEA()
        }
    },
    computed:{

    }
}
</script>

<style>

</style>
