const ContactsRepository = require('../repositories/ContactsRepository')
const isValidUUID = require('../utils/isValidUUID')

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

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid contact id' })
    }

    const contact = await ContactsRepository.findById(id)

    if (!contact) {
      return response.status(404).json({ error: 'Contact not found' })
    }

    return response.json(contact)
  }

  // Criar novo Registro
  async store(request, response) {
    const { name, email, phone, category_id } = request.body

    if (!name) {
      return response.status(400).json({ error: 'Name is required!' })
    }

    if (category_id && !isValidUUID(category_id)) {
      return response.status(400).json({ error: 'Invalid user category' })
    }

    if (email) {
      const contactsExists = await ContactsRepository.findByEmail(email)
      if (contactsExists) {
        return response.status(400).json({ error: 'This e-mail is already in use.' })
      }
    }

    const contact = await ContactsRepository.create({
      name,
      email: email || null,
      phone,
      category_id: category_id || null,
    })


    response.status(201).json(contact)
  }

  // Editar um Registro
  async update(request, response) {
    const { id } = request.params
    const {
      name, email, phone, category_id
    } = request.body

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid contact id' })
    }

    if (category_id && !isValidUUID(category_id)) {
      return response.status(400).json({ error: 'Invalid user category' })
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required!' })
    }

    const contactsExists = await ContactsRepository.findById(id)
    if (!contactsExists) {
      return response.status(404).json({ error: "User not found" })
    }

    if (email) {
      const contactByEmail = await ContactsRepository.findByEmail(email)
      if (contactByEmail && contactByEmail.id !== id) {
        return response.status(400).json({ error: 'This e-mail is already in use.' })
      }
    }

    const contact = await ContactsRepository.update(id, {
      name,
      email: email || null,
      phone,
      category_id: category_id || null,
    })

    response.json(contact)

  }

  // Deletar um Registro
  async delete(request, response) {
    const { id } = request.params

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid contact id' })
    }

    await ContactsRepository.delete(id)
    response.sendStatus(204)

  }
}


//SingleTon
module.exports = new ContactController()
