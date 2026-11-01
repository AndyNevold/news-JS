import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    const isProduction = process.env.NODE_ENV === 'production';

    const apiUrl = (isProduction ? process.env.API_URL_PROD : process.env.API_URL_DEV) || '';

    const apiKey = process.env.API_KEY || '';

    super(apiUrl, { apiKey });
  }
}

export default AppLoader;
