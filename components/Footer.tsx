import React from 'react';

function Footer() {
  return( 
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-blue-700 ">
          <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">ABOUT</h5>
            <p>How Happyhours work</p>
            <p>Pivacy policy </p>
               
          </div> 
          
           <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">COMMUNITY</h5>
            <p>This is not a real site </p>
            <p>Help us</p>
          </div>
      </div>
  )
}

export default Footer;
