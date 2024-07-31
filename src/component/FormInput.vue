<template >
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
      <button class="btn-primary" @click="filterTask" value="Completed">Completed</button>
      <button class="btn-primary"  @click="filterTask" value="Inprogress">Inprogress</button>
      <button class="btn-primary" @click="filterTask" value="ALL">ALL</button>
    </div>
    <div class="list-task" v-for="task in tasksFilter" :key="task.idTask">
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
    <EditModal
      :isModalEnable="isModalEnable"
      :selectedTask="selectedTask"
      :save="updateTask"
      :cancel="closeModal"
    />
  </div>
</template>
<script>
import EditModal from "./EditModal.vue";
export default {
  name: "FormInput",
  components: {
    EditModal,
  },
  created() {
    this.getDataLocalStorage();
    this.filterTask();
  },
  data() {
    return {
      idTask: "",
      newTaskInput: "",
      tasks: [],
      status: "Inprogress",
      isModalEnable: false,
      selectedTask: null,
      tasksFilter: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTaskInput.trim()) {
        this.tasks.push({
          idTask: Date.now().toString(),
          name: this.newTaskInput,
          status: this.status,
        });
        this.newTaskInput = "";
        this.$nextTick(() => {
          this.$refs.myInput.focus();
        });
        this.saveLocalStorage();
      }
    },
    removeTask(id) {
      const confirmed = window.confirm(
        "Are you sure you want to delete this task?"
      );
      const index = this.tasks.findIndex((task) => task.idTask === id);
      if (confirmed && index > -1) {
        this.tasks.splice(index, 1);
        this.saveLocalStorage();
      }
    },
    updateTask(dataUpdate) {
      const index = this.tasks.findIndex(
        (task) => task.idTask === dataUpdate.idTask
      );
      if (index > -1) {
        this.tasks[index] = dataUpdate;
        this.saveLocalStorage();
      }
      this.closeModal();
    },
    closeModal() {
      this.isModalEnable = false;
      this.selectedTask = null;
    },
    openModal(id) {
      const index = this.tasks.findIndex((task) => task.idTask === id);
      if (index > -1) {
        this.isModalEnable = true;
        this.selectedTask = this.tasks[index];
      }
    },
    saveLocalStorage() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    getDataLocalStorage() {
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      if (tasks) {
        this.tasks = tasks;
      }
    },
    filterTask(event) {
      const status = event?.target?.value || "ALL";
      switch (status) {
        case "Completed": {
          this.tasksFilter = this.tasks.filter(
            (task) => task.status === "Completed"
          );
          break;
        }
        case "Inprogress": {
          this.tasksFilter = this.tasks.filter(
            (task) => task.status === "Inprogress"
          );
          break;
        }
        default:
          this.tasksFilter = this.tasks;
          break;
      }

    },
  },
};
</script>
<style lang="scss"></style>
