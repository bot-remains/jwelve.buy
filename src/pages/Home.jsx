import Container from '../components/Container';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';

function Home() {
  const images = [
    {
      url: 'https://res.cloudinary.com/djdegiywz/image/upload/v1721652122/jwelve.buy/xhvq3flsjw46r9u0muvl.jpg',
    },
    {
      url: 'https://res.cloudinary.com/djdegiywz/image/upload/v1721652124/jwelve.buy/weixjy5lhgmweuq90zjz.jpg',
    },
    {
      url: 'https://res.cloudinary.com/djdegiywz/image/upload/v1721652124/jwelve.buy/ww4btmekjbcc2iypahal.jpg',
    },
    {
      url: 'https://res.cloudinary.com/djdegiywz/image/upload/v1721652124/jwelve.buy/xjwoo7dq5t2yuwwnybpo.jpg',
    },
    {
      url: 'https://res.cloudinary.com/djdegiywz/image/upload/v1721652125/jwelve.buy/s8lo97n2h7irvvyepq2i.jpg',
    },
    {
      url: 'https://res.cloudinary.com/djdegiywz/image/upload/v1721652125/jwelve.buy/yla5ddrjyrk3zb8abcif.jpg',
    },
  ];

  const cardImages = [
    {
      id: 'Silver',
      url: 'https://res.cloudinary.com/djdegiywz/image/upload/v1721655180/jwelve.buy/mltf0gi2uo6e8rwkdvm6.jpg',
    },
    {
      id: 'Gold',
      url: 'https://res.cloudinary.com/djdegiywz/image/upload/v1721652126/jwelve.buy/tukfnwtf5q4orwt2rckl.jpg',
    },
    {
      id: 'Diamond',
      url: 'https://res.cloudinary.com/djdegiywz/image/upload/v1721652125/jwelve.buy/aobjr6p5ngg3r2tlhqap.jpg',
    },
  ];

  return (
    <div>
      <div className='relative'>
        <ImageSlider images={images} />
        <div className='absolute left-[10%] top-1/4'>
          <h1 className='mb-3 text-6xl font-bold text-grayscale-100'>
            Discover Timeless Elegance
          </h1>
          <h4 className='mb-6 text-2xl font-semibold text-grayscale-200'>
            Handcrafted Jewelry that Tells Your Story
          </h4>
          <p className='text-grayscale-300 text-lg w-[800px]'>
            Indulge in our exquisite collection of unique, handcrafted jewelry
            designed to reflect your individual style. Each piece is a blend of
            timeless elegance and modern artistry, crafted with precision and
            passion. Elevate your everyday look or find the perfect piece for a
            special occasion. Let your jewelry speak for you.
          </p>
        </div>
      </div>
      <Container cardImages={cardImages} />
      <Footer />
    </div>
  );
}

export default Home;
