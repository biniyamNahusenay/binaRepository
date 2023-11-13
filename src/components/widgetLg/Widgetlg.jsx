import "./widgetlg.css"

export default function Widgetlg() {
  const Button = ({type})=>{
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
    <div className='widgetlg'>
       <h3 className="widgetLgTitle">latest transations</h3>
       <table className="widgetLgTable">
         <tr className="widgetLgTr">
          <th className="widgetLgTh">customer</th>
          <th className="widgetLgTh">date</th>
          <th className="widgetLgTh">amount</th>
          <th className="widgetLgTh">status</th>
         </tr>
         <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
             className="widgetLgImg" />
             <span className="widgetLgUserName">Susan Carol</span>     
          </td>
          <td className="widgetLgDate">2 jan 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
         </tr>
         <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
             className="widgetLgImg" />
             <span className="widgetLgUserName">Susan Carol</span>     
          </td>
          <td className="widgetLgDate">2 jan 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="decline"/></td>
         </tr>
         <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
             className="widgetLgImg" />
             <span className="widgetLgUserName">Susan Carol</span>     
          </td>
          <td className="widgetLgDate">2 jan 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="pending"/></td>
         </tr>
         <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
             className="widgetLgImg" />
             <span className="widgetLgUserName">Susan Carol</span>     
          </td>
          <td className="widgetLgDate">2 jan 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
         </tr>
       </table>
    </div>
  )
}
