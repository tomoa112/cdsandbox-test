import "./styles.css";

// 追加ボタンをクリックされた時の処理を書く
const onClickAdd = () => {
  // inputText変数に テキストボックスの値を代入
  const inputText = document.getElementById("add-text").value;
  // 変数に入ったので、 テキストボックスの値を初期化する（消す）
  document.getElementById("add-text").value = "";
  alert(inputText); // 値をとれているかボタンを押してアラートを確認

  // div生成
  const div = document.createElement("div");
  div.className = "list-row"; // divタグにクラス名を追加する   <div class="list-row"></div>
  console.log(div); // dev 変数に   <div></div> が入る。

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText; // テキストボックスの値を代入
  console.log(p);

  // div タグの子要素に各要素を設定
  div.appendChild(p);
  console.log(div);

  // 未完了のリスト li に追加
  document.getElementById("incomplete-list").appendChild(div);
};

// html で id=add-button のボタンのクリックイベント時にonClickAdd関数を実行
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
