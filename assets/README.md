＜Todo＞
・画像の修正（SP、料金プランnav部分）
・plan-option__itemのアイコン部分を揃える（iconAreaとかで囲って中の画像を中央に持ってくる感じが良さそう）
・ヘッダーの白背景時のみホバーアクションを付与する
・使用していない画像を削除しておく
・「テキストor吹き出し全体の画質が荒くなっている」というコメント部分の解消



【カスタムヘッダーに追加する箇所】
.pagePlan-switch__tab.is-active .pagePlan-switch__tabTextNormal {
  color: #3303F2;
  border-bottom: 3px solid #3303F2;
}
.pagePlan-switch__tab.is-active .pagePlan-switch__tabTextMedia {
  color: #6700EB;
  border-bottom: 3px solid #6700EB;
}

.pagePlan-switch__tabIconArea.is-icon .pagePlan-switch__tabIcon--active {
  display: block;
}
.pagePlan-switch__tabIconArea.is-icon .pagePlan-switch__tabIcon {
  display: none;
}

.pagePlan-switch__titleArea.is-title {
  display: block;
}

.pagePlan-switch__wrap::before {
  content: "";
  display: block;
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  z-index: -1;
}
.pagePlan-switch__wrap.normal::before {
  background-color: #3303F2;
}
.pagePlan-switch__wrap.media::before {
  background-color: #6700EB;
}

.pagePlan-switch__wrapImg {
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
}



＜Questions＞




＜Components＞
<h2 class="section__title feature__title">DELISH AGENTは<span class="section__title--orange">SNS担当者を月額定額制で</span>導入できるサービスです</h2>

<a href="#" class="cta__btn"><span class="cta__btn--text">お問い合わせはこちら</span></a>

＜Questions＞
・planセクションの「フィード10本」のところが、漢字もフォントファミリーがMontserratになっているが意図的か？

・コピーライトがSPの時だけ色が違うのは意図的か？


＜メモ＞
【カスタムコードで読み込んでいる部分まとめ】
◉全体
・scroll-behavior: smooth;

◉drawerメニュー

◉Topセクション
・Topセクションスライダー部分

◉Feature
・背景色の画像を疑似要素で入れている部分
・navのhoverアクション部分
・navのアイテム01のキラキラ背景部分を疑似要素で実装
・itemの番号の背景の丸部分
・itemのflex-direction: row-reverse;部分とnot(:first-child)部分
・itemのnot:firstchild部分の実装


◉Effect
・.effect-ex__smallTextのアイコン部分
・.effect-ex__list:nth-child(#{$i})部分
・.effect-ex__listDesc部分をEmbedで記入(span要素が入っているため)
・「中長期に効果を見ながら施策と改善をします」という真ん中のタイトル部分をEmbedで記入（span要素が入っているため）
・SP版のeffect-ex__img部分（transformの設定方法がわからないため）


◉Plan
・背景のオレンジ部分
・__priceArea部分のボーダー部分
・plan-item__priceText部分（span要素が含まれているため）
・plan-item__contentText部分（span要素が含まれているため）
・plan-graphUpper__listNote部分のtransformの実装


◉Flow
・サブタイトル部分（改行が含まれているため）


◉Footer
・背景画像部分を疑似要素で実装しているため


◉Contact
・チェックボックス部分
