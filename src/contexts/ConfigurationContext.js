import { useState, createContext, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

export const ConfigurationContext = createContext({});

const INACTIVE_TIMEOUT = 30 * 60 * 1000; // 30 minutes
const TOKEN_EXPIRY = 8 * 60 * 60 * 1000; // 8 hours

export const ConfigurationProvider = ({ children }) => {
  const router = useRouter();
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
    },
    pages: {
      components: {
        selections: {
          projectId: '',
          channelId: '',
          componentGroup: '',
        }
      }
    },
    session: {
      lastActivity: null,
      tokenExpiry: null
    }
  });

  // Reset configuration
  const resetConfiguration = useCallback(() => {
    localStorage.removeItem('appConfiguration');
    setAppConfiguration(prev => ({
      ...prev,
      environments: {
        source: { environment: '', xAuthToken: '', projectId: 'core' },
        target: { environment: '', xAuthToken: '', projectId: 'core' }
      },
      session: { lastActivity: null, tokenExpiry: null }
    }));
    router.push('/configuration');
  }, [router]);

  // Check if token is expired
  const isTokenValid = useCallback(() => {
    const now = new Date().getTime();
    return appConfiguration.session?.tokenExpiry && now < appConfiguration.session.tokenExpiry;
  }, [appConfiguration.session?.tokenExpiry]);

  // Reset inactivity timer
  const resetInactivityTimer = useCallback(() => {
    const now = new Date().getTime();
    if (!isTokenValid()) {
      resetConfiguration();
      return;
    }

    setAppConfiguration(prev => ({
      ...prev,
      session: {
        ...prev.session,
        lastActivity: now
      }
    }));
  }, [isTokenValid, resetConfiguration]);

  // Store configuration with session data
  const storeApplicationConfiguration = ({...props}) => {
    const now = new Date().getTime();
    const configWithSession = {
      ...props,
      session: {
        lastActivity: now,
        tokenExpiry: now + TOKEN_EXPIRY
      }
    };
    
    localStorage.setItem('appConfiguration', JSON.stringify(configWithSession));
    setAppConfiguration(configWithSession);
  };

  // Load configuration and check validity on mount
  useEffect(() => {
    const stored = localStorage.getItem('appConfiguration');
    if (stored) {
      const config = JSON.parse(stored);
      if (config.session?.tokenExpiry && new Date().getTime() < config.session.tokenExpiry) {
        setAppConfiguration(config);
      } else {
        resetConfiguration();
      }
    }
  }, [resetConfiguration]);

  // Set up activity monitoring
  useEffect(() => {
    const checkActivity = () => {
      const now = new Date().getTime();
      const lastActivity = appConfiguration.session?.lastActivity;
      
      if (lastActivity && (now - lastActivity > INACTIVE_TIMEOUT)) {
        resetConfiguration();
      }
    };

    // Check activity every minute
    const activityInterval = setInterval(checkActivity, 60 * 1000);
    
    // Set up event listeners for user activity
    const activityEvents = ['mousedown', 'keydown', 'touchstart', 'mousemove'];
    const handleActivity = () => resetInactivityTimer();
    
    activityEvents.forEach(event => {
      window.addEventListener(event, handleActivity);
    });

    // Clean up on tab close
    const handleTabClose = () => {
      localStorage.removeItem('appConfiguration');
    };
    window.addEventListener('beforeunload', handleTabClose);

    // Cleanup
    return () => {
      clearInterval(activityInterval);
      activityEvents.forEach(event => {
        window.removeEventListener(event, handleActivity);
      });
      window.removeEventListener('beforeunload', handleTabClose);
    };
  }, [appConfiguration.session?.lastActivity, resetConfiguration, resetInactivityTimer]);

  return (
    <ConfigurationContext.Provider
      value={{ 
        appConfiguration, 
        setAppConfiguration, 
        storeApplicationConfiguration,
        isTokenValid,
        resetConfiguration 
      }}
    >
      {children}
    </ConfigurationContext.Provider>
  );
};
