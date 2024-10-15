export const columns: { id: number, key: string, label: string }[] = [
  {
    id: 0,
    key: 'id',
    label: 'ID'
  },
  {
    id: 0,
    key: 'name',
    label: 'Name'
  },
  {
    id: 0,
    key: 'title',
    label: 'Title'
  },
  {
    id: 0,
    key: 'email',
    label: 'Email'
  },
  {
    id: 0,
    key: 'role',
    label: 'Role'
  }
]

export const selectedColumns = ref([...columns])

export const people = [{
  id: 1,
  name: 'Lindsay Walton',
  title: 'Front-end Developer',
  email: 'lindsay.walton@example.com',
  role: 'Member'
}, {
  id: 2,
  name: 'Courtney Henry',
  title: 'Designer',
  email: 'courtney.henry@example.com',
  role: 'Admin'
}, {
  id: 3,
  name: 'Tom Cook',
  title: 'Director of Product',
  email: 'tom.cook@example.com',
  role: 'Member'
}, {
  id: 4,
  name: 'Whitney Francis',
  title: 'Copywriter',
  email: 'whitney.francis@example.com',
  role: 'Admin'
}, {
  id: 5,
  name: 'Leonard Krasner',
  title: 'Senior Designer',
  email: 'leonard.krasner@example.com',
  role: 'Owner'
}, {
  id: 6,
  name: 'Floyd Miles',
  title: 'Principal Designer',
  email: 'floyd.miles@example.com',
  role: 'Member'
}]
