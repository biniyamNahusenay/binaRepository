import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.css'
import {userData} from "../../dummyData"
import Widgetsm from '../../components/widgetSm/Widgetsm'
import Widgetlg from '../../components/widgetLg/Widgetlg'
export default function Home() {
  return (
    <div className='home'>
       <FeaturedInfo/>
       <Chart data = {userData} title="User Analytics" dataKey="Active User" grid/>
       <div className="homeWidgets">
         <Widgetsm/>
         <Widgetlg/>
       </div>
    </div>
  )
}
