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
                    <p class="text-2xl font-weight-semibold text--primary mb-2 text-center">
                        Adventure starts here 🚀
                    </p>
                    <p class="mb-2 text-center">
                        Make your app management easy and fun!
                    </p>
                </v-card-text>

                <!-- login form -->
                <v-card-text>
                    <v-form>

                        <v-text-field prepend-inner-icon="mdi-account-outline" outlined label=" Frist Name" hide-details></v-text-field>
                        <v-text-field class="mt-4"  prepend-inner-icon="mdi-account-outline" outlined label=" Last Name" hide-details></v-text-field>
                        <v-text-field class="mt-4"  prepend-inner-icon="mdi-email-outline" outlined label="Email" hide-details></v-text-field>
                        <v-text-field class="mt-4"  type="number" outlined prepend-inner-icon="mdi-cellphone" label="Number" hide-details></v-text-field>
                        <v-text-field class="mt-4"  prepend-inner-icon="mdi-lock-outline" type="password" outlined label="Password" hide-details></v-text-field>

                        <v-text-field class="mt-4"  prepend-inner-icon="mdi-lock-outline" type="password" outlined label="Confirm Password" hide-details></v-text-field>
                        <v-text-field class="mt-4"  prepend-inner-icon="mdi-lock-outline" outlined label="RefferalCode" hide-details></v-text-field>

                        <v-btn x-large dark block class="bg-primary-g mt-6">
                            Sign Up
                        </v-btn>
                    </v-form>
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

        <!-- background triangle shape  -->
        <img class="auth-mask-bg" height="190" :src="require(`@/static/images/misc/mask-${$vuetify.theme.dark ? 'dark':'light'}.png`)">

        <!-- tree -->
        <v-img class="auth-tree" width="247" height="185" src="@/static/images/misc/tree.png"></v-img>

        <!-- tree  -->
        <v-img class="auth-tree-3" width="377" height="289" src="@/static/images/misc/tree-3.png"></v-img>
    </div>
</div>
</template>

<script>
export default {
    layout: 'root'
}
</script>

<style lang="scss">
@import '@/plugins/vuetify/preset/pages/auth.scss';
</style>
