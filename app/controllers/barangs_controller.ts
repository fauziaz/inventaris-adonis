import type { HttpContext } from '@adonisjs/core/http'
import Barang from '#models/barang'
export default class BarangsController {
  public async index({ view }: HttpContext) {
    const barangs = await Barang.query().orderBy('nama', 'asc')
    return view.render('barangs/index', { barangs })
  }

  public async create({ view }: HttpContext) {
    return view.render('barangs/create')
  }


  public async store({ request, response, session }: HttpContext) {
    const payload = request.only(['nama', 'kode_barang', 'stok'])
    await Barang.create(payload)
    session.flash('notification', { type: 'success', message: 'Barang berhasil ditambahkan.' })
    return response.redirect().toRoute('barangs.index')
  }


  public async edit({ params, view, response, session }: HttpContext) {
    const barang = await Barang.find(params.id)
    if (!barang) {
      session.flash('notification', { type: 'danger', message: 'Barang tidak ditemukan.' })
      return response.redirect().toRoute('barangs.index')
    }
    return view.render('barangs/edit', { barang })
  }

  public async update({ params, request, response, session }: HttpContext) {
    const barang = await Barang.find(params.id)
    if (!barang) {
      session.flash('notification', { type: 'danger', message: 'Barang tidak ditemukan.' })
      return response.redirect().toRoute('barangs.index')
    }
    const payload = request.only(['nama', 'kode_barang', 'stok'])
    barang.merge(payload)
    await barang.save()
    session.flash('notification', { type: 'success', message: 'Barang berhasil diperbarui.' })
    return response.redirect().toRoute('barangs.index')
  }


  public async destroy({ params, response, session }: HttpContext) {
    const barang = await Barang.find(params.id)
    if (!barang) {
      session.flash('notification', { type: 'danger', message: 'Barang tidak ditemukan.' })
    } else {
      await barang.delete()
      session.flash('notification', { type: 'success', message: 'Barang berhasil dihapus.' })
    }
    return response.redirect().toRoute('barangs.index')
  }
}