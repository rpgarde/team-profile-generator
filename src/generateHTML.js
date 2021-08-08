// Each employee is a template literal / div 

// loop through the array (map) and then add a template depending on what it is

const generateHeader = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <title>Your Active Employees</title>
</head>
<body>
    <div class="bg-primary p-5 vw-100">
        <h1 class="display-4 fw-bold text-light text-center">This is your team!</h1>
    </div>
    <div class="container d-flex flex-wrap justify-content-evenly">
    `
}

const generateFooter = () => {
    return `</div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
</body>
</html>`
}

const generateManager = (data) => {
    return `
    <div class="card m-3" style="width: 18rem;">
    <div class="card-body bg-primary">
        <h5 class="card-title text-light">${data.name}</h5>
        <h6 class="card-subtitle mb-2 text-light">💼 Manager</h6>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${data.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${data.email}" class="card-link">${data.email}</a></li>
        <li class="list-group-item">Office number: ${data.officeNumber}</li>
    </ul>
</div>
`
}

const generateEngineer = (data) => {
    return `
        <div class="card m-3" style="width: 18rem;">
        <div class="card-body bg-primary">
            <h5 class="card-title text-light">${data.name}</h5>
            <h6 class="card-subtitle mb-2 text-light">🛠 Engineer</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${data.email}" class="card-link">${data.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://www.github.com/${data.github}" class="card-link" target="_blank">${data.github}</a></li>
        </ul>
    </div>
    `
}

const generateIntern = (data) => {
    return `
            <div class="card m-3" style="width: 18rem;">
            <div class="card-body bg-primary">
                <h5 class="card-title text-light">${data.name}</h5>
                <h6 class="card-subtitle mb-2 text-light">📚 Intern</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${data.email}" class="card-link">${data.email}</a></li>
                <li class="list-group-item">School: ${data.school}</li>
            </ul>
        </div>
        `
}


const buildCards = (data) => {
    let cards = ''
    data.forEach((i)=>{
        if(i.role == "Manager"){
            cards += generateManager(i)
        }
        else if (i.role == "Engineer"){
            cards += generateEngineer(i)
        }
        else{
            cards += generateIntern(i)
        }
    })
    return cards
}

const generateHTML = (data) => {
    return `${generateHeader()}
    ${buildCards(data)}
    ${generateFooter()}
    `
}


// const generateHTML = (data) => {
//     return `${generateHeader()}
//     ${generateManager(data[0])}
//     ${generateFooter()}
//     `
// }


module.exports = generateHTML