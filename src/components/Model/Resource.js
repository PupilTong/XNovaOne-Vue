export default class Resource{
    name ='' ;
    value= 0;
    img= null;
    constructor(name = '',value = 0,img=null){
        this.name=name;
        this.value=value;
        this.img=img
        return this
    }
    data(){
        return {
            name : this.name,
            value : this.value,
            img : this.img
        }
    }
}