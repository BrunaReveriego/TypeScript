class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;
    //atributos privados
    constructor(_data, _quantidade, _valor) {
        // if(!data) {
        //     throw new Error('Data deve ser preenchida');
        // }
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
        // if(!quantidade) {
        //     throw new Error('Quantidade deve ser preenchido');
        // }
        // if(!valor) {
        //     throw new Error('Valor deve ser preenchido');
        // }
        //propriedades não podem ser alteradas fora dos métodos da própria classe
        //utilizar underscore
        // this._data = data;
        // this._quantidade = quantidade;
        // this._valor = valor;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
