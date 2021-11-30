import React from "react";
import classNames from 'classnames';

/* Пример класса
class Button extends React.Component{
    render() {
        
        return <button className={classNames('button', {
            'button--outline': this.props.outline,
        })}>{this.props.children}</button>
    }
}
*/
function Button({ onClick, className, outline, children}){
    return (
        <button 
        onClick={onClick}
        className={classNames('button', className, {
            'button--outline': outline,
        })}>{children}
        </button>
    );
}

export default Button;