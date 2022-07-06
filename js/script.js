console.log('JS OK')
/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
# MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
# MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
# MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
# BONUS 1:
Trasformare la stringa foto in una immagine effettiva (le trovate in allegato)
# BONUS 2:
Organizzare i singoli membri in card/schede e ispirarci alle grafiche in allegato
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!


// # DATI
Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
Scott Estrada |	Developer            |	scott-estrada-developer.jpg
Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg
*/

// MileStone 0
const team = [
    {
        fullName: 'Wayne Barnett',
        job: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        fullName: 'Angela Caroll',
        job: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        fullName: 'Walter Gordon',
        job: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        fullName: 'Angela Lopez',
        job: 'Social Media Manage',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        fullName: 'Scott Estrada',
        job: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        fullName: 'Barbara Ramos',
        job: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpgs',
    },
]


//MileStone 1

console.table(team);


//MileStone 2
const teamList = document.getElementById('team-list');
let items = '';
for (let i = 0; i < team.length; i++) {
    const teamMember = team[i];
    items += `<li>${teamMember.fullName}, ${teamMember.job}, ${teamMember.image}</li>`
}
teamList.innerHTML = items;