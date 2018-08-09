<template>
   <div  class="add-job">
        <div v-if="!submitted" class="jobCard">
                     <h2 class="add-job-header">Post a job</h2>
         <form @submit.prevent="setSelectedTags();validateBeforeSubmit()">
                               <div class="input-block">
            <label for="jobTitle">Title:</label>
            <input
                :class="{'is-danger': errors.has('jobTitle') }"
               type="text" 
               name="jobTitle" 
               v-validate="'required|max:30'"
               placeholder="Astronaut" 
               v-model="jobOffer.title" >
            <span class="error" v-if="errors.has('jobTitle')">Title should have max 30 characters and is required.</span>
    </div>
                           <div class="input-block">
            <label for="jobLocation">Location:</label>
            <input
                :class="{'is-danger': errors.has('jobLocation') }"
               type="text" 
               name="jobLocation" 
               v-validate="'required|max:50'"
               placeholder="Mars" 
               v-model="jobOffer.location" >
            <span class="error" v-if="errors.has('jobLocation')">Job location should have max 50 characters and is required.</span>
    </div>

              <div class="input-block">
            <label>Select a type of job:</label>
            <select :class="{'is-danger': errors.has('jobType') }" v-model="jobOffer.type" name="jobType" v-validate="'required'" >
               <option value="" disabled selected >Choose a type of job</option>
               <option value="Space invader">Space invader</option>
               <option value="White-collar job">White-collar job</option>
               <option value="Scientist">Scientist</option>
            </select>
            <span class="error" v-if="errors.has('jobType')">Type of job is required.</span>
    </div>
              <div class="input-block textarea">
            <label for="">Describe a job</label>
            <textarea
              :class="{'is-danger': errors.has('jobDescription') }"
               name="jobDescription"
               v-model="jobOffer.description" 
               v-validate="'required|max:400'"
               placeholder="We are looking for somebody to colonize Mars." >
         </textarea>
            <span class="error" v-if="errors.has('jobDescription')">Job description might have max 400 characters and is required.</span>
    </div>
              <div class="input-block">
            <label for="tags">Give a five tags: </label>
            <tags-input element-id="tags"
                name="jobTags"
                class="jobTags"                
                :class="{'is-danger': errors.has('jobTags') }"
               v-model="selectedTags"
               v-bind:limit=5
                v-validate="'required|max:100'"
               placeholder="Add tag and press enter"
               :typeahead="true"></tags-input>
                  <span class="error" v-if="errors.has('jobTags')">Add minimum one tag</span>
    </div>
                      <div class="input-block">
            <label for="jobCompany">Company name:</label>
            <input
                :class="{'is-danger': errors.has('jobCompany') }"
               type="text" 
               name="jobCompany" 
               v-validate="'required|max:50'"
               placeholder="NASA" 
               v-model="jobOffer.company" >
            <span class="error" v-if="errors.has('jobCompany')">Company name is requried.</span>
    </div>
             <div class="input-block">
            <label for="jobContact">Email contact:</label>
            <input
                :class="{'is-danger': errors.has('jobContact') }"
               type="email" 
               name="jobContact" 
               v-validate="'required|max:50'"
               placeholder="adventure@with_nasa.com" 
               v-model="jobOffer.contact" >
            <span class="error" v-if="errors.has('jobContact')">Email contact must be vaild and is required.</span>
    </div>
            
         </form>
                     <div class="button-row">   
               
               <button class="ripple" @click="validateBeforeSubmit();setSelectedTags()"  :disabled="errors.any()">Send the offer</button> 
                 <button class="ripple" id="show-modal" @click="validateBeforePreview();setSelectedTags()">Show Preview</button>
            </div>
         
        </div>
        
        <div class="submitted" v-if="submitted">
               <h3>Thanks for post a job!</h3>
               <h4>You will be redirected to homepage in 5s.</h4>
            </div>
         
         <div class="modal-section">
                   
                      <!-- use the modal component, pass in the prop -->
  <modal v-if="showModal" @close="showModal = false">
    <div slot="header" class="offer-header">
            <h2>{{jobOffer.title}}</h2>
    </div> 
   <div slot="body" class="offer-content">
   <div class="offer-content-left">
       <h3 class="company">{{jobOffer.company}}</h3>
            <h3 class="location">{{jobOffer.location}}</h3>
   </div>
   <p >{{jobOffer.description}}</p>
        <div  class="offer-hidden-conent">
      <ul>
         <li v-for="tag in jobOffer.tagsArray">{{tag}}</li>
      </ul>
          <div class="offer-content-footer">
           <h3>Job type: {{jobOffer.type}}</h3>
           <h3><a :href="`mailto:${jobOffer.contact}`">{{jobOffer.contact}}</a></h3>
      </div>
      
        </div>
   </div>
   

  </modal>
  
         </div>

   </div>
</template>

<script>
    import Modal from '@/components/Modal.vue';
    export default {
        name: 'home',
        components: {
            Modal
        },
        data() {
            return {
                showModal: false,
                submitted: false,
                tags: "",
                selectedTags: [],
                jobOffer: {
                    id: null,
                    title: "",
                    type: "",
                    location: "",
                    description: "",
                    contact: "",
                    company: "",
                    tagsArray: []
                }
            }
        },
        methods: {
            setSelectedTags() {
                this.jobOffer.tagsArray = this.selectedTags;
            },
            post: function() {
                this.$http.post('https://workup-86ae0.firebaseio.com/posts.json', this.jobOffer).then(() => {
                    this.submitted = true;
                });
            },
            validateBeforeSubmit() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.post();
                        setTimeout(() => this.$router.push({
                            path: '/'
                        }), 5000);

                    }
                });

            },
            validateBeforePreview() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.showModal = true;
                    }
                });

            }
        }
    }

</script>
<style lang="scss" scoped>
    @import '../assets/styles/veoro-tags.css';
    @import '../assets/styles/job-modal.scss';
    body {
        background-color: #BADFF3;
    }
    .add-job {
        min-height: 100vh;
        height: auto;
        background-color: #BADFF3;
        width: 100%;
       
        padding-bottom: 20px;
        .add-job-header {
            font-size: 30px;
            margin: 0 0 30px;
            padding-top: 2%;
           
            @media (max-width: 768px) {
                padding-top: 90px;
            }
        }
    }
    .submitted {
        padding-top: 20%;
        h3 {
            font-size: 36px;
            padding: 0;
            margin: 0;
        }
    }
    .jobCard {
        width: 100%;
        margin: 0 auto;
        form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            .row {
                display: flex;
                justify-content: space-between;
            }
            .input-block {
                margin: 25px auto;
                height: 50px;
                width: 40%;
                border-radius: 5px;
                background: white;
                position: relative;
                @media (max-width: 1024px) {
                    width: 50%
                }
                @media (max-width: 425px) {
                    width: 90%;
                        margin-bottom:50px;
                }
                span{
                   
                }
                label {
                    position: absolute;
                    top: -25px;
                    left: 10px;
                    font-size: 20px;
                }
                input,
                select {
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                    border-radius: 5px;
                    border: 0;
                    padding-left: 15px;
                    font-size: 20px;
                }
                &.textarea {
                    width: 40%;
                    height: 150px;
                    box-sizing: border-box;
                    @media (max-width: 1024px) {
                        width: 50%
                    }
                    @media (max-width: 425px) {
                        width: 90%;
                    }

                    textarea {
                        resize: vertical;
                        width: 100%;
                        height: 100%;
                        padding: 15px;
                        border-radius: 5px;
                        font-size: 20px;
                        box-sizing: border-box;
                    }
                }
                .is-danger {
                    border: 1px solid red;
                }
                .error {
                    color: red;
                }
            }
        }
    }

    
    button {
        border: none;
        border-radius: 4px;
        padding: 12px 18px;
        font-size: 16px;
        min-width: 200px;
        text-transform: uppercase;
        cursor: pointer;
        color: white;
        background-color: #FFE087;
        color: black;
        box-shadow: 0 0 4px #999;
        outline: none;
        @media (max-width: 768px) {
            margin:  0 auto 20px  ;
            display: block;
        }
                @media (min-width: 768px) {
            margin:  25px auto;
        }
                    @media (min-width: 1024px) {
            margin:  10px 25px 0;
           
        }
        &.ripple {
            background-position: center;
            transition: background 0.8s;
        }
        &.ripple:hover {
            background: #FFE087 radial-gradient(circle, transparent 1%, #FFE087 1%) center/15000%;
        }
        &.ripple:active {
            background-color: #FFFFF0;
            background-size: 100%;
            transition: background 0s;
        }
    }

</style>
