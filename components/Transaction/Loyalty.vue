<template>
<v-card>
    <div class="d-flex flex-sm-row flex-column">
        <div class="flex-grow-1">
            <v-card-title>
                <span class="me-3">Loyalty Canabit Point</span>
                <v-spacer></v-spacer>
            </v-card-title>
            <div class="space-y-16 mt-1">
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
                                    Valid</p>

                                    <p class="font-medium tracking-wider text-sm">
                                        11/15
                                    </p>
                            </div>
                            <div class="">
                                <p class="font-light text-xs text-xs">
                                    Expiry </p>

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
        <v-divider class="my-sm-5 mx-5" :vertical="$vuetify.breakpoint.smAndUp"></v-divider>
        <div class="flex-grow-1">
            <v-card-title>
                <span class="me-3">History Transection</span>
                <v-spacer></v-spacer>
            </v-card-title>

            <v-card-text>
                <v-list>
                    <v-list-item v-for="(data,index) in History" :key="data.img" :class="`d-flex px-0 ${index > 0 ? 'mt-4':''}`">
                        <v-img max-height="30" max-width="30" :src="data.img" class="me-3"></v-img>

                        <div class="d-flex align-center flex-grow-1 flex-wrap">
                            <div class="me-auto pe-2">
                                <h4 class="font-weight-semibold">
                                    {{ data.title }}
                                </h4>
                                <span class="text-xs">{{ data.subtitle }}</span>
                            </div>

                            <span class="font-weight-semibold success--text">{{ data.amount }} Point</span>
                        </div>
                    </v-list-item>
                </v-list>
            </v-card-text>
        </div>
    </div>

</v-card>
</template>

<script>
export default {
    components: {

    },
    data: () => {
        return({
            History:[{
                
                title: 'Google Adsense',
                subtitle: '211101CP50NNH',
                amount: '+957',
            },
            {
                
                title: 'Github Enterprise',
                subtitle: '211101CP50NNH',
                amount: '+$446',
            },
            {
                
                title: 'Upgrade Slack Plan',
                subtitle: '211101CP50NNH',
                amount: '+$957',
            },
            {
                
                title: 'Digital Ocean',
                subtitle: '211101CP50NNH',
                amount: '+$92,705',
            },
            {
                
                title: 'Bank Account',
                subtitle: '211101CP50NNH',
                amount: '+$21',
            },
        ]
        })
    },
    
}
</script>
