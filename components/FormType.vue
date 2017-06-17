<template>
    <div class="container">
        <div class="row" v-if="page.page === 'math'">
            
            <div class="col-lg-12">
                <h2>Math</h2>
                <div class="input-group">
                    <input 
                        type="number" 
                        class="form-control" 
                        placeholder="Which number is in your mind?"
                        v-model="quoteNumber"
                    >
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="button" @click="getQuote">Get Quote</button>
                    </span>
                </div><!-- /input-group -->
                <hr>
            </div><!-- /.col-lg-6 -->
        </div><!-- /.row -->

        <div class="row" v-if="page.page === 'trivia'">
            <div class="col-lg-12">
                <h2>Trivia</h2>
                <div class="input-group">
                    <input 
                        type="number" 
                        class="form-control" 
                        placeholder="Which number is in your mind?"
                        v-model="quoteNumber"    
                    >
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="button" @click="getQuote">Get Quote</button>
                    </span>
                </div><!-- /input-group -->
                <hr>
            </div><!-- /.col-lg-6 -->
        </div><!-- /.row -->

        <div class="row" v-if="page.page === 'date'">
            <div class="col-lg-12">
                <h2>Date</h2>
                <div class="input-group">
                    <input 
                        type="date" 
                        class="form-control" 
                        placeholder="Which date is in your mind?"
                        v-model="quoteNumber" 
                    >
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="button" @click="getQuote">Get Quote</button>
                    </span>
                </div><!-- /input-group -->
                <hr>
            </div><!-- /.col-lg-6 -->
        </div><!-- /.row -->

        <quote :text="quote"></quote>


    </div>
</template>

<script>
    import axios from 'axios'
    import Quote from '~components/Quote.vue'

    export default {

        data() {
    		return {
    			quoteNumber: '',
                quote: '',
    		}
    	},
		computed: {
			page(){ 
				return this.$store.getters.page
			},
		},
        watch:{
            page: function(){
                this.quote = ''
                this.quoteNumber= ''
            }
        },
		methods: {
            
			getQuote() {
                var self = this
                console.log(this.quoteNumber)

                if(this.page.page === 'trivia'){
                    this.quote = 'loading...'
                    axios.get('http://numbersapi.com/' + this.quoteNumber)
                    .then(function(response){
                        self.quote = response.data
                    })
                }

                if(this.page.page === 'math'){
                    this.quote = 'loading...'
                    axios.get('http://numbersapi.com/' + this.quoteNumber +'/math')
                    .then(function(response){
                        self.quote = response.data
                    })
                }

                if(this.page.page === 'date'){

                    var givenDate = this.quoteNumber
                    var extractedMonth = givenDate.substring(5,7)
                    var extractedDate = givenDate.substring(8,11)
                    
                    var number = extractedMonth + '/' + extractedDate

                    this.quote = 'loading...'
                    axios.get('http://numbersapi.com/' + number +'/date')
                    .then(function(response){
                        self.quote = response.data
                    })
                }

            }
		},

        components: {
            Quote
        }
    }
</script>