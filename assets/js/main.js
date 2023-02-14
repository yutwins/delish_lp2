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

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop <= 100) {
        head.classList.remove('is-color');
    } else {
        head.classList.add('is-color');
    }
});
