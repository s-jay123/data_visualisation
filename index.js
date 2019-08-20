import {from, fromEvent} from 'rxjs';
import { map } from 'rxjs/operators';
import * as Rx from 'rxjs';



window.onload = function () {

  let cars = ["a", "b", "c"] ;
    let c = [] ;

    let a ;
    let paper = Raphael('paper', 800, 500);
    let inputField = document.getElementById('value');
    let count =0 ;
    inputField.addEventListener('input',  function myFunction() {
       count ++ ;

  console.log( count) ;
        a  = document.getElementById('value').value;
        var integer = parseInt(a);
  if(count ==1)
      alert(count ) ;
        console.log(typeof  integer) ;
        paper.ellipse(100,100,a,60).attr({
            fill: "red",
            stroke: "rgb(200,100,77)",
            "stroke-width": 5

     })

        if(count==2  )

        {

                paper.ellipse(120,100,60,a).attr({
                    fill: "blue",
                    stroke: "rgb(200,100,77)",
                    "stroke-width": 5})



}
 if (count==3){

     paper.ellipse(140,100,a,60).attr({
         fill: "red",
         stroke: "rgb(200,100,77)",
         "stroke-width": 5})


 }



                    // p1.attr({"stroke-width": 4, fill: "red"});

        // function heatMapColorforValue(a){
        //     var h = (1.0 -a) * 240 ;
        //     return "hsl(" + h + ", 100%, 50%)";
        //
        // }
        // let rect = paper.rect(0,  100,  result * 5 ,40 ).attr({fill: "0-#fff-#f00:20-#000", "stroke-height": 2, stroke: "red"})
        // rect.hide();

    })


}
//create observable that emits click events

// let a ;
// let inputField = document.getElementById('value');
// inputField.addEventListener('input',  function myFunction() {
//
//
//      a  = document.getElementById('value').value;
//     var integer = parseInt(a);
//     console.log(typeof  integer) ;
//     heatMapColorforValue(a);
//     function heatMapColorforValue(a){
//         var h = (1.0 -a) * 240 ;
//         return "hsl(" + h + ", 100%, 50%)";
//
//     }
    // let rect = paper.rect(0,  100,  result * 5 ,40 ).attr({fill: "0-#fff-#f00:20-#000", "stroke-height": 2, stroke: "red"})
    // rect.hide();

// })

const source = fromEvent(document, 'click');
//map to string with given event timestamp
const example = source.pipe(map(event => `Event time: ${event.timeStamp}`));
//output (example): 'Event time: 7276.390000000001'
const subscribe = example.subscribe(val => console.log(val));
//creating an input stream of event
    const inputStream = fromEvent(document, 'click');
let paper = Raphael('one', 800, 500);

    const timestamp = inputStream.pipe(map(event => paper.rect(0,0,event.clientX, event.clientY ).attr({fill : "#97eeff",
        stroke : "#ff0099"}).animate({"transform": "..r-120, 50,50"}, 5000, "bounce")     ));
    //creating the output variable
    const output = document.getElementById("output");

    // the subscribe event listens to the timestamp sending off event streams and outputs the val to the textbox
    const subscribe2 = timestamp.subscribe(val => {
    console.log(val);
    });

// capturing mouse move event
    const mouseMove = fromEvent(document, 'mousemove') ;
    const output2 = document.getElementById("move");

     const subscriber = mouseMove.subscribe(e => paper.circle(e.clientX,e.clientY,20).attr({
         fill: "black",
         stroke: "rgb(183, 213, 203)",
         "stroke-width": 2
     }).animate({"transform": "..r90, 200,200"}, 5000, "bounce")) ;



// var observable = Observable.create((observer:any) => {
//     observer.next('Hello World!');
//     observer.next('Hello Again!');
//     observer.complete();
//     observer.next('Bye');
// })
// observable.subscribe(
//     (x:any) => logItem(x),
//     (error: any) => logItem ('Error: ' + error),
//     () => logItem('Completed')
// );
// function logItem(val:any) {
//     var node = document.createElement("li");
//     var textnode = document.createTextNode(val);
//     node.appendChild(textnode);
//     document.getElementById("list").appendChild(node);
// }

