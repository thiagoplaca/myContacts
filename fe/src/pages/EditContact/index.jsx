import ContactForm from "../../components/ContactForm";
import Pageheader from "../../components/PageHeader";
import ContactsService from "../../services/ContactsService";
import Loader from '../../components/Loader'
import Toast from '../../utils/toast'
import { useEffect, useRef, useState } from "react";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function EditContact() {
  const [isLoading, setIsLoading] = useState(true)
  const contactFormRef = useRef(null)

  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    async function loadContact() {
      try {
        const contactData = await ContactsService.getContactById(id)

        contactFormRef.current.setFieldsValues(contactData)
        setIsLoading(false)
      } catch {
        history.push('/')
        Toast({
          type: 'danger',
          text: 'Contato não encontrado!'
        })
      }
    }

    loadContact()
  },[id, history])


  function handleSubmit() {

  }
  return (
    <>
      <Loader isLoading={isLoading} />
      <Pageheader
        title="Editar Thiago Placa"
      />

    <ContactForm
      ref={contactFormRef}
      buttonLabel="Salver Alterações"
      onSubmit={handleSubmit}
      />

    </>
  )
}