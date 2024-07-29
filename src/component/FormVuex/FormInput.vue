<template>
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
      <button class="btn-primary" @click="addNewTask">ADD</button>
    </div>
    <div class="line"></div>
    <!-- <h1>{{ name }}</h1> -->
    <!-- <h1>{{ tasks }}</h1> -->
    <!-- <h1>{{getTask}}</h1> -->

    <!-- <div class="filter-buttons">
      <button class="btn-primary" @click="filterTask" value="Completed">Completed</button>
      <button class="btn-primary"  @click="filterTask" value="Inprogress">Inprogress</button>
      <button class="btn-primary" @click="filterTask" value="ALL">ALL</button>
    </div> -->
    <div class="list-task" v-for="task in tasks" :key="task.idTask">
      <div class="task">
        <div class="task-content">{{ task.name }}</div>
        <div class="line-left"></div>
        <div class="task-status">{{ task.status }}</div>
        <div class="line-left"></div>
        <div class="task-actions">
          <div class="edit-btn" @click="openModal(task.idTask)">
            <i class="fa-solid fa-pen"></i>
            <button class="">Edit</button>
          </div>
          <button @click="removeTask(task.idTask)" class="delete-btn">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
    <!-- <EditModal
      :isModalEnable="isModalEnable"
      :selectedTask="selectedTask"
      :save="updateTask"
      :cancel="closeModal"
    /> -->
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
import EditModal from "./EditModal.vue";
export default {
  name: "FormInput",
  components: {
    EditModal,
  },
  data() {
    return {
      newTaskInput: "",
      status: "Inprogress",
    };
  },
  computed: {
    ...mapState("formInput", ["tasks"]),
  },

  methods: {
    ...mapActions("formInput", ["addTask"]),
    addNewTask() {
      if (this.newTaskInput.trim()) {
        this.addTask({
          idTask: Date.now().toString(),
          name: this.newTaskInput,
          status: this.status,
        });
        this.newTaskInput = "";
      }
    },
  },
};
</script>
<style lang="scss"></style>
