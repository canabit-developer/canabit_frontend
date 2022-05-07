<template>
<div>
    <v-select v-if="selected" @change="switchLang" v-model="lang" :items="availableLocales" item-text="name" item-value="code" label="ภาษา"></v-select>
    <div v-else  class="flex">
        <v-btn @click="switchLangClick(locale.code)" color="success" text  v-for="locale in availableLocales" :key="locale.code"><span :class="(lang == locale.code)?'text-gray-600':'font-semibold text-green-500'">{{ locale.name }}</span></v-btn>
    </div>
     
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
              this.lang = this.currentLang
        },

        async switchLangClick(lang){
           await this.$i18n.setLocale(lang) 
            this.lang = this.currentLang
   
        }
      
    }
}
</script>

<style>

</style>
