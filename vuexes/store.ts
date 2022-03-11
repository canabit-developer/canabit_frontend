import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import _ from "lodash"
import {Core} from '@/vuexes/core'
import axios from  '@/plugins/axios'

class StoreModule extends VuexModule{

    public async getStoreProduct(){
        return await Core.getHttp('/api/store/product/')
    }
  

}
import store from "@/vuexes"
export const Store = new StoreModule({store, name: "Store"})