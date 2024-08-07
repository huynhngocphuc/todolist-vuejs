<template>

  <h1>hello</h1>
    <router-view/>

</template>

<script >
import FormInput from "./component/FormVuex/FormInput.vue";
import HeaderComponents from "./component/layout/header.vue";
import LayoutForm from "./component/vuetify/LayoutForm.vue";
export default {
  components: {
    FormInput,
    HeaderComponents,
    LayoutForm
  },
};
</script>

<style lang="scss"></style>
