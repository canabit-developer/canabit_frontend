import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import _ from "lodash"
import {Core} from '@/vuexes/core'
import axios from  '@/plugins/axios'

class EAModule extends VuexModule{

    public async getEAProduct(){
         return await Core.getHttp('/api/ea/product/')
    }
  

}
import store from "@/vuexes"
export const EA = new EAModule({store, name: "EA"})