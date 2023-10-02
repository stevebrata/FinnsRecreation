const sherly = 'image/sherly.jpg'
const Rizal = 'image/Rizal.jpg'
const Anas = 'image/Anas.jpg'

let datas = [
  {
    "gambar": sherly,
    "name": "Sherly",
    "comment": "Saya mengikuti acara Lapathon sebagai vendor tenant pada September 2023 di area halaman. Restorannya besar, area taman airnya ramah anak, keamanannya bagus, toiletnya bersih."
  },
  {
    "gambar": Rizal,
    "name": "Faizal Erlangga",
    "comment": "Tempat bermain yang sangat cocok untuk anak anak karna di sini hampir semua wahana untuk anak anak tapi untuk dewasa juga bisa, di sini yersedia kolam renang yang sangat besar di lengkapi dengan serodotan yang juga besar dan panjang, lokasi nya yang dekat dengan tempat wisata cocok untuk anda kldan keluarga menghabiskan akhir pekan di sini"
  },
  {
    "gambar": Anas,
    "name": "Anas",
    "comment": "Wahana air terbaik dan sangat nyaman. Splash water park di Finns Recreation Club di Canggu Bali terdiri dari 4 kolam renang. Kolam Lap Pool untuk latihan, kolam Lagoon paling luas dengan ayunan ditengah kolam, Kolam Crezy Creek merupakan kolam arus seperti disungai dan Water play ground merupakan area bermain untuk balita yang dilengkapi slider dan lainnya"
  }
]

let cards = ''
let coment = document.querySelector('#Testimonial')
datas.forEach(e => {
  cards += cek(e)
})
coment.innerHTML = cards
console.log(cards)

function cek(e) {
  return ` 
  <div class="card" style="width: 18rem;">
  <img src="${e.gambar}" class="card-img-top" alt="...">
  <div class="card-body">
    <h3 class="card-name">${e.name}</h3>
    <p class="card-text">${e.comment}</p>
  </div>
  </div>
  `
}