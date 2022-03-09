import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import _ from "lodash"
import {Core} from '@/vuexes/core'
import axios from  '@/plugins/axios'

class CopyTradeModule extends VuexModule{

    public async getCopytradeProduct(){
         return await Core.getHttp('/api/copytrade/product/')
    }

}
import store from "@/vuexes"
export const CopyTrade = new CopyTradeModule({store, name: "CopyTrade"})