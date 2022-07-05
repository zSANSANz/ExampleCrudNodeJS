# ExpressCRUD

try to execute this sql to nodejs


CREATE TABLE `tbl_semester` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `semester` int,
  `tahun_ajaran` varchar(255)
);

CREATE TABLE `tbl_wali_kelas` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `kelas` int,
  `nama` varchar(255),
  `tempat_tanggal_lahir_tempat` varchar(255),
  `tempat_tanggal_lahir_tgl` varchar(255),
  `tempat_tanggal_lahir_bln` varchar(255),
  `tempat_tanggal_lahir_tahun` varchar(255),
  `keluar` varchar(255),
  `created_at` timestamp
);

CREATE TABLE `tbl_mudir` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nama` varchar(255),
  `tempat_tanggal_lahir_tempat` varchar(255),
  `tempat_tanggal_lahir_tgl` varchar(255),
  `tempat_tanggal_lahir_bln` varchar(255),
  `tempat_tanggal_lahir_tahun` varchar(255),
  `keluar` varchar(255),
  `created_at` timestamp
);

CREATE TABLE `tbl_pelajar` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `kelas` int,
  `nomor_induk_murid_thn` varchar(255),
  `nomor_induk_murid_kls` varchar(255),
  `nomor_induk_murid_lp` varchar(255),
  `nomor_induk_murid_nomor` varchar(255),
  `nama` varchar(255),
  `bin_bintu` varchar(255),
  `tempat_tanggal_lahir_tempat` varchar(255),
  `tempat_tanggal_lahir_tgl` varchar(255),
  `tempat_tanggal_lahir_bln` varchar(255),
  `tempat_tanggal_lahir_tahun` varchar(255),
  `keluar` varchar(255),
  `jumlah` varchar(255),
  `nomor_kelulusan_thn` varchar(255),
  `nomor_kelulusan_angk` varchar(255),
  `nomor_kelulusan_no` varchar(255),
  `created_at` timestamp
);

CREATE TABLE `tbl_pelajaran` (
  `kode` int PRIMARY KEY,
  `nama_pelajaran` varchar(255),
  `keterampilan_atau_penalaran_atau_penghayatan` int,
  `satuan_pelajaran` int,
  `created_at` timestamp
);

CREATE TABLE `tbl_nilai_head` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_semester` int,
  `id_pelajaran` int,
  `tf_atau_imtihan` int,
  `nilai_bobot` double
);

CREATE TABLE `tbl_nilai_tf_child` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_nilai_head` int,
  `id_semester` int,
  `id_pelajar` int,
  `id_pelajaran` int,
  `nilai_tf1` double,
  `nilai_tf2` double,
  `nilai_tf3` double,
  `nilai_tf4` double,
  `nilai_tf5` double,
  `nilai_tf6` double,
  `nilai_tf7` double,
  `nilai_tf8` double,
  `nilai_tf9` double,
  `nilai_tf10` double,
  `nilai_rata2_formatif` double,
  `nilai_rata2_formatif_bobot` double
);

CREATE TABLE `tbl_presensi_head` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_semester` int,
  `id_pelajaran` int,
  `jumlah_kehadiran` int
);

CREATE TABLE `tbl_presensi_child` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_presensi_head` int,
  `id_semester` int,
  `id_pelajar` int,
  `id_pelajaran` int,
  `jumlah_kehadiran` int,
  `nilai_presensi` double
);

CREATE TABLE `tbl_nilai_imtihan_child` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_nilai_head` int,
  `id_semester` int,
  `id_pelajar` int,
  `id_pelajaran` int,
  `nilai_imtihan` double,
  `nilai_imtihan_bobot` double
);

CREATE TABLE `tbl_tahfizh_tf_head` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_semester` int,
  `id_nilai_head` int,
  `target_halaman_semester` int
);

CREATE TABLE `tbl_tahfizh_tf_child` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_semester` int,
  `id_pelajar` int,
  `id_tahfizh_tf` int,
  `pencapaian_juz` varchar(255),
  `prestasi_jumlah_halaman` int,
  `created_at` timestamp
);

CREATE TABLE `tbl_tahfizh_imtihan_child` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_semester` int,
  `id_pelajar` int,
  `id_nilai_head` int,
  `created_at` timestamp,
  `kesalahan_hal_1` int,
  `kesalahan_hal_2` int,
  `kesalahan_hal_3` int,
  `kesalahan_hal_4` int,
  `kesalahan_hal_5` int,
  `kesalahan_hal_6` int,
  `kesalahan_hal_7` int,
  `kesalahan_hal_8` int,
  `kesalahan_hal_9` int,
  `kesalahan_hal_10` int,
  `kesalahan_hal_11` int,
  `kesalahan_hal_12` int,
  `kesalahan_hal_13` int,
  `kesalahan_hal_14` int,
  `kesalahan_hal_15` int,
  `kesalahan_hal_16` int,
  `kesalahan_hal_17` int,
  `kesalahan_hal_18` int,
  `kesalahan_hal_19` int,
  `kesalahan_hal_20` int,
  `nilai_imtihan` double,
  `nilai_imtihan_bobot` double,
  `jumlah_kesalahan` int,
  `rata2_kesalahan` double
);

CREATE TABLE `tbl_rapor_child` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_semester` int,
  `id_pelajar` int,
  `id_pelajaran` int,
  `nilai_akhir_angka` double,
  `nilai_akhir_huruf` varchar(255),
  `jml_nil` double
);

CREATE TABLE `tbl_rapor_cetak` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_semester` int,
  `id_pelajar` int,
  `id_rapor_child` int,
  `catatan_untuk_orang_tua_wali` blob,
  `jumlah_sp_penalaran` int,
  `nilai_penalaran` double,
  `jml_nil_penaxlaran` double,
  `rt2_kelar_penalaran` double,
  `nilai_rata2_penalaran` double,
  `jumlah_sp_keterampilan` int,
  `nilai_keterampilan` double,
  `jml_nil_keterampilan` double,
  `rt2_kelar_keterampilan` double,
  `nilai_rata2_keterampilan` double,
  `jumlah_nilai_kumulatif` double,
  `nilai_rata2_kumulatif` double,
  `wali_kelas_id` int,
  `mudir_id` int
);

ALTER TABLE `tbl_nilai_head` ADD FOREIGN KEY (`id_semester`) REFERENCES `tbl_semester` (`id`);

ALTER TABLE `tbl_nilai_head` ADD FOREIGN KEY (`id_pelajaran`) REFERENCES `tbl_pelajaran` (`kode`);

ALTER TABLE `tbl_nilai_tf_child` ADD FOREIGN KEY (`id_nilai_head`) REFERENCES `tbl_nilai_head` (`id`);

ALTER TABLE `tbl_nilai_tf_child` ADD FOREIGN KEY (`id_semester`) REFERENCES `tbl_semester` (`id`);

ALTER TABLE `tbl_nilai_tf_child` ADD FOREIGN KEY (`id_pelajar`) REFERENCES `tbl_pelajar` (`id`);

ALTER TABLE `tbl_nilai_tf_child` ADD FOREIGN KEY (`id_pelajaran`) REFERENCES `tbl_pelajaran` (`kode`);

ALTER TABLE `tbl_presensi_head` ADD FOREIGN KEY (`id_semester`) REFERENCES `tbl_semester` (`id`);

ALTER TABLE `tbl_presensi_head` ADD FOREIGN KEY (`id_pelajaran`) REFERENCES `tbl_pelajaran` (`kode`);

ALTER TABLE `tbl_presensi_child` ADD FOREIGN KEY (`id_presensi_head`) REFERENCES `tbl_presensi_head` (`id`);

ALTER TABLE `tbl_presensi_child` ADD FOREIGN KEY (`id_semester`) REFERENCES `tbl_semester` (`id`);

ALTER TABLE `tbl_presensi_child` ADD FOREIGN KEY (`id_pelajar`) REFERENCES `tbl_pelajar` (`id`);

ALTER TABLE `tbl_presensi_child` ADD FOREIGN KEY (`id_pelajaran`) REFERENCES `tbl_pelajaran` (`kode`);

ALTER TABLE `tbl_nilai_imtihan_child` ADD FOREIGN KEY (`id_nilai_head`) REFERENCES `tbl_nilai_head` (`id`);

ALTER TABLE `tbl_nilai_imtihan_child` ADD FOREIGN KEY (`id_semester`) REFERENCES `tbl_semester` (`id`);

ALTER TABLE `tbl_nilai_imtihan_child` ADD FOREIGN KEY (`id_pelajar`) REFERENCES `tbl_pelajar` (`id`);

ALTER TABLE `tbl_nilai_imtihan_child` ADD FOREIGN KEY (`id_pelajaran`) REFERENCES `tbl_pelajaran` (`kode`);

ALTER TABLE `tbl_tahfizh_tf_head` ADD FOREIGN KEY (`id_semester`) REFERENCES `tbl_semester` (`id`);

ALTER TABLE `tbl_tahfizh_tf_head` ADD FOREIGN KEY (`id_nilai_head`) REFERENCES `tbl_nilai_head` (`id`);

ALTER TABLE `tbl_tahfizh_tf_child` ADD FOREIGN KEY (`id_semester`) REFERENCES `tbl_semester` (`id`);

ALTER TABLE `tbl_tahfizh_tf_child` ADD FOREIGN KEY (`id_pelajar`) REFERENCES `tbl_pelajar` (`id`);

ALTER TABLE `tbl_tahfizh_tf_child` ADD FOREIGN KEY (`id_tahfizh_tf`) REFERENCES `tbl_tahfizh_tf_head` (`id`);

ALTER TABLE `tbl_tahfizh_imtihan_child` ADD FOREIGN KEY (`id_semester`) REFERENCES `tbl_semester` (`id`);

ALTER TABLE `tbl_tahfizh_imtihan_child` ADD FOREIGN KEY (`id_pelajar`) REFERENCES `tbl_pelajar` (`id`);

ALTER TABLE `tbl_tahfizh_imtihan_child` ADD FOREIGN KEY (`id_nilai_head`) REFERENCES `tbl_nilai_head` (`id`);

ALTER TABLE `tbl_rapor_child` ADD FOREIGN KEY (`id_semester`) REFERENCES `tbl_semester` (`id`);

ALTER TABLE `tbl_rapor_child` ADD FOREIGN KEY (`id_pelajar`) REFERENCES `tbl_pelajar` (`id`);

ALTER TABLE `tbl_rapor_child` ADD FOREIGN KEY (`id_pelajaran`) REFERENCES `tbl_pelajaran` (`kode`);

ALTER TABLE `tbl_rapor_cetak` ADD FOREIGN KEY (`id_semester`) REFERENCES `tbl_semester` (`id`);

ALTER TABLE `tbl_rapor_cetak` ADD FOREIGN KEY (`id_pelajar`) REFERENCES `tbl_pelajar` (`id`);

ALTER TABLE `tbl_rapor_cetak` ADD FOREIGN KEY (`id_rapor_child`) REFERENCES `tbl_rapor_child` (`id`);

ALTER TABLE `tbl_rapor_cetak` ADD FOREIGN KEY (`wali_kelas_id`) REFERENCES `tbl_wali_kelas` (`id`);

ALTER TABLE `tbl_rapor_cetak` ADD FOREIGN KEY (`mudir_id`) REFERENCES `tbl_mudir` (`id`);