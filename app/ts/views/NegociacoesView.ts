class NegociacoesView extends View<Negociacoes>{
    
    template(negociacoes: Negociacoes): string{
        return  `
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>

        <tbody>
            ${negociacoes.paraArray().map(negociaco => 
                `
                    <tr>
                        <td>${negociaco.data.getDate()}/${negociaco.data.getMonth()}/${negociaco.data.getFullYear()}</td>
                        <td>${negociaco.quantidade}</td>
                        <td>${negociaco.valor}</td>
                        <td>${negociaco.volume}</td>
                    </tr>
                `
                ).join('')}
        </tbody>

        <tfoot>
        </tfoot>
    </table> 
        `
    }
}