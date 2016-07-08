import {inject} from 'aurelia-framework';
import {LolService} from './services/lol-service';

@inject(LolService)
export class Home {
  epochDates = new Date().getWeekEpoch();
  heading = 'Infernates Win Loss Tracker';
  summonerIds = [
    '40449448',
    '71438301',
    '38196792',
    '23000408',
    '19126665',
    '19996824'
  ];

  players = [];

  constructor(lolService){
    this.lolService = lolService;

  }

  activate(){
     this.lolService.getSummonersById(this.summonerIds)
     .then(data => {
         this.players.push(...Object.values(data.content));

         this.lolService.getLeagueBySummonerId(this.summonerIds)
         .then(data => {
           var i = 0;
           for(var obj in data.content)
           {
             this.players[i].league = Object.values(data.content[obj]);
             i++;
           }
         });
     });
  }

}
