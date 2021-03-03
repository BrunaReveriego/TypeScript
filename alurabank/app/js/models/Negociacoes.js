class Negociacoes {
    constructor() {
        // private _negociacoes: Array<Negociacao> = [];
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    //tipagem de retornos
    paraArray() {
        return [].concat(this._negociacoes);
    }
}
