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

    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialogbottom-transition">
      <search />
    </v-dialog>

  </v-app>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import CHeader from "@/components/CHeader.vue"
  import CFooter from "@/components/CFooter.vue"
  import CSideBar from "@/components/CSideBar.vue"
  import CAlert from "@/components/CAlert.vue"
  import Search from '@/views/Search.vue'


  export default {  
    name: 'App',
    components: {
      CHeader,
      CFooter,
      CSideBar,
      CAlert,
      Search,
    },
    methods: {
      ...mapActions({
        setStatusDialog : 'dialog/setStatus',
      }),
    },
    computed: {
      ...mapGetters({
        statusDialog : 'dialog/status',
        currentComponent: 'dialog/component'
      }),
      dialog: {
        get () {
          return this.statusDialog
        },
        set (value) {
          this.setStatusDialog(value)
        }
      },
    },
  }
</script>
