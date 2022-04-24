import styled from "styled-components"
import USER from "../images/user.svg";
import Gallery from "../images/gallery.svg";
import Video from "../images/video.svg";
import Event from "../images/Event.svg";
import Articlees from "../images/article.svg";
import Dots from "../images/dots.svg";
import Like from "../images/like.svg";
import Comment from "../images/comment.svg";
import Share from "../images/share.svg";
import Send from "../images/send.svg";
import PostMoada from "./PostMoada";
const Main = (props) => {
  return (
     <Container>
       <Sharebox>Share 
       <div>
         <img src={USER} alt=""/>
         <button>Start a post</button>
       </div>

       <div>
       <button>
         <img src={Gallery} alt=""/>
         <span>Photo</span>
         </button>

         <button>
         <img src={Video} alt=""/>
         <span>Video</span>
         </button>

         <button>
         <img src={Event} alt=""/>
         <span>Event</span>
         </button>

         <button>
         <img src={Articlees} alt=""/>
         <span>White article</span>
         </button>

       
       </div>
       </Sharebox>
       <div>
         <Article>
           <SharedActor>
             <a>
           <img src={USER} alt=""/>
           <div>
             <span>Title</span>
             <span>Info</span>
             <span>Date</span>
           </div>
           </a>
           <button>
           <img src={Dots} alt=""/>
           </button>
           </SharedActor>
           <Description> Description </Description>
           <SharedImg>
             <a>
               <img src="https://media-exp1.licdn.com/dms/image/sync/D5618AQGI528IYQgsjg/companyUpdate-article-image-shrink_627_1200/0/1648653626539/1_DS5jpg?e=2147483647&v=beta&t=Ucus6h-37W9dAGv1teH2FZ6UmiZIQPFME4YKK2RsEJk" alt=""/>
             </a>
           </SharedImg>
           <SocialCounts>
             <li>
               <button>
                 <img src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt=""/>
                 <img src="	https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22" alt=""/>
                 <img src="	https://static-exp1.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8" alt=""/>
                 <span>75</span>
               </button>
             </li>
             <li>
               <a>
                 2 comments
               </a>
             </li>
           </SocialCounts>
           <SocialAction>
             <button>
               <img src={Like} alt=''/>
               <span>Like</span>
             </button>

             <button>
               <img src={Comment} alt=''/>
               <span>Comment</span>
             </button>

             <button>
               <img src={Share} alt=''/>
               <span>Share</span>
             </button>

             <button>
               <img src={Send} alt=''/>
               <span>Send</span>
             </button>
             </SocialAction>
         </Article>
       </div>
       <PostMoada/>
     </Container>
  )
}

const Container = styled.div`
  grid-area: main;
`;

const CommanCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const Sharebox = styled(CommanCard)`
   display: flex;
   flex-direction: column;
   color: #958b75;
   margin: 0 0 8px;
   background: white;
   div{
     button{
       outline: none;
       color: rgba(0,0,0,0.6);
       font-size: 17px;
       min-height:48px;
       background: transparent;
       border: none;
       display: flex;
       align-items: center;
       font-weight: 600;
     }
     &:first-child{
       display:flex;
       align-items: center;
       padding: 8px 16px 0px 16px;
       img{
         width: 48px;
         border-radius: 50%;
         margin-right: 8px;
       }
        button{
          margin: 4px 0;
          flex-grow: 1;
          border-radius: 35px;
          padding-left: 16px;
          border: 1px solid rgba(0,0,0,0.15);
          background-color: white;
          text-align: left;
        }
     }
       &:nth-child(2){
         display:flex;
         flex-wrap: wrap;
         justify-content: space-around;
         padding-bottom: 4px;

         button{
           img{
             margin: 0 4px 0 -2px;
           }
            span{
              color: #70b5f9;
            }
         }
       }
   }
`;

const Article = styled(CommanCard)`
 padding: 0;
 margin: 0 0 8px;
 overflow: visible;
`;

const SharedActor = styled.div`
      padding-right: 40px;
      flex-wrap: nowrap;
      padding: 12px 16px 0;
      margin-bottom: 8px;
      align-items: center;
      display: flex;
      a{
        margin-right: 12px;
        flex-grow: 1;
        overflow:hidden;
        display:flex;
        text-decoration: none;

        img{
          width: 48px;
          height: 48px;
        }

        & > div{
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          flex-basis: 0;
          margin-left: 8px;
          overflow: hidden;
          span{
            text-align: left;
            &:first-child{
              font-size: 16px;
              font-weight: 700;
              color: rgba(0,0,0,1);
            }
              &:nth-child(n + 1){
                font-size:14px;
                color: rgba(0,0,0,0.6);
              }
          }
        }
      }

      button{
        position: absolute;
        right: 12px;
        top:0;
        background: transparent;
        outline: none;
        border: none;
      }
`;

const Description = styled.div`
    padding: 0 16px;
    color: rgba(0,0,0,0.9);
    overflow: hidden;
    font-size:16px;
    text-align: left;

`;

const SharedImg = styled.div`
    margin-top: 8px;
    width: 100%;
    display: block;
    position: relative;
    background-color: #f9fafb;
    img{
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li{
    margin-right: 5px;
    font-size: 12px;
    button{
      display: flex;

    }
  }
`;

 
const SocialAction = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0;
    min-height: 40px;
    padding: 4px 8px;
    button{
      display: inline-flex;
      align-items: center;
      padding: 8px;
      color: #0a66c2;

        @media (min-width: 768px){
          span{
            margin-left: 8px;
          }
        }
    }
`;

export default Main
