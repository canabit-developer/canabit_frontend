<template>
<div class="space-y-16 mt-2 ">
    <div :style="`background:${tier.color};`"  
    class="mt-4 md:max-w-xl w-96 h-60 m-auto rounded-xl relative text-white shadow-lg transition-transform transform hover:scale-110 ">

        <div class="w-full px-8 absolute top-4">
          <div class="">
                <div class="ml-20 flex justify-between">
                    <p class=" font-light tracking-widest text-sl">
                      <v-icon class="mr-4" size="20" dark >em em-credit_card</v-icon>
                        My Point
                    </p>
                </div>
            </div>

            <div class="">
                <div class="  flex justify-between">
                    <p class="font-light">
                      <v-icon class="mr-2" size="15">em em-male-technologist</v-icon>
                        Name
                    </p>
                    <p class="font-medium tracking-widest">
                        {{user.first_name}} 
                    </p>
                </div>

            </div>
            <div class="pt-1 flex justify-between">
                <p class="font-light">
                  <v-icon size="25" dark >mdi-bitcoin</v-icon>
                    Point
                </p>
                <p class="font-medium tracking-more-wider">
                    {{$comma(point.current)}}
                </p>
            </div>
            <div class="flex justify-between mt-4">
                <div class="">
                    <p class="font-light text-xs">
                      <v-icon class="mr-2" size="13" >em em-second_place_medal</v-icon>
                        Current Tier

                        <p class="ml-8 font-medium tracking-wider text-sm">
                            {{tier.name}}
                        </p>
                </div>
                <div class="">
                    <p class="font-light text-xs text-xs">
                      <v-icon class="mr-2" size="13" >em em-sports_medal</v-icon>
                        Next Tier

                        <p class="ml-8 font-medium tracking-wider text-sm">
                            {{nextTier.name}}
                        </p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {Auth} from '@/vuexes/auth'
import _ from 'lodash'
export default {
  data () {
    return ({
      nextTier:{}
    })
  },
  async created(){
    await this.startup();
  },
  methods: {
      async startup(){
        await this.getNextTier()
      },
    async getNextTier(){
     let next = _.filter(this.tiers,(r)=>{return r.length > this.tier.length})
      if(next.length > 0){
        this.nextTier = next[0]
      }else{
        this.nextTier = {name : '-'}
      }
    }

  },
  computed:{
      user:()=>{return Auth.user},
      point:()=>{return Auth.point},
      tier:()=>{return Auth.tier},
      tiers:()=>{return Auth.tiers},

  }
}
</script>

<style>

</style>
