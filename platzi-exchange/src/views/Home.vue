<template>
  <div>
    <bounce-loader :loading="loading" :color="'#68d391'" :size="100" />
    <px-assets-table v-if="!loading" :assets="assets" />
  </div>
</template>

<script>
import api from '@/api';
import PxAssetsTable from '@/components/PxAssetsTable';

export default {
  name: 'Home',
  components: { PxAssetsTable },

  data() {
    return {
      loading: false,
      assets: []
    };
  },

  created() {
    this.loading = true;

    api
      .getAssets()
      .then(assets => (this.assets = assets))
      .finally(() => (this.loading = false));
  }
};
</script>
