<template>
<div>
    <v-select v-if="selected" @change="switchLang" v-model="lang" :items="availableLocales" item-text="name" item-value="code" label="ภาษา"></v-select>
    <nuxt-link v-else v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)"><span :class="(lang == locale.code)?'text-gray-600':'text-green-300'">{{ locale.name }}</span> &nbsp;</nuxt-link>
    
</div>
</template>

<script>
export default {
    props: {
        selected :{
            defualt : false
        }
    },
    data: () => ({
        path: 'Data',
        lang: null
    }),
    computed: {
        availableLocales() {
            return this.$i18n.locales
        },
        currentLang() {
            return this.$i18n.locale
        }
    },
    async created() {
        this.lang = this.currentLang
        console.log(this.$i18n);
    },
    methods: {
        async switchLang() {
            await this.$i18n.setLocale(this.lang)
        }
    }
}
</script>

<style>

</style>
