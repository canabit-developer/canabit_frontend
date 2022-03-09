<template>
<div>
    <div class="p-4">
        <div class="p-8 ">

            <!-- <vs-table>
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
                    <vs-tr :key="i" v-for="(tr, i) in items" :data="items">
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
                            </v-avatar>{{ tr.account_type }}
                        </vs-td>
                        <vs-td>
                            {{ tr.created_at }}
                        </vs-td>
                        <vs-td>
                            <v-chip label color="#E0FBE2">
                                <p class="text-green-400 ma-5">{{ tr.status }}</p>
                            </v-chip>
                        </vs-td>
                    </vs-tr>
                </template>
                <template #footer>
                    <vs-pagination v-model="page" :length="items.count/2" />
                </template>

            </vs-table> -->
            <v-data-table :headers="headers" :items="items.results" class="elevation-1"></v-data-table>
            <v-pagination :length="items.count/2" v-model="page"></v-pagination>
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
export default {
    data: () => ({
        items: [],
        page: 1,
        max: 3,
      
    }),
    async created() {
        this.startup()
    },
    methods: {
        async startup() {
            this.items = await Core.getHttp(`/api/finance/brokeraccount/?page=${this.page}`)
            if (this.items.results.length > 0) {
                this.headers = _.map(Object.keys(this.items.results[0]), (r) => {
                    return {
                        text: r,
                        value: r
                    }
                })
            }
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
