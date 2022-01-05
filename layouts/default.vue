<template>
<v-app  class="bg-main">
    <Core-Loading></Core-Loading>
     <UserMenu-MainMenu></UserMenu-MainMenu>
     <v-main >
         <div class="md:p-10">
              <Nuxt />
         </div>
         
     </v-main>
   
  
</v-app>
</template>

<script>
export default {
    name: 'DefaultLayout',
    data() {
        return {
         isDrawerOpen:false
        }
    }
}
</script>
