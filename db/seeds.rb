Message.delete_all
Message.create!([
  { text: 'Good morning' },
  { text: 'Good afternoon' },
  { text: 'Good evening' }
])
