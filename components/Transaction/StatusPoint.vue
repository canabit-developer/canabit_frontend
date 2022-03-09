<template>
<div class="p-4">
    <div class="p-8 ">
          <vs-table>
            <template #thead>
                <vs-tr>
                    <vs-th>
                        No.
                    </vs-th>
                    <vs-th>
                        transaction point
                    </vs-th>
                    <vs-th>
                        Point
                    </vs-th>
                    <vs-th>
                        Date Create
                    </vs-th>
                    <vs-th>
                        STATUS
                    </vs-th>
                </vs-tr>
            </template>
            <template #tbody>
                <vs-tr :key="i" v-for="(tr, i) in users" :data="tr">
                    <vs-td>
                        {{ tr.id }}
                    </vs-td>
                    <vs-td>
                        {{ tr.name }}
                    </vs-td>
                    <vs-td>
                        <p class="text-green-500">+ {{ tr.price }} point </p>
                    </vs-td>
                    <vs-td>
                        {{ tr.createdate }}
                    </vs-td>
                    <vs-td>
                        <vs-tooltip success>
                            <vs-button success flat>
                                {{ tr.status }}
                            </vs-button>
                            <template #tooltip>
                                This is a beautiful button
                            </template>
                        </vs-tooltip>

                    </vs-td>
                </vs-tr>
            </template>
            <template #footer>
                <vs-pagination v-model="page" :length="$vs.getLength(users, max)" />
            </template>
        </vs-table>
        <pre>{{statuspoint}}</pre>
    </div>
</div>
</template>

<script>
import {
    Transaction
} from '~/vuexes/transaction'
export default {
    data: () => ({
        statuspoint: [],
        page: 1,
        max: 3,
        users: [{
                "id": 1,
                "name": "Cashback",
                "username": "00154775349789",
                "price": "100",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",
            },
            {
                "id": 2,
                "name": "Cashback",
                "username": "00154775349789",
                "price": "140",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",

            },
            {
                "id": 3,
                "name": "Cashback",
                "username": "00154775349789",
                "price": "140",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",
            },
            {
                "id": 4,
                "name": "Cashback",
                "username": "00154775349789",
                "price": "170",
                "signals": "kale.biz",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",
            },
            {
                "id": 5,
                "name": "Cashback",
                "username": "00154775349789",
                "price": "140",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",
            },
            {
                "id": 6,
                "name": "Cashback",
                "username": "00154775349789",
                "price": "170",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",
            },
            {
                "id": 7,
                "name": "Cashback",
                "username": "00154775349789",
                "price": "170",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",
            },
            {
                "id": 8,
                "name": "Cashback",
                "username": "00154775349789",
                "price": "140",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",
            },
            {
                "id": 9,
                "name": "Cashback",
                "username": "00154775349789",
                "price": "140",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",
            },
            {
                "id": 10,
                "name": "Cashback",
                "username": "00154775349789",
                "price": "170",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",
            }
        ],
    }),
    async created() {
        this.startup()
    },
    methods: {
        async startup() {
            this.statuspoint = await Transaction.getStatusPoint()
        }
    },
    computed: {}

}
</script>

<style>

</style>
