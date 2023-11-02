//Code Your Solution Below
window.addEventListener('load', function(){
    let form = document.querySelector('form')
    form.addEventListener('submit', function(event){
      let testName = document.querySelector('input[name=testName]')
      let testDate = document.querySelector('input[name=testDate')
      let boosterNumber = document.querySelector('input[name=boosterCount')
      if (testName.value === '' || testDate.value === '' || boosterNumber ===''){
          alert('All fields are required')
        event.preventDefault();
      }
    })
  })