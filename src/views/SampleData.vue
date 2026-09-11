<script>
export default {
  data() {
    return {
      name: 'Name',
      age: '21',
      studentId: '24-0035-69',
      course: 'BS Information Technology',
      yearLevel: '3rd Year',
    }
  },
}
</script>

<template>
  <section class="sample-profile">
    <h2>Student Profile</h2>
    <label>
      Name
      <input v-model="name" type="text" />
    </label>
    <label>
      Age
      <input v-model="age" type="number" />
    </label>
    <label>
      Course
      <input v-model="course" type="text" />
    </label>

    <div class="profile-output">
      <p>Name: {{ name }}</p>
      <p>Age: {{ age }}</p>
      <p>Student ID: {{ studentId }}</p>
      <p>Course: {{ course }}</p>
      <p>Year Level: {{ yearLevel }}</p>
    </div>
  </section>
</template>