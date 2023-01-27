import { Carousel } from "react-carousel-minimal"

function Carrossel() {
 const data = [
    {
      image: "https://user-images.githubusercontent.com/113939119/214470659-ec11fc61-60e9-4321-a152-f4784f5e707e.png",
    },
    {
      image: "https://user-images.githubusercontent.com/113939119/214470662-673775b9-6bc6-43b0-a1a5-78631d9cccd3.png",
    },
    // {
    //   image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
    //   caption: "Darjeeling"
    // }
  ]

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 10px"
        }}>
          <Carousel
            data={data}
            time={5000}
            width="1850px"
            height="350px"
            captionStyle={captionStyle}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              maxWidth: "1500px",
              margin: "0 auto",
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Carrossel