/******************************************
* Assignment 1 - Random Quote Generator 
* 300316045
 * Soomin Kim
*****************************************/

/*** 
 * `quotes` array 
***/
let quotes =[
    {
        quote: "The purpose of our lives is to be happy.",
        source: "Dalai Lama",
        citation: "essay",
        year:"2016"
    },
    {
        quote: "Life is what happens when you are busy making other plans",
        source: "John Lennon",
        citation: "lyric",
        year:"1964"
    },
    {
        quote:"Many of life’s failures are people who did not realize how close they were to success when they gave up",
        source: "Thomas A. Edison",
        citation: "",
        year:""
    },
    {
        quote:"If you want to live a happy life, tie it to a goal, not to people or things.",
        source: "Albert Einstein",
        citation: "",
        year:""
    },
    {
        quote:"Never let the fear of striking out keep you from playing the game.",
        source: "Babe Ruth",
        citation: "speech",
        year:"1939"
    }
]; 
/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
    randomQuote = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuote];
}

/***
 * `printQuote` function
***/
function printQuote(){
    let randomQ = getRandomQuote();
    html = ""
    html += '<p class = "quote">' + randomQ.quote + '</P>'
    html += '<p class = "source">' + randomQ.source
    
    if ( randomQ.citation) {
        html += '<span class = "citation">' + randomQ.citation + "</span>";
    }
    if(randomQ.year){
        html += '<span class = "year">' + randomQ.year + "</span>";
    }
    html += '</p>'
    document.getElementById("quote-box").innerHTML = html;
}

/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);