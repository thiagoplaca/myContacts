const ContactsRepository = require('../repositories/ContactsRepository')

class ContactController {
  // Listar Todos os Registros
  async index(request, response) {
    const { orderBy } = request.query
    const contacts = await ContactsRepository.findAll(orderBy)
    
    response.json(contacts)
  }

  //Obter um Registro
  async show(request, response) {
    const { id } = request.params
    const contact = await ContactsRepository.findById(id)

    if(!contact) {
      return response.status(404).json({error: 'User not found'})
    }

    response.json(contact)
  }

  // Criar novo Registro
  async store(request, response) {
    const { name, email, phone, category_id }= request.body

    if(!name) {
      return response.status(400).json({ error: 'Name is required!' })
    }

    const contactsExists = await ContactsRepository.findByEmail(email)
    if(contactsExists) {
      return response.status(400).json({error: 'This e-mail is already in use.'})
    }

    const contact = await ContactsRepository.create({
      name, email, phone, category_id
    })

    response.json(contact)
  }

  // Editar um Registro
  async update(request, response) {
    const { id } = request.params
    const {
      name, email, phone, category_id
    } = request.body

    const contactsExists = await ContactsRepository.findById(id)

    if(!contactsExists) {
      return response.status(404).json({error: "User not found"})
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required!' })
    }

    const contactByEmail = await ContactsRepository.findByEmail(email)
    if (contactByEmail && contactByEmail.id !== id) {
      return response.status(400).json({ error: 'This e-mail is already in use.' })
    }

    const contact = await ContactsRepository.update(id, {
      name, email, phone, category_id
    })

    response.json(contact)

  }

  // Deletar um Registro
   async delete(request, response) {
    const { id } = request.params

    await ContactsRepository.delete(id)
    response.sendStatus(204)


  }
}


//SingleTon
module.exports = new ContactController()
