//スライドインの要素選択（BBBが選ばれる理由）
const slideIn = document.querySelectorAll('.slide-item');
//フェードインの要素選択（受講生の声）
const fadeIn = document.querySelectorAll('.fade-in-item');

//スライドインとフェードインの要素にinviewを付与
const callback = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('inview')
        }
    });
}

//IntersectionObserverをインスタンス化
const io = new IntersectionObserver(callback);

//2つの要素を監視
slideIn.forEach(el => io.observe(el));
fadeIn.forEach(el => io.observe(el));


//ハンバーガーメニューとハンバーガーメニューメニュー内のボタンの要素を選択
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainContent = document.querySelectorAll('.section-jump');

//header-navの要素にopenを付与
const nav = document.querySelector('.head-nav');
const menuOpen = function(){
    nav.classList.toggle('open');
}

//2つの要素をクリックしたときにtoggleのイベント発火
hamburgerMenu.addEventListener('click', menuOpen);
mainContent.forEach(el => el.addEventListener('click', menuOpen));