import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Lokasi extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nama_lokasi: string
  @column()
  declare gedung: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}