import "./styles.css";

// 追加ボタンをクリックされた時の処理を書く
const onClickAdd = () => {
  // inputText変数に テキストボックスの値を代入
  const inputText = document.getElementById("add-text").value;
  alert(inputText); // まず機能の前にクラスが正しく実行されるかを確認する。
};

// html で id=add-button のボタンの処理を実装
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
