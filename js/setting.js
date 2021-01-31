//$("#top").backstretch([
//  "images/bg_top_01.jpg", /* 1枚目の画像までのパスを指定 */
//], {fade: 1000,duration: 3000}); /* fadeは画像切り替えのスピード、durationはスライドの間隔 1000 = 1秒*/

$(window).load(function() {
  $('.menu-trigger').on('click', function() {
    $(this).toggleClass('active');
  $('html').toggleClass('open');
  }); 
  $('#g_nav li a').on('click', function() {
    $('.menu-trigger').toggleClass('active');
  $('html').toggleClass('open');
  });
});

$(function() {
    var h = $(window).height();
    $('#loader-bg ,#loader').height(h).css('display','block');
});
$(window).on('load', function () {
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
});

$(function(){
$('.slider').bxSlider({
    auto: true, /* 自動スライドの設定 true / false */
    pause: 5000, /* 待ち時間 */
    speed: 1000, /* スライドのスピード */
    mode: 'fade', /* スライド方法を設定'horizontal'横方向のスライド、'vertical'縦方向のスライド、'fade'フェードでの切り替え　初期値:'horizontal' */
    pager: true, /* ●●●の表示　true / false */
    controls: true, /* 左右矢印の表示　true / false */
    });
});

$(function(){
    $("a img").hover(function(){
    $(this).fadeTo("normal", 0.6);
    },function(){
    $(this).fadeTo("normal", 1.0);
    });
});

$(function(){
    $('a[href^=#]').click(function(){
         var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});

var topBtn = $('#page-top');    
    topBtn.hide();
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
    topBtn.fadeIn();
    } else {
    topBtn.fadeOut();
    }
});
topBtn.click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});