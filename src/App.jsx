import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Page from './components/Page'
import Projects from './pages/Projects'
import Courses from './pages/Courses'
import Todo from './pages/Todo'

const App = () => {
  document.title = 'George Zhu - Software Engineer'

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Page component={<Home />} name="home"/>} />
        <Route path="/courses" element={<Page component={<Todo title='Courses' />} name="courses"/>} />
        <Route path="/projects" element={<Page component={<Todo title='Projects' />} name="projects"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App