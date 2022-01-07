<template>
<div>
    <div class="auth-wrapper auth-v1">
        <div class="auth-inner">
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
                    <v-form>
                        <v-text-field color="primary" outlined label="Email" placeholder="john@example.com" hide-details class="mb-3"></v-text-field>
                        <br>
                        <v-text-field color="primary" outlined :type="isPasswordVisible ? 'text' : 'password'" label="Password" placeholder="············" :append-icon="isPasswordVisible ? `mdi-eye-off-outline` : `mdi-eye-outline`" hide-details @click:append="isPasswordVisible = !isPasswordVisible"></v-text-field>

                        <div class="d-flex align-center justify-space-between flex-wrap">
                            <v-spacer></v-spacer>

                            <router-link class="mt-1" :to="{path:'/auth/forgot'}">
                                Forgot Password?
                            </router-link>
                        </div>

                        <v-btn x-large dark block class="bg-primary-g mt-6">
                            Login
                        </v-btn>
                    </v-form>
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
                <v-card-actions class="d-flex justify-center">
                    <v-icon>mdi-facebook</v-icon>
                </v-card-actions>
            </v-card>
        </div>

        <!-- background triangle shape  -->
        <img class="auth-mask-bg" height="173" src="@/static/images/misc/mask-light.png">

        <!-- tree -->
        <v-img class="auth-tree" width="247" height="185" src="@/static/images/misc/tree.png"></v-img>

        <!-- tree  -->
        <v-img class="auth-tree-3" width="377" height="289" src="@/static/images/misc/tree-3.png"></v-img>
    </div>
</div>
</template>

<script>
export default {
    layout: 'root',
    data: () => {
        return ({
            isPasswordVisible: false,
        })
    }
}
</script>

<style lang="scss">
    @import '@/plugins/vuetify/preset/pages/auth.scss';
</style>
