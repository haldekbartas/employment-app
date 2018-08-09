<template>
      <transition name="modal">
    <div class="modal-mask">
        <div class="modal-container">
          <div class="single-job-offer">
                     
                   
            <slot name="header">
              default header
            </slot>
        

          
            <slot name="body">
              default body
            </slot>

              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
      
              
          </div>

  
        </div>
    </div>
  </transition>
</template>





<style scoped lang="scss">

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}



.modal-container {
        width: 90%;
        max-width: 600px;
        background-color:white;
        color: white;
        margin: 10% auto;
        display: flex;
        flex-direction: column;
        box-shadow: 0 8px 10px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
        

}


.modal-default-button {
  display:block;
    margin: 10px auto;
    background-color: transparent;
    border: 1px solid black;
    border-radius: 3px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
}
</style>