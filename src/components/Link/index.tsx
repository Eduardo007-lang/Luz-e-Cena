
import styles from './Link.module.css'

//Atributos intrinsecos de uma âncora <a> podem ser passados usando React.AnchorHTMLAttributes<HTMLAnchorElement>
// O React.AnchorHTMLAttributes<HTMLAnchorElement> traz todos os atributos padrões de uma tag <a>, como href, target, rel, etc.
// Dessa forma, o componente Link pode receber qualquer atributo válido para uma tag <a>
// e repassá-los para o elemento <a> dentro do componente.
const Link = ({children, ...rest}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a className={styles.link} {...rest}>{children}</a>
  )
}

export default Link
