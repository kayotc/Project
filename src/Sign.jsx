import './assets/ls.css';
import Header from './Header';

function Log() {
    return (
        <div className='main'>
            <div className=" rounded-lg content">
                <Header />
                <div className="inputBox">
                    <input className='' type="text" placeholder='Digite seu nome'/>
                    <input className='' type="text" placeholder='Digite seu Email'/>
                    <input className='' type="text" placeholder='Digite sua senha'/>
                    <input className='' type="text" placeholder='Confirme sua senha'/>
                    <p className='msg'></p>
                </div>
                <button className='text-xl font-medium w-2/4 btnC'>Cadastrar</button>
                <p className='font-medium linkToC'>Já tem cadastro? <a className='text-red-600' href="/log">Clique aqui</a></p>
            </div>
        </div>
    )
}

export default Log;