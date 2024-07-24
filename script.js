
let input_box = document.querySelector('.main')
let input_Word = document.querySelector('#input_word')
let db = 'helLo i am from micro proccessor 86x v helLo i am from micro proccessor 86x helLo i am from micro proccessor 86x helLo i am from micro proccessor 86x  micro proccessor 86x helLo i am from micro proccessor 86x  i am from micro proccessor 86x i am from micro proccessor 86x i am from micro proccessor 86x'
let alphabate = document.querySelectorAll('.text')
var i = 0;
const time = new Date()


let typingspeed = {
    correct: 0,
    incorrect: 0,
    startTime: null,
    endTime: null,
    totalTime: null,

    accuracy: function() {
        if (this.correct + this.incorrect === 0) {
            return 0;
        } else {
            return (this.correct * 100) / (this.correct + this.incorrect);
        }
    },

    speed: function() {
        const charactersPerMinute = (this.correct / this.totalTime) * 60;
        return charactersPerMinute;
    }
 
};


//getting input from the user by this event lisnter
//object that need to be write in other file

input_word.addEventListener('keypress', (e) => {
       Match(e)
})

input_box.addEventListener('click', () => {
    input_Word.focus()
})

// addphrase()

//add  text to be inputed

let addpahers  = function (){
    
    for(let i = 0 ; i<db.length ;i++){
        const word = document.createElement("pre")     
        word.classList.add('text')
        word.innerText  += db[i] 
        input_box.appendChild(word)
    }
}
function stringMatrix(arg) {
    let mutedArg = arg.split(' ')
    let final_res = [];
    for (let i = 0; i < mutedArg.length; i++) {
        final_res.push(mutedArg[i])
        final_res.push(" ")
    }

    return final_res
}
 

let converted_string =  stringMatrix(db)        //calling strigmartrix function
let index = 0 ;

//function that match
let emptystring = ''; 
function Match(e) {   
    emptystring += e.key ; 
    if (e.key === db[i]) {
        effect(".text",i,"correct")                 
        if(emptystring===converted_string[index]){
            typingspeed.correct += 1
            emptystring = '';
            index++
            console.log("correct")
        } 


        i++
    } else {
        let temp = Array.from(emptystring).splice(emptystring.length-1,1)
        console.log(emptystring,temp)
    //    let temp = emptystring.slice(0,emptystring.length-1)
    //     emptystring = temp
    //        console.log(temp,emptystring)
        typingspeed.incorrect +=1;
        effect(".text",i,"uncorrect")
        i++
    }
   
    
}
addpahers()
console.log(typingspeed.correct)
//A function that shows the user their correct and incorrect inputs using visual effects 
function effect(className,i,correct_or_not){ 

    const active  = document.querySelectorAll(className)
    let arr = Array.from(active)
    
    arr[i].classList.add(correct_or_not);
  }
  