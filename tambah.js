localStorage.getItem('title', 'nama', 'kategori', 'content');

function inputdata(){
    var t=document.forms['tambahberita']['title'].value;
    var n=document.forms['tambahberita']['nama'].value;
    var k=document.forms['tambahberita']['kategori'].value;
    var c=document.forms['tambahberita']['content'].value;        
                                            
    var tabel = document.getElementById("databel");
    var baris = tabel.insertRow(1);
    var kol1 = baris.insertCell(0);
    var kol2 = baris.insertCell(1);
    var kol3 = baris.insertCell(2);
    var kol4 = baris.insertCell(3);
            
    kol1.innerHTML = t;
    kol2.innerHTML = n;
    kol3.innerHTML = k;
    kol4.innerHTML = c;
   }