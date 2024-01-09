<template>
  <div class="player">
    <div>
      <div class="date">{{ player.createdAt }}</div>
      <router-link :to="{ name: 'DetailsPlayer', params: { id: player.id } }">
        <h3>{{ player.name }}</h3>
      </router-link>
    </div>
    <p class="snipp">{{ snippet }}</p>
  </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  props: ['player', 'players'],
  setup(props) {
    const player = ref(props.player)

    const snippet = computed(() => {
      const positionSnippet = player.value.position

      return `${positionSnippet}`
    })

    return { snippet }
  }
}
</script>

<style>
.player {
  margin: 0px 0 30px;
  padding-bottom: 25px;
  border-bottom: 1px #e7e7e7;
}
.player h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: black;
  margin-bottom: 10px;
  max-width: 590px;
}
.player h3::before {
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
