<template>
<div>
    <h1>Signals </h1>
    <vs-row w="12"  class="mt-5">
        <vs-clos  v-for="col,index in 6" :key="index" class="p-5" w="3">
            <vs-card>
                <template #title>
                    <h3>Pot with a plant</h3>
                </template>
                <template #img>
                    <img src="/foto5.png" alt="">
                </template>
                <template #text>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                </template>
                <template #interactions>
                    
                </template>
            </vs-card>
        </vs-clos>
    </vs-row>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
