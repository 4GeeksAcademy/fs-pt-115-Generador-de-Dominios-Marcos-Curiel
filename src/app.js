import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Variables Main
let pronoun = ['the', 'our', 'your'];
let adj = ['great', 'big', 'small'];
let noun = ['jogger', 'racoon', 'panda'];
let domains = [".com", ".info", "net", ".org", ".biz", ".edu"];

const domain = pronoun.flatMap(pronouns => adj.flatMap(adjs => noun.flatMap(nouns => domains.map(domain => `${pronouns}${adjs}${nouns}${domain}`))));

console.log(domain);



