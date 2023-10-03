<template>
  <div>
    <div class="content">
      <h1>Login</h1>
      <h1>Login</h1>
    </div>
    <form class="register" @submit.prevent="login">
      <div class="centering" >
        <label for="username">Username:</label>
        <input v-model="username" type="text" id="username" required />
      </div>
      <div class="centering" >
        <label for="password">Password:</label>
        <input v-model="password" type="password" id="password" required />
      </div>
      <button style="margin-left: 44.5rem;" type="submit">Login</button>
    </form>
    <router-link class="centering"  to="/blogs">BlogPost</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      const adminCredentials = JSON.parse(localStorage.getItem('adminCredentials')) || {};
      if (adminCredentials.username === this.username && adminCredentials.password === this.password) {
        alert('Login successful');
        // You can redirect to the admin dashboard or any other page here
      } else {
        alert('Invalid credentials');
      }
    },
  },
};
</script>
