<template>
  <div class="hello">
    <img alt="Vue logo" class="logo" src="../assets/logo.png">
    <h1 @click="$router.push('/test')"> go test </h1>
    <p>
      hello vue 111
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
  </div>
</template>

<script>
import { postAny } from '@/api'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created() {
    postAny().then(res => {
      console.log(res)
    })
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
