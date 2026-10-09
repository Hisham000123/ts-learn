interface Data {
    id:number,
    name:string,
    category:string,
    price:number
}
let  arr: Data[]  =[
  {
    id: 1,
    name:"mango",
    category:"fruit",
    price:10
},
{
    id: 2,
    name:"banana",
    category:"fruit",
    price:30
},
{
    id: 3,
    name:"onion",
    category:"vegetable",
    price:67
},
{
    id: 4,
    name:"carrot",
    category:"vegetable",
    price:23
}
]



// let getProducts=(id:number)=>{  
//         return arr.find((pro)=> pro.id === id)?.name       
// }
// console.log(getProducts(3))





// let calculateDis=(name:string)=>{
//     return arr.find((p)=> p.name ===name)!.price-10
// }
// console.log(calculateDis("onion"))



// console.log(arr[0]!.name)
// console.log(arr[1]!.price)





let getProducts=(id: number)=>{  
        let store= arr.find((pro)=> pro.id === id)
        return store
   
}
 let product = getProducts(2)

 if(product) {
    console.log(product.name)
console.log(product.price)

 }else{
    console.log("product not found")
 }




 

let display=(id:number)=>{

    let product = arr.find((p)=> p.id ===id)

    if(product){
        return product
    }else{
        return "product not found"
    }
  
}

console.log(display(4))
