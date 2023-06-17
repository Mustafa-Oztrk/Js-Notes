// Array' ler (Diziler) içerisinde birden fazla değer tutar. istediğiniz zamana index numarasını yazarak o değere ulaşabilrsiniz...
let isimler = ['zeynep', 'Mustafa', 'Sude','Saadet'];

document.write(isimler + "<br />" );// Ekrana hepsini yazdırır 
document.write(isimler[0] + "<br />"); // dizinlerin hepsi 0 dan başlar ilk değerin index numarsı her zaman '0' dır 

isimler[1] = "Ayşe";// dizideki 1 index Mustafa Ayşe olarak değişti
document.write(isimler[1] + "<br />");

// her değer arasına otomatik bir değer atmak istiyorsak 
let otoddeger = isimler.join('-') // her değer arasına otomatik '-' işareti koyar
document.write(otoddeger + "<br />");
// indexof() : index numarasını bulmaya yarar
let sira = isimler.indexOf('Sude');
document.write("Sıdenin sıra sayısı : " + sira + "<br />");

//concat() : 

let ekle = isimler.concat(['Merve', 'Ali']);
document.write(ekle + "<br />");



let yas = [18, 20, 30, 12,]; // sayı dizileri
document.write(yas[3]); 


