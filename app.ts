import './setup'

export class Hero {
  id: number
  name: string

  constructor(name: string) {
    this.name = name
    this.id = 1
  }

  myName() {
    return this.name
  }
}

debugger
let hero = new Hero('krunal')
console.log(hero.myName())
