

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
       return parseInt((p['end_date']-p['start_date'])/(1000*60*60*24))*p['daily']
   }
   else 
   {
       return p[k].toString()
   }
  }
export default function table()
{
    const  data = [
        {country : "China", daily : "57.31456", start_date : new Date(2020,1,14),end_date : new Date(2020,2,20),Total_Saved : 0},
        {country : "India", daily : "18.23594", start_date : new Date(2020,2,22),end_date : new Date(),Total_Saved : 0},
        {country : "USA", daily : "128.98866", start_date : new Date(2020,2,28),end_date : new Date(),Total_Saved : 0},
        {country : "Japan", daily : "57.31456", start_date : new Date(2020,1,14),end_date : new Date(),Total_Saved : 0},
        {country : "Italy", daily : "3.09127", start_date : new Date(2020,2,9),end_date : new Date(),Total_Saved : 0},
        {country : "spain", daily : "2.39046", start_date : new Date(2020,2,14),end_date : new Date(),Total_Saved : 0},
        {country : "france", daily : "3.33728", start_date : new Date(2020,2,17),end_date : new Date(),Total_Saved : 0},
        {country : "germany", daily : "4.28368", start_date : new Date(2020,2,22),end_date : new Date(),Total_Saved : 0},
        {country : "UK", daily : "3.40751", start_date : new Date(2020,2,23),end_date : new Date(),Total_Saved : 0},
        {country : "Belgium", daily : "8.29571", start_date : new Date(2020,1,14),end_date : new Date(),Total_Saved : 0}
      
      ]

   return (
   <Table
    cards={true}
    striped={true}
    responsive={true}
    className="table-vcenter"
  >
  
    <Table.Header>
      <Table.Row>
        <Table.ColHeader colSpan={1}>Country</Table.ColHeader>
        <Table.ColHeader>Daily Saving</Table.ColHeader>
        <Table.ColHeader>Date of Lockdown</Table.ColHeader>
        <Table.ColHeader>Days Since Lockdown</Table.ColHeader>
        <Table.ColHeader>Total CO2 saved</Table.ColHeader>
        <Table.ColHeader />
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {data.map(p =>
       <Table.Row key={p.country}>
           {Object.keys(p).filter(k => k !== '').map(k => {
               return (
                   <Table.Col  key={p.country+''+k}>
                       <div suppressContentEditableWarning="true" contentEditable="true" value={k} >{/*onInput={this.editColumn.bind(this,{p},{k})}*/}
                           {value(p,k)}</div>
                       
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