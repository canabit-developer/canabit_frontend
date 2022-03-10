<template>
<div>
    <div class=" block md:flex">
        <div class="w-full md:w-1/2 p-4 sm:p-6 lg:p-8 bg-white ">
            <div class="space-y-16 mt-2 ">
                <div class="mt-6 md:max-w-xl w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-lg transition-transform transform hover:scale-110 ">
                    <img class="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png">
                    <div class="w-full px-8 absolute top-8">
                        <div class="">
                            <div class="flex justify-between">
                                <p class="font-light">
                                    Name
                                </p>
                                <p class="font-medium tracking-widest">
                                    Karthik P
                                </p>
                            </div>

                        </div>
                        <div class="pt-1 flex justify-between">

                            <p class="font-light">
                                Point Number
                            </p>
                            <p class="font-medium tracking-more-wider">
                                12,345,789 point
                            </p>
                        </div>

                        <div class="flex justify-between mt-4">
                            <div class="">
                                <p class="font-light text-xs">
                                    Valid

                                    <p class="font-medium tracking-wider text-sm">
                                        11/15
                                    </p>
                            </div>
                            <div class="">
                                <p class="font-light text-xs text-xs">
                                    Expiry

                                    <p class="font-medium tracking-wider text-sm">
                                        03/25
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full  md:w-3/5 p-8 bg-white lg:ml-16 ">

            <v-form @submit="cashout()">
                <v-row>
                    <v-col cols="12" md="12">
                        <v-text-field label="Point to Cashout" v-model="form.point" prepend-inner-icon="mdi-alpha-p-circle-outline" outlined dense id="firstname"  hide-details></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12">
                        <v-text-field label="Name" v-model="form.name" prepend-inner-icon="mdi-account" outlined dense id="Name" placeholder="Name" hide-details></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12">
                        <v-text-field label="Bank Account Number" v-model="form.bankcode" prepend-inner-icon="mdi-lock-outline" outlined dense id="firstname" placeholder="Bank Account Number" hide-details></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12">
                        <v-text-field label="Name Bank" v-model="form.bankname" prepend-inner-icon="mdi-bank-transfer" outlined dense id="Name" placeholder="Name Bank" hide-details></v-text-field>
                    </v-col>
                    <vs-button color="primary" class="w-full py-3 mt-6 font-medium">
                        Cashout
                    </vs-button>
                </v-row>
            </v-form>
        </div>
    </div>

</div>
</template>

<script>
import {CashOut} from '~/vuexes/cashout'
export default {
    data:() =>({
        form:{
            point: null,
            name: null,
            bankcode: null,
            bankname:null
        }
    }),
    async created(){
        
    },
    methods:{
        async cashout(){
            await CashOut.postCashout(this.form)
        }
    },
    computed:{

    }
}
</script>
