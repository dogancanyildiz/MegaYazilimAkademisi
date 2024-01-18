import React from 'react'
import Slider from 'react-slick';

function Carousel() {


    const carouselItems = [
        {
            title: "Garnier Cilt Bakım Ürünlerinde",
            subtitle: "%50'ye varan indirim",
            buttonText: "ACELE ET FIRSATI KAÇIRMA",
            image: "skincare",
        },
        {
            title: "KOTON Ürünlerinde",
            subtitle: "Tüm indirimlere ek %15 indirim",
            buttonText: "Alışverişe Başla",
            image: "clothing",
        },
        {
            title: "Tüm Elektronik Ürünlerde",
            subtitle: "Sepette %10 net indirim",
            buttonText: "Hemen inceleyin",
            image: "electronics",
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {carouselItems.map((image, index) => (
                <div key={index} className='d-flex justify-content-center'>
                    <div className='container p-5 justify-content-center'>
                        <h4>{image.title} </h4>
                        <h1 className='mt-4'>{image.subtitle} </h1>
                        <button type="button" className='btn btn-success mt-5'>{image.buttonText}</button>
                    </div>
                    <img src={`/${image.image}_carousel.jpeg`} className='mx-4' alt={`Resim ${index + 1}`} />
                </div>
            ))}
        </Slider>
    )
}

export default Carousel