<template>
  <v-app>
    <HeaderPage />
    <v-main class="main">
      <v-container>
        <router-view
        />
      </v-container>
    </v-main>
    <FooterPage />
  </v-app>
</template>

<script>
import HeaderPage from '@/components/HeaderPage'
import FooterPage from '@/components/FooterPage'

export default {
  name: 'App',
  components:{
    HeaderPage,
    FooterPage,
  },
  data(){
    return{
    }
  },
  mounted(){
  },
};
</script>
