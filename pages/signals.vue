<template>
<div>
    <h2 class="text-xl font-semibold"> <v-icon class="mr-2" size="20">em em-arrow_double_down</v-icon> INDICATOR PRODUCT</h2>
    <ul class="breadcrumb mt-3">
        <li><a @click="$router.push('/')" href="#">Home</a></li>
        <li>Indicator</li>
    </ul>
    <div class="mt-3">
        <Signals-ListSignals></Signals-ListSignals>
    </div>

</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
