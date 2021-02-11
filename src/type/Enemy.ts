import { Item } from "../data/Item";
import { ItemType } from "../data/ItemType";

export class Enemy extends Item {
  type = ItemType.ENEMY
  subtype!: number

  name!: string
  hp!: number
  atk!: number
  def!: number
  exp!: number
  gold!: number
  ability!: string
  skill!: {
    beforeBattle: string,
    attack: string
    defense: string
    afterBattle: string
  }
}
