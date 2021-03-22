<template>
  <div id="app">
    <!--
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->
    <div class=" md-layout md-alignment-space-around md-gutter">
    <MaterialChart :options="metalOptions" class="size md-layout-item"/>
    <MaterialChart :options="crystalOptions" class="size md-layout-item"/>
    <MaterialChart :options="hydroOptions" class="size md-layout-item"/>
    <MaterialChart :options="ArgonOptions" class="size md-layout-item"/>
    <Battery :options="EnergyOptions" class="size md-layout-item" />
    </div>
    <div class=" md-layout">
    <BuildingCard :options="metalBuilding" class="size300  md-layout-item" />
    <upgradeCard :building="metalBuilding" class="size300  md-layout-item" />
    </div>
  </div>
</template>

<script>
import MaterialChart from './components/material/MaterialChart'
import Battery from './components/material/battery'
import BuildingCard from './components/building/buildingCard'
import upgradeCard from './components/building/upgradeCard'

import BuildingModel from './components/Model/Building'
import ResourceModel from './components/Model/Resource'

import metalImg from '@/assets/icon/material/metal.jpg'
import crystalImg from '@/assets/icon/material/crystal.jpg'
import hydroImg from '@/assets/icon/material/hydro.jpg'
import Argon from '@/assets/icon/material/Argon-glow.jpg'
export default {
  name: 'App',
  data(){return{
    metalResource:new ResourceModel('Metal',20,metalImg),
    crystalResource:new ResourceModel('Crystal',2534,crystalImg,false),
    hydroResource:new ResourceModel('Hydro',3234,hydroImg),
    argonResource:new ResourceModel('Argon',3234,Argon),
    EnergyOptions:{
      maxium:3000,
      _value:2000
    },
  }},
  computed:{
    metalBuilding(){
      var temp =  new BuildingModel();
      temp.data = {
        interface:{
            img :metalImg,
            name:'Metal Mine',
            description:'Used in the extraction of metal ore, metal mines are of primary importance to all emerging and established empires.',
            enableUpgrade:true,
            enableDowngrade:true,
            upgrading:false
        },
        level:12,
        energy:126,
        nextLevelEnergy:150,
        upgradeResources:[this.metalResource,this.crystalResource,this.hydroResource,this.argonResource],
        downgradeResources:[this.metalResource,this.crystalResource],
        producingResources:[this.metalResource],
      }
      return temp;
    },
    metalOptions(){
      return {
        resource:this.metalResource,
        maxium:100,
        name:'chart',
      }
    },
    crystalOptions(){return {
      resource:this.crystalResource,
      maxium:4000,
      name:'chart',
    }},
    hydroOptions(){return {
      resource:this.hydroResource,
      maxium:3000,
      name:'chart',
    }},
    ArgonOptions(){return {
      resource:this.argonResource,
      maxium:3000,
      name:'chart',
    }},
  },
  components: {
    MaterialChart,
    Battery,
    BuildingCard,
    upgradeCard
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons');
@import "~vue-material/dist/theme/engine"; // Import the theme engine
@include md-register-theme("default", (
  primary: md-get-palette-color(green, A700), // The primary color of your application
  //primary: #03d3ec, // The primary color of your application
  accent: md-get-palette-color(red, 300), // The accent or secondary color
  theme: dark // This can be dark or light
));
@import "~vue-material/dist/theme/all"; // Apply the theme
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-image: url('assets/bg.png');
  height: 1000px;
  width: 1000px
}
.size{
  height: 100px;
  width: 100px
}
.size300{
  height: 400px;
  width: 400px
}
</style>
