// 繰り返し処理で、50から1までの処理を記述して下さい。
// for (let i = 50; i >= 1; i--){
//   document.write(i + "<br>");
// }

// 50回の試験のうち一回でも70点以上を取り、合格すれば、試験は受けなくても良くなる処理を書いて下さい。
let count = 0; //テストの回数を記述する
while (count < 50) { //テストの回数が50回の間の処理
  count += 1; // テストの回数をカウントする
  let score = Math.floor(Math.random() * 100) + 1; //scoreという変数は1から100までの乱数を表す
  console.log(score);
  if (score >= 70) { //もし70点以上だったら、「合格」と表示して処理を終了する
    console.log("合格");
    break;
  } else { //70点より低い場合は、点数を表示して、処理を続ける
    console.log(score);
    continue;
  }
}

// 1回でも60点を取れれば、処理が止まるプログラムを書いて下さい。
// let score = Math.floor(Math.random() + 100) + 1;




