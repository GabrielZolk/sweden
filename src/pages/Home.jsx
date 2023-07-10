import './Home.css';
import { AiOutlineUser, AiOutlineShopping } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';

export default function Home() {
  return (
    <div className="background" style={{ width: '100%', position: 'fixed', minHeight: '100vh', objectFit: 'cover', zIndex: '-1' }}>
      <div className='website'>
        <header>
          <h2>SWEDEN</h2>
          <nav>
            <ul>
              <li>Products</li>
              <li>Pricing</li>
              <li>Company</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Download</li>
            </ul>
          </nav>
          <div className='header-buttons'>
            <button>Sign Up <AiOutlineUser /></button>
            <button><AiOutlineShopping /> Cart</button>
          </div>
        </header>
        <div className='content'>
          <h3>Next Unified</h3>
          <h1>Social App</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus eum perferendis ipsa distinctio delectus quia facere inventore maiores molestias sequi libero exercitationem aspernatur magnam, facilis, laborum, odit omnis suscipit quisquam!</p>
          <div className='content-buttons'>
            <button id='start'>Start Now <BsArrowRight /></button>
            <button id='watch'>Watch Demo</button>
          </div>
          <div className='img'>
            <img src='phone.png' alt='phone' />
            <div id='shadow'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
