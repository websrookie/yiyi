<template>
  <div id="app">
    <YiyiImage
      src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"
    ></YiyiImage>
  </div>
</template>

<script>
import YiyiUi from '@yiyi/ui';
const { YiyiImage } = YiyiUi;

export default {
  name: 'App',
  components: {
    YiyiImage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
