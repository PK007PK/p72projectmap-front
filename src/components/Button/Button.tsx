import './Button.css'

interface Props {
    children: React.ReactNode;
}

export const Button: React.FunctionComponent<Props> = ({children}): JSX.Element => {
    return (
        <button>{children}</button>
    )
}