import React from 'react'
import { Box } from 'rebass'
import { Footer } from '../footer'
import { Header } from '../header'

export const Layout = ({ children }) => {
  return(
    <>
    <Header/>
      <Box minHeight='75vh'>
        <main>
        {children }
        </main>
      </Box>
    <Footer/>
    </>
  )
}