<template>
<div>
    <Core-City></Core-City>
    <img src="" ref="ximg" class="w-full" alt="">
    <v-card flat class="pa-3 mt-2 pl-2">
        <v-card-text class="d-flex">

            <vs-avatar size="120" history circle>
                <img v-if="!imageProfile" src="~/static/images/avatars/1.png">
                <img v-else :src="$url+imageProfile" alt="">
            </vs-avatar>

            <img src="" ref="imgs" alt="">
            <!-- upload photo -->
            <div class="ml-4">
                <h3 class="text-3xl">{{form.display_name}}</h3>
                <!--   <h2>{{form.email}}</h2>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer> -->
                <div class="mt-2">
                    <Core-ImageInput @profileImage="getFileImage"></Core-ImageInput>
                </div>
            </div>

        </v-card-text>
        <v-card-text>

            <v-form class="multi-col-validation mt-6">
                <v-row>
                    <div class="flex flex-col md:flex-row md:flex-wrap">
                        <v-text-field disabled class="w-full md:w-1/2 mt-2 pl-2 " v-model="form.username" label="username" dense outlined></v-text-field>
                        <v-text-field disabled class="w-full md:w-1/2 mt-2 pl-2" v-model="form.email" label="email" dense outlined></v-text-field>
                        <v-text-field class="w-full md:w-1/2 mt-2 pl-2" v-model="form.first_name" label="first_name" dense outlined></v-text-field>
                        <v-text-field class="w-full md:w-1/2 mt-2 pl-2" v-model="form.last_name" label="last_name" dense outlined></v-text-field>

                        <v-text-field class="w-full md:w-1/2 mt-2 pl-2" v-model="form.display_name" label="display_name" dense outlined></v-text-field>
                        <!-- <v-text-field class="w-full md:w-1/2 mt-2 pl-2" v-model="form.phone_number" label="phone_number" dense outlined></v-text-field> -->
                        <v-text-field disabled class="w-full md:w-1/2 mt-2 pl-2" v-model="form.register_by" label="register_by" dense outlined></v-text-field>

                        <div class="flex flex-col mt-14  md:flex-row md:flex-wrap ">
                            <div class="w-full  lg:w-1/2 md:w-1/2 mt-2 pl-2">
                                <v-text-field v-model="form.address" label="Address" dense outlined></v-text-field>
                            </div>
                            <div class="w-full lg:w-1/2 md:w-1/2 mt-2 pl-2">
                                <v-text-field dense outlined :value="CityFrom" @click="openCityDialog" @focus="openCityDialog" type="text" label="จังหวัด อำเภอ ตำบล" prepend-inner-icon="fas fa-globe-asia" />
                            </div>

                            <div class="w-full  lg:w-1/2 md:w-1/2 mt-2 pl-2">
                                <v-text-field v-model="form.zipcode" label="zip code" dense outlined></v-text-field>
                            </div>
                        </div>
                        <v-text-field name="name" label="label" id="id"></v-text-field>      
                        <!-- <v-text-field disabled class="w-full md:w-1/2 mt-2 pl-2" v-model="form.tier" label="tier" dense outlined></v-text-field>  -->
                    </div>
                    <!--  
                    <v-col cols="12">
                        <v-alert color="warning" text class="mb-0">
                            <div class="d-flex align-start">
                                <v-icon color="warning">

                                </v-icon>

                                <div class="ms-3">
                                    <p class="text-base font-weight-medium mb-1">
                                        Your email is not confirmed. Please check your inbox.
                                    </p>
                                    <a href="javascript:void(0)" class="text-decoration-none warning--text">
                                        <span class="text-sm">Resend Confirmation</span>
                                    </a>
                                </div>
                            </div>
                        </v-alert>
                    </v-col> -->

                    <v-col cols="12" md="2">

                        <vs-button floating block color="success" @click="updateProfile">Save Changes</vs-button>

                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
    </v-card>
</div>
</template>

<script>
import {
    Auth
} from '~/vuexes/auth'
import {
    Core
} from '~/vuexes/core'
import watermark from 'watermarkjs'
import {
    City
} from '~/vuexes/city'
export default {
    components: {

    },
    data: () => {
        return ({
            form: {},
            user: Auth.user,
            showCropper: true,
            data: {},
            src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
        })
    },
    computed: {
        imageProfile() {
            return Auth.user.image_profile
        },
        CityFrom() {
            return City.showName;
        }
    },
    async created() {
        await this.initial()
    },
    methods: {
        async imageuploaded(res) {
            console.log(res);

        },
        async initial() {
            this.form = await Core.getHttp(`/api/account/userprofile/${this.user.id}/`)
            delete this.form.image_profile
        },

        async updateProfile() {
            this.form.geo = City.currentGeo.id;
            this.form.province = City.currentProvince.id;
            this.form.amphur = City.currentAmphur.id;
            this.form.district = City.currentDistrict.id;
            let update = await Core.putHttpAlert(`/api/account/userprofile/${this.user.id}/`, this.form)

        },
        async getFileImage(file) {
            let image = file //this.$refs.imageProfile.files[0]
            let formData = new FormData()
            formData.append('image_profile', image);
            let update = await Core.putImageHttpAlert(`/api/account/userprofile/${this.user.id}/`, formData)
            await Auth.setUser();
            await this.initial()

            // let cover = await Core.setWaterMark(image) 
            // this.$refs.ximg.src = cover.src

        },
        async openCityDialog() {
            City.dialogCityState = true;
        }
    }
}
</script>

<style>

</style>
