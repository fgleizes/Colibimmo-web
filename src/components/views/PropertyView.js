
import { Component, useEffect, useState } from "react"
import axios from "axios"
import { showProperty } from "../../api/propertyAPI";
import './PropertyView.css'

import {PropertyInfoContainer} from './PropertyInfoContainer'


function PropertyView() {
  return (
    <div className="PropertyView">      
      <PropertyInfoContainer />
    </div>

  );
}

export default PropertyView;