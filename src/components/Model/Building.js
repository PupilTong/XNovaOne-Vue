export default class BuildingModel{
    data={
        interface:{
            img :null,
            name:'name',
            description:'description',
            enableUpgrade:true,
            enableDowngrade:true,
            upgrading:false,
        },
        level:0,
        energy:0,
        nextLevelEnergy:0,
        upgradeResources:[],
        downgradeResources:[],
        producingResources:[]
    }
        
    constructor(img = null,name = 'name',description='description',enableUpgrade=true,enableDowngrade=true,level=0,energy=0,upgradeResources=[],downgradeResources=[]){

        this.data.interface.img = img;
        this.data.interface.name = name;
        this.data.interface.description = description;
        this.data.interface.enableDowngrade = enableDowngrade;
        this.data.interface.enableUpgrade = enableUpgrade;

        this.data.level=level;
        this.data.energy=energy;
        this.data.upgradeResources = upgradeResources;
        this.data.downgradeResources = downgradeResources;

        return this
    }
    
}