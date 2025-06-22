import type { HttpContext } from '@adonisjs/core/http'
import RiwayatMutasi from '#models/riwayat_mutasi'

export default class RiwayatMutasiController {
  public async index({ response }: HttpContext) {
    const riwayats = await RiwayatMutasi.all()
    return response.ok(riwayats)
  }

  public async store({ request, response }: HttpContext) {
    const data = request.only(['barangId', 'lokasiAsalId', 'lokasiTujuanId', 'jumlah'])
    const riwayat = await RiwayatMutasi.create(data)
    return response.created(riwayat)
  }

  public async show({ params, response }: HttpContext) {
    const riwayat = await RiwayatMutasi.find(params.id)
    if (!riwayat) return response.notFound({ message: 'Riwayat mutasi tidak ditemukan' })
    return response.ok(riwayat)
  }

  public async update({ params, request, response }: HttpContext) {
    const riwayat = await RiwayatMutasi.find(params.id)
    if (!riwayat) return response.notFound({ message: 'Riwayat mutasi tidak ditemukan' })

    riwayat.barangId = request.input('barangId') ?? riwayat.barangId
    riwayat.lokasiAsalId = request.input('lokasiAsalId') ?? riwayat.lokasiAsalId
    riwayat.lokasiTujuanId = request.input('lokasiTujuanId') ?? riwayat.lokasiTujuanId
    riwayat.jumlah = request.input('jumlah') ?? riwayat.jumlah

    await riwayat.save()
    return response.ok(riwayat)
  }

  public async destroy({ params, response }: HttpContext) {
    const riwayat = await RiwayatMutasi.find(params.id)
    if (!riwayat) return response.notFound({ message: 'Riwayat mutasi tidak ditemukan' })

    await riwayat.delete()
    return response.ok({ message: 'Riwayat mutasi berhasil dihapus' })
  }
}