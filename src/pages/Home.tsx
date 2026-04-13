import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonButtons, IonToolbar } from '@ionic/react';
import './Home.css';
import ExploreContainer from '../components/ExploreContainer';
import ProgressBar from '../components/ProgressBar';

const Home: React.FC = () => {
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
      
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>            
          </IonToolbar>
        </IonHeader>

        <ExploreContainer />
        <ProgressBar />
        
      </IonContent>
    </IonPage>
  );
};

export default Home;