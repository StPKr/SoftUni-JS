function solve(input) {
    let phonebook = {};
    for (let item of input) {
        let [name, phone] = item.split(' ');
        phonebook[name] = phone;
    }
    // for (let [name,phone] of Object.entries(phonebook)){
    //     console.log(name, '->', phone)
    // }
    for (let entry of Object.entries(phonebook)){
        console.log(entry.join(' -> '));
    }
}
solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);