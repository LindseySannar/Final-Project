

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
      description:"When supply shifts outward,price decreases which also causes quantity demanded to increase. The opposite is true if supply shifts inward(decreases)",
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
function calculateResults(){

}
function setCookie(correct, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


    // figure out how to set and get cookies, which variables to use.
    // also for the gallery.js figure how to shuffle pictures.
    //styling for the CSS pages needs to be cohesive...
    // values for the quiz portion need to be set and collected on the last HTML Page
//http://www.economicshelp.org/wp-content/uploads/2009/09/increase-demand-id.png
//http://www.economicshelp.org/wp-content/uploads/2009/09/increase-supply-inelastic-demand.png
