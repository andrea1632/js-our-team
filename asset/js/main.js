let container = document.getElementById("contenitore");
var team = 
[
    {
        'nome' : 'Wayne Barnett',
        'ruolo' : 'Founder & CEO',
        'photo' : 'wayne-barnett-founder-ceo.jpg'
    },

    {
        'nome' : 'Angela Carroll',
        'ruolo' : 'Chief Editor',
        'photo' : 'angela-caroll-chief-editor.jpg'
    },

    {
        'nome' : 'Walter Gordon',
        'ruolo' : 'Office Manager',
        'photo' : 'walter-gordon-office-manager.jpg'
    },

    {
        'nome' : 'Angela Lopez',
        'ruolo' : 'Social Media Manager',
        'photo' : 'angela-lopez-social-media-manager.jpg'
    },

    {
        'nome' : 'Scott Estrada',
        'ruolo' : 'Developer',
        'photo' : 'scott-estrada-developer.jpg'
    },

    {
        'nome' : 'Barbara Ramos',
        'ruolo' : 'Graphic Designer',
        'photo' : 'barbara-ramos-graphic-designer.jpg'
    }
];
//ciclo for per ciclare l'array team
for (i = 0; i <= team.length; i++){
    for (var key in team[i]) {
        console.log(`${key}: ${team[i][key]}`)        
    }
    container.innerHTML += `
        
        <div class="card col-3 mx-2 my-4">
            <img src="./asset/img/${team[i]['photo']}" class="card-img-top" alt="pic of ${team[i]['name']}">
                <div class="card-body">
                    <h5 class="card-title text-center">${team[i]['nome']}</h5>
                    <p class="card-text text-center">${team[i]['ruolo']}</p>
                </div>
        </div>

        `
}
console.log(team[0]['photo'])