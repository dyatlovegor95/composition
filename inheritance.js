class Programmer {
  constructor(name) {
    this.name = name
  }

  code() {
    console.log(`${this.name} is coding...`)
  }
}

class Frontend extends Programmer {
  angular() {
    console.log(`${this.name} is coding... Angular`)
  }
}


class Backend extends Programmer {
  node() {
    console.log(`${this.name} is coding... Node`)
  }
}

class Fullstack extends Programmer {
  node() {
    console.log(`${this.name} is coding... Node`)
  }
}

const programmer = new Programmer('Programmer')
programmer.code()


const front = new Frontend('Front')
front.code()
front.angular()


const back = new Backend('Back')
back.code()
back.node()

