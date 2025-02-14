import { Container, Header, ListContainer, Card, InputSearchContainer } from "./styles"
import { Link } from "react-router-dom"
import Arrow from '../../assets/images/icons/arrow.svg'
import Edit from '../../assets/images/icons/edit.svg'
import Trash from '../../assets/images/icons/trash.svg'
import { useEffect, useState } from "react"


export default function Home() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/contacts')
      .then(async (response) => {
        const json = await response.json()
        setContacts(json)

      })
      .catch((error) => {
        console.log('error', error);

      })
  }, [])

  console.log(contacts)

  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>

      <Header>
        <strong>
          {contacts.length}
          {contacts.length === 1 ? ' Contato' : ' Contatos'}
        </strong>
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

      {contacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && (
                <small>{contact.category_name}</small>
              )}
            </div>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>

          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={Edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={Trash} alt="Delete" />
            </button>
          </div>
        </Card>
      ))}

    </Container>
  )
}

