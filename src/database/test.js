const Database = require('./db')
const createProffy = require('./createProffy')


Database.then( async(db) => {
    //insert data
    proffyValue = {
        name: "Edson Brandon",
        avatar: "https://avatars0.githubusercontent.com/u/49498964?s=460&u=3a5fec303b8ac0d4dd5f676005fce31e2b351344&v=4",
        whatsapp: "21966220582", 
        bio: "Entusiasta das melhores tecnologias de programação.",
    }
    classValue = {
        subject: 1 , 
        cost: "20", 
        //o proffy id vai vir pelo bando de dados pois ele é auto increment
    }
    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220,
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220,
        }
    ]
    //await createProffy(db, {proffyValue, classValue, classScheduleValues})
    //consult data inserted 
    //all proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)
    
    //consultar todas as classes de um professor
    //e trazer junto os dados do professor

    const selectClassesAndProffys = await db.all(` 
        SELECT classes.*, proffys.* 
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    //console.log(selectClassesAndProffys)
    
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule 
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)
    //console.log(selectClassesSchedules)
})