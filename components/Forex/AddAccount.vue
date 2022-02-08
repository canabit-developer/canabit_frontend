<template>
<div>
    <template>
        <div class="inline-flex ">
            <vs-button @click="active=!active">
                <v-icon class="mr-2" color="#ffff">mdi-text-box-plus-outline</v-icon>
                Add Account
            </vs-button>
            <vs-dialog prevent-close v-model="active">
                <template #header>
                    <h4 class="not-margin">
                        <b>Add trading account</b>
                    </h4>
                </template>

                <div class="con-form">
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6">
                                <v-text-field label="Your product or service" value="Grocery delivery" hint="For example, flowers or used cars"></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6">
                                <v-text-field label="Your landing page" hint="www.example.com/page" persistent-hint></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6">
                                <v-text-field label="Your product or service" value="Grocery delivery" hint="For example, flowers or used cars" filled></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6">
                                <v-text-field label="Your landing page" hint="www.example.com/page" persistent-hint filled></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6">
                                <v-text-field label="Your product or service" value="Grocery delivery" hint="For example, flowers or used cars" outlined></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6">
                                <v-text-field label="Your landing page" hint="www.example.com/page" persistent-hint outlined></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>

                </div>
                <template #footer>
                    <div class="footer-dialog">
                        <vs-button block>
                            + Add  Account
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
        checkbox1: false
    })
}
</script>

<style scoped>

</style>
