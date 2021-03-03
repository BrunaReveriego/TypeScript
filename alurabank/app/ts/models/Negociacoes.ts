class Negociacoes {
    // private _negociacoes: Array<Negociacao> = [];
     private _negociacoes:  Negociacao[] = [];


    adiciona(negociacao: Negociacao) {
        this._negociacoes.push(negociacao);
    }

    //tipagem de retornos
    paraArray(): Negociacao[] {
        return [].concat(this._negociacoes);
    }
}