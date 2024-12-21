interface ElementMap {
    bookOne: HTMLElement | null
    bookTwo: HTMLElement | null
    bookThree: HTMLElement | null
    bookFour: HTMLElement | null
    bookFive: HTMLElement | null
    bookSix: HTMLElement | null
    bookSeven: HTMLElement | null
    bookEight: HTMLElement | null
    
}
  
export const element: ElementMap = {
    bookOne : document.querySelector('.main__book--1'),
    bookTwo : document.querySelector('.main__book--2'),
    bookThree : document.querySelector('.main__book--3'),
    bookFour : document.querySelector('.main__book--4'),
    bookFive : document.querySelector('.main__book--5'),
    bookSix : document.querySelector('.main__book--6'),
    bookSeven : document.querySelector('.main__book--7'),
    bookEight : document.querySelector('.main__book--8'),

}

export interface Book {
    id: number,
    title: string,
    author: string,
    audience: string,
    pages: number | null,
    plot: string,
    publisher: string,
    year: number
    color: string | null
}