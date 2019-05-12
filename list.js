window.onload = function () {
    let paper = Raphael('paper', 1000, 1000);

    paper.rect(0, 0, 1000, 1000);


    "use strict";
    let result ;
    function clicked() {
        result = document.getElementById('data').value;

            var mouth = paper.rect(20, 160, result * 5, 200)
                .attr({"fill": "yellow"}).animate({"transform": "..r-90, 200,200"});




    }
    document.getElementById('btn').addEventListener('click', clicked);

    let inputField = document.getElementById('data');
    inputField.addEventListener('input', function myFunction() {

       let  result = document.getElementById('data').value;
        // let rect = paper.rect(0,  100,  result * 5 ,40 ).attr({fill: "0-#fff-#f00:20-#000", "stroke-width": 2, stroke: "red"})
        // rect.hide();
 if (result < 10)
        var mouth = paper.rect(20, 160, result * 5, 200)
            .attr({"fill": "yellow"}).animate({"transform": "..r-90, 200,200"}, 5000, "elastic");


 else
     var mouth = paper.rect(20, 160, result * 5, 200)
         .attr({"fill": "0-#fff-#f08:20-#000"}).animate({"transform": "..r-90, 200,200"}, 5000, "elastic");


    })


}

