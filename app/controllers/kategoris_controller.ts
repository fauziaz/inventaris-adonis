import type { HttpContext } from '@adonisjs/core/http'
import Kategori from '#models/kategori'

export default class KategoriController {
  public async index({ response }: HttpContext) {
    const kategoris = await Kategori.all()
    return response.ok(kategoris)
  }

  public async store({ request, response }: HttpContext) {
    const data = request.only(['nama_kategori'])
    const kategori = await Kategori.create(data)
    return response.created(kategori)
  }

  public async show({ params, response }: HttpContext) {
    const kategori = await Kategori.find(params.id)
    if (!kategori) return response.notFound({ message: 'Kategori tidak ditemukan' })
    return response.ok(kategori)
  }

  public async update({ params, request, response }: HttpContext) {
    const kategori = await Kategori.find(params.id)
    if (!kategori) return response.notFound({ message: 'Kategori tidak ditemukan' })

    kategori.nama_kategori = request.input('nama_kategori') ?? kategori.nama_kategori
    await kategori.save()

    return response.ok(kategori)
  }

  public async destroy({ params, response }: HttpContext) {
    const kategori = await Kategori.find(params.id)
    if (!kategori) return response.notFound({ message: 'Kategori tidak ditemukan' })

    await kategori.delete()
    return response.ok({ message: 'Kategori berhasil dihapus' })
  }
}