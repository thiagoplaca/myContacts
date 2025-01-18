import Input from "../Input"
import Select from "../Select"
import Button from "../Button"
import { Form, ButtonContainer } from "./styles"
import FormGroup from "../FormGroup"
import PropTypes from "prop-types"

export default function ContactForm({buttonLabel}) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Nome"/>
      </FormGroup>
      <FormGroup error="Formato do E-mail é inválido.">
        <Input placeholder="E-mail" error />
      </FormGroup>
      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>
      <FormGroup>
        <Select>
          <option value="123">Instagram</option>
          <option value="123">Instagram</option>
          <option value="123">Instagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  )
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
}