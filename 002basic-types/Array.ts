// Array
// JSと同様に配列が使える
// 2種類の記法がある

// 要素の型名の後ろに[]: 型名[]
let list1: number[] = [1, 2, 3];

// ジェネリックな配列型: Array<型名>
let list2: Array<string> = ['un', 'deux', 'trois'];

console.log(list1);
console.log(list2);