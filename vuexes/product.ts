import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import _ from "lodash"
import {Core} from '@/vuexes/core'
import axios from  '@/plugins/axios'

class ProductModule extends VuexModule{

    public async getEAProduct(){
         return await Core.getHttp('/api/ea/product/')
    }
    public async getIndicatorProduct(){
        return await Core.getHttp('/api/indicator/product/')
   }
   public async getCopytradeProduct(){
        return await Core.getHttp('/api/copytrade/product/')
}
  

}
import store from "@/vuexes"
export const Product = new ProductModule({store, name: "Product"})