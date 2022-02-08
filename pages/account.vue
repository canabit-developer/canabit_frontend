<template>
<div>
    <v-card id="account-setting-card"> 
        <v-tabs v-model="tab" show-arrows>
            <v-tab>
                <v-icon size="20" class="me-3">mdi-account-outline</v-icon> Account
            </v-tab>
            <v-tab-item> 
                <Account-Profile></Account-Profile>
            </v-tab-item>
            <v-tab>
                <v-icon size="20" class="me-3">mdi-lock-open-outline</v-icon> Security
            </v-tab>
            <v-tab-item>
  <Account-ResetPassword></Account-ResetPassword>
            </v-tab-item>
            <v-tab>
                <v-icon size="20" class="me-3">mdi-information </v-icon> KYC
            </v-tab>
            <v-tab-item>
                <Account-Kyc></Account-Kyc>
            </v-tab-item>
        </v-tabs> 
    </v-card>
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
