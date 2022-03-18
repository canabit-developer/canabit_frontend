<template>
  <div class="p-4" v-if="response">

  </div>
</template>

<script>

import {
  Core
} from '@/vuexes/core'
import _ from 'lodash'
import {
  Auth
} from '@/vuexes/auth'
export default {
  data: () => ({
    response:false,

  }),
  async created() {
    await this.startup()
    this.response = true
  },
  methods: {
    async startup() {

    },

  },
  computed: {

  },
  watch: {

  }
}
</script>

<style>

</style>
