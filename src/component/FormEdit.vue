<template>
  <div class="layout-form">
    <h2>Edit</h2>
    <div class="line"></div>
    <div class="layout-input">
      <label for="" class="label-input"> Task name</label>
      <input type="text" placeholder="task name" />
    </div>

    <div class="layout-input">
      <label for="" class="label-input"> Status</label>
      <select class="list-status">
        <option value="inprogress">inprogress</option>
        <option value="completed">completed</option>
      </select>
    </div>
    <div class="line"></div>
    <div class="filter-buttons">
      <button class="btn-primary btn-cancel">Cancel</button>
      <button class="btn-primary">Update</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormEdit",
};
</script>

<style lang="scss"></style>
