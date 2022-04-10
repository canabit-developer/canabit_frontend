<template>
<div>
    <h2>ID Number</h2>
    <h2> Verify your identity by entering your ID card number or passport number.</h2>
    <img src="https://sv1.picz.in.th/images/2022/03/11/rrz9yI.png" alt="">
    <v-btn color="success">เพิ่มข้อมูล</v-btn>
    <pre>{{kyc}}</pre>
    <v-dialog v-model="dialog" scrollable persistent :overlay="false" max-width="500px" transition="dialog-transition">
        <v-card>
            <v-card-text>
                <form @submit.prevent="verify()">
                    <pre>{{form}}</pre>
                    <v-checkbox label="Use Passport Number" v-model="form.use_passport"></v-checkbox>
                    <v-text-field required class="mt-5" v-model="form.card_id" hint="Please check the correctness ID Number" label="Your ID card number." outlined></v-text-field>

                    <div class="flex">
                        <v-spacer></v-spacer>
                        <v-btn type="submit" color="success">บันทึกข้อมูล</v-btn>
                        <!-- <vs-button v-if="!isPassport && !kyc.user_verified" :disabled="!checkId" type="submit" floating color="#4ade80">Update</vs-button>
                    <vs-button v-else-if="!kyc.user_verified" type="submit" floating color="#4ade80">Update</vs-button> -->
                    </div>
                </form>
            </v-card-text>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
import {
    Web
} from "~/vuexes/web";
export default {
    props: {
        kyc: {
            default: {}
        }
    },
    data() {
        return ({
            dialog: true,
            form: {}
        })
    },
    async created() {
        this.form = this.kyc
    },
    methods: {
        async verify() {
            if (this.form.use_passport) {
                 await this.saveData();
            } else {
                let check = await this.checkIdData();
                if (check) {
                    await this.saveData();
                } else {
                    await Web.noti('danger', 'Wrong ID Number', 'Your ID Card is not format.')
                }
            }
        },
        async saveData(){

        },
        async checkIdData() {
            let id = this.form.card_id;
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
    }
}
</script>

<style>

</style>
