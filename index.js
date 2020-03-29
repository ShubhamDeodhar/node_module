var rect=require('./rectangle');


function solveRect(l,b){
    console.log("solving rectangle L= "+ l +" B="+b);

    if(l<=0 || b<=0)
    {
        console.log("Unacceptable dimensions");

        
    }
    else{
        console.log("the area of rectangle is "+ rect.area(l,b));
        console.log("perimeter of the rectangle is "+rect.perimeter(l,b));
    }
};

solveRect(2,4);
solveRect(10,9);
solveRect(-3,4);