
import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [inputValue, setInputValue] = useState(null)
  const [movieData, setMovieData] = useState([])


  console.log(inputValue)



  let displayData = () => {
    let Api;

    if(inputValue==null){
        Api='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1'
    }
    else{
      Api=`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${inputValue}`
    }
    


    axios.get(Api)

      .then((ress) => {
        setMovieData(ress.data.results)
      })

      .catch((error) => {
        console.log(error.message)
      })

  }

  useEffect(() => {
    displayData()
  }, [movieData])


  return (
    <>
      <Container className='border border-danger'>
        <h1 className='my-2' >Movie App</h1>
        <input type='text' placeholder='Movie Search here....' value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='p-2 w-100 my-4' />

        <Row xl={4} md={3} xm={2}  >

          {movieData.length > 0 ?

            movieData.map((v) => {

             
              return (
                <>
                <Col className='my-2' >
                  <Card >
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280/${v.poster_path}`} className='img-fluid' />
                    <Card.Body>
                      <Card.Title> {v.original_title} </Card.Title>
                      <Card.Text>
                      Release Date: {v.release_date}
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
                </>
              )
            })
            : "Please wait......."}






        </Row>
      </Container>
    </>
  )
}

export default App
