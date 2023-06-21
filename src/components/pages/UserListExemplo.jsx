 import { useEffect } from 'react';
import './UserList.css';
import { useState } from 'react';
import { useCallback } from 'react';
import { useMemo } from 'react';

 const UserList = () => {
    
    const [state, setState] = useState('Estado inicial')

    useEffect (() => {
        console.log('useEffect como didMount (montagem)');
    } , [])

    useEffect(() => {
        console.log('useEffects como didUpdate, ou seja, só atualiza qunado se clica nele');
    }, [state])

    const onClick = () => {
        setState('Estado Atualizado')
    }

    //sintaxe usecallback
    const nomeFuncao = useCallback(() => {}, [])

    //sintaxe useMemo
    const valor = useMemo(() => {}, [])
    return (
        <div className='container'>
            <h1>
                teste
            </h1>
            <h3>{state}</h3>
            <button type="button" onClick={onClick}>Atulizar estado</button>
        </div>
    )
 }

 export default UserList;   

