<template>
<div>
    <div class=" bg-green-400 flex justify-center items-center "  v-if="response && vote.id">
        <div class="absolute w-60 h-60 rounded-xl bg-green-300 top-1/3 mt-16  -left-16 z-0 transform rotate-45 hidden md:block">
        </div>
        <div class="absolute w-48 h-48 rounded-xl bg-green-300  -bottom-6 -right-10 transform rotate-12 hidden md:block">
        </div>
        <div class="max-w-6xl mx-auto md:px-6 px-4">
            <div class="md:py-20 py-12">
                <div class="md:pb-20 pb-12 max-w-3xl mx-auto text-center ">
                    <h2 class="md:text-6xl text-4xl text-white dark:text-white font-bold mb-4">Reward Voting</h2>
                    <p class="text-xl text-white dark:text-white">Customers can bring their points to win prizes with us.where a minimum of 50 points will be counted as a vote 1 time which customers can vote Products can be slowed until their own points are exhausted.</p>
                </div>
                <div class="text-center mb-10">
                    <span class="inline-block w-1 h-1 rounded-full bg-white ml-1"></span>
                    <span class="inline-block w-3 h-1 rounded-full bg-white ml-1"></span>
                    <span class="inline-block w-40 h-1 rounded-full bg-white ml-1"></span>
                    <span class="inline-block w-3 h-1 rounded-full bg-white ml-1"></span>
                    <span class="inline-block w-1 h-1 rounded-full bg-white ml-1"></span>
                </div>
            </div>
            <div v-if="vote">

            <Reward-Countdown  :vote="vote" ></Reward-Countdown>
            <div class="mt-5">
              <Reward-List :vote="vote"></Reward-List>
            </div>
            </div>
        </div>
        <div class="w-40 h-40 absolute bg-green-300 rounded-full top-1/3 mt-24  right-12 hidden md:block"></div>
        <div class="w-20 h-40 absolute bg-green-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
        </div>
    </div>
    <div v-else>
        <img src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/273214837_395383259019790_558937949465519379_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeEi2X_-ZhHBPD8rY_U8Op0hdexDfCqWOrt17EN8KpY6u2X9PR0aNmOKe5p66EE_AZLUVUvaHC2gnb97qnGHWbwi&_nc_ohc=RV5jsCNLH7QAX-RWMk8&_nc_ht=scontent.fcnx3-1.fna&oh=00_AT8bjj1cfmXB6mzzaZ2woaPgNgICvcVWChdsnOp-B_jsZw&oe=624B4179" alt="">
    </div>
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
    data: () =>{
        return ({
            vote:{},
          response:false,
        })
    },
    methods:{
      async startup(){
        let votes = await Core.getHttp(`/api/vote/votemode/?is_active=true`)
        if(votes.length > 0){
          this.vote = votes[votes.length - 1];
        }

      }
    },
  async created(){
    await this.startup();
    this.response = true
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

<style>

</style>
