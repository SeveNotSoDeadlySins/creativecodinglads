let table;
let i = "Tom"
let cleanedData = [];
let data = [];
let data2 = [];
let chartHeight = 300;
let chartWidth = 300;
let barWidth = 10;
let margin = 15;
let gap;
let scaler;
let axisThickness = 5;
let chartPosX = 100;
let chartPosY = 400;
let axisColour;

let femaleScores;
let ageGroups;
let barColour;
function preload() {
    data = loadTable('data/Combined.csv', 'csv' , 'header');
}

// Only runs once.
function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES);
    noLoop();
    cleanData();
    femaleScores = cleanedData.map(row => row.Female)
    ageGroups = cleanedData.map(row => row.Age_Group)
    // let filteredFemaleScores = femaleScores.filter(age => age > 3);
    console.log(femaleScores,ageGroups);
    // console.log(filteredFemaleScores);
    // let bothtogether = cleanedData.filter(age => age.Female > 2 ).map(row => row.Female);
    // console.log(bothtogether);

    gap = (chartWidth - (femaleScores.length * barWidth) - (margin * 2)) / (femaleScores.length - 1);

    scaler = chartHeight / (max(femaleScores));

    axisColour = color(0, 0, 0);
    barColour = color(0, 0, 255);
}

// Will run over and over.
function draw() {
    background(200);
    // push();
    // translate(300,300);
    // rotate(-45)
    // fill(255,0,0);
    // stroke(0,0,0);
    // rect(0,0,100,100); 
    // pop();

    // Push moves where 0,0 is to wherever the translate is going.
    // push();
    // translate(150,150);
    // rotate(30)
    // fill(0,255,0);
    // stroke(0,0,0);
    // rect(0,0,100,100);
    // pop();
    // Pop resets the 0,0 back to where it was orginally

    // let femaleAges = [];
    // [0,0,13,6,3] example output


    // Method 1 Using a loop
    // for(let i = 0; i < cleanedData.length; i++) {
    //     femaleAges.push(cleanedData[i].Female)
    //     console.log(femaleAges)
    // }

    // Method 2 Using a foreach with a normal function 
    // cleanedData.forEach(
    //     function(item) {
    //         femaleAges.push(item.Female);
    //     }
    // )

    // Method 3 using a for each with a arrow function
    // cleanedData.forEach(
    //     item => {femaleAges.push(item.Female)}
    // );

    // Method 4 doing it all at once with declaring the varible at the same time
    // let femaleAges = cleanedData.map(
    //     function(row) {
    //         return row.Female;
    //     }
    // )

    // Method 5 the best way doing it all in 1 line with a arrow function
    // let femaleScores = cleanedData.map(row => row.Female)

    // let ageGroups = cleanedData.map(row => row.Age_Group)

    // Because femaleAges is already an array of numbers u dont need a row.Female of anything like that. 
    // let filteredFemaleScores = femaleScores.filter(age => age > 3);



    // This is using filter and map together. So it can be all done in one line

    push();
    translate(chartPosX,chartPosY);
    stroke(axisColour);
    strokeWeight(axisThickness);
    line(0,0,0,-chartHeight);
    line(0,0,chartWidth,0);
    
    push();
    translate(margin,0);
    for(let i =0; i < femaleScores.length; i++) {
        let jump = (barWidth + gap)*i;
        fill(barColour);
        noStroke();
        rect(jump,0,barWidth,-femaleScores[i] * scaler);
        
        textAlign(LEFT,CENTER);
        textSize(10)    
        push();
        // If i want a none 90 degree angle i do 
        // translate(jump + (barWidth/2),10);
        rotate(90);
        // text(ageGroups[i],0,0); instead.
        text(ageGroups[i] ,10, -(jump + (barWidth/2)));
        pop();
    }
    pop();
    pop();
}

// class Friend {
//     constructor() {
//         this.name = "Tom";
//         this.number = 123;
//     }
// }


// class Friend {
//     constructor(_name, _number) {
//         this.name = _name;
//         this.number = _number;
//     }

//     report(){
//         console.log(this.name, this.number);
//         console.log(`Name: ${this.name}, Number: ${this.number}`);
//     }
// }

let friends = [];
friends.push(new Friend("Dave", 752))
friends.push(new Friend("Tom", 123))

console.log(friends)

function cleanData() {
    for(let i = 0; i < data.rows.length; i++) {
        let cleanerData =(data.rows[i].obj)
        cleanedData.push(cleanerData);
        cleanedData[i].Female = parseInt(cleanedData[i].Female)
        cleanedData[i].Male = parseInt(cleanedData[i].Male)
        cleanedData[i].Total = parseInt(cleanedData[i].Total)
    } 
}
