var calculator ={
	tambah : function(a,b){
		return a+b;
	},
	kurang : function(a,b){
		return a-b;
	},
	kali : function(a,b){
		return a*b;
	},
	samadengan : function(a,b){
		if (a>b){
			return a +'Lebih besar dari'+b;
		}
		else if (a<b){
			return a +' Lebih kecil dari '+b;
		}
		else{
			return a + ' sama dengan '+b;
		}
	}
};
console.log(calculator.tambah(10,5));
console.log(calculator.kurang(10,5));
console.log(calculator.kali(10,5));
console.log(calculator.samadengan(10,5));