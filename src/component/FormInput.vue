<template lang="">
  <div class="layout-form">
    <h2>TODO APP</h2>
    <div class="line"></div>
    <div class="layout-input">
      <label for="" class="label-input"> Task name</label>
      <input
        ref="myInput"
        type="text"
        placeholder="Task name"
        v-model="newTaskInput"
        @keyup.enter="addTask"
      />
    </div>

    <div class="action">
      <button class="btn-primary" @click="addTask">ADD</button>
    </div>
    <div class="line"></div>

    <div class="filter-buttons">
      <button class="btn-primary">Completed</button>
      <button class="btn-primary">Inprogress</button>
      <button class="btn-primary">ALL</button>
    </div>
    <div class="list-task" v-for="task in tasks">
      <div class="task">
        <div class="task-content">{{ task.name }}</div>
        <div class="line-left"></div>
        <div class="task-status">{{ task.status }}</div>
        <div class="line-left"></div>
        <div class="task-actions">
          <div class="edit-btn">
            <i class="fa-solid fa-pen"></i>
            <button class="">Edit</button>
          </div>
          <button @click="removeTask" class="delete-btn">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormInput",
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      newTaskInput: "",
      status: "Inprogress",
    };
  },
  methods: {
    addTask() {
      if (this.newTaskInput.trim()) {
        this.tasks.push({ name: this.newTaskInput, status: this.status });
        this.newTaskInput = "";
        this.$nextTick(() => {
          this.$refs.myInput.focus();
        });
        this.saveLocalStorage();
      }
    },
    removeTask(){
      console.log("remove task");
    },
    saveLocalStorage() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  },
};
</script>
<style lang="scss"></style>
