<template>
<div class="bg-gray-100">
    <Core-BgProfile></Core-BgProfile>
    <div class="relative  md:m-24 mt-20">
        <Core-Title :image="require('~/static/png/010-workinghours.png')" :title="$t('headerpage').history" :paths="[{name:'History Account',link:null}]"></Core-Title>
 
        <div class="font-sans flex flex-col min-h-screen w-full mt-3">
            <div>
                <div class="bg-green-400 rounded-xl md:overflow-hidden">
                    <div class="px-4 py-16">
                        <div class="relative w-full md:max-w-2xl md:mx-auto text-center">
                            <h1 class="font-bold text-white text-xl sm:text-2xl md:text-5xl leading-tight mb-6">
                               {{$t('historyaccount').header}}
                            </h1>

                            <!-- <p class="text-white md:text-xl md:px-18">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit hello.
                            </p> -->

                            <div class="hidden md:block h-5 w-5 rounded-full bg-green-500 absolute top-0 right-0 -mr-40 mt-32"></div>
                            <div class="text-center mb-10 mt-10">
                                <span class="inline-block w-1 h-1 rounded-full bg-white ml-1"></span>
                                <span class="inline-block w-3 h-1 rounded-full bg-white ml-1"></span>
                                <span class="inline-block w-3 h-1 rounded-full bg-white ml-1"></span>
                                <span class="inline-block w-1 h-1 rounded-full bg-white ml-1"></span>
                            </div>

                        </div>

                    </div>

                    <svg class="fill-current bg-green-400 text-gray-100  hidden md:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill-opacity="1" d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                    </svg>
                </div>

                <div class="max-w-7xl mx-auto bg-white  relative  rounded-xl lg:-mt-96 md:-mt-24">
                    <div class="p-2 rounded-xl shadow-md bg-white  mb: -mt-24">
                        <v-col justify-center>
                            <v-tabs v-model="tab" grow>
                                <v-tab v-for="item in items" :key="item">
                                    {{ item }}
                                </v-tab>
                            </v-tabs>

                            <v-tabs-items v-model="tab">
                                <v-tab-item>
                                    <v-card color="basil" flat>
                                        <HistoryAccount-TableApprove></HistoryAccount-TableApprove>
                                    </v-card>
                                </v-tab-item>
                                <v-tab-item>
                                    <v-card color="basil" flat>
                                        <HistoryAccount-TableReject></HistoryAccount-TableReject>
                                    </v-card>
                                </v-tab-item>
                                <v-tab-item>
                                    <v-card color="basil" flat>
                                        <HistoryAccount-TableRequestTest></HistoryAccount-TableRequestTest>
                                    </v-card>
                                </v-tab-item>
                            </v-tabs-items>
                        </v-col>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            tab: null,
            items: [
                'EA', 'Indicator', 'Request Test'
            ],
        }
    },
    async created() {
        if (this.$route.query.tab) {
            this.tab = Number(this.$route.query.tab)
        }
    }
}
</script>

<style>

</style>
