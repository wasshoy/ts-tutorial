// Interfaces
// duck typing や structual subtyping と呼ばれるもの役割を担うTSの機能
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj); // TSの型チェックは少なくともlabelプロパティを持っているかどうかだけ確認する
function printLabel2(labeledObj) {
    console.log(labeledObj.label);
}
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black' });
console.log(mySquare);
var p1 = { x: 10, y: 20 };
// p1.x = 5;  // 読み取り専用であるため代入できない
var a = [1, 2, 3, 4];
var ro = a; // 全ての変更操作が削除されたArray
// ro[0] = 12; // 読み取りのみ許可されているため警告
// ro.push(5); // pushプロパティは存在しない
// ro.length = 100; // 読み取り専用プロパティなので代入できない
// a = ro;  // 読み取り専用配列なので変更可能な配列を代入できない
// プロパティはreadonly、変数はconst
// 過剰なプロパティチェック
// インターフェイスのプロパティ名と一致していないプロパティを持っていると必ず警告を出す
// let mySquare2 = createSquare({width:100, opacity: 0.5});  // opacity はSquareConfig型に存在しません
var mySquare3 = createSquare({ width: 100, opacity: 0.5 }); // 型アサーションでインターフェイスにないプロパティは無視させる
console.log(mySquare3);
// 共通のプロパティがない場合、警告となる
var squareOptions = { colour: 'red' };
var mySquare5 = createSquare(squareOptions);
var mySquare4 = createSquare({ width: 100, opacity: 0.5 });
console.log(mySquare4);
var mySearch;
// 引数名は一致する必要はない
mySearch = function (src, sub) {
    var result = src.search(sub);
    // return result;  // 返り値がインターフェイスと異なるので警告
    return result > -1;
};
var myArray;
myArray = ['Bob', 'Fred'];
var myStr = myArray[0];
var wrongArray;
var myArray2 = ["Alice", "Bob"];
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
digital.tick();
analog.tick();
