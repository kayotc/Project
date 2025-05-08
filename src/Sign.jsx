import './assets/ls.css';
import Header from './Header';
import {Link} from 'react-router-dom';

function Log() {
    return (
        <div className='main'>
            <div className=" rounded-lg content">
                <Header />
                <div className="inputBox">
                    <input className='' type="text" placeholder='Digite seu nome'/>
                    <input className='' type="email" placeholder='Digite seu Email'/>
                    <input className='' type="password" placeholder='Digite sua senha'/>
                    <input className='' type="password" placeholder='Confirme sua senha'/>
                    <p className='msg'></p>
                </div>
                <button className='text-xl font-medium w-2/4 btnC'>Cadastrar</button>
                <p className='font-medium linkToC'>Já tem cadastro? <Link className='text-red-600' to="/log">Clique aqui</Link></p>
            </div>
        </div>
    )
}

export default Log;