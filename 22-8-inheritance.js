class Parent {
    constructor(){
        this.fatherName = 'shawkat ali'
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
       
    }
    getFullName(){
        return this.name + ' ' +'bin' + ' ' + this.fatherName;
    }
}

const baby = new Child('sunny');
const baby2 = new Child('Tisha');
console.log(baby.getFullName() , baby2.getFullName());