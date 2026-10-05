// let student :{
//     name:string,
//     age:number,
//     subject:string
// }={
//     name:"hisham",
//     age:23,
//     subject:"mern"
// }

// console.log(student.subject)

// interface  data {
//     name:string,
//     age:number,
//     subject:string
// }

// let student1 : data= {
//     name:"manu",
//     age:34,
//     subject:"maths"

// }
// let student2 : data= {
//     name:"jenu",
//     age:54,
//     subject:"physics"

// }

// console.log(student2.subject)


// type student1 ={
//     name:string,
//     trainer: string,
//     rating:number
// }

// let std1:student1 ={
//     name:"hisham",
//     trainer:"adithya",
//     rating:8
// }
// type student2 ={
//     name:string,
//     trainer: string,
//     rating:number
// }
// let std2:student2={
//     name:"hisham",
//     trainer:"adithya",
//     rating:8
// }


// function getname<t>(details:t):t{
//     return details
// }

// const one= getname(std1)
// const two= getname(std2)

// console.log(one.rating)




//here we use undefined beacuse incase if any values passed in the array it will show the undefined value


// function getArray<T>(data:T[]):T | undefined {
//     return data[2]
// }

// console.log(getArray([1,2,34,5,56]))




// function getPair<T,U>(fname:T,lname:U){
//     return {fname,lname}
// }
// console.log(getPair("hisham",21))






