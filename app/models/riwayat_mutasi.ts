import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class RiwayatMutasi extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare barangId: number
  @column()
  declare lokasiAsalId: string
  @column()
  declare lokasiTujuanId: string
  @column()
  declare jumlah: number
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}