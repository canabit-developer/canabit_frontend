<template>
<div>
    <template>
        <div class="inline-flex ">
            <vs-button class="btn-chat" color="#0052F9" @click="active=!active">
                <span class="span">
                    Purchase
                </span>
            </vs-button>
            <vs-dialog prevent-close v-model="active">
                <template #header>
                    <h4 class="not-margin">
                        <b>Purchase</b>
                    </h4>
                </template>

                <div class="con-form">
                    <v-container>
                        <v-form>
                            <v-row>
                                <v-col cols="12" sm="6" md="6">
                                    <v-text-field label="Account No"   hint="For example, flowers or used cars" outlined></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-text-field label="Discount"   hint="For example, flowers or used cars" outlined></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-text-field label="Point"    hint="For example, flowers or used cars" outlined></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <h1 class="text-4xl font-semibold leading-9 text-green-400 text-center">Total Price : 140 $</h1>
                                </v-col>
                            </v-row>
                        </v-form>

                    </v-container>

                </div>
                <template #footer>
                    <div class="footer-dialog">
                        <vs-button block>
                            Submit Purchase
                        </vs-button>

                        <div class="new">

                        </div>
                    </div>
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
