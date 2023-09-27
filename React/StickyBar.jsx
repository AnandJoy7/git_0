import React ,{useEffect} from 'react'
import './StickyBar.css'


export default function StickyBar() {
  useEffect(() => {
    const list = document.querySelectorAll('.list');

    function activeLink() {
      list.forEach((item) => item.classList.remove('active'));
      this.classList.add('active');
    }

    list.forEach((item) => item.addEventListener('click', activeLink));

    return () => {
      list.forEach((item) => item.removeEventListener('click', activeLink));
    };
  },[])

  
  return (
    <div>
      <div className="navigation">
        <ul className='items'>
          <li className='list active'>
            <a href="#">
              <span className='icon'><ion-icon name="home-outline"></ion-icon>
              </span>
              <span className='text'>Home</span>
            </a>
          </li>
          <li className='list'>
            <a href="#">
              <span className='icon'><ion-icon name="person-outline"></ion-icon>
              </span>
              <span className='text'>User</span>
            </a>
          </li>
          <li className='list'>
            <a href="#">
              <span className='icon'><ion-icon name="globe-outline"></ion-icon>
              </span>
              <span className='text'>Ngo</span>
            </a>
          </li>
          <li className='list'>
            <a href="#">
              <span className='icon'><ion-icon name="calendar-clear-outline"></ion-icon>
              </span>
              <span className='text'>Event</span>
            </a>
          </li>
          <li className='list'>
            <a href="#">
              <span className='icon'><ion-icon name="settings-outline"></ion-icon>
              </span>
              <span className='text'>Settings</span>
            </a>
          </li>
          <div className='indicator'></div>
        </ul>
      </div>
    </div>
  )
}
