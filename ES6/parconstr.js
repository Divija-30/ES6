class Sample //parametarized consctructor
{
    constructor(id,name){
        this.id=id;
        this.name=name;
    }
    displayInfo() {
        console.log(this.id+" "+this.name);
    }      
}
let s=new Sample(101,"Divija");
s.displayInfo();