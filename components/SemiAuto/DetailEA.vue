<template>
<div>
    <div class="p-2 rounded-xl shadow-md bg-white  mb: -mt-24">
        <v-col justify-center>
            <div class="bg-white w-full p-6">
                <div class="pb-3">
                    <div class="flex justify-between">
                        <div class="flex items-start">
                            <v-avatar tile size="150" class="m-5">
                                <img :src="$url+ea.image">
                            </v-avatar>
                            <div class="m-5">
                                <div class="pb-2 font-bold">{{ea.name}}</div>
                                <div class="text-xs text-gray-400 leading-6">Price : {{ea.price}} $</div>
                                <div class="text-xs text-gray-400 leading-6">{{ea.sub_title}} </div>
                            </div>
                        </div>
                        <div class="text-right text-sm leading-7">
                            <div class="flex flex-wrap justify-center m-5">
                                <div class="inline-flex ">
                                  <SemiAuto-FromPurchase :ea="ea"></SemiAuto-FromPurchase>
                                </div>
                                <div class="inline-flex ">
                                  <SemiAuto-FromRequestTest  :ea="ea"></SemiAuto-FromRequestTest>
                                </div>

                            </div>
                        </div>

                    </div>
                    <h2 class="font-bold text-3xl  ml-10 mt-8">
                        Details
                    </h2>
                    <div class="  ml-10 mt-6">
                      <div v-html="ea.detail">

                      </div>
                    </div>


                </div>
            </div>

        </v-col>

    </div>
</div>
</template>

<script>
export default {
    data: () => ({
        active: false,
        active1: false,
        input1: '',
        input2: '',
        checkbox1: false,
        select: null,
    }),
  props:{
      ea:{
        default:{}
      }
  }
}
</script>

<style>

</style>
