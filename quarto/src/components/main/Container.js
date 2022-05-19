import {useState,useEffect} from "react";
import Conteudo from "./Conteudo";
import Mensagem from "./Mensagem";

export default function Container(){

    // vamos o estado Inicial dos produtos , ou seja
    // quais dados existem dentro do objeto produtos
    const [mensagem, setmensagem] = useState([
        {
            titulo: "",
            autor: "",
            mensagem: ""
        }
    ])
    const [produtos,setProduto] = useState([
        {
            id: "",
            nome: "",
            descricao: "",
            categoria: "",
            preco: "",
            msg: []
        }
    ]);

    useEffect(()=>{
        
        fetch("http://10.26.49.52:4000/api/services/produto/listar")
        .then((response)=> response.json())
        .then((dados)=>{
            setProduto(dados.output);
        })
        .catch((erro)=>console.error(`error ao carregar a api ->${erro}`))

    },[]);


    const mudarDados = (content) => {
        setmensagem(content);
    };



    return(
        <div className="container">
            <Mensagem info={mensagem} />
            <Conteudo dados={produtos} acao={mudarDados}/>
        </div>
    )
}