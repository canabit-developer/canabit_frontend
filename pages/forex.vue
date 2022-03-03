<template>
<div>
    <div class="font-sans bg-white flex flex-col min-h-screen w-full">
        <div>
            <div class="bg-purple-400 rounded-xl md:overflow-hidden">
                <div class="px-4 py-16">
                    <div class="relative w-full md:max-w-2xl md:mx-auto text-center">
                        <h1 class="font-bold text-white text-xl sm:text-2xl md:text-5xl leading-tight mb-6">
                            A simple and smart tool that will help grow your business
                        </h1>

                        <p class="text-white md:text-xl md:px-18">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit hello.
                        </p>
                        <div class="center inline-flex mt-5">
                            <Forex-AddAccount></Forex-AddAccount>
                        </div>

                        <div class="hidden md:block h-40 w-40 rounded-full bg-purple-500 absolute right-0 bottom-0 -mb-64 -mr-48 "></div>

                        <div class="hidden md:block h-5 w-5 rounded-full bg-purple-500 absolute top-0 right-0 -mr-40 mt-32"></div>
                        <div class="text-center mb-10 mt-10">
                            <span class="inline-block w-1 h-1 rounded-full bg-white ml-1"></span>
                            <span class="inline-block w-3 h-1 rounded-full bg-white ml-1"></span>
                            <span class="inline-block w-40 h-1 rounded-full bg-white ml-1"></span>
                            <span class="inline-block w-3 h-1 rounded-full bg-white ml-1"></span>
                            <span class="inline-block w-1 h-1 rounded-full bg-white ml-1"></span>
                        </div>
                    </div>
                </div>

                <svg class="fill-current bg-purple-400 text-white hidden md:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill-opacity="1" d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                </svg>
            </div>

            <div class="max-w-4xl mx-auto bg-white shadow-lg relative z-20 hidden md:block" style="margin-top: -320px; border-radius: 20px;"></div>
            <!-- <Forex-TableAccount></Forex-TableAccount> -->
            <Forex-CardList></Forex-CardList>
        </div>

        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-8 mt-10">
            <div class="text-center pb-12">
                <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                    Account Forex
                </h1>
                <h2 class="text-base font-bold text-indigo-600">
                    We have the best equipment in the market
                </h2>
            </div>
            <v-row class="d-flex align-content-space-between flex-wrap justify-center">
                <v-avatar size="23">
                    <img src="../assets/misc/CENT.png">
                </v-avatar>
                <p class="ml-1">CENT Account</p>
                <v-avatar class="ml-3" size="23">
                    <img src="../assets/misc/MICO.png">
                </v-avatar>
                <p class="ml-1">MICRO Account</p>
                <v-avatar class="ml-3" size="23">
                    <img src="../assets/misc/STAND.png">
                </v-avatar>
                <p class="ml-1">STANDARD Account</p>
                <v-avatar class="ml-3" size="23">
                    <img src="../assets/misc/ZERO.png">
                </v-avatar>
                <p class="ml-1">ZERO SPREAD Account</p>
                <v-avatar class="ml-3" size="23">
                    <img src="../assets/misc/ECN.png">
                </v-avatar>
                <p class="ml-1">ECN Account</p>
                <v-avatar class="ml-3" size="23">
                    <img src="../assets/misc/CRYTRO.png">
                </v-avatar>
                <p class="ml-1">CRYPTO Account</p>
                
            </v-row>
        </div>

    </div>

    <div class="max-w-6xl mx-auto bg-white  relative z-20 rounded-xl  md: -mt-5  lg:-mt-8">
        <div class="p-2 rounded-xl shadow-md bg-white">
            <v-clo justify-center>
                <Forex-TableAccount></Forex-TableAccount>
            </v-clo>

        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style>

</style>
