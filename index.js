var pic = document.getElementById("vimage");
var prevX = null;
var prevY = null;

var addCircle = function(e) {
    var x = e.offsetX;
    var y = e.offsetY;

    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");

    c.setAttribute("r","20");
    c.setAttribute("fill","red");
    c.setAttribute("stroke","black");
    
    c.setAttribute("cx",x);
    c.setAttribute("cy",y);
    
    pic.appendChild(c);
}



var addLine = function(e) {
    var l = document.createElementNS("http://www.w3.org/2000/svg","line");
    l.setAttribute("x1",prevX);
    l.setAttribute("y1",prevY);
    l.setAttribute("x2",e.offsetX);
    l.setAttribute("y2",e.offsetY);
    l.setAttribute("stroke","black");
    l.setAttribute("stroke-width",1);
    
    pic.appendChild(l);

    console.log("line adding");
    
}


var addStuff = function(e) {
    addCircle(e);
    if (prevX != null) {
	addLine(e);
    }
    prevX = e.offsetX;
    prevY = e.offsetY;
}


pic.addEventListener("click",addStuff);
