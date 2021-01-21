// Tuple
// タプルはそれぞれの要素の型を指定した固定長の配列
// 型は全て同じである必要はない
// 要素の順序も型の順序と一致している必要がある

// string型とnumber型のペアのタプル
let x: [string, number] = ['hello', 1];

// x = [1, 'hello']; // エラー。string, numberの順番でなくてはならない。

// 要素へのアクセス
console.log(x[0].substring(0, 4));

// タプルの範囲外へのアクセスはエラーとなる
// x[3] = 'world'; // エラー
// console.log(x[2]);  // エラー