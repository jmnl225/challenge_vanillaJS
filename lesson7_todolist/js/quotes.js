const quotes = [
  {
    quote: "This is your life. Do what you want and do it often. ",
    author: "Holstee Manifesto, The Wedding Day"
  },
  {
    quote: "If you don't like something, change it.",
    author: "Holstee Manifesto, The Wedding Day"
  },
  {
    quote: "If you don't like your job, quit.",
    author: "Holstee Manifesto, The Wedding Day"
  },
  {
    quote: "If you don't have enough time, stop watching mobile",
    author: "Holstee Manifesto, The Wedding Day, edited jm"
  },
  {
    quote:
      "If you are looking for the love of your life, stop; they will be waiting for you when you start doing things you love.",
    author: "Holstee Manifesto, The Wedding Day"
  },
  {
    quote: "Stop over-analysing, life is simple.",
    author: "Holstee Manifesto, The Wedding Day"
  },
  {
    quote: "All emotions are beautiful. ",
    author: "Holstee Manifesto, The Wedding Day"
  },
  {
    quote: "When you eat, appreciate every last bite.",
    author: "Holstee Manifesto, The Wedding Day"
  },
  {
    quote: "Life is simple.",
    author: "Holstee Manifesto, The Wedding Day"
  },
  {
    quote:
      "Open your heart, mind and arms to new things and people, we are united in our differences.",
    author: "Holstee Manifesto, The Wedding Day"
  },
  {
    quote:
      "Ask the next person you see what their passion is and share your inspiring dream with them.",
    author: "Holstee Manifesto, The Wedding Day"
  },
  {
    quote: "Travel often; getting lost will help you find yourself.",
    author: "Holstee Manifesto, The Wedding Day"
  },
  {
    quote: "Some opportunities only come once, seize them.",
    author: "Holstee Manifesto, The Wedding Day"
  },
  {
    quote:
      "Life is about the people you meet and the things you create with them, so go out and start creating.",
    author: "Holstee Manifesto, The Wedding Day"
  },
  {
    quote: "Life is short, live your dream and wear your passion.",
    author: "Holstee Manifesto, The Wedding Day"
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#span2");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

//console.log(`${todaysQuote.quote} : ${todaysQuote.author}`);


quote.innerText = todaysQuote.quote;
author.innerText = "\nBy. " + todaysQuote.author;
