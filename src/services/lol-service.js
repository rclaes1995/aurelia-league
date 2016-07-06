// src/ig-service.js
import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

import {initialize} from 'aurelia-pal-browser';
initialize()


//DI
@inject(HttpClient)
export class LolService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  getSummonersById(summonerIds){
    return this.httpClient.get('https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/' + summonerIds.join() + '?api_key=RGAPI-E84A613F-17C8-4DDD-84A7-D6057DC3B364');
  }

  getLeagueBySummonerId(summonerId){
    return this.httpClient.get('https://euw.api.pvp.net/api/lol/euw/v2.5/league/by-summoner/' + summonerId + '/entry?api_key=RGAPI-E84A613F-17C8-4DDD-84A7-D6057DC3B364');
  }

}
