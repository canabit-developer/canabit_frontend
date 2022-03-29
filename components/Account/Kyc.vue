<template>
<v-card flat class="mt-5" v-if="response">

    <div class="px-3  mb-5">
        <v-card-text class="">
            <v-alert v-if="kyc.user_verified" type="success" :value="true">
                คุณได้ทำการยืนยันตัวตนเรียบร้อยแล้ว
            </v-alert>
            <v-alert v-if="kyc.user_verified == false" type="warning" :value="true">
                คุณยังไม่ได้ทำการยืนยันตัวตน โปรดตรวจสอบข้อมูล หากคุณกรอกข้อมูลแล้ว รอระบบตรวจสอบ 1-2 วันทำการ
            </v-alert>
            <v-alert v-if="kyc.user_verified_image_card_error == true && kyc.user_verified == false" type="error" :value="true">
                ภาพถ่ายสำเนาบัตรประจำตัวประชาชน มีปัญหา
            </v-alert>
            <v-alert v-if="kyc.user_verified_image_selfie_error == true && kyc.user_verified == false" type="error" :value="true">
                ภาพถ่าย selfie กับบัตรประจำตัวประชาชน มีปัญหา
            </v-alert>
            <v-alert v-if="kyc.user_verified_name_error == true && kyc.user_verified == false" type="error" :value="true">
                ชื่อ-สกุล ไม่ตรงกับบัตรประจำตัวประชาชน
            </v-alert>
            <v-alert v-if="kyc.user_verified_id_error == true && kyc.user_verified == false" type="error" :value="true">
                เลขบัตรประชาชน ไม่ตรงกับบัตรประจำตัวประชาชน
            </v-alert>
            <v-alert v-if="kyc.phone_verified == false && kyc.user_verified == false" type="error" :value="true">
                ยังไม่ได้ยืนยันตัวตนผ่าน มือถือ (OTP)
            </v-alert>
            <v-row>
                <v-col cols="12" sm="8" md="6">
                    <h2> 1. Verify your identity by entering your ID card number or passport number. </h2>
                    <v-alert v-if="!checkId && !isPassport" type="error" :value="true" dense outlined>
                        เลขบัตรประจำตัวประชาชนไม่ถูกต้อง
                    </v-alert>
                    <form @submit.prevent="updateCardId()">
                        <v-checkbox v-if="!kyc.user_verified" label="Use Passport Number" v-model="isPassport"></v-checkbox>
                        <v-text-field v-if="!isPassport " :disabled="kyc.user_verified" required oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" maxlength="13" @input="checkIdData()" class="mt-5" v-model="id" counter="13" hint="Please check the correctness ID Number" label="Fill in your ID card number" outlined></v-text-field>
                        <v-text-field v-else required class="mt-5" v-model="id" label="Fill in your ID card number" outlined></v-text-field>

                        <div class="flex">
                            <v-spacer></v-spacer>
                            <vs-button v-if="!isPassport && !kyc.user_verified" :disabled="!checkId" type="submit" floating color="#4ade80">Update</vs-button>
                            <vs-button v-else-if="!kyc.user_verified" type="submit" floating color="#4ade80">Update</vs-button>
                        </div>
                    </form>
                </v-col><br>
                <v-container>
                    <v-row justify="space-between">
                        <v-col cols="12" md="6">
                            <h2> 2. Verification of identity by uploading a picture of an ID card </h2><br>
                            <!-- <img v-if="kyc.image_card" :src="$url+kyc.image_card" alt=""> -->
                            <img class="h-1/2 w-4/5" v-if="kyc.image_card" :src="$url+kyc.image_card" alt="">
                            <img v-else src="https://sv1.picz.in.th/images/2022/03/11/rrz9yI.png" alt="">
                            <br><br>
                            <!-- <input class="mt-3" v-if="!kyc.user_verified" @input="storeKycCard('image_card')" ref="image_card" type="file" accept=".jpeg,.png,.jpg,GIF" /> -->
                            <div class="input_field flex flex-col w-max mx-auto text-center">
                                <label>
                                    <input class="text-sm cursor-pointer w-36 hidden" v-if="!kyc.user_verified" @input="storeKycCard('image_card')" ref="image_card" type="file" accept=".jpeg,.png,.jpg,GIF">
                                    <div v-if="!kyc.user_verified" class="mr-36 text bg-green-500 text-white border border-green-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-green-500">Choose File</div>
                                </label>
                            </div>
                        </v-col>
                        
                        <v-col cols="12" md="6">
                            <h2>3. Verify your identity by uploading a picture of your account number </h2>
                            <!-- <img v-if="kyc.image_selfie" :src="$url+kyc.image_selfie" alt=""> -->
                            <img class="h-1/2 w-3/4 mt-5" v-if="kyc.image_selfie" :src="$url+kyc.image_selfie" alt="">
                            <img v-else class="h-1/2 w-3/5 mt-7" src="https://sv1.picz.in.th/images/2022/03/11/rrzQ2V.png" alt="">
                            <br> <br>
                            <!-- <input class="mt-3" v-if="!kyc.user_verified" @input="storeKycCard('image_selfie')" ref="image_selfie" type="file" accept=".jpeg,.png,.jpg,GIF" /> -->
                            <div class="input_field flex flex-col w-max mx-auto text-center">
                                <label>
                                    <input class="text-sm cursor-pointer w-36 hidden" v-if="!kyc.user_verified" @input="storeKycCard('image_selfie')" ref="image_selfie" type="file" accept=".jpeg,.png,.jpg,GIF">
                                    <div v-if="!kyc.user_verified" class="mr-36 text bg-green-500 text-white border border-green-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-green-500">Choose File</div>
                                </label>
                            </div>
                        
                        </v-col>
                    </v-row>
                </v-container>

                <!-- <v-col cols="12" sm="4" md="6" class="d-none d-sm-flex justify-center position-relative md-8">
                    <v-img contain height="250" max-width="300" :src="require(`@/assets/misc/pose-m-1.png`)"></v-img>
                </v-col> -->

            </v-row>
            <v-col cols="12" md="4" class="mt-10" v-if="false">
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
            id: '',
            checkId: false,
            isPassport: false,
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
                this.id = this.kyc.card_id
                await this.checkIdData();
                this.response = true;
            }
        },
        async storeKycCard(typeImage) {

            let image = this.$refs[typeImage];
            if (image.files.length > 0) {
                let cover = await Core.setWaterMark(image.files[0]);
                let file = await Core.dataURLtoFile(cover.src);
                let formData = new FormData();
                formData.append(typeImage, file);
                let update = await Core.putImageHttpAlert(
                    `/api/account/kyc/${this.kyc.id}/`,
                    formData
                );
                await Web.switchLoad(true);
                await this.getMyKyc();
                await Web.switchLoad(false);
            }

        },
        async updateCardId() {

            let store = await Core.putHttpAlert(`/api/account/kyc/${this.kyc.id}/`, {
                'card_id': this.id
            })
            await Web.switchLoad(true);
            await this.getMyKyc();
            await Web.switchLoad(false);
        },
        async checkIdData() {
            let id = this.id;
            if (!this.IsNumeric(id)) return false;
            if (id.substring(0, 1) == 0) return false;
            if (id.length != 13) {
                this.checkId = false
                console.log(false);
                return false
            }
            let sum = 0;
            for (let i = 0; i < 12; i++)
                sum += parseFloat(id.charAt(i)) * (13 - i);
            if ((11 - sum % 11) % 10 != parseFloat(id.charAt(12))) {
                this.checkId = false
                console.log(false);
                return false
            } else {
                this.checkId = true
                console.log(true);
                return true;
            }

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
