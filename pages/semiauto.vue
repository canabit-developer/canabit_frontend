<template>
<div>
    <h2 class="text-xl font-semibold">EA PRODUCT</h2>
    <ul class="breadcrumb mt-3">
        <li><a @click="$router.push('/')" href="#">Home</a></li>
        <li>Product</li>
        <li>EA</li>
    </ul>
    <div class="mt-3">
         <SemiAuto-ListSemiAuto></SemiAuto-ListSemiAuto>
    </div>
   
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
