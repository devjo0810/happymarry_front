<template>
    <div class="global-spinner" v-if="isShow">
        <SyncLoader />
    </div>
</template>
<script>
import SyncLoader from 'vue-spinner/src/SyncLoader.vue'

export default {
    name: 'GlobalSpinner',
    components: {
        SyncLoader
    },
    data: () => ({
        isShow: false,
    })
}
</script>