<template>
<div>
    <div class="font-sans bg-white flex flex-col min-h-screen w-full">
        <div class="bg-green-400 rounded-xl md:overflow-hidden">
            <div class="px-4 py-16">
                <div class="relative w-full md:max-w-2xl md:mx-auto text-center">
                    <h1 class="font-bold text-white text-xl sm:text-2xl md:text-5xl leading-tight mb-6">
                        Free products! For Cash Back members
                    </h1>

                    <p class="text-white md:text-xl md:px-18">
                        Signals are forex trading indicators that can give you information about your trades. Including telling the trend of which direction the candlestick is going, as well as some indicators that can tell the point where you will open a buy order. Or sell orders as well. Indicators are often called by another name "Indy".
                    </p>

                    <div class="hidden md:block h-40 w-40 rounded-full bg-green-500 absolute right-0 bottom-0 -mb-64 -mr-48 "></div>
                    <div class="hidden md:block h-5 w-5 rounded-full bg-green-500 absolute top-0 right-0 -mr-40 mt-32"></div>

                    <div class="text-center mb-10 mt-10">
                        <span class="inline-block w-1 h-1 rounded-full bg-white ml-1"></span>
                        <span class="inline-block w-3 h-1 rounded-full bg-white ml-1"></span>
                        <span class="inline-block w-40 h-1 rounded-full bg-white ml-1"></span>
                        <span class="inline-block w-3 h-1 rounded-full bg-white ml-1"></span>
                        <span class="inline-block w-1 h-1 rounded-full bg-white ml-1"></span>
                    </div>
                </div>
            </div>

            <svg class="fill-current bg-green-400 text-white hidden md:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill-opacity="1" d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
            </svg>
        </div>
        <div class="max-w-4xl mx-auto bg-white shadow-lg relative  hidden md:block" style="margin-top: -320px; border-radius: 20px;">
            <div class="h-20 w-20 rounded-full bg-green-500 absolute top-0 left-0 -ml-64 -mt-16" style="z-index: -1;"></div>
            <div class="h-5 w-5 rounded-full bg-green-500 absolute top-0 left-0 -ml-32 mt-12" style="z-index: -1;"></div>
            <div class="hidden md:block h-24 w-24 rounded-full bg-green-500 absolute top-0 right-0 -mr-40 mt-32"></div>
        </div>
        <div class="hidden md:block h-40 w-40 rounded-full bg-green-500 absolute right-0 bottom-0 -mb-64 -mr-48 "></div>

        <vs-row w="12" class="-mt-4" justify="center">
            <div v-for="indicator,index in indicator" :key="index" class="p-5" w="3">
                <vs-card>
                    <template #title>
                        <h3>{{indicator.name}}</h3>
                    </template>
                    <template #img>
                        <img :src="$url+indicator.image" alt="">
                    </template>
                    <template #text>
                        <div class="h-16 mt-2">
                            <p class="textellipsis">
                                {{indicator.detail}}
                            </p>
                        </div>

                        <vs-button @click="order(indicator)" block floating class="btn-chat mt-3" color="#4ade80">
                            <span class="span">
                                <v-icon color="#ffff" class="mr-2">mdi-cloud-download-outline</v-icon>
                                Download
                            </span>
                        </vs-button>
                    </template>
                    <template #interactions>
                        <div>
                            <vs-button success>
                                Price : Free
                            </vs-button>
                        </div>
                    </template>
                </vs-card>
            </div>
        </vs-row>
        <pre>{{indicator}}</pre>
    </div>
</div>
</template>

<script>
import {
    Auth
} from '~/vuexes/auth'
import {
    Core
} from '~/vuexes/core'
import {
    Product
} from '~/vuexes/product'
export default {
    data: () => ({
        indicator: [],
    }),
    async created() {
        this.startup()
    },
    methods: {
        async startup() {
            this.indicator = await Product.getIndicatorProduct()
        },
        async order(indicator) {
            window.open(indicator.link);
            let form = {
                "code": 'IN' + Date.now(),
                "user": this.user.id,
                "product": indicator.id
            }
            let data = await Core.postHttpAlert(`/api/indicator/order/`, form)
            if (data.id) {
                this.$router.push('/accountstatus')
            }
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
    },
}
</script>

<style>
.textellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
</style>
