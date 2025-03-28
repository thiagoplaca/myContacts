import Input from "../Input"
import Select from "../Select"
import Button from "../Button"

import FormGroup from "../FormGroup"
import { Form, ButtonContainer } from "./styles"

import PropTypes from "prop-types"
import { useState, useEffect } from "react"

import isEmailValid from "../../utils/isValidEmail"
import formatPhone from "../../utils/formatPhone"
import useErrors from '../../hooks/useErrors'
import CategoriesService from "../../services/CategoriesService"
import delay from '../../utils/delay'

export default function ContactForm({ buttonLabel }) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [categories, setCategories] = useState([])
  const [isLoadingCategories, setIsLoadingCategories] = useState(true)

  const {
    setError,
    removeError,
    getErrorMessageByFieldName,
    errors } = useErrors()

  const isFormValid = (name && errors.length === 0);

  useEffect(() => {
    async function loadCategories() {
      try {
        await delay(1000)
        const categoriesList = await CategoriesService.listCategories()

        setCategories(categoriesList);
      } catch {

      } finally {
        setIsLoadingCategories(false)
      }

    }

    loadCategories()
  },[])

  function handleNameChange(event) {
    setName(event.target.value)

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' })
    } else {
      removeError('name')
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value)

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail Inválido.' })
    } else {
      removeError('email')
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    // console.log({
    //   name, email, phone, category
    // })
  }


  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value))
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type='email'
          error={getErrorMessageByFieldName('email')}
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
          maxLength="15"
        />
      </FormGroup>
      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
          disabled={isLoadingCategories}
          >
          <option value="">Sem Categoria</option>

          {categories.map((category) => (
            <option key={category.id} value={category}>
              {category.name}
            </option>
          ))}

        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  )
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
}