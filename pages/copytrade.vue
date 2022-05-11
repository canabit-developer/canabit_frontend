<template>
<div class="bg-gray-100">
    <Core-BgProfile></Core-BgProfile>
    <div class="relative  md:m-24 mt-20">
        <Core-Title :image="require('~/static/png/016-cp.png')" :title="$t('headerpage').copytrade" :paths="[{name:'Copy Trade',link:null}]"></Core-Title>

        <div class="mt-3">
            <CopyTrade-List></CopyTrade-List>
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
