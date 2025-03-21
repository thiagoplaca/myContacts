import { useEffect, useState, useMemo, useCallback } from "react"
import { Link } from "react-router-dom"
import {
  Container,
  Header,
  ListHeader,
  Card,
  InputSearchContainer,
  ErrorContainer,
  EmptyListContainer,
  SearchNotFoundContainer
} from "./styles"

import Arrow from '../../assets/images/icons/arrow.svg'
import Edit from '../../assets/images/icons/edit.svg'
import Trash from '../../assets/images/icons/trash.svg'
import sad from '../../assets/images/sad.svg'
import emptyBox from '../../assets/images/empty-box.svg'
import magnifierQuestion from '../../assets/images/magnifier-question.svg'

import Loader from '../../components/Loader'
import Button from '../../components/Button'
import ContactsService from "../../services/ContactsService"
import delay from '../../utils/delay'



export default function Home() {
  const [contacts, setContacts] = useState([])
  const [orderBy, setOrderBy] = useState('asc')
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm])


  const loadContact = useCallback(async () => {
    try {
      await delay(1000)
      setIsLoading(true)

      const contactsList = await ContactsService.listContacts(orderBy)

      setHasError(false)
      setContacts(contactsList)
    } catch {
      setHasError(true)

    } finally {
      setIsLoading(false)
    }
  }, [orderBy])


  useEffect(() => {
    loadContact()
  }, [loadContact])

  function handleToggleOrderBy() {
    setOrderBy(prevState =>
      prevState === 'asc' ? 'desc' : 'asc'
    )

  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value)

  }

  function handleTryAgain() {
    loadContact()
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />
      {contacts.length > 0 && !hasError && (
        <InputSearchContainer>
          <input
            value={searchTerm}
            type="text"
            placeholder="Pesquise pelo nome..."
            onChange={handleChangeSearchTerm}
          />
        </InputSearchContainer>
      )}

      <Header
        justifyContent={hasError
          ? 'flex-end'
          : (
            contacts.length > 0 ? 'space-between' : 'center'
          )
        }
      >
        {(!hasError && contacts.length > 0) && (
          <strong>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? ' Contato' : ' Contatos'}
          </strong>
        )}
        <Link to="/new">Novo Contato</Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="Sad" />
          <div className="details">
            <strong>Ocorreu um erro ao obter os seus contatos.</strong>
            <Button type='button' onClick={handleTryAgain}>
              Tentar Novamente
            </Button>
          </div>
        </ErrorContainer>
      )}


      {!hasError && (
        <>
          {contacts.length < 1 && !isLoading && (
            <EmptyListContainer>
              <img src={emptyBox} alt="Empty Box" />
              <p>
                Você ainda não tem nenhum contato cadastrado!
                Clique no botão <strong>&quot;Novo Contato&quot;</strong> à cima para cadastrar o seu
                primeiro!
              </p>
            </EmptyListContainer>
          )}

          {contacts.length > 0 && filteredContacts.length < 1 && (
            <SearchNotFoundContainer>
              <img src={magnifierQuestion} alt="Magnifier Question" />

              <p>
                Nenhum resuldo foi encontrado para : <strong>{searchTerm}</strong>
              </p>
            </SearchNotFoundContainer>
          )}



          {filteredContacts.length > 0 &&
            <ListHeader orderby={orderBy}>
              <button type="button" onClick={handleToggleOrderBy}>
                <span>Nome</span>
                <img src={Arrow} alt="Arrow" />
              </button>
            </ListHeader>}

          {filteredContacts.map((contact) => (
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
        </>
      )}

    </Container>
  )
}

