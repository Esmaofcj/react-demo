import { IonPage, IonHeader, IonContent,  IonRouterOutlet,   IonButton, IonMenuButton, useIonRouter  } from "@ionic/react";
import {  } from "react-router";


const Login:React.FC = () => {

    const navigation = useIonRouter();

    const doLogin = () => {
        
        navigation.push('/app',  "forward", "replace");
        
    };
    return(
        <IonPage>
           <IonHeader>
            <IonRouterOutlet>
                <IonButton slot="start">               
                    <IonMenuButton></IonMenuButton>
                </IonButton>
            </IonRouterOutlet>
           </IonHeader>
           <IonContent fullscreen>
            <IonButton expand="full" color="primary" onClick={() => doLogin()}>Login</IonButton>
           </IonContent>
        </IonPage>
           
    );
}

export default Login;