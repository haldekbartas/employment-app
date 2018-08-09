<template>
  <div class="hero">
    <h1><typewriter
    :speed="250"
    :full-erase="true"
    :interval="700"
    :words='["an employment ?" , "some fun ?" , "$$$$$ ?" , "a job ?" ]'>
    Are you looking for <br>
</typewriter>
</h1>
<h2>Take a look at ours offers below.</h2>
  </div>
</template>

<script>
    export default {
        name: 'hero',
    }
</script>

<style scoped lang="scss">
    .hero{
        width:100%;
        height: 100vh;
        background:url(../assets/img/bg-2.jpg);
        background-repeat: no-repeat;
        background-size:cover;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: flex-end;
        h1{
            margin-right: 20%;
            font-size: 48px;
            line-height: normal;
                  @media (max-width: 425px) {
                   margin:0 15px 25px 15px;
                      font-size: 34px;
                }
        }
        h2{
            margin-right: 20%;
            font-size: 24px;
            line-height: normal;
                              @media (max-width: 425px) {
                   margin:75px 15px 25px 15px;
                }
        }
    }
    typewriter{
        font-size: 20px;
    }    
    

</style>