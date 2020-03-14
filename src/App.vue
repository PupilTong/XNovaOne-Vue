<template>
  <div id="app">
    <!--
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->
    <MaterialChart :options="metalOptions" class="size"/>
    <MaterialChart :options="crystalOptions" class="size"/>
    <MaterialChart :options="hydroOptions" class="size"/>
    <MaterialChart :options="ArgonOptions" class="size"/>
    <Battery :options="EnergyOptions" class="size" />
    <BuildingCard :options="metalBuilding" class="size300" />
    <div></div>
  </div>
</template>

<script>
import MaterialChart from './components/material/MaterialChart'
import Battery from './components/material/battery'
import BuildingCard from './components/building/buildingCard'

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
    crystalResource:new ResourceModel('Crystal',2534,crystalImg),
    hydroResource:new ResourceModel('Hydro',3234,hydroImg),
    argonResource:new ResourceModel('Argon',3234,Argon),
    EnergyOptions:{
      maxium:3000,
      _value:2000
    },
  }},
  computed:{
    metalBuilding(){
      var temp =  new BuildingModel()
      temp.init({
        interface:{
            img :metalImg,
            name:'Metal Mine',
            description:'Used in the extraction of metal ore, metal mines are of primary importance to all emerging and established empires.',
            enableUpgrade:true,
            enableDowngrade:true
        },
        level:0,
        energy:0,
        upgradeResources:[],
        downgradeResources:[],
      })
      return temp
    },
    metalOptions(){
      return {
        resource:this.metalResource,
        maxium:100,
        name:'chart',
        size:100
      }
    },
    crystalOptions(){return {
      resource:this.crystalResource,
      maxium:4000,
      name:'chart',
      size:100
    }},
    hydroOptions(){return {
      resource:this.hydroResource,
      maxium:3000,
      name:'chart',
      size:100
    }},
    ArgonOptions(){return {
      resource:this.argonResource,
      maxium:3000,
      name:'chart',
      size:100
    }},
  },
  components: {
    MaterialChart,
    Battery,
    BuildingCard
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons');
@import "~vue-material/dist/theme/engine"; // Import the theme engine
@include md-register-theme("default", (
  primary: md-get-palette-color(green, A700), // The primary color of your application
  accent: md-get-palette-color(red, A200), // The accent or secondary color
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
  height: 300px;
  width: 300px
}
</style>
