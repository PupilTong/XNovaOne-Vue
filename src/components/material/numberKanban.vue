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
            num:{
                number:[this.options.value,this.options.maxium],
                content: '{nt}/{nt}',
                style:{
                    fontFamily : 'Roboto',
                    fontSize:this.options.size /10,
                    fill : this.options.value/this.options.maxium>0.8?'#ec032a':this.options.value/this.options.maxium>0.6?'#ffdb5c':'#9fe6b8'
                }
            }
        }
    }
}
</script>

<style>

</style>