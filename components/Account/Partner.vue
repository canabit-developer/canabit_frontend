<template>
<div class="m-16">

    <div class="flex flex-wrap overflow-hidden lg:-mx-1 xl:-mx-1">

        <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1">
           <h2>My Partners</h2>
            <v-timeline dense>
                <v-timeline-item v-for="(partner, i) in partners" :key="i" small>
                    <v-toolbar flat>
                        <vs-avatar v-if="$url+partner.image_profile">
                            <img :src="$url+partner.image_profile" alt="">
                        </vs-avatar>
                        <vs-avatar primary v-else>
                            <template #text>
                                {{partner.first_name}}
                            </template>
                        </vs-avatar>
                        <div class="ml-2 flex flex-col">
                            <span class="font-semibold text-green-400"> {{partner.first_name}} {{partner.last_name}}</span>
                            <span class="text-sm">{{partner.email}}</span>
                        </div>
                    </v-toolbar>
                </v-timeline-item>
            </v-timeline>
        </div>
        <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1">
             <h2>My Master</h2>
            <v-timeline dense>
                <v-timeline-item v-for="(master, i) in masters" :key="i" small>
                    <v-toolbar flat>
                        <vs-avatar v-if="$url+master.kyc_image">
                            <img :src="$url+master.kyc_image" alt="">
                        </vs-avatar>
                        <vs-avatar primary v-else>
                            <template #text>
                                {{master.kyc_first_name}}
                            </template>
                        </vs-avatar>
                        <div class="ml-2 flex flex-col">
                            <span class="font-semibold text-green-400"> {{master.kyc_first_name}} {{master.kyc_last_name}}</span>
                            <span class="text-sm">{{master.kyc_email}}</span>
                        </div>
                    </v-toolbar>
                </v-timeline-item>
            </v-timeline>
        </div>
    </div>
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
    data: () => ({
        refferals: {},
        refferalcode: {},
        partners: [],
        masters:[],
        kyc: Auth.kyc,
        user:Auth.user
    }),
    async created() {
        await this.startup()
    },
    methods: {
        async startup() {
            await this.getOrderReferral()
            await this.getMasterReferral()
        },
        async getOrderReferral() {
            this.partners = await Core.getHttp(`/api/account/clientview/?other_referral_code=${this.kyc.refferal_code}&is_active=true`)
        },
        async getMasterReferral() {
            this.masters = await Core.getHttp(`/api/account/checkclientview/?refferal_code=${this.user.other_referral_code}&user__is_active=true`)
        },
    },
}
</script>

<style>

</style>
