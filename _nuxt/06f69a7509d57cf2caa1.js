(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{183:function(e,n){e.exports={body:'## Pengenalan terhadap masalah\n\nProgrammer seringkali diidentikkan dengan seseorang yang menulis sebuah kode untuk membuat sebuah perangkat lunak. Tidak salah, karena sebagian besar kita (programmer) memang memiliki pekerjaan sehari-hari untuk menulis berbaris-baris kode untuk membangun sebuah fitur, memperbaiki galat (cacat) pada sebuah perangkat lunak.\n\nMenulis kode menjadi sebuah keahlian mendasar bagi seorang programmer, kita diharuskan bisa menterjemahkan sebuah solusi yang sudah didesain sebelumnya ke dalam barisan kode untuk menyelesaikan berbagai permasalahan dan perbaikan pada produk perangkat lunak.\n\nKeahlian menulis kode seperti ini tidak jarang menjadi terlalu di eksploitasi pada beberapa tempat kerja programmer itu sendiri. Apalagi bila sudah dihadapkan pada batas waktu (*deadline*) yang terlalu mendesak. Kita bisa saja membabi buta menulis kode yang asal jalan tanpa mempedulikan berbagai kaidah yang seharusnya kita ikuti. Hal seperti ini seperti ini akan menjadi utang teknikal (*technical debt*) pada diri kita dan tim kita sendiri pada masa depan. Dan mengenai utang teknikal ini bila membaca penjelasan Bapak [Martin Fowler](https://martinfowler.com/) pada laman berikut [Technical Debt ↗️](https://martinfowler.com/bliki/TechnicalDebt.html) bisa diasosiasikan dengan utang finansial yang kalau kita tidak bayar sekarang pun suatu saat kita tetap harus membayarnya (ditambah dengan bunganya juga).\n\nSeni menghapus dan memperbarui kode atau lebih kerennya dikenal dengan istilah **Refactoring**, merupakan proses memperbaiki kode, menghilangkan bagian yang tidak diperlukan lagi, menyatukan bagian yang ganda, dan berbagai hal berkaitan dengan bersih-bersih kode tanpa mengubah hasil akhirnya pada pengguna.\n\nKarena itu programmer tidak melulu cuma tau tentang bagaimana menulis dan menambahkan kode, namun harus tau juga kapan harus menghapus dan memperbarui kode serta bagaimana cara terbaik untuk melakukannya.\n\n## Mengapa programmer menulis kode asal jalan?\n\nProgrammer memiliki berbagai alasan kenapa mereka menulis kode yang asal jalan, tentu kita tidak bisa menyamaratakan kesemuanya karena bisa jadi alasannya memang hal tersebut adalah yang terbaik pada saat keputusan tersebut diambil.\n\nUntuk hal ini kita bisa melihat pada [Technical Debt Quadrant ↗️](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html) yang dijelaskan Martin Fowler, singkatnya bisa menilik pada gambar berikut:\n\n<img v-lazyload src="/images/placeholder-1x1.png" data-src="/content-images/the-art-of-deleting-and-updating-the-code/quadran.png" alt="Technical Debt Quadrant">\n\n<small class="caption">Gambar diambil dari laman https://martinfowler.com<small>\n\n## Kenapa kita mesti menghapus dan memperbarui kode?\n\nAda jargon yang sering didengungkan oleh banyak temen-temen programmer di luar angkasa sana, bahwa "Kalau aplikasinya baik-baik saja, kenapa harus diubah?". Jargonnya tidak salah, namun juga tidak seutuhnya benar. Kata "baik-baik" saja disana sebenarnya bisa jadi relatif pada sudut pandang mana kita melihatnya. Baik-baik saja bisa jadi iya, karena pengguna akhir kita ternyata tidak mengalami galat pada saat menggunakan aplikasi kita. Baik-baik saja bisa jadi salah, karena ternyata mungkin secara sususan kode, aplikasi kita mempersulit tim programmer untuk mengembangkan fitur baru maupun memperbaiki galat yang sudah ada maupun yang kemungkinan akan ada di masa depan.\n\nBeberapa alasan kenapa kita mesti menghapus atau memperbarui sebuah kode menurut Martin Fowler pada buku **[Refactoring ↗️](https://refactoring.com/)** antara lain:\n\n### Meningkatkan desain perangkat lunak\n\nSebuah desain bisa jadi pada dasarnya sudah baik namun seiring waktu berjalan dan semakin banyak terjadi pengubahan dan penambahan kode maka menjadi semakin sulit untuk melihat desain tersebut. Proses menghapus dan memperbarui serta memperbaiki kode diharapkan bisa membersihkan berbagai ketidakteraturan yang menjadikan desain sebuah perangkat lunak menjadi susah untuk dilihat dan dipahami.\n\n### Memudahkan dipahami\n\nSemakin banyak kode maka semakin sulit memahami bagaimana kode tersebut bekerja. Salah satu solusinya adalah dengan menerapkan desain yang baik. Kebiasan kita seringkali menulis kode dengan berpikir bagaimana agar program tersebut berjalan dan melupakan bagaimana nanti programmer selanjutnya akan memahaminya.\n\n### Membantu menemukan galat\n\nDengan semakin mudah memahami sebuah kode maka memberikan efek kita bisa mendeteksi berbagai galat yang sudah terjadi dan kemungkinan galat akan terjadi dengan lebih mudah.\n\n### Membantu menulis kode dengan lebih cepat\n\nHasil akhirnya kita sebagai programmer bisa menulis kode, menambahkan berbagai fitur, memperbaiki galat dengan lebih cepat. Meskipun beberapa orang juga akan beragumen bahwa kecepatan pengembangan tidak akan selalu berbanding lurus dengan baiknya desain sebuah sistem.\n\n## Kapan waktu terbaik mengerjakannya?\n\nHal ini juga saya ambil dari buku **Refactoring** yang dijelaskan saat-saat terbaik untuk melakukan pengubahan kode adalah sebagai berikut:\n\n### Ketika menambahkan fungsi\n\nSudah umum bagi kita ketika membuat suatu fungsi untuk pertama kali ya cukup tambahkan saja, ketika membuat fungsi yang sama pada kali kedua ya salin saja kode tersebut dan biarkan terjadi kode ganda, namun ketika harus membuat fungsi yang sama untuk kali ketiga maka sudah dipikirkan menyatukan pada satu tempat yang bisa digunakan secara bersama-sama. Tidak jarang ketika kita diberikan tugas untuk membuat sebuah fitur kecil namun berakhir harus memperbarui banyak kode sampai ke dasar karena dirasa sulit menambahkan fitur tersebut tanpa mengubah dari dasar.\n\n### Ketika harus memperbaiki galat\n\nKetika kita ditugaskan untuk memperbaiki galat maka kita diharuskan melakukan pelacakan jejak kebelakang mengikuti arus dari kode tersebut untuk memahami dan menemukan titik penyebab galat itu terjadi. Karenanya pada saat melakukan pelacakan dalam rangka menemukan titik penyebab ini dirasa sangat susah, bisa jadi ini karena pada saat awal menulis kode belum berpikir tentang bagaimana kode tersebut nanti akan dibaca orang lain. Melakukan perbaikan pada saat ini juga merupakan waktu yang cukup tepat karena biasanya dibarengi dengan adanya bantuan dari pihak Tester yang memastikan aplikasi tetap berjalan sesuai ekspektasi.\n\n### Ketika code review\n\nCode review merupakan saat yang tepat untuk saling mengkoreksi satu sama lain antar programmer, saling memberikan pendapat terhadap solusi yang diambil, termasuk juga pendapat mengenai bagaimana desain besar dari suatu kode di dalam projek.\n\n## Pelajaran yang bisa diambil\n\nDunia teknologi berkembang sangat cepat, ada saja terobosan dan solusi terbaru setiap hari. Memilih profesi sebagai programmer berarti sudah harus siap dengan kecepatan perubahan ini. Apa yang kita anggap sebagai solusi terbaik saat ini bisa jadi sudah tidak relevan lagi setahun mendatang. Tetap updates dengan berbagai perkembangan terbaru, jangan merasa gundah ketika harus menghapus dan memperbarui kode. Jika bukan kalian yang mengerjakan, maka seseorang akan mengerjakannya suatu saat. Tidak perlu sayang untuk menghapus dan memperbarui kode hasil jerih payah kita sebelumnya, karena bisa jadi memang itu adalah yang terbaik yang harus diambil. Tak perlu juga menyalahkan si penulis kode sebelumnya, anggap saja bahwa setiap solusi memang ada lah yang terbaik pada saat solusi tersebut diputuskan untuk digunakan.\n\nTerus belajar, karena itu merupakan proses yang semakin membuat kita besar, membuat kita tetap bertahan dan bersaing dalam dunia dengan perubahan yang begitu cepat.\n\n### Demikian artikel kali ini, semoga bermanfaat...\n',html:'<h2>Pengenalan terhadap masalah</h2>\n<p>Programmer seringkali diidentikkan dengan seseorang yang menulis sebuah kode untuk membuat sebuah perangkat lunak. Tidak salah, karena sebagian besar kita (programmer) memang memiliki pekerjaan sehari-hari untuk menulis berbaris-baris kode untuk membangun sebuah fitur, memperbaiki galat (cacat) pada sebuah perangkat lunak.</p>\n<p>Menulis kode menjadi sebuah keahlian mendasar bagi seorang programmer, kita diharuskan bisa menterjemahkan sebuah solusi yang sudah didesain sebelumnya ke dalam barisan kode untuk menyelesaikan berbagai permasalahan dan perbaikan pada produk perangkat lunak.</p>\n<p>Keahlian menulis kode seperti ini tidak jarang menjadi terlalu di eksploitasi pada beberapa tempat kerja programmer itu sendiri. Apalagi bila sudah dihadapkan pada batas waktu (<em>deadline</em>) yang terlalu mendesak. Kita bisa saja membabi buta menulis kode yang asal jalan tanpa mempedulikan berbagai kaidah yang seharusnya kita ikuti. Hal seperti ini seperti ini akan menjadi utang teknikal (<em>technical debt</em>) pada diri kita dan tim kita sendiri pada masa depan. Dan mengenai utang teknikal ini bila membaca penjelasan Bapak <a href="https://martinfowler.com/">Martin Fowler</a> pada laman berikut <a href="https://martinfowler.com/bliki/TechnicalDebt.html">Technical Debt ↗️</a> bisa diasosiasikan dengan utang finansial yang kalau kita tidak bayar sekarang pun suatu saat kita tetap harus membayarnya (ditambah dengan bunganya juga).</p>\n<p>Seni menghapus dan memperbarui kode atau lebih kerennya dikenal dengan istilah <strong>Refactoring</strong>, merupakan proses memperbaiki kode, menghilangkan bagian yang tidak diperlukan lagi, menyatukan bagian yang ganda, dan berbagai hal berkaitan dengan bersih-bersih kode tanpa mengubah hasil akhirnya pada pengguna.</p>\n<p>Karena itu programmer tidak melulu cuma tau tentang bagaimana menulis dan menambahkan kode, namun harus tau juga kapan harus menghapus dan memperbarui kode serta bagaimana cara terbaik untuk melakukannya.</p>\n<h2>Mengapa programmer menulis kode asal jalan?</h2>\n<p>Programmer memiliki berbagai alasan kenapa mereka menulis kode yang asal jalan, tentu kita tidak bisa menyamaratakan kesemuanya karena bisa jadi alasannya memang hal tersebut adalah yang terbaik pada saat keputusan tersebut diambil.</p>\n<p>Untuk hal ini kita bisa melihat pada <a href="https://martinfowler.com/bliki/TechnicalDebtQuadrant.html">Technical Debt Quadrant ↗️</a> yang dijelaskan Martin Fowler, singkatnya bisa menilik pada gambar berikut:</p>\n<img v-lazyload src="/images/placeholder-1x1.png" data-src="/content-images/the-art-of-deleting-and-updating-the-code/quadran.png" alt="Technical Debt Quadrant">\n<p><small class="caption">Gambar diambil dari laman https://martinfowler.com<small></p>\n<h2>Kenapa kita mesti menghapus dan memperbarui kode?</h2>\n<p>Ada jargon yang sering didengungkan oleh banyak temen-temen programmer di luar angkasa sana, bahwa &quot;Kalau aplikasinya baik-baik saja, kenapa harus diubah?&quot;. Jargonnya tidak salah, namun juga tidak seutuhnya benar. Kata &quot;baik-baik&quot; saja disana sebenarnya bisa jadi relatif pada sudut pandang mana kita melihatnya. Baik-baik saja bisa jadi iya, karena pengguna akhir kita ternyata tidak mengalami galat pada saat menggunakan aplikasi kita. Baik-baik saja bisa jadi salah, karena ternyata mungkin secara sususan kode, aplikasi kita mempersulit tim programmer untuk mengembangkan fitur baru maupun memperbaiki galat yang sudah ada maupun yang kemungkinan akan ada di masa depan.</p>\n<p>Beberapa alasan kenapa kita mesti menghapus atau memperbarui sebuah kode menurut Martin Fowler pada buku <strong><a href="https://refactoring.com/">Refactoring ↗️</a></strong> antara lain:</p>\n<h3>Meningkatkan desain perangkat lunak</h3>\n<p>Sebuah desain bisa jadi pada dasarnya sudah baik namun seiring waktu berjalan dan semakin banyak terjadi pengubahan dan penambahan kode maka menjadi semakin sulit untuk melihat desain tersebut. Proses menghapus dan memperbarui serta memperbaiki kode diharapkan bisa membersihkan berbagai ketidakteraturan yang menjadikan desain sebuah perangkat lunak menjadi susah untuk dilihat dan dipahami.</p>\n<h3>Memudahkan dipahami</h3>\n<p>Semakin banyak kode maka semakin sulit memahami bagaimana kode tersebut bekerja. Salah satu solusinya adalah dengan menerapkan desain yang baik. Kebiasan kita seringkali menulis kode dengan berpikir bagaimana agar program tersebut berjalan dan melupakan bagaimana nanti programmer selanjutnya akan memahaminya.</p>\n<h3>Membantu menemukan galat</h3>\n<p>Dengan semakin mudah memahami sebuah kode maka memberikan efek kita bisa mendeteksi berbagai galat yang sudah terjadi dan kemungkinan galat akan terjadi dengan lebih mudah.</p>\n<h3>Membantu menulis kode dengan lebih cepat</h3>\n<p>Hasil akhirnya kita sebagai programmer bisa menulis kode, menambahkan berbagai fitur, memperbaiki galat dengan lebih cepat. Meskipun beberapa orang juga akan beragumen bahwa kecepatan pengembangan tidak akan selalu berbanding lurus dengan baiknya desain sebuah sistem.</p>\n<h2>Kapan waktu terbaik mengerjakannya?</h2>\n<p>Hal ini juga saya ambil dari buku <strong>Refactoring</strong> yang dijelaskan saat-saat terbaik untuk melakukan pengubahan kode adalah sebagai berikut:</p>\n<h3>Ketika menambahkan fungsi</h3>\n<p>Sudah umum bagi kita ketika membuat suatu fungsi untuk pertama kali ya cukup tambahkan saja, ketika membuat fungsi yang sama pada kali kedua ya salin saja kode tersebut dan biarkan terjadi kode ganda, namun ketika harus membuat fungsi yang sama untuk kali ketiga maka sudah dipikirkan menyatukan pada satu tempat yang bisa digunakan secara bersama-sama. Tidak jarang ketika kita diberikan tugas untuk membuat sebuah fitur kecil namun berakhir harus memperbarui banyak kode sampai ke dasar karena dirasa sulit menambahkan fitur tersebut tanpa mengubah dari dasar.</p>\n<h3>Ketika harus memperbaiki galat</h3>\n<p>Ketika kita ditugaskan untuk memperbaiki galat maka kita diharuskan melakukan pelacakan jejak kebelakang mengikuti arus dari kode tersebut untuk memahami dan menemukan titik penyebab galat itu terjadi. Karenanya pada saat melakukan pelacakan dalam rangka menemukan titik penyebab ini dirasa sangat susah, bisa jadi ini karena pada saat awal menulis kode belum berpikir tentang bagaimana kode tersebut nanti akan dibaca orang lain. Melakukan perbaikan pada saat ini juga merupakan waktu yang cukup tepat karena biasanya dibarengi dengan adanya bantuan dari pihak Tester yang memastikan aplikasi tetap berjalan sesuai ekspektasi.</p>\n<h3>Ketika code review</h3>\n<p>Code review merupakan saat yang tepat untuk saling mengkoreksi satu sama lain antar programmer, saling memberikan pendapat terhadap solusi yang diambil, termasuk juga pendapat mengenai bagaimana desain besar dari suatu kode di dalam projek.</p>\n<h2>Pelajaran yang bisa diambil</h2>\n<p>Dunia teknologi berkembang sangat cepat, ada saja terobosan dan solusi terbaru setiap hari. Memilih profesi sebagai programmer berarti sudah harus siap dengan kecepatan perubahan ini. Apa yang kita anggap sebagai solusi terbaik saat ini bisa jadi sudah tidak relevan lagi setahun mendatang. Tetap updates dengan berbagai perkembangan terbaru, jangan merasa gundah ketika harus menghapus dan memperbarui kode. Jika bukan kalian yang mengerjakan, maka seseorang akan mengerjakannya suatu saat. Tidak perlu sayang untuk menghapus dan memperbarui kode hasil jerih payah kita sebelumnya, karena bisa jadi memang itu adalah yang terbaik yang harus diambil. Tak perlu juga menyalahkan si penulis kode sebelumnya, anggap saja bahwa setiap solusi memang ada lah yang terbaik pada saat solusi tersebut diputuskan untuk digunakan.</p>\n<p>Terus belajar, karena itu merupakan proses yang semakin membuat kita besar, membuat kita tetap bertahan dan bersaing dalam dunia dengan perubahan yang begitu cepat.</p>\n<h3>Demikian artikel kali ini, semoga bermanfaat...</h3>\n',attributes:{title:"Seni menghapus dan memperbarui sebuah kode",slug:"the-art-of-deleting-and-updating-the-code",date:"2019-07-02",minute2read:10,description:"Menceritakan bagaimana pekerjaan saya sehari-hari yang seringkali berhadapan dengan keharusan untuk menghapus kode orang lain",categories:["programming"],cover:"https://www.mazipan.xyz/content-images/the-art-of-deleting-and-updating-the-code/quadran.png",_meta:{resourcePath:"/home/travis/build/mazipan/blog-2.0/contents/published/the-art-of-deleting-and-updating-the-code/index.md"}},vue:{render:'return function render() { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'div\',{staticClass:"content-markdown"},[_c(\'h2\',[_vm._v("Pengenalan terhadap masalah")]),_vm._v(" "),_c(\'p\',[_vm._v("Programmer seringkali diidentikkan dengan seseorang yang menulis sebuah kode untuk membuat sebuah perangkat lunak. Tidak salah, karena sebagian besar kita (programmer) memang memiliki pekerjaan sehari-hari untuk menulis berbaris-baris kode untuk membangun sebuah fitur, memperbaiki galat (cacat) pada sebuah perangkat lunak.")]),_vm._v(" "),_c(\'p\',[_vm._v("Menulis kode menjadi sebuah keahlian mendasar bagi seorang programmer, kita diharuskan bisa menterjemahkan sebuah solusi yang sudah didesain sebelumnya ke dalam barisan kode untuk menyelesaikan berbagai permasalahan dan perbaikan pada produk perangkat lunak.")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_c(\'p\',[_vm._v("Karena itu programmer tidak melulu cuma tau tentang bagaimana menulis dan menambahkan kode, namun harus tau juga kapan harus menghapus dan memperbarui kode serta bagaimana cara terbaik untuk melakukannya.")]),_vm._v(" "),_c(\'h2\',[_vm._v("Mengapa programmer menulis kode asal jalan?")]),_vm._v(" "),_c(\'p\',[_vm._v("Programmer memiliki berbagai alasan kenapa mereka menulis kode yang asal jalan, tentu kita tidak bisa menyamaratakan kesemuanya karena bisa jadi alasannya memang hal tersebut adalah yang terbaik pada saat keputusan tersebut diambil.")]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c(\'img\',{directives:[{name:"lazyload",rawName:"v-lazyload"}],attrs:{"src":"/images/placeholder-1x1.png","data-src":"/content-images/the-art-of-deleting-and-updating-the-code/quadran.png","alt":"Technical Debt Quadrant"}}),_vm._v(" "),_vm._m(3),_vm._v(" "),_c(\'h2\',[_vm._v("Kenapa kita mesti menghapus dan memperbarui kode?")]),_vm._v(" "),_c(\'p\',[_vm._v("Ada jargon yang sering didengungkan oleh banyak temen-temen programmer di luar angkasa sana, bahwa \\"Kalau aplikasinya baik-baik saja, kenapa harus diubah?\\". Jargonnya tidak salah, namun juga tidak seutuhnya benar. Kata \\"baik-baik\\" saja disana sebenarnya bisa jadi relatif pada sudut pandang mana kita melihatnya. Baik-baik saja bisa jadi iya, karena pengguna akhir kita ternyata tidak mengalami galat pada saat menggunakan aplikasi kita. Baik-baik saja bisa jadi salah, karena ternyata mungkin secara sususan kode, aplikasi kita mempersulit tim programmer untuk mengembangkan fitur baru maupun memperbaiki galat yang sudah ada maupun yang kemungkinan akan ada di masa depan.")]),_vm._v(" "),_vm._m(4),_vm._v(" "),_c(\'h3\',[_vm._v("Meningkatkan desain perangkat lunak")]),_vm._v(" "),_c(\'p\',[_vm._v("Sebuah desain bisa jadi pada dasarnya sudah baik namun seiring waktu berjalan dan semakin banyak terjadi pengubahan dan penambahan kode maka menjadi semakin sulit untuk melihat desain tersebut. Proses menghapus dan memperbarui serta memperbaiki kode diharapkan bisa membersihkan berbagai ketidakteraturan yang menjadikan desain sebuah perangkat lunak menjadi susah untuk dilihat dan dipahami.")]),_vm._v(" "),_c(\'h3\',[_vm._v("Memudahkan dipahami")]),_vm._v(" "),_c(\'p\',[_vm._v("Semakin banyak kode maka semakin sulit memahami bagaimana kode tersebut bekerja. Salah satu solusinya adalah dengan menerapkan desain yang baik. Kebiasan kita seringkali menulis kode dengan berpikir bagaimana agar program tersebut berjalan dan melupakan bagaimana nanti programmer selanjutnya akan memahaminya.")]),_vm._v(" "),_c(\'h3\',[_vm._v("Membantu menemukan galat")]),_vm._v(" "),_c(\'p\',[_vm._v("Dengan semakin mudah memahami sebuah kode maka memberikan efek kita bisa mendeteksi berbagai galat yang sudah terjadi dan kemungkinan galat akan terjadi dengan lebih mudah.")]),_vm._v(" "),_c(\'h3\',[_vm._v("Membantu menulis kode dengan lebih cepat")]),_vm._v(" "),_c(\'p\',[_vm._v("Hasil akhirnya kita sebagai programmer bisa menulis kode, menambahkan berbagai fitur, memperbaiki galat dengan lebih cepat. Meskipun beberapa orang juga akan beragumen bahwa kecepatan pengembangan tidak akan selalu berbanding lurus dengan baiknya desain sebuah sistem.")]),_vm._v(" "),_c(\'h2\',[_vm._v("Kapan waktu terbaik mengerjakannya?")]),_vm._v(" "),_vm._m(5),_vm._v(" "),_c(\'h3\',[_vm._v("Ketika menambahkan fungsi")]),_vm._v(" "),_c(\'p\',[_vm._v("Sudah umum bagi kita ketika membuat suatu fungsi untuk pertama kali ya cukup tambahkan saja, ketika membuat fungsi yang sama pada kali kedua ya salin saja kode tersebut dan biarkan terjadi kode ganda, namun ketika harus membuat fungsi yang sama untuk kali ketiga maka sudah dipikirkan menyatukan pada satu tempat yang bisa digunakan secara bersama-sama. Tidak jarang ketika kita diberikan tugas untuk membuat sebuah fitur kecil namun berakhir harus memperbarui banyak kode sampai ke dasar karena dirasa sulit menambahkan fitur tersebut tanpa mengubah dari dasar.")]),_vm._v(" "),_c(\'h3\',[_vm._v("Ketika harus memperbaiki galat")]),_vm._v(" "),_c(\'p\',[_vm._v("Ketika kita ditugaskan untuk memperbaiki galat maka kita diharuskan melakukan pelacakan jejak kebelakang mengikuti arus dari kode tersebut untuk memahami dan menemukan titik penyebab galat itu terjadi. Karenanya pada saat melakukan pelacakan dalam rangka menemukan titik penyebab ini dirasa sangat susah, bisa jadi ini karena pada saat awal menulis kode belum berpikir tentang bagaimana kode tersebut nanti akan dibaca orang lain. Melakukan perbaikan pada saat ini juga merupakan waktu yang cukup tepat karena biasanya dibarengi dengan adanya bantuan dari pihak Tester yang memastikan aplikasi tetap berjalan sesuai ekspektasi.")]),_vm._v(" "),_c(\'h3\',[_vm._v("Ketika code review")]),_vm._v(" "),_c(\'p\',[_vm._v("Code review merupakan saat yang tepat untuk saling mengkoreksi satu sama lain antar programmer, saling memberikan pendapat terhadap solusi yang diambil, termasuk juga pendapat mengenai bagaimana desain besar dari suatu kode di dalam projek.")]),_vm._v(" "),_c(\'h2\',[_vm._v("Pelajaran yang bisa diambil")]),_vm._v(" "),_c(\'p\',[_vm._v("Dunia teknologi berkembang sangat cepat, ada saja terobosan dan solusi terbaru setiap hari. Memilih profesi sebagai programmer berarti sudah harus siap dengan kecepatan perubahan ini. Apa yang kita anggap sebagai solusi terbaik saat ini bisa jadi sudah tidak relevan lagi setahun mendatang. Tetap updates dengan berbagai perkembangan terbaru, jangan merasa gundah ketika harus menghapus dan memperbarui kode. Jika bukan kalian yang mengerjakan, maka seseorang akan mengerjakannya suatu saat. Tidak perlu sayang untuk menghapus dan memperbarui kode hasil jerih payah kita sebelumnya, karena bisa jadi memang itu adalah yang terbaik yang harus diambil. Tak perlu juga menyalahkan si penulis kode sebelumnya, anggap saja bahwa setiap solusi memang ada lah yang terbaik pada saat solusi tersebut diputuskan untuk digunakan.")]),_vm._v(" "),_c(\'p\',[_vm._v("Terus belajar, karena itu merupakan proses yang semakin membuat kita besar, membuat kita tetap bertahan dan bersaing dalam dunia dengan perubahan yang begitu cepat.")]),_vm._v(" "),_c(\'h3\',[_vm._v("Demikian artikel kali ini, semoga bermanfaat...")])]) }',staticRenderFns:'return [function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("Keahlian menulis kode seperti ini tidak jarang menjadi terlalu di eksploitasi pada beberapa tempat kerja programmer itu sendiri. Apalagi bila sudah dihadapkan pada batas waktu ("),_c(\'em\',[_vm._v("deadline")]),_vm._v(") yang terlalu mendesak. Kita bisa saja membabi buta menulis kode yang asal jalan tanpa mempedulikan berbagai kaidah yang seharusnya kita ikuti. Hal seperti ini seperti ini akan menjadi utang teknikal ("),_c(\'em\',[_vm._v("technical debt")]),_vm._v(") pada diri kita dan tim kita sendiri pada masa depan. Dan mengenai utang teknikal ini bila membaca penjelasan Bapak "),_c(\'a\',{attrs:{"href":"https://martinfowler.com/"}},[_vm._v("Martin Fowler")]),_vm._v(" pada laman berikut "),_c(\'a\',{attrs:{"href":"https://martinfowler.com/bliki/TechnicalDebt.html"}},[_vm._v("Technical Debt ↗️")]),_vm._v(" bisa diasosiasikan dengan utang finansial yang kalau kita tidak bayar sekarang pun suatu saat kita tetap harus membayarnya (ditambah dengan bunganya juga).")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("Seni menghapus dan memperbarui kode atau lebih kerennya dikenal dengan istilah "),_c(\'strong\',[_vm._v("Refactoring")]),_vm._v(", merupakan proses memperbaiki kode, menghilangkan bagian yang tidak diperlukan lagi, menyatukan bagian yang ganda, dan berbagai hal berkaitan dengan bersih-bersih kode tanpa mengubah hasil akhirnya pada pengguna.")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("Untuk hal ini kita bisa melihat pada "),_c(\'a\',{attrs:{"href":"https://martinfowler.com/bliki/TechnicalDebtQuadrant.html"}},[_vm._v("Technical Debt Quadrant ↗️")]),_vm._v(" yang dijelaskan Martin Fowler, singkatnya bisa menilik pada gambar berikut:")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_c(\'small\',{staticClass:"caption"},[_vm._v("Gambar diambil dari laman https://martinfowler.com"),_c(\'small\')])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("Beberapa alasan kenapa kita mesti menghapus atau memperbarui sebuah kode menurut Martin Fowler pada buku "),_c(\'strong\',[_c(\'a\',{attrs:{"href":"https://refactoring.com/"}},[_vm._v("Refactoring ↗️")])]),_vm._v(" antara lain:")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("Hal ini juga saya ambil dari buku "),_c(\'strong\',[_vm._v("Refactoring")]),_vm._v(" yang dijelaskan saat-saat terbaik untuk melakukan pengubahan kode adalah sebagai berikut:")]) }]',component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content-markdown"},[t("h2",[e._v("Pengenalan terhadap masalah")]),e._v(" "),t("p",[e._v("Programmer seringkali diidentikkan dengan seseorang yang menulis sebuah kode untuk membuat sebuah perangkat lunak. Tidak salah, karena sebagian besar kita (programmer) memang memiliki pekerjaan sehari-hari untuk menulis berbaris-baris kode untuk membangun sebuah fitur, memperbaiki galat (cacat) pada sebuah perangkat lunak.")]),e._v(" "),t("p",[e._v("Menulis kode menjadi sebuah keahlian mendasar bagi seorang programmer, kita diharuskan bisa menterjemahkan sebuah solusi yang sudah didesain sebelumnya ke dalam barisan kode untuk menyelesaikan berbagai permasalahan dan perbaikan pada produk perangkat lunak.")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),t("p",[e._v("Karena itu programmer tidak melulu cuma tau tentang bagaimana menulis dan menambahkan kode, namun harus tau juga kapan harus menghapus dan memperbarui kode serta bagaimana cara terbaik untuk melakukannya.")]),e._v(" "),t("h2",[e._v("Mengapa programmer menulis kode asal jalan?")]),e._v(" "),t("p",[e._v("Programmer memiliki berbagai alasan kenapa mereka menulis kode yang asal jalan, tentu kita tidak bisa menyamaratakan kesemuanya karena bisa jadi alasannya memang hal tersebut adalah yang terbaik pada saat keputusan tersebut diambil.")]),e._v(" "),e._m(2),e._v(" "),t("img",{directives:[{name:"lazyload",rawName:"v-lazyload"}],attrs:{src:"/images/placeholder-1x1.png","data-src":"/content-images/the-art-of-deleting-and-updating-the-code/quadran.png",alt:"Technical Debt Quadrant"}}),e._v(" "),e._m(3),e._v(" "),t("h2",[e._v("Kenapa kita mesti menghapus dan memperbarui kode?")]),e._v(" "),t("p",[e._v('Ada jargon yang sering didengungkan oleh banyak temen-temen programmer di luar angkasa sana, bahwa "Kalau aplikasinya baik-baik saja, kenapa harus diubah?". Jargonnya tidak salah, namun juga tidak seutuhnya benar. Kata "baik-baik" saja disana sebenarnya bisa jadi relatif pada sudut pandang mana kita melihatnya. Baik-baik saja bisa jadi iya, karena pengguna akhir kita ternyata tidak mengalami galat pada saat menggunakan aplikasi kita. Baik-baik saja bisa jadi salah, karena ternyata mungkin secara sususan kode, aplikasi kita mempersulit tim programmer untuk mengembangkan fitur baru maupun memperbaiki galat yang sudah ada maupun yang kemungkinan akan ada di masa depan.')]),e._v(" "),e._m(4),e._v(" "),t("h3",[e._v("Meningkatkan desain perangkat lunak")]),e._v(" "),t("p",[e._v("Sebuah desain bisa jadi pada dasarnya sudah baik namun seiring waktu berjalan dan semakin banyak terjadi pengubahan dan penambahan kode maka menjadi semakin sulit untuk melihat desain tersebut. Proses menghapus dan memperbarui serta memperbaiki kode diharapkan bisa membersihkan berbagai ketidakteraturan yang menjadikan desain sebuah perangkat lunak menjadi susah untuk dilihat dan dipahami.")]),e._v(" "),t("h3",[e._v("Memudahkan dipahami")]),e._v(" "),t("p",[e._v("Semakin banyak kode maka semakin sulit memahami bagaimana kode tersebut bekerja. Salah satu solusinya adalah dengan menerapkan desain yang baik. Kebiasan kita seringkali menulis kode dengan berpikir bagaimana agar program tersebut berjalan dan melupakan bagaimana nanti programmer selanjutnya akan memahaminya.")]),e._v(" "),t("h3",[e._v("Membantu menemukan galat")]),e._v(" "),t("p",[e._v("Dengan semakin mudah memahami sebuah kode maka memberikan efek kita bisa mendeteksi berbagai galat yang sudah terjadi dan kemungkinan galat akan terjadi dengan lebih mudah.")]),e._v(" "),t("h3",[e._v("Membantu menulis kode dengan lebih cepat")]),e._v(" "),t("p",[e._v("Hasil akhirnya kita sebagai programmer bisa menulis kode, menambahkan berbagai fitur, memperbaiki galat dengan lebih cepat. Meskipun beberapa orang juga akan beragumen bahwa kecepatan pengembangan tidak akan selalu berbanding lurus dengan baiknya desain sebuah sistem.")]),e._v(" "),t("h2",[e._v("Kapan waktu terbaik mengerjakannya?")]),e._v(" "),e._m(5),e._v(" "),t("h3",[e._v("Ketika menambahkan fungsi")]),e._v(" "),t("p",[e._v("Sudah umum bagi kita ketika membuat suatu fungsi untuk pertama kali ya cukup tambahkan saja, ketika membuat fungsi yang sama pada kali kedua ya salin saja kode tersebut dan biarkan terjadi kode ganda, namun ketika harus membuat fungsi yang sama untuk kali ketiga maka sudah dipikirkan menyatukan pada satu tempat yang bisa digunakan secara bersama-sama. Tidak jarang ketika kita diberikan tugas untuk membuat sebuah fitur kecil namun berakhir harus memperbarui banyak kode sampai ke dasar karena dirasa sulit menambahkan fitur tersebut tanpa mengubah dari dasar.")]),e._v(" "),t("h3",[e._v("Ketika harus memperbaiki galat")]),e._v(" "),t("p",[e._v("Ketika kita ditugaskan untuk memperbaiki galat maka kita diharuskan melakukan pelacakan jejak kebelakang mengikuti arus dari kode tersebut untuk memahami dan menemukan titik penyebab galat itu terjadi. Karenanya pada saat melakukan pelacakan dalam rangka menemukan titik penyebab ini dirasa sangat susah, bisa jadi ini karena pada saat awal menulis kode belum berpikir tentang bagaimana kode tersebut nanti akan dibaca orang lain. Melakukan perbaikan pada saat ini juga merupakan waktu yang cukup tepat karena biasanya dibarengi dengan adanya bantuan dari pihak Tester yang memastikan aplikasi tetap berjalan sesuai ekspektasi.")]),e._v(" "),t("h3",[e._v("Ketika code review")]),e._v(" "),t("p",[e._v("Code review merupakan saat yang tepat untuk saling mengkoreksi satu sama lain antar programmer, saling memberikan pendapat terhadap solusi yang diambil, termasuk juga pendapat mengenai bagaimana desain besar dari suatu kode di dalam projek.")]),e._v(" "),t("h2",[e._v("Pelajaran yang bisa diambil")]),e._v(" "),t("p",[e._v("Dunia teknologi berkembang sangat cepat, ada saja terobosan dan solusi terbaru setiap hari. Memilih profesi sebagai programmer berarti sudah harus siap dengan kecepatan perubahan ini. Apa yang kita anggap sebagai solusi terbaik saat ini bisa jadi sudah tidak relevan lagi setahun mendatang. Tetap updates dengan berbagai perkembangan terbaru, jangan merasa gundah ketika harus menghapus dan memperbarui kode. Jika bukan kalian yang mengerjakan, maka seseorang akan mengerjakannya suatu saat. Tidak perlu sayang untuk menghapus dan memperbarui kode hasil jerih payah kita sebelumnya, karena bisa jadi memang itu adalah yang terbaik yang harus diambil. Tak perlu juga menyalahkan si penulis kode sebelumnya, anggap saja bahwa setiap solusi memang ada lah yang terbaik pada saat solusi tersebut diputuskan untuk digunakan.")]),e._v(" "),t("p",[e._v("Terus belajar, karena itu merupakan proses yang semakin membuat kita besar, membuat kita tetap bertahan dan bersaing dalam dunia dengan perubahan yang begitu cepat.")]),e._v(" "),t("h3",[e._v("Demikian artikel kali ini, semoga bermanfaat...")])])},this.$options.staticRenderFns=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Keahlian menulis kode seperti ini tidak jarang menjadi terlalu di eksploitasi pada beberapa tempat kerja programmer itu sendiri. Apalagi bila sudah dihadapkan pada batas waktu ("),t("em",[e._v("deadline")]),e._v(") yang terlalu mendesak. Kita bisa saja membabi buta menulis kode yang asal jalan tanpa mempedulikan berbagai kaidah yang seharusnya kita ikuti. Hal seperti ini seperti ini akan menjadi utang teknikal ("),t("em",[e._v("technical debt")]),e._v(") pada diri kita dan tim kita sendiri pada masa depan. Dan mengenai utang teknikal ini bila membaca penjelasan Bapak "),t("a",{attrs:{href:"https://martinfowler.com/"}},[e._v("Martin Fowler")]),e._v(" pada laman berikut "),t("a",{attrs:{href:"https://martinfowler.com/bliki/TechnicalDebt.html"}},[e._v("Technical Debt ↗️")]),e._v(" bisa diasosiasikan dengan utang finansial yang kalau kita tidak bayar sekarang pun suatu saat kita tetap harus membayarnya (ditambah dengan bunganya juga).")])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("Seni menghapus dan memperbarui kode atau lebih kerennya dikenal dengan istilah "),n("strong",[this._v("Refactoring")]),this._v(", merupakan proses memperbaiki kode, menghilangkan bagian yang tidak diperlukan lagi, menyatukan bagian yang ganda, dan berbagai hal berkaitan dengan bersih-bersih kode tanpa mengubah hasil akhirnya pada pengguna.")])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("Untuk hal ini kita bisa melihat pada "),n("a",{attrs:{href:"https://martinfowler.com/bliki/TechnicalDebtQuadrant.html"}},[this._v("Technical Debt Quadrant ↗️")]),this._v(" yang dijelaskan Martin Fowler, singkatnya bisa menilik pada gambar berikut:")])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[n("small",{staticClass:"caption"},[this._v("Gambar diambil dari laman https://martinfowler.com"),n("small")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("Beberapa alasan kenapa kita mesti menghapus atau memperbarui sebuah kode menurut Martin Fowler pada buku "),n("strong",[n("a",{attrs:{href:"https://refactoring.com/"}},[this._v("Refactoring ↗️")])]),this._v(" antara lain:")])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("Hal ini juga saya ambil dari buku "),n("strong",[this._v("Refactoring")]),this._v(" yang dijelaskan saat-saat terbaik untuk melakukan pengubahan kode adalah sebagai berikut:")])}]}}}}}}]);