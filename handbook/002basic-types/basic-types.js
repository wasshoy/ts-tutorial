"use strict";
// https://www.typescriptlang.org/docs/handbook/basic-types.html
// 基本型
// ブーリアン
let isDone = false;
// 数
// 浮動小数点数や16進数は numberで、BigIntegerbだけ bigint
let decimal = 6;
let hex = 0xf00d;
let float = .2;
let binary = 0b1010;
let octal = 0o744;
let big = 100n;
// 文字列
let color = 'blue';
// テンプレート文字列を使って文字列に変数の値を埋め込める
// 配列
// 配列型の書き方は2通りある
let arrayElemment = [1, 2, 3];
let arrayGeneric = [1, 2, 3];
// タプル
// 型が既知で要素数が固定の配列
let x;
x = ['hello', 2];
// x = [2, 'hello'];  // 順序が違うので警告
// Enum 列挙型
// 複数の値のどれかを取りうるような変数
// 数値に分かりやすい名前を付ける
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green; // 1
// 列挙型はメデフォルトで 0から順番にメンバーに値を入れていく
// 書き換えも可能
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
let c2 = Color2.Green; // 2
// 数値が列挙型の何に対応していたか逆引きすることもできる
let colorName = Color2[2];
console.log(colorName);
// Unknown
// 書いている時点で型が分からない変数に対して「すべてを取りうる」型として書く
let notSure = 4;
notSure = 'maybe a string insted';
notSure = false;
// const aNumber: number = maybe;  // unknown 型を number 型に割り当てることは出来ない
if (maybe === true) {
    console.log(typeof maybe);
    const aBoolean = maybe; // TypeScriptは上の if構文で maybeがbooleanであることを知っているので、この代入は可能
}
