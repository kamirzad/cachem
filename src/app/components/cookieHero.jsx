import { useEffect, useState } from 'react';
import cookieParser from 'cookie-parser';

const Home = ({ searchedItems }) => {
    const [ads, setAds] = useState([]);
  
    useEffect(() => {
      // Simulated API call to fetch ads based on searched items
      // Replace this with your actual API call
      fetchAds(searchedItems).then((adsData) => {
        setAds(adsData);
      });
    }, [searchedItems]);
  
    return (
      <div>
        <h1>Homepage</h1>
        <p>Ads based on your search history:</p>
        <ul>
          {ads.map((ad, index) => (
            <li key={index}>{ad}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export async function getServerSideProps(context) {
    // Parse cookies from the incoming request
    const cookies = cookieParser.JSONCookies(context.req.headers.cookie || '');
  
    // Access the value of the 'searchedItems' cookie
    const searchedItems = cookies.searchedItems || [];
  
    // Pass the searchedItems as a prop to the component
    return {
      props: { searchedItems },
    };
  }
  
  // Simulated function to fetch ads based on searched items
  // Replace this with your actual API call to fetch ads
  async function fetchAds(searchedItems) {
    // Simulated API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    // Mock ads data based on searched items
    const adsData = searchedItems.map((item) => `Ad for ${item}`);
  
    return adsData;
  }
  
  export default Home;