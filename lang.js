/* Sprachwahl, läuft synchron im <head> vor dem ersten Rendern:
   1) ?lang=de|en|ru (manuelle Wahl über den Sprachschalter)
   2) sonst Systemsprache des Geräts, falls de oder ru
   3) sonst (nicht erkannt oder keine Übersetzung vorhanden): en */
(function(){
var d=document.documentElement,L=['de','en','ru'],p=null,l,n;
try{p=new URLSearchParams(location.search).get('lang');}catch(e){}
if(L.indexOf(p)>=0){l=p;}
else{
 n=String((navigator.languages&&navigator.languages[0])||navigator.language||'').toLowerCase().slice(0,2);
 l=L.indexOf(n)>=0?n:'en';
}
d.setAttribute('data-lang',l);d.setAttribute('lang',l);
})();
