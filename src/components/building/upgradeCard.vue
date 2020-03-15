<template>
  <div class="card-expansion">
    <md-card>
      <md-card-media >
        <img :src="options.data.interface.img" :alt="options.data.interface.name" class="clickable" v-on:click="$emit('detialsTrigger')">
      </md-card-media>

      <md-card-header>
        <div class=" md-headline" style="margin-bottom:10px">{{options.data.interface.name}}</div>
        <div class=" md-subhead"  style="text-align:left">
            <div class="md-caption" style="text-align:center;margin-bottom:8px">
                Level {{options.data.level}}
            </div>
            

            <div class=" md-layout md-alignment-center-space-between">
                <div class="md-layout-item md-layout md-alignment-center-space-between">
                    <div class="md-layout-item">
                        <md-icon>multiline_chart</md-icon>
                        <md-tooltip md-direction="bottom">Product</md-tooltip>
                    </div>

                    <div class="md-body-1 md-layout-item " v-for="resource in options.data.producingResources" :key="resource.data.name" >
                        <md-avatar class="md-small">
                            <img :src="resource.data.img" :alt="resource.data.name"/>
                            <md-tooltip md-direction="bottom">{{resource.data.name}}</md-tooltip>
                        </md-avatar>
                        {{resource.data.value}}
                    </div>
                </div>

            </div>
            <md-divider style="margin:5px" />
            <div class=" md-layout md-alignment-center-space-between">
                <div class="md-layout-item">
                    <md-icon>arrow_upward</md-icon>
                    <md-tooltip md-direction="bottom">Upgrade</md-tooltip>
                </div>
                <div class="md-body-1 md-layout-item" v-for="resource in options.data.upgradeResources" :key="resource.data.name" >
                    <md-avatar class="md-small">
                        <img :src="resource.data.img" :alt="resource.data.name"/>
                        <md-tooltip md-direction="bottom">{{resource.data.name}}</md-tooltip>
                    </md-avatar>
                    <div>
                        {{resource.data.value}}
                    </div>
                </div>
                
                <div class="md-body-1 md-layout-item" >
                    <div class="md-small">
                        <md-avatar class="md-small">
                            <md-icon>battery_charging_full</md-icon>
                            <md-tooltip md-direction="bottom">energy</md-tooltip>
                        </md-avatar>
                    </div>
                    <div>
                        {{options.data.nextLevelEnergy}}
                    </div>
                </div>
            </div>

            
        </div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
            <div>
                <md-button class="md-icon-button md-raised md-primary" :disabled="!(options.data.interface.enableUpgrade)" v-on:click="$emit('upgrade')">
                    <md-icon>arrow_upward</md-icon>
                </md-button>
                <md-button class="md-icon-button md-raised md-accent" :disabled="!(options.data.interface.enableDowngrade)" v-on:click="$emit('downgrade')">
                    <md-icon>arrow_downward</md-icon>
                </md-button>
            </div>

            <div>
                <div class="md-layout md-alignment-center-space-between">
                    <div class="md-layout-item">
                        <md-icon>battery_charging_full</md-icon>
                    </div>

                    <div class="md-body-1 md-layout-item ">
                        {{options.data.energy}}
                    </div>
                    <md-tooltip md-direction="bottom">energy</md-tooltip>
                </div>
            </div>

            <md-card-expand-trigger>
                <md-button class="md-icon-button">
                <md-icon>more_horiz</md-icon>
                </md-button>
            </md-card-expand-trigger>
            </md-card-actions>

            <md-card-expand-content>
            <md-card-content>
                {{options.data.interface.description}}
            </md-card-content>
            </md-card-expand-content>
        </md-card-expand>
    </md-card>
  </div>
</template>

<script>
import BuildingModel from '../Model/Building'

export default {
    name:'upgradeCard',
    props:{
        options:{
            default:() =>{return new BuildingModel()}
        },

    },
    data(){return{
            
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
.clickable{
    cursor: pointer;
}
</style>