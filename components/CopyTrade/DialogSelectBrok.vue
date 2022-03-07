<template>
<div>
    <template>
        <div class="inline-flex ">
            <vs-button block class="btn-chat" color="#0052F9" @click="active=!active">
                <span class="span">
                    Copy Master
                </span>
            </vs-button>
            <vs-dialog prevent-close v-model="active">
                <template #header>
                    <h4 class="not-margin">
                        <b>Select Broker</b>
                    </h4>
                </template>

                <div class="con-form">
                    <v-container>
                        <v-row>
                           
                        </v-row>
                    </v-container>

                </div>
                <template #footer>
                   
                </template>
            </vs-dialog>
        </div>
    </template>
</div>
</template>

<script>
export default {
    data: () => ({
        active: false,
        input1: '',
        input2: '',
        checkbox1: false,
        select: null,
    })
}
</script>

<style scoped>

</style>
