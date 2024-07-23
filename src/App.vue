<template>
  <FormInput :tasks="tasks" />
  <FormEdit />
</template>

<script>
import FormEdit from "./component/FormEdit.vue";
import FormInput from "./component/FormInput.vue";

export default {
  components: {
    FormInput,
    FormEdit,
  },
  created() {
    this.getDataLocalStorage();
  },
  data() {
    return {
      tasks: ["abc"]
    }
  },
  methods: {
    getDataLocalStorage(){
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      if(tasks){
        this.tasks = tasks;
      }
    }
  }

};
</script>

<style lang="scss"></style>
