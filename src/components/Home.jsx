import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import { pizzas } from '../assets/utils/pizzas'

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="pizzas-container">
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home