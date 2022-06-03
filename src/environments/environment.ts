// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  getNowPlaying:
    'https://api.themoviedb.org/3/movie/now_playing?api_key=70a4f9f1812acbe8876b6c584e8fddb8&language=es-ES&page=1',
  reqUrl: 'https://api.themoviedb.org/3/movie/',
  apiKey: '?api_key=70a4f9f1812acbe8876b6c584e8fddb8',
  language: '&language=es-ES',
  imageUrl: 'https://image.tmdb.org/t/p/original',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
