
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

// throtlin 

// let range = {
//   start : 0 ,
//   end : 5 ,
//   [Symbol.iterator](){
//     let that  = this;
//     let i = this.start ;
//     return {
//       next:function(){
//              return {value :i ,done:i++ > that.end}
//       }
//     }

//   }

// }

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

// function* genrator(){
//   yield "ashu"
//   yield "Ankit"
//   yield "Goruv"
// }
//  let g = genrator()
// console.log(g.next())

// console.log(g.next())
// console.log(g.next())
// console.log(g.next())

// let empysting = "Ashutosh";
// console.log(empysting.length)
// let temp = empysting.slice(0,empysting.length-1)
// empysting = temp

// console.log(empysting.length)


// function getStringAfterSpace(input) {
//   // Find the index of the first space character
//   let spaceIndex = input.indexOf(' ');

//   // If no space is found, return an empty string
//   if (spaceIndex === -1) {
//       return '';
//   }

//   // Return the substring after the space
//   return input.substring(spaceIndex + 1);
// }

// console.log(getStringAfterSpace("'a helworld hellworld"))


// let st = "ashutosh"
// console.log(st.substring(0 + 1))
//regx

// let input = "Aa1578" ;
// let password_Pattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"
// let final_password = input.match(password_Pattern)
// if(final_password){
//     console.log("strong password")
// } else {
    
//     console.log("weak password",password_Pattern)
// }
// let car = function (color,brand){
//  this.color = color; 
//  this.brand = brand;

// }



//  let instence = new car("black","ford") ;
//  let instence2 = new car ("red", "ferrari") 
// car.prototype.startengin = function(){
//     console.log("starting engine")
// }

//  //instence.startengin()
 
// console.log(instence2.__proto__)

class car {

    constructor(color,model){
        this.color = color ;
        this.model = model ;
    }
    get startengine(){
        console.log("starting engine");
    }
}

class bike extends car {
    constructor(color,model,enginecapacity){
        this.color = color ;
        this.model = model ;
        this.enginecapacity = enginecapacity
        
    }
    

}
 let honda = new car("red",2022)
 let splender = new bike("balck",2024)
 console.log(splender.startengine)