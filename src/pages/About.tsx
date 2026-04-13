//import { IonToolbar } from "@ionic/react"

import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from "@ionic/react";


const About:React.FC = () => {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                      <IonButtons slot= "start">
                           <IonMenuButton></IonMenuButton>                          
                      </IonButtons>
                      <IonTitle>About</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <h1>About</h1>
            </IonContent>
        </IonPage>
           
    );
};

export default About;