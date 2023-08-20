(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js16').attr('src', (dpi>1) ? ((dpi>2) ? 'images/logo4-1257-1.png' : 'images/logo4-838-1.png') : 'images/logo4-419-1.png');
$('.js17').attr('src', (dpi>1) ? ((dpi>2) ? 'images/navigation-butterfly_1-84-1.png' : 'images/navigation-butterfly_1-56-1.png') : 'images/navigation-butterfly_1-28-1.png');}else if($(window).width()>=960){$('.js16').attr('src', (dpi>1) ? ((dpi>2) ? 'images/logo4-1008-2.png' : 'images/logo4-672-2.png') : 'images/logo4-336-2.png');
$('.js17').attr('src', (dpi>1) ? ((dpi>2) ? 'images/navigation-butterfly_1-66-1.png' : 'images/navigation-butterfly_1-44-1.png') : 'images/navigation-butterfly_1-22-1.png');}else if($(window).width()>=768){$('.js16').attr('src', (dpi>1) ? ((dpi>2) ? 'images/logo4-756-2.png' : 'images/logo4-504-2.png') : 'images/logo4-252-2.png');
$('.js17').attr('src', (dpi>1) ? ((dpi>2) ? 'images/navigation-butterfly_1-66-1.png' : 'images/navigation-butterfly_1-44-1.png') : 'images/navigation-butterfly_1-22-1.png');}else if($(window).width()>=480){$('.js16').attr('src', (dpi>1) ? ((dpi>2) ? 'images/logo4-489-1.png' : 'images/logo4-326-1.png') : 'images/logo4-163-1.png');
$('.js17').attr('src', (dpi>1) ? ((dpi>2) ? 'images/navigation-butterfly_1-51-2.png' : 'images/navigation-butterfly_1-34-2.png') : 'images/navigation-butterfly_1-17-2.png');}else{$('.js16').attr('src', (dpi>1) ? ((dpi>2) ? 'images/logo4-516-1.png' : 'images/logo4-344-1.png') : 'images/logo4-172-1.png');
$('.js17').attr('src', (dpi>1) ? ((dpi>2) ? 'images/navigation-butterfly_1-48-2.png' : 'images/navigation-butterfly_1-32-2.png') : 'images/navigation-butterfly_1-16-2.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#m1')[0]);
initMenu($('#m2')[0]);
var cs=new ConsentBanner('/datenschutzerklarung.html');cs.start(1);
});