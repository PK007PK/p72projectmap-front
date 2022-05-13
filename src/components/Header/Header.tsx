import { Button } from '../Button/Button'
import './Header.css'

export const Header: React.FunctionComponent = (): JSX.Element => {
    return (
        <header>
            <h1><strong>Ogłoszenia</strong></h1>
            <Button>Dodaj ogłoszenie</Button>
            <div className="search">
                <input type="text" />
                <button>Szukaj</button>
            </div>
        </header>
    )
}