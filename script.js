const names = ['Alex', 'John', 'Tim', 'Jeff', 'Henry', 'Jenny', 'Alexis', 'Sarah', 'Darla']
const adjectives = ['Great', 'Terrible', 'Smelly', 'Honorable', 'Shifty', 'Quick', 'Tenacious']
const noun = ['Slayer', 'Thief', 'Warrior', 'Mage', 'Brute', 'King', 'Peasant', 'Prisoner']

const generateName = () => {
    const adventurerName = []

    let randomNameIndex = Math.floor(Math.random() * names.length)
    let randomAdjectiveIndex = Math.floor(Math.random() * adjectives.length)
    let randomNounIndex = Math.floor(Math.random() * noun.length)

    adventurerName.push(names[randomNameIndex])
    adventurerName.push(`, the ${adjectives[randomAdjectiveIndex]} `)
    adventurerName.push(noun[randomNounIndex])

    return adventurerName.join('')
}

generateName()