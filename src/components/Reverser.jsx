import Button from "./Button"
import {useState} from 'react';

const Reverser = () => {

    const [typed, setTyped] = useState('');
    const [reverseString, setReverseString] = useState('');


    return <> 
        <p><label htmlFor="string">String</label><input type="text" value={typed} onChange={e => setTyped(e.target.value)} /></p>
        <Button>Reverse!</Button> 
    </>   
}

export default Reverser;