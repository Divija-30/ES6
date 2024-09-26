class Sample//class with simple constructor
{
    constructor(){
        this.id=107;
        this.name="Divija"
    }
    displayInfo() {
        console.log(this.id+" "+this.name);
    }
}
let s=new Sample();
s.displayInfo();