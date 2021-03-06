class PersegiPanjang{
    constructor(p,l){
        this.panjang = p
        this.lebar = l
    }
    luas = () => {
        return this.panjang * this.lebar
    }

    keliling = () => {
        return 2 * ( this.panjang + this.lebar)
    }
}

class Balok extends PersegiPanjang{
    constructor(p,l,t){
        super(p,l)
        this.tinggi = t
    }
    luas = () => {
        return 2 * ((this.panjang * this.lebar) + (this.panjang * this.tinggi) + (this.lebar * this.tinggi))
    }

    volume = () => {
        return this.panjang * this.lebar * this.tinggi
    }
}

let lemari = new Balok(10,5,2)
console.log("Luas lemari = " + lemari.luas());
console.log("Volume lemari = " + lemari.volume());