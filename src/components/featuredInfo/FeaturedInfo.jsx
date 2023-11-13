import './featuredInfo.css'
import {ArrowDownward, ArrowUpward} from '@mui/icons-material';

export default function FeaturedInfo() {
  return (
    <div className='featured'>
       <div className="featuredItem">
         <span className="featuredTitle">Revenue</span>
         <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,145</span>
            <span className="feturedMoneyRate">-11.4 <ArrowDownward className='featuredIcon negative'/></span>
         </div>
         <span className="featuredSub">Compared to last month</span>
       </div>
       <div className="featuredItem">
         <span className="featuredTitle">Sales</span>
         <div className="featuredMoneyContainer">
            <span className="featuredMoney">$4,445</span>
            <span className="feturedMoneyRate">-1.4 <ArrowDownward className='featuredIcon negative'/></span>
         </div>
         <span className="featuredSub">Compared to last month</span>
       </div>
       
       <div className="featuredItem">
         <span className="featuredTitle">Cost</span>
         <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,225</span>
            <span className="feturedMoneyRate">+12.4 <ArrowUpward className='featuredIcon'/></span>
         </div>
         <span className="featuredSub">Compared to last month</span>
       </div>
    </div>
  )
}
