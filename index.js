const niceList = document.getElementById("nice-list")
const naughtyList = document.getElementById("naughty-list")
const btn = document.getElementById("btn")
const newName = document.getElementById("input-name")
const character = document.getElementById('character')
const li = document.querySelectorAll("li")
 let idNumber = 4
 btn.addEventListener("click", sort)

const sorteesArr = [
    {
        name: "David",
        hasBeenGood: false,
        id: 1
    },
    {
        name: "Del",
        hasBeenGood: true,
        id: 2
    },
    {
        name: "Valerie",
        hasBeenGood: false,
        id: 3
    },
    {
        name: "Astrid",
        hasBeenGood: true,
        id: 4
    }
]

// Task: 
// - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.

function addNewName(){
    if (newName.value !== ''){
      idNumber ++
      sorteesArr.push({name: newName.value, hasBeenGood: character.checked, id: idNumber})
      character.checked = false
  }
  newName.value =""
}

function sort(){
    niceList.innerHTML = ''
    naughtyList.innerHTML = ''
    addNewName()
    sorteesArr.filter(el => {
        if (el.hasBeenGood){
            niceList.innerHTML += `<li data-id="${el.id}">${el.name}</li>`
        } else naughtyList.innerHTML += `<li data-id="${el.id}">${el.name}</li>`
    })
     niceList.querySelectorAll('li').forEach(list => {
      list.addEventListener("click", changeCharacter)
})
     naughtyList.querySelectorAll('li').forEach(list => {
      list.addEventListener("click", changeCharacter)
})
}
 

function changeCharacter() {

const select = sorteesArr.find( el => el.id === Number(event.target.dataset.id))
    select.hasBeenGood = !select.hasBeenGood
    sort()
    }
    
   

 

// Stretch goals:
// - Add the option to add new names to the sorteesArr.
// - Make it possible to switch people to the other list.

