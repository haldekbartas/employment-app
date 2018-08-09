<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/AddJob">Post a job</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic');
    body{
        margin:0;
    }
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        font-family: 'Roboto';
        background-color: white;
        position: relative;
    }
    #nav {
        background: transparent;
        position: absolute;
        right: 10%;
        top: 25px;
            @media (max-width: 1024px) {
       top: 25px;
        right:0;
        }
        a {
            margin:45px 25px;
            font-size: 24px;
            color: inherit;
            text-decoration: inherit;
        }
    }

</style>
