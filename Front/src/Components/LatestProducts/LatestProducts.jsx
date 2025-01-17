import React from 'react'
import { Button, Grid, GridItem, Heading, Image, Stack } from '@chakra-ui/react'
import CardProduct from '../CardProduct/CardProduct'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const LatestProducts = () => {
  let products = useSelector((state) => state.products)
  products = products.slice(0, 3)
  return (
    <>
      <Stack gap={3} justify='center' align='center' overflow='hidden'>
        <Heading as={'h2'}>Our Latest Products</Heading>
        <Grid
          p={20}
          gridTemplateColumns={{
            sm: 'repeat(1,1fr)',
            md: 'repeat(2,1fr)',
            lg: 'repeat(3,1fr)'
          }}
          gap={20}
          minW='full'
        >
          {products.map((product) => {
            return (
              <GridItem>
                <CardProduct
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                />
              </GridItem>
            )
          })}
        </Grid>

        <Button color='whiteAlpha.800' as={'a'} bg='primary.300' w='xs' size='lg'>
          <Link to='/products'>View More</Link>
        </Button>
      </Stack>
    </>
  )
}

export default LatestProducts
