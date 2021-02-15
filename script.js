$(function () {
    init();
});

function init() {  
    tomb = [1,1,2,2,3,3,4,4,5,5,6,6];
    $('#kezd').on("click", betolt);
}

//globalis valtozok
var tomb = [];
var elso = true;
var elozo = 12;
var mostani = 12;
var alap = "kepek/kartya_alap.jpg";
var pontok = 0;
var akt = 0;

function betolt () {
    pontok = 0;
    $('#pont').empty();
    var txt = "Pont: " + pontok;
            $('#pont').text(txt);
    $('#jatekter').empty();
    
    kever();
    for (var i = 0; i < tomb.length; i++) {
        $('#jatekter').append("<div>");
        $('#jatekter div').eq(i).append("<img>");
        $('#jatekter div img').eq(i).attr("src", alap);
        $('#jatekter div img').eq(i).on("click", ellenoriz);
    }
}

function ellenoriz () {
    for (var i = 0; i < $('img').length; i++) {
        if (this === $('img')[i]) {
            akt = i;   
        }
    }
    
    if (elso) {
        elozo = akt;
    }
    else {
        mostani = akt;
    }
    
    fordit();
    
    if (elso) {
        elso = false;
    } else {
        if (tomb[elozo] === tomb[mostani]) {
            pontok++;
            $('#pont').empty();
            var txt = "Pont: " + pontok;
            $('#pont').text(txt);
            setTimeout(kartyaEltuntet, 1000);
        } else {
            setTimeout(visszafordit, 1000);
        }
        elso = true;
    }
}

function fordit() {
    $('#jatekter div img').eq(akt).attr("src", "kepek/kartya_"+tomb[akt]+".jpg");
    //$("img")[akt].src="kepek/kartya_"+tomb[akt]+".jpg";
    
//    $(".card-grid").flip({
//        trigger: "manual"
//    });
}

function kever() {
    tomb.sort(function(a, b){return 0.5-Math.random();}); 
    console.log(tomb);
}

function kartyaEltuntet() {
    $('#jatekter div img').eq(mostani).hide(1000);
    $('#jatekter div img').eq(elozo).hide(1000);
//    $('img')[mostani].src = '';
//    $('img')[elozo].src = '';
}

function visszafordit() {
    $('img')[mostani].src = alap;
    $('img')[elozo].src = alap;
}