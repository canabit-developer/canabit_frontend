<template>
<v-carousel cycle height="300" hide-delimiter-background show-arrows-on-hover class="rounded-2xl shadow-xl" v-if="response" >
    <v-carousel-item v-for="(slide, i) in slides" :key="i" >
      
        <v-img :src="slide.image"></v-img>
 
    </v-carousel-item>
 
</v-carousel>
</template>

<script>
import { initial } from 'lodash'
import {
    Core
} from '~/vuexes/core'
import _ from 'lodash'
export default {
    data: () => {
        return ({
            slides: [{
                    title: 'Sales',
                    total: '245k',
                },
                {
                    title: 'Customers',
                    total: '12.5k',
                },
                {
                    title: 'Product',
                    total: '1.54k',
                },
                {
                    title: 'Revenue',
                    total: '$88k',
                },
            ],
            colors:[
                'primary',
                'success',
                'error',
                'warning',
                'info',
            ],
            response:false
        })
    },

    async created(){
        await this.initial();
    },
    methods:{
        async initial(){
            this.slides = await Core.getHttp(`/api/webconfig/slide/?is_active=true`)
            console.log(this.slides)
            this.response = true
        }
    }
}
</script>

<style>

</style>
