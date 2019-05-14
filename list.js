window.onload = function () {
    let paper = Raphael('paper', 800, 500);

   // paper.rect(0, 0, 800, 500);

    let result = {

        height: null,
        rangeA : null,
         rangeB : 5 ,
        distance: 0 ,




        animation() {

            let x = 0;

                x = parseInt(x + this.height + this.rangeB);
                console.log(x);


            this.rangeA = paper.rect(x  , 50, 30 ,this.height * 10  )


                .attr({"fill": "green"}).animate({"transform": "..r-180, 400,250"}, 5000, "elastic");







        }



    }


    // function clicked() {
    //     document.getElementById('btn').value = "";
    //
    //
    //
    // }

    let inputField = document.getElementById('data');
    inputField.addEventListener('input', function myFunction() {

        result.height = document.getElementById('data').value;
        console.log(result.height);
        // let rect = paper.rect(0,  100,  result * 5 ,40 ).attr({fill: "0-#fff-#f00:20-#000", "stroke-height": 2, stroke: "red"})
        // rect.hide();
        if (result.height) {

            result.animation();



        }


    })


}

