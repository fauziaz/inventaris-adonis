import type { HttpContext } from '@adonisjs/core/http'
import Penghapusan from '#models/penghapusan'

export default class PenghapusanController {
  public async index({ response }: HttpContext) {
    const penghapusans = await Penghapusan.all()
    return response.ok(penghapusans)
  }

  public async store({ response }: HttpContext) {
    // Jika tidak ada field selain timestamp, maka cukup buat kosong
    const penghapusan = await Penghapusan.create({})
    return response.created(penghapusan)
  }

  public async show({ params, response }: HttpContext) {
    const penghapusan = await Penghapusan.find(params.id)
    if (!penghapusan) return response.notFound({ message: 'Data penghapusan tidak ditemukan' })
    return response.ok(penghapusan)
  }

  public async update({ params, response }: HttpContext) {
    const penghapusan = await Penghapusan.find(params.id)
    if (!penghapusan) return response.notFound({ message: 'Data penghapusan tidak ditemukan' })

    // Karena tidak ada kolom yang bisa diubah, kita hanya perbarui updatedAt secara otomatis
    await penghapusan.save()
    return response.ok(penghapusan)
  }

  public async destroy({ params, response }: HttpContext) {
    const penghapusan = await Penghapusan.find(params.id)
    if (!penghapusan) return response.notFound({ message: 'Data penghapusan tidak ditemukan' })

    await penghapusan.delete()
    return response.ok({ message: 'Data penghapusan berhasil dihapus' })
  }
}