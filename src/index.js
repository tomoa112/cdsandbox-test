import "./styles.css";

// 追加ボタンをクリックされた時の処理を書く
const onClickAdd = () => {
  // inputText変数に テキストボックスの値を代入
  const inputText = document.getElementById("add-text").value;
  // 変数に入ったので、 テキストボックスの値を初期化する（消す）
  document.getElementById("add-text").value = "";
  // alert(inputText); // 値をとれているかボタンを押してアラートを確認

  // div生成
  const div = document.createElement("div");
  div.className = "list-row"; // divタグにクラス名を追加する   <div class="list-row"></div>
  // console.log(div); // dev 変数に   <div></div> が入る。

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText; // テキストボックスの値を代入
  // console.log(p);

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  // console.log(completeButton);
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ（div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了のリスト li に追加する要素
    const addTarget = completeButton.parentNode; // 親要素(div class="list-row")を取得
    // TODO内容を取得
    const text = addTarget.firstElementChild.innerText; // 最初の要素の文字列値（TODOですなど）を取得する

    // div 以下を初期化(削除)
    addTarget.textContent = null;
    // console.log(addTarget);

    // P タグを生成
    const p = document.createElement("p");
    p.innerText = text;
    console.log(p);

    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    console.log(backButton);

    // div タグの子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    console.log(addTarget);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  }); // リストの要素にイベントを追加

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  // console.log(deleteButton);
  deleteButton.addEventListener("click", () => {
    //   alert("削除");
    // 押された削除ボタンの親タグ（div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // div タグの子要素に各要素を設定
  // 子要素は順番通り作られる。
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // console.log(div);

  // 未完了のリスト li に追加
  document.getElementById("incomplete-list").appendChild(div);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target); // 指定された子要素を削除
  // console.log(target);
};

// html で id=add-button のボタンのクリックイベント時にonClickAdd関数を実行
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
