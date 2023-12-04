function Button({ className, title, handleAction }) {
    return (
        <button onClick={ handleAction } type='submit' className={ className }>{ title }</button>
    )
}

export default Button;