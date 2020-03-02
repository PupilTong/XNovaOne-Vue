<template>
  <div class="background">
      <dv-charts :option="ring" class="fullSizeComponent"/>
  </div>
</template>

<script>
export default {
    name:'MaterialChart',
    props:{
        img:{
            type:String,
            required:true
        },
        maxium:{
            type:Number,
            default:100
        },
        value:{
            type:Number,
            default:20
        },
        name:{
            type:String,
            default:"chart"
        }

    },
    data(){
        return{
            ring: {
                series: [{
                    type: 'gauge',
                    startAngle: -Math.PI / 2,
                    endAngle: Math.PI * 1.5,
                    arcLineWidth: 20,
                    radius: '90%',
                    data: [{ 
                        name: this.name, 
                        value: this.value/this.maxium*100 
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
                        fontSize: 20
                        }
                    }
                }],
            color: ['#03d3ec']
            }}
    }
}
</script>

<style>
.background{
    background-color: rgba(50, 50, 50, 0.5);
    width: 300px;
    height: 300px;
}
.fullSizeComponent{
    width: 100%;
    height: 100%;
}
</style>