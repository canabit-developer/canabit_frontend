<template>
<vs-alert shadow :color="color">
    <template #title>
        Rewards
    </template>
    This  reward is counted from the date and time of tracking cashback from that purchase. The cashback bonus will appear once your cashback is tracked. Store orders that do not meet the above conditions will not be counted as mission orders (eg cancelation, return, exchange, use of a discount code that is not confirmed by ShopBack, or purchase of a category that is not verified by ShopBack). except for refunds from ShopBack). The company reserves the right to change the conditions. without prior notice

</vs-alert>
</template>

<script>
// eslint-disable-next-line object-curly-newline

export default {
    data: () => {
        return ({
            color: 'success'
        })
    }
}
</script>
