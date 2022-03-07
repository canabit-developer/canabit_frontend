<template>
<div>
    <div class="p-2 rounded-xl shadow-md bg-white  mb: -mt-24">
        <v-col justify-center>
            <div class="bg-white w-full p-6">
                <div class="pb-3">
                    <div class="flex justify-between">
                        <div class="flex items-start">
                             <v-avatar tile size="150" class="m-5">
                                <img src="@/assets/misc/gri.png">
                            </v-avatar>
                            <div class="m-5">
                                <div class="pb-2 font-bold">Semi Auto</div>
                                <div class="text-xs text-gray-400 leading-6">Price : 140 $</div>
                                <div class="text-xs text-gray-400 leading-6">ระบบ High Risk</div>
                            </div>
                        </div>
                        <div class="text-right text-sm leading-7">
                            <div class="flex flex-wrap justify-center m-5">
                                <SemiAuto-FromPurchase></SemiAuto-FromPurchase>
                                <SemiAuto-FromRequestTest></SemiAuto-FromRequestTest>

                            </div>
                        </div>

                    </div>
                    <h2 class="font-bold text-3xl  ml-10 mt-8">
                        Details
                    </h2>

                    <p class="font-light  text-sm ml-10 mt-5">
                        This is the easiest indicator to use. Can be used on all currency pairs and all timeframes.
                        Recommendation: should be used in conjunction with different techniques, should not use a single indicator in trading such as using
                        Along with Trend line techniques, Fibonacci,Dow Theory,Harmonic

                    </p>

                    <v-row justify="center">
                        <v-col v-for="n in 2" :key="n" class="d-flex child-flex "  cols="4">
                            <img  src="@/assets/misc/image86.png" aspect-ratio="1" class="rounded-lg">
                        </v-col>
                    </v-row>

                    <p class="font-light  text-sm ml-10 mt-5">
                        This is the easiest indicator to use. Can be used on all currency pairs and all timeframes.
                        Recommendation: should be used in conjunction with different techniques, should not use a single indicator in trading such as using
                        Along with Trend line techniques, Fibonacci,Dow Theory,Harmonic

                    </p>
                    <p class="font-light  text-sm ml-10 mt-5">
                        This is the easiest indicator to use. Can be used on all currency pairs and all timeframes.
                        Recommendation: should be used in conjunction with different techniques, should not use a single indicator in trading such as using
                        Along with Trend line techniques, Fibonacci,Dow Theory,Harmonic

                    </p>

                </div>

            </div>
        </v-col>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
