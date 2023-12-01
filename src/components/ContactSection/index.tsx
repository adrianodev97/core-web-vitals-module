'use client'

import { useState } from 'react'
import { util } from '../../util/util'
import { Button } from '../Button'

export const ContactSection = () => {
  const initialValue = { name: '', email: '', company: '', phone: '' }

  const [formData, setFormData] = useState<{
    name: string
    company: string
    email: string
    phone: string
  }>(initialValue)
  const [inputClass, setInputClass] = useState<{
    name: string
    company: string
    email: string
    phone: string
  }>(initialValue)

  const validForm = () => {
    let validation = true

    if (!formData.name) {
      validation = false
      setInputClass((prev) => ({ ...prev, name: 'danger' }))
    }
    if (!formData.company) {
      validation = false
      setInputClass((prev) => ({ ...prev, company: 'danger' }))
    }
    if (!util.validEmail(formData.email)) {
      validation = false
      setInputClass((prev) => ({ ...prev, email: 'danger' }))
    }
    if (!formData.phone || formData.phone.length < 14) {
      validation = false
      setInputClass((prev) => ({ ...prev, phone: 'danger' }))
    }

    return validation
  }

  const sendData = () => {
    if (validForm()) {
      alert(`Nome: ${formData.name}
                \nEmpresa: ${formData.company}
                \nEmail: ${formData.email}
                \nTelefone: ${formData.phone}`)
      setFormData(initialValue)
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-content container">
        <h2>
          Ficou com dúvida? <br />
          Nós entramos em contato com você
        </h2>
        <form className="contact-form">
          <input
            type="text"
            className={['contact-input', inputClass.name].join(' ')}
            value={formData.name || ''}
            onChange={(ev) => {
              setFormData((prev) => ({ ...prev, name: ev.target.value }))
              setInputClass((prev) => ({ ...prev, name: '' }))
              console.log(formData)
            }}
            placeholder="Como gostaria de ser chamado?"
          />
          <input
            type="text"
            className={['contact-input', inputClass.company].join(' ')}
            value={formData.company || ''}
            onChange={(ev) => {
              setFormData((prev) => ({ ...prev, company: ev.target.value }))
              setInputClass((prev) => ({ ...prev, company: '' }))
            }}
            placeholder="Em qual empresa você trabalha?"
          />
          <input
            type="text"
            className={['contact-input', inputClass.email].join(' ')}
            value={formData.email || ''}
            onChange={(ev) => {
              setFormData((prev) => ({ ...prev, email: ev.target.value }))
              setInputClass((prev) => ({ ...prev, email: '' }))
            }}
            placeholder="Digite aqui o seu email"
          />
          <input
            type="text"
            className={['contact-input', inputClass.phone].join(' ')}
            value={formData.phone || ''}
            onChange={(ev) => {
              setFormData((prev) => ({
                ...prev,
                phone: util.maskPhone(ev.target.value),
              }))
              setInputClass((prev) => ({ ...prev, phone: '' }))
            }}
            placeholder="Qual o seu telefone?"
          />
          <Button classStyle="btn-secondary" onclick={sendData}>
            Enviar
          </Button>
        </form>
      </div>
    </section>
  )
}
