<template>
<div class="bg-gray-100">
    <Core-BgProfile></Core-BgProfile>
    <div class="relative  md:m-24 mt-20">
        <Core-Title :image="require('~/static/png/speedometer.png')" title="Indicator Product" :paths="[{name:'Indicator Product',link:null}]"></Core-Title>
      
        <div class="mt-3">
            <Signals-ListSignals></Signals-ListSignals>
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
