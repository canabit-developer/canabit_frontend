<template>
<div>
    <template>
        <div class="inline-flex ">
            <vs-button class="btn-chat" color="#0052F9" @click="active=!active">
                <span class="span">
                    Purchase
                </span>
            </vs-button>
            <vs-dialog prevent-close max-width="500px" persistent v-model="active">
                <template #header>
                    <h4 class="not-margin">
                        Purchase to <b>{{ea.name}}</b>
                    </h4>
                </template>
                <v-card-title>
                    <v-alert v-if="usePoint > 0" type="success"> Use Point {{usePoint}}</v-alert>
                    <v-alert class="ml-3" type="error" v-if="usePoint > point.current">More Than Point</v-alert>
                    <v-spacer></v-spacer>

                </v-card-title>
                <v-card-text class="p-6">
                    <h2 v-if="oldPrice" class="line-through ">{{oldPrice}}</h2>
                    <form @submit.prevent="store()">
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-autocomplete v-model="form.account_type" label="Account No" outlined :items="accLists" item-text="account_no" item-value="id"></v-autocomplete>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field :disabled="runUsePoint" v-model="usePoint" label="Point" hint="For example, flowers or used cars" outlined></v-text-field>
                            </v-col>
                            <div class="mt-3">
                                <vs-button floating color="#4ade80" v-if="(!runUsePoint) && (usePoint != '' && usePoint > '' ) && (usePoint <= point.current)" @click="usePointFeed()">
                                    Use Point
                                </vs-button>
                            </div>

                            <v-alert type="success" v-if="myDiscount.id">
                                Use Promotion {{myDiscount.name}}
                            </v-alert>
                            <v-col cols="12" md="6">
                                <v-text-field :disabled="discountActive" label="Discount" v-model="discount" hint="For example, flowers or used cars" outlined></v-text-field>
                            </v-col>
                            <!-- <v-btn v-if="  (discount != '')" @click="getDiscount()">Use</v-btn> -->
                            <div class="mt-3">
                                <vs-button floating color="#4ade80" v-if="(discount != '')" @click="getDiscount()">
                                    Use Discount
                                </vs-button>
                            </div>
                            <v-col cols="6" md="6">
                                <div class="text-green-400 text-4xl	 mt-1">
                                    <h1>Total Price: {{ea.price}}</h1>
                                </div>
                            </v-col>
                        </v-row>
                        <vs-button block color="#4ade80" floating type="submit" class="mt-5"> Submit  Purchase </vs-button>
                    </form>
                </v-card-text>
            </vs-dialog>
        </div>
    </template>
</div>
</template>

<script>
import {
    Core
} from '@/vuexes/core'
import _ from 'lodash'
import {
    Auth
} from '@/vuexes/auth'
export default {
    props: {
        ea: {
            default: {}
        }
    },
    data: () => ({
        broker: [],
        active: false,
        form: {},
        accLists: [],
        ea: {},
        discountActive: false,
        discount: '',
        myDiscount: {},
        oldPrice: 0,
        usePoint: 0,
        runUsePoint: false,
        error: {},
        tmpPrice: 0,

    }),
    async created() {
        await this.startup()
    },
    methods: {
        async startup() {
            this.broker = await Core.getHttp(`/api/finance/broker/`)
            this.accLists = await Core.getHttp(`/api/finance/brokeraccount/?user=${this.user.id}`)
            this.accLists = _.reject(this.accLists, (item) => _.find(this.ea.broker, (r) => {
                return r == item.broker
            }));
            this.tmpPrice = this.ea.price
        },
        async getDiscount() {
            let dis = await Core.getHttp(`/api/webconfig/promotion/?code=${this.discount}&is_active=true`)
            if (dis.length > 0) {
                this.myDiscount = dis[0]
                this.oldPrice = this.ea.price
                this.ea.price = this.ea.price - this.myDiscount.discount
                this.discountActive = true
            } else {

                this.discountActive = false
            }
        },

        async usePointFeed() {
            if (this.usePoint <= this.point.current) {
                this.ea.price = this.ea.price - (this.usePoint * this.setting.point_to_us)
                console.log((this.usePoint * this.setting.point_to_us));
                this.runUsePoint = true
                this.error.point = null
            } else if (this.ea.price < 0) {
                if (this.oldPrice > 0) {
                    this.ea.price = this.oldPrice
                } else {
                    this.ea.price = this.tmpPrice
                }
            } else {
                if (this.oldPrice > 0) {
                    this.ea.price = this.oldPrice
                } else {
                    this.ea.price = this.tmpPrice
                }
                this.error.point = 'More than Point'
            }
        },

        async store() {
            let ac_type = _.find(this.accLists, {
                id: this.form.account_type
            })
            let broker = _.find(this.broker, {
                id: ac_type.id
            })
            this.form.code = 'EA' + Date.now()
            this.form.broker = broker.id
            this.form.product = this.ea.id
            this.form.user = this.user.id
            this.form.use_point = this.usePoint
            if (this.myDiscount.id) {
                this.form.use_promotion = this.myDiscount.discount
                this.form.promotion = this.myDiscount.id
            }

            let data = await Core.postHttpAlert(`/api/ea/order/`, this.form)
            if (data.id) {
                if (this.usePoint > 0) {
                    await Auth.cutPoint(this.usePoint)
                    await Auth.logPoint(`EA ${this.ea.name} Use Point `, this.form.point, 1)
                    this.dialog = false
                }
            } else {

            }

            // {
            //   "code": "",
            //   "status": null,
            //   "remark": "",
            //   "user": null,
            //   "product": null,
            //   "broker": null,
            //   "account_type": null
            // }
        }

    },
    computed: {
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

<style scoped>

</style>
