<template>
  <!-- <FormInput /> -->
  <v-app>
    <LayoutForm/>
  </v-app>

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
