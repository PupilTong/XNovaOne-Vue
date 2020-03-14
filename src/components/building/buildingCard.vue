<template>
  <div class="card-expansion">
    <md-card>
      <md-card-media>
        <img :src="options.data.interface.img" :alt="options.data.interface.name">
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{options.data.interface.name}}</div>
        <div class="md-subhead">{{options.data.interface.description}}</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <div>
            <md-button class="md-icon-button md-raised md-primary">
                <md-icon>arrow_upward</md-icon>
            </md-button>
            <md-button class="md-icon-button md-raised">
                <md-icon>arrow_downward</md-icon>
            </md-button>
          </div>

          <md-card-expand-trigger>
            <md-button class="md-icon-button">
              <md-icon>more_horiz</md-icon>
            </md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>
  </div>
</template>

<script>
import BuildingModel from '../Model/Building'

export default {
    name:'BuildingCard',
    props:{
        options:{
            default:() =>{return new BuildingModel()}
        },

    },
    data(){return{
            
    }},
    components:{
    }
  }
</script>

<style lang="scss">
.card-expansion {
    height: auto;
}   
</style>