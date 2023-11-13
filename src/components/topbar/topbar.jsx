import "./topbar.css"
import {Notifications,Language,SettingsSuggest} from '@mui/icons-material';
export default function topbar() {
  return (
    <div className='topbar'>
       <div className="topbarWrapper">
         <div className="topLeft">
            <span className="logo">Biniadmin</span>
         </div>
         <div className="topRight">
            <div className="iconsContainer">
              <Notifications/>
              <span className="topIconBadge">2</span>
            </div>
            <div className="iconsContainer">
              <Language/>
              <span className="topIconBadge">2</span>
            </div>
            <div className="iconsContainer">
              <SettingsSuggest/>
              <span className="topIconBadge">2</span>
            </div>
            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
         </div>
       </div>
    </div>
  )
}
