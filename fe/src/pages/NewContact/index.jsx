import Pageheader from "../../components/PageHeader";
import ContactForm from "../../components/ContactForm";

export default function NewContact() {
  return (
    <>
      <Pageheader
        title="Novo Contato"
      />
      <ContactForm
        buttonLabel="Cadastrar"
      />
    </>
  )
}