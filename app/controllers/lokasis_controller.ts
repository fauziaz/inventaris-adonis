import type { HttpContext } from '@adonisjs/core/http'
import Lokasi from '#models/lokasi'

export default class LokasisController {

  public async index({ view }: HttpContext) {
    const lokasis = await Lokasi.query().orderBy('nama_lokasi', 'asc')
    return view.render('lokasis/index', { lokasis })
  }

  public async create({ view }: HttpContext) {
    return view.render('lokasis/create')
  }


  public async store({ request, response, session }: HttpContext) {
    const payload = request.only(['nama_lokasi', 'gedung'])
    await Lokasi.create(payload)
    session.flash('notification', { type: 'success', message: 'Lokasi berhasil ditambahkan.' })
    return response.redirect().toRoute('lokasis.index')
  }

  /**
   * Form untuk edit lokasi
   */
  public async edit({ params, view, response, session }: HttpContext) {
    const lokasi = await Lokasi.find(params.id)
    if (!lokasi) {
      session.flash('notification', { type: 'danger', message: 'Lokasi tidak ditemukan.' })
      return response.redirect().toRoute('lokasis.index')
    }
    return view.render('lokasis/edit', { lokasi })
  }

  /**
   * Update data lokasi
   */
  public async update({ params, request, response, session }: HttpContext) {
    const lokasi = await Lokasi.find(params.id)
    if (!lokasi) {
      session.flash('notification', { type: 'danger', message: 'Lokasi tidak ditemukan.' })
      return response.redirect().toRoute('lokasis.index')
    }

    const payload = request.only(['nama_lokasi', 'gedung'])
    lokasi.merge(payload)
    await lokasi.save()

    session.flash('notification', { type: 'success', message: 'Lokasi berhasil diperbarui.' })
    return response.redirect().toRoute('lokasis.index')
  }

  /**
   * Hapus lokasi
   */
  public async destroy({ params, response, session }: HttpContext) {
    const lokasi = await Lokasi.find(params.id)
    if (!lokasi) {
      session.flash('notification', { type: 'danger', message: 'Lokasi tidak ditemukan.' })
    } else {
      await lokasi.delete()
      session.flash('notification', { type: 'success', message: 'Lokasi berhasil dihapus.' })
    }
    return response.redirect().toRoute('lokasis.index')
  }

}