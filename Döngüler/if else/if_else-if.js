// if : eğer
// else-if : değilse eğer
// else : değilse
var deger1 = 5;
var deger2 = 15;
// if else'de eşit eşit değeri kullanımı
if (deger1 == 5) {
  document.writeln("birinci değer 5'e eşittir" + "<br/>");
} else {
  document.writeln("birinci değer 5'e eşit değildir");
}



// if else 'de büyük küçük işareti kullanımı

if (deger1 < deger2) {
  document.writeln("sayi 1 sayı 2 den küçüktür");
} else if (deger1 > deger2) {
  document.writeln("sayı 1 sayı 2 den büyüktür");
} else {
  document.writeln("değerler Hatalı");
}



// if else 'de küçük eşit işareti kullanımı
if (deger1 <= deger2) {
  document.writeln("sayi 1 sayı 2 den küçüktür" + "<br/>");
} else if (deger1 > deger2) {
  document.writeln("sayı 1 sayı 2 den büyüktür" + "<br/>");
} else {
  document.writeln("değerler Hatalı" + "<br/>");
}


// if else 'de veya işareti kullanımı "||" her karşılaştırmadan biririnin doğru olması yeterli
if (deger1 < deger2 || deger2 < deger1) {
  document.writeln("iki sayından biri diğerinden büyük" + "<br/>");
} 



var saat =6;
// if else'de "&&" ve işareti kullanımı her iki karşılatırmanın da doğru değeri döndürmesi gerekiyor
if (saat>=0 && saat<=5) {
  document.writeln("iyi geceler" + "<br/>");
} else {
  document.writeln("Günaydın" + "<br/>");
}


// Çok boyutlu if else Kullanımı
var saatt =7;
if (saatt>=0 && saatt<=5) {
    if(saatt==0){
      document.writeln("iyi geceler saat : " + saatt)
    }else if (saatt==1) {
      document.writeln("iyi geceler saat : " + saatt)
    }
    else if (saatt==2) {
      document.writeln("iyi geceler saat : " + saatt)
    }
    else if (saatt==3) {
      document.writeln("iyi geceler saat : " + saatt)
    }
    else if (saatt==4) {
      document.writeln("iyi geceler saat : " + saatt)
    }else{
      document.writeln("saat değeri hatalı " + saatt)
    }
} else {
  document.writeln("saat değeri 5'den büyük" + "<br/>");
}




// Çok boyutlu if else Kullanımın da veri kontolü yapma
var saatt ="7";
var veri = typeof saatt
if (saatt>=0 && saatt<=5 && veri=="Number") {
    if(saatt==0){
      document.writeln("iyi geceler saat : " + saatt)
    }else if (saatt==1) {
      document.writeln("iyi geceler saat : " + saatt)
    }
    else if (saatt==2) {
      document.writeln("iyi geceler saat : " + saatt)
    }
    else if (saatt==3) {
      document.writeln("iyi geceler saat : " + saatt)
    }
    else if (saatt==4) {
      document.writeln("iyi geceler saat : " + saatt)
    }else{
      document.writeln("saat değeri hatalı " + saatt)
    }
} else {
  document.writeln("Veri değeri rakamsal değil" + "<br/>");
}
