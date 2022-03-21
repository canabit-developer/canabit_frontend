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

                    <form @submit.prevent="register()" class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                        <h1 class=" font-bold text-2xl">
                            <v-icon class="mr-2">em em-writing_hand</v-icon>
                            Create your account
                        </h1>
                        <p>
                            Be a part of us by subscribing.
                        </p><br>
                        <div>
                            <div v-if="error.email">
                                <v-alert dense outlined text v-for="(message, i) in error.email" :key="i" type="error" :value="true">
                                    {{ message }}
                                </v-alert>
                            </div>
                            <div v-if="error.password">
                                <v-alert dense outlined text v-for="(message, i) in error.password" :key="i" type="error" :value="true">
                                    {{ message }}
                                </v-alert>
                            </div>
                          <div v-if="error.password_confirm">
                            <v-alert dense outlined text v-for="(message, i) in error.password_confirm" :key="i" type="error" :value="true">
                              {{ message }}
                            </v-alert>
                          </div>

                            <div v-if="error.phone_number">
                                <v-alert dense outlined text v-for="(message, i) in error.phone_number" :key="i" type="error" :value="true">
                                    {{ message }}
                                </v-alert>
                            </div>
                        </div>
                        <v-alert outlined dense shaped type="info" prominent border="left" >
                                Please fill out the information completely.</v-alert>
                        <!-- <v-text-field v-model="form.username" class="mt-4" prepend-inner-icon="mdi-card-account-details" outlined label="Username" hide-details></v-text-field> -->
                        <v-text-field required v-model="form.email" class="mt-2" hint="* fill in fill E-mail" persistent-hint prepend-inner-icon="em em-email" outlined  label="E-mail"></v-text-field>

                        <v-text-field v-model="form.first_name" required hint="* fill in fill Frist Name" persistent-hint prepend-inner-icon="em em-man-frowning" outlined label=" Frist Name" ></v-text-field>
                        <v-text-field v-model="form.last_name"  required hint="* fill in fill Last Name" persistent-hint prepend-inner-icon="em em-man-frowning" outlined label=" Last Name" ></v-text-field>

                        <v-text-field v-model="form.phone_number" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" item-text="value"  hint="* fill in fill Number Phone" persistent-hint maxlength="10" type="text" outlined prepend-inner-icon="em em-iphone" label="Phone Number" ></v-text-field>
                        <v-text-field v-model="form.password"   hint="* fill in fill Password" persistent-hint prepend-inner-icon="em em-lock" :type="isPasswordVisible ? 'text' : 'password'" outlined label="Password" placeholder="············" :append-icon="isPasswordVisible ? `mdi-eye-off-outline` : `mdi-eye-outline`" @click:append="isPasswordVisible = !isPasswordVisible" ></v-text-field>

                        <v-text-field v-model="form.password_confirm" hint="* Password must contain at least 8 uppercase letters, lowercase letters and numbers." persistent-hint prepend-inner-icon="em em-lock" :type="isPasswordVisible ? 'text' : 'password' " outlined label="Confirm Password" placeholder="············" :append-icon="isPasswordVisible ? `mdi-eye-off-outline` : `mdi-eye-outline`" @click:append="isPasswordVisible = !isPasswordVisible"></v-text-field>
                        <br>
                        <v-text-field @change="checkRefCode()" v-model="refCode" prepend-inner-icon="em em-woman-raising-hand" type="text" persistent-hint outlined label="Referral Code" ></v-text-field>

                      <br>
                        <Auth-Captcha v-if="!successBtn" :reload="openCaptcha" @cap="getSuccess"></Auth-Captcha>
                        <v-btn v-if="successBtn" type="submit" x-large dark block class="bg-primary-g mt-6">
                            Sign Up
                        </v-btn>
                        <div class="d-flex align-center justify-space-between flex-wrap mt-4">
                            <p class="mt-1">If you have an account?
                                <router-link :to="{path:'/auth/login'}">
                                    Login
                                </router-link>
                            </p>
                            <v-spacer></v-spacer>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    </div>

</div>
</template>

<script>
import {
    Core
} from "~/vuexes/core";
import {
    Web
} from "~/vuexes/web";
import {
    Auth
} from "~/vuexes/auth";
import _ from 'lodash'
export default {
    layout: "root",
    data: () => {
        return {
            isPasswordVisible: false,
            successBtn: false,
            openCaptcha: true,
          success:false,
            form: {
                // password: "Pautn1234",
                // username: "pongvarid2020",
                // first_name: "maneewan",
                // last_name: "maneewan",
                // email: "pongvarid2020@gmail.com",
                // display_name: "Pongvarid",
                // phone_number: "0988203179",
                // password_confirm: "Pautn1234",

            },
            error: {},
            rules: {
              required: value => !!value || 'Required.',
            },
          refCode:''
        };
    },
    async created() {

    },
    methods: {
        async initial() {

            await Web.switchLoad(true);
        },
        async register() {
            this.error = {};
            await Web.switchLoad(true);
            this.form.username = this.form.email
            let user = await Auth.register(this.form);

            if (user.id) {
                await this.generateKyc(user.id);
                await this.generatePoint(user.id)
                await Web.switchLoad(false);
                await Web.alert(`OK`, `success`, `Register is success`);
                await this.$router.replace(`/auth/verify`);
            } else {
                this.error = user;
              this.success = false
              this.successBtn = false
                await this.reCaptcha();
                await Web.switchLoad(false);
            }
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
      async generatePoint(userId){
          let tiers = await Core.getHttp(`/api/account/tier/`)
          let form = {
            "total": 0,
            "current": 0,
            "tier": tiers[0].id,
            "user": userId
          }
          let data = await Core.postHttp(`/api/account/userpoint/`,form)
          if (data.id) {
            this.$vs.notification({
              color: 'success',
              title: 'สร้างข้อมูล Point สำเร็จแล้ว',
            })
          } else {
            this.$vs.notification({
              color: 'danger',
              title: 'สร้างข้อมูล Point ไม่สำเร็จ',
            })
          }
      },
        async getSuccess(val) {
            this.successBtn = val
          this.success =val
        },

        async reCaptcha() {
            this.successBtn = false;
            this.openCaptcha = true;
            this.sleep(3)
            await this.reOpenCapcha();
        },
        async reOpenCapcha() {
            this.openCaptcha = false;
        },
        sleep(seconds) {
            var e = new Date().getTime() + (seconds * 1000);
            while (new Date().getTime() <= e) {}
        },
      async checkRefCode(){
          let user = await Core.getHttp(`/api/account/kyc/?user__blacklist=false&refferal_code=${this.refCode}`)
          if(user.length > 0){
            this.form.other_referral_code = this.refCode
            await Web.alert(`Your Referral Code can use.`,'success')
          }else{
            await Web.alert(`Your Referral Code is not use.`,'error')
            this.form.other_referral_code = ""
            this.refCode = ""
          }
        }
    },
};
</script>


