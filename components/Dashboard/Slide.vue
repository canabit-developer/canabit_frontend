<template>
<v-carousel cycle height="300" hide-delimiter-background show-arrows-on-hover class="rounded-2xl" >
    <v-carousel-item v-for="(slide, i) in slides" :key="i" >
        <v-sheet :color="colors[i]"   class="h-full w-full" >
            <v-row class="fill-height" align="center" justify="center">
                <div class="text-h2">
                    {{ slide.title }} Slide
                </div>
            </v-row>
        </v-sheet>
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
