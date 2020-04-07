

import * as React from "react";
import { Component } from "react";
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
  const  data = [
    {country : "China", daily : 5731496, start_date : new Date(2020,0,20),end_date : new Date(2020,2,20),Total_Saved : 0,optimum_start:new Date(2020,2,20),optimum_end:new Date()},
    {country : "India", daily : 1823594, start_date : new Date(2020,2,22),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(),optimum_end:new Date()},
    {country : "USA", daily : 12898866, start_date : new Date(),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(2020,2,20),optimum_end:new Date()},
    {country : "Japan", daily : 981746, start_date : new Date(),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(2020,2,20),optimum_end:new Date()},
    {country : "Italy", daily : 309127/0.85, start_date : new Date(2020,2,9),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(),optimum_end:new Date()},
    {country : "Spain", daily : 239046/0.85, start_date : new Date(2020,2,14),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(),optimum_end:new Date()},
    {country : "France", daily : 333728/0.85, start_date : new Date(2020,2,17),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(),optimum_end:new Date()},
    {country : "Germany", daily : 428368/0.85, start_date : new Date(2020,2,22),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(),optimum_end:new Date()},
    {country : "UK", daily : 340751/0.85, start_date : new Date(2020,2,23),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(),optimum_end:new Date()},
    {country : "Belgium", daily :59255/0.85, start_date : new Date(2020,2,18),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(),optimum_end:new Date()},
    {country : "Rest OF Europe", daily : 993706/0.4, start_date : new Date(),end_date : new Date(),Total_Saved : 0,optimum_start:new Date(2020,2,22),optimum_end:new Date()}

  ]
  function value(p,k)
  {
   if (k == 'end_date')
   {
       return parseInt((p[k]-p['start_date'])/(1000*60*60*24)).toLocaleString(navigator.language, { minimumFractionDigits: 0 })
   } 
   else if ( k == 'start_date')
   {  //console.log(p['country']+(p['start_date'].getTime()==(new Date().getTime())))
       if ((p['start_date'].getTime()) == (new Date().getTime()))
       {console.log("inside if ")
         return p['optimum_start'].getDate()+"/"+(p['optimum_start'].getMonth()+1)}
       
       return p[k].getDate()+"/"+(p[k].getMonth()+1)
   }
   else if ( k == 'Total_Saved')
   {
       return p["Total_Saved"].toLocaleString(navigator.language, { minimumFractionDigits: 0 })
   }
   else if (k == 'daily')
   {
     return (p[k]).toLocaleString(navigator.language, { minimumFractionDigits: 0 })
   }
   else if (k == 'optimum_start' || k == 'optimum_end')
   {
     return ""
   }
   else 
   {
       return p[k].toString()
   }
  }
const style = 
{
  textAlign : 'centre',
  width : 100
}
class MyTable extends Component
{
  constructor(props)
  {
    super(props)
    this.data = this.props.data;
  }
   render()
   { 
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
        <Table.ColHeader colSpan={1} alignContent="left">Country</Table.ColHeader>
        <Table.ColHeader alignContent="left">Start Date</Table.ColHeader>
        <Table.ColHeader alignContent="left">Days Since Lowered production</Table.ColHeader>
        <Table.ColHeader alignContent="left">Total CO2 emissions from fuel combustion</Table.ColHeader>        
        <Table.ColHeader alignContent="left">Other energy industry own use*</Table.ColHeader>
        <Table.ColHeader alignContent="left">Manuf. industries  and construction</Table.ColHeader>
        <Table.ColHeader alignContent="left">Transport</Table.ColHeader>
        <Table.ColHeader alignContent="left">Residential</Table.ColHeader>
        <Table.ColHeader alignContent="left">Commercial and public services</Table.ColHeader>
        <Table.ColHeader alignContent="left">Total Saved till Now</Table.ColHeader>
        <Table.ColHeader alignContent="left">Daily Saving</Table.ColHeader>        

        
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {this.data.map(p =>
       <Table.Row key={p.country}>
           {Object.keys(p).filter(k => (k !== "Total_Saved"&&k !== "optimum_start" && k !== "optimum_end" && k!=="CO2 saved from Manuf, Const & commercial"&& k!=="CO2 saved from Transport")).map(k => {
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
}
export default MyTable;