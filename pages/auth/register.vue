<template>
<div>

    <v-card class="auth-card">
        <!-- logo -->
        <v-card-title class="d-flex align-center justify-center py-7">
            <router-link to="/" class="d-flex align-center">
                <img class="h-14" src="~/static/images/logos/canabit_vector.svg" alt="">
            </router-link>
        </v-card-title>

        <!-- title -->
        <v-card-text>
            <p class="text-2xl font-weight-semibold text--primary mb-2 text-center">
                Adventure starts here 🚀
            </p>
            <p class="mb-2 text-center">
                Make your app management easy and fun!
            </p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
            <form @submit.prevent="register()"> 
                <v-text-field v-model="form.username" class="mt-4" prepend-inner-icon="mdi-email-outline" outlined label="Username" hide-details></v-text-field>
                <v-text-field v-model="form.email"  class="mt-4" prepend-inner-icon="mdi-email-outline" outlined label="Email" hide-details></v-text-field>

                <v-text-field v-model="form.first_name" class="mt-4" prepend-inner-icon="mdi-account-outline" outlined label=" Frist Name" hide-details></v-text-field>
                <v-text-field v-model="form.last_name"  class="mt-4" prepend-inner-icon="mdi-account-outline" outlined label=" Last Name" hide-details></v-text-field>
                
                <v-text-field v-model="form.phone_number"  class="mt-4" type="number" outlined prepend-inner-icon="mdi-cellphone" label="Number" hide-details></v-text-field>
                <v-text-field v-model="form.password"  class="mt-4" prepend-inner-icon="mdi-lock-outline" type="password" outlined label="Password" hide-details></v-text-field>

                <v-text-field v-model="form.password_confirm"  class="mt-4" prepend-inner-icon="mdi-lock-outline" type="password" outlined label="Confirm Password" hide-details></v-text-field>
                <!-- <v-text-field class="mt-4" prepend-inner-icon="mdi-lock-outline" outlined label="RefferalCode" hide-details></v-text-field> -->

                <v-btn type="submit" x-large dark block class="bg-primary-g mt-6">
                    Sign Up
                </v-btn>
            </form>
        </v-card-text>

        <!-- create new account  -->
        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2 ">
            <span class="me-2">
                Already have an account?
            </span>
            <router-link :to="{ name:'pages-login' }" class="font-semibold">
                Sign in instead
            </router-link>
        </v-card-text>

    </v-card>

</div>
</template>

<script>
import {
    Core
} from '~/vuexes/core'
import {
    Web
} from '~/vuexes/web'
import {
    Auth
} from '~/vuexes/auth'
 export default {
    layout: 'root',
    data:()=>{
        return ({
            form:{},
        })
    },
    async created(){

    },
    methods:{
        async initial(){

        },
        async register(){
            await Web.switchLoad(true)
            let user = await Auth.register(this.form)
             await Web.switchLoad(false)
            if(user.id){ 
                await Web.alert(`OK`,`success`,`Register is success`)
                await this.$router.replace(`/auth/verify`)
            }else{

            }
        }
    }
}
</script>

<style lang="scss">
@import '@/plugins/vuetify/preset/pages/auth.scss';
</style>
