import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiInbox,
  FiClock,
  FiCheckCircle,
  FiAlertCircle,
  FiSearch,
  FiFilter,
  FiX,
  FiMessageSquare,
  FiUser,
  FiMail,
  FiCalendar
} from 'react-icons/fi'
import SEO from '../utils/SEO'

const mockTickets = [
  {
    id: '10001',
    name: 'John Smith',
    email: 'john@example.com',
    subject: 'Email delivery issues',
    category: 'technical',
    priority: 'high',
    status: 'open',
    created: '2025-10-01',
    message: 'Having issues with email deliverability on bulk campaigns.'
  },
  {
    id: '10002',
    name: 'Sarah Johnson',
    email: 'sarah@company.com',
    subject: 'Billing question about upgrade',
    category: 'billing',
    priority: 'medium',
    status: 'in_progress',
    created: '2025-10-02',
    message: 'Want to upgrade to Enterprise plan, need pricing details.'
  },
  {
    id: '10003',
    name: 'Michael Chen',
    email: 'michael@startup.io',
    subject: 'Feature request: API webhooks',
    category: 'feature_request',
    priority: 'low',
    status: 'open',
    created: '2025-10-02',
    message: 'Would love to see webhook support for campaign events.'
  },
  {
    id: '10004',
    name: 'Emily Davis',
    email: 'emily@agency.com',
    subject: 'WhatsApp integration setup',
    category: 'technical',
    priority: 'urgent',
    status: 'open',
    created: '2025-10-03',
    message: 'Need help setting up WhatsApp Business API integration.'
  },
  {
    id: '10005',
    name: 'David Wilson',
    email: 'david@enterprise.com',
    subject: 'Dashboard analytics not loading',
    category: 'technical',
    priority: 'high',
    status: 'resolved',
    created: '2025-09-30',
    message: 'Analytics dashboard shows blank screen on Chrome.'
  }
]

export default function AdminTickets() {
  const [tickets, setTickets] = useState(mockTickets)
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterPriority, setFilterPriority] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const statusColors = {
    open: 'primary',
    in_progress: 'warning',
    resolved: 'success',
    closed: 'secondary'
  }

  const priorityColors = {
    low: 'info',
    medium: 'primary',
    high: 'warning',
    urgent: 'danger'
  }

  const categoryIcons = {
    technical: FiAlertCircle,
    billing: FiInbox,
    feature_request: FiMessageSquare,
    general: FiInbox
  }

  const stats = {
    open: tickets.filter(t => t.status === 'open').length,
    in_progress: tickets.filter(t => t.status === 'in_progress').length,
    resolved: tickets.filter(t => t.status === 'resolved').length,
    urgent: tickets.filter(t => t.priority === 'urgent').length
  }

  const filteredTickets = tickets.filter(ticket => {
    const matchesStatus = filterStatus === 'all' || ticket.status === filterStatus
    const matchesPriority = filterPriority === 'all' || ticket.priority === filterPriority
    const matchesSearch =
      ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.email.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesStatus && matchesPriority && matchesSearch
  })

  const handleStatusChange = (ticketId, newStatus) => {
    setTickets(tickets.map(t =>
      t.id === ticketId ? { ...t, status: newStatus } : t
    ))
  }

  const handlePriorityChange = (ticketId, newPriority) => {
    setTickets(tickets.map(t =>
      t.id === ticketId ? { ...t, priority: newPriority } : t
    ))
  }

  return (
    <>
      <SEO
        title="Admin Tickets - Chatriox"
        description="Manage support tickets and customer inquiries"
      />

      <section className="bg-light py-5" style={{ paddingTop: '120px', minHeight: '100vh' }}>
        <div className="container-fluid px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h1 className="display-6 fw-bold text-dark mb-2">Support Tickets</h1>
                <p className="text-muted mb-0">Manage customer support requests</p>
              </div>
            </div>

            <div className="row g-3 mb-4">
              <div className="col-md-3">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-3 p-4 shadow-sm border-start border-primary border-4"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="text-muted mb-1 small">Open Tickets</p>
                      <h3 className="fw-bold text-dark mb-0">{stats.open}</h3>
                    </div>
                    <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                      <FiInbox className="text-primary" size={24} />
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="col-md-3">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-3 p-4 shadow-sm border-start border-warning border-4"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="text-muted mb-1 small">In Progress</p>
                      <h3 className="fw-bold text-dark mb-0">{stats.in_progress}</h3>
                    </div>
                    <div className="bg-warning bg-opacity-10 rounded-circle p-3">
                      <FiClock className="text-warning" size={24} />
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="col-md-3">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-3 p-4 shadow-sm border-start border-success border-4"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="text-muted mb-1 small">Resolved</p>
                      <h3 className="fw-bold text-dark mb-0">{stats.resolved}</h3>
                    </div>
                    <div className="bg-success bg-opacity-10 rounded-circle p-3">
                      <FiCheckCircle className="text-success" size={24} />
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="col-md-3">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-3 p-4 shadow-sm border-start border-danger border-4"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="text-muted mb-1 small">Urgent</p>
                      <h3 className="fw-bold text-dark mb-0">{stats.urgent}</h3>
                    </div>
                    <div className="bg-danger bg-opacity-10 rounded-circle p-3">
                      <FiAlertCircle className="text-danger" size={24} />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="bg-white rounded-3 shadow-sm p-4 mb-4">
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="input-group">
                    <span className="input-group-text bg-transparent">
                      <FiSearch />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search tickets..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-3">
                  <select
                    className="form-select"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                  >
                    <option value="all">All Status</option>
                    <option value="open">Open</option>
                    <option value="in_progress">In Progress</option>
                    <option value="resolved">Resolved</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>

                <div className="col-md-3">
                  <select
                    className="form-select"
                    value={filterPriority}
                    onChange={(e) => setFilterPriority(e.target.value)}
                  >
                    <option value="all">All Priorities</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>

                <div className="col-md-2">
                  <button
                    className="btn btn-outline-secondary w-100"
                    onClick={() => {
                      setFilterStatus('all')
                      setFilterPriority('all')
                      setSearchQuery('')
                    }}
                  >
                    <FiX className="me-2" />
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="row g-4">
            <div className="col-lg-5">
              <div className="bg-white rounded-3 shadow-sm" style={{ maxHeight: '700px', overflowY: 'auto' }}>
                {filteredTickets.map((ticket, index) => {
                  const CategoryIcon = categoryIcons[ticket.category]
                  return (
                    <motion.div
                      key={ticket.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ backgroundColor: '#f8f9fa' }}
                      className={`p-4 border-bottom cursor-pointer ${selectedTicket?.id === ticket.id ? 'bg-primary bg-opacity-10' : ''}`}
                      onClick={() => setSelectedTicket(ticket)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <div className="d-flex gap-2 align-items-center">
                          <div className={`bg-${statusColors[ticket.status]} bg-opacity-10 rounded-circle p-2`}>
                            <CategoryIcon className={`text-${statusColors[ticket.status]}`} size={18} />
                          </div>
                          <div>
                            <h6 className="mb-0 fw-bold text-dark">{ticket.subject}</h6>
                            <small className="text-muted">#{ticket.id}</small>
                          </div>
                        </div>
                        <span className={`badge bg-${priorityColors[ticket.priority]} text-uppercase`} style={{ fontSize: '10px' }}>
                          {ticket.priority}
                        </span>
                      </div>

                      <div className="d-flex gap-3 mb-2 small text-muted">
                        <span><FiUser size={14} className="me-1" />{ticket.name}</span>
                        <span><FiCalendar size={14} className="me-1" />{ticket.created}</span>
                      </div>

                      <div className="d-flex gap-2">
                        <span className={`badge bg-${statusColors[ticket.status]} bg-opacity-20 text-${statusColors[ticket.status]}`}>
                          {ticket.status.replace('_', ' ')}
                        </span>
                        <span className="badge bg-secondary bg-opacity-20 text-secondary">
                          {ticket.category.replace('_', ' ')}
                        </span>
                      </div>
                    </motion.div>
                  )
                })}

                {filteredTickets.length === 0 && (
                  <div className="p-5 text-center">
                    <FiInbox className="text-muted mb-3" size={48} />
                    <p className="text-muted">No tickets found</p>
                  </div>
                )}
              </div>
            </div>

            <div className="col-lg-7">
              {selectedTicket ? (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-3 shadow-sm p-4"
                >
                  <div className="d-flex justify-content-between align-items-start mb-4">
                    <div>
                      <h4 className="fw-bold text-dark mb-2">{selectedTicket.subject}</h4>
                      <p className="text-muted mb-0">Ticket #{selectedTicket.id}</p>
                    </div>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => setSelectedTicket(null)}
                    >
                      <FiX />
                    </button>
                  </div>

                  <div className="bg-light rounded-3 p-3 mb-4">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold text-muted">Status</label>
                        <select
                          className="form-select form-select-sm"
                          value={selectedTicket.status}
                          onChange={(e) => handleStatusChange(selectedTicket.id, e.target.value)}
                        >
                          <option value="open">Open</option>
                          <option value="in_progress">In Progress</option>
                          <option value="resolved">Resolved</option>
                          <option value="closed">Closed</option>
                        </select>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label small fw-semibold text-muted">Priority</label>
                        <select
                          className="form-select form-select-sm"
                          value={selectedTicket.priority}
                          onChange={(e) => handlePriorityChange(selectedTicket.id, e.target.value)}
                        >
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                          <option value="urgent">Urgent</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h6 className="fw-bold mb-3">Customer Information</h6>
                    <div className="d-flex flex-column gap-2">
                      <div className="d-flex align-items-center gap-2">
                        <FiUser className="text-muted" />
                        <span className="text-dark">{selectedTicket.name}</span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <FiMail className="text-muted" />
                        <a href={`mailto:${selectedTicket.email}`} className="text-primary">
                          {selectedTicket.email}
                        </a>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <FiCalendar className="text-muted" />
                        <span className="text-dark">Created: {selectedTicket.created}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h6 className="fw-bold mb-3">Message</h6>
                    <div className="bg-light rounded-3 p-3">
                      <p className="mb-0 text-dark">{selectedTicket.message}</p>
                    </div>
                  </div>

                  <div>
                    <h6 className="fw-bold mb-3">Reply to Customer</h6>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Type your response..."
                      />
                    </div>
                    <div className="d-flex gap-2">
                      <button className="btn btn-primary">
                        <FiMessageSquare className="me-2" size={16} />
                        Send Reply
                      </button>
                      <button className="btn btn-outline-success">
                        Send & Resolve
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="bg-white rounded-3 shadow-sm p-5 text-center">
                  <FiMessageSquare className="text-muted mb-3" size={64} />
                  <h5 className="text-dark mb-2">Select a ticket to view details</h5>
                  <p className="text-muted">Choose a ticket from the list to manage it</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
