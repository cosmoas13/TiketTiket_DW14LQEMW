"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "stations",
      [
        { code: "AKB", name: "Aekloba", city: "Labuhan Batu" },
        { code: "ATA", name: "Alastuwa", city: "Semarang" },
        { code: "ABR", name: "Ambarawa", city: "Lampung Tengah" },
        { code: "AGO", name: "Argopuro", city: " Argopuro" },
        { code: "AJ", name: "Arjasa", city: " Arjasa" },
        { code: "AWN", name: "Arjawinangun", city: " Cirebon" },
        { code: "AW", name: "Awipari ", city: " Tasikmalaya" },
        { code: "BBD", name: "Babadan ", city: " Madiun" },
        { code: "BBK", name: "Babakan ", city: " Cirebon" },
        { code: "BBT", name: "Babat ", city: " Lamongan" },
        { code: "BGR", name: "Bagor ", city: " Nganjuk" },
        { code: "BJL", name: "Bajalinggei", city: " Serdang Bedagai" },
        { code: "BMB", name: "Bamban", city: " Bamban" },
        { code: "BAP", name: "Bandar Kalipah", city: " Deli Serdang" },
        { code: "BDT", name: "Bandar Tinggi", city: " Pematang Siantar" },
        { code: "BD", name: "Bandung", city: " Bandung" },
        { code: "BG", name: "Bangil", city: " Pasuruan" },
        { code: "BDW", name: "Bangoduwa", city: " Cirebon" },
        { code: "BJR", name: "Banjar", city: " Banjar" },
        { code: "BJI", name: "Banjarsari", city: " Banjarsari" },
        { code: "BW", name: "Banyuwangi Baru", city: " Banyuwangi" },
        { code: "BAT", name: "Barat", city: " Magetan" },
        { code: "BRN", name: "Baron", city: " Nganjuk" },
        { code: "BTG", name: "Batang", city: " Batang" },
        { code: "BTK", name: "Batang Kuis", city: " Deli Serdang" },
        { code: "BTT", name: "Batu Tulis", city: " Batu Tulis" },
        { code: "BTA", name: "Baturaja", city: " Ogan Komering Ulu" },
        { code: "BKS", name: "Bekasi", city: " Bekasi" },
        { code: "BKI", name: "Bekri", city: " Bekri" },
        { code: "BNW", name: "Benowo", city: " Benowo" },
        { code: "BIJ", name: "Binjai", city: " Binjai" },
        { code: "BBA", name: "Blambanganpagar", city: " Blambanganpagar" },
        { code: "BBU", name: "Blambanganumpu", city: " Way Kanan" },
        { code: "BMG", name: "Blimbing ", city: " Malang" }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("stations", null, {});
  }
};
