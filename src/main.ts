import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import 'zone.js';
const ngVersion = '16.0.3';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    (window as any).plattform = (window as any).plattform || {};
    let platform = (window as any).plattform[ngVersion];
    console.log(platform);
    if (platform) {
      platform.destroy();
    }
    platform = ref;

    // Otherise, log the boot error
  })
  .catch((err) => console.error(err));
