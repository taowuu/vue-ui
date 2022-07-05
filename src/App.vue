<template>
  <h1 style="font-size: 50px; color: rgba(0,0,0,0.7);">Tao UI</h1>
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <router-link to="/">selector</router-link>
    <!-- <hr> -->
    <router-link to="/editable-table">edit table</router-link>
  </nav>
  <!-- <hr> -->
  <router-view/>
</template>

<style>
@import url('@/libs/tao.css');
#app {
  /* border: 1px solid red; */
  margin: 0 auto;
  /* height: 500px; */
  width: 700px;
  text-align: center;
  overflow: hidden;
}
nav {
  /* border: 1px solid red; */
  display: flex;
  flex-flow: column;
  width: 150px;
  float: left;
  background-color: #f8f9fa;
  border-radius: 3px;
  position: relative;
  left: 50px;
  /* margin-left: 50px; */
  /* overflow: hidden; */
  /* margin: 0 auto; */
}

a {
  color: rgba(0,0,0,0.5);
  text-decoration: none;
  text-align: center;
  font-size: 25px;
  margin: 10px;
}
a:hover {
    color: rgba(0,0,0,0.8);
}
.router-link-active {
  color: rgba(0,0,0,0.8);
}
</style>
