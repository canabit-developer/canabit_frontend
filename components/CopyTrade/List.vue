<template>
<div>
    <div class="font-sans bg-white flex flex-col min-h-screen w-full">
        <div Anyone>
            <div class="bg-green-400 rounded-xl md:overflow-hidden">
                <div class="px-4 py-16">
                    <div class="relative w-full md:max-w-2xl md:mx-auto text-center">
                        <h1 class="font-bold text-white text-xl sm:text-2xl md:text-5xl leading-tight mb-6">
                            {{$t('copytrade').header}}
                        </h1>

                        <p class="text-white md:text-xl md:px-18">
                            {{$t('copytrade').body}}
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
                <div class="h-20 w-20 rounded-full bg-green-500 absolute top-0 left-0 -ml-10 -mt-16" style="z-index: -1;"></div>
                <div class="h-5 w-5 rounded-full bg-green-500 absolute top-0 left-0 -ml-32 mt-12" style="z-index: -1;"></div>
            </div>
            <vs-row w="12" class="-mt-5" justify="center">
                <vs-clos v-for="copytradeproduct,index in copytradeproduct" :key="index" class="p-2 mt-2">
                    <vs-card>
                        <template #title>
                            <h3>{{copytradeproduct.name}}</h3>
                        </template>
                        <template #img>
                            <img :src="$url+copytradeproduct.image" alt="">
                        </template>
                        <template #text>
                            <div class="h-16 mt-2">
                                <p class="textellipsis">
                                    {{copytradeproduct.sub_title}}
                                </p>
                            </div>

                            <vs-button block floating color="#4ade80" class="btn-chat mt-5" @click="$router.push(`/detailcopytrade?id=${copytradeproduct.id}`)">
                                <span class="span">
                                    {{$t('copytrade').button}}
                                </span>
                            </vs-button>
                        </template>
                    </vs-card>
                </vs-clos>
            </vs-row>
        </div>
    </div>
</div>
</template>

<script>
 import {
     Product
 } from '~/vuexes/product'
 export default {
     data: () => ({
         copytradeproduct: [],
     }),
     async created() {
         this.startup()
     },
     methods: {
         async startup() {
             this.copytradeproduct = await Product.getCopytradeProduct()
         }
     }
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
