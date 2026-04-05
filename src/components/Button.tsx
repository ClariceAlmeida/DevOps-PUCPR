type ButtonProps = {
    element: string;
    className?: string;
    onClick?: () => void;
}

const Button = ({ element, className, onClick }: ButtonProps) => {


  return (
    <button className={`button ${className}`} onClick={onClick}>
        {element}
    </button>
  )
}

export default Button
