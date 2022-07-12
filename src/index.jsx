import React from 'react';
import React1, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './components/app/app';

import RestoService from './components/services/resto-service';
import { I18nextProvider } from 'react-i18next';
import RestoServiceContext from './components/resto-service-context';
import transFunc from './components/lang/lang';

const restoService = new RestoService(); 

ReactDOM.render(
  <Provider store={store}>
     <RestoServiceContext.Provider value={restoService}>
    <Router>
    <I18nextProvider i18n={transFunc}>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
      </Suspense>
      </I18nextProvider>
    </Router>
    </RestoServiceContext.Provider>
  </Provider>,
  document.getElementById('root')
);
