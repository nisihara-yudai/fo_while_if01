// 繰り返し処理で、50から1までの処理を記述して下さい。
// for (let i = 50; i >= 1; i--){
//   document.write(i + "<br>");
// }

// 50回の試験のうち一回でも70点以上を取り、合格すれば、試験は受けなくても良くなる処理を書いて下さい。
let score = Math.floor(Math.random * 100) + 1;
let count = 0;
while (count > 0) {
  if (score >= 70) {
    console.log("合格");
    exit;
  } else {
    console.log(score);
    continue;
  }
}

// 1回でも60点を取れれば、処理が止まるプログラムを書いて下さい。
// let score = Math.floor(Math.random() + 100) + 1;




