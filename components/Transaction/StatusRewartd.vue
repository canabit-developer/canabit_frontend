<template>
<div class="p-4">
    <div class="p-8 ">
          <vs-table>
            <template #thead>
                <vs-tr>
                    <vs-th>
                        Order number
                    </vs-th>
                    <vs-th>
                        Reward name
                    </vs-th>
                    <vs-th>
                        Date
                    </vs-th>
                    <vs-th>
                        Point
                    </vs-th>
                    <vs-th>
                        Status
                    </vs-th>
                    <vs-th>
                        Action
                    </vs-th>
                    <vs-th>
                        Remark
                    </vs-th>
                </vs-tr>
            </template>
            <template #tbody>
                <vs-tr :key="i" v-for="(tr, i) in users" :data="tr">
                    <vs-td>
                        {{ tr.ordernumber }}
                    </vs-td>
                    <vs-td>
                        <p class="text-blue-600">{{ tr.rewardname }}</p>
                    </vs-td>
                    <vs-td>
                        {{ tr.date }}
                    </vs-td>
                    <vs-td>
                        <p class="text-red-400">{{ tr.point }} point</p>
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
                    <vs-td>
                        <vs-button :active="active == 0" @click="active = 0">
                            Cancel Reward
                        </vs-button>
                    </vs-td>
                    <vs-td>
                        {{ tr.remark }}
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
                "ordernumber": "001547",
                "rewardname": "apple watch series 7",
                "date": "5/23/2020, 10:45 AM",
                "point": "-100",
                "status": "Approve",
                "remark": "*The product has been shipped already, please check the parcel number in the email.",
            },
            {
                "id": 2,
                "ordernumber": "001547",
                "rewardname": "apple watch series 7",
                "date": "5/23/2020, 10:45 AM",
                "point": "-100",
                "status": "Approve",
                "remark": "*The product has been shipped already, please check the parcel number in the email.",
            },
            {
                "id": 3,
                "ordernumber": "001547",
                "rewardname": "apple watch series 7",
                "date": "5/23/2020, 10:45 AM",
                "point": "-100",
                "status": "Approve",
                "remark": "*The product has been shipped already, please check the parcel number in the email.",
            },
            {
                "id": 4,
                "ordernumber": "001547",
                "rewardname": "apple watch series 7",
                "date": "5/23/2020, 10:45 AM",
                "point": "-100",
                "status": "Approve",
                "remark": "*The product has been shipped already, please check the parcel number in the email.",
            },
            {
                "id": 5,
                "ordernumber": "001547",
                "rewardname": "apple watch series 7",
                "date": "5/23/2020, 10:45 AM",
                "point": "-100",
                "status": "Approve",
                "remark": "*The product has been shipped already, please check the parcel number in the email.",
            },
            {
                "id": 6,
                "ordernumber": "001547",
                "rewardname": "apple watch series 7",
                "date": "5/23/2020, 10:45 AM",
                "point": "-100",
                "status": "Approve",
                "remark": "*The product has been shipped already, please check the parcel number in the email.",
            },
            {
                "id": 7,
                "ordernumber": "001547",
                "rewardname": "apple watch series 7",
                "date": "5/23/2020, 10:45 AM",
                "point": "-100",
                "status": "Approve",
                "remark": "*The product has been shipped already, please check the parcel number in the email.",
            },
            {
                "id": 8,
                "ordernumber": "001547",
                "rewardname": "apple watch series 7",
                "date": "5/23/2020, 10:45 AM",
                "point": "-100",
                "status": "Approve",
                "remark": "*The product has been shipped already, please check the parcel number in the email.",
            },

        ]
    })
}
</script>

<style>

</style>
