// Enum
// JSの標準的なデータ型にはない型
enum Color {
    Red,
    Green,
    Blue,
} // enumは宣言したメンバーの値のみ取り得るデータ型を作成することが出来る
let c: Color = Color.Green;
console.log(c);  // 1

// 自動的にメンバーが 0 から順番に初期化される
// 開始位置を変えたり、値を指定することも出来る
enum MyColor {
    Red = 1,
    Green,
    Blue,
}

let myColor: MyColor = MyColor.Green;
console.log(myColor);  // 2

// 全てのenum内の値を指定する
enum YourColor {
    Red = 1,
    Green = 2,
    Blue = 4,
}

let yourColor: YourColor = YourColor.Blue;
console.log(yourColor); // 4

// 値でアクセスすることもできる
// 値 2 がenumのどのメンバー名と対応しているのかを調べられる
let colorName: string = YourColor[2];

console.log(colorName);  // 値 2 を持っているのは Green