// src/components/Button.jsx

const Button = () => {
    const handleClick = () => {
        alert('Button Clicked');
    }
    return (
        <>
        
            <p className="uplaoad-btn" onClick={handleClick}>Upload</p> 
        </>
    );
}

export default Button
