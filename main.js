axios.get('http://localhost:3000/cats')
  .then(result => {
    const cats = result.data.data
    const items = cats.reduce((acc, cat) => `<li>${cat.name}</li>`, '')
    document.querySelector('ul').innerHTML = items
  })
  .catch(err => {
    console.log('Do not worry, everything is fine.')
  })
