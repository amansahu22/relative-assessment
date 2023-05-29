import './ButtonSecondary.css'

type ButtonProps = {
    children : string
    onClick: () =>void
} 

const ButtonSecondary = ({children,onClick} : ButtonProps) => {
  return (
    <div className="button-secondary__container w-full font-jamjuree" onClick={onClick}>
        {children}
    </div>
  )
}

export default ButtonSecondary