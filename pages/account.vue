<template>
<div>
    <v-toolbar color="transparent" flat>
        <h2 class="text-2xl font-semibold">Profile </h2>
    </v-toolbar>
    <vs-card>
    <template #title>
      <h3>Pot with a plant</h3>
    </template>
    <template #img>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="">
    </template>
    <template #text>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
    </template>
    <template #interactions>
      <vs-button danger icon>
        <i class='bx bx-heart'></i>
      </vs-button>
      <vs-button class="btn-chat" shadow primary>
        <i class='bx bx-chat' ></i>
        <span class="span">
          54
        </span>
      </vs-button>
    </template>
  </vs-card>
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

            </v-tab-item>
        </v-tabs> 
    </v-card>
</div>
</template>

<script>
export default {
    data: () => {
        return ({
            tab: 0
        })
    }
}
</script>

<style>

</style>
