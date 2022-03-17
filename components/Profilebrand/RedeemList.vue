<template>
<div>
    <v-item-group>
        <v-container v-if="response">
        
                <v-row>
                    <v-col v-for="storeproduct,n in storeproducts" :key="n" sm="4" lg="6" md="8" xl="3">
                        <vs-card>
                            <template #title>
                                <h3>{{storeproduct.name}}</h3>
                            </template>
                            <template #img>
                                <div class="h-64 w-full ">
                                    <img :src="$url+storeproduct.image" alt="" />
                                </div>

                            </template>
                            <template #text>
                                <div class="h-20" >
                                    <p class="textellipsis">
                                        {{storeproduct.detail}}
                                    </p>
                                </div>
                                <vs-button block color="#4ade80" class="btn-chat mt-5" @click="postRedeem(storeproduct)">
                                    Redeem
                                </vs-button>
                            </template>
                            <template #interactions>
                                <vs-button color="#4ade80"  >
                                    {{storeproduct.point_use}} Point
                                </vs-button>
                            </template>
                        </vs-card>
                    </v-col>
                </v-row>
           
        </v-container>
    </v-item-group>
</div>
</template>

<script>
import {
    Store
} from '~/vuexes/store'
import {
    Web
} from '~/vuexes/web'
import {
    Auth
} from '~/vuexes/auth'
import {
    Core
} from '~/vuexes/core'
export default {
    watch: {},
    data: () => ({
        storeproducts: [],
        response: false,
        form: {}
    }),
    async created() {
        await this.startup()
        this.response = true
    },
    methods: {
        async startup() {
            this.storeproducts = await Store.getStoreProduct()
        },
        async getRedeem() {
            let check = await Web.confirm('Thank you for the Redeem')
            if (check) {
                await this.$router.push('/transaction')
            } else {}
        },
        async postRedeem(product) {
             let check = await Web.confirm('Do you want to Redeem')
            if (check) {
            this.form.user = Auth.user.id
            let code = 'RD'+Date.now()
            let redeem = await Core.postHttpAlert(`/api/store/rewardhistory/`, {
                   "code": code,
                "point_use": product.point_use,
                "status": 0, 
                 "product": product.id
            })
              await this.$router.push('/transaction')}
        }
    },
    computed: {
        imageStoreProduct() {
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

.textellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
</style>
