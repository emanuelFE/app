export default function Conteudo(props){
    return(
        <div className="conteudo">
            <h2>Produtos</h2>

            <div className="produtos">
                {
                    props.dados.map((intens,ix)=>(
                        <div key={ix}>
                            <h3>{intens.nome}</h3>
                            <p>{intens.descricao}</p>
                            <p>{intens.categoria}</p>
                            <p className="preco">R$ {intens.preco}</p>
                            </div>
                    ))
                }

                
                
                
                </div>









            
        </div>
    );
}