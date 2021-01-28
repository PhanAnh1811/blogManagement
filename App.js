import React from 'react';
import MainNavigation from './src/navigation/MainNavigation';
import {BlogProvider} from './src/context/BlogContext';


const App = () => {
  return (
    <MainNavigation />
  )
}

export default () => {
  return (
    <BlogProvider>
      <App/>
    </BlogProvider>
  )
};
