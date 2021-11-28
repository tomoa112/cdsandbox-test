const myProfile = ["じゃけ", 28];
const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
console.log(message3); // 私の名前はじゃけです。年齢は28歳です。

//分割代入(配列）配列の値を変数として宣言・利用して
//         myProfile.name のように配列名を使わずに値を参照できるようになる。
const [name, age] = myProfile;
// 配列値の 0 が最初の変数（name）に入り、1 が次の変数（age)に入る
// かっこが[]に注意！ 変数の順番も大事になる。
const message4 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message4); // 私の名前はじゃけです。年齢は28歳です。
