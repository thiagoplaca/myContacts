import { Container, Header, ListContainer, Card, InputSearchContainer } from "./styles"
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
        <a href="/">Novo Contato</a>
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
          <a href="/">
            <img src={Edit} alt="" />
          </a>
          <button type="button">
            <img src={Trash} alt="Delete" />
          </button>
        </div>
      </Card>
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
          <a href="/">
            <img src={Edit} alt="" />
          </a>
          <button type="button">
            <img src={Trash} alt="Delete" />
          </button>
        </div>
      </Card>
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
          <a href="/">
            <img src={Edit} alt="" />
          </a>
          <button type="button">
            <img src={Trash} alt="Delete" />
          </button>
        </div>
      </Card>

    </Container>
  )
}