<template>
<div>
    <div class="p-2 rounded-xl shadow-md bg-white  mb: -mt-24">
        <v-col justify-center>
            <div class="bg-white w-full p-6">
                <div class="pb-3">
                    <div class="flex justify-between">
                        <div class="flex items-start">
                            <v-avatar tile size="150" class="m-5">
                                <img src="@/assets/misc/gri.png">
                            </v-avatar>
                            <div class="m-5">
                                <div class="pb-2 font-bold">Semi Auto</div>
                                <div class="text-xs text-gray-400 leading-6">Price : 140 $</div>
                                <div class="text-xs text-gray-400 leading-6">ระบบ High Risk</div>
                            </div>
                        </div>
                        <div class="text-right text-sm leading-7">
                            <div class="flex flex-wrap justify-center m-5">
                                <div class="inline-flex ">
                                    <vs-button class="btn-chat" color="#0052F9" @click="active=!active">
                                        <span class="span">
                                            Purchase
                                        </span>
                                    </vs-button>
                                    <vs-dialog prevent-close v-model="active">
                                        <template #header>
                                            <h4 class="not-margin">
                                                <b>Purchase</b>
                                            </h4>
                                        </template>

                                        <div class="con-form">
                                            <v-container>
                                                <v-form>
                                                    <v-row>
                                                        <v-col cols="12" sm="6" md="6">
                                                            <v-text-field label="Account No" hint="For example, flowers or used cars" outlined></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="6">
                                                            <v-text-field label="Discount" hint="For example, flowers or used cars" outlined></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="6">
                                                            <v-text-field label="Point" hint="For example, flowers or used cars" outlined></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6">
                                                            <h1 class="text-4xl font-semibold leading-9 text-green-400 text-center">Total Price : 140 $</h1>
                                                        </v-col>
                                                    </v-row>
                                                </v-form>

                                            </v-container>
                                        </div>
                                        <template #footer>
                                            <div class="footer-dialog">
                                                <vs-button block>
                                                    Submit Purchase
                                                </vs-button>

                                                <div class="new">

                                                </div>
                                            </div>
                                        </template>
                                    </vs-dialog>
                                </div>
                                <div class="inline-flex ">
                                    <vs-button class="btn-chat" color="#FF964A" @click="active1=!active1">
                                        <span class="span">
                                            Request test
                                        </span>

                                    </vs-button>
                                    <vs-dialog prevent-close v-model="active1">
                                        <template #header>
                                            <h4 class="not-margin">

                                            </h4>
                                        </template>

                                        <div class="con-form">
                                            <h1 class="text-4xl font-semibold leading-9 text-green-400 text-center">Free for request test!</h1>
                                            <p class="text-base leading-normal text-center text-green-400 mt-6">
                                                Please check the download link to the email. <br />
                                            </p>
                                        </div>

                                        <template #footer>
                                            <div class="footer-dialog">
                                                <vs-button block color="#17c964">
                                                    Submit Request Test
                                                </vs-button>
                                            </div>
                                        </template>
                                    </vs-dialog>
                                </div>

                            </div>
                        </div>

                    </div>
                    <h2 class="font-bold text-3xl  ml-10 mt-8">
                        Details
                    </h2>

                    <p class="font-light  text-sm ml-10 mt-5">
                        This is the easiest indicator to use. Can be used on all currency pairs and all timeframes.
                        Recommendation: should be used in conjunction with different techniques, should not use a single indicator in trading such as using
                        Along with Trend line techniques, Fibonacci,Dow Theory,Harmonic

                    </p>

                    <v-row justify="center">
                        <v-col v-for="n in 2" :key="n" class="d-flex child-flex " cols="4">
                            <img src="@/assets/misc/image86.png" aspect-ratio="1" class="rounded-lg">
                        </v-col>
                    </v-row>

                    <p class="font-light  text-sm ml-10 mt-5">
                        This is the easiest indicator to use. Can be used on all currency pairs and all timeframes.
                        Recommendation: should be used in conjunction with different techniques, should not use a single indicator in trading such as using
                        Along with Trend line techniques, Fibonacci,Dow Theory,Harmonic

                    </p>
                    <p class="font-light  text-sm ml-10 mt-5">
                        This is the easiest indicator to use. Can be used on all currency pairs and all timeframes.
                        Recommendation: should be used in conjunction with different techniques, should not use a single indicator in trading such as using
                        Along with Trend line techniques, Fibonacci,Dow Theory,Harmonic

                    </p>

                </div>
            </div>

        </v-col>

    </div>
</div>
</template>

<script>
export default {
    data: () => ({
        active: false,
        active1: false,
        input1: '',
        input2: '',
        checkbox1: false,
        select: null,
    }),
}
</script>

<style>

</style>
