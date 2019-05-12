/*
var s = Snap("#svg");
// Circle with 80px radius
//var circle = s.circle(90,120,80);
var circle = s.circle(90,120,80);
// Square with 160px side width
var square = s.rect(210,40,160,160);
// Ellipse with 80px vertical radius and 50px horizontal radius
var ellipse = s.ellipse(460,120,50,80);
*/



window.onload = function() {
        var paper = Raphael(40, 40, 400, 400);
        paper.rect(0,0,400,400);
        paper.circle(100, 90, 90)
            .attr({fill : "#ff382f",
                stroke : "#ff0099"}).click(function () {

            this.attr({fill: "blue"});

        }).animate({cx : 300}, 1000, "elastic");


        paper.text(100,20,"click the red rectangle");
        var r1 = paper.rect(100,100,100,100).attr({fill: "red"});
        var r2 = paper.rect(120,100,120,100).attr({fill: "red", "stroke-width": 4});
        r2.click(function(){
            this.toBack();
        }) // paper.circle(100, 90, 90)
    //     .attr({fill : "#ff382f",
    //         stroke : "#ff0099"}).click(function () {
    //
    //     this.attr({fill: "blue"});
    //
    // }).animate({cx : 300}, 1000, "elastic");


    // paper.text(100,20,"click the red rectangle");
    // var r1 = paper.rect(100,100,100,100).attr({fill: "red"});
    // var r2 = paper.rect(120,100,120,100).attr({fill: "red", "stroke-width": 4});
    // r2.click(function(){
    //     this.toBack();
    // })
    }

