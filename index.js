console.log('funguju!');

const HTML_value = prompt("Zadej svoji úroveň HTML hodnotou 0-100")
const CSS_value = prompt("Zadej svoji úroveň CSV hodnotou 0-100")
const JavaScript_value = prompt("Zadej svoji úroveň JavaScript hodnotou 0-100")

const updateSkill = (id, user_skill_value) => {
    let skillId = '#skill' + id
    let skillValue = '.skill__value'
    let skillProgress = '.skill__progress'
    
    let skill1_value = document.querySelector(`${skillId} ${skillValue}`)
    let skill1_progress = document.querySelector(`${skillId} ${skillProgress}`)
    skill1_value.textContent = user_skill_value +  " / 100"
    skill1_progress.style.width = user_skill_value + "%"
   }
   
const update1 = updateSkill("1", HTML_value)
const update2 = updateSkill("2",CSS_value)
const update3 = updateSkill("3",JavaScript_value)

