// https://www.typescriptlang.org/docs/handbook/basic-types.html
// 基本型

// ブーリアン boolean
let isDone: boolean = false;

// 数 number, bigint
// 浮動小数点数や16進数は numberで、BigIntegerbだけ bigint
let decimal: number = 6;
let hex: number = 0xf00d;
let float: number = .2;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

// 文字列 string
let color: string = 'blue';
// テンプレート文字列を使って文字列に変数の値を埋め込める

// 配列 array
// 配列型の書き方は2通りある
let arrayElemment: number[] = [1, 2, 3];
let arrayGeneric: Array<number> = [1, 2, 3];

// タプル tuple
// 型が既知で要素数が固定の配列
let x: [string, number];
x = ['hello', 2];
// x = [2, 'hello'];  // 順序が違うので警告

// Enum 列挙型
// 複数の値のどれかを取りうるような変数
// 数値に分かりやすい名前を付ける
enum Color {
    Red,
    Green,
    Blue,
}
let c:Color = Color.Green;  // 1

// 列挙型はメデフォルトで 0から順番にメンバーに値を入れていく
// 書き換えも可能
enum Color2 {
    Red = 1,  // 1からスタート
    Green,
    Blue
}
let c2: Color2 = Color2.Green;  // 2

// 数値が列挙型の何に対応していたか逆引きすることもできる
let colorName: string = Color2[2];
console.log(colorName);

// unknown
// 書いている時点で型が分からない変数に対して「すべてを取りうる」型として書く
let notSure: unknown = 4;
notSure = 'maybe a string insted';
notSure = false;

// unknown型を使った場合、typeofなどで変数の型を確かめた上で、具体的な型に絞り込める
//declare はこの時点では初期化しない変数を宣言する場合の構文
declare const maybe: unknown;
// const aNumber: number = maybe;  // unknown 型を number 型に割り当てることは出来ない
if (maybe === true) {
    const aBoolean: boolean = maybe;  // TypeScriptは上の if構文で maybeがbooleanであることを知っているので、この代入は可能
    // const aString: string = maybe;  // boolean型をstring型に割り当てることは出来ない
}

// any
// 型チェックをオプトアウトしたい場合に使える
declare function getValue(key:string): any;
// 返り値の型をチェックしないようになる
const str: string = getValue('myString');

// void
// 型を持たない
// 返り値を持たない関数でよく見る
function warnUser(): void {
    console.log('This is my warnign message.');
}


// null と undefined
// null と undefined はそれぞれそのままの名前の型を持つ
let u: undefined = undefined;
let n: null = null;

// never
// 発生することのない型
// 例えば、常に例外を投げる関数や常に返り値が存在しない関数の返り値の型として付く

// 関数のエンドポイントに到達しない関数
function error(message: string): never {
    throw new Error(message);
}

// 返り値の型がnever と推察される関数
function fail() {
    return error('something failed');
}

// エンドポイントに到達しない関数
function infiniteLoop(): never {
    while (true) {}
}

// object
// 基本型でない型
declare function create(o: object | null): void;  // 引数に object か null を取る関数
create({ prop: 0 });  // objectを渡す
create(null);  // null を渡す

// create(42);  // 42の型は引数に割り当てられない
// create('string');  // 'string'の型は引数に割り当てられない

// 型アサーション Type Assertions
// 書く側が型が分かっているとき、明示的に特定の型として扱うようにする構文
// 方法1. as 構文
let someValue: unknown = 'this is a string';
let strLength: number = (someValue as string).length;  // 括弧の中で someValueはもはや string型なのでlengthプロパティを呼び出せる
// 方法2. アングルブラケット（角括弧）構文
let someValue2: unknown = 'this is a string';
let strLength2: number = (<string>someValue2).length;
// JSX では as構文のみ使用可能

// 大文字スタートの型: Number, String, Boolean, Symbol, Object
// 基本型を表すものではないので、原則使用しない

function reverseCap(s: String): String {
    return s.split("").reverse().join("");
}
reverse("hello world");

function reverse(s: string): string {
    return s.split("").reverse().join("");
}
reverse("hello world");


// next
// https://www.typescriptlang.org/docs/handbook/interfaces.html