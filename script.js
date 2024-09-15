
let input_box = document.querySelector('.main')
let input_Word = document.querySelector('#input_word')
let db = 'helLo i am from micro proccessor 86x v helLo i am from micro proccessor 86x helLo i am from micro proccessor 86x helLo i am from micro proccessor 86x micro proccessor 86x helLo i am from micro proccessor 86x i am from micro proccessor 86x i am from micro proccessor 86x i am from micro proccessor 86x'
let alphabate = document.querySelectorAll('.text')
var i = 0;
let class_selector_number = 0
let inner_text_number = 0
let word_length = 0
//getting input from the user by this event listner
//object that need to be write in other file




// addphrase()

//add  text to be inputed

let addpahers = function () {
    let new_lines = stringMatrix(db)
    let classnameNumber = 0
    for (let i = 0; i < new_lines.length; i++) {
        let classnameNumber_inner = 0
        const word = document.createElement("pre")
        word.classList.add(`text${classnameNumber}`)
        // word.innerText  += new_lines[i]
        for (let m = 0; m < new_lines[i].length; m++) {
            const alpha = document.createElement("span")
            alpha.classList.add(`inner_text${classnameNumber}${classnameNumber_inner}`)
            alpha.innerText += new_lines[i][m]
            word.appendChild(alpha)
            classnameNumber_inner++ 
        }
        input_box.appendChild(word)
        classnameNumber++
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





let converted_string = stringMatrix(db)        //calling strigmartrix function


//function that match

input_box.addEventListener('click', () => {input_Word.focus()})
input_Word.addEventListener('input',(e)=>{
    Match_Character(e.data)
})

let temp_class_selector = document.querySelector(`.inner_text${class_selector_number}${inner_text_number}`)

function Match_Character(e) {
    let alpha_class_name = `.inner_text${class_selector_number}${inner_text_number}`
    let word_selector = document.querySelector(`.text${class_selector_number}`) 
    let alphabate_selector = document.querySelector(alpha_class_name)
    let  t = e=== alphabate_selector.innerText;
    console.log(alphabate_selector.innerText)
    if(e===alphabate_selector.innerText){
       
        inner_text_number++
        effect(alpha_class_name,"correct")
        
     
        word_length++
    
    }  else if (e===null){
              if(inner_text_number===0){
                class_selector_number--
                let temp_word_selector = document.querySelector(`.text${class_selector_number}`).children.length
                inner_text_number = temp_word_selector-1
              }else{

              }
    }else {
        inner_text_number++
        effect(alpha_class_name,"incorrect")
        if(word_selector.children.length===word_length){

        }
        word_length++
    }
    if(word_selector.children.length===word_length){
        class_selector_number += 1
        inner_text_number = 0
        word_length = 0
        
    }
    

  }

  



addpahers()

//A function that shows the user their correct and incorrect inputs using visual effects 
function effect(className, correct_or_not) {
    const active = document.querySelector(className)
    active.classList.add(correct_or_not);
}
