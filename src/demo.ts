// let username:string = "manu"
// console.log(username)



// let name:string ="hisham"
// let course:string = "civil engineering"
// let age:number = 23
// let isactive :boolean = true

// console.log(name)
// console.log(course)
// console.log(age)
// console.log(isactive)


// function Diff(a:number,b:number){
//     return a-b
// }

// console.log(Diff(121,34))


// function Greet(name:string){
//     return `welcome ${name}`
// }
// console.log(Greet("manu"))

// function Check(num:number){
//     if(num%2==0){
//         return `${num} is even`
//     }else{
//         return `${num } is odd`

//     }

// }

// console.log(Check(-34))









// type User = {
//   id: number;
//   name: string;
//   email: string;
//   isAdmin: boolean;
// };

// const users: User[] = [
//   {
//     id: 1,
//     name: "Hisham",
//     email: "hisham@gmail.com",
//     isAdmin: true,
//   },
//   {
//     id: 2,
//     name: "Rahul",
//     email: "rahul@gmail.com",
//     isAdmin: false,
//   },
// ];

// function findUser(id: number): string | undefined {

//     let data= users.find((user)=> user.id === id)
//     return data?.name
    


// }

// console.log(findUser(1))


interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

let data:Product [] = [{
    id: 2,
    name:"manu",
    price:87,
    category:"sports"

},
{
    id:3,
    name:"jenu",
    price:23,
    category:"arts"
},
{
    id:4,
    name:"jenus",
    price:13,
    category:"arts"
},{
    id:1,
    name:"ali",
    price:3,
    category:"sports"
},

]


// function findProduct(id:number): string | undefined {
//    let User = data.find((p)=> p.id=== id)
//     return User?.name
// }
// console.log(findProduct(2))

// function getProduct(pr:number):Product [] | undefined{

//    let Users= data.filter((p)=>p.price >= pr)
//    return Users

// }

// console.log(getProduct(24))


// function getSum(): number {
// return data.reduce((total,p)=> total + p.price,0)
    
// }
// console.log(getSum())



