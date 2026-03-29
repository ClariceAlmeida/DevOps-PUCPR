type ButtonProps = {
    element: string;
    className?: string;
}

const Button = ({ element, className }: ButtonProps) => {


  return (
    <button className={`button ${className}`}>
        {element}
    </button>
  )
}

export default Button
