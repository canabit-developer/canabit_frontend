<template>
<div class="p-4">
    <div class="p-8 "><span class="text-6xl"></span>
          <vs-table>
            <template #thead>
                <vs-tr>
                    <vs-th>
                        Order No
                    </vs-th>
                    <vs-th>
                        Indicator No.
                    </vs-th>
                    <vs-th>
                        Date
                    </vs-th>
                </vs-tr>
            </template>
            <template #tbody>
                <vs-tr :key="i" v-for="(tr, i) in users" :data="tr">
                    <vs-td>
                        {{ tr.id }}
                    </vs-td>
                    <vs-td>
                        <v-avatar class=" m-1" size="30" tile>
                            <img src="@/assets/misc/signal.png" alt="John" class="rounded-lg ">
                        </v-avatar> {{ tr.signals }}
                    </vs-td>
                    <vs-td>
                        {{ tr.createdate }}
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
                "username": "Indicator",
                "price": "170",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Reject",
            },
            {
                "id": 2,
                "name": "Gri 6.0",
                "username": "00154775349789",
                "price": "170",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Reject",
            },
            {
                "id": 3,
                "name": "Gri 6.0",
                "username": "00154775349789",
                "price": "170",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Reject",
            },
            {
                "id": 4,
                "name": "High Risk",
                "username": "00154775349789",
                "price": "170",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Reject",
            },
            {
                "id": 5,
                "name": "High Risk",
                "username": "00154775349789",
                "price": "170",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Reject",
            },
            {
                "id": 6,
                "name": "Grid pro ",
                "username": "00154775349789",
                "price": "170",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Reject",
            },
            {
                "id": 7,
                "name": "Gri 6.0",
                "username": "00154775349789",
                "price": "170",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Reject",
            },
            {
                "id": 8,
                "name": "High Risk",
                "username": "00154775349789",
                "price": "140",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Reject",
            },
            {
                "id": 9,
                "name": "High Risk",
                "username": "00154775349789",
                "price": "140",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Reject",
            },
            {
                "id": 10,
                "name": "Gri 6.0",
                "username": "00154775349789",
                "price": "170",
                "signals": "Indicator",
                "createdate": "5/23/2020, 10:45 AM",
                "status": "Reject",
            }
        ]
    })
}
</script>

<style>

</style>
