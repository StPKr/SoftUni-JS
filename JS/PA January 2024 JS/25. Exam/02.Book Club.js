class BookClub {
    library;
    books = [];
    members = [];
    constructor(library) {
        this.library = library;
    }

    addBook(title, author) {
        const data = this.books.find(b => b.title == title);

        if (data) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`
        }

        this.books.push({
            title,
            author
        });

        return `The book "${title}" by ${author} has been added to ${this.library} library.`

    }

    addMember(memberName) {
        if (this.members.includes(memberName)) {
            return `Member ${memberName} is already a part of the book club.`
        }

        this.members.push(memberName);
        return `Member ${memberName} has been joined to the book club.`

    }

    assignBookToMember(memberName, bookTitle) {
        if (!this.members.includes(memberName)) {
            throw new Error(`Member ${memberName} not found.`);
        }

        const data = this.books.find(b => b.title == bookTitle);

        if (!data) {
            throw new Error(`Book "${bookTitle}" not found.`);
        }

        this.books.filter(b => b !== data);
        return `Member ${memberName} has been assigned the book "${bookTitle}" by ${data.author}.`

    }

    generateReadingReport() {
        if (this.members.length == 0){
            return `No members in the book club.`;
        }

        if (this.books.length == 0){
            return `No available books in the library.`;
        }

        const result =[
            `Available Books in ${this.library} library:`
        ];

        for (let book of this.books){
            result.push(`"${book.title}" by ${book.author}`);
        }

        return result.join('\n');

    }
}

const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Peter"));
console.log(myBookClub.generateReadingReport());
/*
The book "The Great Gatsby" by F. Scott Fitzgerald has been added to The Bookaholics library.
The book "To Kill a Mockingbird" by Harper Lee has been added to The Bookaholics library.
The book "1984" by George Orwell has been added to The Bookaholics library.
Member Alice has been joined to the book club.
Member Peter has been joined to the book club.
Uncaught Error Error: Member Mary not found.
*/