
fetch('https://fakestoreapi.com/products/1')
.then(res=>res.json())
.then(json=>console.log(json))

 //output
 {
    id:1,
    title;'casinha de gato',
    price;'150,00',
    category;'brinquedo',
    description;'casinha de gato',
    image;'img/casinha.avif'
}
{
    id:2,
    title;'arranhador com lugares',
    price;'200,00',
    category;'brinquedo',
    description;'arranhador com lugares',
    image;'img/produto a.jpg'
}
{
    id:3,
    title;'catnip',
    price;'50,00',
    category;'ervinha',
    description;'catnip',
    image;'img/catnip.jpg'
}