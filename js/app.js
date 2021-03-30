'use strict';
let info = document.getElementById('userInput');

function clickhandler(event){
    event.preventDefault();
    let authorName=event.target.authorName.value;
    let articleTitle=event.target.articleTitle.value;
    let subject=event.target.subject.value;
    let content=event.target.content.value;
    let day=event.target.day.value;
    let month=event.target.month.value;
    let year=event.target.year.value;
    (localStorage.setItem('authorName',authorName));
    (localStorage.setItem('articleTitle',articleTitle));
    (localStorage.setItem('subject',subject));
    (localStorage.setItem('content',content));
    (localStorage.setItem('day',day));
    (localStorage.setItem('month',month));
    (localStorage.setItem('year',year));
    let paragraph = document.getElementById('para');
    let names = (localStorage.getItem('authorName'));
    let article = (localStorage.getItem('articleTitle'));
    let subjects = (localStorage.getItem('subject'));
    let contents = (localStorage.getItem('content'));
    let days = (localStorage.getItem('day'));
    let months = (localStorage.getItem('month'));
    let years = (localStorage.getItem('year'));
    let textArea=document.createElement('p');
    textArea.textContent= names + article + subjects + contents + days + months + years;
    paragraph.appendChild(textArea);

}



// function Info(author,article,subject,content,day,month,year){
//     this.author = author;
//     this.article = article;
//     this.subject=subject;
//     this.content = content;
//     this.day = day;
//     this.month = month;
//     this.year = year;
//     userSelection.push(this);
// }
// userSelection=[];

// function clickhandler(event){
//         event.preventDefault();
//         const authorName=event.target.authorName.value;
//         const article=event.target.articletitle.value;
//         const subject = event.target.subject.value;
//         const content = event.target.content.value;
//         const day = event.target.day.value;
//         const month = event.target.month.value;
//         const year = event.target.year.value;
//         new Info(authorName,article,subject,content,day,month,year);
//         (localStorage.setItem(JSON.stringify('selection',Info)));
        
//     }
//     let paragraph=document.getElementById('para');
//     let getUserInput = (localStorage.getItem(JSON.parse('selection')));
//      function creatingParagraph(){
//          paragraph.textContent= getUserInput;

//      }
//      creatingParagraph();
