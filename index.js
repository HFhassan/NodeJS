var rect = require ('./rectangle');

function solveRect (l,b) {
    console.log ("Solving for rectangle with l ="
    + l + "and b ="+ b );
    if (l<=0 || b<=0)
    {
        console.log ("renctangle demensions must be greater than zero");
    }
    else 
    {
        console.log("The area of the rectangle is "+ rect.area(l,b));
        console.log ("The perometer of the rectangle is "+ rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(9,2);
solveRect(0,5);
solveRect(-9,3);
