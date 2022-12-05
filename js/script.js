// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe.

// Wayne Barnett  Founder & CEO     wayne-barnett-founder-ceo.jpg
// Angela Caroll  Chief Editor      angela-caroll-chief-editor.jpg
// Walter Gordon  Office Manager    walter-gordon-office-manager.jpg
// Angela Lopez   Social Media Manager  angela-lopez-social-media-manager.jpg
// Scott Estrada  Developer         scott-estrada-developer.jpg
// Barbara Ramos  Graphic Designer  barbara-ramos-graphic-designer.jpg

/**
 *  1. - Creo array con oggetti con info
 *  2. - Stampo in console tutti gli oggetti
 *  3. - Stampo nel domgli oggetti
 */

// 1.

const teamMember = [
    {
        name : 'Wayne Barnett',
        role : 'Founder & CEO',
        photo : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        photo : 'angela-caroll-chief-editor.jpg'
    },
    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        photo : 'walter-gordon-office-manager.jpg'
    },
    {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        photo : 'angela-lopez-social-media-manager.jpg'
    },
    {
        name : 'Scott Estrada',
        role : 'Developer',
        photo : 'scott-estrada-developer.jpg'
    },
    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        photo : 'barbara-ramos-graphic-designer.jpg'
    }
]

// 2.

for ( let i = 0; i < teamMember.length; i++) {
    console.log('Name = ' + teamMember[i].name);
    console.log('role = ' + teamMember[i].role);
    console.log('photo = ' + teamMember[i].photo);
}
