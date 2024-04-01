

function Button({children, variant, type, onClick}) {
  return (
    <>
        <button type={type} className={`btn btn-${variant}`} onClick={onClick}>
            {children}
      </button> 
    </>
  )
}

export default Button
