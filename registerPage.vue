<template>
  <div>
    <div class="content">
      <h1>Register</h1>
      <h1>Register</h1>
    </div>
    <form class="register" @submit.prevent="register">
      <div class="centering">
        <label for="newUsername">Username:</label>
        <input v-model="newUsername" type="text" id="newUsername" required />
      </div>
      <div class="centering">
        <label for="newPassword">Password:</label>
        <input v-model="newPassword" type="password" id="newPassword" required />
      </div>
      <button style="margin-left: 44.3rem;" type="submit">Register</button>
    </form>
    <router-link to="/login" class="centering">Login</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newUsername: '',
      newPassword: '',
    };
  },
  methods: {
    register() {
      const adminCredentials = {
        username: this.newUsername,
        password: this.newPassword,
      };
      localStorage.setItem('adminCredentials', JSON.stringify(adminCredentials));
      alert('Registration successful');
      // You can redirect to the login page or any other page here
    },
  },
};
</script>
