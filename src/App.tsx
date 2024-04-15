// App.tsx

import React from 'react';
import { IonApp, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import DataFetcher from './components/DataFetcher';

const App: React.FC = () => (
  <IonApp>
    <IonHeader>
      <IonToolbar>
        <IonTitle></IonTitle>
      </IonToolbar>
    </IonHeader>
    <DataFetcher />
  </IonApp>
);

export default App;
