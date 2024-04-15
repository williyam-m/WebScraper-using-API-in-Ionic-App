// DataFetcher.tsx

import React, { useState } from 'react';
import axios from 'axios';
import { IonButton, IonInput } from '@ionic/react';
import './DataFetcher.css';

const DataFetcher: React.FC = () => {
  const [url, setUrl] = useState('');
  const [responseData, setResponseData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.api-ninjas.com/v1/webscraper?url=${url}`, {
        headers: {
          'X-Api-Key': '4VOgsnwAp71co42pPc0chdcUkWvHTMN93QNwltDn'
        }
      });
      setResponseData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  return (
    <div align="center">

<div className="header">WEB SCRAPER</div>
<br></br><br></br>

      <IonInput
      className="input"
        type="text"
        placeholder="Enter URL"
        value={url}
        onIonChange={(e: any) => setUrl(e.detail.value)}
        
      ></IonInput>
      
      <br></br><br></br>

      <IonButton onClick={fetchData} disabled={!url || loading} className="button">
        {loading ? 'Loading...' : 'Fetch Data'}
      </IonButton>

      <br></br>
      <div className="response">
  {responseData && (
    <p>{responseData.data}</p>
  )}
    
</div>

<br></br><br></br>

<div className="footer">Because manually copying and pasting data from websites is only fun for the first 5 minutes.</div>
   

    </div>
  );
};

export default DataFetcher;
