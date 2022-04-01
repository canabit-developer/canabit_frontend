<template>
<div>
    <vs-button floating @click="dialogFile = true" color="success">Upload Picture</vs-button>

    <v-dialog v-if="dialogFile" v-model="dialogFile" persistent scrollable max-width="500px" transition="dialog-transition">
        <v-card>
            <v-card-title primary-title> Upload Picture
                <v-spacer></v-spacer>
                <v-btn @click="closeDialog()" icon  color="error"><v-icon>mdi-close</v-icon></v-btn>
            </v-card-title>
            <v-card-text>
                <div v-if="step == 1">
                    <input ref="pictureInput2" accept="image/jpeg,image/png" @change="changeImage2" type="file" name="" id="">
                </div>
          

                <div v-if="step == 2">
                    <!-- <div v-html="canvas"></div> -->
                    <cropper class="cropper" :src="image" :stencil-props="{
              aspectRatio: 10 / 12,
            }" @change="ready"></cropper>
                    <br>
                    <center>
                        <vs-button floating @click="callbackImage()" color="success">Upload Picture</vs-button>
                    </center>
                </div>
            </v-card-text>

        </v-card>
    </v-dialog>
</div>
</template>

<script>
import PictureInput from "vue-picture-input";
import {
    Cropper
} from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import {
    Core
} from '~/vuexes/core'
export default {
    components: {
        PictureInput,
        Cropper,
    },
    data() {
        return {
            dialogFile: false,
            image: "",
            step: 1,
            canvas: {},
            data: {},
            file: {},
        };
    },
    methods: {
        async changeImage2() {
            console.log(this.$refs.pictureInput2.files[0]);
            let data = await Core.getBase64(this.$refs.pictureInput2.files[0]);
            this.image = data;
            this.step = 2;
        },
        async changeImage(val) {
            console.log(this.$refs.pictureInput.file);
            this.image = val;
            this.step = 2;
        },
        change({
            coordinates,
            canvas
        }) {
            console.log(coordinates, canvas);
            this.canvas = coordinates;
        },
        async ready(val) {
            console.log(val);
            let canvas = val.canvas;
            var url = canvas.toDataURL();
            this.file = await Core.dataURLtoFile(url);
            console.log(this.file);
        },

        async callbackImage() {
            this.step = 1
            this.dialogFile = false;
            await this.$emit('profileImage', this.file)
        },
        async closeDialog(){
            this.step = 1
          this.dialogFile = false;
        
        }
    },
};
</script>

<style>
</style>
