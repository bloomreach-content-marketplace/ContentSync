import { useState, createContext, useEffect } from 'react';

export const ConfigurationContext = createContext({} as ConfigurationContext);

export const ConfigurationProvider = ({ children }) => {
  const [appConfiguration, setAppConfiguration] = useState({
    environments: {
      source: {
        environment: '',
        xAuthToken: '',
        projectId: 'core',
      },
      target: {
        environment: '',
        xAuthToken: '',
        projectId: 'core',
      },
    }
  });

  useEffect(() => {
    if (localStorage.getItem('appConfiguration')) {
      setAppConfiguration(JSON.parse(localStorage.getItem('appConfiguration')));
    }
  }, [])

  const storeApplicationConfiguration = ({...props}: AppConfigurationState) => {
    localStorage.setItem('appConfiguration', JSON.stringify({...props}))
    setAppConfiguration({...props})
  }

  return (
    <ConfigurationContext.Provider
      value={{ appConfiguration, setAppConfiguration, storeApplicationConfiguration }}
    >
      {children}
    </ConfigurationContext.Provider>
  );
}
