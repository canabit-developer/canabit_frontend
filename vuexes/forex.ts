import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import _ from "lodash"
import {Core} from '@/vuexes/core'
import axios from  '@/plugins/axios'

class ForexModule extends VuexModule{

    public async getAccountForex(){
        return await Core.getHttp('/api/finance/brokeraccount/')
    }
}


import store from "@/vuexes"
export const Forex = new ForexModule({store, name: "Forex"})