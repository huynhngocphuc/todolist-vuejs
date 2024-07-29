<template>
  <v-card title="This is a title">
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="firstname"
              :counter="10"
              :rules="nameRules"
              label="First name"
              hide-details
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "FormInput",
};
</script>

<style>
</style>