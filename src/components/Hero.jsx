import { Link } from 'react-router-dom'

function Hero() {
  const scrollToCategories = () => {
    document.getElementById('categories')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <section className="hero">
        <div className="hero-text">
            <h1>"Little Big Store — everything you need, all in one place."</h1>
            <p>Little Big Store is your all-in-one destination 
              for fashion, beauty, electronics, and home essentials. 
              From smartphones and laptops to men's and women's fashion,
               skincare, and kitchen accessories, 
               we bring together everything you need under one roof. 
               Small in name, big in variety — shop smarter, shop simpler.</p>
            <div className="cta-btns">
                <button type="button" className="btn btn-primary" onClick={scrollToCategories}>Browse now!</button>
                <Link to="/products"><button className="btn">Shop now!</button></Link>
            </div>
        </div>
        <img src="https://imgs.search.brave.com/XfxTuFrniOTcTXrGFbLIX31PXUZJoxcnQuMz-f_0Z5o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/c2FsZS03MC1wZXJj/ZW50YWdlLW9mZi1w/cm9tb3Rpb24tZmxv/cmFsLWJhY2tncm91/bmRfNTM4NzYtMTE0/NjM2LmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDAmcT04MA" alt="Hero image" />
    </section>
  )
}

export default Hero
//https://placehold.co/600x400
//https://cdn5.vectorstock.com/i/1000x1000/07/19/promo-poster-big-sales-discount-announce-shopping-vector-28850719.jpg