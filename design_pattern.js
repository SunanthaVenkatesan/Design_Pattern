//global this 
this.table='window_table'
this.garage={
    table:'garage-table',
    cleantable(){//method 
        console.log(`cleaning ${this.table}`)
    }
}
//this.garage.cleantable()
////console.log(this.garage.table)

//private scope/block scope 

/*let room={table:
'sunantha_table',}
//console.log(this.room.table)//this throws error as cannot read properties of undefined as it is private
console.log(room.table)//valid*/

//this inside a method
let room1={
    table:'sunantha_table',
    cleantable(){
        console.log(`cleaning ${this.table}`)
    }
}
//room1.cleantable()
//console.log(room1.table)


//this inside a function
// const cleanTable=function(soap){
//     console.log(`cleaning ${this.table} using ${soap}`)//this cannot be used inside a function,instead call function can be used
// }
// cleanTable.call(this,`some soap`)//call function used to call this inside a function 
// cleanTable.call(this.garage,`some soap`)
// cleanTable.call(room1,`some soap`)

//inner function also willnot accept this,so we have to go with call/apply/bind

// const cleanTable=function(soap){
//     let that=this//that is outer function keyword for this and can be used for innerfunction
//     const innerfunction=function(_soap){
//         console.log(`cleaning ${that.table} using ${_soap}`)

//     }
//     innerfunction(soap)
// }
// cleanTable.call(this,`some soap`)//call function used to call this inside a function 
// cleanTable.call(this.garage,`some soap`)
// cleanTable.call(room1,`some soap`)

//solution 2 :

//  const cleanTable=function(soap){
  
//     const innerfunction=(_soap)=> {
//         console.log(`cleaning ${this.table} using ${_soap}`)
//      }
//     innerfunction(soap)
//  };
// // cleanTable.call(this,`some soap`)//call function used to call this inside a function 
// // cleanTable.call(this.garage,`some soap`)
// // cleanTable.call(room1,`some soap`)
// //this inside a constructor:
// let createroom=function(name){
//     this.table=`${name}s table`
// }
// const karthikRoom=new createroom('karthik')
// const sunanthaRoom=new createroom('sunantha')
// cleanTable.call(this,`some soap`)
// cleanTable.call(this.garage,`some soap`)
// cleanTable.call(sunanthaRoom,`some soap`)
// cleanTable.call(karthikRoom,`some soap`)
//prototype
// let createroom=function(name){
//     this.table=`${name}s table`
// }
// createroom.prototype.cleanTable=function(soap) {
//     console.log(`cleaning ${this.table} using ${soap}`)
// }
// const karthikRoom=new createroom('karthik')
// const sunanthaRoom=new createroom('sunantha')
// karthikRoom.cleanTable(`some soap`)
// sunanthaRoom.cleanTable(`some soap`)

    // //this inside a class
    // class createroom{
    //     constructor(name){
    //         this.table=`${name}s table`
    //     }
    //     cleanTable(soap){
    //         console.log(`cleaning ${this.table} using ${soap}`);

    // }
    // }

    // const karthikRoom=new createroom('karthik')
    // const sunanthaRoom=new createroom('sunantha')
    // karthikRoom.cleanTable(`some soap`)
    // sunanthaRoom.cleanTable(`some soap`)

    //Design pattern problem - How will you design a Student class which stores the name , age , phone number, board marks of each student. Make a constructor to initialize the values.
class student{
 
    constructor(name,age,phonenumber,boardOfMarks){
        this.name=name
        this.age=age
        this.phonenumber=phonenumber
        this.boardOfMarks=boardOfMarks

    }
    
    getStudentDetails(){
       
        console.log(`Name:${this.name}\nAge:${this.age}\nPhonenumber:${this.phonenumber}\nBoardOfMarks:${this.boardOfMarks}`)
   
    
   
        if(`${this.boardOfMarks}`>40){
            console.log("The student is eligible")
        }
        else{
            console.log("The student is not eligible")
        }
    }
}
const student1=new student('sunantha','25',"3892838",'90')
const student2=new student('karthik','29',"384093",'94')
const student3=new student('jana','21',"945903",'66')
const student4=new student('dhruv','18',"45657878",'99')
const student5=new student('muthu','27',"293284",'30')
student1.getStudentDetails()
student2.getStudentDetails()
student3.getStudentDetails()
student4.getStudentDetails()
student5.getStudentDetails()



