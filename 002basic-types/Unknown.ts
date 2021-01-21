// Unknown
// 型が不明な変数に型をつけなければいけないときもある
// 動的な内容（ユーザーからの入力など）や意図的に全ての値を受け取りたい場合、
// コンパイラとコードを読む人に対して「この変数はあらゆる型をとりますよ」と伝えるための型
let notSure: unknown = 4;
console.log(notSure);
notSure = 'maybe a string instead';  // どの型を代入しても大丈夫
console.log(notSure);
notSure = true;
console.log(notSure);
notSure = 0x89;
console.log(notSure);

// unkownを使用した変数はtypeofや比較演算などでチェックすべき
declare const maybe: unknown;  // declareはambient型宣言といって、型定義だけを行う文

// const aNumber: number = maybe;  // unkown型を他のデータ型に代入することはできない

