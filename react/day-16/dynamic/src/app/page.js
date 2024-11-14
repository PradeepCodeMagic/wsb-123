"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./comman/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from "next/link";

export default function Home() {

  let [data, setData] = useState([])



  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((ress) => {
        setData(ress.data.products)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <Header />

      <Container>
        <Row md={4} >

        {data.map((v)=>{
          console.log(v)
          return(
            <>
            <Col>
            <Card >
              <Card.Img variant="top" src={v.thumbnail} />
              <Card.Body>
                <Card.Title> {v.title} </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
                <Button variant="primary">
                  <Link href={`/detail/${v.id}`} className="text-white" >Go somewhere {v.id} </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
            </>
          )
        })}
          

          
        </Row>
      </Container>
    </>
  );
}