let arr = [
    {
    title:"Smartphones",
    products: [
        {
        name:'Apple iPhone 14 ; Дисплей: 6.1" OLED - 1170 x 2532 ; Чип: Apple A15 Bionic ; Камера: 2 (12 MP + 12 MP) ; Батарея: 3279 мАч ; OS: iOS 17.4 Вес 170г',
        imgSrc:"https://sun9-45.userapi.com/impg/mUpDYjjkYYOb3cM4UjoXdc9OUEWMEHdRjPmLkg/dYQxMQG43j0.jpg?size=2500x1875&quality=96&sign=4ebb837c26c608a2b68880e2dc61c17b&type=album",
        price: 1000,
        installment:"168 634сум/мес",
        color:"grey"
    },
    {
        name:'Samsung Galaxy S9 · Дисплей: 5.8" Super AMOLED - 1440 x 2960 · Чип: Samsung Exynos 9 Octa 9810 · Камера: 1 (12 MP) · Батарея: 3000 мАч · OS: Android 10 · Вес: 163 г.',
        imgSrc:"https://images-na.ssl-images-amazon.com/images/I/61QLEFK6lEL._SL1280_.jpg",
        price: 400,
        installment:"168 634сум/мес",
        color:"black",
    },
    {
        name:'Дисплей: 6.67" AMOLED - 1080 x 2400 · Чип: MediaTek Dimensity 1080 · Камера: 3 (50 MP + 8 MP + 2 MP) · Батарея: 5000 мАч · OS: Android 14',
        imgSrc:"https://cdn1.ozone.ru/s3/multimedia-3/6581763399.jpg",
        price: 300,
        installment:"168 634сум/мес",
        color:"red",
    },
    {
        name:'Apple iPhone XS · Дисплей: 5.8" OLED - 1125 x 2436 · Чип: Apple A12 Bionic · Камера: 2 (12 MP + 12 MP) · Батарея: 2658 мАч · OS: iOS 17.4 Вес: 177 г.',
        imgSrc:"https://images-cdn.ubuy.ae/652952c569d2db4a46513806-restored-iphone-xs-max-64gb-gold.jpg",
        price: 400,
        installment:"168 634сум/мес",
        color:"gold",
    },
  ]
 },
  {
    title:"Laptops",
    products: [
        {
       name:'Lenovo Yoga,Жесткий диск. 256GB SSD ; Корпус. алюминий ; Видеокарта. Intel UHD Graphics ; Диагональ экрана. 13.3" ; Порты. 1 x USB 2.0, HDMI, USB Type-C x 2.',
        imgSrc:"https://m.media-amazon.com/images/I/81LjVHCfHxL.jpg",
        price: 700,
        installment:"168 634сум/мес",
        color:"orange"
    },
    {
        name:'HP victus,15-FA1093DX i5-13420H 8/512 GB SSD RTX3050 6 GB 15.6" FHD ; Тип памяти. DDR4 ; Частота памяти. 3200 МГц ; Оперативная память. 8 ГБ.',
        imgSrc:"https://nout.uz/wp-content/uploads/2021/11/victus2-300x300.jpg",
        price: 550,
        installment:"168 634сум/мес",
        color:"black",
    },
    {
        name:'Acer Nitro 5,Windows 10 Домашняя - 3 ГГц - NVIDIA® - GeForce® GTX 1650 - 39,6 cm (15,6") - 1920 x 1080 - 8 ГБ - 1 x 512GB - 512 ГБ - IEEE 802.11ax - Gigabit Ethernet - Bluetooth 5.0 ',
        imgSrc:"https://nout.uz/wp-content/uploads/2023/02/nirto-17-acer3-300x300.jpg",
        price: 770,
        installment:"168 634сум/мес",
        color:"black",
    },
    {
        name:'TUF, FX505DD/DT/DU ; Хранение данных. 512 ГБ M.2 NVMe PCIe 3.0 SSD 1 ТБ 5400 об/мин 2,5" SATA HDD, 256 ГБ M.2 NVMe PCIe 3.0 SSD ; Интерфейсы. 1x 3,5 мм',
        imgSrc:"https://nout.uz/wp-content/uploads/2022/05/grosshare1-300x300.jpg",
        price: 1250,
        installment:"168 634сум/мес",
        color:"yellow",
    },
  ]},
];



let productList = document.querySelector("#productList");

arr[0].products.forEach(({installment,name,price,imgSrc,color})=>{
    productList.innerHTML += `
    <li class="list-item" style="width:240px; height:350px;">
      <a href="#">
        <img src=${imgSrc} alt="product img" width = "200" height = "200">
        <p style="font-size:10px; color: grey;">${name}</p>
        <mark><p style="font-size:10px;">${installment}</p></mark>
        <p style="color:black;">${price}$</p>
        <span style="background-color:${color}; border-radius:25px;"class="color"></span>
      </a>
    <li>`
   
});



let productsList = document.querySelector("#productsList");

arr[1].products.forEach(({installment,name,price,imgSrc,color})=>{
    let li = document.createElement('li');
    li.classList.add('list-item');

    li.innerHTML = `
    <a href="#">
    <img src=${imgSrc} alt="product img" width = "200" height = "200">
    <p style="font-size:10px; color: grey;">${name}</p>
    <mark><p style="font-size:10px;">${installment}</p></mark>
    <p style="color:black;">${price}$</p>
    <span style="background-color:${color}; border-radius:25px;"class="color"></span>
  </a>`
    productsList.append(li);
});



