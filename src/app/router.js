import Router from 'minimal-router'

// Pages import for rendering
import Page from 'app/page'
import StatsPage from 'app/pages/stats'
import StaticPage from 'app/pages/static'
import MapPage from 'app/pages/map'
import DataPage from 'app/pages/data'

const router = new Router();
router.setPrefix('#');

router.add('stats', '/stats', () => {
  new StatsPage('Statistika').render()
});

router.add('map', '/map', () => {
  new MapPage('Zemljevid').render()
});

router.add('data', '/data', () => {
  new DataPage().render()
});

router.add('viz', '/viz', () => {
  new Page().render()
});


router.add('team', '/team', () => {
  new StaticPage('Ekipa', 'https://raw.githubusercontent.com/overlordtm/COVID19.si/master/src/content/team.md').render()
});

router.add('about', '/about', () => {
  new StaticPage('O projektu', 'https://raw.githubusercontent.com/overlordtm/COVID19.si/master/src/content/about.md').render()
});

// Listen browser event for back navigation
window.onpopstate = function (event) {
  // dispatch current url to route
  var path = document.location.hash;
  if (document.location.search.length) {
    path += '?' + document.location.search;
  }
  router.dispatch(path);
};

// Navigate to other routes
const navigate = function (routeName, query, params) {
  const url = router.formatUrl(routeName, query, params);
  history.pushState(null, null, url);
  router.dispatch(url);
};

export {
  router,
  navigate
}