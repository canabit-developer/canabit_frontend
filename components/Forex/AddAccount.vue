<template>
<div>
    <template>
        <div class="  " v-if="response">
            <v-toolbar color="transparent" flat>
                <v-spacer></v-spacer>
                <vs-button floating color="#22c55e" @click="active=!active">
                <v-icon class="mr-2 " size="15">em em-memo</v-icon>
                {{$t('fx').add}}
            </vs-button>
            </v-toolbar>
            <vs-dialog prevent-close v-model="active">
                <template #header>
                    <h3 class="not-margin mt-6">
                        <v-icon size="20" class="me-3">em em-chart_with_upwards_trend</v-icon>
                        <b>{{$t('fx').headerdialog}}</b>
                    </h3>
                </template>

                <div class="con-form">
                    <v-container>
                        <form @submit.prevent="store()">
                            <v-alert outlined dense type="info" prominent border="left">
                                {{$t('fx').noti}}</v-alert>
                            <v-text-field oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" required label="Account No" v-model="form.account_no" prepend-inner-icon="em em-1234" hint="For example, 222 444" outlined></v-text-field>
                            <v-select @change="checkAccount()" item-text="name" item-value="id" persistent-hint v-model="form.broker" prepend-inner-icon="em em-chart" :items="broker" outlined label="Brokers" required></v-select>
                            <v-select item-text="name" item-value="id" persistent-hint v-model="form.account_type" prepend-inner-icon="em em-moneybag" :items="accounttype" outlined label="Account Type"></v-select>

                            <vs-button v-if="form.broker && form.account_type" type="submit" block floating color="#4ade80">
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
import _ from "lodash";
import {
    Web
} from '~/vuexes/web'
export default {
    data: () => ({
        accounttype: [],
        broker: [],
        active: false,
        listAccountType: [],
        form: {},
        myBrokers: [],
        response: false,
    }),
    async created() {
        await this.startup()
        this.response = true;
    },
    methods: {
        async startup() {
            this.listAccountType = await Forex.getAccountType()
            this.broker = await Forex.getBroker()
            // this.myBrokers = await Core.getHttp(`/api/finance/brokeraccount/?user=${Auth.user.id}${this.filterAccountType}${this.filterBroker}`)

        },
        async handleAccountType() {
            let data = await Core.getHttp(`/api/finance/brokeraccount/?broker=${this.form.broker}&account_type=${this.form.account_type}&status=1&user=${Auth.user.id}`)
            
            return (data.length > 0) ? false : true
        },

        async store() {
            let check = await this.handleAccountType()
            let form  = this.form
            this.active = false 
            if (check) {
                form.user = Auth.user.id
                form.broker_no = moment().format('DDMMYYhhmmss')
                let add = await Core.postHttpAlertAccount(`/api/finance/brokeraccount/`,form)
                this.active = false;
                if (add.id) {
                   await location.reload();
                }
            }else{
                await Web.alert(`Account No is exist.`,'error')
                this.active = true;
            }

        },
        async checkAccount() {
            let brokerAccounts = await Core.getHttp(`/api/finance/accounttype/`)
            let inBroker = _.find(this.broker, {
                id: this.form.broker
            })
            this.accounttype = _.reject(brokerAccounts, (item) => _.find(inBroker.types, (r) => {
                return r == item.id
            }));
        }

    },
    computed: {

    },
    watch: {
        active(val) {
            this.form = {}
        }
    }

}
</script>

<style scoped>

</style>
