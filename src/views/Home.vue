<template>
  <div class="home">
  
  <Hero />
  <div class="job-list">
       <div class="input-block">
           <input type="text" v-model="search" placeholder="Search for a job"  />
       </div>
        
<SingleJob 
    v-for="job in filteredJobs" 
     @clicked="onClickChild"
      v-bind:id="job.id"
      v-bind:activeId="activeId"
      v-bind:title="job.title"
      v-bind:type="job.type"
      v-bind:location="job.location"
      v-bind:company="job.company"
      v-bind:contact="job.contact"
      v-bind:description="job.description"
      v-bind:tagsArray="job.tagsArray"
      />
      
  </div>

      
  </div>
</template>

<script>
    import SingleJob from '@/components/SingleJob.vue'
    import Hero from '@/components/Hero.vue'

    export default {
        name: 'home',
        components: {
            SingleJob,
            Hero
        },
        data() {
            return {
                jobs: [],
                activeId: "",
                search: ""
            }
        },
        methods: {
            onClickChild: function(value) {
                this.activeId = value;
            }
        },
        created() {
            this.$http.get('https://workup-86ae0.firebaseio.com/posts.json')
                .then((data) => {
                    var jobsArray = [];
                    for (let key in data.data) {
                        data.data[key].id = key;
                        jobsArray.push(data.data[key]);
                    }
                    this.jobs = jobsArray;
                });
        },
        computed:{
            filteredJobs: function(){
                return this.jobs.filter((job) =>{
                    return job.title.toLowerCase().match(this.search);
                });
            }
        }
    }

</script>

<style lang="scss" scoped>
    
    .job-list{
        min-height: 50vh;
    }
    
    .input-block {
                margin: 25px auto;
                height: 50px;
                width: 90%;
                position: relative;
                border-bottom:1px solid black;
        @media (max-width:425px){
            width: 80%;
        }
       @media (max-width:768px){
            width: 60%;
        }
        @media (max-width:1024px){
            width: 35%;
        }
          @media (min-width:1440px){
            width: 30%;
        }
       

    }
    
     input {
         
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                    border: 0;
                    padding-left: 15px;
                    font-size: 20px;
                    height: 50px;
                    outline: none;
                }

              

</style>
