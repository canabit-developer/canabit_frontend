import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import _ from "lodash"
import {Core} from '@/vuexes/core'
import axios from  '@/plugins/axios'

class IndicatorsModule extends VuexModule{

    public async getIndicatorProduct(){
         return await Core.getHttp('/api/indicator/product/')
    }

}
import store from "@/vuexes"
export const Indicators = new IndicatorsModule({store, name: "Indicators"})