<template>
<div class="bg-main" v-if="response">
    <v-app-bar app flat absolute color="transparent">
        <div class="boxed-container w-full">
            <div class="d-flex align-center mx-6">
                <!-- Left Content -->
                <v-app-bar-nav-icon class="d-block d-lg-none me-2" @click="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>

                <v-spacer></v-spacer>


                <vs-button v-if="!kyc.user_verified" @click="$router.push('/account')" color="#FF0000" floating class="my-point">
                    <v-icon style="color:white;" class="mr-2">mdi-account-alert</v-icon> ยังไม่ได้ยืนยันตัวตน KYC
                </vs-button>
                <vs-button color="#4ade80" floating class="my-point">
                    <v-icon style="color:white;" class="mr-2">mdi-bitcoin</v-icon>
                    Point : {{point.current}}
                </vs-button>
                <div>
                    <div class="flex gap-3 items-center font-semibold text-gray-800 p-3 rounded-md hover:cursor-pointer">
                        <vs-avatar history success>
                            <img v-if="!imageProfile" src="~/static/images/avatars/1.png">
                            <img v-else class="w-10 h-10 rounded-full" :src="$url+imageProfile" alt="Rebecca Burke">
                        </vs-avatar>
                        <div class="flex flex-col">
                            <div class="text-green-400">
                                {{user.display_name}}
                            </div>
                            <div class="text-gray-400 text-sm font-normal">
                                {{user.first_name}} {{user.last_name}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </v-app-bar>

    <v-navigation-drawer app floating width="260" class="app-navigation-menu bg-main shadow-2xl" :right="$vuetify.rtl" v-model="isDrawerOpen">
        <div class="vertical-nav-header d-flex items-center ps-6 pe-5 pt-5 pb-2">
            <router-link to="/" class="d-flex align-center text-decoration-none w-full">
                <center>
                    <v-slide-x-transition>
                        <img class="h-14" src="https://www.img.in.th/images/90cc2f82b6c393cc69828ea5a21eacd1.png" alt="">
                    </v-slide-x-transition>
                </center>
            </router-link>
        </div>

        <div class="p-6 flex flex-col items-center">
            <!-- <v-badge color="bg-yellow-500" :content="user.tier" overlap>
                <v-img v-if="user.image_profile" class="shadow-2xl rounded-full h-36 w-36" :src="user.image_profile"> </v-img>
                <v-img v-else class="shadow-2xl rounded-full h-36 w-36" src="https://i.pinimg.com/originals/4a/6a/cb/4a6acb8ab84a58ca85ef817b02de7067.jpg"> </v-img>

            </v-badge> -->
            <!--
            <h2 v-if="user.display_name" class="text-2xl font-semibold">{{user.display_name}}</h2>
            <h2 v-else class="text-2xl font-semibold">{{user.first_name}}</h2>
            <h2>{{user.email}}</h2> -->
        </div>

        <v-list expand shaped class="vertical-nav-menu-items pr-5">

            <UserMenu-NavbarLink path="/" title="Home" icon="em em-house"></UserMenu-NavbarLink>
            <UserMenu-NavbarLink v-if="kyc.user_verified" path="/transaction" title="Transaction" icon="em em-clipboard"></UserMenu-NavbarLink>
            <!-- <UserMenu-NavbarLink path="/partner" title="E-commerce" icon="mdi-handshake-outline"></UserMenu-NavbarLink> -->
            <UserMenu-NavbarLink v-if="kyc.user_verified"  path="/forex" title="Forex Broker" icon="em em-bank"></UserMenu-NavbarLink>
            <!-- <UserMenu-NavMenuGroup title="Pages"></UserMenu-NavMenuGroup> -->
            <!-- <UserMenu-NavbarLink path="/semiauto" title="EA" icon="mdi-animation"></UserMenu-NavbarLink>
            <UserMenu-NavbarLink path="/signals" title="Signals" icon="mdi-broadcast"></UserMenu-NavbarLink> -->
            <UserMenu-NavMenuGroup v-if="kyc.user_verified"  icon="em em-shopping_trolley" title="Product">
                <div class="ml-2">
                    <UserMenu-NavbarLink path="/semiauto" title="EA" icon="em em-chart"></UserMenu-NavbarLink>
                </div>
                <div class="ml-2">
                    <UserMenu-NavbarLink path="/signals" title="Indicator" icon="em em-arrow_double_down"></UserMenu-NavbarLink>
                </div>
                <div class="ml-2">
                    <UserMenu-NavbarLink path="/copytrade" title=" Copy Trade" icon="em em-bookmark_tabs"></UserMenu-NavbarLink>
                </div>
            </UserMenu-NavMenuGroup>
            <UserMenu-NavbarLink v-if="kyc.user_verified"  path="/accountstatus" title="History Account" icon="em em-clock1"></UserMenu-NavbarLink>
            <UserMenu-NavMenuSectionTitle title="USER SETTING"></UserMenu-NavMenuSectionTitle>

            <UserMenu-NavbarLink path="/account" title="Account Setting" icon="em em-wrench"></UserMenu-NavbarLink>

        </v-list>

        <template v-slot:append>
            <div>
                <div @click="logout()">
                    <UserMenu-NavbarLink path="/logout" title="Logout" icon="mdi-logout"></UserMenu-NavbarLink>
                </div>

            </div>
        </template>

    </v-navigation-drawer>

</div>
</template>

<script>
import {
    Auth
} from '@/vuexes/auth'
import {
    Core
} from '~/vuexes/core'
export default {
    data() {
        return {
            isDrawerOpen: true,
            kyc: {},
            form: {},
          response:false,
        }
    },
    methods: {
        async logout() {
            await Auth.logout();
            await location.reload();
        },
        async getMyKyc() {
            let kyc = await Core.getHttp(`/api/account/kyc/?user=${this.user.id}`);
            if (kyc.length > 0) {
                this.kyc = kyc[kyc.length - 1];
            }
        },
        async initial() {
            this.form = await Core.getHttp(`/api/account/userprofile/${this.user.id}/`)
        },
    },
    computed: {
        user() {
            return Auth.user
        },
        point() {
            return Auth.point
        },
        tier() {
            return Auth.tier
        },
        imageProfile() {
            return Auth.user.image_profile
        },

    },
    async created() {
        await this.initial()
        await this.getMyKyc();
        this.response = true;
    }
}
</script>

<style>
.upgrade-banner {
    position: absolute;
    bottom: 13px;
    left: 50%;
    transform: translateX(-50%);
}
</style>
