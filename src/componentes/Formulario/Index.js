import Botao from '../Botao/Index'
import CampoTexto from '../CampoTexto/CampoText'
import ListaSuspensa from '../ListaSuspensa/Index'
import './Formulario.css'

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Desing',
        'Inovação e Gestão'
    ]

    const AoSalvar = (event) => {
        event.preventDefault()
        console.log("Formulário foi submetido")
    }

    return (
        <section className='formulario'>
            <form onSubmit={ AoSalvar }>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={ true } label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio={ true } label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio={ true } label="Time" itens={times}/>
                <Botao>
                    Criar Card
                </Botao>    
            </form>
        </section>

    )
}

export default Formulario