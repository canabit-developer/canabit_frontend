<template>
<div class="bg-gray-100">
    <Core-BgProfile></Core-BgProfile>
    <div class="relative  md:m-24 mt-20">
        <div>
            <Core-Title :image="require('~/static/png/034-designthinking.png')" title="Account Setting" :paths="[{name:'Account Setting',link:null}]" ></Core-Title>
        
            <div class=" bg-white     rounded-xl  ">
                <div class="p-2 rounded-xl shadow-md bg-white   ">
                    <v-tabs v-model="tab" show-arrows grow>
                        <v-tab>
                            <v-icon size="20" class="me-3">em em-bust_in_silhouette</v-icon> Account
                        </v-tab>
                        <v-tab-item>
                            <Account-Profile></Account-Profile>
                        </v-tab-item>
                        <v-tab>
                            <v-icon size="20" class="me-3">em em-lock</v-icon> Password
                        </v-tab>
                        <v-tab-item>
                            <Account-ResetPassword></Account-ResetPassword>
                        </v-tab-item>
                        <v-tab>
                            <v-icon size="20" class="me-3">em em-exclamation </v-icon> KYC
                        </v-tab>
                        <v-tab-item>
                            <Account-Kyc></Account-Kyc>
                        </v-tab-item>
                        <v-tab>
                            <v-icon size="20" class="me-3"></v-icon> Partner
                        </v-tab>
                        <v-tab-item>
                            <Account-Partner></Account-Partner>
                        </v-tab-item>
                    </v-tabs>

                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: () => {
        return ({
            tab: 2
        })
    }
}
</script>

<style>

</style>
