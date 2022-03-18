<template>
<div>
    <template>
        <div class="inline-flex ">
            <vs-button class="btn-chat" color="#0052F9" @click="active=!active">
                <span class="span">
                    Purchase
                </span>
            </vs-button>
           <v-dialog max-width="500px" persistent v-model="active" v-if="active" >
             <v-card >
               <v-card-title>{{ea.name}} <v-spacer></v-spacer> <v-btn color="red" text @click="dialog =false"><v-icon>mdi-close</v-icon></v-btn> </v-card-title>
               <v-card-text class="p-6">
                 <img :src="$url+ea.image"></img>
                 <h2>{{ea.name}}</h2>
                 <h2>{{ea.sub_title}}</h2>
                 <h2>{{ea.price}}</h2>
                 <h2 v-if="oldPrice" class="line-through ">{{oldPrice}}</h2>
                 <form @submit.prevent="store()">
                   <v-autocomplete v-model="form.account_type" label="Account No"  outlined :items="accLists" item-text="account_no" item-value="id" ></v-autocomplete>
                   <v-alert type="error" v-if="usePoint > point.current">More Than Point</v-alert>
                   <v-alert v-if="usePoint > 0" type="success"> Use Point {{usePoint}}</v-alert>
                   <div class="flex">
                     <v-text-field :disabled="runUsePoint" v-model="usePoint"    label="Point"    hint="For example, flowers or used cars" outlined></v-text-field>
                     <v-btn v-if="(!runUsePoint) && (usePoint != '' && usePoint > '' ) && (usePoint <= point.current)" @click="usePointFeed()">Use</v-btn>
                   </div>


                   <v-alert type="success" v-if="myDiscount.id">
                     Use Promotion {{myDiscount.name}}
                   </v-alert>
                   <div class="flex">
                     <v-text-field :disabled="discountActive" label="Discount" v-model="discount"  hint="For example, flowers or used cars" outlined></v-text-field>
                     <v-btn v-if="  (discount != '')" @click="getDiscount()">Use</v-btn>
                   </div>




                   <v-btn type="submit" > Submit </v-btn>

                 </form>
               </v-card-text>

             </v-card>
           </v-dialog>
        </div>
    </template>
</div>
</template>

<script>
import {
  Core
} from '@/vuexes/core'
import _ from 'lodash'
import {
  Auth
} from '@/vuexes/auth'
export default {
    props:{
      ea:{default:{}}
    },
    data: () => ({
      broker:[],
        active: false,
        form:{},
      accLists:[],
      ea:{},
      discountActive:false,
      discount:'',
      myDiscount:{},
      oldPrice:0,
      usePoint:0,
      runUsePoint:false,
      error:{},
      tmpPrice:0,

    }),
  async created(){
    await this.startup()
  },
    methods:{
      async startup(){
        this.broker = await Core.getHttp(`/api/finance/broker/`)
        this.accLists = await Core.getHttp(`/api/finance/brokeraccount/?user=${this.user.id}`)
        this.accLists = _.reject(this.accLists, (item) => _.find(this.ea.broker, (r)=>{return r == item.broker }));
        this.tmpPrice = this.ea.price
      },
      async getDiscount(){
        let dis = await Core.getHttp(`/api/webconfig/promotion/?code=${this.discount}&is_active=true`)
        if(dis.length > 0){
          this.myDiscount = dis[0]
          this.oldPrice = this.ea.price
          this.ea.price = this.ea.price - this.myDiscount.discount
          this.discountActive = true
        }else{

          this.discountActive = false
        }
      },

      async usePointFeed(){
        if(this.usePoint  <= this.point.current){
          this.ea.price = this.ea.price - (this.usePoint * this.setting.point_to_us )
          console.log((this.usePoint * this.setting.point_to_us ));
          this.runUsePoint = true
          this.error.point = null
        }else if(this.ea.price < 0){
          if(this.oldPrice > 0){
            this.ea.price = this.oldPrice
          }else{
            this.ea.price = this.tmpPrice
          }
        }
        else{
          if(this.oldPrice > 0){
            this.ea.price = this.oldPrice
          }else{
            this.ea.price = this.tmpPrice
          }
          this.error.point = 'More than Point'
        }
      },

      async store(){
        let ac_type = _.find(this.accLists,{id:this.form.account_type})
        let broker = _.find(this.broker,{id:ac_type.id})
        this.form.code =  'EA' + Date.now()
        this.form.broker = broker.id
        this.form.product = this.ea.id
        this.form.user = this.user.id
        this.form.use_point = this.usePoint
        if(this.myDiscount.id){
          this.form.use_promotion = this.myDiscount.discount
          this.form.promotion = this.myDiscount.id
        }

        let data = await Core.postHttpAlert(`/api/ea/order/`,this.form)
        if(data.id){
          if(this.usePoint > 0){
            await Auth.cutPoint(this.usePoint)
            await Auth.logPoint(`EA ${this.ea.name} Use Point `, this.form.point, 1)
            this.dialog = false
          }
        }else{

        }

        // {
        //   "code": "",
        //   "status": null,
        //   "remark": "",
        //   "user": null,
        //   "product": null,
        //   "broker": null,
        //   "account_type": null
        // }
      }


    },
  computed:{
    user:()=>{return Auth.user},
    point:()=>{return Auth.point},
    tier:()=>{return Auth.tier},
    tiers:()=>{return Auth.tiers},
    setting:()=>{return Auth.setting},

  }
}
</script>

<style scoped>

</style>
