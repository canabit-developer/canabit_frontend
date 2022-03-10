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
                        <form @submit.prevent="store()">
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <v-text-field label="Account No" v-model="form.account_no" hint="For example, flowers or used cars" outlined></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-select item-text="name" item-value="id" persistent-hint hint="www.example.com/page" v-model="form.broker" :items="broker" :error-messages="selectErrors" outlined label="Brokers" required></v-select>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-select  item-text="name" item-value="id" persistent-hint hint="www.example.com/page" v-model="form.account_type"  :items="accounttype" :error-messages="selectErrors" outlined label="Account Type"></v-select>
                                </v-col>
                            </v-row>
                              <vs-button type="submit" block floating color="#4ade80">
                            + Add  Account
                        </vs-button>
                        </form>

                    </v-container>

                </div>
                 
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
import {
    Auth
} from '~/vuexes/auth'
import moment from 'moment'
export default {
    data: () => ({
        accounttype: [],
        broker: [], 
        active: false, 
        form: {}
    }),
    async created() {
        this.startup()
    },
    methods: {
        async startup() {
            this.accounttype = await Forex.getAccountType()
            this.broker = await Forex.getBroker()
        },
        async store(){
            this.form.user = Auth.user.id 
            this.form.broker_no = moment().format('DDMMYYhhmmss')
            let add = await Core.postHttpAlert(`/api/finance/brokeraccount/`,this.form)
            this.active = false;
            location.reload();
        }
    },
    computed: {

    },

}
</script>

<style scoped>

</style>
