<template>
<div>
    <vs-row justify="center">
        <div class="w-4/5 p-4 mb: -mt-12">
            <div class="p-8 rounded-xl shadow-md bg-white"><span class="text-6xl"></span>
                <vs-table>
                    <template #thead>
                        <vs-tr>
                            <vs-th>
                                Account No.
                            </vs-th>
                            <vs-th>
                                Broker
                            </vs-th>
                            <vs-th>
                                Account Type
                            </vs-th>
                        </vs-tr>
                    </template>
                    <template #tbody>
                        <vs-tr :key="i" v-for="(tr, i) in users" :data="tr">
                            <vs-td>
                                {{ tr.account }}
                            </vs-td>
                            <vs-td>
                                {{ tr.broker }}
                            </vs-td>
                            <vs-td>
                                {{ tr.accounttype }}
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>

            </div>
        </div>
    </vs-row>

</div>
</template>

<script>
export default {
    data: () => ({
        users: [{
                "id": 1,
                "account": "00154775349789",
                "broker": "Bret",
                "accounttype": "Sincere@april.biz",
                "website": "hildegard.org",
            },
            {
                "id": 2,
                "account": "00154775349789",
                "broker": "Antonette",
                "accounttype": "Shanna@melissa.tv",
                "website": "anastasia.net",
            },
            {
                "id": 3,
                "account": "00154775349789",
                "broker": "Samantha",
                "accounttype": "Nathan@yesenia.net",
                "website": "ramiro.info",
            },
            {
                "id": 4,
                "account": "00154775349789",
                "broker": "Karianne",
                "accounttype": "Julianne.OConner@kory.org",
                "website": "kale.biz",
            },
            {
                "id": 5,
                "account": "00154775349789",
                "broker": "Kamren",
                "accounttype": "Lucio_Hettinger@annie.ca",
                "website": "demarco.info",
            },
            {
                "id": 6,
                "account": "00154775349789",
                "broker": "Leopoldo_Corkery",
                "accounttype": "Karley_Dach@jasper.info",
                "website": "ola.org",
            },
            {
                "id": 7,
                "account": "00154775349789",
                "broker": "Elwyn.Skiles",
                "accounttype": "Telly.Hoeger@billy.biz",
                "website": "elvis.io",
            },
            {
                "id": 8,
                "account": "00154775349789",
                "broker": "Maxime_Nienow",
                "accounttype": "Sherwood@rosamond.me",
                "website": "jacynthe.com",
            },
            {
                "id": 9,
                "account": "00154775349789",
                "broker": "Delphine",
                "accounttype": "Chaim_McDermott@dana.io",
                "website": "conrad.com",
            },
            {
                "id": 10,
                "account": "00154775349789",
                "broker": "Moriah.Stanton",
                "accounttype": "Rey.Padberg@karina.biz",
                "website": "ambrose.net",
            }
        ]
    })
}
</script>

<style>

</style>
