/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

/**
 * Riwayat Mutasi
 */
router.get('/riwayat-mutasi', 'RiwayatMutasiController.index').as('riwayat-mutasi.index')
router.get('/riwayat-mutasi/create', 'RiwayatMutasiController.create').as('riwayat-mutasi.create')
router.post('/riwayat-mutasi', 'RiwayatMutasiController.store').as('riwayat-mutasi.store')
router.get('/riwayat-mutasi/:id/edit', 'RiwayatMutasiController.edit').as('riwayat-mutasi.edit')
router.put('/riwayat-mutasi/:id', 'RiwayatMutasiController.update').as('riwayat-mutasi.update')
router.delete('/riwayat-mutasi/:id', 'RiwayatMutasiController.destroy').as('riwayat-mutasi.destroy')

/**
 * Barang
 */
router.get('/barang', 'BarangController.index').as('barang.index')
router.get('/barang/create', 'BarangController.create').as('barang.create')
router.post('/barang', 'BarangController.store').as('barang.store')
router.get('/barang/:id/edit', 'BarangController.edit').as('barang.edit')
router.put('/barang/:id', 'BarangController.update').as('barang.update')
router.delete('/barang/:id', 'BarangController.destroy').as('barang.destroy')

/**
 * Kategori
 */
router.get('/kategori', 'KategoriController.index').as('kategori.index')
router.get('/kategori/create', 'KategoriController.create').as('kategori.create')
router.post('/kategori', 'KategoriController.store').as('kategori.store')
router.get('/kategori/:id/edit', 'KategoriController.edit').as('kategori.edit')
router.put('/kategori/:id', 'KategoriController.update').as('kategori.update')
router.delete('/kategori/:id', 'KategoriController.destroy').as('kategori.destroy')

/**
 * Penghapusan
 */
router.get('/penghapusan', 'PenghapusanController.index').as('penghapusan.index')
router.get('/penghapusan/create', 'PenghapusanController.create').as('penghapusan.create')
router.post('/penghapusan', 'PenghapusanController.store').as('penghapusan.store')
router.get('/penghapusan/:id/edit', 'PenghapusanController.edit').as('penghapusan.edit')
router.put('/penghapusan/:id', 'PenghapusanController.update').as('penghapusan.update')
router.delete('/penghapusan/:id', 'PenghapusanController.destroy').as('penghapusan.destroy')

/**
 * Lokasi
 */
router.get('/lokasi', 'LokasiController.index').as('lokasi.index')
router.get('/lokasi/create', 'LokasiController.create').as('lokasi.create')
router.post('/lokasi', 'LokasiController.store').as('lokasi.store')
router.get('/lokasi/:id/edit', 'LokasiController.edit').as('lokasi.edit')
router.put('/lokasi/:id', 'LokasiController.update').as('lokasi.update')
router.delete('/lokasi/:id', 'LokasiController.destroy').as('lokasi.destroy')
