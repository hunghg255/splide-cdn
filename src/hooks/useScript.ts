/* eslint-disable unicorn/no-null */
// @ts-nocheck
import React from 'react';

const useScript = (src: string, delay = 0) => {
  const [status, setStatus] = React.useState(src ? 'loading' : 'idle');

  React.useEffect(() => {
    if (!src) {
      setStatus('idle');
      return 'idle';
    }

    let script: any = document.querySelector(`script[src="${src}"]`);
    let timeout: any = null;

    if (script) {
      setStatus(script.dataset.status);
    } else if (delay) {
      timeout = setTimeout(() => {
        injectScript();
        // Add event listener after the script is added
        script.addEventListener('load', setStateStatus);
        script.addEventListener('error', setStateStatus);
      }, delay);
    } else {
      injectScript();
    }

    const setStateStatus = (event) => {
      setStatus(event.type === 'load' ? 'ready' : 'error');
    };

    // code to inject script
    function injectScript() {
      script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.dataset.status = 'loading';
      document.body.append(script);

      const setDataStatus = (event) => {
        script.dataset.status = event.type === 'load' ? 'ready' : 'error';
      };

      script.addEventListener('load', setDataStatus);
      script.addEventListener('error', setDataStatus);
    }

    if (script) {
      // script will be be undefined available when its delayed hence check it before adding listener
      script.addEventListener('load', setStateStatus);
      script.addEventListener('error', setStateStatus);
    }

    return () => {
      if (script) {
        script.removeEventListener('load', setStateStatus);
        script.removeEventListener('error', setStateStatus);
      }
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [src]);

  return status;
};

export default useScript;
