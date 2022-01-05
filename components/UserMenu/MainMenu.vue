<template>
<div class="bg-main">
    <v-app-bar app flat absolute color="transparent">
        <div class="boxed-container w-full">
            <div class="d-flex align-center mx-6">
                <!-- Left Content -->
                <v-app-bar-nav-icon class="d-block d-lg-none me-2" @click="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>
                <v-text-field rounded dense outlined prepend-inner-icon="mdi-magnify" class="app-bar-search flex-grow-0" hide-details></v-text-field>

                <v-spacer></v-spacer>

                <!-- Right Content -->
                <a href="https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free" target="_blank" rel="nofollow">
                    <v-icon class="ms-6 me-4">

                    </v-icon>
                </a>

                <v-btn icon small class="ms-3">
                    <v-icon>

                    </v-icon>
                </v-btn>
                <user-menu></user-menu>
            </div>
        </div>
    </v-app-bar>

    <v-navigation-drawer app floating width="260" class="app-navigation-menu bg-main" :right="$vuetify.rtl" v-model="isDrawerOpen">
        <div class="vertical-nav-header d-flex items-center ps-6 pe-5 pt-5 pb-2">
            <router-link to="/" class="d-flex align-center text-decoration-none w-full">
                <center>
                    <v-slide-x-transition>
                        <img class="h-14" src="~/static/images/logos/canabit_vector.svg" alt=""> 
                    </v-slide-x-transition>
                </center>
            </router-link>
        </div>

        <v-list expand shaped class="vertical-nav-menu-items pr-5">
            <UserMenu-NavbarLink path="/" title="Dashboard" icon="mdi-home-outline"></UserMenu-NavbarLink>
            <UserMenu-NavbarLink path="/transaction" title="Transaction" icon="mdi-bank-transfer"></UserMenu-NavbarLink>
            <UserMenu-NavbarLink path="/partner" title="Partner" icon="mdi-handshake-outline"></UserMenu-NavbarLink>
            <UserMenu-NavbarLink path="/account" title="Account Setting" icon="mdi-account-cog"></UserMenu-NavbarLink>
        </v-list>
        <a href="https://themeselection.com/products/materio-vuetify-vuejs-admin-template" target="_blank" rel="nofollow">
            <v-img :src="require(`@/static/images/pro/upgrade-banner-light2.png`)" alt="upgrade-banner" transition="scale-transition" class="upgrade-banner mx-auto" max-width="230"></v-img>
        </a>
    </v-navigation-drawer>

</div>
</template>

<script>
export default {
    data() {
        return {
            isDrawerOpen: true
        }
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
