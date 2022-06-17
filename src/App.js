import Consultation from "components/Consultation";
import { services } from "data/services";
import AboutMe from "pages/AboutMe";
import Confindecial from "pages/Confindecial";
import Main from "pages/Main";
import NewQuestion from "pages/NewQuestion";
import Rules from "pages/Rules";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Routes >
          <Route
            path="/"
            element={ <Main /> }
          />
          <Route
            path="/about-me"
            element={ <AboutMe /> }
          />
          <Route
            path="/ask"
            element={ <NewQuestion /> }
          />
          <Route
            path="/consultation-phone"
            element={ <Consultation consultationType={ 'phone' } /> }
          />
          <Route
            path="/consultation-mail"
            element={ <Consultation consultationType={ 'mail' } /> }
          />
          <Route
            path="/confidencial"
            element={ <Confindecial /> }
          />
          <Route
            path="/rules"
            element={ <Rules path={'/21212.pdf'}/> }
          />
          <Route
            path="/tlk"
            element={ <Rules path={'/tlk.pdf'} /> }
          />
          {
            services && services.map(service =>
              <Route
                key={ service.id }
                path={ `/service/${service.id}` }
                element={ <service.element title={ service.title } /> }
              />
            )
          }
          <Route path="*" element={ <Navigate to={ '/' } replace /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
