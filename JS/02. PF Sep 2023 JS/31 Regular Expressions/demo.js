let sample = `ECMAScript (/ˈɛkməskrɪpt/; ES)[1] is a 201 standard for scripting languages, including JavaScript, JScript, and ActionScript. 262-ECMA It is best known as a JavaScript standard intended to ensure the interoperability of web pages across different web browsers.[2] It is standardized by Ecma International in the document ECMA-262.
555
ECMAScript is commonly used 311 for client-side scripting on the World Wide Web, and it is increasingly being used for server-side applications and services using runtime environments - Node.js[3], deno[4] and bun[5].`;
let pattern = /(\d{3})-([A-Z]{4}).*?(\2)-(\1)/gm;
let pattern2 = new RegExp('((\\d{3})-([A-Z]{4}).*?(\\2)-(\\1))', 'gm');
let pattern3 = /\d{3}/gm;


// console.log(pattern.test(sample));
// console.log(sample.match(pattern3));
// console.log(pattern3.exec(sample)); // returns first match but saves progress if we
                                    // call it again it returns the second match

// let match = pattern3.exec(sample);
// while (match != null){
//     console.log(match);

//     match = pattern3.exec(sample);
// }

let result = sample.replace(pattern3, "***");
console.log(result);