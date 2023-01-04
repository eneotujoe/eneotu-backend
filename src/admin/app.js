import AuthLogo from './extensions/eneotu-logo.png'
import MenuLogo from './extensions/logo.png'
import favicon from './extensions/favicon.ico'

export default {
  config: {
    auth: {
      logo: AuthLogo,
    },
    head: {
      favicon: favicon,
    },
    menu: {
      logo: MenuLogo,
    },
    locales: [
    ],
    tutorials: false,
    notifications: { release: false },
  },
  bootstrap(app) {
    console.log(app);
  },
};
