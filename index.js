import {from, fromEvent} from 'rxjs';
import { map } from 'rxjs/operators';
import * as Rx from 'rxjs';


//create observable that emits click events
// const source = fromEvent(document, 'click');
// //map to string with given event timestamp
// const example = source.pipe(map(event => `Event time: ${event.timeStamp}`));
// //output (example): 'Event time: 7276.390000000001'
// const subscribe = example.subscribe(val => console.log(val))

    const inputStream = fromEvent(document, 'click');
let one = Raphael('one', 800, 500);
    const timestamp = inputStream.pipe(map(event => one.rect(0,0,event.clientX, event.clientY ).attr({fill : "#97eeff",
        stroke : "#ff0099"})     ));
    //creating the output variable
    const output = document.getElementById("output");

    // the subscribe event listens to the timestamp sending off event streams and outputs the val to the textbox
    const subscribe2 = timestamp.subscribe(val => {
    console.log(val);
    });


    const mouseMove = fromEvent(document, 'mousemove') ;
    const output2 = document.getElementById("move");

     const subscriber = mouseMove.subscribe(e =>  one.circle(0,e.clientY,e.clientX)) ;



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

