import { APP_NAME, hello, Figure } from './myutil';

console.log(APP_NAME);
hello();
console.log(Figure.getTriangle(10, 5));

const promise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    reject();
  },3000);
});

promise
  .then(()=>{
    console.log('処理が完了しました！');
  })
  .then(()=>{
    console.log('次に行きます！');
  })
  .catch(()=>{
    console.log('失敗しました…！');
  });

  console.log($("h1").text());