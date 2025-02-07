// Objects
let friend1 = {name:"Tom", age:20, bowling:true};
let friend2 = {name:"Chriss", age:25, bowling:false};
let friend3 = {name:"Bob", age:37, bowling:true};
let friend4 = {name:"Jeff", age:83, bowling:true};
let friend5 = {name:"Carl", age:7, bowling:false};

let friends = [];
let friendAges = [];
let friendBowlingAges = [];

friends.push(friend1, friend2, friend3, friend4, friend5);

for(let i = 0; i < friends.length; i++){
    console.log(friends[i].name)
}

// This is getting the age of all friends
for(let i = 0; i < friends.length; i++){
    friendAges.push(friends[i].age)
}

// This is getting the age of all of the bowling people who are bowling.
for(let i = 0; i < friends.length; i++){
    if(friends[i].bowling == true){
        friendBowlingAges.push(friends[i].age)
    }
}


// A function that will get the average of the ages in the friends of bowling who do bowl
// function CalAvg(friendBowlingAges) {
//     if (friendBowlingAges.length === 0) {
//         return ("There are no ages."); 
//     }
//     let sum = 0;
//     for (let i = 0; i < friendBowlingAges.length; i++) {
//       sum += friendBowlingAges[i];
//     }
//     return sum / friendBowlingAges.length;
// }


// Can also be called using the console log at the end with the friendBowlingAges
function CalAvg(nums) {
    if (nums.length === 0) {
        return ("There are no ages."); 
    }
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return sum / nums.length;
}

// i can pass in any array of numbers in to CalAvg and get the average of all of the numbers.
console.log(CalAvg(friendBowlingAges));

// for(i = 0; i < 100; i++){
//     if(i%5==0){console.log(i)};
// }

mediumexample = [20 , 30 , 40, 50 , 60];

// % is modules so it makes sure that it doesn't have any decimal places.
function medium(num) {
    if(num.length%2==0){
        // This is where you get the middle number of the array. if there is an uneven number ammount of numbers in the array.
        return ((num[num.length/2 - 1] + num[num.length/2]) / 2); //So if there are 4 numbers in the array, it will devide it by 2 and minus 1 so that would be 1 index on
        }               //the second number then on the second half of the 4 numbers it will get the length of the array divide it by 2 
    else{
        // Returns the index of the middle number in the array.
        return num[Math.floor(num.length/2)]
    }
}

mediumexample2 = [100 ,1, 37 , 30 , 40, 50 , 60];
// Without the a,b => a-b it will sort them from lowest to highest. With the a,b => b-a it will sort them from highest to lowest. If there was no a - b the numbers wouldnt order in the right order because the comupter would mix up 100 and 1 because they both start with a 1

// This is when the array is unsorted so if its [1,2,5,4,3] it will change it to [1,2,3,4,5] so that the correct meduim can be found.
function  mediumunsorted(num) {
    num.sort((a,b) => a-b);
    
    if(num.length%2==0){
        return ((num[num.length/2 - 1] + num[num.length/2]) / 2); //The sort function is used to sort the array in ascending order the A nd B are both numbers they are minused from each other to see if there is a negitive value left.
    } else {
        return num[Math.floor(num.length/2)];
    }
}

