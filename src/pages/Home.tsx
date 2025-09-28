import './Home.css';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import { IonPage } from '@ionic/react';
import ModalCart from '../components/ModalCart';
import ModalFactSheet from '../components/ModalFactSheet';

const Home: React.FC = () => {
  return (
    <IonPage>
      {/* header */}
      <Header />
      <MainContent />
      <Footer />   
      <ModalCart />
      <ModalFactSheet />
    </IonPage>
  );
};

export default Home;
