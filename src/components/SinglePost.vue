<template>
    <div class="post">
      <div>
        <div class="date">{{ post.createdAt }}</div>
        <router-link :to="{ name: 'DetailsPost', params: { id: post.id } }">
          <h3>{{ post.title }}</h3>
        </router-link>
      </div>
      <p class="snipp">{{ snippet }}</p>
    </div>
  </template>
  
  <script>
  import { computed, ref } from 'vue'
  export default {
    props: ['post', 'posts'],
    setup(props) {
      const post = ref(props.post)
      const snippet = computed(() => {
        return post.value.description.substring(0, 20) + '...'
      })
      return { snippet }
    }
  }
  </script>
  
  <style>
  .post {
    margin: 0px 0 30px;
    padding-bottom: 25px;
    border-bottom: 1px #e7e7e7;
  }
  .post h3 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: black;
    margin-bottom: 10px;
    max-width: 590px;
  }
  .post h3::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: rgb(67, 67, 67);
    position: absolute;
    z-index: -1;
    padding-right: 45px;
    left: -35px;
  }
  .snipp {
    font-size: large;
  }
  .date {
    float: right;
    margin-top: 33px;
    font-size: 16px;
  }
  .author {
    float: right;
    margin-top: 8px;
    cursor: pointer;
    color: #7057dc;
  }
  </style>
  