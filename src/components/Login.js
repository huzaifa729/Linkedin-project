// 

// const Login = (props)=>{
//     return<div>Login vg</div>
// };

// export default Login


// import React from 'react'

// export const Login = () => {
//   return (
//     <div>Login</div>
//   )
// }


import React from 'react'
import styled from "styled-components";
import WEBSITE_LOGO from '../images/login-logo.svg'
const Login = (props) => {
  return(
     <Container>
       <Nav>
         <a href="/">
           <img src={WEBSITE_LOGO} alt=''/>
         </a>
         <div>
           <Join>Join now</Join>
           <Signin>Sign in</Signin>
         </div>
       </Nav>
     </Container>
  ) 
}


const Container = styled.div`
   padding:0px;
`;

const Nav = styled.nav`
     max-width: 1128px;
     margin: auto;
     padding: 12px 0 16px;
     display: flex;
     align-items: center;
     position: relative;
     justify-content: space-between;
     flex-wrap: nowrap;
     
     & > a {
       width: 135px;
       height: 35px;
       @media (max-width: 768px) {
            padding: 0 5px;     
       }
     }
`;

   const Join = styled.a`
       font-size: 22px;
       padding:10px 12px; 
       text-decoration: none;
       border-radius: 4px;
       color: rgba(0,0,0,0.6);
       margin-right:12px;
       &:hover{
         background-color: rgba(0,0,0,0.08);
         color: rgba(0,0,0,0.9);
         text-decoration: none;
       }  
   `;

   const Signin = styled.a`
      box-shadow: inset 0 0 0 1px #0a66c2;
      color: #0a66c2;
      border-radius: 24px;
      transition-duration: 167ms;
      font-size: 22px;
      font-weight: 500;
      line-height: 40px;
      padding: 10px 24px;
      text-align: center;
      background-color: rgba(0,0,0,0);
      &:hover{
        background-color: rgba(112,181,249,0.15);
        color: #0a66c2;
        text-decoration: none;
      }
   `;

export default Login;





