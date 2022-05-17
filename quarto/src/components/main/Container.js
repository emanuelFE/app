import {useState,useEffect} from "react";
import Conteudo from "./Conteudo";
import Mensagem from "./Mensagem";

export default function Container(){

    // vamos o estado Inicial dos produtos , ou seja
    // quais dados existem dentro do objeto produtos
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
        .catch((err)=>console.error(`error ao carregar a api ->${erro}`))

    },[])

    return(
        <div className="container">
            <Mensagem />
            <Conteudo dados = {produtos}/>
        </div>
    )
}