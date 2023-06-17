var metin = "Sude"; // var metin = "Sude uzuntaş"; // kelimeler arsındaki boşlukta bir karakterdir  dolayısyla bu metin 15 karakterlidir
var karaktersay = metin.length;  // metinin karakter sayısını alır

switch (karaktersay) {
    case 1: // karakter sayısı 1' e eşitse
        document.writeln("metinin karakter sayısı : " + karaktersay)
        break;
    case 2: // karakter sayısı 1' e eşitse
        document.writeln("metinin karakter sayısı : " + karaktersay)
        break;
    case 3: // karakter sayısı 1' e eşitse
        document.writeln("metinin karakter sayısı : " + karaktersay)
        break;
    case 4: // karakter sayısı 1' e eşitse
        document.writeln("metinin karakter sayısı : " + karaktersay)
        break;
    default: // case'lerdeki hiçbir seçenek uymuyorsa default değeri çalıştırılır
        document.writeln("metinin karakter sayısı daha fazla: " + karaktersay)
        break;
}