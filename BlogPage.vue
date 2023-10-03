<script>
export default {
  data() {
    return {
      isAdminLoggedIn: true,
      newBlog: { title: '', content: '' },
      blogs: [],
    };
  },
  methods: {
    // Function to create a new blog post
    createBlog() {
      const newBlogPost = {
        title: this.newBlog.title,
        content: this.newBlog.content,
      };
      this.blogs.push(newBlogPost);
      this.newBlog.title = '';
      this.newBlog.content = '';
    },

    // Function to edit a blog post
    editBlog(blog) {
      this.$router.push(`/edit-blog/${blog.id}`);
    },

    // Function to delete a blog post
    deleteBlog(blogId) {
      const index = this.blogs.findIndex(blog => blog.id === blogId);
      if (index !== -1) {
        this.blogs.splice(index, 1);
      }
    },
  },
  beforeRouteEnter(to, from, next) {
    // Check if the user was redirected from the login page
    if (from.name === 'SecondPage') {
      // Set isAdminLoggedIn to true
      next(vm => {
        vm.isAdminLoggedIn = false;
      });
    } else {
      // Keep isAdminLoggedIn as false (default value)
      next();
    }
  },
};
</script>

<template>
  <div>
    <div class="content">
      <h1>Blog Posts</h1>
    </div>
    <!-- Show blog management options only when admin is logged in -->
    <div v-if="isAdminLoggedIn">
      <!-- Blog Creation Form -->
      <form class="register" @submit.prevent="createBlog">
        <div class="centering">
          <label for="blogTitle">Title:</label>
          <input v-model="newBlog.title" type="text" id="blogTitle" required />
        </div>
        <div class="centering">
          <label for="blogContent">Content:</label>
          <textarea v-model="newBlog.content" id="blogContent" required></textarea>
        </div>
        <button style="margin-left: 44.5rem;" type="submit">Create</button>
      </form>
    </div>

    <!-- List of Blogs -->
    <ul>
      <li>
        <div class="firstblog">
          <p>Title: First Blog</p>
          <p>Content: Hey, there. This is the first blog on this website. Just wanted to say thank you for viewing my website.</p>
        </div>
      </li>
      <li v-for="(blog, index) in blogs" :key="index">
        <router-link :to="'/blog/' + blog.id">{{ blog.title }}</router-link>
        <!-- Show edit and delete buttons only when admin is logged in -->
        <button v-if="isAdminLoggedIn" @click="editBlog(blog)">Edit</button>
        <button v-if="isAdminLoggedIn" @click="deleteBlog(blog.id)">Delete</button>
        <div>
          <p>Title: {{ blog.title }}</p>
          <p>Content: {{ blog.content }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>


