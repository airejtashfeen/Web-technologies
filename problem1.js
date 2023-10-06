let marksHeight= 1.69;
let marksWeight= 78;

let johnsHeight= 1.8;
let johnsWeight= 95;

let markHigherBMI= false;

let marks_BMI= marksWeight/(marksHeight * marksHeight);

let johns_BMI= johnsWeight/(johnsHeight * johnsHeight);

if( marks_BMI> johns_BMI){
    markHigherBMI= true;
}


console.log(markHigherBMI);




