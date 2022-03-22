<template>
<div>
    <template>
        <div class="inline-flex " v-if="response">
            <vs-button floating color="#22c55e" @click="active=!active">
                <v-icon class="mr-2 " size="15">em em-memo</v-icon>
                Add Account
            </vs-button>
            <vs-dialog prevent-close v-model="active">
                <template #header>
                    <h3 class="not-margin mt-6">
                        <v-icon size="20" class="me-3">em em-chart_with_upwards_trend</v-icon>
                        <b>Add Trading Account</b>
                    </h3>
                </template>

                <div class="con-form">
                    <v-container>
                        <form @submit.prevent="store()">
                            <v-alert outlined dense   type="info" prominent border="left" >
                                The account number must be the number registered with the IB only.</v-alert>
                            <v-text-field oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" required label="Account No" v-model="form.account_no" prepend-inner-icon="em em-1234" hint="For example, 222 444" outlined></v-text-field>
                            <v-select @change="checkAccount()" item-text="name" item-value="id" persistent-hint  v-model="form.broker" prepend-inner-icon="em em-chart" :items="broker"   outlined label="Brokers" required></v-select>
                            <v-select item-text="name" item-value="id" persistent-hint  v-model="form.account_type" prepend-inner-icon="em em-moneybag" :items="accounttype"  outlined label="Account Type"></v-select>

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
export default {
    data: () => ({
        accounttype: [],
        broker: [],
        active: false,
        listAccountType : [],
        form: {},
      response:false,
    }),
    async created() {
      await  this.startup()
      this.response = true;
    },
    methods: {
        async startup() {
            this.listAccountType = await Forex.getAccountType()
            this.broker = await Forex.getBroker()
        },
        async store() {
            this.form.user = Auth.user.id
            this.form.broker_no = moment().format('DDMMYYhhmmss')
            let add = await Core.postHttpAlert(`/api/finance/brokeraccount/`, this.form)
            this.active = false;
            location.reload();
        },
      async checkAccount(){
          let brokerAccounts = await Core.getHttp(`/api/finance/accounttype/`)
          let inBroker = _.find(this.broker,{id:this.form.broker})
        this.accounttype =   _.reject(brokerAccounts, (item) => _.find(inBroker.types, (r) => {
          return r == item.id
        }));
      }

    },
    computed: {

    },

}
</script>

<style scoped>

</style>
