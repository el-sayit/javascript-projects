//TODO: Add Your Code Below
window.addEventListener('load', () => {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(response =>{
        response.json().then(json =>{
            // console.log(json[0]);                 
            const div = document.getElementById('container');
            let result = '';
            
            for(let i =0; i<json.length; i++){
                       
            result += 
            `<div class="astronaut">
            <div class="bio">
                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                <ul>
                <li>Hours in space: ${json[i].hoursInSpace}</li>
                <li>Active: ${json[i].active}</li>
                <li>Skills: ${json[i].skills}</li>
                </ul>
            </div>
            <img class="avatar" src="${json[i].picture}">
        </div>`
           
        div.innerHTML = result;
    
    }
        
    })
        
    })
})