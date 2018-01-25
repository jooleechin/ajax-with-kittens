axios.get('http://localhost:3000/cats')
  .then(result => {
//    console.log(result)
//    it's in console that has 
    
    const cats = result.data.data //data.data is because in app.js in the cat api, data is an obj
    const items = cats.reduce((acc, cat) => acc + `<li>${cat.name}</li>`, '')
    //string that is defined under items and taking each prop of name and creating list item from that string
    document.querySelector('ul').innerHTML = items

//    let string = ''
//    for (let cats of cats) {
//        const newCatEl = `<li>${cat.name}</li>`
//        string += newCat
//    }
//    document.querySelector('ul').innerHTML = string
    //this is the same thing as the top part

  })
  .catch(err => {
    console.log(err)
    console.log('Do not worry, everything is fine.')
  })

const newCatForm = document.querySelector('#newCatForm')
newCatForm.style.display = 'none'
var createButton = document.querySelector('#posts-create')
var toggle = false
createButton.addEventListener('click', function() {
    if (toggle) {
        newCatForm.style.display = 'inline'
        toggle = false
    } else {
        newCatForm.style.display = 'none'
        toggle = true
    }
})

newCatForm.addEventListener('submit', function(e) {
    e.preventDefault() //so that the page doesn't refresh
    const inputValue = document.querySelector('#newCatInput').value
    console.log(inputValue)
    const newCat = {
        name: inputValue
    }
    axios.post('http://localhost:3000/cats', newCat)
        .then((result) => {
        console.log('ALL GOOD', result)
    })
        .catch((err) => {
        console.log(err)
    })
})











