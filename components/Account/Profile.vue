<template>
<div>
         <img src="" ref="ximg" class="w-full" alt="">
    <v-card flat class="pa-3 mt-2">
        <v-card-text class="d-flex">
       
            <v-avatar rounded size="120" class="me-6">
                <img v-if="!imageProfile" src="~/static/images/avatars/1.png">
                <v-img v-else :src="imageProfile" alt="" ></v-img>
            </v-avatar>
              <img src="" ref="imgs" alt="">
            <!-- upload photo -->
            <div>

                <input @input="getFileImage()" ref="imageProfile" type="file" accept=".jpeg,.png,.jpg,GIF" />

                <p class="text-sm mt-5">
                    Allowed JPG, GIF or PNG. Max size of 800K
                </p>
            </div>
        </v-card-text>

        <v-card-text>
            <v-form class="multi-col-validation mt-6">

                <v-row>
                    <div class="flex flex-col md:flex-row md:flex-wrap">
                        <v-text-field class="w-full md:w-1/2 mt-2 " v-model="form.id" label="id" dense outlined></v-text-field>
                        <v-text-field class="w-full md:w-1/2 mt-2 " v-model="form.username" label="username" dense outlined></v-text-field>
                        <v-text-field class="w-full md:w-1/2 mt-2" v-model="form.first_name" label="first_name" dense outlined></v-text-field>
                        <v-text-field class="w-full md:w-1/2 mt-2" v-model="form.last_name" label="last_name" dense outlined></v-text-field>
                        <v-text-field class="w-full md:w-1/2 mt-2" v-model="form.email" label="email" dense outlined></v-text-field>
                        <v-text-field class="w-full md:w-1/2 mt-2" v-model="form.display_name" label="display_name" dense outlined></v-text-field>
                        <v-text-field class="w-full md:w-1/2 mt-2" v-model="form.phone_number" label="phone_number" dense outlined></v-text-field>
                        <v-text-field class="w-full md:w-1/2 mt-2" v-model="form.register_by" label="register_by" dense outlined></v-text-field>
                        <v-text-field class="w-full md:w-1/2 mt-2" v-model="form.social_link" label="social_link" dense outlined></v-text-field>
                        <v-text-field class="w-full md:w-1/2 mt-2" v-model="form.address" label="address" dense outlined></v-text-field>
                        <v-text-field class="w-full md:w-1/2 mt-2" v-model="form.foreigner" label="foreigner" dense outlined></v-text-field>
                        <v-text-field class="w-full md:w-1/2 mt-2" v-model="form.status" label="status" dense outlined></v-text-field>
                        <v-text-field class="w-full md:w-1/2 mt-2" v-model="form.tier" label="tier" dense outlined></v-text-field>
                        <v-text-field class="w-full md:w-1/2 mt-2" v-model="form.created_at" label="created_at" dense outlined></v-text-field>
                        <v-text-field class="w-full md:w-1/2 mt-2" v-model="form.updated_at" label="updated_at" dense outlined></v-text-field>
                    </div>

                    <!-- alert -->
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
                    </v-col>

                    <v-col cols="12">
                        <v-btn @click="updateProfile" color="primary" class="me-3 mt-4">
                            Save changes
                        </v-btn>
                        <v-btn color="secondary" outlined class="mt-4" type="reset">
                            Cancel
                        </v-btn>
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
export default {
    data: () => {
        return ({
            form: {},
            user: Auth.user
        })
    },
    computed:{
        imageProfile(){
            return Auth.user.image_profile
        }
    },
    async created() {
        await this.initial()
    },
    methods: {
        async initial() {
            this.form = await Core.getHttp(`/api/account/userprofile/${this.user.id}/`)
            delete this.form.image_profile
        },

        async updateProfile() {
            let update = await Core.putHttpAlert(`/api/account/userprofile/${this.user.id}/`, this.form)

        },
        async getFileImage() {
            let image = this.$refs.imageProfile.files[0]
            let formData = new FormData()
            formData.append('image_profile', image); 
            let update = await Core.putImageHttpAlert(`/api/account/userprofile/${this.user.id}/`, formData) 
            await Auth.setUser();
            await this.initial()

            // let cover = await Core.setWaterMark(image) 
            // this.$refs.ximg.src = cover.src
 
        }
    }
}
</script>

<style>

</style>
