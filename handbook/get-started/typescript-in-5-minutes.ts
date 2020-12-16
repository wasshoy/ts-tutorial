// 公式サイトの Getting Started
// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

// TypeScript の概観を型システムにフォーカスして紹介

// 以下の場合は変数 HelloWorld の型(=string)は自動的に推論される
let helloWorld = 'Hello World';

// interface 宣言 を使うことで明示的にオブジェクトの形を定義できる
interface User {
    name:string,
    id: number;
}

// 変数宣言の前にインターフェイスを型名をとして宣言する
const user: User = {
    name: 'Hayes',
    id:0,
};

// 誤った属性を宣言すると警告が出る
// const wrongUser: User = {
//     username: 'Hayes',
//     id:0,
// };

// classとともにインターフェイスを宣言できる
class UserAccount {
    name: string;
    id: number;

    constructor(name:string, id:number) {
        this.name = name;
        this.id = id;
    }
}
const user1: User = new UserAccount('Murphy', 1);

// 関数の引数と返り値に注釈をつける
function f1(): string {return 'hey!'};
function f2(n:number): void {};

// プリミティブ型以外の型を拡張することもできる2つの方法
// Unions: いくつかの決められた値の1つを取るような型の宣言
// 使用例
type WindowStates = 'open' | 'close' | 'minimized';
type LockStates = 'locked' | 'unlocked';
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
// いくつかの型を書くことも可能
function getLength(obj: string | string[]) {return obj.length;}
// 使用例
function wrapInArray(obj: string | string[]): string[] {
    if (typeof obj === 'string') return [obj];
    else return obj;
}

// Generics: 変数に型を与える
// 一般的に配列に使われる
// 配列の中身の型を指定する
type StringArray = Array<string>;
type NumberArray = Array<Number>;
type ObjectWithNameArray = Array<{ name: string }>;

// インターフェイスと組み合わせて独自の型を作成
interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

declare const backpack: Backpack<string>;  // backpackはBackpack型の定数だという宣言
const obj = backpack.get();
// backpack.add(23);  // 引数 obj は string だと宣言されているので警告

// 構造的型システム Structual Type System
// 値の形に着目した型チェックのシステムのこと
// duck typing や strucual typing と言われるもの
interface Point {
    x: number;
    y: number;
}

function printPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

const point = {x: 12, y: 26};
// point は Point型として宣言されていないが、それぞれの形を比較して同じ形なのでコードが通る
printPoint(point);

// 形の一致はオブジェクトの属性の一部がマッチしていれば通る
const point3 = { x:12, y:26, z:89 };
printPoint(point3);
const rect = { x: 33, y: 3, width: 30, height: 80 };
printPoint(rect);
// const point4 = { z:1, w:2 };
// printPoint(point4);  // オブジェクトのプロパティ名が異なるのでバツ
// const color = {hex:"#fefefe"};
// printPoint(color);  // 同じくバツ

// クラスもオブジェクトも形の比較方法は変わらない
class VirtualPoint {
    x:number;
    y:number;
    constructor(x: number, y:number) {
        this.x = x;
        this.y = y;
    }
}

const newPoint = new VirtualPoint(13, 56);
printPoint(newPoint);

// 構造的型システムは持っている属性さえ合っていれば実装方法は問わない

// next steps
// https://www.typescriptlang.org/docs/handbook/intro.html