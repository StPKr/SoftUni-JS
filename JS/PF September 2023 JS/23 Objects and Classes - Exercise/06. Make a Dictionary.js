// function solve(inputArr) {
//     class Dictionary {
//         constructor(term, description) {
//             this.term = term;
//             this.definition = description;
//         }
//         print() {
//             console.log(`Term: ${this.term} => Definition: ${this.definition}`)
//         }
//     }
//     let elements = [];
//     for (let json of inputArr) {
//         let parsed = JSON.parse(json);
//         let term = Object.keys(parsed)[0];
//         let definition = Object.values(parsed)[0];
//         let element = new Dictionary(term, definition);
//         elements.push(element);
//     }
//     elements.sort((a, b) => a.term.localeCompare(b.term));
//     for (let el of elements) {
//         el.print();
//     }
// } - unfinished 
function solve(inputArr) {
    // Create an object to store the dictionary
    let dictionary = {};

    for (let json of inputArr) {
        let parsed = JSON.parse(json);
        let term = Object.keys(parsed)[0]; // Get the term
        let definition = Object.values(parsed)[0]; // Get the definition
        dictionary[term] = definition; // Store or replace the definition
    }

    // Sort the terms alphabetically
    let sortedTerms = Object.keys(dictionary).sort();

    // Print the sorted dictionary
    for (let term of sortedTerms) {
        console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
    }
}
solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)