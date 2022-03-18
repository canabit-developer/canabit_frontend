<template>
<div>
    <div>
        <section class="min-h-screen flex items-stretch  ">
            <div class="lg:flex w-1/2 hidden bg-green-400 bg-no-repeat bg-cover relative items-center">
                <div class="w-full px-24 z-10 text-white">
                    <h1 class="text-5xl font-bold text-left tracking-wide">CASH BACK</h1><br><br>
                    <h1 class="text-3xl font-bold text-left tracking-wide">Let’s Trade something amazing today.</h1>
                    <p class="text-2xl my-4">Maybe some text here will help me see it better. Oh God. Oke, let’s do it then. </p>
                </div>
            </div>
            <div class="lg:w-1/2 w-full flex items-center justify-center   md:px-16 px-0 z-0">
                <div class="w-full py-6 z-20">
                  
                    <form @submit.prevent="login" class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                        <h1 class="font-bold text-4xl">Cash Back</h1><br><br>
                        <h1 class=" font-bold text-2xl">
                            Welcome back!
                        </h1>
                        <p>
                            Let's build someting great
                        </p><br>
                          <div>  
                          <div v-if="userCheckError">
                            <v-alert dense outlined text  type="error" :value="true">
                                User not found Please fill out the correct information.
                            </v-alert>
                        </div>
                        <div v-if="error.detail">
                            <v-alert dense outlined text type="error" :value="true">
                                {{error.detail}}
                            </v-alert>
                        </div>
                        <div v-if="errorRegister.email">
                            <v-alert dense outlined text v-for="(message,i) in errorRegister.email" :key="i" type="error" :value="true">
                                {{message}}
                            </v-alert>
                        </div>
                        <div v-if="errorRegister.password">
                            <v-alert dense outlined text v-for="(message,i) in errorRegister.password" :key="i" type="error" :value="true">
                                {{message}}
                            </v-alert>
                        </div>

                        <div v-if="errorRegister.phone_number">
                            <v-alert dense outlined text v-for="(message,i) in errorRegister.phone_number" :key="i" type="error" :value="true">
                                {{message}}
                            </v-alert>
                        </div>
                    </div>
                        <v-text-field prepend-inner-icon="mdi-card-account-details" :rules="[rules.required]" v-model="form.username" required color="primary" outlined label="Username" placeholder="email,phone number" hide-details class="mb-3"></v-text-field>
                        <br>
                        <v-text-field prepend-inner-icon="mdi-form-textbox-password"  :rules="[rules.required]" v-model="form.password" required color="primary" outlined :type="isPasswordVisible ? 'text' : 'password'" label="Password" placeholder="············" :append-icon="isPasswordVisible ? `mdi-eye-off-outline` : `mdi-eye-outline`" hide-details @click:append="isPasswordVisible = !isPasswordVisible"></v-text-field>

                        <v-btn type="submit" x-large dark block class="bg-primary-g mt-6">
                            Login
                        </v-btn>
                        <div class="d-flex align-center justify-space-between flex-wrap mt-4">
                            <p class="mt-1">Don’t have an account?
                                <router-link :to="{path:'/auth/register'}">
                                    Get started
                                </router-link>
                            </p>
                            <v-spacer></v-spacer>
                            <p class="mt-1">
                                <router-link :to="{path:'/auth/forgot'}">
                                    Forgot Password?
                                </router-link>
                            </p>
                        </div>
                    </form>
                    <br>
                    <br>
                    <div class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                        <center>
                            <p>Or Use Social accounts</p>
                        </center>
                        <Auth-SocialLogin @callback="callback"></Auth-SocialLogin> <br>
                    </div>
                </div>

            </div>
        </section>
    </div>
   

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
            form: {
                login: '',
                password: ''
            },
            error: {},
            errorRegister: {},
            userCheckError:false,
            rules: {
              required: value => !!value || 'Required.',
            }
        })
    },
    async created() {
        await Auth.checkUser();
    },
    methods: {
        async login(alert = true) {
            let user = await Core.postHttp(`/api/auth/v2/check/`, this.form)
            if (user.username) {
                this.form.username = user.username
                let signin = await Auth.login(this.form)
                if (signin.key) {
                    await Auth.storeToken(signin.key)
                    await Auth.storeTokenToStorage(signin.key)
                    await this.$router.replace(`/`)
                    this.userCheckError = false
                    return true
                } else {
                    if (alert) {
                        this.error = signin
                    }
                    return false
                }
            }else{
               // alert('sdsd');
                this.userCheckError = true
                console.log(this.userCheckError);
            }
        },
        async callback(user) {
            await Web.switchLoad(true)
            this.form = user.login
            let logined = await this.login(false)
            if (!logined) {

                let registerUser = await Auth.register(user.register)
                if (registerUser.id) {
                    await Web.switchLoad(false)
                    await this.generateKyc(registerUser.id);
                    await this.$router.replace(`/auth/verify`)
                    console.log(registerUser)
                } else {
                    this.errorRegister = registerUser
                    await Web.switchLoad(false)
                }
            } else {
                this.error = logined
            }
            await Web.switchLoad(false)
            console.log(user);
        },

        async generateKyc(userId) {
            let kyc = await Core.postHttp(`/api/account/kyc/`, {
                user: userId
            })
            if (kyc.id) {
                this.$vs.notification({
                    color: 'success',
                    title: 'สร้างข้อมูล KYC สำเร็จแล้ว',
                })
            } else {
                this.$vs.notification({
                    color: 'danger',
                    title: 'สร้างข้อมูล KYC ไม่สำเร็จ',
                })
            }
        },
    }
}
</script>

<style lang="scss">
@import '@/plugins/vuetify/preset/pages/auth.scss';
</style>
