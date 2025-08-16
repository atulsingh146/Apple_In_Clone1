import './App.css'
import Header from './Header'
import Iphone from './Iphone'
import Mac from './Mac'
import BuyMac from './BuyMac'
import Collab from './Collab'
import Slidersection from './Slidersection'
import Footer from './Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Iphone/>
      <div className='h-2'>
      <br  />
      </div>
      <Mac/>
            <div className='h-2'>
      <br  />
      </div>
      <BuyMac/>
                  <div className='h-1'>
      <br  />
      </div>
      <Collab/>
                        <div className='h-2'>
      <br  />
      </div>
      <Slidersection/>
      <Footer/>
    </div>
  )
}

export default App


