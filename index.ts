import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import * as Rx from 'rxjs';

//create observable that emits click events
// const source = fromEvent(document, 'click');
// //map to string with given event timestamp
// const example = source.pipe(map(event => `Event time: ${event.timeStamp}`));
// //output (example): 'Event time: 7276.390000000001'
// const subscribe = example.subscribe(val => console.log(val))

  const inputStream = fromEvent(document, 'click');
 const  timestamp  = inputStream.pipe(map(event => `Event time: ${event.timeStamp}`));
  const output = (<HTMLInputElement> document.getElementById("output")) ;
const subscribe2 = timestamp.subscribe( val => {output.value = val}) ;

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
