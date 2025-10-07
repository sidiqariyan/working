import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageCircle, FiX, FiSend, FiUser, FiMail, FiFileText, FiAlertCircle } from 'react-icons/fi'

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm here to help. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [showTicketForm, setShowTicketForm] = useState(false)
  const [ticketData, setTicketData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    priority: 'medium',
    message: ''
  })
  const [ticketSubmitted, setTicketSubmitted] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickResponses = [
    { text: 'Pricing Information', action: 'pricing' },
    { text: 'Technical Support', action: 'support' },
    { text: 'Create Ticket', action: 'ticket' },
    { text: 'Talk to Sales', action: 'sales' }
  ]

  const handleQuickResponse = (action) => {
    let botResponse = ''

    switch(action) {
      case 'pricing':
        botResponse = "You can view our pricing plans at chatriox.com/pricing. We offer flexible plans starting from our Starter tier at $49/month. Would you like me to connect you with our sales team?"
        break
      case 'support':
        botResponse = "I'd be happy to help with technical issues! Please describe your problem or create a support ticket for detailed assistance."
        break
      case 'ticket':
        setShowTicketForm(true)
        botResponse = "Let me help you create a support ticket. Please fill out the form below with your details."
        break
      case 'sales':
        botResponse = "Great! I'll connect you with our sales team. You can also email us at sales@chatriox.com or call +1 (555) 123-4567."
        break
      default:
        botResponse = "How can I help you today?"
    }

    setMessages(prev => [...prev, {
      id: Date.now(),
      text: botResponse,
      sender: 'bot',
      timestamp: new Date()
    }])
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])

    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: "Thank you for your message! Our team will review this and get back to you shortly. Would you like to create a support ticket for faster assistance?",
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
    }, 1000)

    setInputMessage('')
  }

  const handleTicketSubmit = (e) => {
    e.preventDefault()

    console.log('Ticket submitted:', ticketData)

    setTicketSubmitted(true)
    setShowTicketForm(false)

    const successMessage = {
      id: Date.now(),
      text: `Thank you, ${ticketData.name}! Your ticket has been submitted successfully. We'll reach out to ${ticketData.email} within 24 hours. Your ticket ID is #${Math.floor(Math.random() * 10000)}.`,
      sender: 'bot',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, successMessage])

    setTicketData({
      name: '',
      email: '',
      subject: '',
      category: 'general',
      priority: 'medium',
      message: ''
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setTicketData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="position-fixed bg-white rounded-4 shadow-lg overflow-hidden"
            style={{
              bottom: '100px',
              right: '24px',
              width: '380px',
              height: '600px',
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div className="bg-primary text-white p-4 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-white bg-opacity-20 rounded-circle p-2">
                  <FiMessageCircle size={24} />
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Chatriox Support</h6>
                  <small className="opacity-75">We're here to help</small>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="btn btn-link text-white p-0"
              >
                <FiX size={24} />
              </button>
            </div>

            <div className="flex-grow-1 p-3 overflow-auto" style={{ backgroundColor: '#f8f9fa' }}>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mb-3 d-flex ${message.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
                >
                  <div
                    className={`rounded-3 p-3 ${
                      message.sender === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-white border'
                    }`}
                    style={{ maxWidth: '80%' }}
                  >
                    <p className="mb-0 small">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {!showTicketForm && messages.length === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-3"
                >
                  <p className="small text-muted mb-2">Quick actions:</p>
                  <div className="d-grid gap-2">
                    {quickResponses.map((response, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleQuickResponse(response.action)}
                        className="btn btn-outline-primary btn-sm text-start"
                      >
                        {response.text}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {showTicketForm && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-3 p-3 mt-3"
                >
                  <h6 className="fw-bold mb-3">Create Support Ticket</h6>
                  <form onSubmit={handleTicketSubmit}>
                    <div className="mb-3">
                      <label className="form-label small fw-semibold">
                        <FiUser className="me-1" size={14} />
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={ticketData.name}
                        onChange={handleInputChange}
                        className="form-control form-control-sm"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label small fw-semibold">
                        <FiMail className="me-1" size={14} />
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={ticketData.email}
                        onChange={handleInputChange}
                        className="form-control form-control-sm"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label small fw-semibold">
                        <FiFileText className="me-1" size={14} />
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={ticketData.subject}
                        onChange={handleInputChange}
                        className="form-control form-control-sm"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label small fw-semibold">Category</label>
                      <select
                        name="category"
                        value={ticketData.category}
                        onChange={handleInputChange}
                        className="form-select form-select-sm"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="technical">Technical Support</option>
                        <option value="billing">Billing</option>
                        <option value="feature_request">Feature Request</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label small fw-semibold">
                        <FiAlertCircle className="me-1" size={14} />
                        Priority
                      </label>
                      <select
                        name="priority"
                        value={ticketData.priority}
                        onChange={handleInputChange}
                        className="form-select form-select-sm"
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label small fw-semibold">Message *</label>
                      <textarea
                        name="message"
                        value={ticketData.message}
                        onChange={handleInputChange}
                        className="form-control form-control-sm"
                        rows="3"
                        required
                      />
                    </div>

                    <div className="d-flex gap-2">
                      <button type="submit" className="btn btn-primary btn-sm flex-grow-1">
                        Submit Ticket
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowTicketForm(false)}
                        className="btn btn-outline-secondary btn-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="border-top p-3 bg-white">
              <form onSubmit={handleSendMessage} className="d-flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="form-control form-control-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="btn btn-primary btn-sm"
                >
                  <FiSend size={18} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="position-fixed btn btn-primary rounded-circle shadow-lg d-flex align-items-center justify-content-center"
        style={{
          bottom: '24px',
          right: '24px',
          width: '64px',
          height: '64px',
          zIndex: 9998
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiX size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiMessageCircle size={28} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: 0.5 }}
            className="position-fixed bg-primary text-white rounded-pill px-3 py-2 shadow-lg"
            style={{
              bottom: '32px',
              right: '100px',
              zIndex: 9997,
              fontSize: '14px',
              fontWeight: '600'
            }}
          >
            Need help? Chat with us!
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatbotWidget
