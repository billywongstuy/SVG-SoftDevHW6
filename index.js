/*------------------
 VARIABLES
------------------*/

var pic = document.getElementById("vimage");
var clearB = document.getElementById("clear");
var prevX = null;
var prevY = null;

/*------------------------------------------
 ADDS CIRCLE AND LINE WHEN CLICK ON SVG
------------------------------------------*/

var addCircle = function(e) {
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    c.setAttribute("r","20");
    c.setAttribute("fill","rgba(255,0,0,0.5)");
    c.setAttribute("stroke","black");
    c.setAttribute("cx",e.offsetX);
    c.setAttribute("cy",e.offsetY);
    pic.appendChild(c);
};


var addLine = function(e) {
    var l = document.createElementNS("http://www.w3.org/2000/svg","line");
    l.setAttribute("stroke","black");
    l.setAttribute("stroke-width",1);
    l.setAttribute("x1",prevX);
    l.setAttribute("y1",prevY);
    l.setAttribute("x2",e.offsetX);
    l.setAttribute("y2",e.offsetY);
    pic.appendChild(l);
};


var addStuff = function(e) {
    addCircle(e);
    if (prevX != null) {
	addLine(e);
    }
    prevX = e.offsetX;
    prevY = e.offsetY;
};


pic.addEventListener("click",addStuff);


/*--------------
 CLEAR
--------------*/

var clear = function(e) {
    while (pic.lastChild) {
	pic.removeChild(pic.lastChild);
    }
};
clearB.addEventListener("click",clear);
