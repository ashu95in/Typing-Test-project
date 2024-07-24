// this is for user typing speed stats info calculating 


let typingspeed = {
    correct: 0,
    incorrect: 0,
    startTime: null,
    endTime: null,
    totalTime: null,

    accuracy: function () {
        if (this.correct + this.incorrect === 0) {
            return 0;
        } else {
            return (this.correct * 100) / (this.correct + this.incorrect);
        }
    },

    speed: function () {
        const charactersPerMinute = (this.correct / this.totalTime) * 60;
        return charactersPerMinute;
    }

};

function stringMatrix(arg) {
    let mutedArg = arg.split(' ')
    let final_res = [];
    for (let i = 0; i < mutedArg.length; i++) {
        final_res.push(mutedArg[i])
        final_res.push(" ")
    }

    return final_res
}
stringMatrix("hello i am ashutosh world biggest tect company's CEO")

// list :
// Globiz Technology Inc.
// Evolvan Info Solutions(P) LTD
// Nitwebs
// FlyMedia Technology - Best Website Designing and Digital Marketing Company In Ludhiana