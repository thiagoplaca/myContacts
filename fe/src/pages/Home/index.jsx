import { Container, Header, ListContainer, Card, InputSearchContainer } from "./styles"
import { Link } from "react-router-dom"
import Arrow from '../../assets/images/icons/arrow.svg'
import Edit from '../../assets/images/icons/edit.svg'
import Trash from '../../assets/images/icons/trash.svg'


export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>

      <Header>
        <strong>3 Contatos</strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={Arrow} alt="Arrow" />
          </button>
        </header>
      </ListContainer>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Thiago Placa</strong>
            <small>instagram</small>
          </div>
          <span>thiago@email.com</span>
          <span>(55) 9999-9999</span>
        </div>

        <div className="actions">
          <Link to="/edit/123">
            <img src={Edit} alt="Edit" />
          </Link>
          <button type="button">
            <img src={Trash} alt="Delete" />
          </button>
        </div>
      </Card>

    </Container>
  )
}

fetch('http://192.168.0.18:3001/contacts')
  .then((response) => {
    console.log('response', response)
  })