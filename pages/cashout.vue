<template>
<div>
    <div class="font-sans bg-white flex flex-col min-h-screen w-full">
        <div>
            <div class="bg-gray-200 md:overflow-hidden">
                <div class="px-4 py-16">
                    <div class="relative w-full md:max-w-2xl md:mx-auto text-center">
                        <h1 class="font-bold text-gray-700 text-xl sm:text-2xl md:text-5xl leading-tight mb-6">
                            A simple and smart tool that will help grow your business
                        </h1>

                        <p class="text-gray-600 md:text-xl md:px-18">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit hello.
                        </p>

                        <div class="hidden md:block h-40 w-40 rounded-full bg-blue-800 absolute right-0 bottom-0 -mb-64 -mr-48"></div>

                        <div class="hidden md:block h-5 w-5 rounded-full bg-yellow-500 absolute top-0 right-0 -mr-40 mt-32"></div>
                    </div>
                </div>

                <svg class="fill-current bg-gray-200 text-white hidden md:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill-opacity="1" d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                </svg>
            </div>

            <div class="max-w-4xl mx-auto bg-white shadow-lg relative z-20 hidden md:block" style="margin-top: -320px; border-radius: 20px;">
                <div class="h-20 w-20 rounded-full bg-yellow-500 absolute top-0 left-0 -ml-10 -mt-10" style="z-index: -1;"></div>

                <div class="h-5 w-5 rounded-full bg-blue-500 absolute top-0 left-0 -ml-32 mt-12" style="z-index: -1;"></div>

                <div class="h-10 bg-white rounded-t-lg border-b border-gray-100"></div>
                <div class="flex" style="height: 600px;">
                    <Cashout-From></Cashout-From>
                </div>
            </div>

            <div class="px-4 md:hidden">
                <div class="-mt-10 max-w-4xl mx-auto bg-white shadow-lg relative z-20" style="border-radius: 20px;">
                    <div class="h-10 bg-white rounded-t-lg border-b border-gray-100"></div>
                    <div class="flex" style="height: 340px;">
                         <Cashout-From></Cashout-From>
                    </div>
                </div>
            </div>
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
