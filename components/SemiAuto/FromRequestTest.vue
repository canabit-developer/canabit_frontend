<template>
<div>
    <template>
        <div class="inline-flex ">
            <vs-button class="btn-chat" color="#FF964A" @click="active=!active">
                <span class="span">
                    Request test
                </span>

            </vs-button>
            <vs-dialog prevent-close v-model="active">
                <template #header>
                    <h4 class="not-margin">
                        <b>Request Test</b>
                    </h4>
                </template>

                <div class="con-form">
                    <h1 class="text-4xl font-semibold leading-9 text-green-400 text-center">Free for request test!</h1>
                    <p class="text-base leading-normal text-center text-green-400 mt-6">
                       Please check the download link to the email. <br />
                    </p>
                </div>

                <template #footer>
                    <div class="footer-dialog">
                        <vs-button block color="#17c964">
                            Submit Request Test
                        </vs-button>
                    </div>
                </template>
            </vs-dialog>
        </div>
    </template>
</div>
</template>

<script>
export default {
    data: () => ({
        active: false,
        input1: '',
        input2: '',
        checkbox1: false,
        select: null,
        items: [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
        ],
    })
}
</script>

<style scoped>

</style>
