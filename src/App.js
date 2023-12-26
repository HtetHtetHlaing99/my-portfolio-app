import React from 'react';
import './App.css';
import Header from './Header';
import Introduction from './Introduction';
import Project from './Project';
import ContactForm from './Contact';


const App = () => {
  return(
  <>
   <Header/>
   <Introduction/>
   <Project/>
   <ContactForm/>
  
  </>
  );

}

// const EmailContact = () => (
//   <div>
//     <p>
//       Feel free to contact me at{' '}
//       <a href="mailto:your.email@example.com">your.email@example.com</a>.
//     </p>
//   </div>
// );

// // Example in another component or directly in App.js
// const SocialMediaLinks = () => (
//   <div>
//     <p>
//       Connect with me on{' '}
//       <a href="https://linkedin.com/in/yourprofile">LinkedIn</a> and{' '}
//       <a href="https://github.com/yourusername">GitHub</a>.
//     </p>
//   </div>
// );


export default App;
