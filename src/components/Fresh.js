import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

import ricotta from '../images/ricotta.jpg'
import mozzarella from '../images/mozzarella.jpg'
import goat from '../images/goat cheese.jpg'
import feta from '../images/feta.jpg'
import burrata from '../images/Burrata.jpg'
import queso_fresco from '../images/queso fresco.jpg'

const Fresh = (props) => {
  return (
    <div>
      <h2 className="cheeseTitle"> Fresh Cheeses </h2>
      <div className='cheeseWrapper'>
        <Grid columns='equal'>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h2>Ricotta</h2>
                <img src={ricotta} alt='Ricotta' />
                <p>An Italian whey cheese made from sheep, cow, goat, or Italian water buffalo milk whey left over from the production of cheese. Ricotta curds are creamy white in appearance, and slightly sweet in taste. The fat content changes depending on the brand and the type of milk used.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Pinot Grigio </NavLink>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h2>Mozzarella</h2>
                <img src={mozzarella} alt='Mozzarella' />
                <p>A traditionally southern Italian dairy product made from Italian buffalo's milk by the pasta filata method. Fresh mozzarella is generally white, but may vary seasonally to slightly yellow depending on the animal's diet.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Sauvignon Blanc </NavLink>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h2>Goat</h2>
                <img src={goat} alt='Goat' />
                <p>Goat cheese has been made for thousands of years, and was probably one of the earliest made dairy products. Goat cheese softens when exposed to heat, although it does not melt in the same way many cow cheeses do. Firmer goat cheeses with rinds are sometimes baked in an oven to create a softer more viscous texture.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Chenin Blanc </NavLink>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h2>Feta</h2>
                <img src={feta} alt='Feta' />
                <p>A brined curd white cheese that is made in Greece from sheep's milk. It is a crumbly aged cheese, and has a grainy texture. High-quality feta should have a creamy texture when sampled, and aromas of ewe's milk, butter, and yoghurt. It is tangy, slightly salty, and mildly sour, with a spicy finish, as well as a hint of sweetness.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Beaujolais </NavLink>
              </div>
            </Segment>
          </Grid.Column>
        </Grid>
        <Grid columns={4}>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h2>Burrata</h2>
                <img src={burrata} alt='Burrata' />
                <p>A fresh Italian cheese made from mozzarella and cream. The outer shell is solid mozzarella, while the inside contains stracciatella and cream, giving it an unusual, soft texture. The cheese has a rich, buttery flavor and retains its fresh milkiness. It is best when eaten within 24 hours and is considered past its prime after 48 hours.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Tocai Friulano </NavLink>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h2>Queso Fresco</h2>
                <img src={queso_fresco} alt='Queso Fresco' />
                <p>A creamy, soft, and mild unaged white cheese, commonly used in several Latin American countries and many parts of the United States. Queso fresco may be eaten straight or mixed in with dishes. They are often used as a topping for spicy Mexican dishes such as enchiladas and empanadas, or crumbled over soups or salads.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Sauvignon Blanc </NavLink>
              </div>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  )
}

export default Fresh
