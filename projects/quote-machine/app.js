var quotes = [
  'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live - Martin Golding',
  'Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. - Linus Torvalds',
  'If McDonalds were run like a software company, one out of every hundred Big Macs would give you food poisoning, and the response would be, "We\'re sorry, here’s a coupon for two more." - Mark Minasi',
  'Talk is cheap. Show me the code. - Linus Torvalds',
  'When someone says: "I want a programming language in which I need only say what I wish done", give him a lollipop. - Alan J. Perlis',
  'Good code is its own best documentation. As you\'re about to add a comment, ask yourself, "How can I improve the code so that this comment isn\'t needed?" – Steve McConnell',
  'Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter. - Eric S. Raymond', ];

var btn = document.querySelector('button');

btn.onclick = function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote').innerHTML = quotes[randomNumber];


    var twitter = document.getElementById('tweet');


    twitter.onclick = function tweet() {
        this.setAttribute("href", 'https://twitter.com/intent/tweet?text=' + quotes[randomNumber]);
    }
}