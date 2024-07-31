<template>
  <div class="form-input layout-form">
    <h2>TODO APP</h2>
    <div class="line"></div>
    <div class="layout-input">
      <label for="" class="label-input"> Task name</label>
      <input
        ref="myInput"
        type="text"
        placeholder="Task name"
        v-model="newTaskInput"
        @keyup.enter="addNewTask"
      />
    </div>

    <div class="action">
      <button class="btn-primary" @click="addNewTask">ADD</button>
    </div>
    <div class="line"></div>

     <div class="filter-buttons">
      <button class="btn" :class="conditionFilter ==='Completed' ? 'active':''" @click="filterTask" value="Completed">Completed</button>
      <button class="btn" :class="conditionFilter ==='Inprogress' ? 'active':''" @click="filterTask" value="Inprogress">Inprogress</button>
      <button class="btn" :class="conditionFilter ==='ALL' ? 'active':''" @click="filterTask" value="ALL">ALL</button>
    </div>
    <div class="list-task" v-for="task in tasksFilter" :key="task.idTask">
      <div class="task">
        <div class="task-content">{{ task.name }}</div>
        <div class="line-left"></div>
        <div class="task-status">{{ task.status }}</div>
        <div class="line-left"></div>
        <div class="task-actions">
          <div class="edit-btn" @click="handleUpdateTask(task.idTask)">
            <i class="fa-solid fa-pen"></i>
            <button class="">Edit</button>
          </div>
          <button @click="deleteTask(task.idTask)" class="delete-btn">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
    <EditModal v-if="isOpenModal" />
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import EditModal from "./EditModal.vue";
export default {
  name: "FormInput",
  components: {
    EditModal,
  },
  mounted() {
    this.getTasksLocalStorage();
    this.setFilter('ALL');
  },
  data() {
    return {
      newTaskInput: "",
      status: "Inprogress",
    };
  },
  computed: {
    ...mapState("formInput", ["tasks","conditionFilter","tasksFilter"]),
    ...mapState("formEdit", ["isOpenModal"]),
  
  },
  methods: {
    ...mapActions("formInput", [
      "addTask",
      "removeTask",
      "saveLocalStorage",
      "getTasksLocalStorage",
      "updateTask",
      "setFilter"
    ]),
    ...mapActions("formEdit", ["setIsOpenModal", "setSelectedTask"]),
    addNewTask() {
      if (this.newTaskInput.trim()) {
        this.addTask({
          idTask: Date.now().toString(),
          name: this.newTaskInput,
          status: this.status,
        });
        this.saveLocalStorage();
        this.newTaskInput = "";
      }
    },
    deleteTask(idTask) {
      const confirmed = window.confirm(
        "Are you sure you want to delete this task?"
      );
      if (confirmed) {
        this.removeTask(idTask);
        this.saveLocalStorage();
      }
    },
    handleUpdateTask(idTask) {
      this.setIsOpenModal(true);
      this.setSelectedTask(idTask);
      // this.updateTask(idTask);
    },
    filterTask(event){
      const conditionFilter = event?.target?.value;
      this.setFilter(conditionFilter)
    }
  },
  watch: {
    tasks: {
     handler(){
       this.setFilter(this.conditionFilter)
     },
     deep: true
    }
  }
 
};
</script>
<style lang="scss">

</style>
