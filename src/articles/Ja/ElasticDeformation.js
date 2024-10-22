import React from 'react';

const ElasticDeformation = () => (
    <article>
        <h3>主な成果</h3>
        <ul>
            <li>画像の全体構造を保持しながら歪ませるアルゴリズムをスクラッチから実装</li>
        </ul>
        <h3>技術詳細</h3>
        <p>
            Pythonを使用し、NumPyとPillowライブラリを活用して実装しました。
            アルゴリズムは以下のステップで構成されています：
        </p>
        <ol>
            <li>ランダムな変位フィールドの生成</li>
            <li>ガウシアンフィルタを用いた変位フィールドの平滑化</li>
            <li>双線形補間法を用いた画像のリサンプリング</li>
        </ol>
        <h3>結果と考察</h3>
        <p>
        </p>
    </article>
);

export default ElasticDeformation;