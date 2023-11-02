//Code Your Solution Below
window.addEventListener('load', function(){
    let form = document.querySelector('form')
    form.addEventListener('submit', function(){
      let userInputs = document.querySelectorAll('input[name=rocketType]')
      console.log(userInputs.name)
    })
  })