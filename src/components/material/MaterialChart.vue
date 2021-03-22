<template>
  <div class="background md-layout md-alignment-top-center md-gutter" >
      <div class="Component md-layout-item centerChild" style="z-index:1;position: absolute;">
          <div class="centerChild fullsize" >
              <div class="blueshadow roundImg "  :style="{ height: imageHeight + 'px',width:imageHeight + 'px' }">
                <md-tooltip md-direction="bottom">{{options.resource.data.name}}</md-tooltip>
                <img :src="options.resource.data.img" :style="{ height: imageHeight + 'px',width:imageHeight + 'px' }"/>
              </div>
          </div>
      </div>
      <div class="Component md-layout-item" style="position: absolute;">
        <dv-charts :option="ring" class="fullSize"/>
      </div>
      <div class="md-layout-item discription" style="width:80%">
          <numberKanban :options="kanbanOptions" style="width:100%;height:100%" />
      </div>
  </div>
</template>

<script>
import numberKanban from './numberKanban'
export default {
    name:'MaterialChart',
    props:{
        options:{
            default:{
                maxium:100,
                name:'chart',
                resource:{
                    name:'name',
                    value:20,
                    img:null
                }
            }
        },

    },
    data(){
        return{
            kanbanOptions:{
                value:this.options.resource.data.value,
                maxium:this.options.maxium
            },
            ring: {
                series: [{
                    type: 'gauge',
                    startAngle: -Math.PI / 2,
                    endAngle: Math.PI * 1.5,
                    arcLineWidth: 10,
                    radius: '90%',
                    data: [{ 
                        name: this.options.resource.name, 
                        value: this.options.resource.data.value/this.options.maxium*100,
                        gradient: ['#03d3ec', '#9fe6b8', '#ffdb5c','#ff9f7f','#fb7293','#ec032a'] 
                        },
                    ],
                    axisLabel: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    pointer: {
                        show: false
                    },
                    backgroundArc: {
                        show:true,
                        style: {
                        stroke: '#224590'
                        }
                    },
                    dataItemStyle: {
                        lineCap: 'round'
                    },
                    details: {
                        show: false,
                        formatter: '{value}%',
                        style: {
                        fill: '#1ed3e5',
                        fontSize: 10
                        }
                    }
                }],
            color: ['#03d3ec']
            },
            imageHeight:null
        }
    },
    components:{
        numberKanban
    },
    mounted(){
        var size=this.$el.offsetHeight
        this.imageHeight = size*0.6
        this.ring.series[0].arcLineWidth=size/15
        
    }
}
</script>

<style>
.background{
    position: relative;
    text-align: center;
    vertical-align: center;
}
.Component{
    width: 80%;
    height: 80%;
}
.fullsize{
    width: 100%;
    height: 100%;
}
.discription{
    position: absolute;
    height: 20%;
    top:80%;

}
.centerChild{
    display: flex;
    align-items: center;
    justify-content: center
}
.roundImg{
    border-radius: 50%;
    overflow: hidden;
}
.blueshadow{
    /*box-shadow: 0 10px 13px -6px rgba(18, 131, 223, 0.2), 0 20px 31px 3px rgba(18, 131, 223,.14), 0 8px 38px 7px rgba(18, 131, 223,.12);*/
    border:1px solid;
    border-color: rgba(18, 131, 223,0.4);
    box-shadow: 0 10px 13px -6px rgba(18, 131, 223, 0.5), 0 24px 38px 3px rgba(18, 131, 223,.34), 0 9px 46px 8px rgba(18, 131, 223,.22);

}
</style>