<template>
  <div id="post_body">
     <transition name="moveInUp">
         <router-view/> 
     </transition>
  </div>
</template>


<style>
.moveInUp-enter-active{
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}
</style>
