// try == hata oluşturulabilecek kodlar için kullanılır 
// catch ==  hata oluştuğunla çalışacak olan kodlar için kuulanılır
// finally == hata oluşsa da oluşmasa da çalışacak kodlar için kullanılır
// throw ==  hata oluşturulabilecek kodlar için istisnai durumlarda için kullanılır 

try{
    var isim = "Mustafa"
    throw("soyisim değişkeni bulunamadı"); // oluşabilecek hatalar için tanımlanır
    document.write(isim + "<br />");
    document.write(soyisim + "<br />");

}
catch(err){
    document.write("Hata oluştu <br />");
     document.write(err + "<br />") // catch içindeki eror parametresine erişip ekrana direk hata nedeni yazdır
}
finally{
    document.write("Hata olsada olmasada çalışacak bölümdür");
}