import { useEffect } from 'react';

export default function AdUnit({ adUnitPath, sizes, id }: { adUnitPath: string, sizes: number[][], id: string }) {
  useEffect(() => {
    (window as any).googletag = (window as any).googletag || { cmd: [] };
    const googletag = (window as any).googletag;
    googletag.cmd.push(function() {
      googletag.defineSlot(adUnitPath, sizes, id)
        .addService(googletag.pubads());
      
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
      if ((window as any).geoTarget) {
        googletag.pubads().setLocation((window as any).geoTarget);
      }
    });

    // Load GPT script

    return () => {
      if ((window as any).googletag && googletag.destroySlots) {
        // googletag.destroySlots();
      }
    };
  }, []);

  return <div id={id} style={{ minWidth: '250px', minHeight: '250px', width: 'fit-content', display: 'flex', justifyContent: 'center' }} />;
}