<template>
<div>
    <template>
        <div class="inline-flex ">
            <vs-button block class="btn-chat" color="#0052F9" @click="active=!active">
                <span class="span">
                    {{$t('copytrade').buttoncopy}}
                </span>
            </vs-button>
            <vs-dialog prevent-close v-model="active" v-if="active">
                <template #header>
                    <h4 class="not-margin">
                        <b>Select Broker</b>
                    </h4>
                </template>

                <div class="con-form">
                    <v-container>

                           <div v-for="broker,index in brokers" :key="index" v-if="broker.is_active">
                              <v-btn @click="openLink(broker.link)" blog x-large class="w-full">
                                <img class="h-10" :src="$url+broker.image">&nbsp; {{broker.name}}
                              </v-btn>
                           </div>
                    </v-container>

                </div>
                <template #footer>

                </template>
            </vs-dialog>
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
import {
  Web
} from '@/vuexes/web'
export default {
  data() {
    return ({
      active:false,

    })
  },
  async created(){
    await this.startup()

  },
  methods: {
    async startup(){

    },
    async openLink(link){
      window.open(link, "_blank");
    }

  },
  props:{
    brokers:{
      default:[]
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
