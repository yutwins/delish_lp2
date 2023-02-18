"use strict";

// ドロワーの実装
const drawerIcon = document.querySelector('.drawer-icon');
const drawerContent = document.querySelector('.drawer-content');
const drawerItem = document.querySelectorAll('.drawer-content__item');


// drawerIconをクリックした際、drawerClickを実行
drawerIcon.onclick = drawerClick;

// drawerClick関数
function drawerClick() {
    drawerIcon.classList.toggle('clicked');
    drawerContent.classList.toggle('clicked');
    
    return false;
}

for(let i = 0; i < drawerItem.length; i++) {
    drawerItem[i].addEventListener('click', () => {
        drawerClick();
    });
}




// slider 部分の実装
$('.top-slider').slick({
    // autoplay: true,//自動的に動き出すか。初期値はfalse。
    // infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    // speed: 300,
    // autoplaySpeed: 3000,//スライドのスピード。初期値は300。
    // slidesToShow: 4,//スライドを画面に3枚見せる
    // slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    // centerMode: true,//要素を中央ぞろえにする
    // variableWidth: true,//幅の違う画像の高さを揃えて表示
    // arrows: false,
    // dots: false,//下部ドットナビゲーションの表示
    // pauseOnFocus: false,
    // pauseOnHover: false,
    // pauseOnDotsHover: false

    // 下記実験用
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    speed: 300,
    autoplaySpeed: 3000,
    slidesToShow: 4,//スライドを画面に4枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
    arrows: false,
    dots: false,//下部ドットナビゲーションの表示
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    // useTransform: false
});


//qaセクションの実装
const qaItem = document.querySelectorAll('.qa-item');
const qaQ = document.querySelectorAll('.qa-q');
const qaA = document.querySelectorAll('.qa-a');

for(let i = 0; i < qaQ.length; i++) {
    qaQ[i].addEventListener('click', function() {
        this.parentNode.classList.toggle('clicked');
        this.classList.toggle('clicked');
        this.nextElementSibling.classList.toggle('clicked');
    });
}

const head = document.getElementById('header');
const headerLink = document.querySelectorAll('.header__listItem');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    for(let i = 0; i < headerLink.length; i++) {
        if (scrollTop <= 100) {
            head.classList.remove('is-color');
            headerLink[i].classList.remove('test');
        } else {
            head.classList.add('is-color');
            headerLink[i].classList.add('test');
        }
    }
});


// タブに対してクリックイベントを適用
const tabs = document.querySelectorAll('.pagePlan-switch__tab');
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', tabSwitch, false);
}

// タブをクリックすると実行する関数
function tabSwitch(){
    // タブのclassの値を変更
    document.getElementsByClassName('is-active')[0].classList.remove('is-active');
    this.classList.add('is-active');

    // コンテンツのclassの値を変更
    document.getElementsByClassName('is-title')[0].classList.remove('is-title');
    document.getElementsByClassName('is-show')[0].classList.remove('is-show');
    document.getElementsByClassName('is-icon')[0].classList.remove('is-icon');
    
    const arrayTabs = Array.prototype.slice.call(tabs);
    const index = arrayTabs.indexOf(this);
    document.getElementsByClassName('pagePlan-switch__titleArea')[index].classList.add('is-title');
    document.getElementsByClassName('pagePlan-switch__wrap')[index].classList.add('is-show');
    document.getElementsByClassName('pagePlan-switch__tabIconArea')[index].classList.add('is-icon');
};