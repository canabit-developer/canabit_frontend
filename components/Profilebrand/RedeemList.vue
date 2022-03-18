<template>
<div>
    <v-item-group>
        <v-container v-if="response">
            <div class="flex flex-col md:flex-row">
                <div class="w-1/2">

                </div>
                <div class="w-1/2">
                    <div class="flex flex-col md:flex-row">
                        <v-select @change="startup()" v-model="sortBy" :items="sorts" item-text="text" item-value="value" class="mr-2" dense outlined label="Sort By Point"></v-select>

                    </div>
                </div>
            </div>

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
                            <div class="h-20">
                                <p class="textellipsis">
                                    {{storeproduct.detail}}
                                </p>
                            </div>
                            <vs-button floating v-if="point.current >= storeproduct.point_use"  block color="#4ade80" class="btn-chat mt-5" @click="postRedeem(storeproduct)">
                                Redeem
                            </vs-button>
                          <vs-button  v-else floating block disabled color="#425466" class="btn-chat mt-5"  >
                             Your point not enough
                          </vs-button>
                        </template>
                        <template #interactions>
                            <vs-button color="#4ade80" >
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
import _ from 'lodash'
export default {
    watch: {},
    data: () => ({
        storeproducts: [],
        response: false,
        form: {},
        sortBy:'asc',
        sorts:[
          {'text':'Descending',value:'asc'},
          {'text':'Ascending',value:'desc'},
        ]
    }),
    async created() {
        await this.startup()
        this.response = true
    },
    methods: {
        async startup() {
            this.storeproducts = await Core.getHttp('/api/store/product/?is_active=true')
            this.storeproducts = _.orderBy(this.storeproducts,['point_use'],[this.sortBy])
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
                let code = 'RD' + Date.now()
                let redeem = await Core.postHttpAlert(`/api/store/rewardhistory/`, {
                    "code": code,
                    "point_use": product.point_use,
                    "status": 0,
                    "remark": "*Customers can cancel the transaction. can be traded",
                    "product": product.id
                })
                await this.$router.push('/transaction')
            }
        },

    },
    computed: {
        imageStoreProduct() {
            return Store.image
        },
      user: () => {
        return Auth.user
      },
      point: () => {
        return Auth.point
      },
      tier: () => {
        return Auth.tier
      },
      tiers: () => {
        return Auth.tiers
      },
      setting: () => {
        return Auth.setting
      },

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
