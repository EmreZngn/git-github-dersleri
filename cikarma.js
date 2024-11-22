function cikar() {
	if(parseInt(sayi1.value) < parseInt(sayi2.value))
		alert("cikarma islemi için birinci sayinin ikinci sayidan büyük olması gerekiyor!")
	else
		sonuc.innerHTML = sayi1.value - sayi2.value;
}