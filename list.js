window.onload = function () {
    let paper = Raphael('paper', 1000, 1000);

    paper.rect(0, 0, 1000, 1000);

    let result = {

        fieldValue: null,
        rangeA : null,
         rangeB : null ,

        animation() {

            this.rangeA = paper.rect(20, 160, this.fieldValue * 5, 200)

                .attr({"fill": "yellow"}).animate({"transform": "..r-90, 200,200"}, 5000, "elastic") ;


            // setTimeout(this.rangeA.hide(), 5000);

        }

    }


    let inputField = document.getElementById('data');
    inputField.addEventListener('input', function myFunction() {

        result.fieldValue = document.getElementById('data').value;
        console.log(result.fieldValue);
        // let rect = paper.rect(0,  100,  result * 5 ,40 ).attr({fill: "0-#fff-#f00:20-#000", "stroke-width": 2, stroke: "red"})
        // rect.hide();
        if (result.fieldValue) {

            result.animation();
        }


    })


}

