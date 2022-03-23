<template>

  <div>
     <h2 class="text-xl font-semibold">COPY TRADE</h2>
     <ul class="breadcrumb mt-3">
        <li><a @click="$router.push('/')" href="#">Home</a></li>
        <li>CopyTrade</li>
    </ul>
    <div class="mt-3">
      <CopyTrade-List></CopyTrade-List>
    </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>