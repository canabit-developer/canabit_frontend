<template>
<div>
    <template>
        <div class="inline-flex ">
            <vs-button floating color="#22c55e" @click="active=!active">
                <v-icon class="mr-2" color="#ffff">mdi-text-box-plus-outline</v-icon>
                Add Account
            </vs-button>
            <vs-dialog prevent-close v-model="active">
                <template #header>
                    <h4 class="not-margin">
                        <b>Add trading account</b>
                    </h4>
                </template>

                <div class="con-form">
                    <v-container>
                        <v-form>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <v-text-field label="Account No" v-model="form.accountno" hint="For example, flowers or used cars" outlined></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-select persistent-hint hint="www.example.com/page" v-model="selectbroker" :items="broker" :error-messages="selectErrors" outlined label="Brokers" required></v-select>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-select persistent-hint hint="www.example.com/page" v-model="selectaccounttype" :items="accounttype" :error-messages="selectErrors" outlined label="Account Type"></v-select>
                                </v-col>
                            </v-row>
                        </v-form>

                    </v-container>

                </div>
                <template #footer>
                    <div class="footer-dialog">
                        <vs-button block floating color="#4ade80">
                            + Add  Account
                        </vs-button>
                    </div>
                </template>
            </vs-dialog>
        </div>
    </template>
</div>
</template>

<script>
import {
    Core
} from '@/vuexes/core'
import {
    Forex
} from '~/vuexes/forex'

export default {
    data: () => ({
        accounttype: [],
        broker: [],

        active: false,
        input1: '',
        input2: '',
        select: null,
        accountno: {},
        selectbroker: {},
        selectaccounttype: {

        },
        form: {
            broker_no: null
        }
    }),
    async created() {
        this.startup()
    },
    methods: {
        async startup() {
            this.accounttype = await Forex.getAccountType()
            this.broker = await Forex.getBroker()
        }
    },
    computed: {

    },

}
</script>

<style scoped>

</style>
