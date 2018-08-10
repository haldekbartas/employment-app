<template>
   <div @click="offerClick" class="single-job-offer">
    
     <div class="offer-header">
         <h2>{{title}}</h2>
     </div>
     
     <div class="offer-content">
        <div class="offer-content-left">
            <h3 class="company">{{company}}</h3>
            <h3 class="location">{{location}}</h3>
        </div>
        <p >{{description}}</p>
           <div v-if="id != activeId" class="offer-show-more">
            Show more detail
            </div>
            
    <transition name="fadeHeight" >
    <div v-if="id == activeId" class="footer-wrapper">
     <div v-if="id == activeId" class="offer-hidden-conent">
      <ul>
         <li v-for="tag in tagsArray" >{{tag}}</li>
      </ul>
      <div class="offer-content-footer">
           <h3>Job type: {{type}}</h3>
           <h3><a :href="`mailto:${contact}`">{{contact}}</a></h3>
      </div>
        </div>
            </div>
        </transition>
     </div>
     
   </div>
</template>
<script>
    export default {
        name: 'SingleJob',
        props: {
            id: String,
            activeId: String,
            title: String,
            type: String,
            description: String,
            location: String,
            company: String,
            contact: String,
            tagsArray: Array,
        },
        methods: {
            offerClick(event) {
                this.$emit('clicked', this.id);
            }
        }
    }
</script>
<style scoped lang="scss">
    .fadeHeight-enter-active {
        transition: all 0.3s;
        max-height: 250px;
    }

    .fadeHeight-leave-active {
        transition: all 0.3s 0.4s;
        max-height: 250px;
        margin-top: 250px;
    }

    .fadeHeight-enter,
    .fadeHeight-leave-to {
        opacity: 0;
        max-height: 0px;
    }

    .single-job-offer {
        width: 90%;
        background-color: #20A39E;
        color: white;
        margin: 30px auto 50px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 8px 10px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
        &:hover {
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.35), 0 10px 10px rgba(0, 0, 0, 0.3);
        }
        @media (min-width: 768px) {
            width: 80%;
        }
        @media (min-width: 1024px) {
            width: 50%;
        }
        @media (min-width: 1440px) {
            width: 35%;
        }
        .offer-header {
            height: auto;
            background-color: #25bcb6;
            h2 {
                margin: 30px auto;
                line-height: normal;
                font-size: 48px;
                @media (max-width: 425px) {
                    font-size: 36px;
                }
            }
        }
        .offer-content {
            background-color: white;
            color: black;
            .offer-content-left {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                h3 {
                    font-size: 24px;
                    &.company {
                        margin: 25px 0 0 25px;
                    }
                    &.location {
                        margin: 15px 0 25px 25px;
                    }
                    &.company::before {
                        margin-right: 25px;
                        display: inline-block;
                        content: ' ';
                        background-image: url('../assets/img/briefcase-solid.svg');
                        background-repeat: no-repeat;
                        position: relative;
                        top: 5px;

                        height: 25px;
                        width: 25px;
                    }
                    &.location::before {
                        margin-right: 25px;
                        display: inline-block;
                        content: ' ';
                        background-image: url('../assets/img/map-marked-alt-solid.svg');
                        background-repeat: no-repeat;
                        position: relative;
                        top: 5px;
                        height: 25px;
                        width: 25px;
                    }
                }
            }
            .offer-content-footer {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                padding: 0 0 15px 25px;
                a {
                    color: black;
                    text-decoration: underline;
                }
                h3 {
                    font-size: 16px;
                }
            }
        }
        .footer-wrapper {
            padding: 0;
            margin: 0;
        }
        .offer-show-more {
            box-sizing: border-box;
            font-size: 20px;
            font-weight: 600;
            padding: 25px 0;
            border-top: 2px solid #008b86;
            width: 100%;
            color: #008b86;
            cursor: pointer;
        }
        .row {
            display: flex;
        }

        p {
            box-sizing: border-box;
            font-size: 20px;
            padding: 20px;
            margin: 0 10px;
            text-align: center;
        }
        ul {
            display: flex;
            list-style: none;
            flex-wrap: wrap;
            justify-content: space-around flex-start;
            padding: 0;
            li {
                display: flex;
                color: #008b86;
                justify-content: center;
                align-items: center;
                background-color: #FFEC9B;
                box-sizing: border-box;
                font-size: 16px;
                font-weight: 500;
                padding: 10px;
                margin: 10px 10px;
                min-width: 100px;
                min-height: 25px;
                border-radius: 32px;
            }
        }
    }
</style>