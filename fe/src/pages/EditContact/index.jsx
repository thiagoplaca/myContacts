import ContactForm from "../../components/ContactForm";
import Pageheader from "../../components/PageHeader";
import ContactsService from "../../services/ContactsService";
import Loader from '../../components/Loader'
import Toast from '../../utils/toast'
import { useEffect, useRef, useState } from "react";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useSafeAsyncAction from "../../hooks/useSafeAsyncAction";

export default function EditContact() {
  const [isLoading, setIsLoading] = useState(true)
  const [contactName, setContactName] = useState('')
  const contactFormRef = useRef(null)

  const { id } = useParams()
  const history = useHistory()
  const safeAsyncAction = useSafeAsyncAction()

  useEffect(() => {
    async function loadContact() {
      try {
        const contactData = await ContactsService.getContactById(id)

        safeAsyncAction(() => {
          contactFormRef.current.setFieldsValues(contactData)
          setIsLoading(false)
          setContactName(contactData.name)
        })
      } catch {
        safeAsyncAction(() => {
          history.push('/')
          Toast({
            type: 'danger',
            text: 'Contato não encontrado!'
          })
        })
      }
    }

    loadContact()
  },[id, history, safeAsyncAction])


 async function handleSubmit(formData) {
    try {
          const contact = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            category_id: formData.categoryId,

          }

          const contactData = await ContactsService.updateContact(id, contact)

          setContactName(contactData.name)

          Toast({
            type: 'success',
            text: 'Contato editado com sucesso.',
            duration: 8000,
          })
        } catch{
          Toast({
            type: 'danger',
            text: 'Ocorreu um erro ao editar o contato.'
          })
        }
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <Pageheader
        title={isLoading ? 'Carregando' :`Editar ${contactName}`}
      />

    <ContactForm
      ref={contactFormRef}
      buttonLabel="Salver Alterações"
      onSubmit={handleSubmit}
      />

    </>
  )
}