import React, { useEffect, useState } from 'react';

function DeviceInfo() {
  const [deviceName, setDeviceName] = useState('Unknown');

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const iOSMatches = userAgent.match(/\b\w+(?:'\w+)?\s(?:iPad|iPhone)\b/i);
    const macMatches = userAgent.match(/\bMac\b/i);
    
    if (iOSMatches && iOSMatches.length > 0) {
      setDeviceName(iOSMatches[0]);
    } else if (macMatches && macMatches.length > 0) {
      setDeviceName('Mac');
    } else {
      setDeviceName('Unknown');
    }
  }, []);

  return (
    <div>
      <p className='player__by__garniture'>{deviceName}</p>
    </div>
  );
}

export default DeviceInfo;
