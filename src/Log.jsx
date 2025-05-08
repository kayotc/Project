import './assets/ls.css';
import Header from './Header.jsx';

function Log() {
    return (
        <div className='main'>
            <div className=" rounded-lg content">
                <Header />
                <div className="inputBox">
                    <input className='p-3' type="text" placeholder='Digite seu Email'/>
                    <input className='p-3' type="text" placeholder='Digite sua senha'/>
                    <p className='msg'></p>
                </div>
                <button className='text-xl font-medium w-2/4 btnL'>Entrar</button>
                <p className='font-medium linkToL'>Ainda não tem uma conta? <a className='text-red-600' href="/sign">Clique aqui</a></p>
            </div>
        </div>
    )
}

export default Log;