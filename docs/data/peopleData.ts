// // ~/data/peopleData.ts
export const columns = [{
  key: 'id',
  label: 'ID'
}, {
  key: 'name',
  label: 'Name'
}, {
  key: 'title',
  label: 'Title'
}, {
  key: 'email',
  label: 'Email'
}, {
  key: 'role',
  label: 'Role'
}]

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
// export const people = [
//   {
//     id: 1,
//     name: 'Lindsay Walton',
//     title: 'Front-end Developer',
//     email: 'lindsay.walton@example.com',
//     role: 'Member'
//   },
//   {
//     id: 2,
//     name: 'Courtney Henry',
//     title: 'Designer',
//     email: 'courtney.henry@example.com',
//     role: 'Admin'
//   },
//   {
//     id: 3,
//     name: 'Tom Cook',
//     title: 'Director of Product',
//     email: 'tom.cook@example.com',
//     role: 'Member'
//   },
//   {
//     id: 4,
//     name: 'Whitney Francis',
//     title: 'Copywriter',
//     email: 'whitney.francis@example.com',
//     role: 'Admin'
//   },
//   {
//     id: 5,
//     name: 'Leonard Krasner',
//     title: 'Senior Designer',
//     email: 'leonard.krasner@example.com',
//     role: 'Owner'
//   },
//   {
//     id: 6,
//     name: 'Floyd Miles',
//     title: 'Principal Designer',
//     email: 'floyd.miles@example.com',
//     role: 'Member'
//   }
//   // Add more data here
// ]

// // const selectedColumns = ref([...columns])

// export const columns = [
//   { key: 'name', label: 'Name' },
//   { key: 'title', label: 'Title' },
//   { key: 'email', label: 'Email' },
//   { key: 'role', label: 'Role' }
//   // Add more columns as needed
// ]
