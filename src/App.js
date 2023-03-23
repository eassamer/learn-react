import './App.css'
import { Button } from '@nextui-org/react';
import Logo from './logo/Logo';
import Google from './logo/Google';
import { css } from '@emotion/react'
import wave from './wave.svg'
// import logo1 from './42.png';
const App = () => {
    const ButtonStyleIntra = css `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@600;700&display=swap');
    background-color: #000;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 16px;
    border-radius: 10px;
    margin-top: 40px;
    `
    const ButtonStyleGoogle = css `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@600;700&display=swap');
    background-color: #FF5F5F;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 16px;
    border-radius: 10px;
    margin-top: 15px;
    `

    return (
        <div className="app">
            <div className='login-page'>
                <div className='left'>
                    <div className='welcome'>
                        <h1>WELCOME</h1>
                        <img src={wave} alt="wave"/>
                    </div>
                    <div className='small-text'>
                        <p>Please log in with</p>
                    </div>
                    <div className='buttons'>
                        <Button className='button-i' iconRight={<Logo />}size="xl" css={ButtonStyleIntra}>Intra</Button>
                    </div>
                    <div className='small-text'>
                        <div className='line'></div>
                        <p className='or'>Or</p>
                        <div className='line'></div>
                    </div>
                    <div className='buttons'>
                        <Button className='button-i' iconRight={<Google />}size="xl" css={ButtonStyleGoogle}>Google</Button>
                    </div>
                </div>
                <div className='right'></div>
            </div>
        </div>
    );
 }

 export default App;