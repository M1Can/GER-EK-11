// JS document
"use strict";

//* BAZI DEĞİŞKENLER başlangıç.
var zaman = new Date();

var başlıkpart = {
    partI: " Bazı",
    partII: " Matematiksel",
    partIII: " İşlemler",
};

let _dnmpartI = "Bu string(dize)'nin uzunluğu: ",
    _dnmpartII = _dnmpartI.length;

let artI = 188,
    metinI = "";

let filldeneme = [11, 22, 33, 44, 55, 66, 77, 88, 99];
//*BAZI DEĞİŞKENLER bitiş.


//*BAŞLANGIÇ BÖLGESİ BAŞLANGICI.
function işlemisayıbilgi() {
    var HanI, HanII, HanIII, HanIIII, HanIIIII, vvvv;
    HanI = document.getElementById("c").value;

    HanIII = HanI;
    HanIIII = Math.pow(HanI, 2);
    HanIIIII = Math.sqrt(HanI);

    HanII =
        "Girilen Sayı: " +
        HanIII +
        "<br>" +
        "Karesi: " +
        HanIIII +
        "<br>" +
        "Karekökü: " +
        HanIIIII;

    document.getElementById("MetinIII").innerHTML = HanII;
}

function DİAhover() {
    var almugI, almugII, _sayI, _sayII, sayı;
    sayı = 11;
    almugI = sayı + 9 - 13;
    almugII = Math.pow(sayı, 2);
    _sayI = sayı * -1;

    document.getElementById("sayısal").innerHTML =
        Number.MAX_VALUE +
        "<br>" +
        Number.MIN_VALUE +
        "<br>" +
        Number.NEGATIVE_INFINITY +
        "<br>" +
        Number.POSITIVE_INFINITY +
        "<br>" +
        Number.NaN +
        "<br>" +
        Math.PI +
        "<br>" +
        Math.pow(sayı, sayı) +
        "<br>" + //kuvvet alma
        Math.sqrt(almugII) +
        "<br>" + //karesini bulma
        Math.abs(_sayI) +
        "<br>" + //mutlak değer
        Math.random() +
        "<br>"; //rastgele 0-1 arası sayı çevirir
}

function DİAhoverund() {
    document.querySelector("#sayısal").innerHTML = "BAZI SAYISAL ŞEYLER(tıkla)";
}

$tür();

function $tür() {
    document.getElementById("varios").innerHTML = _dnmpartI + _dnmpartII;
}

document.getElementById("başlıkımsıI").innerHTML =
    "Javascript ile " +
    başlıkpart.partI +
    başlıkpart.partII +
    başlıkpart.partIII +
    "<br>";
//*BAŞLANGIÇ BÖLGESİ BİTİŞİ.


//?RASTGELE FONKSİYONU.
function randomnum(min, max) {
    return Math.floor(Math.random() * max) + min;
}
//?RASTGELE FONKSİYONU.


//?SAYAÇ BAŞLANGIÇ.
setInterval(() => {
    const başlama = '13 jan 2021';
    const başlangıçtarihi = new Date(başlama);
    const şimdikizaman = new Date();
    const toplamzaman = (şimdikizaman - başlangıçtarihi) / 1000;
    const günler = Math.floor(toplamzaman / 3600 / 24);
    const saatler = Math.floor(toplamzaman / 3600) % 24;
    const dakikalar = Math.floor(toplamzaman / 60) % 60;
    const saniyeler = Math.floor(toplamzaman) % 60;

    // $("#m").wrap("<em></em>");
    // document.getElementsByName("DİAtarihsellik")[0].innerHTML = 'javascript öğrenmeye başlayalı : ' + günler + ' Gün ' +
    //     saatler + ' Saat ' + dakikalar + ' Dakika ' + saniyeler + ' Saniye ' + 'oldu';
    // document.getElementsByName("DİAtarihsellik")[0].classList.add("DİAcan");

    $("#m").text("21/04/13 tarihin de javascripte başlıyalı 100gün oldu");

}, 1000);
//?SAYAÇ BİTİŞ.


//?BUGÜN GÜNLERDEN UYARISI BÖLGESİ BAŞLANGIÇ.
var tarihI, tarihIII;
tarihIII = "Bugün Günlerden: ";

switch (new Date().getDay()) {
    case 0:
        tarihI = "PAZAR";
        break;
    case 1:
        tarihI = "PAZARTESİ";
        break;
    case 2:
        tarihI = "SALI";
        break;
    case 3:
        tarihI = "ÇARŞAMBA";
        break;
    case 4:
        tarihI = "PERŞEMBE";
        break;
    case 5:
        tarihI = "CUMA";
        break;
    case 6:
        tarihI = "CUMARTESİ";
        break;
    default:
        tarihI = "BİLİNMİYOR";
}
// alert(tarihIII + tarihI);
//?BUGÜN GÜNLERDEN UYARISI BÖLGESİ BİTİŞ.


//?ORTALAMA SONUCU BÖLGESİ BAŞLANGIÇ.
function sonuçiçin() {
    var cevapnot, mesaj;
    cevapnot = document.getElementById("cevap").value;
    if (cevapnot > 0 && cevapnot < 40) {
        mesaj = "Maalesef bu zeka ile hayatta\n kalmanız mümkün görülmüyo.";
    } else if (cevapnot >= 40 && cevapnot < 60) {
        mesaj = "Ortalama sayılırsınız geçtiniz ancak zar zor.";
    } else if (cevapnot >= 60 && cevapnot < 75) {
        mesaj = "iyi not sayılır gibi ama değil ancak geçtiniz.";
    } else if (cevapnot >= 75 && cevapnot < 85) {
        mesaj = "teşekkür belgesini hakkettiniz ancak en iysi değil geçtiniz";
    } else if (cevapnot >= 85 && cevapnot <= 99) {
        mesaj =
            "takdir belgesi almayı hakkettiniz en iyisi değilsiniz ancak olmanızıda gerek yok geçtiniz.";
    } else if (cevapnot == 100) {
        mesaj = "en iyisisiniz tebrikler geçmenin ötesine geçtiniz";
    } else {
        if (cevapnot < 0) {
            mesaj = "Hadi ordan bu notu nasıl aldın";
        } else {
            mesaj = "Kesin bu notu almışındır kaldın";
        }
    }
    document.getElementById("sonuç").innerHTML = mesaj;
}
//?ORTALAMA BÖLGESİ BİTİŞ.


//?RASTGELE ARKAPLAN BÖLGESİ BAŞLANGIÇ.
document.body.addEventListener("keydown", DİAfarbeandern);

$("#DİAmessage").append(`<h4 class="DİAmesaj"></h4>`);
function DİAfarbeandern(DİA) {
    let harfkod = DİA.keyCode || DİA.which;
    var olmIIII;
    const harfler = 'ABCDEF0123456789';
    var metn = '#';
    if (harfkod == 27) {
        for (var sayaç = 0; sayaç < 6; sayaç++) {
            const denge = randomnum(0, harfler.length);
            metn += harfler.charAt(denge);
        }

        document.getElementById("DİAmain").style.backgroundColor = metn;
        $(".DİAmesaj").text(`hex kodu: ${metn}`);
    }else{
        $(".DİAmesaj").text(`hex kodu: ${metn}`);
    }

    $(".DİAmesaj").text(`hex kodu: ${metn}`);


    // $(document).on("keydown", function(e) {
    //     alert("Basılan tuş kodu : " + e.keyCode);
    // });

}
//?RASTGELE ARKAPLAN BÖLGESİ BİTİŞ.


//?ÖRÜNTÜ BÖLGESİ BAŞLANGIÇ.
for (; artI >= 1; artI -= 11) {
    if (artI === 100) continue;
    metinI += artI + "--";

    document.getElementById("döngüexpI").innerHTML = metinI;
}

function döngüButonII(değerI) {
    if (değerI == 100) {
        alert("DOĞRU TEBRİKLER");
    } else if (değerI > 188) {
        alert("YANLIŞ 188'den Büyük OLamaz");
    } else {
        alert("YANLIŞ TEKRAR DENE");
    }
}
//?ÖRÜNTÜ BÖLGESİ BİTİŞ.


//!İKİ KARE FARKI VE TOPLAMIN KARESİ BÖLGESİ BAŞLANGIÇ.
function matematikişlemII() {
    var işlemikareaçılımıtoplama = (kareaç1toplama, kareaç2toplama) => {
        return (
            kareaç1toplama * kareaç1toplama +
            kareaç2toplama * kareaç2toplama +
            2 * kareaç1toplama * kareaç2toplama
        );
    };
    var HiaI, HiaII, HiaIII;
    HiaI = document.getElementById("SONUÇI").value;
    HiaII = document.getElementById("SONUÇII").value;
    HiaIII = işlemikareaçılımıtoplama(HiaI, HiaII);

    document.getElementById("xx").innerHTML = HiaIII;
}

function matematikişlemI() {
    var işlemikikarefarkı = (kareal1, kareal2) => {
        return kareal1 * kareal1 - kareal2 * kareal2;
    };
    var HerI, HerII, HerIII;
    HerI = document.getElementById("SONUÇI").value;
    HerII = document.getElementById("SONUÇII").value;
    HerIII = işlemikikarefarkı(HerI, HerII);

    document.getElementById("xx").innerHTML = HerIII;
}
//!İKİ KARE FARKI VE TOPLAMIN KARESİ BÖLGESİ BİTİŞ.


//!ORTALAMA ALMA BÖLGESİ BAŞLANGIÇ.
const DİAortalamabtn = document.getElementById("DİAortalamabtn");
const DİAortsonuç = document.getElementById("DİAortsonuç");
const DİAyazsonuç = document.querySelector(".DİAyazsonuç");
DİAortalamabtn.addEventListener("click", Ortalamafonksiyon);

function Ortalamafonksiyon() {
    DİAortsonuç.style.display = "inline";
    let art = 0;
    for (art; art <= 5; art++) {
        let ElemenT = document.createElement("input");
        ElemenT.type = "number";
        ElemenT.classList.add("DİAortsınıf");
        ElemenT.value = 0;
        document.querySelector("#DİAortalama").appendChild(ElemenT);
        DİAortsonuç.addEventListener("click", () => {
            DİAyazsonuç.innerHTML = (Number(document.forms[0].elements[0].value) +
                Number(document.forms[0].elements[1].value) +
                Number(document.forms[0].elements[2].value) +
                Number(document.forms[0].elements[3].value) +
                Number(document.forms[0].elements[4].value) +
                Number(document.forms[0].elements[5].value)) / 6;
        });
    };

}
//!ORTALAMA ALMA BöLGESİ BİTİŞ.


//?YÜZDESİ BULMA BÖLGESİ BAŞLANGIÇ.
function DİAorantıbuton() {
    var girilensayı, yüzdesi, yüzdesisonuç;
    girilensayı = document.getElementById("DİAorantımsıI").value;
    yüzdesi = document.getElementById("DİAorantımsıII").value;
    yüzdesisonuç = document.getElementById("DİAyüzdesonuç");

    yüzdesisonuç.innerHTML = (girilensayı * yüzdesi) / 100;
}
//?YÜZDESİ BULMA BÖLGESİ BİTİŞ.


//!WİNDOW OLAYLARI BAŞLANGIÇ.
function yazdırI() {
    window.print();
}

function yazdırII() {
    history.back();
}

function yazdırIII() {
    window.location.assign(
        "file:///c:/Users/Admin/Desktop/.htmldosyalarM.CAN/mc11/.htmldosyalarM.CAN/GER%C3%87EK/ger%C3%A7ek11.html"
    );
    window.location.reload();
}

function işlemiwindowI() {
    window.document.getElementById("aboutI").innerHTML =
        "sayfa uzunluğun: " +
        window.innerWidth +
        "<br>" +
        "sayfa yüksekliğin: " +
        window.innerHeight +
        "<br>" +
        "Renk derinliği: " +
        screen.colorDepth +
        "<br>" +
        "Pixel derinliği: " +
        screen.pixelDepth +
        "<br>" +
        "Sayfanın yolu: " +
        window.location.pathname +
        "<br>" +
        "sayfanın URL'si: " +
        window.location.href +
        "<br>" +
        "sürüm: " +
        navigator.appVersion +
        "<br>" +
        "sayfanın en gelişmiş url'si: " +
        document.baseURI;
}

function işlemiwindowII() {
    window.document.getElementById("aboutI").innerHTML = "Donanımın Hakkında";
}
//!WİNDOW OLAYLARI BİTİŞ.


//?RASTGELE CÜMLE OLUŞTURMA BÖLGESİ BAŞLANGIÇ.
function DİAcharat() {
    const sessiz_harfler = 'bcdfghjklmnprsştçxvyzw';
    const sesli_harfler = "aeıioöuü"
    var metnI = '',
        metnII = "",
        metnIII = "",
        idxyDİZE = [],
        idxy = document.querySelector("#xy");
    for (var sayaç = 0; sayaç < 5; sayaç++) {
        const sessiz_denge = randomnum(0, sessiz_harfler.length);
        const sesli_denge = randomnum(0, sesli_harfler.length);


        idxyDİZE = [
            metnI += sessiz_harfler.charAt(sessiz_denge) + sesli_harfler.charAt(sesli_denge),
            metnII += sessiz_harfler.charAt(sessiz_denge) + sesli_harfler.charAt(sesli_denge) +
            sessiz_harfler.charAt(sessiz_denge),
            metnIII += sesli_harfler.charAt(sesli_denge) + sessiz_harfler.charAt(sessiz_denge)
        ]
    }
    idxy.style.height = "2rem";
    idxy.style.width = "10rem";
    idxy.style.color = "rebeccapurple";
    idxy.style.backgroundColor = "lightgray";
    idxy.style.fontSize = "20px";
    idxy.innerHTML = idxyDİZE[randomnum(0, idxyDİZE.length)];
}
//?RASTGELE CÜMLE OLUŞTURMA BÖLGESİ BİTİŞ.


//JQUERY DOCUMENT.
$(document).ready(function () {

    $("#DİAjqrybşlk").bind("click", function () {
        $(this).hide("fast");
    });


    $("#DİAdnmp").hover(function () {
        $(this).css("backgroundColor", "blue")
    }, function () {
        $(this).css("backgroundColor", "white")
    });



    $("#DİAevents").one("click dblclick mouseover mouseenter mouseleave mouseout hover", function (DİA) {
        $("#DİAeventstype").text("Gerçekleşen olay: " + DİA.type);
    });

    $("#DİAgizle").click(function () {
        $("#DİAmain").toggle(11000);
    });


    // ISI DÖNÜŞÜMLERİ BÖLGESİ BAŞLANGIÇ.
    $("#DİAcdenf").click(function () {
        $("#DİAsbl1").prepend("<input type='number' id='DİAderece1' placeholder='Dereceyi girin'>")
        $("#DİAderece1").on("change", function () {

            let celcius1 = $("#DİAderece1").val();
            let cdenfye = (celcius1 * 1.8) + 32;
            alert(celcius1 + " santigrat derece " + cdenfye + " fahrenheit derecedir");
        });
    });

    $("#DİAcdenk").click(function () {
        $("#DİAsbl2").prepend("<input type='number' id='DİAderece2' placeholder='Dereceyi girin'>")
        $("#DİAderece2").on("change", function () {
            let celcius2 = Number($("#DİAderece2").val());
            let cdenkye = celcius2 + 273;
            alert(celcius2 + " santigrat derece " + cdenkye + " kelvin derecedir")
        });
    });

    $("#DİAfdenc").click(function () {
        $("#DİAsbl3").prepend("<input type='number' id='DİAderece3' placeholder='Dereceyi girin'>")
        $("#DİAderece3").on("change", function () {
            let fahrenheit1 = $("#DİAderece3").val();
            let fdencye = (fahrenheit1 - 32) / 1.8;
            alert(fahrenheit1 + " fahrenheit derece " + fdencye + " santigrat derecedir")
        });
    });

    $("#DİAfdenk").click(function () {
        $("#DİAsbl4").prepend("<input type='number' id='DİAderece4' placeholder='Dereceyi girin'>")
        $("#DİAderece4").on("change", function () {
            let fahrenheit2 = $("#DİAderece4").val();
            let fdenkye = ((fahrenheit2 - 32) / 1.8) + 273;
            alert(fahrenheit2 + " fahrenheit derece " + fdenkye + " kelvin derecedir")
        });
    });

    $("#DİAkdenc").click(function () {
        $("#DİAsbl5").prepend("<input type='number' id='DİAderece5' placeholder='Dereceyi girin'>")
        $("#DİAderece5").on("change", function () {
            let kelvin1 = $("#DİAderece5").val();
            let kdencye = (kelvin1 * (9 / 5)) - 459;
            alert(kelvin1 + " kelvin derece " + kdencye + " santigrat derecedir")
        });
    });

    $("#DİAkdenf").click(function () {
        $("#DİAsbl6").prepend("<input type='number' id='DİAderece6' placeholder='Dereceyi girin'>")
        $("#DİAderece6").on("change", function () {

            let kelvin2 = $("#DİAderece6").val();
            let kdenfye = (kelvin2 - 273);
            alert(kelvin2 + " kelvin derece " + kdenfye + " fahrenheit derecedir");
        });
    });
    // ISI DÖNÜŞÜMLERİ BÖLGESİ BİTİŞ. 

});





//!KONSOL İŞLEMLERİ BÖLGESİ BAŞLANGIÇ.
console.log("JAVASCRİT'e Başladım!!!");

var _NesneI = function (
    parça,
    parça2,
    parça3,
    parça4,
    parça5,
    parça6,
    parça7,
    parça8,
    parça9,
    parça10,
    parça11
) {
    var $NesnelerI =
        parça +
        " " +
        parça2 +
        " " +
        parça3 +
        " " +
        parça4 +
        " " +
        parça5 +
        " " +
        parça6 +
        " " +
        parça7 +
        " " +
        parça8 +
        " " +
        parça9 +
        " " +
        parça10 +
        " " +
        parça11 +
        ".";

    console.log($NesnelerI);
};

_NesneI(
    "Bugün",
    "tarih",
    "21/01/26",
    "önerim",
    "anlamadığın",
    "bir şey",
    "olursa",
    "konsol bölgesine",
    "bak yoksa",
    "NE olduğunu",
    "anlayamazsın!!"
);

console.log(
    "Bugün tarih 21/02/01 farklı kaynaklara başladım javascript tek bir kaynakla öğrenilebilecek " +
    " bir yazılım dili değildir html ve css'in aksine."
);

console.log(
    "Bugün tarih 21/02/11 ve for konusunu bitirdim daha diğer döngülere başlamadım ve " +
    "algoritmaya giriş yapıcam."
);

console.log(
    "Bugün tarih 21/03/01  javascript'te orta üst arası seviyeye" +
    " giriştim yeni kaynaklardan öğrenmeye çalışıyorum"
);

_NesneI(
    "bugün",
    "tarih",
    "21/03/11",
    "javascriptte",
    "bayağı ilerledim",
    "yakında",
    "frameworklerle",
    "çalışmaya",
    "başlıyacağım",
    "İNŞALLAH",
    "electron.js ve react js ile başlamayı düşünüyorum"
);

_NesneI(
    "Bugün",
    "tarih",
    "21/03/25",
    "ve javascript'e",
    "devam", "yakında",
    "jquery", "dersine",
    "geçeceğim",
    "şuanda",
    "ecmascript6'da yım"
);

_NesneI(
    "Bugün",
    "tarih",
    "21/04/02",
    "ecmascript6'yı",
    "bitirdim",
    "ve",
    "jquery'e",
    "başlıyorum",
    "ondan sonra",
    "büyük bir çalışma yapmayı",
    "planlıyorum"
);

_NesneI(
    "Bugün 21/04/23",
    "100.gün",
    "Evet",
    "BÜYÜK",
    "projeye",
    "başlıycam",
    "yani",
    "artık",
    "burada",
    "işim",
    "bitti"
);

console.log(filldeneme.length);
console.log(filldeneme.fill(11, 2, 8));

console.log(window.location.pathname);
//!KONSOL İŞLEMLERİ BÖLGESİ BİTİŞ.
