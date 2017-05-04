

var current;
var graphs=[
  {description:"Here is the basic Supply/Demand Model. You can see Price and Quantity on the axis, and the Equilibrium",
    image: "http://www.economicshelp.org/wp-content/uploads/2012/11/market-equilibrium.png"},
  {description:"As demand shifts outward, Price increases and Quantity increases. Here we see the inverse realationship of Supply and Demand.",
    image: "http://www.economicshelp.org/wp-content/uploads/2012/11/excess-supply-move-to-eq.png"},
  {description:"",
    image:"http://www.economicshelp.org/wp-content/uploads/2012/11/excess-demand-move-to-eq-id.png"},
    {
      description:"",
      image:"http://www.economicshelp.org/wp-content/uploads/2009/09/increase-demand-id.png",
    },
    {
      description:"",
      image:"http://www.economicshelp.org/wp-content/uploads/2009/09/increase-supply-inelastic-demand.png",
    },
    {
      description:"",
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
