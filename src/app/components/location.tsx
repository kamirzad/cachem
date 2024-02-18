"use client"

import React, {useEffect, useState} from "react"
import { supabase } from '../utils/supabase'

export function LocationFinder() {
    useEffect(() => {
        const fetchLocation = async () => {
            try {
              // Fetch user's approximate location based on IP address
              const locationResponse = await fetch('https://ipinfo.io/json');
              const locationData = await locationResponse.json();
            //   const [latitude, longitude] = locationData.loc.split(',');
      
              const { error } = await supabase
                .from('user_location')
                .insert({
                    ip: locationData.ip,
                    hostname: locationData.hostname,
                    city: locationData.city,
                    region: locationData.region,
                    country: locationData.country,
                    org: locationData.org,
                    postal: locationData.postal,
                    timezone: locationData.timezone,
                    lat_long: locationData.loc,
                    userAgent: navigator.userAgent,
                    language: navigator.language,
                    screenWidth: window.screen.width,
                    screenHeight: window.screen.height,
                })

            const deviceInfo = {
                userAgent: navigator.userAgent,
                language: navigator.language,
                screenWidth: window.screen.width,
                screenHeight: window.screen.height,
              };
              
              console.log(deviceInfo);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchLocation();
    }, [])
    return (<div></div>)
}