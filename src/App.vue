<template>
  <div id="vueFrontApp">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
import NoLayout from './layout/NoLayout';
import HomeLayout from './layout/home/HomeLayout';
import AdminLayout from './layout/admin/AdminLayout';

export default {
  name: 'vueFrontApp',
  components: {
    NoLayout, HomeLayout, AdminLayout
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'No') + 'Layout'
    }
  },
}
</script>
