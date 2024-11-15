function Hitungbarang(prod, qty){
    if(prod=='A'||prod=='a'){
        const harga = 4550;
        console.log(`total harga: ${harga*qty}`);
        if(qty>13){
            console.log(`potong: ${231*qty}`);
            console.log(`total setelah potong: ${(qty*harga)-(231*qty)}`);
        }
    }
    else if(prod=='B'||prod=='b'){
        const harga = 5330;
        console.log(`total harga: ${harga*qty}`);
        if(qty>7){
            console.log(`potong: ${harga*0.23}`);
            console.log(`total setelah potong: ${(qty*harga) - (harga*0.23)}`);
        }
    }
    else if(prod=='C' || prod=='c'){
        const harga = 8653;
        console.log(`total harga: ${harga*qty}`);
    }
    else{
        console.log('pilih barang a,b, dan c');
    }
    
};


Hitungbarang('a', 14)