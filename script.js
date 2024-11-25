const webHTML = () => {
    document.body.insertAdjacentHTML("beforeend", `<header>
        <h1>ようこそ！たいきのホームへ</h1>
        <p>このサイトでは主に以前に作ったツールや改造・ハッキングについてまとめているサイトです。</p>
        <hr>
    </header>
    <br>
    <br>
    <div class="list">
    <div class="classroom-card">
        <div class="card-header">
            <a href="https://taikicl.github.io/paypay/" target="_blank">
            <h2 class="class-title">PayPayリンク作成ツール</h2>
            </a>
            <p class="teacher-name">Taiki Webs</p>
        </div>
        <div class="card-footer">
            <p>Page 1</p>
        </div>
    </div>
    <div class="classroom-card">
        <div class="card-header">
            <a href="https://taikicl.github.io/web/i-FILTER/?url=https://example.com&reason=501&username=0123456789@gmail.com" target="_blank">
            <h2 class="class-title">i-FILTER偽造サイト</h2>
            </a>
            <p class="teacher-name">Taiki Webs</p>
        </div>
        <div class="card-footer">
            <p>Pages 2</p>
        </div>
    </div>
    <div class="classroom-card">
        <div class="card-header">
            <a href="about:blank" target="_blank">
            <h2 class="class-title">未設定</h2>
            </a>
            <p class="teacher-name">Taiki Webs</p>
        </div>
        <div class="card-footer">
            <p>Pages 2</p>
        </div>
    </div>`);
};

const errorHTML = () => {
    document.body.insertAdjacentHTML("beforeend", `<h1 style="color: red;">接続エラー(100)</h1><br><p>reason:</p><br><p>要求されたリクエストに応答しなかったため。</p>`);
};
// パスワードの入力を要求
const enterPass = () => {
    const password = prompt("情報漏洩厳禁のため管理人から付与されたパスワードを入力してください:");
    if (password) {
        if (password === 'taikiweb2024') {
            webHTML();
        } else {
            alert('パスワードが間違っています。');
            errorHTML();
        }
    } else {
        alert('パスワードが入力されませんでした。');
        errorHTML();
    }
};
window.onload = function() {
    enterPass();
};