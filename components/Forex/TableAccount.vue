<template>
<div>
    <div class="p-4">
        <div class="p-8 ">
            
            <vs-table>
                <template #thead>
                    <vs-tr>
                        <vs-th>
                            No.
                        </vs-th>
                        <vs-th>
                            Broker
                        </vs-th>
                        <vs-th>
                            Account Type
                        </vs-th>
                        <vs-th>
                            Date Create
                        </vs-th>
                        <vs-th>
                            Status Account
                        </vs-th>
                    </vs-tr>
                </template>
                <template #tbody>
                    <vs-tr :key="i" v-for="(tr, i) in users" :data="tr">
                        <vs-td>
                            {{ tr.id }}
                        </vs-td>
                        <vs-td>
                            <v-avatar rounded size="30px" class="m-1">
                                <img src="@/assets/misc/exness.png" alt="John">
                            </v-avatar>
                            {{ tr.broker }}
                        </vs-td>
                        <vs-td>
                            <v-avatar size="23px" class="m-1">
                                <img src="../../assets/misc/STAND.png" alt="John">
                            </v-avatar>{{ tr.accounttype }}
                        </vs-td>
                        <vs-td>
                            {{ tr.date }}
                        </vs-td>
                        <vs-td>
                            <v-chip label color="#E0FBE2">
                                <p class="text-green-400 ma-5">{{ tr.status }}</p>
                            </v-chip>
                        </vs-td>
                    </vs-tr>
                </template>
                <template #footer>
                    <vs-pagination v-model="page" :length="$vs.getLength(users, max)" />
                </template>
                
            </vs-table>
            
        </div>
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
                "account": "00154775349789",
                "broker": "FBS",
                "accounttype": "0112483941234",
                "date": "2/15/2020, 10:30 AM",
                "status": "Approve",
            },
            {
                "id": 2,
                "account": "00154775349789",
                "broker": "Antonette",
                "accounttype": "0112483941234",
                "date": "2/15/2020, 10:30 AM",
                "status": "Approve",
            },
            {
                "id": 3,
                "account": "00154775349789",
                "broker": "Samantha",
                "accounttype": "0112483941234",
                "date": "2/15/2020, 10:30 AM",
                "status": "Approve",
            },
            {
                "id": 4,
                "account": "00154775349789",
                "broker": "Karianne",
                "accounttype": "0112483941234",
                "date": "2/15/2020, 10:30 AM",
                "status": "Approve",
            },
            {
                "id": 5,
                "account": "00154775349789",
                "broker": "Kamren",
                "accounttype": "0112483941234",
                "date": "2/15/2020, 10:30 AM",
                "status": "Approve",
            },
            {
                "id": 6,
                "account": "00154775349789",
                "broker": "Leopoldo_Corkery",
                "accounttype": "0112483941234",
                "date": "2/15/2020, 10:30 AM",
                "status": "Approve",
            },
            {
                "id": 7,
                "account": "00154775349789",
                "broker": "Elwyn.Skiles",
                "accounttype": "0112483941234",
                "date": "2/15/2020, 10:30 AM",
                "status": "Approve",
            },
            {
                "id": 8,
                "account": "00154775349789",
                "broker": "Maxime_Nienow",
                "accounttype": "0112483941234",
                "date": "2/15/2020, 10:30 AM",
                "status": "Approve",
            },
            {
                "id": 9,
                "account": "00154775349789",
                "broker": "Delphine",
                "accounttype": "0112483941234",
                "date": "2/15/2020, 10:30 AM",
                "status": "Approve",
            },
            {
                "id": 10,
                "account": "00154775349789",
                "broker": "Moriah.Stanton",
                "accounttype": "0112483941234",
                "date": "2/15/2020, 10:30 AM",
                "status": "Approve",
            }
        ]
    })
}
</script>

<style>

</style>
