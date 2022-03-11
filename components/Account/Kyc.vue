<template>
<v-card flat class="mt-5" v-if="response">

    <div class="px-3  mb-5">
        <v-card-text class="">
            <v-row>
                <v-col cols="12" sm="8" md="6">
                    <h2> 1. Verify your identity by entering your ID card number or passport number. </h2>
                    <v-text-field class="mt-5" v-model="title" counter="13" hint="Please check the correctness ID Number" label="Fill in your ID card number" outlined></v-text-field>
                </v-col>
                <v-container>
                    <v-row justify="space-between">
                        <v-col cols="12" md="4">
                            <h2> 2. Verification of identity by uploading a picture of an ID card </h2><br>
                            <img v-if="kyc.image_card" :src="$url+kyc.image_card" alt=""> 
                            <img v-else src="https://sv1.picz.in.th/images/2022/03/11/rrz9yI.png" alt="">
                            <br><br>
                            <input @input="storeKycCard('image_card')" ref="image_card" type="file" accept=".jpeg,.png,.jpg,GIF" />
                        </v-col>
                        <v-col cols="12" md="6">
                            <h2>3. Verify your identity by uploading a picture of your account number </h2>
                            <img v-if="kyc.image_selfie" :src="$url+kyc.image_selfie" alt="">
                            <img v-else src="https://sv1.picz.in.th/images/2022/03/11/rrzQ2V.png" alt="">
                            <br> <br>
                            <input @input="storeKycCard('image_selfie')" ref="image_selfie" type="file" accept=".jpeg,.png,.jpg,GIF" />
                        </v-col>
                    </v-row>
                </v-container>

                <!-- <v-col cols="12" sm="4" md="6" class="d-none d-sm-flex justify-center position-relative md-8">
                    <v-img contain height="250" max-width="300" :src="require(`@/assets/misc/pose-m-1.png`)"></v-img>

                </v-col> -->

            </v-row>
            <v-col cols="12" md="4" class="mt-10">
                <h2> 4. Phone number OTP (one-time-password)</h2>
                <div class="center">
                    <vs-button floating @click="active=!active" color="#4ade80" class="mt-6">
                        Add Phone Number
                    </vs-button>
                    <vs-dialog v-model="active">
                        <template #header>
                            <h4 class="not-margin">
                                The OTP input is used by a one-time password.
                            </h4>
                        </template>
                        <v-container>
                            <v-row justify="center">
                                <v-col cols="12" sm="6" md="5" class=" lg:ml-48 md:ml-14">
                                    <v-text-field outlined prepend-icon="mdi-phone" label="Regular"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <vs-button floating color="#4ade80" size="large" class="mt-1">Sent OTP</vs-button>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-otp-input length="4"></v-otp-input>
                                </v-col>
                                <v-col cols="12" sm="6" md="12">
                                    <vs-button floating block color="#4ade80" size="large" class="mt-1">Submit OTP</vs-button>
                                </v-col>

                            </v-row>
                        </v-container>
                    </vs-dialog>
                </div>
            </v-col>
        </v-card-text>

    </div>

    <!-- action buttons -->
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
            active: false,
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
        async checkId(id) {
            if (!this.IsNumeric(id)) return false;
            if (id.substring(0, 1) == 0) return false;
            if (id.length != 13) return false;
            for (i = 0, sum = 0; i < 12; i++)
                sum += parseFloat(id.charAt(i)) * (13 - i);
            if ((11 - sum % 11) % 10 != parseFloat(id.charAt(12))) return false;
            return true;
        },
        IsNumeric(input) {
            var RE = /^-?(0|INF|(0[1-7][0-7]*)|(0x[0-9a-fA-F]+)|((0|[1-9][0-9]*|(?=[\.,]))([\.,][0-9]+)?([eE]-?\d+)?))$/;
            return (RE.test(input));
        }
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
