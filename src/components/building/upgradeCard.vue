<template>
  <div class="card-expansion">
    <md-card>
        <md-card-media >
            <img :src="building.data.interface.img" :alt="building.data.interface.name"  v-on:click="$emit('detialsTrigger')">
        </md-card-media>

        <md-card-header>
            <div class=" md-headline" style="margin-bottom:10px">{{building.data.interface.name}}</div>
            <div class=" md-subhead"  style="text-align:left">
                <div class="md-caption" style="text-align:center;margin-bottom:8px">
                    Upgrade to Level {{building.data.level + 1}}
                </div>

                
            </div>
        </md-card-header>

        <md-card-content>
            <dv-percent-pond :config="pond" style="height:20px;width:100%"/>
            <dv-percent-pond :config="pond" style="height:20px;width:100%"/>
        </md-card-content>
        <md-card-actions>
            <md-button class=" md-raised md-accent ">Cancel</md-button>
        </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import BuildingModel from '../Model/Building'

export default {
    name:'upgradeCard',
    props:{
        building:{
            default:() =>{return new BuildingModel()}
        },
        time: {
            default:()=>{return{
                current:150,
                maxium:200
            }}
        }

    },
    data(){return{
            pond:{
                value: this.time.current/this.time.maxium *100,
                borderWidth: 1,
                lineDash: [0, 0],
                textColor:'#fff',
                colors:['#03d3ec'] ,
                localGradient:false,
                formatter:'',
            },
    }},
    methods:{
    },
    components:{
    },
  }
</script>

<style lang="scss">
.card-expansion {
    height: auto;
}
</style>