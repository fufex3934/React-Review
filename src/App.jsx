import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";


export default function App() {
  return (
    <>
     <div className="min-h-screen flex flex-col">
     <Header />
      <MainContent  />
      <Footer />
     </div>
    </>
  );
}
