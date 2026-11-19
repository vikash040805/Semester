import React from 'react'
import Navbar from './Navbar.jsx'
import ProductCard from './ProductCard.jsx'
import Footer from './Footer.jsx'
const App = () => {
  return (
    <div style={{
        display:"flex",
        height:"100vH",
        flexDirection:"column", 
        justifyContent:"space-between",
    }}>
        <Navbar />
        <div style={{
            display:"flex",
            justifyContent:"space-between"
        }}>
            <ProductCard imageUrl="https://img.magnific.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80" productTitle="Product 1" productPrice="$10"/>
            <ProductCard imageUrl="https://mamp.one/wp-content/uploads/2024/09/image-resources2.jpg" productTitle="Product 2" productPrice="$20"/>
            <ProductCard imageUrl="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp" productTitle="Product 3" productPrice="$30"/>
            <ProductCard imageUrl="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" productTitle="Product 4" productPrice="$40"/>
        </div>
        <Footer />
    </div>
    
    
    
  )
}

export default App