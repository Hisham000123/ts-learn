// function addNumber(a: number, b: number): number {
//     return  a + b ;
// }

// console.log(addNumber(23,2))




// function SquareNumber(a: number): number {
//     return  a * a ;
// }

// console.log(SquareNumber(2))




//  function Greet(name:string){
//     return `Hello ${name}`
// }
//  console.log(Greet("manu"))




// function Positive(a : number):boolean {
//     if(a>0){
//         return true 
//     }
//     else{
//         return false
//     }
// }

// console.log(Positive(-87))





// function eligible(age:number):string {
//     if(age> 18){
//         return "eligible for vote"
// } else {
//     return "not eligible"
// }
// }
// console.log(eligible(23))



//  function Large(a:number,b:number){
//     if(a>b){
//         return `${a} is greater`
//     }else{
//         return`${b} is greater`
//     }
// }
// console.log(Large(0,-64))





// function Temp(cel:number ){
//     const f = (cel*(9/5))+32
//     return f;
// }
// console.log(Temp(1))





// function Rarea(l:number,b: number):number {
//     return l * b
// }
// console.log(Rarea(2,4))





// function Rperi(l: number,b: number){
//     const p = 2*(l+b)
//     return p
// }
// console.log(Rperi(2,4))




// function Lstring( name:string): number {
//     const  p = name.length
//     return p
// }
// console.log(Lstring("hisham"))

// // ----------------------------------------------------------------------------------------


// interface User {
//     name?:string,
//     course:string 
// }

// let user1 : User ={
//     name: "ali",
//     course: "mern"

// }
// let user2 : User ={
    
//     course: "django"

// }

// console.log(user1.course)





// // -----------------------------------------------------------------------------


// function Country(name: string = "india"){
//     return ` Welcome to ${name}`
// }

// console.log(Country("russia"))

// console.log(Country())




//  interface User {
//     name:string,
//     age?:number
// }

// let user1 : User ={
//     name: "ali",
//     age: 23

// }
// let user2 : User ={
    
//     name: "manu"

// }

// console.log(user2.name)



// function Discount (  x: number, a : number = 10):number {

//     const dis =  x - a
//     return dis 

// }

// console.log(Discount(66))




// function Pdis(a:number, d: number = 10): number {
//     const p = a - (a * d/100)
//     return p
// }
// console.log(Pdis(1000))

// // ----------------------------------------------------------------------------

// const add=(a: number,b: number) =>{
//     return a+ b
// }
// console.log(add(2,4))



// const Mul=(a: number,b: number) =>{
//     return a * b
// }
// console.log(Mul(2,4))


// const Check=(a:number): string =>{
//     if(a%2==0){
//         return "number is even"
//     }else{
//         return "number is odd"
//     }
// }

// console.log(Check(10))


// const upper=(s: string)=>{
//     const p= s.toUpperCase()
//     return  p
     
// }
// console.log(upper("hisham"))




// let Pass=(a: number)=>{
//     if(a>=20){
//         return "student passed"
//     }else{
//         return "student failed"
//     }
// }
// console.log(Pass(23))


// -------------------------------------------------------------------------------


// function Check<T>(s:T): T{
//     return s
// }
// console.log(Check<number>(12))
// console.log(Check<string>("hisham"))
// console.log(Check<boolean>(true))




// function Check<T>(arr: T[]):T | undefined {
//     return arr[0]
// }
// console.log(Check([1,2,3]))
// console.log(Check(["html","css","js"]))



// function getPair<T,U>(a:T,b:U):[T,U]{
//     return [a,b]
// }

// console.log(getPair("manu" ,22))










