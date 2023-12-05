function Button({ className, title, form }) {
    return (
        <button type='submit' className={ className } form= { form }>{ title }</button>
    )
}

export default Button;