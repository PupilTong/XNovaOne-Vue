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
    <div></div>
  </div>
</template>

<script>
import MaterialChart from './components/MaterialChart'
import Battery from './components/battery'
import metalImg from '@/assets/icon/material/metal.jpg'
import crystalImg from '@/assets/icon/material/crystal.jpg'
import hydroImg from '@/assets/icon/material/hydro.jpg'
import Argon from '@/assets/icon/material/Argon-glow.jpg'
export default {
  name: 'App',
  data(){return{
    metalOptions:{
      img:metalImg,
      maxium:100,
      value:20,
      name:'chart',
      description:'Metal',
      size:100
    },
    crystalOptions:{
      img:crystalImg,
      maxium:4000,
      value:2534,
      name:'chart',
      description:'Crystal',
      size:100
    },
    hydroOptions:{
      img:hydroImg,
      maxium:3000,
      value:3234,
      name:'chart',
      description:'Hydro',
      size:100
    },
    ArgonOptions:{
      img:Argon,
      maxium:3000,
      value:3234,
      name:'chart',
      description:'Argon',
      size:100
    },
    EnergyOptions:{
      maxium:3000,
      _value:2000
    }
  }},
  components: {
    MaterialChart,
    Battery
  }
}
</script>

<style>
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
</style>
