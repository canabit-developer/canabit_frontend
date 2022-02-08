<template>
<div>
    <div class="font-sans bg-white flex flex-col min-h-screen w-full">
        <div>
            <div class="bg-purple-400 md:overflow-hidden">
                <div class="px-4 py-16">
                    <div class="relative w-full md:max-w-2xl md:mx-auto text-center">
                        <h1 class="font-bold text-white text-xl sm:text-2xl md:text-5xl leading-tight mb-6">
                            A simple and smart tool that will help grow your business
                        </h1>

                        <p class="text-white md:text-xl md:px-18">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit hello.
                        </p>

                        <div class="center inline-flex mt-5">
                            <Forex-InfoAccount></Forex-InfoAccount>
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

            <div class="max-w-4xl mx-auto bg-white shadow-lg relative z-20 hidden md:block" style="margin-top: -320px; border-radius: 20px;">
                <div class="h-5 w-5 rounded-full bg-purple-500 absolute top-0 left-0 -ml-32 mt-12" style="z-index: -1;"></div>

            </div>

            <Forex-TableAccount></Forex-TableAccount>

        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
