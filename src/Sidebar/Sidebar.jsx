
import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'
import AkubeLogo from './AkubeLogo.png'

import { FiShoppingCart } from 'react-icons/fi'
function Sidebar ({handleChange}){
   console.log(handleChange)
return <>
<section className='sidebar'>
    <div className='logo-container'>
        <h1>
            {/* <FiShoppingCart /> */}
            <img src={AkubeLogo} style={{width:100, height:120}}></img>
         
        </h1>
    </div>
    <Category handleChange ={handleChange} />
    <Price handleChange ={handleChange} />
   <Colors handleChange={handleChange} />
</section>
</>
}
export default Sidebar