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

    <c-side-bar />
    
    <!-- konten utama -->
    <v-content>
      <v-slide-y-transition mode="out-in">
        <router-view></router-view>
      </v-slide-y-transition>
    </v-content>

    <!-- component footer -->

    <c-footer />

    <c-alert />

  </v-app>
</template>

<script>
  import CHeader from "@/components/CHeader.vue"
  import CFooter from "@/components/CFooter.vue"
  import CSideBar from "@/components/CSideBar.vue"
  import CAlert from "@/components/CAlert.vue"


  export default {  
    name: 'App',
    components: {
      CHeader,
      CFooter,
      CSideBar,
      CAlert
    },
  }
</script>
