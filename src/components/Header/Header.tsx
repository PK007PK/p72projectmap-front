import { FormEventHandler, SyntheticEvent, useContext, useState } from 'react'
import { SearchContext } from '../../contexts/searchContext';

import { Button } from '../Button/Button'
import './Header.css'

export const Header: React.FunctionComponent = (): JSX.Element => {
    const {search, setSearch} = useContext(SearchContext);
    const [inputVal, setInputVal] = useState('');

    const setSearchFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearch(inputVal);
    }
    
    return (
        <header>
            <h1><strong>Ogłoszenia</strong></h1>
            <Button>Dodaj ogłoszenie</Button>
            <form className="search" onSubmit={setSearchFromLocalState}>
                <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
                <button>Szukaj</button>
            </form>
        </header>
    )
}