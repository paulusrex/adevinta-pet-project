import axios from 'axios';
import HTTPFetcher from './HTTPFetcher';

var FetcherFactories = function FetcherFactories() {};

FetcherFactories.httpFetcher = function () {
  return new HTTPFetcher({
    fetcher: axios
  });
};

export { FetcherFactories as default };