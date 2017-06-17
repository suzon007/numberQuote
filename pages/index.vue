<template>
  <section>
    <navbar></navbar>
    <form-type></form-type>
  </section>
</template>

<script>
import Navbar from '~components/Navbar.vue'
import FormType from '~components/FormType.vue'


export default {
  components: {
    Navbar,
    FormType,
  },

  created() {
    		this.$store.dispatch('selectedPage', {page: 'math'})
  }
}
</script>

<style>

</style>
