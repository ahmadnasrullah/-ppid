
import HomePage from '../pages/home.f7';
import AboutPage from '../pages/about.f7';
import FormPage from '../pages/form.f7';
import ProductPage from '../pages/product.f7';
import DynamicRoutePage from '../pages/dynamic-route.f7';
import RequestAndLoad from '../pages/request-and-load.f7';
import NotFoundPage from '../pages/404.f7';
import ProfilePage from '../pages/profile.f7';
import RegulasiPage from '../pages/regulasi.f7';
import InfoPage from '../pages/info.f7';
import LayananPage from '../pages/layanan.f7';
import InfoberkalaPage from '../pages/infoberkala.f7';
import InfosertamertaPage from '../pages/infosertamerta.f7';
import InfosetiapsaatPage from '../pages/infosetiapsaat.f7';
import InformasipublikPage from '../pages/informasipublik.f7';
import KeberatanPage from '../pages/keberatan.f7';
import SengketaPage from '../pages/sengketa.f7';
import LoginPage from '../pages/login.f7';
import RegisterPage from '../pages/register.f7';
var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/product/:id/',
    component: ProductPage,
  },
  {
    path: '/profile/',
    component: ProfilePage,
  },
  {
    path: '/regulasi/',
    component: RegulasiPage,
  },
  {
    path: '/info/',
    component: InfoPage,
  },
  {
    path: '/layanan/',
    component: LayananPage,
  },
  {
    path: '/infoberkala/',
    component: InfoberkalaPage,
  },
  {
    path: '/infosertamerta/',
    component: InfosertamertaPage,
  },
  {
    path: '/infosetiapsaat/',
    component: InfosetiapsaatPage,
  },
  {
    path: '/informasipublik/',
    component: InformasipublikPage,
  },
  {
    path: '/keberatan/',
    component: KeberatanPage,
  },
  {
    path: '/sengketa/',
    component: SengketaPage,
  },
  {
    path: '/login/',
    component: LoginPage,
  },
  {
    path: '/register/',
    component: RegisterPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();
 
      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;