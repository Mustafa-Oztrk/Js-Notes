// mantıksal değer döndürülür soru işareti koyulur sonrasında değer doğru ise doğru yanlış ise yanlış yazar.
document.writeln(4 < 5 ? "Doğru" : "Yanlış" + "<br />");

// değişkene atanarak da kullanılabilir.
var kontrol = 4 < 5 ? "Doğru" : "Yanlış";
document.writeln(kontrol + "<br />")



// değişken içeisindeki uzunluk değerlerini karşılaştırma
var derger1 = "Mustafa";
var deger1uzunluk  = derger1.length;

var derger2 = "Mehmet";
var deger2uzunluk = derger2.length;

var karsilatirma = (deger1uzunluk<deger2uzunluk ? "1" : "0");   // değer bir daha kısa ise  ekrana 1 değer 2 daha kısa ise ekrana 0 yazdıracak.  "1" == doğru "0" == yanlış
document.writeln(karsilatirma + "<br />"); 
