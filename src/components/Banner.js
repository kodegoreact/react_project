// import BannerImage from "./../Finalbanner2.jpg";
// First Method of importing an Image
import Button from 'react-bootstrap/Button';


const Banner = () => {
    // let style = {
    //     width: '100%',
    //     padding: '20px',
    //     backgroundColor: 'red'
    // };
    // For internal styling
    return ( 
        <>
            {/* <img src={BannerImage} alt="" srcset="" /> */}
            {/* <img src="imgs/Finalbanner2.jpg" alt="" srcset="" style={{width: '100%',padding: '30px',backgroundColor: 'red'}} /> */}
            {/* For inline styling */}
            {/* <img src="imgs/Finalbanner2.jpg" alt="" srcset="" style={style}/> */}
            {/* For Internal styling */}
            <img src="imgs/Finalbanner2.jpg" alt="" srcset="" className="img-default"/>
        </>
     );
}
 
export default Banner;