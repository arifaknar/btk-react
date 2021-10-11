import React from "react";
import {Flag,Label } from "semantic-ui-react";

const countries = [
  { name: "Turkish", countryCode: "tr" },
  { name: "English", countryCode: "gb eng" },
  { name: "Spanish", countryCode: "es" },
];

const flagRenderer = (item) => <Flag name={item.countryCode} />
export default function CartSummary() {
  return (
    <div id="CartSummary">
     
      
      {countries.map((country) => (
         <Label >{flagRenderer(country)}</Label>
         
      ))}
    
    </div>
  );
}
