alert("merhaba"); // sayfa içerisinde pencere açar ve uyarı mesajı gösterir...
window.alert("Hello wolrd") 
document.write("Helooo <br/>") // erkana çıktı sağlar 
document.writeln("world <br/>") // erkana alt satıra yeni çıktı sağlar  html de pre etiketi içine yazılırsa etkili oluyor 
console.log("consol değeri") // tarayıcının consol kısmına değer atamak için kullanılır.
innerHTML = "Mustafa" // html sayfası içindeki html etiketlerine etki eder ve değişim yapar
document.getElementById("birinci").innerHTML = "Mustafa <br/>" 
// debugger; hata ayıklama modunu açar satıtrları tek tek kontrol eder  

//DEĞİŞKENLER
// var standart değişken tanımlamada kullanılır 
// let bloak kapsamlı yerel değişken tanımlam da kullanılır.
// const sabit değişkenler tanımlama da kıullanılır

var a = "Öztürk"

// değişken türü bulma 
var tur = typeof(a + "<br />")
document.write(tur + "<br />" )

// uzunluk bulma 
document.write("a'nın uzunuluğu: " + a.length + "<br/>")

// eval() kendisine parametre olarak verilen değerleri javascript kodlamasına çevirerek komut gibi çalıştırır ve oluşan değeri geriye döndürür
var a = 30
var b = 20
var sonuc = eval("a+b")
document.write(sonuc + "<br/>")

function dene(){
document.write("Merhaba" + "<br/>");
}
var komut = eval("dene()")

//trim() değerin varsa başında ve sonundaki değeri siler 

var ornek1 = "    js    ";
var ornek2 = "css";
var sonuc = ornek1 + ornek2;

var son = sonuc.trim();
alert(son )

// slice()  kendine verilecek olan parametler ile tanımlanmış değişken içeriniği aralığında bulunan değerleri kopyalyarak yeni bir içerik oluşturur ve oluşturduğu değeri geriye döndürür
var dilim = "Mustafa";
document.write(dilim + "<br/>");

var dil2= dilim.slice(5);
document.write(dil2+ "<br/>");
var dil3= dilim.slice(2,5); // ikiden başlayıp beşe kadar alır 
document.write(dil3);

// substring() : kendisine verilecek olan parametreler ile tanımlanmış değişken içeriği aralığında bulunan değeri kopyalayarak yeni bir içerik oluşturur ve oluşturuğu değeri geriye döndürür

var sub = dilim.substring(3); // var sub = dilim.substring(3,5);
document.write(sub + "<br/>");


// substr() : kaçıncı karakterden başlayacağını belirtiriz virgülden sonra da başlangıçtan sonra kaç karakter uzunluğunda olacağını belirtririz
var metin = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum?"
var str = metin.substr(2, 9); // eksi değer de alabilir sondan başlar saymaya 
document.write(str + "<br/>");


// concat()  : verilen iki değeri birleştirmeye yarar
 var bir = "Mustafa "
 var iki = "Öztürk"
 var topla = bir.concat(iki); // virgülle birden fazla değişken eklenebilri parantez içerisine 
 document.write(topla + "<br/>");
 

// repeat() : verilen değişkeni alır ve istediğiniz kadar ekrana kopyalar ve yazdırır
var tekrar = "Tekaralanacak metin "
var islem = tekrar.repeat(2);   
document.write(islem + "<br/>");


// toString() : verilen değişkeni metne dönüştürür 
var değer = 5;
var sayi = değer.toString();
document.write(typeof(sayi + "<br/>"))

//indexof() : verilen karakterin sıra numarasını ekrana yazdırır
var karak = "karakter değer" 
var sayisi = karak.indexOf("t"); // var sayisi = karak.indexOf("t" , 15);  15. karakter den sonra verilen değeri armaaya başla
document.write(sayisi +  "<br/>")


// lastindexof() : sondan aramaya başla 


//search() : verlien değerin sıra numarasını belirtir
var asus = "dünyanın en güzel kızıı"
var arama = asus.search("en"); // var arama = asus.search("/en/i"); sonuna i eklenirse büyük küçük har aramaz direk değer döndürür
document.write(arama +  "<br/>");


// includes() : verilen değeri ara varsa true yoksa false değeri döndürür 
var dogru = asus.includes("güzel");
document.write(dogru +  "<br/>")

// startswich() : değişkenin verilen değerle başlayıp  başlamadığını sorgular true veya false değeri döndürür
 var dond = asus.startsWith("dünyanın"); // endWith değişkenin verilen değerle başlayıp başlamadığını sorgular 
 document.write(dond + "<br/>"); 

 
// match() : verilen değişken içerisinde arama yapar sonucu ekrana yazdırır
// varsa değeri döndürür yoksa null değer döndürür. arama yaparken büyük küçük harfe dikkat eder
// g : golabal den gelir tüm içerikde arar
// i : büyük küçük harfe dikkat etmeden arama yapar
var ornek5 = "örnekler arka arakaya geliyor du ";
var ornek5son = ornek5.match("du");  // var ornek5son = ornek5.match(/du/g); yanına i de koyulursa hem büyük küçüğe dikkat etmez hem de hepisnde arama yapar  
document.write(ornek5son + "<br/>");


// replace() : değişken içindeki verilen değeri yeni içerikle değiştirir 
var ornek6 = ornek5.replace("geliyor","gidiyordu");
document.write(ornek6 + "<br/>"); // g ile içerğin tamamında çalışılmasını sağlar i ile de büyük küçük harfe dikkat etmez



// split() : değişken içerğini bölümleyerek yeni bir dizi oluşturur

document.write(typeof(ornek5 )+ "<br/>")
var slp = ornek5.split(""); // her bir harf arasına virgül koyarak ayırır
var slp2 = ornek5.split(" "); // her boşluktan başlayıp bölümlere ayıracak
var slp3 = ornek5.split(" ", 3); // verilen değere kadar olan boşlukları bölümle 
var slp4 = ornek5.split("e", 3); // verilen harfleri verlien değere kadar bölümler  
document.write (typeof(slp));
document.write (slp + "<br/>");
document.write (slp2[2] + "<br/>"); //  bölümler ve ikinci elemanı alır 
document.write (slp3 + "<br/>");
document.write (slp4 + "<br/>");

// localeCompare() : verilen değişkenleri karşılaştırır değer döndürür 
var icerik = "abc"
var icerikik = "abd"
var icer = icerik.localeCompare(icerikik)
document.write(icer + "<br/>");

// charAt() : verilen değişken içerisinde istedğiniz parametreyi arar ve geriye döndürür
var car = icerik.charAt("a")
var car = icerik.charAt(0) // index sıralamasına göre de arama yapar
document.write(car+ "<br/>");


var cod = icerik.charCodeAt(0); // evrensel kod( unicode) karşılığını geriye dönrürür  
document.write(cod);


var un = String.fromCharCode(86,90,12); // verilen sayı değerlerini hharf olarak yazdırır.
document.write(un + "<br/>");

// encodeURI() : kodlama da olmaması gereken değerlerin yerine UTF-8 ile doldurur
var link = "https://www.btkakademi.gov.tr/portal/course/player/deliver/javascript-8099"
document.write(link + "<br/>");

var link2 = "https://www.btkakademı.gov.tr/pörtal/coürse/player/deliver/javascript-8099"
var codla = encodeURI(link2);
document.write(codla + "<br/>");


//decodeURI() : gelen UTF-8 kodlamasını normal değerine döndürür
var ters = decodeURI(codla);
document.write(ters + "<br/>");

// encodeURIComponent() : verilen değeri UTF-8 kodlamasına çevirir 
var sonuc = encodeURIComponent(link);
document.write(sonuc + "<br/>");

// verilen UTF-8 kodlamasını çözümler ve geri döndürür
var ceviri = decodeURIComponent(link2);
document.write(ceviri + "<br/>");

// escape() : değişken içerisindeki metnin özel karakterlerini Unicode olarak değiştirir ve geriye döndürür
var es = "Java Payin"
var cap = escape(es);
document.writeln(cap+ "<br/>")

// unescape() : verilen unicode değerlerini çevirerek geriye döndürür

 var donen = unescape(cap);
 document.writeln(donen);

// toUpperCase() : verilen değerin hepsini büyük yapar
var isim  = "Mustafa öztürk"
var buy = isim.toUpperCase();
document.writeln(buy + "<br/>");

//toLowerCase() : değişeken içerisindeki hepsini küçük yapar.
var kuc = buy.toLowerCase();
document.writeln(kuc + "<br/>")

//  toLocaleUpperCase() : türkçe karakterleri döndürürken diğer tarayıcılar da daha net sonuçlar verir hepsini büyük yapar
var buyuk = isim.toLocaleUpperCase();
document.writeln(buyuk + "<br/>");


// toLocaleLowerCase() : türkçe karakterleri döndürürken diğer tarayıcılar da daha net sonuçlar verir hepsini küçük yapar
var kucuk = isim.toLocaleLowerCase()
document.writeln(kucuk + "<br/>");


// sub() : değişken içerisindeki metni alt simge menti yaprak geriye döndürür.
var bir = "H"
var iki = "2"
var uc  = "O"
var alt = iki.sub();
document.write(bir);
document.write(alt);
document.write(uc);

// sub() : değişken içerisindeki metni üst metin yaparak yazdırır
var bir = "H"
var iki = "2"
var uc  = "O"
var alt = iki.sup();
document.write(bir);
document.write(alt);
document.write(uc);

// big() : değişken içerisindeki metni büyük fontlu yaparak değer döndürür
var alt = bir.big();
document.write(alt + "<br/>");

// small() : değişken içerisindeki metni küçük fontlu yapr.
var alt = bir.small();
document.write(alt + "<br/>");


// bold() : değişken içerisindeki metni kalın yapar
var alt = bir.bold();
document.write(alt + " <br/>");


// italics() : değişken içerisindeki metni italik yapar
var alt = bir.italics();
document.write(alt + "<br/>");

// strike() : değişken içerisindeki metnin üzerini çizgili yapr 
var alt = bir.strike();
document.write(alt + "<br/>");

//fixed() : değişken içerisindeki metni daktilo metin yapr
var alt = bir.fixed();
document.write(alt + "<br/>");

// fontcolor() : değişken içerisideki değeri renklendirerek geriye döndürür. Varsayılan renk yeşildir
var alt = bir.fontcolor(); // var alt = bir.fontcolor("red"); "#" ile de değer verilebilir
document.write(alt + "<br/>");

//Fontsize() : değişken içerisindeki değerin fontunun büyüklüğünü belirtir
var alt = bir.fontsize("50");
document.write(alt + "<br/>");

//anchor() : a tagına name değeri atar.
var alt = bir.anchor(); 
alert(alt);

//link() : değişkene link atar ve köprü kurar
var alt = bir.link();  // var alt = bir.link("www.google.com"); 
document.write(alt + "<br/>");


// 