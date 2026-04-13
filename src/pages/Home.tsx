import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonButtons, IonToolbar } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './Home.css';
import ExploreContainer from '../components/ExploreContainer';
import ProgressBar from '../components/ProgressBar';

const Home: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // Update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>        
      </IonHeader>
      
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>            
          </IonToolbar>
        </IonHeader>

        <ExploreContainer />
        <ProgressBar />

        {/* Date and Time Display */}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
            {currentDateTime.toLocaleDateString()}
          </p>
          <p style={{ fontSize: '1rem', color: '#666' }}>
            {currentDateTime.toLocaleTimeString()}
          </p>
        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;