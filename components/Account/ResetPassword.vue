<template>
<div>
    <div class="px-3"> 
        <v-card-text class="pt-5" v-if="(user.register_by=='Register')|| (user.register_by == null)|| (user.register_by == 'Web')">
            <v-row>
               
                <v-col cols="12" sm="8" md="6"> 
                     <v-alert class="" outlined dense shaped type="info" prominent border="left" >
                                Password must contain at least 8 uppercase letters, lowercase letters and numbers.</v-alert>
                    <div v-if="error.old_password">
                        <v-alert dense outlined text v-for="(message,i) in error.old_password" :key="i" type="error" :value="true">
                            {{message}}
                        </v-alert>
                    </div>
                    <div v-if="error.password">
                        <v-alert dense outlined text v-for="(message,i) in error.password" :key="i" type="error" :value="true">
                            {{message}}
                        </v-alert>
                    </div>
                    <div v-if="error.password_confirm">
                        <v-alert dense outlined text v-for="(message,i) in error.password_confirm" :key="i" type="error" :value="true">
                            {{message}}
                        </v-alert>
                    </div>
                    <form @submit.prevent="changePassword()" ref="formResetPassword">
                        <h2 class="text-xl mt-4 mb-4">Change Password</h2>
                        <v-text-field type="password" required class="w-full md:w-1/2 m-1" v-model="form.old_password" prepend-inner-icon="em em-lock" label="Old Password" dense outlined></v-text-field>
                        <v-text-field type="password" required class="w-full md:w-1/2 m-1" v-model="form.password" prepend-inner-icon="em em-closed_lock_with_key" label="New Password" dense outlined></v-text-field>
                        <v-text-field type="password" required class="w-full md:w-1/2 m-1" v-model="form.password_confirm" prepend-inner-icon="em em-closed_lock_with_key" label="New Password Confirm" dense outlined></v-text-field>
                        <v-btn type="submit" color="success">Update Password</v-btn>
                    </form> 
                </v-col>

                <v-col cols="12" sm="4" md="6" class="d-none d-sm-flex justify-center position-relative">
                    <img contain style="width:170px; height:260px;" src="~/static/images/3d-characters/pose-m-1.png" class="security-character" />
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-text v-else>
            <div class="p-6">
                <v-alert    outlined text type="info" :value="true">
                    You are logged in with a social network, you cannot change your password.
                </v-alert>
            </div>

        </v-card-text>
    </div>
</div>
</template>

<script>
import {
    Auth
} from '~/vuexes/auth'
import {
    Core
} from '~/vuexes/core'
import {
    Web
} from '~/vuexes/web';
export default {
    name: '',
    data: () => {
        return ({
            form: {},
            error: {},
            user: Auth.user
        })
    },
    methods: {
        async changePassword() {
            let update = await Core.postHttp(`/api/auth/v2/change-password/`, this.form)
            if (!update.detail) {
                this.error = update
            } else {
                this.error = {}
                this.$refs.formResetPassword.reset()
                await Web.alert(`Update Password Success`)
            }
        }
    }
};
</script>
