<template>
  <v-container>
    <v-card>
      <v-layout>
        <v-navigation-drawer floating permanent>
          <v-list density="compact" nav>
            <v-list-item
              prepend-icon="mdi-view-dashboard"
              title="Home"
              value="home"
            >
            
          </v-list-item>
            <v-list-item
              prepend-icon="mdi-forum"
              title="About"
              value="about"
            ></v-list-item>
          </v-list>  
        </v-navigation-drawer>
        <v-main>
            <FormInput/>
            <!-- <RouterView /> -->
        </v-main>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import FormInput from "../FormVuex/FormInput.vue";
export default {
  name:"LayoutForm",
  components: {
    FormInput,
  },
  data() {},
};
</script>

<style >
</style>