<template>
<v-card flat class="mt-5" v-if="response">
  
 
        <div class="px-3 mt-15 mb-5">
            <v-card-text class="pt-5">
                <v-row>
                    <v-col cols="12" sm="8" md="6">
                        <h2>1. Verification of identity by uploading a picture of an ID card </h2>
                             <input @input="" ref="imageProfile" type="file" accept=".jpeg,.png,.jpg,GIF" />
                         <h2>2. Verify your identity by uploading a picture of your account number </h2>
                             <input @input="" ref="imageProfile" type="file" accept=".jpeg,.png,.jpg,GIF" />
                          <h2>3. Phone number OTP (one-time-password) </h2>
                          <form>
                              <v-text-field outlined
                                  name="name"
                                  label="label"
                                  id="id"
                              ></v-text-field>
                          </form>
                        <!-- current password -->
                         
                    </v-col>

                    <v-col cols="12" sm="4" md="6" class="d-none d-sm-flex justify-center position-relative md-8">
                        <v-img contain height="250" max-width="300"  :src="require(`@/assets/misc/pose-m-1.png`)"></v-img>
                        <pre>  {{kyc}}</pre>
                    </v-col>
                </v-row>
            </v-card-text>
        </div>
 
    <v-divider></v-divider>
    <div class="pa-3">
        <v-card-title class="flex-nowrap">
            <v-icon class="text--primary me-3">
                mdi-key-outline
            </v-icon>
            <span class="text-break">KYC</span>
        </v-card-title>

        <v-card-text class="two-factor-auth text-center mx-auto">
            <v-avatar color="primary" class="primary mb-4" rounded>
                <v-icon size="25" color="white">
                    mdi-lock-open-outline
                </v-icon>
            </v-avatar>
            <p class="text-base text--primary font-weight-semibold">
                Know Your Custome
            </p>
            <p class="text-sm text--primary">
                check is the mandatory process of identifying and verifying the client's identity when opening an account
            </p>
        </v-card-text>
        <!-- action buttons -->
    </div>
</v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
    Auth
} from '~/vuexes/auth'
import {
    Core
} from '~/vuexes/core'
import {
    Web
} from '~/vuexes/web'
import watermark from 'watermarkjs'
export default {
    data: () => {
        return ({
            user: Auth.user,
            kyc:{},
            response:false,

        })
    },
    async created(){
        await Web.switchLoad(true) 
        await this.getMyKyc();
         await Web.switchLoad(false)
    },
    methods:{
        async getMyKyc(){
            let kyc = await Core.getHttp(`/api/account/kyc/?user=${this.user.id}`)
            if(kyc.length > 0){
                this.kyc = kyc[kyc.length -1]
                this.response = true
            }
            
        }
    }
}
</script>

<style lang="scss" scoped>
.two-factor-auth {
    max-width: 25rem;
}

.security-character {
    position: absolute;
    bottom: -0.5rem;
}
</style>
