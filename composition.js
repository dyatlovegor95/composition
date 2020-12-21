// Функциональный подход через composition API

function createProgrammer(name) {
  const programmer = {name}
  return {
    ...programmer,
    ...canCode(programmer)
  }
}


function canCode({ name }) {
  return {
    code: () => console.log(`${name} is coding...`)
  }
}

function canAngular({ name }) {
  return {
    angular: () => console.log(`${name} is coding... Angular`)
  }
}

function canNode({ name }) {
  return {
    node: () => console.log(`${name} is coding... Node`)
  }
}


function createFrontend(name) {
  const programmer = createProgrammer(name)

  return {
    ...programmer,
    ...canAngular(programmer)
  }
}

function createBackend(name) {
  const programmer = createProgrammer(name)

  return {
    ...programmer,
    ...canNode(programmer)
  }
}

function createFullstack(name) {
  const programmer = createProgrammer(name)

  return {
    ...programmer,
    ...canNode(programmer),
    ...canAngular(programmer)
  }
}


const programmer = createProgrammer('Programmer')
programmer.code()

const front = createFrontend('Front')
front.code()
front.angular()


const back = createBackend('Back')
back.code()
back.node()

const full = createFullstack('Full')
full.code()
full.node()
full.angular()