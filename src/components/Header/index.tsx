import HeaderList from "./components/HeaderList";
import HeaderListItem from "./components/HeaderListItem";
import Logo from "../Logo";
import HeaderLinks from "./components/HeaderLinks";
import HeaderFormFilters from "./components/HeaderFormFilters";
import HeaderActions from "./components/HeaderActions";

const Header = () => {
  return (
    <header>
      <HeaderList>
        <HeaderListItem>
          <Logo src="./logo_e_favicon/Logo_azul.png" alt="Luz e Cena Logo" />
        </HeaderListItem>

        <HeaderListItem>
          <HeaderLinks />
        </HeaderListItem>

        <HeaderListItem>
          <HeaderFormFilters />
        </HeaderListItem>

        <HeaderListItem>
          <HeaderActions />
        </HeaderListItem>
        
      </HeaderList>
    </header> 
  )
}

export default Header;
