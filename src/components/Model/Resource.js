export default class Resource{
    data = {
        name :'' ,
        value: 0,
        img : null,
        enough:true
    }
    constructor(name = '',value = 0,img=null,enough=true){
        this.data.name=name;
        this.data.value=value;
        this.data.img=img;
        this.enough = enough;
        return this
    }
}