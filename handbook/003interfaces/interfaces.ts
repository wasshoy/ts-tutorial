// Interfaces
// duck typing や structual subtyping と呼ばれるもの役割を担うTSの機能
function printLabel(labeledObj: {label: string }) {
    console.log(labeledObj.label);
}

let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);  // TSの型チェックは少なくともlabelプロパティを持っているかどうかだけ確認する

// インターフェイスを使ってオブジェクトのプロパティを限定する
interface LabeldValue {  // string型のlabelというプロパティだけを持ったオブジェクト
    label: string;
}

function printLabel2(labeledObj: {label: LabeldValue }) {
    console.log(labeledObj.label);
}
// let myObj2 = { size: 10, label: 'Size 10 Object' };
// printLabel2(myObj);  // 形が同じではないので警告

// Optional Properties オプションプロパティ、持っていなくても通るプロパティ
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color:'white', area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color:'black'});
console.log(mySquare);

// 読み込み専用プロパティ
interface Point {
    readonly x: number;
    readonly y: number;
  }

let p1: Point = {x:10, y:20};
// p1.x = 5;  // 読み取り専用であるため代入できない

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;  // 全ての変更操作が削除されたArray

// ro[0] = 12; // 読み取りのみ許可されているため警告
// ro.push(5); // pushプロパティは存在しない
// ro.length = 100; // 読み取り専用プロパティなので代入できない
// a = ro;  // 読み取り専用配列なので変更可能な配列を代入できない

// プロパティはreadonly、変数はconst

// 過剰なプロパティチェック
// インターフェイスのプロパティ名と一致していないプロパティを持っていると必ず警告を出す
// let mySquare2 = createSquare({width:100, opacity: 0.5});  // opacity はSquareConfig型に存在しません
let mySquare3 = createSquare({width:100, opacity: 0.5} as SquareConfig);  // 型アサーションでインターフェイスにないプロパティは無視させる
console.log(mySquare3);
// 共通のプロパティがない場合、警告となる
let squareOptions = {colour: 'red'};
let mySquare5 = createSquare(squareOptions);

// より良いアプローチ： インターフェイスに文字列インデックスのシグネチャをもたせる
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string] : any;
}
let mySquare4 = createSquare({width:100, opacity: 0.5, isOk: true});  // opacityとisOkはインターフェイスのに無いプロパティだがpropNameに吸収(?)される
console.log(mySquare4);

// Function types 関数型
interface SearchFunc {
    // 引数とその型と返り値の型
    (souce: string, subString: string): boolean;
}

let mySearch: SearchFunc;

// 引数名は一致する必要はない
mySearch = function(src: string, sub: string) {
    let result = src.search(sub);
    // return result;  // 返り値がインターフェイスと異なるので警告
    return result > -1;
};

// indexable type インデックス可能な型
// インデックスの型指定

interface StringArray2 {
    // 数値でインデックス付けされた場合、文字列を返すインターフェイス
    [index: number]: string;
}
let myArray: StringArray2;
myArray = ['Bob', 'Fred'];
let myStr: string = myArray[0];
let wrongArray: StringArray;
// wrongArray = [1, 3, 5];  // 警告

// インデックスシグネチャは文字列型と数値型の2種類
interface Animal {
    name: string;
}
interface Dog extends Animal {
    breed: string;
}

interface NotOkay {
    // [x: number]: Animal;  // 警告
    [x: string]: Dog;
}

// インデックスシグネチャがunion型であれば異なる型も許容される
interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number; // ok, length is a number
    name: string; // ok, name is a string
}

// 
interface ReadonlyStringArray {
    readonly [index: number]: string;
}

let myArray2: ReadonlyStringArray = ["Alice", "Bob"];
// myArray2[2] = "Mallory"; // error!

// クラス型
// interface ClockInterface {
//     currentTime: Date;
// }

// // implements 構文で日付型を持つクラスをインターフェイスで保証
// class Clock implements ClockInterface {
//     currentTime: Date = new Date();
//     constructor(h: number, m: number) {}
// }

// クラスの静的側メンバ用の型とインスタンス側用の型の2つがある
// コンストラクタ用のインターフェイス: 引数はコンストラクタ、返り値の型はインスタンス用のインターフェイス
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
// メソッドなどインスタンス用のインターフェイス
interface ClockInterface {
    tick(): void;
}

function createClock(
    ctor: ClockConstructor,
    hour: number,
    minute: number
    ): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
        console.log("beep beep");
    }
    popo() {  // tickメソッドが実装されていれば、その他のメソッドは存在していても問題ない
        console.log('po-pou');
    }
}

class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
digital.tick();
analog.tick();

// もう１つの実装方法
const Clock: ClockConstructor = class Clock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
        console.log("beep beep");
    }
};

// インターフェイスの拡張
// インターフェイスもクラスのように拡張可能
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {  // SquareインターフェイスはメンバにcolorとsideLengthとpenWidthをもつ
    sideLength: number;
}


let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

// ハイブリッドタイプ
// 関数とオブジェクトの両方として動作するようなオブジェクト
interface Counter {
    (start: number): string;  // number型を引数にとってstring型を返す関数プロパティ
    interval: number;
    reset(): void;  // 引数と返り値の無い、resetという名前の関数プロパティ
}

function getCounter(): Counter {  // ハイブリッドタイプのオブジェクトCounterを返す関数
    let counter = function (start: number) {} as Counter;
    counter.interval = 123;
    counter.reset = function () {};
    return counter;
}

let myCounter = getCounter();  // myCounter に counter 
myCounter(10);
myCounter.reset();
myCounter.interval = 5.0;

// クラスを拡張するインターフェイス（理解小）
// クラスがインターフェイスを継承すると、メンバは継承されるが実装そのものは継承しない
// 基底クラスのprivateなメンバも継承される
class Control {
    private state: any;
}

interface SelectableControl extends Control {  // selectメソッドとstateプロパティを持つ
    select(): void;
}

class Button extends Control implements SelectableControl {  // Controlのサブタイプ
    select() {}
}

class TextBox extends Control {  // Controlのサブタイプ
    select() {}
}

// ImageControl自身のプライベートなメンバを持つため、SelectableControlをimplementsできない(?)
// class ImageControl implements SelectableControl {
    // private state: any;
    // select(){}
// }
