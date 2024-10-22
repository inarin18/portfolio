import SignateCompetitionJa from '../articles/Ja/SignateCompetition';
import SignateCompetitionEn from '../articles/En/SignateCompetition';
import EnglishConversationAppJa from '../articles/Ja/EnglishConversationApp';
import EnglishConversationAppEn from '../articles/En/EnglishConversationApp';
import ElasticDeformationJa from '../articles/Ja/ElasticDeformation';
import ElasticDeformationEn from '../articles/En/ElasticDeformation';
import RPACallJa from '../articles/Ja/RPACall';
import RPACallEn from '../articles/En/RPACall';

const projects = [
    {
        title: "Signate Competition - Silver Medal",
        titleJa: "Signate コンペティション - 銀メダル",
        description: "Developed a predictive model for banking app review scores using quantitative and qualitative data from user reviews and 'like' counts. Implemented an LLM to handle natural language variables. Then I got a silver medal in the Sigante competition.",
        descriptionJa: "ユーザーレビューと「いいね」数から定量的・定性的データを活用し、銀行アプリのレビュースコアを予測するモデルを開発。自然言語を処理するために事前学習済みのLLM（大規模言語モデル）を再調整し、Signateコンペティションで銀メダルを獲得。",
        date: "2024/08-09",
        image: "/images/signate.jpg",
        link: "#",
        technologies: ["Python", "PyTorch", "Transformers", "Scikit-learn", "Pandas", "Numpy", "LLM"],
        article: SignateCompetitionEn,
        articleJa: SignateCompetitionJa
    },
    {
        title: "English Conversation Web Application with OpenAI API",
        titleJa: "LLM を用いた英会話ウェブアプリケーション",
        description: "Developed a web application that enables users to interact with an AI powered by GPT models in English. The app provides a user-friendly interface for natural language conversations with advanced language models.",
        descriptionJa: "OpenAI API を活用し、AIと英語で対話できるウェブアプリケーションを開発。高度な言語モデルとの自然言語会話のためのユーザーフレンドリーなインターフェースを提供。テキストベースと音声ベースの両方で会話が可能。",
        date: "2024/02",
        link: "#",
        technologies: ["Python", "Streamlit", "OpenAI API", "Whisper", "GPT", "tts"],
        article: EnglishConversationAppEn,
        articleJa: EnglishConversationAppJa
    },
    {
        title: "Implemented Elastic Deformation from Scratch",
        titleJa: "Elastic Deformation をスクラッチから実装",
        description: "Developed a custom implementation of Elastic Deformation, an advanced data augmentation technique. This algorithm distorts images while preserving their overall structure, generating new training samples. The method enhances model robustness and generalization in image recognition tasks.",
        descriptionJa: "やや高度なデータ拡張技術である Elastic Deformation（弾性変形）を実装。このアルゴリズムは画像の全体構造を保持しながら歪ませ、新しい画像を生成する。この手法により、機械学習におけるトレーニングデータの拡張が可能となる。",
        date: "2023/07",
        link: "#",
        technologies: ["Python", "NumPy", "Pillow", "Image Processing"],
        article: ElasticDeformationEn,
        articleJa: ElasticDeformationJa
    },
    {
        title: "Develpoed the Automated Login at Scheduled Time",
        titleJa: "定刻自動ログインの開発",
        description: "",
        descriptionJa: "",
        date: "2022/12",
        link: "#",
        technologies: ["Python", "Selenium"],
        article: RPACallEn,
        articleJa: RPACallJa
    },
    {
        title: "k-means Clustering Implementation from Scratch",
        titleJa: "k-means クラスタリングをスクラッチから実装",
        description: "",
        descriptionJa: "",
        date: "2022/12",
        link: "#",
        technologies: ["Python", "Numpy", "Matplotlib"],
        article: RPACallEn,
        articleJa: RPACallJa
    },
    {
        title: "Slot Machine on CUI",
        titleJa: "CUI 上で動くスロットマシーン",
        description: "",
        descriptionJa: "",
        date: "2022/12",
        link: "#",
        technologies: ["Assembly", "C"],
        article: RPACallEn,
        articleJa: RPACallJa
    },
    {
        title: "LINE Chat Bot to Send Scraping Results",
        titleJa: "スクレイピング結果を送信する LINE Chat Bot",
        description: "",
        descriptionJa: "",
        date: "2022/04",
        link: "#",
        technologies: ["Python", "Selenium", "LINE API"],
        article: RPACallEn,
        articleJa: RPACallJa
    },
    {
        title: "Automation of the tool for English learning",
        titleJa: "学内英語学習ツールの自動化",
        description: "",
        descriptionJa: "",
        date: "2021",
        link: "#",
        technologies: ["Python", "Selenium"],
        article: RPACallEn,
        articleJa: RPACallJa
    },
];

export default projects;