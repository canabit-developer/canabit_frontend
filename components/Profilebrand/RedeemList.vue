<template>
<div>
    <v-item-group>
        <v-container>
            <v-row>
                <v-col v-for="storeproduct,n in storeproduct" :key="n" sm="4" lg="6" md="8" xl="3">
                    <vs-card>
                        <template #title>
                            <h3>{{storeproduct.name}}</h3>
                        </template>
                        <template #img>
                            <img :src="storeproduct.image" alt="">
                        </template>
                        <template #text>
                            <p>
                                {{storeproduct.detail}}
                            </p>
                            <vs-button block color="#4ade80" class="btn-chat mt-5">
                                Redeem
                            </vs-button>
                        </template>
                        <template #interactions>
                            <vs-button color="#4ade80">
                                {{storeproduct.point_use}} Point
                            </vs-button>
                        </template>
                    </vs-card>
                </v-col>
            </v-row>
        </v-container>
        <pre>{{storeproduct}}</pre>
    </v-item-group>
</div>
</template>

<script>
import {
    Store
} from '~/vuexes/store'
export default {
    data: () => ({
        storeproduct: [],
    }),
    async created() {
        this.startup()
    },
    methods: {
        async startup() {
            this.storeproduct = await Store.getStoreProduct()
        }
    },
    computed: {
        imageStoreProduct(){
            return Store.image
        }
    }
}
</script>

<style>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    position: absolute;
    width: 100%;
}
</style>
