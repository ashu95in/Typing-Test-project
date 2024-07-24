
// function debounce(fx,time){
//     let id = null ;
//     return function (x){
//         if(id){
//             clearTimeout(id)
//         }
        
//         id = setTimeout(()=>{
//              fx(x);
//              id = null
//         },time)
//     }
// }

// let fx = debounce(showcount,1000);
// setTimeout(fx,500);
// setTimeout(fx,3000);

// throtlinitrator irtraot helloworld and what ethe fuck hellwoorld 

let range = {
  start : 0 ,
  end : 5 ,
  [Symbol.iterator](){
    let that  = this;
    let i = this.start ;
    return {
      next:function(){
             return {value :i ,done:i++ > that.end}
      }
    }

  }

}

// // for(let r  of range){
// //   console.log(r)
// // }

// console.log(...range)



// let arr = [1,2,3];
// let i = arr[Symbol.iterator]()
// console.log(i.next())
// console.log(i.next())
// console.log(i.next())
// console.log(i.next())
// console.log(i.next())

// let db   = new Map()

// db.set(1,"Ashutosh")
// console.log(db.get(1))

function* genrator(){
  yield "ashu"
  yield "Ankit"
  yield "Goruv"
}
 let g = genrator()
console.log(g.next())

console.log(g.next())
console.log(g.next())
console.log(g.next())
