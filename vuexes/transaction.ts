import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import _ from "lodash"
import {Core} from '@/vuexes/core'
import axios from  '@/plugins/axios'

class TransactionModule extends VuexModule{

    public async getStatusPoint (){
         return await Core.getHttp('/api/account/userpoint/')
    }
    public async getRewardHistory (){
        return await Core.getHttp('/api/store/rewardhistory/')
   }

}
import store from "@/vuexes"
export const Transaction = new TransactionModule({store, name: "Transaction"})