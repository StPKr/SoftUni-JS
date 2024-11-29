import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AsyncSubject, BehaviorSubject, map, Observable, ReplaySubject, Subject } from 'rxjs';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// *Refresher
// const p = new Promise((resolve, reject) => {
//   resolve(100);

//   //reject -> catch error
// });

// // p.then((x) => console.log(x));
// p.then(console.log);

// const o$ = new Observable<number>((observer) => {
//   observer.next(101);
//   observer.next(102);
//   observer.next(103);

//   observer.error('My difficult exception');

//   setTimeout(()=>{
//     observer.complete();
//   }, 2000)
//   // observer.complete();

//   // return () => {
//   //   cleanup!
//   // }
// });

// o$.pipe(map((n) => n * 10)).subscribe({
//   // next: (x) => console.log(x), - same as beloww
//   next: console.log,
//   error: (err) => console.error('Err ', err),
//   complete: () => console.log('Completed'),
// });

//*Subject
// const subject$$ = new Subject();
// subject$$.subscribe((data) => console.log('Pesho:', data));
// subject$$.next('The Movie has started!');

// subject$$.subscribe((data) => console.log('Gosho:', data));
// subject$$.next('Now is the middle of the movie.');

// subject$$.subscribe((data) => console.log('Maria:', data));
// subject$$.next('The movie has ended.');

// const subject$$ = new Subject();
// subject$$.subscribe((data) => console.log('A:', data));
// subject$$.next(100);

// subject$$.subscribe((data) => console.log('B:', data));
// subject$$.subscribe((data) => console.log('C:', data));
// subject$$.next(200);

// setTimeout(() => {
//   subject$$.subscribe((data) => console.log('D:', data));
//   subject$$.next(300);

//   setTimeout(() => {
//     subject$$.subscribe((data) => console.log('E:', data));
//     subject$$.next(400);

//   }, 2000)

// }, 2000)

//*Behavior Subject
// const bSubject$$ = new BehaviorSubject(100);
// bSubject$$.subscribe((data) => console.log('Sub 1: ', data));

// setTimeout(() => {
//   bSubject$$.next(200);
//   bSubject$$.next(300);
//   bSubject$$.next(400);
//   bSubject$$.next(500);

//   bSubject$$.subscribe((data) => console.log('Sub 2: ', data));

//   setTimeout(() => {
//     bSubject$$.next(900);
//     bSubject$$.subscribe((data) => console.log('Sub 3: ', data));

//   }, 2000)

// }, 2000)

//*Replay subject
// const rSubject$$ = new ReplaySubject(5);
// rSubject$$.next(1000);
// rSubject$$.subscribe((data) => console.log('Sub 1: ', data));

// for (let i = 1; i <= 30; i++) {
//   rSubject$$.next(i);
// }
// console.log('---------');
// rSubject$$.subscribe((data) => console.log('Sub 2: ', data));

// for (let i = 31; i <= 40; i++) {
//   rSubject$$.next(i);
// }
// console.log('---------');
// rSubject$$.subscribe((data) => console.log('Sub 3: ', data));

//*Async subject
const asyncSub$$ = new AsyncSubject();
asyncSub$$.next(100);
asyncSub$$.next(200);
asyncSub$$.next(300);
asyncSub$$.subscribe((data) => console.log('Sub 1: ', data));
asyncSub$$.next(5);
asyncSub$$.subscribe((data) => console.log('Sub 2: ', data));

asyncSub$$.complete();