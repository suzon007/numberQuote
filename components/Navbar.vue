<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="http://zisuzon.com">ZIS</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" @click="selectInput('math')">Math</a></li>
          <li><a href="#" @click="selectInput('trivia')">Trivia</a></li>
          <li><a href="#" @click="selectInput('date')">Date</a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
  export default {

    data() {
      return {
      
      }
    },
		computed: {
			
		},
		methods: {
			selectInput(page){
        this.$store.dispatch('selectedPage', {page: page})
      }
		}
  }
</script>

<style scoped>
  .navbar-default{
    background-color: #F5D061;
    border: none;
    border-radius: 0px;
  }
  .navbar-default a{ 
    color: #2A363B;
  }
  .navbar-nav a{
    color: #2A363B;
  }

</style>