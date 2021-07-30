<style type="text/css">
  .v-toolbar {
    flex : 0 !important;
  }
  .v-application .py-3 {
    text-align: center !important;
  }
  .v-card__text {
    text-align: center !important;
  }
</style>

<template>
  <v-app>
    <!-- component header -->
    
    <c-header />

    <!-- component sidebar -->

    <c-header />
    
    <!-- konten utama -->
    <v-header>
      <v-slide-y-transition mode="out-in">
        <router-view></router-view>
      </v-slide-y-transition>
    </v-header>

    <!-- component footer -->

    <c-header />

  </v-app>
</template>

<script>
  import CHeader from "@/components/CHeader.vue"


  export default {  
    name: 'App',
    components: {
      CHeader,
    },
  }
</script>
