<template>
<div class="center">
    <vs-button shadow @click="active=!active">
        How to do UID migration ?
    </vs-button>
    <vs-dialog scroll overflow-hidden not-close auto-width v-model="active">
        <template #header>
            <h3>
                Information you should know
            </h3>
        </template>
        <div class="con-content">
            <h4>
                Whats is Vuesax?
            </h4>
            <p>
                <br>
                - เวลาทำการของ Support
                : วันจันทร์ - ศุกร์ (24 ชั่วโมง )
                <br>
                <br>
                - วันเสาร์ – วันอาทิตย์ เวลา 10.00 - 18.00 น.

                <br>
            </p>

            <h4>
                ในกรณีย้าย IB ควรทำอย่างไร?
            </h4>

            <p>
                บัญชีที่เคยสมัครผ่านท่านมาก่อน จะไม่อยู่ภายใต้ 
                IBใหม่ที่ย้ายมาดังนั้นต้องทำการเปิด บัญชีใหม่เช่นกัน
                <br>
            </p>
            <h4>
                ในกรณีย้าย IB ควรทำอย่างไร?
            </h4>
                <br>
                <p>
                1. แจ้งความต้องการกับ Chat box ของซัพพอร์ตทางหน้า Website ของโบรกเกอร์ Exness
                <br>
                <p>
                2. ให้ท่านทำการยืนยันข้อมูลส่วนตัวผ่าน ลิงค์เฉพาะบุคคลที่ทางโบรกเกอร์ซัพพอร์ทแจ้งแก่ท่าน
                <br>
                <p>
                3. กรอกข้อมูลของเอเจนท์ใหม่ (ในที่นี้ คือตัวแทนของ FXPS)
                <br>
            </p>
        </div>
    </vs-dialog>
</div>
</template>

<script>
export default {
    data: () => ({
        active: false,
        input1: '',
        input2: '',
        checkbox1: false
    })
}
</script>

<style >

</style>
