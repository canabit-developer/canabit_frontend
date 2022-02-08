<template>
<div class="d-flex flex-sm-row flex-column">
    <div class="flex-grow-1">
        <v-card-title>
            <v-spacer></v-spacer>
        </v-card-title>
        <div class="space-y-16 mt-2 ">
            <div class="md:max-w-xl w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-lg transition-transform transform hover:scale-110 ">
                <img class="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png">
                <div class="w-full px-8 absolute top-8">
                    <div class="">
                        <div class="flex justify-between">
                            <p class="font-light">
                                Name
                            </p>
                            <p class="font-medium tracking-widest">
                                Karthik P
                            </p>
                        </div>

                    </div>
                    <div class="pt-1 flex justify-between">

                        <p class="font-light">
                            Point Number
                        </p>
                        <p class="font-medium tracking-more-wider">
                            12,345,789 point
                        </p>
                    </div>

                    <div class="flex justify-between mt-4">
                        <div class="">
                            <p class="font-light text-xs">
                                Valid

                                <p class="font-medium tracking-wider text-sm">
                                    11/15
                                </p>
                        </div>
                        <div class="">
                            <p class="font-light text-xs text-xs">
                                Expiry

                                <p class="font-medium tracking-wider text-sm">
                                    03/25
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="ml-48 mr-48 mt-4 justify-center">
            <div class="flex justify-between">
                <v-chip class="ma-2" color="warning" text-color="white" x-small>
                    Gold
                </v-chip>

                <v-chip class="ma-2" color="info" text-color="white" x-small>
                    Platinum
                </v-chip>

            </div>
            <v-progress-linear value="15" height="10" rounded class="mb-18">
            </v-progress-linear>
            <p class="font-medium tracking-more-wider text-center text-xs mt-2">12,345,789 point / from 50,000,000 point</p>
        </div>
    </div>
    <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-2/5 space-y-16 mr-20">
        <v-alert icon="mdi-shield-lock-outline" prominent text type="info" class="-mt-8">
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Sed in libero ut nibh placerat accumsan.. Curabitur blandit mollis lacus. Curabitur blandit mollis lacus.
        </v-alert>
        <v-form>
            <v-row>
                <v-col cols="12" md="3">
                    <label for="firstname">Name</label>
                </v-col>

                <v-col cols="12" md="9">
                    <v-text-field id="firstname" outlined dense placeholder="First Name" hide-details></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                    <label for="email">Bank number</label>
                </v-col>

                <v-col cols="12" md="9">
                    <v-text-field id="email" outlined dense placeholder="*******" hide-details></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                    <label for="password">Bank name</label>
                </v-col>

                <v-col cols="12" md="9">
                    <v-text-field id="password" type="name" outlined dense placeholder="enter bank name" hide-details></v-text-field>
                </v-col>
                <v-btn color="primary" class="w-full py-3 mt-6 font-medium">
                    Cashout
                </v-btn>
            </v-row>
        </v-form>
    </div>
</div>
</template>

<script>
export default {

}
</script>
