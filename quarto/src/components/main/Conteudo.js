export default function Conteudo(props){
    
    const passarDados = (pr)=>{
        props.acao(pr);
    };


    return(
        <div className="conteudo">
            <h2>Produtos</h2>

            <div className="produtos">
                {
                    props.dados.map((intens,ix)=>(
                        <div key={ix} onClick={()=> passarDados(intens.msg)}>
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