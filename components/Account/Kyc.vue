<template>
<v-card flat class="mt-5" v-if="response">

    <div class="px-3 mt-15 mb-5">
        <v-card-text class="pt-5">
            <v-row>
                <v-col cols="12" sm="8" md="6">
             
                    <div class="flex flex-col md:flex-row">
                       
                        <div class="w-full md:w-1/2 flex flex-col">
                        <h2> 1. Verification of identity by uploading a picture of an ID card </h2>
                            <img v-if="kyc.image_card" :src="$url+kyc.image_card" alt=""><br> <br>
                            <input @input="storeKycCard('image_card')" ref="image_card" type="file" accept=".jpeg,.png,.jpg,GIF" />
                        </div>
                        <div class="w-full md:w-1/2 flex flex-col">
                        <h2>2. Verify your identity by uploading a picture of your account number </h2>
                            <img v-if="kyc.image_selfie" :src="$url+kyc.image_selfie" alt=""><br> <br>
                            <input @input="storeKycCard('image_selfie')" ref="image_selfie" type="file" accept=".jpeg,.png,.jpg,GIF" />
                        </div>

                    </div> 
                    <br> <br> <br>
                    <h2> Phone number OTP (one-time-password) </h2>
                    <form>
                        <v-text-field outlined name="name" label="label" id="id"></v-text-field>
                    </form>
                </v-col>
                <v-col cols="12" sm="4" md="6" class="d-none d-sm-flex justify-center position-relative md-8">
                    <v-img contain height="250" max-width="300" :src="require(`@/assets/misc/pose-m-1.png`)"></v-img>
                    <pre> {{kyc}}</pre>
                </v-col>
            </v-row>
        </v-card-text>
    </div>

    <!-- action buttons -->
    </div>
</v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
    Auth
} from "~/vuexes/auth";
import {
    Core
} from "~/vuexes/core";
import {
    Web
} from "~/vuexes/web";
import watermark from "watermarkjs";
export default {
    data: () => {
        return {
            user: Auth.user,
            kyc: {},
            response: false,
        };
    },
    async created() {
        await Web.switchLoad(true);
        await this.getMyKyc();
        await Web.switchLoad(false);
    },
    methods: {
        async getMyKyc() {
            let kyc = await Core.getHttp(`/api/account/kyc/?user=${this.user.id}`);
            if (kyc.length > 0) {
                this.kyc = kyc[kyc.length - 1];
                this.response = true;
            }
        },
        async storeKycCard(typeImage) {
              await Web.switchLoad(true);
            let image = this.$refs[typeImage];
            let cover = await Core.setWaterMark(image.files[0]);
            let file = await Core.dataURLtoFile(cover.src);
            let formData = new FormData();
            formData.append(typeImage, file);
            let update = await Core.putImageHttpAlert(
                `/api/account/kyc/${this.kyc.id}/`,
                formData
            );
            await this.getMyKyc();
              await Web.switchLoad(false);
        },
    },
};
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
