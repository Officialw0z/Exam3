var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { element } from './interfaces.js';
const fetchBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = 'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books';
    try {
        const res = yield fetch(url);
        if (!res.ok) {
            throw new Error(`Error fetching books: ${res.statusText}`);
        }
        const books = yield res.json();
        console.log("Böcker:", books);
        return books;
    }
    catch (error) {
        console.error("Error fetching books:", error);
        return undefined;
    }
});
const clickBook = (books) => {
    if (!books || books.length === 0) {
        console.error("ingen data kopplad till eventlyssnare");
        return;
    }
    const elementMap = {
        bookOne: 1,
        bookTwo: 2,
        bookThree: 3,
        bookFour: 4,
        bookFive: 5,
        bookSix: 6,
        bookSeven: 7,
        bookEight: 8
    };
    for (const [key, id] of Object.entries(elementMap)) {
        const bookElement = element[key];
        if (bookElement) {
            bookElement.addEventListener('click', () => {
                const book = books.find(b => b.id === id);
                if (book) {
                    console.log(`Bok ID: ${book.id}, Titel: ${book.title}, Författare: ${book.author}`);
                    updateBookView(book);
                }
                else {
                    console.log(`Ingen bok hittades med ID: ${id}`);
                }
            });
        }
    }
};
const updateBookView = (book) => {
    const header = document.querySelector('.book__view--header');
    const author = document.querySelector('.book__view--author');
    if (header && author) {
        header.textContent = book.title;
        author.textContent = `By: ${book.author}`;
    }
    const rightHeader = document.querySelector('.book__view--right--header');
    const rightAuthor = document.querySelector('.book__view--right--author');
    const rightText = document.querySelector('.book__view--right--text');
    const audience = document.querySelector('.book__view--right--box--text1');
    const firstPublished = document.querySelector('.book__view--right--box--text2');
    const allPages = document.querySelector('.book__view--right--box--text3');
    const publisher = document.querySelector('.book__view--right--box--text4');
    const bookElement = document.querySelector('.book__view--left');
    if (rightHeader && rightText && rightAuthor && audience && publisher && firstPublished && allPages && bookElement) {
        rightHeader.textContent = book.title;
        rightAuthor.textContent = 'by ' + book.author;
        rightText.textContent = book.plot;
        audience.textContent = 'Auidence: ' + book.audience;
        publisher.textContent = 'Publisher: ' + book.publisher;
        firstPublished.textContent = 'First published: ' + book.year.toLocaleString();
        bookElement.style.background = book.color || 'linear-gradient(#f2c84c8c, #f2c84c)';
        if (allPages) {
            allPages.textContent = book.pages !== null ? `${book.pages} pages` : 'No page count available';
        }
    }
    const mainHeader = document.querySelector('.main__header');
    const mainWrapper = document.querySelector('.main__wrapper');
    const bookWrapper = document.querySelector('.book__wrapper');
    if (mainHeader instanceof HTMLElement && mainWrapper instanceof HTMLElement && bookWrapper instanceof HTMLElement) {
        mainHeader.style.display = 'none';
        mainWrapper.style.display = 'none';
        bookWrapper.style.display = 'flex';
    }
    else {
        console.error("Ett eller fler av elementen kunde inte hittas.");
    }
};
const backArrow = document.querySelector('.book__view--goback');
backArrow.addEventListener('click', () => {
    window.location.href = 'index.html';
});
const initalize = () => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield fetchBooks();
    if (books) {
        clickBook(books);
    }
    else {
        console.error("error från eventlistener");
    }
});
initalize();
