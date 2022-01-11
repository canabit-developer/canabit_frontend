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
            <p class="text-2xl font-weight-semibold text--primary mb-2 text-center ">
                Welcome to Cannabit! 👋🏻
            </p>
            <p class="mb-2">
                Please sign-in to your account and start the adventure
            </p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
            <form @submit.prevent="login">
                <v-text-field v-model="form.login" required color="primary" outlined label="Username" placeholder="email,phone number" hide-details class="mb-3"></v-text-field>
                <br>
                <v-text-field v-model="form.password" required color="primary" outlined :type="isPasswordVisible ? 'text' : 'password'" label="Password" placeholder="············" :append-icon="isPasswordVisible ? `mdi-eye-off-outline` : `mdi-eye-outline`" hide-details @click:append="isPasswordVisible = !isPasswordVisible"></v-text-field>

                <div class="d-flex align-center justify-space-between flex-wrap">
                    <v-spacer></v-spacer>

                    <router-link class="mt-1" :to="{path:'/auth/forgot'}">
                        Forgot Password?
                    </router-link>
                </div>

                <v-btn type="submit" x-large dark block class="bg-primary-g mt-6">
                    Login
                </v-btn>
            </form>
        </v-card-text>

        <!-- create new account  -->
        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
            <span class="me-2">
                New on our platform?
            </span>
            <router-link class="font-semibold" :to="{path:'/auth/register'}">
                Create an account
            </router-link>
        </v-card-text>

        <!-- divider -->
        <v-card-text class="d-flex align-center mt-2">
            <v-divider></v-divider>
            <span class="mx-5">or</span>
            <v-divider></v-divider>
        </v-card-text>

        <!-- social links -->
        <v-card-actions class="flex flex-col w-full">
            <Auth-SocialLogin @callback="callback"></Auth-SocialLogin> <br>
      
        </v-card-actions>
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
    data: () => {
        return ({
            isPasswordVisible: false,
            form: {},
        })
    },
    async created() {
     
    },
    methods: {
        async login(alert = true) {
            let signin = await Auth.login(this.form)
            if (signin.token) {
                await Auth.storeToken(signin.token)
                await Auth.storeTokenToStorage(signin.token)
                await this.$router.replace(`/`)
                return true
            } else {
                if (alert) {
                    await Web.onSnack(signin.detail, 'red accent-2')
                }
                return false
            }
        },
        async callback(user) { 
            this.form = user.login
            let logined = await this.login(false)
            if (!logined) {
                await Web.switchLoad(true)
                let registerUser = await Auth.register(user.register)
                await Web.switchLoad(false)
                await this.$router.replace(`/auth/verify`)
                console.log(registerUser);
            }
            console.log(user);
        }
    }
}
</script>

<style lang="scss">
@import '@/plugins/vuetify/preset/pages/auth.scss';
</style>
