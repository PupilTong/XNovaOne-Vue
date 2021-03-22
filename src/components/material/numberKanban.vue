<template>
    <dv-digital-flop :config="num"/>
</template>

<script>
export default {
    name:'numberKanban',
    props:{
        options:{
            default:{
                maxium:100,
                value:20
            }
        },

    },
    data(){
        return{
            fontSize:0
        }
    },
    computed:{
        num(){
            
            return{
                number:[this.options.value,this.options.maxium],
                content: '{nt}/{nt}',
                style:{
                    fontFamily : 'Roboto',
                    fontSize:this.fontSize,
                    fill : this.options.value/this.options.maxium>0.8?'#ec032a':this.options.value/this.options.maxium>0.6?'#ffdb5c':'#9fe6b8'
                }
            }
        }
    },
    mounted(){
        this.fontSize=this.$el.offsetHeight /1.75
    }
}
</script>

<style>

</style>