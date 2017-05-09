

var current;
var graphs=[
  {
    description:"This illustrates the point where quantity supplied equals quantity demanded. This is called the Equilibrium",
    image: "http://www.economicshelp.org/wp-content/uploads/2012/11/market-equilibrium.png",
  },
  {
    description:"If supply is greater than demand then we have a surplus. Firms will reduce the price until quantity supplied, again, equals quantity demanded.",
    image: "http://www.economicshelp.org/wp-content/uploads/2012/11/excess-supply-move-to-eq.png",
  },
  {
    description:"If demand exceeds supply then we have a shortage. Firms will increase prices to reduce demand, until quantity supplied equals quantity demanded.",
    image:"http://www.economicshelp.org/wp-content/uploads/2012/11/excess-demand-move-to-eq-id.png",
  },
  {
      description:"When demand shifts out price increases. Quantity demanded also increases. Alternately, if demand decreases price decreases and so does quantity demanded. ",
      image:"http://www.economicshelp.org/wp-content/uploads/2009/09/increase-demand-id.png",
  },
  {
      description:"When supply shifts outward,price decreases which also causes quantity demanded to increase. The opposite is true if supply shifts inward (decreases).",
      image:"http://www.economicshelp.org/wp-content/uploads/2009/09/increase-supply-inelastic-demand.png",
  },
  {
      description:"For simplicity, and to avoid ambiguity, we shift only one curve at a time and view its affects on the other.Here it is difficult to see which one moved first.",
      image:"http://www.economicshelp.org/wp-content/uploads/2009/09/fall-in-price-id.png",
  },
];
var current;
function shuffleGraphs()
{
  var randomIndex;
  do {
    randomIndex= Math.floor(Math.random() * graphs.length);
  }
  while (randomIndex==current );
  current=randomIndex;
  document.getElementById("image").src = graphs[current].image;
  document.getElementById("caption").innerHTML = graphs[current].description;
}
function nextPage(){
  window.location.href = 'tutorialquiz.html';
}
function previousPage(){
  window.location.href = 'index.html';
}

function beginTutorial(){
  window.location.href = 'index.html'
}
function validateAnswer1(){
   var getAnswer1 = document.getElementById("question1").value;
   if (getAnswer1 == "inverse" || getAnswer1 == "Inverse") {
      document.getElementById("question1").style.color = "green";
      document.getElementById("response1").innerHTML = "Correct!";
   } else {
      document.getElementById("question1").style.color = "red";
   }
 }
 function validateAnswer2(){
   var getAnswer2 = document.getElementById("question2").value;
   if (getAnswer2 == "surplus" || getAnswer2 == "Surplus") {
      document.getElementById("question2").style.color = "green";
      document.getElementById("response2").innerHTML = "Correct!";
   } else {
      document.getElementById("question2").style.color = "red";
   }

 }
 function validateAnswer3(){
   var getAnswer3 = document.getElementById("question3").value;
   if (getAnswer3 == "shortage" || getAnswer3 == "Shortage") {
      document.getElementById("question3").style.color = "green";
      document.getElementById("response3").innerHTML = "Correct!";
   } else {
      document.getElementById("question3").style.color = "red";
   }

 }
 function validateAnswer4(){
   var getAnswer4 = document.getElementById("question4").value;
   if (getAnswer4 == "equilibrium" || getAnswer4 == "Equilibrium") {
      document.getElementById("question4").style.color = "green";
      document.getElementById("response4").innerHTML = "Correct!";
   } else {
      document.getElementById("question4").style.color = "red";
   }

 }
