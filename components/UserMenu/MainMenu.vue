<template>
<div class="bg-main">
    <v-app-bar app flat absolute color="transparent">
        <div class="boxed-container w-full">
            <div class="d-flex align-center mx-6">
                <!-- Left Content -->
                <v-app-bar-nav-icon class="d-block d-lg-none me-2" @click="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>

                <v-spacer></v-spacer>
                <v-btn dark rounded color="blue" class="my-point">
                    <v-icon style="color:white;">mdi-bitcoin</v-icon> Point : 8000
                </v-btn>

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

        <div class="p-6 flex flex-col items-center">
            <v-badge color="bg-yellow-500" content="Gold" overlap>
                <v-img class="shadow-2xl rounded-full h-36 w-36" src="https://i.pinimg.com/originals/4a/6a/cb/4a6acb8ab84a58ca85ef817b02de7067.jpg"> </v-img>

            </v-badge>

            <h2 class="text-2xl font-semibold">Adam Lime</h2>
            <h2>adam@gmail.com</h2>
        </div>

        <v-list expand shaped class="vertical-nav-menu-items pr-5">
            <UserMenu-NavbarLink path="/" title="Portal" icon="mdi-home-outline"></UserMenu-NavbarLink>
            <UserMenu-NavbarLink path="/transaction" title="Transaction" icon="mdi-bank-transfer"></UserMenu-NavbarLink>
            <UserMenu-NavbarLink path="/partner" title="Partner" icon="mdi-handshake-outline"></UserMenu-NavbarLink>
            <UserMenu-NavbarLink path="/account" title="Account Setting" icon="mdi-account-cog"></UserMenu-NavbarLink>
        </v-list>

        <template v-slot:append>
            <div>
                <UserMenu-NavbarLink path="/account" title="Logout" icon="mdi-logout"></UserMenu-NavbarLink>

            </div>
        </template>

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
