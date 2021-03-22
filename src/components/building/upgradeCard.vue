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

        <md-card-content class=" md-gutter md-bottom-center">
            <dv-percent-pond :config="pond" style="width:99%" :style="'height:' + fontSize  + 'px;margin: 5px' " class=" md-gutter"/>
            <dv-digital-flop :config="num" style="width:99%" :style="'height:' + fontSize  + 'px;margin: 5px' " class=" md-gutter"/>
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
                current:30,
                maxium:100
            }}
        }

    },
    data(){return{
        number:[],
        release : this.time.current,
        fontSize:20,
        timerID:null
    }},
    computed:{
        pond(){return{
            value: this.release/this.time.maxium *100,
            borderWidth: 1,
            lineDash: [0, 0],
            textColor:'#fff',
            colors:['#00c853'] ,
            localGradient:false,
            formatter:'',
        }},
        
        num(){return{
            number:this.number,
            content: '{nt}:{nt}:{nt}',
            style:{
                fontFamily : 'Roboto',
                fontSize:this.fontSize,
                fill : '#03d3ec',
                textAlignn:'start'
            }
        }}
    },
    methods:{
        updateTime(){
            var hours = Math.floor(this.release /60 /60);
            var minutes = Math.floor(this.release /60 - hours * 60)
            var seconds = Math.floor(this.release - hours *60*60 - minutes*60)
            this.number = [hours,minutes,seconds]
        }
    },
    mounted(){
        this.updateTime();
        this.fontSize=this.$el.offsetHeight /20;
        this.timerID = setInterval(()=>{
            this.release -=1;
            this.updateTime()
            if(this.release ==0){
                clearInterval(this.timerID)
                this.$emit('upgraded')
            }
            
        },1000)
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