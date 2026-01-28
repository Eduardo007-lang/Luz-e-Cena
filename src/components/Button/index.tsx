import React from 'react'
import classNames from 'classnames';
import styles from './Button.module.css';

// Define o tipo ButtonProps com variantes e atributos HTML padrão de um botão
type ButtonProps = {
    // Define a propriedade 'variant' com dois possíveis valores union
    variant: "default" | "icon";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

// Usando desestruturação para obter 'children' e 'variant' das props e ...rest para o restante das props, isso permite passar qualquer atributo HTML padrão para o botão
const Button = ({children, variant='default', ...rest}: ButtonProps) => {
    const classMap = {
        default: styles.default,
        icon: styles.botaoIcone,
    }

  return (
    <button className={classNames(styles.botao, classMap[variant])} {...rest}>{children}</button>
  )
}

export default Button
