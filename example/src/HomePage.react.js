// @flow

import * as React from "react";
import ReactSimpleMap from "./ReactSimpleMap";
import MyTable from "./table";
import Header from "./Header/Header.react";
import {Component} from "react";

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
  TabbedCard,
  PricingCard
} from "tabler-react";

import C3Chart from "react-c3js";
//import DownloadLink from "react-download-link";
//import c3 from "react-c3js";
import SiteWrapper from "./SiteWrapper.react";
import mydata from "./carbondata.json"
const csv = require('csv-parser')
const fs = require('fs')
const results = [];
//import CardFooter from "../../src/components/Card/CardFooter.react";
//import CardBody from "../../src/components/Card/CardBody.react";
/*onst  mydata = [
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
*/

//console.log(new Date(2020,0,20))
/*for (var d = new Date(2020, 0, 14); d <= today; d.setDate(d.getDate() + 1)) {
  arr.push(d);
  v.push(i);
  st = 0;
  console.log("date "+d.getHours())
  mydata.forEach(function(p) {
    var lock =0;
    var opt =0;
    console.log("date "+ getDates(d))
    //console.log("datapoint"+p['country']+(p['end_date'] instanceof Date)+(p['start_date'] instanceof Date)+(p['optimum_start']instanceof Date)+(p['optimum_end']instanceof Date))
    //console.log("datapoint"+getDates(p['end_date'])+getDates(p['start_date'])+getDates(p['optimum_start'])+getDates(p['optimum_end']))
    
    if (p['end_date'].getTime() >= d.getTime() && p['start_date'].getTime()<= d.getTime())
    { lock = ((d-p['start_date'])/(1000*60*60*24))*p['daily']*0.85
      console.log("firstcase lock"+lock)}
    else if (p['end_date'].getTime() < d.getTime())
    {
      lock = ((p['end_date']-p['start_date'])/(1000*60*60*24))*p['daily']*0.85
      console.log("secondcase lock"+lock)
    }
    else if (p['start_date'].getTime() > d.getTime())
    {
      lock = 0
      console.log("thirdcase lock"+lock)
    }
    if (p['optimum_end'].getTime() >= d.getTime() && p['optimum_start'].getTime()<= d.getTime())
    { opt= ((d-p['optimum_start'])/(1000*60*60*24))*p['daily']*0.4
    console.log("firstcase opti"+opt)}
    else if (p['end_date'].getTime() < d.getTime())
    {
      opt = ((p['optimum_end']-p['optimum_start'])/(1000*60*60*24))*p['daily']*0.4
      console.log("secondcase opti"+opt)
    }
    else if (p['optimum_start'].getTime() > d.getTime())
    {
      opt = 0
      console.log("thirdcase opti"+opt)
    }
    p['Total_Saved']+=(lock+opt)
    if (d.getTime() == (new Date()).getTime())
    {console.log("country and total saved"+p['country']+p['Total_Saved'])}
    st += lock+opt 
    
  });
  da_sa.push(st)
  console.log("date"+d+" "+st)
  
  //console.log(d)
  //console.log(d.getTime() == new Date(2020,0,20).getTime())

  if (d.getTime() == new Date(2020, 0, 20).getTime()) {
    //china
    daily_saving += 5731496*0.85;
    //console.log("in side china")
  }
  if (d.getTime() == new Date(2020, 2, 9).getTime()) {
    // Italy
    daily_saving += 309127;
  }
  if (d.getTime() == new Date(2020, 2, 14).getTime()) {
    //spain
    daily_saving += 239046;
  }
  if (d.getTime() == new Date(2020, 2, 17).getTime()) {
    //france
    daily_saving += 333728;
  }
  if (d.getTime() == new Date(2020, 2, 22).getTime()) {
    //germany
    daily_saving += 428368;
  }
  if (d.getTime() == new Date(2020, 2, 23).getTime()) {
    //UK
    daily_saving += 340751;
  }
  if (d.getTime() == new Date(2020, 2, 18).getTime()) {
    //belgium
    daily_saving += 59255;
  }
  if (d.getTime() == new Date(2020, 2, 22).getTime()) {
    //india
    daily_saving += 1823594*0.85;
  }
  if (d.getTime() == new Date(2020, 2, 28).getTime()) {
    //USA
    //console.log("USA joins")
    daily_saving += 12898866*0.40;
  }
  if (d.getTime() == new Date(2020, 2, 20).getTime()) {
    //china leaves
    //console.log("china leaves")
    daily_saving -= 5731496*0.85;
    daily_saving += 5731496*0.40;
  }
  if (d.getTime() == new Date(2020,2,22).getTime())
  {//rest of europe 
    daily_saving += 993706;

  }
  if (d.getTime() == new Date(2020,2,20).getTime())
  {//Japan
    daily_saving += 981746*0.4;

  }
  
  i = i + daily_saving;
}
*/
var arr = ["data2"];
var v = ["data1"];
var daily_saving = 0;
var i = 0;
var da_sa = [];
var st = 0 ;
mydata.forEach(function(p){
  //console.log("datapoint"+p['country']+p['end_date']+p['start_date']+p['optimum_start']+p['optimum_end'])
    if (p['end_date'].length >0 )
    {
      var l= p['end_date']
      //console.log("inside if end"+l[0]+l[1]+l[2])
      if(l[0]&&l[1]&&l[2])
      {
      var year = l[0];
      var month = l[1];
      var day = l[2];
      p['end_date'] = new Date(year,month,day)
      }

      
    }
    else 
    {
      var year = new Date().getFullYear()
      var month = new Date().getMonth()
      var day = new Date().getDate()
      p['end_date'] = new Date(year,month,day)
      //console.log("else end "+p['end_date'])
    }
    if (p['start_date'].length >0)
    {
      var l= p['start_date']
      //console.log("inside if start"+(l[0] == 2020)+" "+(l[1] == 0)+" "+(l[2] == 20))
      if(l[0])
      {
      var year = l[0];
      var month = l[1];
      var day = l[2];
      if (l[2]== 20 && l[1] == 0)
      {
        //console.log("inside special if")
        p['start_date'] = new Date(2020,0,20)
      }
      p['start_date'] = new Date(year,month,day)

      }
      
    }
    else
    {
      var year = new Date().getFullYear()
      var month = new Date().getMonth()
      var day = new Date().getDate()
      p['start_date'] = new Date(year,month,day)
      //console.log("else start "+p['start_date'])
    }
    if (p['optimum_start'].length >0)
    {
      if (p['start_date'].length>0)
      {
        console.log("special if")
        p.end_date = p.optimum_start
      }
      var l= p['optimum_start']
      //console.log("inside if optistart"+l[0]+l[1]+l[2])
      if(l[0]&&l[1]&&l[2])
      {
      var year = l[0];
      var month = l[1];
      var day = l[2];
      p['optimum_start'] = new Date(year,month,day)
      }
      
      
    }
    else
    {
      var year = new Date().getFullYear()
      var month = new Date().getMonth()
      var day = new Date().getDate()
      p['optimum_start'] = new Date(year,month,day)
      //console.log("else opti start "+p['optimum_start'])
    }
    if (p['optimum_end'].length>0)
    {
      var l= p['optimum_end']
      //console.log("inside if optiend"[0]+l[1]+l[2])
      if(l[0]&&l[1]&&l[2])
      {
      var year = l[0];
      var month = l[1];
      var day = l[2];
      p['optimum_end'] = new Date(year,month,day)
      }
      
      
    }
    else
    {
      var year = new Date().getFullYear()
      var month = new Date().getMonth()
      var day = new Date().getDate()
      p['optimum_end'] = new Date(year,month,day)
      //console.log("else opti end "+p['optimum_end'])
    }
    var tmp = calc(p)
    p['Total_Saved'] = tmp
    st+=tmp
    //console.log("datapoint2"+p['country']+p['end_date']+p['start_date']+p['optimum_start']+p['optimum_end'])
  })
function getDates(d)
{
  return d.getDate()+"/"+(d.getMonth()+1)+"/"+(d.getFullYear()-2000);
}

function calc(p)
{
  var t = new Date()
  var day_lockdown = (p['end_date']-p['start_date'])/(1000*60*60*24)+0.25
  var daily = p['daily']
  var day_opt = (p['optimum_end']-p['optimum_start'])/(1000*60*60*24)+0.25
  return (day_lockdown*daily + day_opt*daily*0.5)/2
}

var estimation = 33000;
const style = {
  position: "absolute",
  top: 0, // computed based on child and parent's height
  right: 40,
  fontSize: 28,
  textAlign: "center",
  fontWeight: "bold",
  fontstyle: "italic",
  color : "rgb(50,0,133)"
};
const style1 = {
  fontSize: 25,
  textAlign: "centre",
  fontWeight: "bold",
  color: "rgb(50,0,133)",
  backgroundColor : 'rgba(0,0,0,0)'
};
function getDates(d)
{
  return d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
}

function calc(p)
{
  var t = new Date()
  var day_lockdown = (p['end_date']-p['start_date'])/(1000*60*60*24)
  var daily = p['daily']
  var day_opt = (p['optimum_end']-p['optimum_start'])/(1000*60*60*24)
  return (day_lockdown*daily + day_opt*daily*0.5)
}

class HomePage extends Component{

  constructor(props)
{
  super(props);
  this.getCountryData = this.getCountryData.bind(this)
  //this.callbackFunction = this.callbackFunction.bind(this);
  //this.handleChange = this.handleChange.bind(this);
  this.state= { 
    country:"India"
  
  }
};
getCountryData(country)
{   var n = mydata.find(k => k['country'] == this.state.country) 
    console.log("country name :"+ n+"  "+country)
    if ( n != undefined)
    {
      
       return mydata.find(k => k['country'] == this.state.country)['Total_Saved']
    }

  
  return 0; 
}


render() {
 this.callbackFunction = (childData) => { this.setState({country: childData})}
  return (

    <SiteWrapper>
    <Page.Content title="Carbon Emission Savings during COVID-19">

      <Grid.Row cards={true}>
      <Grid.Col width={6.9} sm={6.9} lg={6.9}>
      <Card>
          <Card.Status />
            <Card.Header>
              <Card.Title>CO2 Emissions Saved (Million MT)</Card.Title>
            </Card.Header>
            <Card.Body>
              <Header.H1 className="mb-4">{((st)).toLocaleString(navigator.language,{ minimumFractionDigits: 0 }) }</Header.H1>
            </Card.Body>
        </Card>
        </Grid.Col>
        <Grid.Col width={6.9} sm={6.9} lg={6.9}>
        <Card>
          <Card.Status />
            <Card.Header>
              <Card.Title>Total estimated CO2 emission for the year 2020 (Million MT)</Card.Title>
            </Card.Header>
            <Card.Body>
              <Header.H1 className="mb-4">{(estimation-st).toLocaleString(navigator.language,{ minimumFractionDigits: 0 })}</Header.H1>
            </Card.Body>
        </Card>
        </Grid.Col>
        <Grid.Col width={6.9} sm={6.9} lg={6.9}>
        <Card>
      <Card.Status />
      <Card.Header>
        <Card.Title>Data Updated On</Card.Title>
      </Card.Header>
      <Card.Body>
      <Header.H1 className="mb-4">{getDates(new Date())}</Header.H1>
      </Card.Body>
    </Card>

        </Grid.Col>
        
        <Grid.Col width={6.9} sm={6.9} lg={6.9}>
        <Card>
          <Card.Status />
            <Card.Header>
              <Card.Title>Percentage of Total Estimate Saved</Card.Title>
            </Card.Header>
            <Card.Body>
              <Header.H1 className="mb-4">{(st*100/estimation).toFixed(1) + " %"}</Header.H1>
            </Card.Body>
        </Card>
          
        </Grid.Col>
        {/*<Grid.Col width={6} sm={4} lg={2}>
            <StatsCard layout={1} movement={-1} total="621" label="Products" />
  </Grid.Col>*/}
        </Grid.Row>
        <Grid.Row>

        <Grid.Col sm = {6}><ProgressCard
                  header={this.state['country']}
                  content={this.getCountryData(this.state['country']).toLocaleString(navigator.language,{ minimumFractionDigits: 2 })}
                  progressColor="green"
                  progressWidth={this.getCountryData(this.state['country'])}
                  type = {false}
                /></Grid.Col>
                <Grid.Col sm = {6}>
                <ProgressCard
                  header={this.state['country']}
                  content={(this.getCountryData(this.state['country'])*100/estimation).toLocaleString(navigator.language,{ minimumFractionDigits: 2 }) + " %"}
                  progressColor={(this.getCountryData(this.state['country'])*100/st) > 0.1 ? "green" : "red"}
                  progressWidth={this.getCountryData(this.state['country'])*100*100/estimation}
                  type = {true}
                />
                </Grid.Col>
        </Grid.Row>
        <Grid.Row>
            

            <Grid.Col lg={12}>
              <Card title="CO2 Emission Savings" body={<ReactSimpleMap parentCallback = {this.callbackFunction} data = {mydata} />} />
            </Grid.Col>
          </Grid.Row>
        <Grid.Row>
        <Grid.Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Development Activity (Million MT of CO2)</Card.Title>
            </Card.Header>
            {/*<C3Chart
              style={{ height: "10rem" }}
              data={{
                columns: [v],
                type: "area", // default type of chart
                groups: [["data1", "data2", "data3"]],
                colors: {
                  data1: colors["green"],
                },
                names: {
                  // name of each serie
                  data1: "CO2 savings",
                },
                axes: { data1: "y2", data2: "x1" },
              }}
              axis={{
                y: {
                  show: true,
                },
                x: {
                  tick: { format: "%d/%m" },
                  padding: {
                    left: 0,
                    right: 0,
                  },
                  show: true,
                },
              }}
              legend={{
                position: "inset",
                padding: 0,
                inset: {
                  anchor: "top-left",
                  x: 20,
                  y: 8,
                  step: 10,
                },
              }}
              tooltip={{
                format: {
                  title: function(x) {
                    return [];
                  },
                },
              }}
              padding={{
                bottom: 0,
                left: -1,
                right: -1,
              }}
              point={{
                show: false,
              }}
            />*/}

            <MyTable data = {mydata}/>
            </Card>
        </Grid.Col>
        <Grid.Col>
        
        </Grid.Col>
      </Grid.Row>

    </Page.Content>
  </SiteWrapper>
  );
}
}



export default HomePage;
