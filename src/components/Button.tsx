import './Button.css'

type ButtonProps = {
    children : string,
    onClick: () => void
}

const Button = ({children,onClick} : ButtonProps) => {
  return (
    <div className="button__container w-full font-jamjuree"onClick={onClick} >
        {children}
    </div>
  )
}

export default Button