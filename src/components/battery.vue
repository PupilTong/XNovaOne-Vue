<template>
  <div >
      <div class="md-layout md-alignment-center-center" style="width:100%;height:80%;padding:10%" >
        <dv-percent-pond :config="pond" class=" md-layout-item" style="width:100%;height:100%"/>
      </div>
      <div class="md-layout md-alignment-center-center" style="width:100%;height:20%">
        <numberKanban :options="num" class=" md-layout-item" style="width:100%;height:100%"/>
      </div>
  </div>
</template>

<script>
import numberKanban from './numberKanban'
export default {
    name:'Battery',
    props:{
        options:{
            default:{
                maxium:100,
                _value:20
            }
        },

    },
    data(){
        return{
            pond:{
                value: this.options._value / this.options.maxium * 100,
                borderWidth: 2,
                lineDash: [7, 2],
                textColor:'#fff',
                colors:['#03d3ec','#03d3ec','#9fe6b8', '#9fe6b8', '#ffdb5c','#ff9f7f','#fb7293','#ec032a'] ,
                localGradient:false,
                formatter:'',
            },
            num:{
                maxium:this.options.maxium,
                value:this.options._value
            }
        }
    },
    components:{
        numberKanban
    }
}
</script>

<style>
</style>