import React from 'react'
import "./App.css"
import { Link, Route, Routes } from 'react-router-dom'
import Menu from './Menu/Menu'
<<<<<<< HEAD
import Contact from './Contact'
=======
import Home from './Home'
>>>>>>> f613ccad8407b03855014b2ef5d9fb8d237be296

const App = () => {
  return (
    <div className="App">

      <nav className='flex'>
        <ul >
          <li><Link className='appLinks' to={'/'}>Home</Link></li>
          <li><Link className='appLinks' to={'menu/breakfast'}>Menu</Link></li>
          <li><Link className='appLinks' to={'contact'}>Contact</Link></li>
        </ul>
      </nav>
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={
          <div className='App-container'>
            <br />
            <h2>Welcome to our Restaurant</h2><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, iste tenetur, error id voluptatum sequi libero nemo dolor cumque illum aperiam vitae? Dolorem nam earum autem distinctio velit quia explicabo!</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam quos nemo exercitationem ad sit dicta omnis eum repellendus natus explicabo odio esse ut vel molestiae magni similique provident suscipit tempora quae, debitis voluptate quidem, nihil illum! Ducimus obcaecati ipsa quisquam atque accusantium temporibus perferendis aspernatur sit excepturi velit? Tempore?</p><br />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis dolor saepe cum obcaecati non doloremque neque, fugiat voluptatem repudiandae, sint tempore vitae quae pariatur nesciunt cumque praesentium totam! Temporibus, nihil modi libero aliquam magni, sint ipsa et quam, eveniet animi maxime aliquid! Eaque, iste at? Incidunt veniam nemo corporis officiis harum ratione eius quaerat sit exercitationem laborum voluptates, distinctio animi qui velit consectetur molestiae! Et nobis, blanditiis necessitatibus magni porro voluptatibus ipsam commodi cupiditate quod distinctio, inventore non tempora laudantium quia quis nostrum alias! Pariatur exercitationem fugiat perferendis doloremque totam eaque, illum commodi distinctio dolores dolorum ipsa laboriosam, illo in!</p>

          </div>
        }></Route>
        <Route path='menu/*' element={


          <div>
            <Menu />


          </div>
        }></Route>
        <Route path='contact' element={<Contact />}></Route>
=======
        <Route path='/' element={<Home />}></Route>
        <Route path='menu/*' element={<Menu />}></Route>
        <Route path='contact' element={<h3>This is the Contact Page</h3>}></Route>
>>>>>>> f613ccad8407b03855014b2ef5d9fb8d237be296
      </Routes >
    </div >

  )
}

export default App