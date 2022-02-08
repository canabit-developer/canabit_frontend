<template>
<div class="p-4">
    <div class="p-8 ">
          <vs-table>
            <template #thead>
                <vs-tr>
                    <vs-th>
                        Order
                    </vs-th>
                    <vs-th>
                        Account No.
                    </vs-th>
                    <vs-th>
                        price
                    </vs-th>
                    <vs-th>
                        Signals
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
                        {{ tr.name }}
                    </vs-td>
                    <vs-td>
                        {{ tr.username }}
                    </vs-td>
                    <vs-td>
                        {{ tr.price }} $
                    </vs-td>
                    <vs-td>
                        {{ tr.signals }}
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

    </div>
</div>
</template>

<script>
export default {
    data: () => ({
        page: 1,
        max: 3,
        users: [{
                "id": 1,
                "name": "High Risk",
                "username": "00154775349789",
                "price": "140",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",
            },
            {
                "id": 2,
                "name": "Gri 6.0",
                "username": "00154775349789",
                "price": "140",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",

            },
            {
                "id": 3,
                "name": "Gri 6.0",
                "username": "00154775349789",
                "price": "140",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",
            },
            {
                "id": 4,
                "name": "High Risk",
                "username": "00154775349789",
                "price": "170",
                "signals": "kale.biz",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",
            },
            {
                "id": 5,
                "name": "High Risk",
                "username": "00154775349789",
                "price": "140",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",
            },
            {
                "id": 6,
                "name": "Grid pro ",
                "username": "00154775349789",
                "price": "170",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",
            },
            {
                "id": 7,
                "name": "Gri 6.0",
                "username": "00154775349789",
                "price": "170",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",
            },
            {
                "id": 8,
                "name": "High Risk",
                "username": "00154775349789",
                "price": "140",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",
            },
            {
                "id": 9,
                "name": "High Risk",
                "username": "00154775349789",
                "price": "140",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",
            },
            {
                "id": 10,
                "name": "Gri 6.0",
                "username": "00154775349789",
                "price": "170",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Approve",
            }
        ]
    })
}
</script>

<style>

</style>
