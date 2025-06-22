import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'riwayat_mutasis'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('barang_id').unsigned().references('id').inTable('barangs').onDelete
      table.string('asal')
      table.string('tujuan')
      table.string('status').defaultTo('mutasi')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}