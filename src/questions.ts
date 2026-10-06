function addNumber(a: number, b: number): number {
    return  a + b ;
}

console.log(addNumber(23,2))




function SquareNumber(a: number): number {
    return  a * a ;
}

console.log(SquareNumber(2))




 function Greet(name:string){
    return `Hello ${name}`
}
 console.log(Greet("manu"))




function Positive(a : number):boolean {
    if(a>0){
        return true 
    }
    else{
        return false
    }
}

console.log(Positive(-87))





function eligible(age:number):string {
    if(age> 18){
        return "eligible for vote"
} else {
    return "not eligible"
}
}
console.log(eligible(23))



 function Large(a:number,b:number){
    if(a>b){
        return `${a} is greater`
    }else{
        return`${b} is greater`
    }
}
console.log(Large(0,-64))





function Temp(cel:number ){
    const f = (cel*(9/5))+32
    return f;
}
console.log(Temp(1))





function Rarea(l:number,b: number):number {
    return l * b
}
console.log(Rarea(2,4))





function Rperi(l: number,b: number){
    const p = 2*(l+b)
    return p
}
console.log(Rperi(2,4))




function Lstring( name:string): number {
    const  p = name.length
    return p
}
console.log(Lstring("hisham"))