<template>
  <div class="posts">
    <div class="post-form">
      <textarea v-model="formInput" @keyup="formError = ''"></textarea>
      <button @click="addPost">Add post</button>
      <div class="post-form-error" v-if="formError">{{formError}}, probably should fill the form</div>
    </div>
    <ul class="post-list">
      <li v-for="(post, index) in posts" :key="index" class="post-item">
        <div class="post-date">{{post.date}}</div>
        <div class="post-text">{{post.text}}</div>
        <div class="post-button">
          <button @click="deletePost(post.id)">Delete post</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'posts',
  data: function() {
    return {
      posts: [],
      formInput: '',
      formError: ''
    }
  },

  created: function() {
    var that = this;
    axios.get('/posts').then(function(response) {
      that.posts = response.data.reverse();
    });
  },

  methods: {
    addPost: function() {
      var that = this;
      axios.post('/posts', {text: this.formInput}).then(function(response) {
        that.posts.unshift(response.data);
      }).catch(err => that.formError = err.response.statusText);
    },

    deletePost: function(id) {
      var that = this;
      axios.delete('/posts/'+id).then(function(response) {
        var newPosts = that.posts.filter((post) => post.id !== response.data[0].id);
        that.posts = newPosts;
      }).catch((err) => console.log(err.response));
    }
  }
}
</script>

<style scoped>
  .posts {
    display: flex;
    justify-content: center;
  }

  .post-list {
    width: 70%;
  }

  .post-item {
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    padding: 10px;
    box-sizing: border-box;
    outline: 1px solid rgb(169, 169, 169);
  }

  .post-date {
    width: 100px;
    flex-shrink: 0;
  }

  .post-text {
    margin-left: 20px;
    margin-right: 20px;
    word-break: break-all;
    white-space: pre-wrap;
  }

  .post-button {
    width: 100px;
    margin-left: auto;
    flex-shrink: 0;
  }

  .post-button button {
    width: 100%;
  }

  .post-form {
    position: relative;
    width: 30%;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
  }

  .post-form textarea {
    height: 150px;
    padding: 10px;
    resize: none;
  }

  .post-form-error {
    padding: 5px;
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    background-color: maroon;
    color: #fff;
  }

  @media (max-width: 420px) {
    .posts {
      flex-direction: column;
    }

    .post-form {
      width: 100%;
      margin-right: 0;
      margin-bottom: 20px;
    }

    .post-list {
      width: 100%;
    }

    .post-item {
      flex-direction: column;
    }

    .post-text {
      margin: 0;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    .post-button {
      margin-left: 0;
    }
  }
</style>

