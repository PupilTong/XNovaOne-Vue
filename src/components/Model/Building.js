export default class BuildingModel{
    
    interface={
        img :null,
        name:'name',
        description:'description',
        enableUpgrade:true,
        enableDowngrade:true
    }
    level=0
    energy=0
    upgradeResources=[]
    downgradeResources=[]
    data(){return{
        interface:this.interface,
        level:this.level,
        energy:this.energy,
        upgradeResources:this.upgradeResources,
        downgradeResources:this.downgradeResources,
    }}
        
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

    init(data){
        console.log(data);
        this.data = data;
        return this
    }
    
}