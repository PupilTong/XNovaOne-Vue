<template>
  <div class="background md-layout md-alignment-top-center">
      <div class="Component md-layout-item centerChild" style="z-index:1;position: absolute;">
          <div class="centerChild fullsize" >
              <md-avatar class="blueshadow roundImg fullsize md-large">
                <md-tooltip md-direction="bottom">{{options.resource.name}}</md-tooltip>
                <img :src="options.resource.img"  />
              </md-avatar>
          </div>
      </div>
      <div class="Component md-layout-item" style="position: absolute;">
        <dv-charts :option="ring" class="fullSize"/>
      </div>
      <div class="md-layout-item discription" style="position: absolute;">
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
                size:10,
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
                value:this.options.resource.value,
                maxium:this.options.maxium
            },
            ring: {
                series: [{
                    type: 'gauge',
                    startAngle: -Math.PI / 2,
                    endAngle: Math.PI * 1.5,
                    arcLineWidth: this.options.size /15,
                    radius: '90%',
                    data: [{ 
                        name: this.options.resource.name, 
                        value: this.options.resource.value/this.options.maxium*100,
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
                        fontSize: this.options.size/15
                        }
                    }
                }],
            color: ['#03d3ec']
            }
        }
    },
    components:{
        numberKanban
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
    width: 60% !important;
    height: 60% !important;
    border-radius: 50% !important;
    overflow: hidden;
}
.blueshadow{
    /*box-shadow: 0 10px 13px -6px rgba(18, 131, 223, 0.2), 0 20px 31px 3px rgba(18, 131, 223,.14), 0 8px 38px 7px rgba(18, 131, 223,.12);*/
    border:1px solid;
    border-color: rgba(18, 131, 223,0.4);
    box-shadow: 0 10px 13px -6px rgba(18, 131, 223, 0.5), 0 24px 38px 3px rgba(18, 131, 223,.34), 0 9px 46px 8px rgba(18, 131, 223,.22);

}
</style>