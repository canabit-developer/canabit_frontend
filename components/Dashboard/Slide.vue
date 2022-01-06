<template>
<v-carousel cycle height="300" hide-delimiter-background show-arrows-on-hover class="rounded-2xl shadow-xl" >
    <v-carousel-item v-for="(slide, i) in slides" :key="i" >
      
        <v-img src="https://media.istockphoto.com/photos/empty-pink-shopping-bag-in-the-studio-lighting-design-concept-for-picture-id1094274086?k=20&m=1094274086&s=170667a&w=0&h=VCabJ0J4sZCoK6mynyVQGu5IYDdrjN67hZK3hGZGcVE="></v-img>
 
    </v-carousel-item>
</v-carousel>
</template>

<script>
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
            ]
        })
    }
}
</script>

<style>

</style>
