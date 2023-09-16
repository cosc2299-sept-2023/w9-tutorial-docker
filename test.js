function Person(name,age){

    this.name=name||'bob';

    this.age=age||34;  

}



let person={

    name:'alessio',

    age:38,

    sayHello:()=>{

        console.log("hello")

    }

}






person.sayHello()

let alessio=new Person('alessio');



console.log(">>>>>",alessio)




Person.prototype.myFunction=()=>{

    console.log('love potatoes')

}



Person.prototype.sayMyName=function(){

    console.log('My name is',this.name)

}



Person.prototype.sayMyAge=function(){

    console.log('My age is',this.age)

}



alessio.sayMyName()

alessio.sayMyAge()