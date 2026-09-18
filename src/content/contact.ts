/* Replaces newProject.ts and the copy half of the old ContactModal.
   The form is now an inline section, not a modal. */
export const contact = {
  heading: { kicker: '05 / CONTACT', title: 'Have a project in mind?' },
  text: 'Tell me what you are building and where it is stuck. I will reply with a straight read on scope and next steps.',
  labels: { email: 'EMAIL', phone: 'PHONE' },
  form: {
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    messagePlaceholder: 'What are you building, and where is it stuck?',
    submitLabel: 'Send',
    submitPendingLabel: 'Sending…',
  },
  thanks: {
    title: 'Thanks for reaching out.',
    body: 'I read every message and will reply as soon as I can.',
    signature: 'Johnathan Bryce',
  },
} as const
