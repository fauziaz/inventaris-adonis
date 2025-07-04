import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Barang extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nama: string
  @column()
  declare kode_barang: string
  @column()
  declare stok: number
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}