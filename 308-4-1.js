// The raw data that I want to transform into a formmated array of objects
const TheData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// console.log(rawData);
console.log(`===================Parts 1 - 3 =======================`);
// Split the raw data into an array of rows  (.split ONLY Works on Strings)

const lines = TheData.split('\n'); //Splits all the Data into Rows from the `\n`
const Start = lines[0].split(','); //Creates the header keys, where I want to store my info

//Part 3: Turning my headers into lowercase.
for (let x = 0; x < Start.length; x++){
    Start[x] = Start[x].toLowerCase();
}


//The Array all the information will be stored
const table = [];

//Lets me loop through the max number of rows and splits them!
let lineIndex = 1; //It's 1 so I can skip my headers


//My Row Splitter
while (lineIndex < lines.length) {
const currentLine = lines[lineIndex].split(',') //Splits the row according to index position
const obj = {}; // creates and object for my row
let startIndex = 0; //counter, to assign correct information to each header

//How i'll add the information to the headers (I don't leave till the row is done)
 while (startIndex < Start.length){ // for current data cycles 0 - 3
  obj[Start[startIndex]] = currentLine[startIndex];  // Adds each item to apporpriate header(key) for a row
  startIndex++;
 }

 table.push(obj); // Adds the object to the table array
 lineIndex++;
}

console.log(table); //The Completed sort form of the data



console.log("=========================Part 4==========================================");
const removeLast = table.pop(); //Goodbye Bill, the doctor needs no assistance. Maybe you can become a science guy
// console.log(table);

const addIndex1 = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
table.splice(1,0, addIndex1) //Adds the new object to the front of the table array
// console.log(table);

const addLast = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
table.push(addLast) //Adds the new object to the end of the table array.

 console.log(table);

//calculating the age
let totalAge = 0;
let ageCount = 0;

for (let i = 0; i < table.length; i++) {
  totalAge += Number(table[i].age); // Converts the string into a number and adds the value to totalAge
  ageCount++
}
// console.log(totalAge); //Prints the total age
let averageAge = totalAge/ageCount // The equation for checking the average age
console.log(averageAge, " Is the average age of this table");



console.log("==================Part 5=======================================");
//Turning my array back into a csv. . . like how?


// Extract headers and join them with (",") delimeter
const keyHeaders = Object.keys(table[0]).join(",");

// Create rows arrays by turning all the data (Excludings keys) into strings
const tableRows = table.map(obj => Object.values(obj).join(','));

// Combine headers and rows
const csv = [keyHeaders, ...tableRows].join('\\n');

console.log(csv);

















































