<template>
<div class="space-y-16 mt-2 ">
    <div :style="`background:${tier.color}`"  class="mt-6 md:max-w-xl w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-lg transition-transform transform hover:scale-110 ">

        <div class="w-full px-8 absolute top-8">
            <div class="">
                <div class="flex justify-between">
                    <p class="font-light">
                        Name
                    </p>
                    <p class="font-medium tracking-widest">
                        {{user.first_name}} {{user.last_name}}
                    </p>
                </div>

            </div>
            <div class="pt-1 flex justify-between">

                <p class="font-light">
                    Point
                </p>
                <p class="font-medium tracking-more-wider">
                    {{point.current}}
                </p>
            </div>

            <div class="flex justify-between mt-4">
                <div class="">
                    <p class="font-light text-xs">
                        Current Tier

                        <p class="font-medium tracking-wider text-sm">
                            {{tier.name}}
                        </p>
                </div>
                <div class="">
                    <p class="font-light text-xs text-xs">
                        Next Tier

                        <p class="font-medium tracking-wider text-sm">
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
