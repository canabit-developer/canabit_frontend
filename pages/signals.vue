<template>
<div>
    <h2 class="text-xl font-semibold">INDICATOR PRODUCT</h2>
    <ul class="breadcrumb mt-3">
        <li><a @click="$router.push('/')" href="#">Home</a></li>
        <li>Product</li>
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
