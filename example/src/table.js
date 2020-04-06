

import * as React from "react";
import {
    Page,
    Avatar,
    Icon,
    Grid,
    Card,
    Text,
    Table,
    Alert,
    Progress,
    colors,
    Dropdown,
    Button,
    StampCard,
    StatsCard,
    ProgressCard,
    Badge,
  } from "tabler-react";
  function value(p,k)
  {
   if (k == 'end_date')
   {
       return parseInt((p[k]-p['start_date'])/(1000*60*60*24))
   } 
   else if ( k == 'start_date')
   {
       return p[k].getDate()+"/"+p[k].getMonth()
   }
   else if ( k == 'Total_Saved')
   {
       return (parseInt((p['end_date']-p['start_date'])/(1000*60*60*24))*p['daily']).toFixed(2)
   }
   else if (k == 'daily')
   {
     return (p[k]).toFixed(2)
   }
   else 
   {
       return p[k].toString()
   }
  }
const style = 
{
  textAlign : 'right',
  width : 100
}
export default function table()
{
    const  data = [
        {country : "China", daily : 5731496, start_date : new Date(2020,1,14),end_date : new Date(2020,2,20),Total_Saved : 0},
        {country : "India", daily : 1823594, start_date : new Date(2020,2,22),end_date : new Date(),Total_Saved : 0},
        {country : "USA", daily : 12898866, start_date : new Date(2020,2,28),end_date : new Date(),Total_Saved : 0},
        {country : "Japan", daily : 981746, start_date : new Date(2020,1,14),end_date : new Date(),Total_Saved : 0},
        {country : "Italy", daily : 309127, start_date : new Date(2020,2,9),end_date : new Date(),Total_Saved : 0},
        {country : "Spain", daily : 239046, start_date : new Date(2020,2,14),end_date : new Date(),Total_Saved : 0},
        {country : "France", daily : 333728, start_date : new Date(2020,2,17),end_date : new Date(),Total_Saved : 0},
        {country : "Germany", daily : 428368, start_date : new Date(2020,2,22),end_date : new Date(),Total_Saved : 0},
        {country : "UK", daily : 340751, start_date : new Date(2020,2,23),end_date : new Date(),Total_Saved : 0},
        {country : "Belgium", daily : 829571, start_date : new Date(2020,1,14),end_date : new Date(),Total_Saved : 0},
        {country : "Rest OF Europe", daily : 13911892, start_date : new Date(2020,2,22),end_date : new Date(),Total_Saved : 0}
      ]

   return (
   <Table
   responsive
   highlightRowOnHover
   hasOutline
   verticalAlign="center"
   cards
   className="text-nowrap"
  >
  
    <Table.Header>
      <Table.Row>
        <Table.ColHeader colSpan={1} alignContent="center">Country</Table.ColHeader>
        <Table.ColHeader alignContent="center">Daily Saving MT of CO2</Table.ColHeader>
        <Table.ColHeader alignContent="center">Date of Lockdown</Table.ColHeader>
        <Table.ColHeader alignContent="center">Days Since Lockdown</Table.ColHeader>
        <Table.ColHeader alignContent="center">Total MT CO2 saved </Table.ColHeader>
        
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {data.map(p =>
       <Table.Row key={p.country}>
           {Object.keys(p).filter(k => k !== '').map(k => {
               return (
                   <Table.Col  key={p.country+''+k}>
                       <div suppressContentEditableWarning="False" contentEditable="False" value={k}  style = {style}>{/*onInput={this.editColumn.bind(this,{p},{k})}*/}
                       <Text size="sm" >
                       {value(p,k)}
                      </Text></div>
                       
                   </Table.Col>
               );
           })}
       </Table.Row>
       )
        }
    </Table.Body>
    </Table>
   );
}