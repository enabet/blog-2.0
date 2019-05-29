(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{168:function(e,n){e.exports={body:"## Mengenal Blog Statis\n\n\"Blog statis\" merupakan blog yang kita buat tanpa menggunakan *backend*, sehingga bisa kita deploy dengan mudah pada berbagai static host seperti Github Pages, Netlify, Firebase dan lainnya. Blog statis ini biasanya menggunakan templat seperti *Markdown* yang akan *build* sesaat sebelum *deploy* untuk menghasilkan file statis HTML, CSS dan JavaScript.\n\n## Apa itu Gridsome?\n\n<img v-lazyload src=\"/images/placeholder-1x1.png\" data-src=\"https://gridsome.org/assets/logo-poster.png\" alt=\"Gridsome Logo\">\n\n[Gridsome ↗️](https://gridsome.org/) merupakan anak baru di ekosistem Vue.js yang mengkhususkan dirinya sebagai pembuat halaman statis (*static site generator*). Bila kalian pengguna React.js, tentu sudah tidak asing dengan yang namanya [Gatsby ↗️](https://www.gatsbyjs.org/) sebagai salah satu pembuat halaman statis terbaik saat ini. Nah, Gridsome sangat terinspirasi dari apa yang dikerjakan oleh Gatsby di ekosistem React.js.\n\nSudah bukan hal baru bahwa ekosistem di Vue belum sekuat dan sekomplit di React, namun saya pribadi selalu terkagum-kagum dengan mereka yang bersusah payah membuatkan alternatif bagi banyak hal hebat di React untuk Vue. Gridsome, seperti ingin mengekor pada kesuksesan Nuxt yang mencoba mengadopsi Next.js di React. Nuxt yang beberapa tahun lalu belum terdengar suaranya hari ini bahkan telah menjadi pilihan terbaik ketika akan membuat sebuah aplikasi diatas Vue.\n\n## Mengapa Gridsome lebih baik dibandingkan Nuxt?\n\nNuxt pada dasarnya diperuntukkan untuk membuat aplikasi web di Vue yang membutuhkan rendering di server, Nuxt lebih khusus sangat disiapkan untuk menangani berbagai kebutuhan kompleks yang biasanya muncul ketika membuat sebuah aplikasi web. Meskipun Nuxt mempunyai kemampuan untuk men-*generate* file statis yang bisa kita gunakan juga untuk membuat blog statis, namun sebenarnya ini merupakan fungsi yang *nice-to-have* bagi Nuxt.\n\nSementara Gridsome merupakan pemain yang punya spesialis di bagian ini. Gridsome sudah secara *default* memiliki fitur *generate* yang dipersenjatai dengan berbagai *built-in* fitur lain yang dibutuhkan ketika membuat blog statis seperti otomatis melakukan *code-splitting*, melakukan kompresi gambar, mendukung PWA secara penuh, dan tentunya sangat bersahabat dengan SEO. Kita juga bisa dengan mudah mengorganisasikan berkas konten kita dengan **Markdown** tanpa perlu tambahan konfigurasi apapun lagi. Bila kalian lihat di repository [Blog 2.0 ↗️](/blog-2-0-in-nuxtjs) yang saya buat dengan Nuxt tentu tau bahwa saya harus melakukan berbagai \"kecurangan\" untuk mengerjakan hal yang sama.\n\n<img v-lazyload src=\"/images/placeholder-1x1.png\" data-src=\"https://gridsome.org/assets/how-it-works.gif\" alt=\"How Gridsome Works\">\n\n## Membuat Blog dengan Gridsome\n\nMembuat blog dengan Gridsome sekarang sangat dipermudah dengan adanya *starter template* yang menurut saya sudah cukup komplit untuk kebutuhan umum sebuah blog.\n\nGridsome membuat starter yakni [gridsome-starter-blog ↗️](https://github.com/gridsome/gridsome-starter-blog) yang bisa kalian gunakan dengan cepat dan mudah untuk pertama kali. Dengan menggunakan starter seperti ini akan mengurangi banyak beban di depan untuk melakukan banyak konfigurasi yang tentunya akan membingungkan bagi pemula seperti saya ini.\n\nBerikut kurang lebih langkah-langkah untuk membuat blog dengan menggunakan starter template dari Gridsome ini:\n\n**1. Install Gridsome CLI**\n\n```bash\n$ npm install --global @gridsome/cli\n```\n\n**2. Buat proyek baru dengan `gridsome-starter-blog`**\n\n```bash\n$ gridsome create gridsome-blog https://github.com/gridsome/gridsome-starter-blog.git\n```\n\n**3. Menjalankan untuk pengembangan di lokal**\n\n```bash\n$ gridsome develop\n```\n\n**4. Men-*generate* berkas statis**\n\n```bash\n$ gridsome build\n```\n\nKalian bisa lihat hasil membuat Blog dengan gridsome starter di repository [https://github.com/mazipan/gridsome-blog ↗️](https://github.com/mazipan/gridsome-blog)\n\n## Deploy ke Netlify\n\nUntuk deploy Gridsome ke Netlify juga sangat mudah, bahkan Gridsome juga menyediakan dokumentasi resmi mengenai langkah-langkahnya di halaman [deploy-to-netlify ↗️](https://gridsome.org/docs/deploy-to-netlify), yang kurang lebih seperti berikut:\n\n1) Buat halaman projek baru di Netlify\n\n2) Tambahkan perintah `gridsome build` pada kolom *build command*\n\n3) Dan tambahkan direktori `dist` pada kolom *publish directory*\n\n4) Kalian bisa lihat hasilnya di [https://gridsome-blog.netlify.com/ ↗️](https://gridsome-blog.netlify.com/)\n\n## Menambahkan Artikel Baru\n\n1) Semua artikel terletal di direktori `/content/posts` dengan format berkas menggunakan Markdown yang berekstensi `.md`.\n\n2) Kita tinggal menambahkan file baru dengan nama berkas yang nantinya akan menjadi url dari artikel tersebut.\n\n3) Buat meta dari sebuah artikel, seperti berikut contohnya:\n\n```yaml\n---\ntitle: Membuat blog keren dengan Gridsome\nslug: create-awesome-blog-with-gridsome\ndate: 2019-03-14\ntags: ['Gridsome','JavaScript']\ncover_image: ./images/logo-poster.png\ncanonical_url: false\npublished: true\ndescription: Bagaimana memulai membuat Blog statis keren menggunakan Vue.js static site generator Gridsome dalam waktu yang singkat\n---\n```\n\n4) Kita bisa menambahkan gambar untuk artikel terkait pada direktori `/content/posts/images`, dan cukup menautkan dengan kode Markdown biasa seperti `![Image Alt](./images/logo-poster.png)`\n\n5) Kita bisa mengubah konfigurasi dari nama blog dan deskripsi blog pada file `gridsome.config.js`\n\n## Menambahkan dukungan sitemap.xml\n\nSayangnya dari bawaan templat belum disematkan dukungan untuk membuat `sitemap.xml`, karenanya di sini kita akan menambahkannya sendiri dengan cara seperti berikut:\n\n1. Pasang dependency\n\n```bash\nyarn add @gridsome/plugin-sitemap\n```\n\n2. Tambahkan `siteUrl` di dalam berkas `gridsome.config.js` dengan nilai URL produksi dari blog kita\n\n3. Tambahkan konfigurasi untuk sitemap pada berkas `gridsome.config.js` pada properti `plugins`, seperti berikut contohnya:\n\n```javascript\nmodule.exports = {\n  plugins: [\n    {\n      use: '@gridsome/plugin-sitemap',\n      options: {\n        cacheTime: 600000, // default\n        exclude: ['/exclude-me'],\n        config: {\n          '/articles/*': {\n            changefreq: 'weekly',\n            priority: 0.5\n          },\n          '/about': {\n            changefreq: 'monthly',\n            priority: 0.7\n          }\n        }\n      }\n    }\n  ]\n}\n```\n\n### Demikian artikel kali ini, semoga bermanfaat...\n",html:'<h2>Mengenal Blog Statis</h2>\n<p>&quot;Blog statis&quot; merupakan blog yang kita buat tanpa menggunakan <em>backend</em>, sehingga bisa kita deploy dengan mudah pada berbagai static host seperti Github Pages, Netlify, Firebase dan lainnya. Blog statis ini biasanya menggunakan templat seperti <em>Markdown</em> yang akan <em>build</em> sesaat sebelum <em>deploy</em> untuk menghasilkan file statis HTML, CSS dan JavaScript.</p>\n<h2>Apa itu Gridsome?</h2>\n<img v-lazyload src="/images/placeholder-1x1.png" data-src="https://gridsome.org/assets/logo-poster.png" alt="Gridsome Logo">\n<p><a href="https://gridsome.org/">Gridsome ↗️</a> merupakan anak baru di ekosistem Vue.js yang mengkhususkan dirinya sebagai pembuat halaman statis (<em>static site generator</em>). Bila kalian pengguna React.js, tentu sudah tidak asing dengan yang namanya <a href="https://www.gatsbyjs.org/">Gatsby ↗️</a> sebagai salah satu pembuat halaman statis terbaik saat ini. Nah, Gridsome sangat terinspirasi dari apa yang dikerjakan oleh Gatsby di ekosistem React.js.</p>\n<p>Sudah bukan hal baru bahwa ekosistem di Vue belum sekuat dan sekomplit di React, namun saya pribadi selalu terkagum-kagum dengan mereka yang bersusah payah membuatkan alternatif bagi banyak hal hebat di React untuk Vue. Gridsome, seperti ingin mengekor pada kesuksesan Nuxt yang mencoba mengadopsi Next.js di React. Nuxt yang beberapa tahun lalu belum terdengar suaranya hari ini bahkan telah menjadi pilihan terbaik ketika akan membuat sebuah aplikasi diatas Vue.</p>\n<h2>Mengapa Gridsome lebih baik dibandingkan Nuxt?</h2>\n<p>Nuxt pada dasarnya diperuntukkan untuk membuat aplikasi web di Vue yang membutuhkan rendering di server, Nuxt lebih khusus sangat disiapkan untuk menangani berbagai kebutuhan kompleks yang biasanya muncul ketika membuat sebuah aplikasi web. Meskipun Nuxt mempunyai kemampuan untuk men-<em>generate</em> file statis yang bisa kita gunakan juga untuk membuat blog statis, namun sebenarnya ini merupakan fungsi yang <em>nice-to-have</em> bagi Nuxt.</p>\n<p>Sementara Gridsome merupakan pemain yang punya spesialis di bagian ini. Gridsome sudah secara <em>default</em> memiliki fitur <em>generate</em> yang dipersenjatai dengan berbagai <em>built-in</em> fitur lain yang dibutuhkan ketika membuat blog statis seperti otomatis melakukan <em>code-splitting</em>, melakukan kompresi gambar, mendukung PWA secara penuh, dan tentunya sangat bersahabat dengan SEO. Kita juga bisa dengan mudah mengorganisasikan berkas konten kita dengan <strong>Markdown</strong> tanpa perlu tambahan konfigurasi apapun lagi. Bila kalian lihat di repository <a href="/blog-2-0-in-nuxtjs">Blog 2.0 ↗️</a> yang saya buat dengan Nuxt tentu tau bahwa saya harus melakukan berbagai &quot;kecurangan&quot; untuk mengerjakan hal yang sama.</p>\n<img v-lazyload src="/images/placeholder-1x1.png" data-src="https://gridsome.org/assets/how-it-works.gif" alt="How Gridsome Works">\n<h2>Membuat Blog dengan Gridsome</h2>\n<p>Membuat blog dengan Gridsome sekarang sangat dipermudah dengan adanya <em>starter template</em> yang menurut saya sudah cukup komplit untuk kebutuhan umum sebuah blog.</p>\n<p>Gridsome membuat starter yakni <a href="https://github.com/gridsome/gridsome-starter-blog">gridsome-starter-blog ↗️</a> yang bisa kalian gunakan dengan cepat dan mudah untuk pertama kali. Dengan menggunakan starter seperti ini akan mengurangi banyak beban di depan untuk melakukan banyak konfigurasi yang tentunya akan membingungkan bagi pemula seperti saya ini.</p>\n<p>Berikut kurang lebih langkah-langkah untuk membuat blog dengan menggunakan starter template dari Gridsome ini:</p>\n<p><strong>1. Install Gridsome CLI</strong></p>\n<pre><code class="language-bash">$ npm install --global @gridsome/cli\n</code></pre>\n<p><strong>2. Buat proyek baru dengan <code>gridsome-starter-blog</code></strong></p>\n<pre><code class="language-bash">$ gridsome create gridsome-blog https://github.com/gridsome/gridsome-starter-blog.git\n</code></pre>\n<p><strong>3. Menjalankan untuk pengembangan di lokal</strong></p>\n<pre><code class="language-bash">$ gridsome develop\n</code></pre>\n<p><strong>4. Men-<em>generate</em> berkas statis</strong></p>\n<pre><code class="language-bash">$ gridsome build\n</code></pre>\n<p>Kalian bisa lihat hasil membuat Blog dengan gridsome starter di repository <a href="https://github.com/mazipan/gridsome-blog">https://github.com/mazipan/gridsome-blog ↗️</a></p>\n<h2>Deploy ke Netlify</h2>\n<p>Untuk deploy Gridsome ke Netlify juga sangat mudah, bahkan Gridsome juga menyediakan dokumentasi resmi mengenai langkah-langkahnya di halaman <a href="https://gridsome.org/docs/deploy-to-netlify">deploy-to-netlify ↗️</a>, yang kurang lebih seperti berikut:</p>\n<ol>\n<li>\n<p>Buat halaman projek baru di Netlify</p>\n</li>\n<li>\n<p>Tambahkan perintah <code>gridsome build</code> pada kolom <em>build command</em></p>\n</li>\n<li>\n<p>Dan tambahkan direktori <code>dist</code> pada kolom <em>publish directory</em></p>\n</li>\n<li>\n<p>Kalian bisa lihat hasilnya di <a href="https://gridsome-blog.netlify.com/">https://gridsome-blog.netlify.com/ ↗️</a></p>\n</li>\n</ol>\n<h2>Menambahkan Artikel Baru</h2>\n<ol>\n<li>\n<p>Semua artikel terletal di direktori <code>/content/posts</code> dengan format berkas menggunakan Markdown yang berekstensi <code>.md</code>.</p>\n</li>\n<li>\n<p>Kita tinggal menambahkan file baru dengan nama berkas yang nantinya akan menjadi url dari artikel tersebut.</p>\n</li>\n<li>\n<p>Buat meta dari sebuah artikel, seperti berikut contohnya:</p>\n</li>\n</ol>\n<pre><code class="language-yaml">---\ntitle: Membuat blog keren dengan Gridsome\nslug: create-awesome-blog-with-gridsome\ndate: 2019-03-14\ntags: [\'Gridsome\',\'JavaScript\']\ncover_image: ./images/logo-poster.png\ncanonical_url: false\npublished: true\ndescription: Bagaimana memulai membuat Blog statis keren menggunakan Vue.js static site generator Gridsome dalam waktu yang singkat\n---\n</code></pre>\n<ol start="4">\n<li>\n<p>Kita bisa menambahkan gambar untuk artikel terkait pada direktori <code>/content/posts/images</code>, dan cukup menautkan dengan kode Markdown biasa seperti <code>![Image Alt](./images/logo-poster.png)</code></p>\n</li>\n<li>\n<p>Kita bisa mengubah konfigurasi dari nama blog dan deskripsi blog pada file <code>gridsome.config.js</code></p>\n</li>\n</ol>\n<h2>Menambahkan dukungan sitemap.xml</h2>\n<p>Sayangnya dari bawaan templat belum disematkan dukungan untuk membuat <code>sitemap.xml</code>, karenanya di sini kita akan menambahkannya sendiri dengan cara seperti berikut:</p>\n<ol>\n<li>Pasang dependency</li>\n</ol>\n<pre><code class="language-bash">yarn add @gridsome/plugin-sitemap\n</code></pre>\n<ol start="2">\n<li>\n<p>Tambahkan <code>siteUrl</code> di dalam berkas <code>gridsome.config.js</code> dengan nilai URL produksi dari blog kita</p>\n</li>\n<li>\n<p>Tambahkan konfigurasi untuk sitemap pada berkas <code>gridsome.config.js</code> pada properti <code>plugins</code>, seperti berikut contohnya:</p>\n</li>\n</ol>\n<pre><code class="language-javascript">module.exports = {\n  plugins: [\n    {\n      use: \'@gridsome/plugin-sitemap\',\n      options: {\n        cacheTime: 600000, // default\n        exclude: [\'/exclude-me\'],\n        config: {\n          \'/articles/*\': {\n            changefreq: \'weekly\',\n            priority: 0.5\n          },\n          \'/about\': {\n            changefreq: \'monthly\',\n            priority: 0.7\n          }\n        }\n      }\n    }\n  ]\n}\n</code></pre>\n<h3>Demikian artikel kali ini, semoga bermanfaat...</h3>\n',attributes:{title:"Membuat blog keren dengan Gridsome",slug:"create-awesome-blog-with-gridsome",date:"2019-03-14",minute2read:10,description:"Bagaimana memulai membuat Blog statis keren menggunakan Vue.js static site generator Gridsome dalam waktu yang singkat",categories:["javascript","gridsome"]},vue:{render:'return function render() { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'div\',{staticClass:"content-markdown"},[_c(\'h2\',[_vm._v("Mengenal Blog Statis")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c(\'h2\',[_vm._v("Apa itu Gridsome?")]),_vm._v(" "),_c(\'img\',{directives:[{name:"lazyload",rawName:"v-lazyload"}],attrs:{"src":"/images/placeholder-1x1.png","data-src":"https://gridsome.org/assets/logo-poster.png","alt":"Gridsome Logo"}}),_vm._v(" "),_vm._m(1),_vm._v(" "),_c(\'p\',[_vm._v("Sudah bukan hal baru bahwa ekosistem di Vue belum sekuat dan sekomplit di React, namun saya pribadi selalu terkagum-kagum dengan mereka yang bersusah payah membuatkan alternatif bagi banyak hal hebat di React untuk Vue. Gridsome, seperti ingin mengekor pada kesuksesan Nuxt yang mencoba mengadopsi Next.js di React. Nuxt yang beberapa tahun lalu belum terdengar suaranya hari ini bahkan telah menjadi pilihan terbaik ketika akan membuat sebuah aplikasi diatas Vue.")]),_vm._v(" "),_c(\'h2\',[_vm._v("Mengapa Gridsome lebih baik dibandingkan Nuxt?")]),_vm._v(" "),_vm._m(2),_vm._v(" "),_vm._m(3),_vm._v(" "),_c(\'img\',{directives:[{name:"lazyload",rawName:"v-lazyload"}],attrs:{"src":"/images/placeholder-1x1.png","data-src":"https://gridsome.org/assets/how-it-works.gif","alt":"How Gridsome Works"}}),_vm._v(" "),_c(\'h2\',[_vm._v("Membuat Blog dengan Gridsome")]),_vm._v(" "),_vm._m(4),_vm._v(" "),_vm._m(5),_vm._v(" "),_c(\'p\',[_vm._v("Berikut kurang lebih langkah-langkah untuk membuat blog dengan menggunakan starter template dari Gridsome ini:")]),_vm._v(" "),_vm._m(6),_vm._v(" "),_vm._m(7),_vm._v(" "),_vm._m(8),_vm._v(" "),_vm._m(9),_vm._v(" "),_vm._m(10),_vm._v(" "),_vm._m(11),_vm._v(" "),_vm._m(12),_vm._v(" "),_vm._m(13),_vm._v(" "),_vm._m(14),_vm._v(" "),_c(\'h2\',[_vm._v("Deploy ke Netlify")]),_vm._v(" "),_vm._m(15),_vm._v(" "),_vm._m(16),_vm._v(" "),_c(\'h2\',[_vm._v("Menambahkan Artikel Baru")]),_vm._v(" "),_vm._m(17),_vm._v(" "),_vm._m(18),_vm._v(" "),_vm._m(19),_vm._v(" "),_c(\'h2\',[_vm._v("Menambahkan dukungan sitemap.xml")]),_vm._v(" "),_vm._m(20),_vm._v(" "),_vm._m(21),_vm._v(" "),_vm._m(22),_vm._v(" "),_vm._m(23),_vm._v(" "),_vm._m(24),_vm._v(" "),_c(\'h3\',[_vm._v("Demikian artikel kali ini, semoga bermanfaat...")])]) }',staticRenderFns:'return [function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("\\"Blog statis\\" merupakan blog yang kita buat tanpa menggunakan "),_c(\'em\',[_vm._v("backend")]),_vm._v(", sehingga bisa kita deploy dengan mudah pada berbagai static host seperti Github Pages, Netlify, Firebase dan lainnya. Blog statis ini biasanya menggunakan templat seperti "),_c(\'em\',[_vm._v("Markdown")]),_vm._v(" yang akan "),_c(\'em\',[_vm._v("build")]),_vm._v(" sesaat sebelum "),_c(\'em\',[_vm._v("deploy")]),_vm._v(" untuk menghasilkan file statis HTML, CSS dan JavaScript.")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_c(\'a\',{attrs:{"href":"https://gridsome.org/"}},[_vm._v("Gridsome ↗️")]),_vm._v(" merupakan anak baru di ekosistem Vue.js yang mengkhususkan dirinya sebagai pembuat halaman statis ("),_c(\'em\',[_vm._v("static site generator")]),_vm._v("). Bila kalian pengguna React.js, tentu sudah tidak asing dengan yang namanya "),_c(\'a\',{attrs:{"href":"https://www.gatsbyjs.org/"}},[_vm._v("Gatsby ↗️")]),_vm._v(" sebagai salah satu pembuat halaman statis terbaik saat ini. Nah, Gridsome sangat terinspirasi dari apa yang dikerjakan oleh Gatsby di ekosistem React.js.")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("Nuxt pada dasarnya diperuntukkan untuk membuat aplikasi web di Vue yang membutuhkan rendering di server, Nuxt lebih khusus sangat disiapkan untuk menangani berbagai kebutuhan kompleks yang biasanya muncul ketika membuat sebuah aplikasi web. Meskipun Nuxt mempunyai kemampuan untuk men-"),_c(\'em\',[_vm._v("generate")]),_vm._v(" file statis yang bisa kita gunakan juga untuk membuat blog statis, namun sebenarnya ini merupakan fungsi yang "),_c(\'em\',[_vm._v("nice-to-have")]),_vm._v(" bagi Nuxt.")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("Sementara Gridsome merupakan pemain yang punya spesialis di bagian ini. Gridsome sudah secara "),_c(\'em\',[_vm._v("default")]),_vm._v(" memiliki fitur "),_c(\'em\',[_vm._v("generate")]),_vm._v(" yang dipersenjatai dengan berbagai "),_c(\'em\',[_vm._v("built-in")]),_vm._v(" fitur lain yang dibutuhkan ketika membuat blog statis seperti otomatis melakukan "),_c(\'em\',[_vm._v("code-splitting")]),_vm._v(", melakukan kompresi gambar, mendukung PWA secara penuh, dan tentunya sangat bersahabat dengan SEO. Kita juga bisa dengan mudah mengorganisasikan berkas konten kita dengan "),_c(\'strong\',[_vm._v("Markdown")]),_vm._v(" tanpa perlu tambahan konfigurasi apapun lagi. Bila kalian lihat di repository "),_c(\'a\',{attrs:{"href":"/blog-2-0-in-nuxtjs"}},[_vm._v("Blog 2.0 ↗️")]),_vm._v(" yang saya buat dengan Nuxt tentu tau bahwa saya harus melakukan berbagai \\"kecurangan\\" untuk mengerjakan hal yang sama.")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("Membuat blog dengan Gridsome sekarang sangat dipermudah dengan adanya "),_c(\'em\',[_vm._v("starter template")]),_vm._v(" yang menurut saya sudah cukup komplit untuk kebutuhan umum sebuah blog.")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("Gridsome membuat starter yakni "),_c(\'a\',{attrs:{"href":"https://github.com/gridsome/gridsome-starter-blog"}},[_vm._v("gridsome-starter-blog ↗️")]),_vm._v(" yang bisa kalian gunakan dengan cepat dan mudah untuk pertama kali. Dengan menggunakan starter seperti ini akan mengurangi banyak beban di depan untuk melakukan banyak konfigurasi yang tentunya akan membingungkan bagi pemula seperti saya ini.")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_c(\'strong\',[_vm._v("1. Install Gridsome CLI")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'pre\',[_c(\'code\',{pre:true,attrs:{"class":"language-bash"}},[_vm._v("$ npm install --global @gridsome/cli\\n")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_c(\'strong\',[_vm._v("2. Buat proyek baru dengan "),_c(\'code\',{pre:true},[_vm._v("gridsome-starter-blog")])])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'pre\',[_c(\'code\',{pre:true,attrs:{"class":"language-bash"}},[_vm._v("$ gridsome create gridsome-blog https://github.com/gridsome/gridsome-starter-blog.git\\n")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_c(\'strong\',[_vm._v("3. Menjalankan untuk pengembangan di lokal")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'pre\',[_c(\'code\',{pre:true,attrs:{"class":"language-bash"}},[_vm._v("$ gridsome develop\\n")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_c(\'strong\',[_vm._v("4. Men-"),_c(\'em\',[_vm._v("generate")]),_vm._v(" berkas statis")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'pre\',[_c(\'code\',{pre:true,attrs:{"class":"language-bash"}},[_vm._v("$ gridsome build\\n")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("Kalian bisa lihat hasil membuat Blog dengan gridsome starter di repository "),_c(\'a\',{attrs:{"href":"https://github.com/mazipan/gridsome-blog"}},[_vm._v("https://github.com/mazipan/gridsome-blog ↗️")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("Untuk deploy Gridsome ke Netlify juga sangat mudah, bahkan Gridsome juga menyediakan dokumentasi resmi mengenai langkah-langkahnya di halaman "),_c(\'a\',{attrs:{"href":"https://gridsome.org/docs/deploy-to-netlify"}},[_vm._v("deploy-to-netlify ↗️")]),_vm._v(", yang kurang lebih seperti berikut:")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'ol\',[_c(\'li\',[_c(\'p\',[_vm._v("Buat halaman projek baru di Netlify")])]),_vm._v(" "),_c(\'li\',[_c(\'p\',[_vm._v("Tambahkan perintah "),_c(\'code\',{pre:true},[_vm._v("gridsome build")]),_vm._v(" pada kolom "),_c(\'em\',[_vm._v("build command")])])]),_vm._v(" "),_c(\'li\',[_c(\'p\',[_vm._v("Dan tambahkan direktori "),_c(\'code\',{pre:true},[_vm._v("dist")]),_vm._v(" pada kolom "),_c(\'em\',[_vm._v("publish directory")])])]),_vm._v(" "),_c(\'li\',[_c(\'p\',[_vm._v("Kalian bisa lihat hasilnya di "),_c(\'a\',{attrs:{"href":"https://gridsome-blog.netlify.com/"}},[_vm._v("https://gridsome-blog.netlify.com/ ↗️")])])])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'ol\',[_c(\'li\',[_c(\'p\',[_vm._v("Semua artikel terletal di direktori "),_c(\'code\',{pre:true},[_vm._v("/content/posts")]),_vm._v(" dengan format berkas menggunakan Markdown yang berekstensi "),_c(\'code\',{pre:true},[_vm._v(".md")]),_vm._v(".")])]),_vm._v(" "),_c(\'li\',[_c(\'p\',[_vm._v("Kita tinggal menambahkan file baru dengan nama berkas yang nantinya akan menjadi url dari artikel tersebut.")])]),_vm._v(" "),_c(\'li\',[_c(\'p\',[_vm._v("Buat meta dari sebuah artikel, seperti berikut contohnya:")])])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'pre\',[_c(\'code\',{pre:true,attrs:{"class":"language-yaml"}},[_vm._v("---\\ntitle: Membuat blog keren dengan Gridsome\\nslug: create-awesome-blog-with-gridsome\\ndate: 2019-03-14\\ntags: [\'Gridsome\',\'JavaScript\']\\ncover_image: ./images/logo-poster.png\\ncanonical_url: false\\npublished: true\\ndescription: Bagaimana memulai membuat Blog statis keren menggunakan Vue.js static site generator Gridsome dalam waktu yang singkat\\n---\\n")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'ol\',{attrs:{"start":"4"}},[_c(\'li\',[_c(\'p\',[_vm._v("Kita bisa menambahkan gambar untuk artikel terkait pada direktori "),_c(\'code\',{pre:true},[_vm._v("/content/posts/images")]),_vm._v(", dan cukup menautkan dengan kode Markdown biasa seperti "),_c(\'code\',{pre:true},[_vm._v("![Image Alt](./images/logo-poster.png)")])])]),_vm._v(" "),_c(\'li\',[_c(\'p\',[_vm._v("Kita bisa mengubah konfigurasi dari nama blog dan deskripsi blog pada file "),_c(\'code\',{pre:true},[_vm._v("gridsome.config.js")])])])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("Sayangnya dari bawaan templat belum disematkan dukungan untuk membuat "),_c(\'code\',{pre:true},[_vm._v("sitemap.xml")]),_vm._v(", karenanya di sini kita akan menambahkannya sendiri dengan cara seperti berikut:")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'ol\',[_c(\'li\',[_vm._v("Pasang dependency")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'pre\',[_c(\'code\',{pre:true,attrs:{"class":"language-bash"}},[_vm._v("yarn add @gridsome/plugin-sitemap\\n")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'ol\',{attrs:{"start":"2"}},[_c(\'li\',[_c(\'p\',[_vm._v("Tambahkan "),_c(\'code\',{pre:true},[_vm._v("siteUrl")]),_vm._v(" di dalam berkas "),_c(\'code\',{pre:true},[_vm._v("gridsome.config.js")]),_vm._v(" dengan nilai URL produksi dari blog kita")])]),_vm._v(" "),_c(\'li\',[_c(\'p\',[_vm._v("Tambahkan konfigurasi untuk sitemap pada berkas "),_c(\'code\',{pre:true},[_vm._v("gridsome.config.js")]),_vm._v(" pada properti "),_c(\'code\',{pre:true},[_vm._v("plugins")]),_vm._v(", seperti berikut contohnya:")])])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'pre\',[_c(\'code\',{pre:true,attrs:{"class":"language-javascript"}},[_vm._v("module.exports = {\\n  plugins: [\\n    {\\n      use: \'@gridsome/plugin-sitemap\',\\n      options: {\\n        cacheTime: 600000, // default\\n        exclude: [\'/exclude-me\'],\\n        config: {\\n          \'/articles/*\': {\\n            changefreq: \'weekly\',\\n            priority: 0.5\\n          },\\n          \'/about\': {\\n            changefreq: \'monthly\',\\n            priority: 0.7\\n          }\\n        }\\n      }\\n    }\\n  ]\\n}\\n")])]) }]',component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content-markdown"},[t("h2",[e._v("Mengenal Blog Statis")]),e._v(" "),e._m(0),e._v(" "),t("h2",[e._v("Apa itu Gridsome?")]),e._v(" "),t("img",{directives:[{name:"lazyload",rawName:"v-lazyload"}],attrs:{src:"/images/placeholder-1x1.png","data-src":"https://gridsome.org/assets/logo-poster.png",alt:"Gridsome Logo"}}),e._v(" "),e._m(1),e._v(" "),t("p",[e._v("Sudah bukan hal baru bahwa ekosistem di Vue belum sekuat dan sekomplit di React, namun saya pribadi selalu terkagum-kagum dengan mereka yang bersusah payah membuatkan alternatif bagi banyak hal hebat di React untuk Vue. Gridsome, seperti ingin mengekor pada kesuksesan Nuxt yang mencoba mengadopsi Next.js di React. Nuxt yang beberapa tahun lalu belum terdengar suaranya hari ini bahkan telah menjadi pilihan terbaik ketika akan membuat sebuah aplikasi diatas Vue.")]),e._v(" "),t("h2",[e._v("Mengapa Gridsome lebih baik dibandingkan Nuxt?")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),t("img",{directives:[{name:"lazyload",rawName:"v-lazyload"}],attrs:{src:"/images/placeholder-1x1.png","data-src":"https://gridsome.org/assets/how-it-works.gif",alt:"How Gridsome Works"}}),e._v(" "),t("h2",[e._v("Membuat Blog dengan Gridsome")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),t("p",[e._v("Berikut kurang lebih langkah-langkah untuk membuat blog dengan menggunakan starter template dari Gridsome ini:")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),t("h2",[e._v("Deploy ke Netlify")]),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),t("h2",[e._v("Menambahkan Artikel Baru")]),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),t("h2",[e._v("Menambahkan dukungan sitemap.xml")]),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),t("h3",[e._v("Demikian artikel kali ini, semoga bermanfaat...")])])},this.$options.staticRenderFns=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v('"Blog statis" merupakan blog yang kita buat tanpa menggunakan '),t("em",[e._v("backend")]),e._v(", sehingga bisa kita deploy dengan mudah pada berbagai static host seperti Github Pages, Netlify, Firebase dan lainnya. Blog statis ini biasanya menggunakan templat seperti "),t("em",[e._v("Markdown")]),e._v(" yang akan "),t("em",[e._v("build")]),e._v(" sesaat sebelum "),t("em",[e._v("deploy")]),e._v(" untuk menghasilkan file statis HTML, CSS dan JavaScript.")])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[n("a",{attrs:{href:"https://gridsome.org/"}},[this._v("Gridsome ↗️")]),this._v(" merupakan anak baru di ekosistem Vue.js yang mengkhususkan dirinya sebagai pembuat halaman statis ("),n("em",[this._v("static site generator")]),this._v("). Bila kalian pengguna React.js, tentu sudah tidak asing dengan yang namanya "),n("a",{attrs:{href:"https://www.gatsbyjs.org/"}},[this._v("Gatsby ↗️")]),this._v(" sebagai salah satu pembuat halaman statis terbaik saat ini. Nah, Gridsome sangat terinspirasi dari apa yang dikerjakan oleh Gatsby di ekosistem React.js.")])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("Nuxt pada dasarnya diperuntukkan untuk membuat aplikasi web di Vue yang membutuhkan rendering di server, Nuxt lebih khusus sangat disiapkan untuk menangani berbagai kebutuhan kompleks yang biasanya muncul ketika membuat sebuah aplikasi web. Meskipun Nuxt mempunyai kemampuan untuk men-"),n("em",[this._v("generate")]),this._v(" file statis yang bisa kita gunakan juga untuk membuat blog statis, namun sebenarnya ini merupakan fungsi yang "),n("em",[this._v("nice-to-have")]),this._v(" bagi Nuxt.")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Sementara Gridsome merupakan pemain yang punya spesialis di bagian ini. Gridsome sudah secara "),t("em",[e._v("default")]),e._v(" memiliki fitur "),t("em",[e._v("generate")]),e._v(" yang dipersenjatai dengan berbagai "),t("em",[e._v("built-in")]),e._v(" fitur lain yang dibutuhkan ketika membuat blog statis seperti otomatis melakukan "),t("em",[e._v("code-splitting")]),e._v(", melakukan kompresi gambar, mendukung PWA secara penuh, dan tentunya sangat bersahabat dengan SEO. Kita juga bisa dengan mudah mengorganisasikan berkas konten kita dengan "),t("strong",[e._v("Markdown")]),e._v(" tanpa perlu tambahan konfigurasi apapun lagi. Bila kalian lihat di repository "),t("a",{attrs:{href:"/blog-2-0-in-nuxtjs"}},[e._v("Blog 2.0 ↗️")]),e._v(' yang saya buat dengan Nuxt tentu tau bahwa saya harus melakukan berbagai "kecurangan" untuk mengerjakan hal yang sama.')])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("Membuat blog dengan Gridsome sekarang sangat dipermudah dengan adanya "),n("em",[this._v("starter template")]),this._v(" yang menurut saya sudah cukup komplit untuk kebutuhan umum sebuah blog.")])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("Gridsome membuat starter yakni "),n("a",{attrs:{href:"https://github.com/gridsome/gridsome-starter-blog"}},[this._v("gridsome-starter-blog ↗️")]),this._v(" yang bisa kalian gunakan dengan cepat dan mudah untuk pertama kali. Dengan menggunakan starter seperti ini akan mengurangi banyak beban di depan untuk melakukan banyak konfigurasi yang tentunya akan membingungkan bagi pemula seperti saya ini.")])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[n("strong",[this._v("1. Install Gridsome CLI")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("pre",[n("code",{pre:!0,attrs:{class:"language-bash"}},[this._v("$ npm install --global @gridsome/cli\n")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[n("strong",[this._v("2. Buat proyek baru dengan "),n("code",{pre:!0},[this._v("gridsome-starter-blog")])])])},function(){var e=this.$createElement,n=this._self._c||e;return n("pre",[n("code",{pre:!0,attrs:{class:"language-bash"}},[this._v("$ gridsome create gridsome-blog https://github.com/gridsome/gridsome-starter-blog.git\n")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[n("strong",[this._v("3. Menjalankan untuk pengembangan di lokal")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("pre",[n("code",{pre:!0,attrs:{class:"language-bash"}},[this._v("$ gridsome develop\n")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[n("strong",[this._v("4. Men-"),n("em",[this._v("generate")]),this._v(" berkas statis")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("pre",[n("code",{pre:!0,attrs:{class:"language-bash"}},[this._v("$ gridsome build\n")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("Kalian bisa lihat hasil membuat Blog dengan gridsome starter di repository "),n("a",{attrs:{href:"https://github.com/mazipan/gridsome-blog"}},[this._v("https://github.com/mazipan/gridsome-blog ↗️")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("Untuk deploy Gridsome ke Netlify juga sangat mudah, bahkan Gridsome juga menyediakan dokumentasi resmi mengenai langkah-langkahnya di halaman "),n("a",{attrs:{href:"https://gridsome.org/docs/deploy-to-netlify"}},[this._v("deploy-to-netlify ↗️")]),this._v(", yang kurang lebih seperti berikut:")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ol",[t("li",[t("p",[e._v("Buat halaman projek baru di Netlify")])]),e._v(" "),t("li",[t("p",[e._v("Tambahkan perintah "),t("code",{pre:!0},[e._v("gridsome build")]),e._v(" pada kolom "),t("em",[e._v("build command")])])]),e._v(" "),t("li",[t("p",[e._v("Dan tambahkan direktori "),t("code",{pre:!0},[e._v("dist")]),e._v(" pada kolom "),t("em",[e._v("publish directory")])])]),e._v(" "),t("li",[t("p",[e._v("Kalian bisa lihat hasilnya di "),t("a",{attrs:{href:"https://gridsome-blog.netlify.com/"}},[e._v("https://gridsome-blog.netlify.com/ ↗️")])])])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ol",[t("li",[t("p",[e._v("Semua artikel terletal di direktori "),t("code",{pre:!0},[e._v("/content/posts")]),e._v(" dengan format berkas menggunakan Markdown yang berekstensi "),t("code",{pre:!0},[e._v(".md")]),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("Kita tinggal menambahkan file baru dengan nama berkas yang nantinya akan menjadi url dari artikel tersebut.")])]),e._v(" "),t("li",[t("p",[e._v("Buat meta dari sebuah artikel, seperti berikut contohnya:")])])])},function(){var e=this.$createElement,n=this._self._c||e;return n("pre",[n("code",{pre:!0,attrs:{class:"language-yaml"}},[this._v("---\ntitle: Membuat blog keren dengan Gridsome\nslug: create-awesome-blog-with-gridsome\ndate: 2019-03-14\ntags: ['Gridsome','JavaScript']\ncover_image: ./images/logo-poster.png\ncanonical_url: false\npublished: true\ndescription: Bagaimana memulai membuat Blog statis keren menggunakan Vue.js static site generator Gridsome dalam waktu yang singkat\n---\n")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("ol",{attrs:{start:"4"}},[n("li",[n("p",[this._v("Kita bisa menambahkan gambar untuk artikel terkait pada direktori "),n("code",{pre:!0},[this._v("/content/posts/images")]),this._v(", dan cukup menautkan dengan kode Markdown biasa seperti "),n("code",{pre:!0},[this._v("![Image Alt](./images/logo-poster.png)")])])]),this._v(" "),n("li",[n("p",[this._v("Kita bisa mengubah konfigurasi dari nama blog dan deskripsi blog pada file "),n("code",{pre:!0},[this._v("gridsome.config.js")])])])])},function(){var e=this.$createElement,n=this._self._c||e;return n("p",[this._v("Sayangnya dari bawaan templat belum disematkan dukungan untuk membuat "),n("code",{pre:!0},[this._v("sitemap.xml")]),this._v(", karenanya di sini kita akan menambahkannya sendiri dengan cara seperti berikut:")])},function(){var e=this.$createElement,n=this._self._c||e;return n("ol",[n("li",[this._v("Pasang dependency")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("pre",[n("code",{pre:!0,attrs:{class:"language-bash"}},[this._v("yarn add @gridsome/plugin-sitemap\n")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ol",{attrs:{start:"2"}},[t("li",[t("p",[e._v("Tambahkan "),t("code",{pre:!0},[e._v("siteUrl")]),e._v(" di dalam berkas "),t("code",{pre:!0},[e._v("gridsome.config.js")]),e._v(" dengan nilai URL produksi dari blog kita")])]),e._v(" "),t("li",[t("p",[e._v("Tambahkan konfigurasi untuk sitemap pada berkas "),t("code",{pre:!0},[e._v("gridsome.config.js")]),e._v(" pada properti "),t("code",{pre:!0},[e._v("plugins")]),e._v(", seperti berikut contohnya:")])])])},function(){var e=this.$createElement,n=this._self._c||e;return n("pre",[n("code",{pre:!0,attrs:{class:"language-javascript"}},[this._v("module.exports = {\n  plugins: [\n    {\n      use: '@gridsome/plugin-sitemap',\n      options: {\n        cacheTime: 600000, // default\n        exclude: ['/exclude-me'],\n        config: {\n          '/articles/*': {\n            changefreq: 'weekly',\n            priority: 0.5\n          },\n          '/about': {\n            changefreq: 'monthly',\n            priority: 0.7\n          }\n        }\n      }\n    }\n  ]\n}\n")])])}]}}}}}}]);