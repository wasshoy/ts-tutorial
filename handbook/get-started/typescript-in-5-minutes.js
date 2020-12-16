"use strict";
// 公式サイトの Getting Started
// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
// TypeScript の概観を型システムにフォーカスして紹介
// 以下の場合は変数 HelloWorld の型(=string)は自動的に推論される
let helloWorld = 'Hello World';
// 変数宣言の前にインターフェイスを型名をとして宣言する
const user = {
    name: 'Hayes',
    id: 0,
};
// 誤った属性を宣言すると警告が出る
// const wrongUser: User = {
//     username: 'Hayes',
//     id:0,
// };
// classとともにインターフェイスを宣言できる
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user1 = new UserAccount('Murphy', 1);
// 関数の引数と返り値に注釈をつける
function f1() { return 'hey!'; }
;
function f2(n) { }
;
// いくつかの型を書くことも可能
function getLength(obj) { return obj.length; }
// 使用例
function wrapInArray(obj) {
    if (typeof obj === 'string')
        return [obj];
    else
        return obj;
}
const obj = backpack.get();
function printPoint(p) {
    console.log(`${p.x}, ${p.y}`);
}
const point = { x: 12, y: 26 };
// point は Point型として宣言されていないが、それぞれの形を比較して同じ形なのでコードが通る
printPoint(point);
// 形の一致はオブジェクトの属性の一部がマッチしていれば通る
const point3 = { x: 12, y: 26, z: 89 };
printPoint(point3);
const rect = { x: 33, y: 3, width: 30, height: 80 };
printPoint(rect);
// const point4 = { z:1, w:2 };
// printPoint(point4);  // オブジェクトのプロパティ名が異なるのでバツ
// const color = {hex:"#fefefe"};
// printPoint(color);  // 同じくバツ
// クラスもオブジェクトも形の比較方法は変わらない
class VirtualPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const newPoint = new VirtualPoint(13, 56);
printPoint(newPoint);
// 構造的型システムは持っている属性さえ合っていれば実装方法は問わない
// next steps
// https://www.typescriptlang.org/docs/handbook/intro.html
