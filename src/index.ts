// let obj :{ name: string,age:number} = {
//     name:"hisham",
//     age:23
// }
// console.log(obj.name)

// let Array :[ name: string, age:number, passed:boolean]=[
//     "hisham",
//     23,
//     true
// ]

// console.log(Array[0])

// function isAdult( name:string,age:number){
//     if(age>=18){
//         return `${name} is adult and his age is ${age}`
//     }else{
//         return `${name} is not adult and his age below 18`
//     }

// }
// console.log(isAdult("hisham",17))


//default option
// function greet(name:string = "manu"){
//     return `happy birthday ${name}`
// }
// console.log(
//     greet("fadil")
// )
// console.log(greet())


// arrow function
// const add =(a:number,b:number)=> {
//     return a +b
// }
// console.log(add(1,3))


// const add=(x:number,y:number)=> x+y
// console.log(add(2,5))






// interface Details {
//     name:string,
//     age:number,
//     email?:string
   
// }

// let UserDetails: Details={
//     name:"hisham",
//     age:23,
//     email:"mhdhishmank@gmail.com",
// }

// let AdminDetails: Details={
//     name:"admin",
//     age:55,
    
// }

// function Usergetname(UserDetails:Details, AdminDetails:Details){
//    console.log( UserDetails.name)
//    console.log(AdminDetails.name)

// }
// Usergetname(UserDetails,AdminDetails)   

// ---------------------------------------------------------------------------

// #function overloading

// function add(a : number,b: number):number
// function add(a:string,b:string):string

// function add( a:any,b : any) : any {
//     return a +b
// }

// console.log(add(20,20));

// console.log(add("20","20"));



// #generics

// type UserData ={
//     name: string,
//     age:number
// }
// let UserDetails: UserData={
//     name: "manu",
//      age: 43
// }

// type Admindata ={
//     Adname: string,
//     role: string
// }
// let AdminDetails:Admindata={
//     Adname:"adhithya",
//     role: "trainer"
// }

// function  getname <T>(details:T):T{
//     return details
    
// }
//  const userD = getname(UserDetails)
//     const adminD = getname(AdminDetails)

//     console.log(adminD.Adname)



//enums


// enum statusType {
//     PENDING = 1,
//     COMPLETED,
//     FAILED
// }
// function getStatus( id : number, status: statusType){
//     console.log(id ,status)
// }
// getStatus(1234,statusType.PENDING)


// let statusType={
//     PENDING : "pending",
//     COMPLETED: "completed",
//     FAILED:  "failed"

   
// }as const ;

// function getStatus(id:number , status: keyof typeof statusType){
//     // statusType.PENDING ="manu"
// console.log(id, statusType[status]);

// }

// getStatus(1234, "PENDING")



//readonly property

// type Users ={
//     name:string,
//     age:number

// }

// const UserDetails : Readonly<Users>={
//     name:"hishmz",
//     age:23
// }

// console.log(UserDetails.age)

//when we use PARTIAL PROPERTY instead of readonly property it show optional optional(?)
//required use for if it optional doesn't show the (?) sign it must be required\


//to PICK only specified things we can use PICK 
// type Users ={
//     name:string,
//     age:number,
//     salary:number

// }

// const UserDetails : Pick<Users ,"age"| "salary">={
//     name:"hishmz",
//     age:23,
//     salary:123456
// }

// console.log(UserDetails.salary)

//     OMIT - omit function is used for only remove the told property here



//exlcude-(in the case of union)

// type statusType = "pending"| "fulfilled"| "failed";
// const status: Exclude<statusType,"pending"> =  "fulfilled"


//RECORD we use when the data type of the keys & values when unknown(eg:- when the data is came from the api)

// type food = Record<string,any>

// const FoodDetails: food ={
//     break: "poratta",
//     lunch: "chor",
//     dinnerTime: 8
// }

// console.log(FoodDetails.dinnerTime);





//never & void function is use when return nothing     

// function throwError(message:string):never{
//     throw new Error(message)
//     }
// function logMessage(message:string):void{
//     console.log(message);
    
// }


// type User ={
//     name:string,
//     getUsername: ()=> string   //ivide string koduthath kond tahzhe ee function nte ullil enthenkilum return cheyyanam..ivide void aanel kodthenkil thaze error kanikkkum
// }

// const UserDetails : User ={
//     name:"hisham",
//     getUsername(){
//        return "ali"
        
//     }

// }
// console.log(UserDetails.getUsername())




// interface User {
//     id: number,
//     name:string,
//     course:string
// }

// let user1: User ={
//     id:1,
//     name:"manu",
//     course:"mern"
// }
// const user2: User ={
//     id:2,
//     name:"finu",
//     course:"django"
// }

// function UpdateUser( data:Partial<User>){
//     user1 ={
//         ...user1,
        
//         ... data
        

//     }
// }
// console.log(user1)
// UpdateUser({name:"fadil"})

// console.log(user1)




interface data{
    name:string,
    age:number,
    course:string
}



let userData: Partial <Pick <data, "name"| "course">>={
    name:"hisham",
    course:"mern"

}

console.log(userData.course)



