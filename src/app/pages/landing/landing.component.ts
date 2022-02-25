import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { JarvisService } from 'src/app/services/jarvis.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  characters: Character[] = [
    {
      id: 1010354,
      name: 'Adam Warlock',
      description:
        'Adam Warlock is an artificially created human who was born in a cocoon at a scientific complex called The Beehive.',
      modified: '2013-08-07T13:49:06-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010354',
      comics: {
        available: 188,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1010354/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/62151',
            name: 'All-New Guardians of the Galaxy Vol. 3: Infinity Quest (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17271',
            name: 'Annihilation: Conquest (2007) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17405',
            name: 'Annihilation: Conquest (2007) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17645',
            name: 'Annihilation: Conquest (2007) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20686',
            name: 'Annihilation: Conquest (2007) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20885',
            name: 'Annihilation: Conquest (2007) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21016',
            name: 'Annihilation: Conquest (2007) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12412',
            name: 'Avengers Forever (1998) #9',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1033',
            name: 'Avengers Legends Vol. I: Avengers Forever (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20731',
            name: 'CLANDESTINE CLASSIC PREMIERE HC (Hardcover)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20187',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #27',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20193',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #32',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20197',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #36',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8552',
            name: 'Earth X (1999) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8550',
            name: 'Earth X (1999) #11',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4241',
            name: 'EARTH X TPB [NEW PRINTING] (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12975',
            name: 'Fantastic Four (1961) #172',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/13195',
            name: 'Fantastic Four (1961) #370',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/25305',
            name: 'Guardians of the Galaxy (2008) #17',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/65547',
            name: 'All-New Guardians of the Galaxy (2017) #150',
          },
        ],
        returned: 20,
      },
      series: {
        available: 82,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1010354/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23058',
            name: 'All-New Guardians of the Galaxy (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22778',
            name: 'All-New Guardians of the Galaxy Vol. 3: Infinity Quest (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3061',
            name: 'Annihilation: Conquest (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2111',
            name: 'Avengers Forever (1998 - 1999)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/93',
            name: 'Avengers Legends Vol. I: Avengers Forever (2002)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3874',
            name: 'CLANDESTINE CLASSIC PREMIERE HC (2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3741',
            name: 'Doctor Strange, Sorcerer Supreme (1988 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/378',
            name: 'Earth X (1999 - 2000)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1806',
            name: 'EARTH X TPB [NEW PRINTING] (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2121',
            name: 'Fantastic Four (1961 - 1998)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
            name: 'Guardians of the Galaxy (2008 - 2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/27554',
            name: 'Guardians Of The Galaxy Annual (2019)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/26496',
            name: 'Guardians Of The Galaxy Vol. 2: Faithless (2020)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22422',
            name: 'GUARDIANS OF THE GALAXY: ROAD TO ANNIHILATION VOL. 2 TPB (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2021',
            name: 'Incredible Hulk (1962 - 1999)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2983',
            name: 'Incredible Hulk Annual (1976 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/26307',
            name: 'Infinity By Starlin & Hickman (2019)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24050',
            name: 'Infinity Countdown (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24300',
            name: 'Infinity Countdown Prime (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23991',
            name: 'Infinity Countdown: Adam Warlock (2018)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 217,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1010354/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1412',
            name: 'Cover #1412',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1602',
            name: 'Cover #1602',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1800',
            name: 'Cover #1800',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1842',
            name: 'Cover #1842',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3758',
            name: 'WARLOCK (2004) #3',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3760',
            name: 'WARLOCK (2004) #1',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3762',
            name: 'WARLOCK (2004) #2',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3764',
            name: 'WARLOCK (2004) #4',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/12568',
            name: 'Fantastic Four (1961) #172',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/12569',
            name: 'Cry, the Bedeviled Planet!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13121',
            name: 'Forever Evil',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/18500',
            name: 'Incredible Hulk (1962) #177',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/18501',
            name: 'Peril of the Paired Planets',
            type: '',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/18503',
            name: 'Triumph On Terra-Two',
            type: '',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/19847',
            name: 'Cover #19847',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/19848',
            name: 'Performance',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/19859',
            name: 'Days of Future Present Part 4',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/19860',
            name: 'You Must Remember This',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/19883',
            name: 'The Adventures of Lockheed the Space Dragon and His Pet Girl, Kitty',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/19884',
            name: 'The Saga of Storm: Goddess of Thunder',
            type: 'cover',
          },
        ],
        returned: 20,
      },
      events: {
        available: 8,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1010354/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/293',
            name: 'Annihilation: Conquest',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/233',
            name: 'Atlantis Attacks',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/235',
            name: 'Blood and Thunder',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/240',
            name: 'Days of Future Present',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/263',
            name: 'Mutant Massacre',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/271',
            name: 'Secret Wars II',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/280',
            name: 'X-Tinction Agenda',
          },
        ],
        returned: 8,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1010354/adam_warlock?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Warlock,_Adam?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1010354/adam_warlock?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1010370,
      name: 'Alpha Flight',
      description: '',
      modified: '2013-10-24T13:09:22-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/60/52695277ee088',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010370',
      comics: {
        available: 208,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1010370/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/39654',
            name: 'Alpha Flight (2011) #0.1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12637',
            name: 'Alpha Flight (1983) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/393',
            name: 'Alpha Flight (2004) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/39819',
            name: 'Alpha Flight (2011) #1 (Eaglesham Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38569',
            name: 'Alpha Flight (2011) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12679',
            name: 'Alpha Flight (1983) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/456',
            name: 'Alpha Flight (2004) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/39818',
            name: 'Alpha Flight (2011) #2 (Eaglesham Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/616',
            name: 'Alpha Flight (2004) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12690',
            name: 'Alpha Flight (1983) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/39820',
            name: 'Alpha Flight (2011) #3 (Eaglesham Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/677',
            name: 'Alpha Flight (2004) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12701',
            name: 'Alpha Flight (1983) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38567',
            name: 'Alpha Flight (2011) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12712',
            name: 'Alpha Flight (1983) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38568',
            name: 'Alpha Flight (2011) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/613',
            name: 'Alpha Flight (2004) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12723',
            name: 'Alpha Flight (1983) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38566',
            name: 'Alpha Flight (2011) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/572',
            name: 'Alpha Flight (2004) #6',
          },
        ],
        returned: 20,
      },
      series: {
        available: 40,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1010370/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/719',
            name: 'Alpha Flight (2004 - 2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13907',
            name: 'Alpha Flight (2011 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/27041',
            name: 'Alpha Flight Facsimile Edition (2019)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/27625',
            name: 'Alpha Flight: True North (2019)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/28069',
            name: 'Annihilation: Scourge (2020)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/744',
            name: 'Astonishing X-Men (2004 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
            name: 'Avengers (1963 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1995',
            name: 'Cable (1993 - 2002)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/20718',
            name: 'Captain Marvel (2016 - 2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22552',
            name: 'Champions (2016 - 2019)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/11854',
            name: 'Chaos War (2010 - 2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13468',
            name: 'Chaos War One-Shots (2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13260',
            name: 'Chaos War: Alpha Flight (2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/21692',
            name: 'Civil War II: Choosing Sides (2016)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/14399',
            name: 'Essential X-Men Vol. 2 (All-New Edition) (2011 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2123',
            name: 'Fantastic Four (1996 - 1997)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2121',
            name: 'Fantastic Four (1961 - 1998)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/20465',
            name: 'Guardians of the Galaxy (2015 - 2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1812',
            name: 'Heroes Reborn: Fantastic Four (2006)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 378,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1010370/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2921',
            name: 'Alpha Flight (2004) #9',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2922',
            name: '1 of 4 - Days of Future Present Past Participle',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2923',
            name: 'Alpha Flight (2004) #1',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2924',
            name: 'Interior #2924',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2925',
            name: 'Alpha Flight (2004) #2',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2926',
            name: 'Interior #2926',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2927',
            name: 'Alpha Flight (2004) #6',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2928',
            name: 'Interior #2928',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2929',
            name: 'Alpha Flight (2004) #5',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2930',
            name: 'Interior #2930',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2931',
            name: 'Alpha Flight (2004) #3',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2932',
            name: 'Interior #2932',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2933',
            name: 'Alpha Flight (2004) #4',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2934',
            name: 'Interior #2934',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2935',
            name: 'Alpha Flight (2004) #7',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2936',
            name: '"WAXING POETIC" PART 1 (OF 2) Is the All-New, All-Different Alpha Flight really disbanding after only seven issues? Not if the r',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2937',
            name: 'Alpha Flight (2004) #8',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2938',
            name: '"WAXING POETIC" PART 2 (OF 2) Montreal faces its gravest hour as it falls under attack by…wax statues of the entire Marvel Unive',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2939',
            name: 'Alpha Flight (2004) #10',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2940',
            name: '2 of 4 - Days of Future Present Past Participle',
            type: 'interiorStory',
          },
        ],
        returned: 20,
      },
      events: {
        available: 7,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1010370/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
            name: 'Chaos War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/333',
            name: 'Monsters Unleashed',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/337',
            name: 'Monsters Unleashed',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/271',
            name: 'Secret Wars II',
          },
        ],
        returned: 7,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1010370/alpha_flight?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Alpha_Flight?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1010370/alpha_flight?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009152,
      name: 'Ancient One',
      description: '',
      modified: '1969-12-31T19:00:00-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/b0/4ce59ea2103ac',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009152',
      comics: {
        available: 30,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009152/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/62140',
            name: 'Doctor Strange and the Sorcerers Supreme Vol. 1: Out of Time (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20234',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #7',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20245',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #8',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20172',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #13',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20182',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #22',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20183',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #23',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20194',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #33',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20195',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #34',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20207',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #45',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20209',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #47',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20217',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #54',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20218',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #55',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20250',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #84',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20251',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #85',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20253',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #87',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20254',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #88',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20090',
            name: 'Doctor Strange (1974) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20091',
            name: 'Doctor Strange (1974) #13',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20097',
            name: 'Doctor Strange (1974) #19',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/50874',
            name: 'Guardians of the Galaxy (1990) #19',
          },
        ],
        returned: 20,
      },
      series: {
        available: 11,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009152/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3740',
            name: 'Doctor Strange (1974 - 1988)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22767',
            name: 'Doctor Strange and the Sorcerers Supreme Vol. 1: Out of Time (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3741',
            name: 'Doctor Strange, Sorcerer Supreme (1988 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/21012',
            name: 'Doctor Strange: Masterworks Vol. 7 (2016)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/19019',
            name: 'Guardians of the Galaxy (1990 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/19020',
            name: 'Guardians of the Galaxy Annual (1991)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23007',
            name: 'Guidebook to the Marvel Cinematic Universe (2015 - 2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1468',
            name: 'Marvel Masterworks: Doctor Strange Vol. (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2076',
            name: 'Strange Tales (1951 - 1968)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/25557',
            name: 'Untold Tales of Spider-Man: Strange Encounter (1998)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3648',
            name: 'What If? (1989 - 1998)',
          },
        ],
        returned: 11,
      },
      stories: {
        available: 34,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009152/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/10258',
            name: 'Cover #10258',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/10263',
            name: 'If Kaluu Should Triumph...',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/10292',
            name: 'Umar Walks the Earth!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/10333',
            name: 'This Dream---This Doom!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/39010',
            name: 'What if Wolverine had Become Lord of the Vampires?',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43011',
            name: 'Doctor Strange (1974) #12',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43012',
            name: 'Final Curtain!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43040',
            name: 'Doctor Strange (1974) #13',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43041',
            name: 'Planet Earth is No More!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43052',
            name: 'Doctor Strange (1974) #19',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43053',
            name: 'Lo, the Powers Changeth!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43211',
            name: 'TBOTV:The Curse of the Darkhold Part V, The Torch is Passed',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43237',
            name: 'TBOTV:Legends and Lore of the Dark Dimension, Part 2',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43240',
            name: 'TBOTV:Legends and Lore of the Dark Dimension, Part 3',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43266',
            name: 'The Alexandrain Quatrain',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43269',
            name: 'Is There a Doctor Not In The House?',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43293',
            name: "Death's Greatest Hits",
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43297',
            name: 'Strange Bedfellows II',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43314',
            name: 'From Here...To There...To Eternity',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43317',
            name: 'World Enough, And Time...',
            type: 'interiorStory',
          },
        ],
        returned: 20,
      },
      events: {
        available: 2,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009152/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
        ],
        returned: 2,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/145/ancient_one?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Ancient_One?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009152/ancient_one?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009159,
      name: 'Archangel',
      description: '',
      modified: '2013-10-18T12:48:24-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/03/526165ed93180',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009159',
      comics: {
        available: 561,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009159/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17701',
            name: 'Age of Apocalypse: The Chosen (1995) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12555',
            name: 'All-Winners Comics (1941) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12651',
            name: 'Alpha Flight (1983) #111',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/51178',
            name: 'Archangel (1996) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/63833',
            name: 'Astonishing X-Men (2017) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/64883',
            name: 'Astonishing X-Men (2017) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/65263',
            name: 'Astonishing X-Men (2017) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/66265',
            name: 'Astonishing X-Men (2017) #8',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/66481',
            name: 'Astonishing X-Men (2017) #9',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/67715',
            name: 'Astonishing X-Men (2017) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/40803',
            name: 'Astonishing X-Men (2004) #51',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/71373',
            name: 'Astonishing X-Men Annual (2018) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/66299',
            name: 'Astonishing X-Men by Charles Soule Vol. 1: Life of X (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17509',
            name: 'Avengers (1998) #27',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17546',
            name: 'Avengers (1998) #60',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4461',
            name: 'Avengers Assemble Vol. 3 (Hardcover)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1098',
            name: 'Avengers Vol. 1: World Trust (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/23971',
            name: 'Cable (2008) #13',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/23972',
            name: 'Cable (2008) #13 (MW, 50/50 Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/24171',
            name: 'Cable (2008) #14',
          },
        ],
        returned: 20,
      },
      series: {
        available: 139,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009159/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3614',
            name: 'Age of Apocalypse: The Chosen (1995)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2114',
            name: 'All-Winners Comics (1941 - 1947)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/19239',
            name: 'Archangel (1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/744',
            name: 'Astonishing X-Men (2004 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23262',
            name: 'Astonishing X-Men (2017 - 2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/26006',
            name: 'Astonishing X-Men Annual (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24018',
            name: 'Astonishing X-Men by Charles Soule Vol. 1: Life of X (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
            name: 'Avengers (1998 - 2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1737',
            name: 'Avengers Assemble Vol. 3 (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/158',
            name: 'Avengers Vol. 1: World Trust (2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3626',
            name: 'Bishop (1994 - 1995)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1995',
            name: 'Cable (1993 - 2002)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4002',
            name: 'Cable (2008 - 2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/8',
            name: 'Call, the Vol. 2: The Precinct (2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/485',
            name: 'Captain America (2002 - 2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/690',
            name: 'Captain Marvel (2000 - 2002)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/175',
            name: 'Captain Marvel Vol. 1: Nothing to Lose (2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/105',
            name: 'Captain Marvel Vol. I (1999)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2001',
            name: 'Champions (1975 - 1978)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 622,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009159/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1745',
            name: 'UNCANNY X-MEN (1963) #433',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1776',
            name: 'UNCANNY X-MEN (1963) #434',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2071',
            name: 'UNCANNY X-MEN (1963) #438',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2293',
            name: 'UNCANNY X-MEN (1963) #432',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3261',
            name: '2 of 2 - Save the Life of My Child',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/6222',
            name: 'Cover #6222',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/8823',
            name: '[The Six Big Men]',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/9053',
            name: 'Cover #9053',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/9059',
            name: 'The Case of the Mad Gargoyle',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/9719',
            name: 'The House of Horror',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/9724',
            name: "Killer's Last Stand",
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/9729',
            name: 'The Case of the Beggar Prince',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/9735',
            name: 'Charity Bazaar Murders',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/9741',
            name: "The Devil's Imposter",
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/9747',
            name: 'Tell-Tale Cigarette',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/9753',
            name: 'The Parrot Murder Secret',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/9758',
            name: 'Mystery of Horror House',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/9763',
            name: 'Adventure of the Generous Fence',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/9770',
            name: 'Shadow of the Noose',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/9776',
            name: 'The Two-Faced Corpse',
            type: 'interiorStory',
          },
        ],
        returned: 20,
      },
      events: {
        available: 20,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009159/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/227',
            name: 'Age of Apocalypse',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/233',
            name: 'Atlantis Attacks',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/240',
            name: 'Days of Future Present',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/246',
            name: 'Evolutionary War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/248',
            name: 'Fall of the Mutants',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/249',
            name: 'Fatal Attractions',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/252',
            name: 'Inferno',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/334',
            name: 'Inhumans Vs. X-Men',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/32',
            name: 'Kings of Pain',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/299',
            name: 'Messiah CompleX',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/298',
            name: 'Messiah War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/263',
            name: 'Mutant Massacre',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/154',
            name: 'Onslaught',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/276',
            name: 'War of Kings',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/277',
            name: 'World War Hulk',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/308',
            name: 'X-Men: Regenesis',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/280',
            name: 'X-Tinction Agenda',
          },
        ],
        returned: 20,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1009159/archangel?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Angel_(Warren_Worthington_III)?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009159/archangel?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009163,
      name: 'Aurora',
      description: '',
      modified: '2011-05-10T15:56:51-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/10/4c004203f1072',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009163',
      comics: {
        available: 78,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009163/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17701',
            name: 'Age of Apocalypse: The Chosen (1995) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38570',
            name: 'Alpha Flight (2011) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12637',
            name: 'Alpha Flight (1983) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/39819',
            name: 'Alpha Flight (2011) #1 (Eaglesham Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38569',
            name: 'Alpha Flight (2011) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12679',
            name: 'Alpha Flight (1983) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38565',
            name: 'Alpha Flight (2011) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12690',
            name: 'Alpha Flight (1983) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12701',
            name: 'Alpha Flight (1983) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12734',
            name: 'Alpha Flight (1983) #7',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12745',
            name: 'Alpha Flight (1983) #8',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12638',
            name: 'Alpha Flight (1983) #10',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12649',
            name: 'Alpha Flight (1983) #11',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12660',
            name: 'Alpha Flight (1983) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1647',
            name: 'Alpha Flight (2004) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12671',
            name: 'Alpha Flight (1983) #13',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12673',
            name: 'Alpha Flight (1983) #14',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12674',
            name: 'Alpha Flight (1983) #15',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12675',
            name: 'Alpha Flight (1983) #16',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12676',
            name: 'Alpha Flight (1983) #17',
          },
        ],
        returned: 20,
      },
      series: {
        available: 17,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009163/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3614',
            name: 'Age of Apocalypse: The Chosen (1995)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/719',
            name: 'Alpha Flight (2004 - 2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13907',
            name: 'Alpha Flight (2011 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13260',
            name: 'Chaos War: Alpha Flight (2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3374',
            name: 'Hulk (2008 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1440',
            name: 'MARVEL MASTERWORKS: THE UNCANNY X-MEN VOL. 2 HC (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2258',
            name: 'Uncanny X-Men (1963 - 2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1723',
            name: 'Uncanny X-Men Omnibus Vol. 1 (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/543',
            name: 'Weapon X (2002 - 2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/163',
            name: 'WEAPON X VOL. 1: THE DRAFT TPB (2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/138',
            name: 'Weapon X Vol. I (1999)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3653',
            name: 'Weapon X: The Draft – Wild Child (2002)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2262',
            name: 'Wolverine (1988 - 2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2098',
            name: 'X-Factor (1986 - 1998)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/28053',
            name: 'X-Factor (2020 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1583',
            name: 'X-Men: The Complete Age of Apocalypse Epic Book 2 (2005)',
          },
        ],
        returned: 17,
      },
      stories: {
        available: 90,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009163/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1131',
            name: 'WEAPON X (2002) #13',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1786',
            name: 'WEAPON X (2002) #22',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2943',
            name: 'Alpha Flight (2004) #12',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2944',
            name: '4 of 4 - Days of Future Present Past Participle',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/15427',
            name: 'Shoot-Out at the Stampede!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21096',
            name: 'Alpha Flight (1983) #1',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21097',
            name: 'Tundra!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21099',
            name: 'Blood Battle',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21124',
            name: 'Alpha Flight #12',
            type: 'ad',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21126',
            name: 'Bare Bones',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21128',
            name: 'Bare Bones Part II',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21132',
            name: 'Speaking of Experience',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21145',
            name: 'And One Shall Surely Die !',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21146',
            name: 'And One Shall Surely Die',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21165',
            name: 'Faith!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21168',
            name: 'The Perfect World',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21169',
            name: 'No Future Part 2',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21170',
            name: 'Ordeal!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21172',
            name: 'Nightmare',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21174',
            name: 'The Hollow Man',
            type: 'interiorStory',
          },
        ],
        returned: 20,
      },
      events: {
        available: 4,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009163/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/227',
            name: 'Age of Apocalypse',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
            name: 'Chaos War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
        ],
        returned: 4,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/221/aurora?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Aurora?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009163/aurora?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009165,
      name: 'Avengers',
      description:
        "Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle. With a roster that has included Captain America, Iron Man, Ant-Man, Hulk, Thor, Wasp and dozens more over the years, the Avengers have come to be regarded as Earth's No. 1 team.",
      modified: '2020-07-21T10:29:09-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/20/5102c774ebae7',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009165',
      comics: {
        available: 1977,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009165/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/77059',
            name: 'Absolute Carnage: Avengers (2019) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/81255',
            name: 'Acts of Vengeance: Avengers (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/42539',
            name: 'Age of Apocalypse (2011) #2 (Avengers Art Appreciation Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/30090',
            name: 'Age of Heroes (2010) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/33566',
            name: 'Age of Heroes (2010) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/30092',
            name: 'Age of Heroes (2010) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/30093',
            name: 'Age of Heroes (2010) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37405',
            name: 'Age of Ultron (2013) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37406',
            name: 'Age of Ultron (2013) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37407',
            name: 'Age of Ultron (2013) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/45904',
            name: 'Age of Ultron (2013) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/45905',
            name: 'Age of Ultron (2013) #7',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/45906',
            name: 'Age of Ultron (2013) #8',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/45907',
            name: 'Age of Ultron (2013) #9',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/45908',
            name: 'Age of Ultron (2013) #10',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38524',
            name: 'Age of X: Universe (2011) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38523',
            name: 'Age of X: Universe (2011) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37278',
            name: 'Alias (2001) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37255',
            name: 'Alias Omnibus (Hardcover)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/43473',
            name: 'All-New X-Men (2012) #8',
          },
        ],
        returned: 20,
      },
      series: {
        available: 602,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009165/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/27631',
            name: 'Absolute Carnage: Avengers (2019)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/29061',
            name: 'Acts of Vengeance: Avengers (2020)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/15331',
            name: 'Age of Apocalypse (2011 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9790',
            name: 'Age of Heroes (2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/17318',
            name: 'Age of Ultron (2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13896',
            name: 'Age of X: Universe (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/672',
            name: 'Alias (2001 - 2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13383',
            name: 'Alias Omnibus (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/16449',
            name: 'All-New X-Men (2012 - 2015)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/20443',
            name: 'All-New, All-Different Avengers (2015 - 2016)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22190',
            name: 'All-New, All-Different Avengers Annual (2016)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22374',
            name: 'ALL-NEW, ALL-DIFFERENT AVENGERS HC (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/719',
            name: 'Alpha Flight (2004 - 2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/454',
            name: 'Amazing Spider-Man (1999 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2984',
            name: 'Amazing Spider-Man Annual (1964 - 2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24403',
            name: 'Amazing Spider-Man Epic Collection: Spider-Man No More (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/5376',
            name: 'Amazing Spider-Man Family (2008 - 2009)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1489',
            name: 'AMAZING SPIDER-MAN VOL. 10: NEW AVENGERS TPB (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/16312',
            name: 'Amazing Spider-Man: Ends of the Earth (2012)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 2803,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009165/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/490',
            name: 'Interior #490',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/542',
            name: 'Interior #542',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/572',
            name: 'Interior #572',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/574',
            name: 'Interior #574',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/575',
            name: 'Interior #575',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/577',
            name: 'Interior #577',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/579',
            name: 'Interior #579',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/580',
            name: 'Interior #580',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/749',
            name: '1 of 4 - Season of the Witch',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/892',
            name: 'THOR (1998) #81',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1024',
            name: 'Avengers (1998) #80',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1025',
            name: 'Interior #1025',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1026',
            name: 'Avengers (1998) #81',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1027',
            name: 'Interior #1027',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1029',
            name: 'Interior #1029',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1031',
            name: 'Interior #1031',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1039',
            name: 'Interior #1039',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1041',
            name: 'Avengers (1998) #502',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1043',
            name: 'Interior #1043',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1054',
            name: 'Avengers (1998) #72',
            type: 'cover',
          },
        ],
        returned: 20,
      },
      events: {
        available: 33,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009165/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/314',
            name: 'Age of Ultron',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/303',
            name: 'Age of X',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/233',
            name: 'Atlantis Attacks',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/234',
            name: 'Avengers Disassembled',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/310',
            name: 'Avengers VS X-Men',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
            name: 'Chaos War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/238',
            name: 'Civil War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/239',
            name: 'Crossing',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
            name: 'Dark Reign',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/246',
            name: 'Evolutionary War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/251',
            name: 'House of M',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/252',
            name: 'Inferno',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/315',
            name: 'Infinity',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/317',
            name: 'Inhumanity',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/255',
            name: 'Initiative',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/333',
            name: 'Monsters Unleashed',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/337',
            name: 'Monsters Unleashed',
          },
        ],
        returned: 20,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1009165/avengers?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Avengers?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009165/avengers?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009175,
      name: 'Beast',
      description: '',
      modified: '2014-01-13T14:48:32-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/80/511a79a0451a3',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009175',
      comics: {
        available: 818,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009175/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/43501',
            name: 'A+X (2012) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/43506',
            name: 'A+X (2012) #7',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/44580',
            name: 'All-New X-Men (2012) #3 (Mcguinness Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12651',
            name: 'Alpha Flight (1983) #111',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/23247',
            name: 'Amazing Adventures (1970) #11',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/23248',
            name: 'Amazing Adventures (1970) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/23249',
            name: 'Amazing Adventures (1970) #13',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/23250',
            name: 'Amazing Adventures (1970) #14',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/23251',
            name: 'Amazing Adventures (1970) #15',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/23252',
            name: 'Amazing Adventures (1970) #16',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/23253',
            name: 'Amazing Adventures (1970) #17',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/48021',
            name: 'Amazing X-Men (2013) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/660',
            name: 'Astonishing X-Men (2004) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/723',
            name: 'Astonishing X-Men (2004) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/531',
            name: 'Astonishing X-Men (2004) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1808',
            name: 'Astonishing X-Men (2004) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/843',
            name: 'Astonishing X-Men (2004) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/927',
            name: 'Astonishing X-Men (2004) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38',
            name: 'Astonishing X-Men (2004) #7',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1436',
            name: 'Astonishing X-Men (2004) #8',
          },
        ],
        returned: 20,
      },
      series: {
        available: 218,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009175/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/16450',
            name: 'A+X (2012 - 2014)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/16449',
            name: 'All-New X-Men (2012 - 2015)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/6666',
            name: 'Amazing Adventures (1970 - 1976)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/18142',
            name: 'Amazing X-Men (2013 - 2015)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23262',
            name: 'Astonishing X-Men (2017 - 2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/744',
            name: 'Astonishing X-Men (2004 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/26006',
            name: 'Astonishing X-Men Annual (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/7576',
            name: 'Astonishing X-Men by Joss Whedon & John Cassaday (2009 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1464',
            name: 'Astonishing X-Men Vol. 1 (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1298',
            name: 'Astonishing X-Men Vol. 1: Gifted (2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1422',
            name: 'Astonishing X-Men Vol. 2: Dangerous (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1485',
            name: 'Astonishing X-Men Vol. 3: Torn (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/5055',
            name: 'Astonishing X-Men Vol. 4: Unstoppable (2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/5998',
            name: 'Astonishing X-Men: Ghost Boxes (2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9781',
            name: 'Astonishing X-Men: Xenogenesis (2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9085',
            name: 'Avengers (2010 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22547',
            name: 'Avengers (2016 - 2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
            name: 'Avengers (1963 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
            name: 'Avengers (1998 - 2004)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 912,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009175/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/608',
            name: 'Cover #608',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/610',
            name: 'Cover #610',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/612',
            name: 'Cover #612',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/628',
            name: 'X-MEN (2004) #165',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/666',
            name: 'X-MEN (2004) #184',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/670',
            name: 'X-MEN (2004) #186',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/674',
            name: 'X-MEN (2004) #188',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/743',
            name: "5 of 5 - World's End",
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/747',
            name: '2 of 2 - Mojo Rising',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/765',
            name: '1 of 3 -',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/766',
            name: 'Uncanny X-Men (1963) #470',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/767',
            name: "2 of 3 - Wand'ring Star",
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1046',
            name: 'Cover #1046',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1490',
            name: 'Cover #1490',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1596',
            name: 'New Mutants (2003) #10',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1901',
            name: 'New Mutants (2003) #12',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1902',
            name: 'Interior #1902',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2190',
            name: '6 of 6 - Enemy of the State',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2448',
            name: 'Cover #2448',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2478',
            name: 'CABLE & DEADPOOL (2004) #8',
            type: 'cover',
          },
        ],
        returned: 20,
      },
      events: {
        available: 30,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009175/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/227',
            name: 'Age of Apocalypse',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/303',
            name: 'Age of X',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/233',
            name: 'Atlantis Attacks',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/310',
            name: 'Avengers VS X-Men',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/320',
            name: 'Axis',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
            name: 'Chaos War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/238',
            name: 'Civil War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
            name: 'Dark Reign',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/240',
            name: 'Days of Future Present',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/245',
            name: 'Enemy of the State',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/246',
            name: 'Evolutionary War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/248',
            name: 'Fall of the Mutants',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/249',
            name: 'Fatal Attractions',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/252',
            name: 'Inferno',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/315',
            name: 'Infinity',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/317',
            name: 'Inhumanity',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/255',
            name: 'Initiative',
          },
        ],
        returned: 20,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/3/beast?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Beast_(Henry_McCoy)?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009175/beast?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009186,
      name: 'Black Knight (Sir Percy of Scandia)',
      description: '',
      modified: '1969-12-31T19:00:00-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/b0/4ce59ed1590a7',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009186',
      comics: {
        available: 107,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009186/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12725',
            name: 'Alpha Flight (1983) #61',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12650',
            name: 'Alpha Flight (1983) #110',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17490',
            name: 'Avengers (1998) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17501',
            name: 'Avengers (1998) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17512',
            name: 'Avengers (1998) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17523',
            name: 'Avengers (1998) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17762',
            name: 'Avengers (1996) #8',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17763',
            name: 'Avengers (1996) #9',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17497',
            name: 'Avengers (1998) #16',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17498',
            name: 'Avengers (1998) #17',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17499',
            name: 'Avengers (1998) #18',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17521',
            name: 'Avengers (1998) #38',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17524',
            name: 'Avengers (1998) #40',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17525',
            name: 'Avengers (1998) #41',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17526',
            name: 'Avengers (1998) #42',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17528',
            name: 'Avengers (1998) #44',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17530',
            name: 'Avengers (1998) #46',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17532',
            name: 'Avengers (1998) #48',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17537',
            name: 'Avengers (1998) #52',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17538',
            name: 'Avengers (1998) #53',
          },
        ],
        returned: 20,
      },
      series: {
        available: 58,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009186/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3621',
            name: 'Avengers (1996 - 1997)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
            name: 'Avengers (1998 - 2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
            name: 'Avengers (1963 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1988',
            name: 'Avengers Annual (1967 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1340',
            name: 'Avengers Assemble (2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1496',
            name: 'Avengers Assemble Vol. 2 (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1816',
            name: 'Avengers Assemble Vol. 4 (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2929',
            name: 'Avengers Assemble Vol. 5 (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/158',
            name: 'Avengers Vol. 1: World Trust (2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1679',
            name: 'Avengers: Galactic Storm Vol. 2 (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/98',
            name: 'AVENGERS: THE KANG DYNASTY TPB (2002)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/16425',
            name: 'Black Knight (1955 - 1956)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/31431',
            name: 'Black Knight Facsimile Edition (2021)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3743',
            name: 'Defenders (1972 - 1986)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3741',
            name: 'Doctor Strange, Sorcerer Supreme (1988 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/378',
            name: 'Earth X (1999 - 2000)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1806',
            name: 'EARTH X TPB [NEW PRINTING] (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2011',
            name: 'Excalibur (1988 - 1998)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2121',
            name: 'Fantastic Four (1961 - 1998)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 106,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009186/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5162',
            name: 'NEW EXCALIBUR (2005) #11',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/11876',
            name: 'Cover #11876',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/11877',
            name: 'Where Walk the Villains!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/11900',
            name: 'Cover #11900',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13170',
            name: 'Chaos in the Courtroom',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/15052',
            name: 'Bloodties Part 1: Reckoning',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/15186',
            name: 'Some Say the World Will End in Fire, Some Say in Ice',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/15188',
            name: 'The Monarch and the Man-Ape',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/15297',
            name: 'Summons From the Stars!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/17062',
            name: 'Ye Olde Shelle Game',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/17387',
            name: 'Betrayal',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/17441',
            name: 'Masters of Evil',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/19535',
            name: 'Bad Judgment',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21126',
            name: 'Bare Bones',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21288',
            name: '...Inquistition',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/22240',
            name: 'Cover #22240',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/22241',
            name: 'The Carbon Copy Avengers',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/22463',
            name: 'Tying the Knot',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/23538',
            name: 'Sands of Time',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/24914',
            name: 'Earth X Chapter Twelve',
            type: 'interiorStory',
          },
        ],
        returned: 20,
      },
      events: {
        available: 3,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009186/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/271',
            name: 'Secret Wars II',
          },
        ],
        returned: 3,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/275/black_knight?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Black_Knight_(Sir_Percy_of_Scandia)?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009186/black_knight_sir_percy_of_scandia?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009218,
      name: 'Calypso',
      description: '',
      modified: '1969-12-31T19:00:00-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/b0/4ce59f17087ab',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009218',
      comics: {
        available: 6,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009218/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7626',
            name: 'Captain America (1968) #245',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8308',
            name: 'Daredevil (1964) #310',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/10778',
            name: 'Spider-Man (1990) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/10789',
            name: 'Spider-Man (1990) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/10800',
            name: 'Spider-Man (1990) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/10811',
            name: 'Spider-Man (1990) #5',
          },
        ],
        returned: 6,
      },
      series: {
        available: 3,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009218/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1996',
            name: 'Captain America (1968 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2002',
            name: 'Daredevil (1964 - 1998)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2069',
            name: 'Spider-Man (1990 - 1998)',
          },
        ],
        returned: 3,
      },
      stories: {
        available: 6,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009218/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/16191',
            name: 'Cover #16191',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/17748',
            name: 'CAPTAIN AMERICA (1968) #245',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/23757',
            name: 'Torment, Part 2',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/23776',
            name: 'Torment, Part 3',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/23808',
            name: 'Torment, Part 4',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/23839',
            name: 'Torment, Part 5',
            type: 'interiorStory',
          },
        ],
        returned: 6,
      },
      events: {
        available: 1,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009218/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
        ],
        returned: 1,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/377/calypso?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Calypso?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009218/calypso?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009220,
      name: 'Captain America',
      description:
        "Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty.",
      modified: '2020-04-04T19:01:59-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009220',
      comics: {
        available: 2406,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009220/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/43488',
            name: 'A+X (2012) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/43501',
            name: 'A+X (2012) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/43508',
            name: 'A+X (2012) #9',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17743',
            name: 'A-Next (1998) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17744',
            name: 'A-Next (1998) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17745',
            name: 'A-Next (1998) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17746',
            name: 'A-Next (1998) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17747',
            name: 'A-Next (1998) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17748',
            name: 'A-Next (1998) #7',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17749',
            name: 'A-Next (1998) #8',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17750',
            name: 'A-Next (1998) #9',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17740',
            name: 'A-Next (1998) #10',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17741',
            name: 'A-Next (1998) #11',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17742',
            name: 'A-Next (1998) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/66978',
            name: 'Adventures of Captain America (1991) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/66979',
            name: 'Adventures of Captain America (1991) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/66980',
            name: 'Adventures of Captain America (1991) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/66981',
            name: 'Adventures of Captain America (1991) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/42539',
            name: 'Age of Apocalypse (2011) #2 (Avengers Art Appreciation Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/30090',
            name: 'Age of Heroes (2010) #1',
          },
        ],
        returned: 20,
      },
      series: {
        available: 678,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009220/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/16450',
            name: 'A+X (2012 - 2014)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3620',
            name: 'A-Next (1998 - 1999)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24227',
            name: 'Adventures of Captain America (1991 - 1992)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/15331',
            name: 'Age of Apocalypse (2011 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9790',
            name: 'Age of Heroes (2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/10235',
            name: 'AGE OF HEROES TPB (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13896',
            name: 'Age of X: Universe (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/7534',
            name: 'All Winners Comics 70th Anniversary Special (2009)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/20682',
            name: 'All-New Wolverine (2015 - 2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2114',
            name: 'All-Winners Comics (1941 - 1947)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9865',
            name: 'All-Winners Squad: Band of Heroes (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/25984',
            name: 'Amazing Fantasy (2021)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/454',
            name: 'Amazing Spider-Man (1999 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9802',
            name: 'Amazing Spider-Man Annual (2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2984',
            name: 'Amazing Spider-Man Annual (1964 - 2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1489',
            name: 'AMAZING SPIDER-MAN VOL. 10: NEW AVENGERS TPB (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/14818',
            name: 'Annihilators: Earthfall (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24323',
            name: 'Ant-Man and the Wasp Adventures (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/14696',
            name: 'Art of Marvel Movies: The Art of Captain America - The First Avenger (2011 - Present)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 3571,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009220/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/670',
            name: 'X-MEN (2004) #186',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/892',
            name: 'THOR (1998) #81',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/960',
            name: '3 of ?',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1026',
            name: 'Avengers (1998) #81',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1041',
            name: 'Avengers (1998) #502',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1042',
            name: 'Avengers (1998) #503',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1054',
            name: 'Avengers (1998) #72',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1163',
            name: 'Amazing Spider-Man (1999) #519',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1165',
            name: 'Amazing Spider-Man (1999) #520',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1167',
            name: 'Amazing Spider-Man (1999) #521',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1175',
            name: 'Amazing Spider-Man (1999) #523',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1193',
            name: 'Amazing Spider-Man (1999) #534',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1199',
            name: 'Amazing Spider-Man (1999) #537',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1203',
            name: 'Amazing Spider-Man (1999) #538',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1414',
            name: 'Cover #1414',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1500',
            name: 'Interior #1500',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1501',
            name: 'CAPTAIN AMERICA (2002) #21',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1503',
            name: 'CAPTAIN AMERICA (2002) #22',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1505',
            name: 'CAPTAIN AMERICA (2002) #23',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1606',
            name: 'WEAPON X (2002) #14',
            type: 'cover',
          },
        ],
        returned: 20,
      },
      events: {
        available: 31,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009220/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/314',
            name: 'Age of Ultron',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/303',
            name: 'Age of X',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/231',
            name: 'Armor Wars',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/234',
            name: 'Avengers Disassembled',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/310',
            name: 'Avengers VS X-Men',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/320',
            name: 'Axis',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
            name: 'Chaos War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/238',
            name: 'Civil War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/248',
            name: 'Fall of the Mutants',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/251',
            name: 'House of M',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/252',
            name: 'Inferno',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/315',
            name: 'Infinity',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/317',
            name: 'Inhumanity',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/151',
            name: 'Maximum Carnage',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/37',
            name: 'Maximum Security',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/337',
            name: 'Monsters Unleashed',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/333',
            name: 'Monsters Unleashed',
          },
        ],
        returned: 20,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1009220/captain_america?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Captain_America_(Steve_Rogers)?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009220/captain_america?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009239,
      name: 'Clea',
      description: '',
      modified: '1969-12-31T19:00:00-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c00406b55161',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009239',
      comics: {
        available: 98,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009239/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/40785',
            name: 'Dark Avengers (2012) #184',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/46025',
            name: 'Dark Avengers (2012) #185',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/46026',
            name: 'Dark Avengers (2012) #186',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/46028',
            name: 'Dark Avengers (2012) #188',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/46029',
            name: 'Dark Avengers (2012) #189',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/93317',
            name: 'Death of Doctor Strange (2021) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/93318',
            name: 'Death of Doctor Strange (2021) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/93319',
            name: 'Death of Doctor Strange (2021) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20347',
            name: 'Defenders (1972) #39',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20266',
            name: 'Defenders (1972) #102',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20279',
            name: 'Defenders (1972) #114',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/71090',
            name: 'Doctor Strange (2018) #14',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/71091',
            name: 'Doctor Strange (2018) #15',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/71092',
            name: 'Doctor Strange (2018) #16',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/16915',
            name: 'Doctor Strange (1968) #173',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/16916',
            name: 'Doctor Strange (1968) #174',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/16917',
            name: 'Doctor Strange (1968) #175',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/16918',
            name: 'Doctor Strange (1968) #176',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/16919',
            name: 'Doctor Strange (1968) #177',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/66909',
            name: 'Doctor Strange (2015) #389',
          },
        ],
        returned: 20,
      },
      series: {
        available: 27,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009239/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/789',
            name: 'Dark Avengers (2012 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/31898',
            name: 'Death of Doctor Strange (2021 - 2022)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3743',
            name: 'Defenders (1972 - 1986)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/20457',
            name: 'Doctor Strange (2015 - 2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3740',
            name: 'Doctor Strange (1974 - 1988)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24296',
            name: 'Doctor Strange (2018 - 2019)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2985',
            name: 'Doctor Strange (1968 - 1969)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22409',
            name: 'Doctor Strange Annual (2016)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24765',
            name: 'Doctor Strange Epic Collection: Master of the Mystic Arts (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22764',
            name: 'Doctor Strange Vol. 4: Mr. Misery (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22763',
            name: 'DOCTOR STRANGE VOL. 4: MR. MISERY PREMIERE HC (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3741',
            name: 'Doctor Strange, Sorcerer Supreme (1988 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/21012',
            name: 'Doctor Strange: Masterworks Vol. 7 (2016)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/378',
            name: 'Earth X (1999 - 2000)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1806',
            name: 'EARTH X TPB [NEW PRINTING] (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3731',
            name: 'Giant-Size Defenders (1974)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9311',
            name: 'Girl Comics (2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4767',
            name: 'Howard the Duck (1976 - 1979)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2039',
            name: 'Marvel Comics Presents (1988 - 1995)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3719',
            name: 'Marvel Fanfare (1982 - 1992)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 121,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009239/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/6238',
            name: '1 of 5 - 5XLS',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/7906',
            name: '2 of 5 - 5 XLS',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/8689',
            name: '3 of 5 - 5XLS - Secret Wars',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/10286',
            name: 'Clea Must Die!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/23195',
            name: 'At The Bottom of My Garden',
            type: '',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/24914',
            name: 'Earth X Chapter Twelve',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/24923',
            name: 'Earth X Chapter Four',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/24926',
            name: 'Earth X Chapter Five',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/24929',
            name: 'Earth X Chapter Six',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/24931',
            name: 'Cover #24931',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/24932',
            name: 'Earth X Chapter Seven',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/24935',
            name: 'Earth X Chapter Eight',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/32610',
            name: 'Marvel Boy 4 of 5',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/35482',
            name: 'Cover #35482',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/35484',
            name: 'Cover #35484',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/35486',
            name: 'Cover #35486',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/35488',
            name: 'Cover #35488',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/35490',
            name: 'The Cult and the Curse',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/36160',
            name: 'Illuminati are discovered 5 of 5',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/42372',
            name: 'pin-up',
            type: '',
          },
        ],
        returned: 20,
      },
      events: {
        available: 2,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009239/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
        ],
        returned: 2,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/438/clea?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Clea?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009239/clea?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009243,
      name: 'Colossus',
      description: '',
      modified: '2016-02-11T10:06:50-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/e0/51127cf4b996f',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009243',
      comics: {
        available: 695,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009243/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17701',
            name: 'Age of Apocalypse: The Chosen (1995) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37996',
            name: 'Age of X: Alpha (2010) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38524',
            name: 'Age of X: Universe (2011) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38523',
            name: 'Age of X: Universe (2011) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12676',
            name: 'Alpha Flight (1983) #17',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12694',
            name: 'Alpha Flight (1983) #33',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12725',
            name: 'Alpha Flight (1983) #61',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/51348',
            name: 'Amazing X-Men (2013) #19',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1808',
            name: 'Astonishing X-Men (2004) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/843',
            name: 'Astonishing X-Men (2004) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/927',
            name: 'Astonishing X-Men (2004) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1436',
            name: 'Astonishing X-Men (2004) #8',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/2842',
            name: 'Astonishing X-Men (2004) #11',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/2161',
            name: 'Astonishing X-Men (2004) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/3475',
            name: 'Astonishing X-Men (2004) #13',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/67717',
            name: 'Astonishing X-Men (2017) #14',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4022',
            name: 'Astonishing X-Men (2004) #14',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/67718',
            name: 'Astonishing X-Men (2017) #15',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4253',
            name: 'Astonishing X-Men (2004) #15',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/67719',
            name: 'Astonishing X-Men (2017) #16',
          },
        ],
        returned: 20,
      },
      series: {
        available: 166,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009243/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3614',
            name: 'Age of Apocalypse: The Chosen (1995)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13603',
            name: 'Age of X: Alpha (2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13896',
            name: 'Age of X: Universe (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/18142',
            name: 'Amazing X-Men (2013 - 2015)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/744',
            name: 'Astonishing X-Men (2004 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23262',
            name: 'Astonishing X-Men (2017 - 2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/7576',
            name: 'Astonishing X-Men by Joss Whedon & John Cassaday (2009 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1464',
            name: 'Astonishing X-Men Vol. 1 (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1298',
            name: 'Astonishing X-Men Vol. 1: Gifted (2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1422',
            name: 'Astonishing X-Men Vol. 2: Dangerous (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1485',
            name: 'Astonishing X-Men Vol. 3: Torn (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/5055',
            name: 'Astonishing X-Men Vol. 4: Unstoppable (2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
            name: 'Avengers (1998 - 2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
            name: 'Avengers (1963 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1340',
            name: 'Avengers Assemble (2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1816',
            name: 'Avengers Assemble Vol. 4 (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/15305',
            name: 'Avengers Vs. X-Men (2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/784',
            name: 'Black Panther (2005 - 2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4002',
            name: 'Cable (2008 - 2010)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 852,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009243/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/477',
            name: 'Cover #477',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/743',
            name: "5 of 5 - World's End",
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/745',
            name: '1 of 2 - Mojo Rising',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/747',
            name: '2 of 2 - Mojo Rising',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/763',
            name: "3 of 3 - Grey's End",
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1454',
            name: 'Ultimate X-Men (2001) #61',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2843',
            name: '1 of 1 - TBD',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3321',
            name: 'Astonishing X-Men (2004) #5',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3322',
            name: '“GIFTED” 5 (OF 6)  As demand for the',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3323',
            name: 'Cover for Astonishing X-Men (2004) #6',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3324',
            name: '“GIFTED” PART 6 (OF 6) Outnumbered and outgunned, the X-Men are finally brought together as a team by their newest addition – bu',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3326',
            name: '2 of 6 - Dangerous',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3332',
            name: 'Interior #3332',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3335',
            name: '6 of 6 - Dangerous',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3336',
            name: '6 of 6 - Dangerous',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3337',
            name: 'Interior #3337',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3338',
            name: '1 of 6',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3339',
            name: '1 of 6',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3341',
            name: '2 of 6 - Torn',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3343',
            name: '3 of 6 - Torn',
            type: 'interiorStory',
          },
        ],
        returned: 20,
      },
      events: {
        available: 27,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009243/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/227',
            name: 'Age of Apocalypse',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/303',
            name: 'Age of X',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/233',
            name: 'Atlantis Attacks',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/310',
            name: 'Avengers VS X-Men',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/238',
            name: 'Civil War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
            name: 'Dark Reign',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/240',
            name: 'Days of Future Present',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/246',
            name: 'Evolutionary War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/248',
            name: 'Fall of the Mutants',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/249',
            name: 'Fatal Attractions',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/252',
            name: 'Inferno',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/32',
            name: 'Kings of Pain',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/37',
            name: 'Maximum Security',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/299',
            name: 'Messiah CompleX',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/263',
            name: 'Mutant Massacre',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/154',
            name: 'Onslaught',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/336',
            name: 'Secret Empire',
          },
        ],
        returned: 20,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1009243/colossus?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Colossus_(Piotr_Rasputin)?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009243/colossus?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009257,
      name: 'Cyclops',
      description: '',
      modified: '2016-07-05T14:30:06-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/70/526547e2d90ad',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009257',
      comics: {
        available: 979,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009257/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17701',
            name: 'Age of Apocalypse: The Chosen (1995) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/50992',
            name: 'Adventures of Cyclops & Phoenix (1994) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/50993',
            name: 'Adventures of Cyclops & Phoenix (1994) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/50994',
            name: 'Adventures of Cyclops & Phoenix (1994) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/50995',
            name: 'Adventures of Cyclops & Phoenix (1994) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37996',
            name: 'Age of X: Alpha (2010) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38524',
            name: 'Age of X: Universe (2011) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12637',
            name: 'Alpha Flight (1983) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12650',
            name: 'Alpha Flight (1983) #110',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12651',
            name: 'Alpha Flight (1983) #111',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/39041',
            name: 'Amazing Spider-Man (1999) #661 (X-Men Art Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/660',
            name: 'Astonishing X-Men (2004) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/723',
            name: 'Astonishing X-Men (2004) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/531',
            name: 'Astonishing X-Men (2004) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1808',
            name: 'Astonishing X-Men (2004) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/843',
            name: 'Astonishing X-Men (2004) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/927',
            name: 'Astonishing X-Men (2004) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38',
            name: 'Astonishing X-Men (2004) #7',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1436',
            name: 'Astonishing X-Men (2004) #8',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1626',
            name: 'Astonishing X-Men (2004) #9',
          },
        ],
        returned: 20,
      },
      series: {
        available: 284,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009257/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/19095',
            name: 'Adventures of Cyclops & Phoenix (1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3614',
            name: 'Age of Apocalypse: The Chosen (1995)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13603',
            name: 'Age of X: Alpha (2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13896',
            name: 'Age of X: Universe (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/454',
            name: 'Amazing Spider-Man (1999 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/744',
            name: 'Astonishing X-Men (2004 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/7576',
            name: 'Astonishing X-Men by Joss Whedon & John Cassaday (2009 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1464',
            name: 'Astonishing X-Men Vol. 1 (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1298',
            name: 'Astonishing X-Men Vol. 1: Gifted (2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1422',
            name: 'Astonishing X-Men Vol. 2: Dangerous (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1485',
            name: 'Astonishing X-Men Vol. 3: Torn (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/5055',
            name: 'Astonishing X-Men Vol. 4: Unstoppable (2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/5998',
            name: 'Astonishing X-Men: Ghost Boxes (2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9781',
            name: 'Astonishing X-Men: Xenogenesis (2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
            name: 'Avengers (1963 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/15305',
            name: 'Avengers Vs. X-Men (2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/16321',
            name: 'Avengers Vs. X-Men Program (2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4002',
            name: 'Cable (2008 - 2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/28038',
            name: 'Cable (2020 - Present)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 1096,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009257/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/471',
            name: 'Cover #471',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/610',
            name: 'Cover #610',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/612',
            name: 'Cover #612',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/616',
            name: 'X-MEN (2004) #157',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/628',
            name: 'X-MEN (2004) #165',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/660',
            name: 'X-MEN (2004) #181',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/666',
            name: 'X-MEN (2004) #184',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/668',
            name: 'X-MEN (2004) #185',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/670',
            name: 'X-MEN (2004) #186',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/678',
            name: 'X-MEN (2004) #190',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/743',
            name: "5 of 5 - World's End",
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/747',
            name: '2 of 2 - Mojo Rising',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/763',
            name: "3 of 3 - Grey's End",
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/765',
            name: '1 of 3 -',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/766',
            name: 'Uncanny X-Men (1963) #470',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/767',
            name: "2 of 3 - Wand'ring Star",
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/778',
            name: 'UNCANNY X-MEN (1963) #476',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1420',
            name: 'ULTIMATE X-MEN (2000) #43',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1426',
            name: 'ULTIMATE X-MEN (2000) #49',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1432',
            name: 'ULTIMATE X-MEN (2000) #47',
            type: 'cover',
          },
        ],
        returned: 20,
      },
      events: {
        available: 29,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009257/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/227',
            name: 'Age of Apocalypse',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/303',
            name: 'Age of X',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/233',
            name: 'Atlantis Attacks',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/310',
            name: 'Avengers VS X-Men',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/238',
            name: 'Civil War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
            name: 'Dark Reign',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/240',
            name: 'Days of Future Present',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/245',
            name: 'Enemy of the State',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/246',
            name: 'Evolutionary War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/248',
            name: 'Fall of the Mutants',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/249',
            name: 'Fatal Attractions',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/252',
            name: 'Inferno',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/317',
            name: 'Inhumanity',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/32',
            name: 'Kings of Pain',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/299',
            name: 'Messiah CompleX',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/263',
            name: 'Mutant Massacre',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/154',
            name: 'Onslaught',
          },
        ],
        returned: 20,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1009257/cyclops?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Cyclops_(Scott_Summers)?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009257/cyclops?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009262,
      name: 'Daredevil',
      description:
        'Abandoned by his mother, Matt Murdock was raised by his father, boxer "Battling Jack" Murdock, in Hell\'s Kitchen. Realizing that rules were needed to prevent people from behaving badly, young Matt decided to study law; however, when he saved a man from an oncoming truck, it spilled a radioactive cargo that rendered Matt blind while enhancing his remaining senses. Under the harsh tutelage of blind martial arts master Stick, Matt mastered his heightened senses and became a formidable fighter.',
      modified: '2020-03-04T16:09:36-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/50/50febb79985ee',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009262',
      comics: {
        available: 1195,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009262/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/29317',
            name: 'ACTS OF VENGEANCE CROSSOVERS OMNIBUS (Hardcover)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/29318',
            name: 'ACTS OF VENGEANCE CROSSOVERS OMNIBUS (DM Only) (Hardcover)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37257',
            name: 'Alias (2001) #10',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37255',
            name: 'Alias Omnibus (Hardcover)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12637',
            name: 'Alpha Flight (1983) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12668',
            name: 'Alpha Flight (1983) #127',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37894',
            name: 'Amazing Spider-Man (1999) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/6549',
            name: 'The Amazing Spider-Man (1963) #16',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/6811',
            name: 'The Amazing Spider-Man (1963) #396',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5808',
            name: 'Amazing Spider-Man (1999) #538',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21504',
            name: 'Amazing Spider-Man (1999) #566',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21702',
            name: 'Amazing Spider-Man (1999) #567',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/23567',
            name: 'Amazing Spider-Man (1999) #587',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/24407',
            name: 'Amazing Spider-Man (1999) #600',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/29303',
            name: 'Amazing Spider-Man (1999) #600 (2ND PRINTING VARIANT)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/35491',
            name: 'Amazing Spider-Man (1999) #677',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/16904',
            name: 'Amazing Spider-Man Annual (1964) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/16889',
            name: 'Amazing Spider-Man Annual (1964) #15',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/23069',
            name: 'Amazing Spider-Man: Extra! (2008) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/24201',
            name: 'Astonishing Tales (2009) #4',
          },
        ],
        returned: 20,
      },
      series: {
        available: 297,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009262/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9994',
            name: 'ACTS OF VENGEANCE CROSSOVERS OMNIBUS (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9995',
            name: 'ACTS OF VENGEANCE CROSSOVERS OMNIBUS (DM Only) (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/672',
            name: 'Alias (2001 - 2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13383',
            name: 'Alias Omnibus (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/454',
            name: 'Amazing Spider-Man (1999 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2984',
            name: 'Amazing Spider-Man Annual (1964 - 2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/6604',
            name: 'Amazing Spider-Man: Extra! (2008 - 2009)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/6792',
            name: 'Astonishing Tales (2009)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
            name: 'Avengers (1963 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
            name: 'Avengers (1998 - 2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1988',
            name: 'Avengers Annual (1967 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1340',
            name: 'Avengers Assemble (2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1496',
            name: 'Avengers Assemble Vol. 2 (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1816',
            name: 'Avengers Assemble Vol. 4 (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/16230',
            name: 'Avengers Vs. X-Men: Versus (2011 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/14246',
            name: 'Avenging Spider-Man (2011 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1503',
            name: 'Best of the Fantastic Four Vol. 1 (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/15691',
            name: 'Black Panther: The Man Without Fear (2010 - 2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23808',
            name: 'Black Panther: The Man Without Fear - The Complete Collection (2017)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 1898,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009262/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/533',
            name: 'Interior #533',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/534',
            name: 'Interior #534',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/535',
            name: 'Interior #535',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/537',
            name: 'Interior #537',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/538',
            name: 'Interior #538',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/539',
            name: 'Interior #539',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/547',
            name: 'Interior #547',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1044',
            name: '2 of 4 - Golden Age',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1045',
            name: '2 of 4 - Golden Age',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1056',
            name: 'Cover #1056',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1057',
            name: 'Interior #1057',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1058',
            name: 'Cover #1058',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1059',
            name: 'Interior #1059',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1060',
            name: 'Cover #1060',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1061',
            name: 'Interior #1061',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1062',
            name: 'Cover #1062',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1063',
            name: 'Interior #1063',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1064',
            name: 'Cover #1064',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1065',
            name: 'Interior #1065',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1066',
            name: 'Cover #1066',
            type: 'cover',
          },
        ],
        returned: 20,
      },
      events: {
        available: 17,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009262/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/238',
            name: 'Civil War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
            name: 'Dark Reign',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/248',
            name: 'Fall of the Mutants',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/252',
            name: 'Inferno',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/311',
            name: 'Marvel NOW!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/37',
            name: 'Maximum Security',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/263',
            name: 'Mutant Massacre',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/266',
            name: 'Other - Evolve or Die',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/336',
            name: 'Secret Empire',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
            name: 'Secret Invasion',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/270',
            name: 'Secret Wars',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/271',
            name: 'Secret Wars II',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/59',
            name: 'Shadowland',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/273',
            name: 'Siege',
          },
        ],
        returned: 17,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/11/daredevil?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Daredevil_(Matthew_Murdock)?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009262/daredevil?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009269,
      name: 'Death',
      description: '',
      modified: '2013-10-17T14:52:53-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/80/526031f5a21eb',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009269',
      comics: {
        available: 28,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009269/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/371',
            name: 'Captain Marvel (2000) #18',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8136',
            name: 'Daredevil (1964) #156',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8488',
            name: 'Deadpool (1997) #33',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8489',
            name: 'Deadpool (1997) #34',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8490',
            name: 'Deadpool (1997) #35',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8491',
            name: 'Deadpool (1997) #36',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8492',
            name: 'Deadpool (1997) #37',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/40209',
            name: 'Deadpool (2008) #50',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8519',
            name: 'Deadpool (1997) #61',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20181',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #21',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20207',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #45',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/13069',
            name: 'Fantastic Four (1961) #257',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1497',
            name: 'Fantastic Four Visionaries: John Byrne Vol. 3 (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/64604',
            name: 'Guardians of the Galaxy: Telltale Games (2017) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/9286',
            name: 'Infinity Gauntlet (1991) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/9287',
            name: 'Infinity Gauntlet (1991) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/9288',
            name: 'Infinity Gauntlet (1991) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/10379',
            name: 'New Mutants (1983) #41',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37592',
            name: 'New Mutants Classic Vol. 6 (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17092',
            name: 'Sub-Mariner (1968) #37',
          },
        ],
        returned: 20,
      },
      series: {
        available: 18,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009269/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/690',
            name: 'Captain Marvel (2000 - 2002)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2002',
            name: 'Daredevil (1964 - 1998)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/5701',
            name: 'Deadpool (2008 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2005',
            name: 'Deadpool (1997 - 2002)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3741',
            name: 'Doctor Strange, Sorcerer Supreme (1988 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2121',
            name: 'Fantastic Four (1961 - 1998)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1424',
            name: 'Fantastic Four Visionaries: John Byrne Vol. 3 (2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23268',
            name: 'Guardians of the Galaxy: Telltale Games (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2023',
            name: 'Infinity Gauntlet (1991)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2055',
            name: 'New Mutants (1983 - 1991)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13519',
            name: 'New Mutants Classic Vol. 6 (2010 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2989',
            name: 'Sub-Mariner (1968 - 1974)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22653',
            name: 'Thanos (2016 - 2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/17661',
            name: 'Thanos Rising (2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3667',
            name: 'Thing (1983 - 1986)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24191',
            name: 'True Believers: Rebirth of Thanos (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3640',
            name: 'X-Men Chronicles (1995)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1452',
            name: 'X-Men: The Complete Age of Apocalypse Epic Book 1 (2005)',
          },
        ],
        returned: 18,
      },
      stories: {
        available: 30,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009269/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2456',
            name: 'Cover #2456',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/12780',
            name: 'Fantastic Four (1961) #257',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/12781',
            name: 'Fragments',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/15838',
            name: 'Ring of Death!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21460',
            name: 'Way of the Warrior',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/23950',
            name: 'Cover #23950',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/23952',
            name: 'Cover #23952',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/23954',
            name: 'Cover #23954',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/24587',
            name: 'Deadpool (1997) #33',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/24590',
            name: 'Deadpool (1997) #34',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/24593',
            name: 'Deadpool (1997) #35',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/24595',
            name: 'Deadpool (1997) #36',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/24598',
            name: 'Deadpool (1997) #37',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/35966',
            name: 'Cover #35966',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/38623',
            name: 'X-MEN CHRONICLES (1995) #1',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/38624',
            name: 'Origins',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/40074',
            name: 'THING (1983) #19',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43234',
            name: 'TBOTV: Legends and Lore of the Dark Dimension, Part 1',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43293',
            name: "Death's Greatest Hits",
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/83111',
            name: 'Interior #83111',
            type: 'interiorStory',
          },
        ],
        returned: 20,
      },
      events: {
        available: 2,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009269/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/227',
            name: 'Age of Apocalypse',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
        ],
        returned: 2,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/521/death?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Death_(embodiment)?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009269/death?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009274,
      name: 'Diamondback (Rachel Leighton)',
      description: '',
      modified: '2013-10-24T13:17:17-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/f0/526955c158ece',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009274',
      comics: {
        available: 54,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009274/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37277',
            name: 'Alias (2001) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37255',
            name: 'Alias Omnibus (Hardcover)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5368',
            name: 'Avengers: Galactic Storm Vol. 2 (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/3631',
            name: 'Avengers: Galactic Storm Vol.1 (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/24573',
            name: 'Avengers: The Initiative (2007) #25',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/27546',
            name: 'Avengers: The Initiative (2007) #29',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/27548',
            name: 'Avengers: The Initiative (2007) #31',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/33464',
            name: 'Avengers: The Initiative (2007) #31 (2ND PRINTING VARIANT)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/27549',
            name: 'Avengers: The Initiative (2007) #32',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/31560',
            name: 'Avengers: The Initiative (2007) #33 (DEADPOOL VARIANT)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/29817',
            name: 'Avengers: The Initiative (2007) #34',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/29931',
            name: 'Avengers: The Initiative (2007) #35',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/40392',
            name: 'Captain America (2011) #17',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7738',
            name: 'Captain America (1968) #357',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7739',
            name: 'Captain America (1968) #358',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7740',
            name: 'Captain America (1968) #359',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7741',
            name: 'Captain America (1968) #360',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7742',
            name: 'Captain America (1968) #361',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7743',
            name: 'Captain America (1968) #362',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7750',
            name: 'Captain America (1968) #369',
          },
        ],
        returned: 20,
      },
      series: {
        available: 10,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009274/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/672',
            name: 'Alias (2001 - 2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13383',
            name: 'Alias Omnibus (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1679',
            name: 'Avengers: Galactic Storm Vol. 2 (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/359',
            name: 'Avengers: Galactic Storm Vol.1 (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1945',
            name: 'Avengers: The Initiative (2007 - 2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13830',
            name: 'Captain America (2011 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1996',
            name: 'Captain America (1968 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24137',
            name: 'Domino (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/26156',
            name: 'DOMINO ANNUAL 1 (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/27130',
            name: 'Domino: Hotshots (2019)',
          },
        ],
        returned: 10,
      },
      stories: {
        available: 61,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009274/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/17984',
            name: 'The Bloodstone Hunt  (Part 1)',
            type: '',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/17986',
            name: 'Captain America (1968) #358',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/17989',
            name: 'Captain America (1968) #359',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/17992',
            name: 'Captain America (1968) #360',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/17995',
            name: 'Captain America (1968) #361',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/17998',
            name: 'Captain America (1968) #362',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/18019',
            name: 'The Skeleton Crew',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/18025',
            name: 'Girl Talk',
            type: '',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/18049',
            name: 'The Warning',
            type: '',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/18068',
            name: 'Loose Ends',
            type: '',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/18071',
            name: 'Snake Heist',
            type: '',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/18092',
            name: 'The Crimson Crusade',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/18098',
            name: 'Trick Or Treat',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/18108',
            name: 'Cross To Bear',
            type: '',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/18112',
            name: 'Crossing Back',
            type: '',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/18118',
            name: 'The Pit and the Pitiful',
            type: '',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/18121',
            name: 'Taken To Task',
            type: '',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/18124',
            name: 'Real World',
            type: '',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/18127',
            name: 'Cross Country',
            type: '',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/18130',
            name: 'Fight On Skull Mountain',
            type: '',
          },
        ],
        returned: 20,
      },
      events: {
        available: 3,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009274/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
            name: 'Dark Reign',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/273',
            name: 'Siege',
          },
        ],
        returned: 3,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1009274/diamondback_rachel_leighton?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Diamondback_(Rachel_Leighton)?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009274/diamondback_rachel_leighton?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009282,
      name: 'Doctor Strange',
      description: '',
      modified: '2020-07-21T10:33:36-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/f0/5261a85a501fe',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009282',
      comics: {
        available: 869,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009282/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/43508',
            name: 'A+X (2012) #9',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/29317',
            name: 'ACTS OF VENGEANCE CROSSOVERS OMNIBUS (Hardcover)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/29318',
            name: 'ACTS OF VENGEANCE CROSSOVERS OMNIBUS (DM Only) (Hardcover)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/61524',
            name: 'All-New Guardians of the Galaxy (2017) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/56435',
            name: 'All-New Wolverine (2015) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12668',
            name: 'Alpha Flight (1983) #127',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/6745',
            name: 'The Amazing Spider-Man (1963) #336',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/277',
            name: 'Amazing Spider-Man (1999) #500',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/361',
            name: 'Amazing Spider-Man (1999) #504',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/30314',
            name: 'Amazing Spider-Man (1999) #639',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/34118',
            name: 'Amazing Spider-Man (1999) #640',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/35509',
            name: 'Amazing Spider-Man (1999) #673',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/16883',
            name: 'Amazing Spider-Man Annual (1964) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/16894',
            name: 'Amazing Spider-Man Annual (1964) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/16888',
            name: 'Amazing Spider-Man Annual (1964) #14',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1262',
            name: 'Amazing Spider-Man Vol. 6 (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/2970',
            name: 'AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1333',
            name: 'Amazing Spider-Man Vol. 7: The Book of Ezekiel (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/67002',
            name: 'Avengers (2018) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/67311',
            name: 'Avengers (2018) #2',
          },
        ],
        returned: 20,
      },
      series: {
        available: 289,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009282/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/16450',
            name: 'A+X (2012 - 2014)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9994',
            name: 'ACTS OF VENGEANCE CROSSOVERS OMNIBUS (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9995',
            name: 'ACTS OF VENGEANCE CROSSOVERS OMNIBUS (DM Only) (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23058',
            name: 'All-New Guardians of the Galaxy (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/20682',
            name: 'All-New Wolverine (2015 - 2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/454',
            name: 'Amazing Spider-Man (1999 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2984',
            name: 'Amazing Spider-Man Annual (1964 - 2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/318',
            name: 'Amazing Spider-Man Vol. 6 (2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1292',
            name: 'AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1291',
            name: 'Amazing Spider-Man Vol. 7: The Book of Ezekiel (2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24229',
            name: 'Avengers (2018 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
            name: 'Avengers (1963 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9085',
            name: 'Avengers (2010 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9086',
            name: 'Avengers Academy (2010 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1988',
            name: 'Avengers Annual (1967 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13320',
            name: 'Avengers Annual (2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/94',
            name: 'Avengers Legends Vol. II: George Perez Book I (1999)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/15305',
            name: 'Avengers Vs. X-Men (2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4864',
            name: 'Avengers/Invaders (2008 - 2009)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 1101,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009282/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1018',
            name: 'Amazing Spider-Man (1999) #500',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1666',
            name: 'Interior #1666',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1838',
            name: 'Spectacular Spider-Man (2003) #21',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1839',
            name: '1 of 1 - Card Game',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2359',
            name: '1 of',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2361',
            name: '2 of - Fear',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3099',
            name: '1 of 5',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3463',
            name: '3 of 3 - Sentry',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3469',
            name: '4 of 4 - Sentry',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3500',
            name: 'New Avengers (2004) #26',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3846',
            name: '5 of 5 - Bride of the Panther',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3848',
            name: 'Cover #3848',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3954',
            name: '4 of 6 - 6XLS',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3956',
            name: '5 of 6 - 6XLS',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4107',
            name: '1 of 1 - Fantastic Four & Dr. Strange',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4123',
            name: '5 of 6 - Master of the Ring',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4656',
            name: 'Friendly Neighborhood Spider-Man (2005) #2',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4657',
            name: '2 of 6',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5564',
            name: '1 of 2 -',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5688',
            name: '1 of 5 - A Long Time Dead',
            type: 'cover',
          },
        ],
        returned: 20,
      },
      events: {
        available: 22,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009282/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/310',
            name: 'Avengers VS X-Men',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/235',
            name: 'Blood and Thunder',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
            name: 'Chaos War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/238',
            name: 'Civil War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
            name: 'Dark Reign',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/315',
            name: 'Infinity',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/317',
            name: 'Inhumanity',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/255',
            name: 'Initiative',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/311',
            name: 'Marvel NOW!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/37',
            name: 'Maximum Security',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/154',
            name: 'Onslaught',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/319',
            name: 'Original Sin',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/266',
            name: 'Other - Evolve or Die',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/336',
            name: 'Secret Empire',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/270',
            name: 'Secret Wars',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/271',
            name: 'Secret Wars II',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/309',
            name: 'Shattered Heroes',
          },
        ],
        returned: 20,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/14/doctor_strange?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Doctor_Strange_(Stephen_Strange)?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009282/doctor_strange?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009297,
      name: 'Falcon',
      description:
        'With a mental connection to all birds and a suit that gives him wings to fly, The Falcon has been both the partner to Captain America and an Avenger himself. Whether as a super hero or in his secret identity of social worker Sam Wilson, The Falcon dedicates his life to standing up for others.',
      modified: '2016-06-02T12:31:51-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/b0/5111505fb7009',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009297',
      comics: {
        available: 194,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009297/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/16889',
            name: 'Amazing Spider-Man Annual (1964) #15',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17490',
            name: 'Avengers (1998) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17501',
            name: 'Avengers (1998) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17512',
            name: 'Avengers (1998) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17523',
            name: 'Avengers (1998) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17509',
            name: 'Avengers (1998) #27',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17542',
            name: 'Avengers (1998) #57',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17543',
            name: 'Avengers (1998) #58',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17544',
            name: 'Avengers (1998) #59',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17546',
            name: 'Avengers (1998) #60',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17547',
            name: 'Avengers (1998) #61',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17549',
            name: 'Avengers (1998) #63',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17550',
            name: 'Avengers (1998) #64',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17554',
            name: 'Avengers (1998) #68',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17555',
            name: 'Avengers (1998) #69',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7341',
            name: 'Avengers (1963) #88',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7004',
            name: 'Avengers (1963) #146',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7189',
            name: 'Avengers (1963) #312',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1311',
            name: 'Avengers Assemble (Hardcover)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4461',
            name: 'Avengers Assemble Vol. 3 (Hardcover)',
          },
        ],
        returned: 20,
      },
      series: {
        available: 71,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009297/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2984',
            name: 'Amazing Spider-Man Annual (1964 - 2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
            name: 'Avengers (1963 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
            name: 'Avengers (1998 - 2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1340',
            name: 'Avengers Assemble (2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1737',
            name: 'Avengers Assemble Vol. 3 (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2384',
            name: 'Avengers Classic (2007 - 2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/158',
            name: 'Avengers Vol. 1: World Trust (2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/227',
            name: 'Avengers Vol. 2: Red Zone (2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/271',
            name: 'Avengers Vol. II: Red Zone (2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22229',
            name: 'Avengers VS (2016)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/25869',
            name: 'Avengers: Shards of Infinity (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/784',
            name: 'Black Panther (2005 - 2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1479',
            name: 'Black Panther: Bad Mutha (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2226',
            name: 'Black Panther: Civil War (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1996',
            name: 'Captain America (1968 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/832',
            name: 'Captain America (2004 - 2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1997',
            name: 'Captain America (1998 - 2002)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/16516',
            name: 'Captain America (2012 - 2014)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/716',
            name: 'Captain America & the Falcon (2004 - 2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1324',
            name: 'Captain America & the Falcon: Madbomb (2004)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 228,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009297/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2875',
            name: '2 of 5 - Brothers and Keepers',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3832',
            name: '2 of 4 - Bride Prelude',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3860',
            name: '2 of 3 - Civil War',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4253',
            name: '5 of 6 - Winter Soldier',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4254',
            name: '5 of 6 - Winter Soldier',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4256',
            name: '6 of 6 - Winter Soldier',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5872',
            name: '1 of 7 - 7XLS',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5874',
            name: 'Cover #5874',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5882',
            name: 'Cover #5882',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5894',
            name: '6 of 7 - 7XLS',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5896',
            name: 'Cover #5896',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/7702',
            name: '2 of 6 - Death of the Dream',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/7703',
            name: '2 of 6 - Death of the Dream',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/8178',
            name: '2 of 6 - Death of the Dream',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/8889',
            name: '[Extortion for a Bail-Out]',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/14546',
            name: 'The Assassin Never Fails!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/14918',
            name: 'AVENGERS (1963) #312',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/15245',
            name: 'The Summons of Psyklop',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/17488',
            name: 'CAPTAIN AMERICA (1968) #117',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/17490',
            name: 'CAPTAIN AMERICA (1968) #118',
            type: 'cover',
          },
        ],
        returned: 20,
      },
      events: {
        available: 7,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009297/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/320',
            name: 'Axis',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/238',
            name: 'Civil War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/255',
            name: 'Initiative',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/154',
            name: 'Onslaught',
          },
        ],
        returned: 7,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1009297/falcon?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Falcon_(Sam_Wilson)?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009297/falcon?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009299,
      name: 'Fantastic Four',
      description:
        "After being exposed to cosmic rays, Reed Richards, Susan Storm, Ben Grimm and Johnny Storm found they had amazing new powers. Reed Richards found he has the ability to stretch his body in any way he wanted, while Susan Storm can turn herself, objects and other people invisible. Ben Grimm transformed into a rocky, super-strong behemoth and Johnny Storm has the ability to set himself on fire. Dubbed the Fantastic Four, Mr. Fantastic, Invisible Woman, Thing and the Human Torch are Marvel's First Family.",
      modified: '2016-05-05T14:38:42-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/60/50febc4f55525',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009299',
      comics: {
        available: 1456,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009299/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/356',
            name: '4 (2004) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/388',
            name: '4 (2004) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/404',
            name: '4 (2004) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/471',
            name: '4 (2004) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/498',
            name: '4 (2004) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/682',
            name: '4 (2004) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1812',
            name: '4 (2004) #7',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/571',
            name: '4 (2004) #8',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/556',
            name: '4 (2004) #9',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/811',
            name: '4 (2004) #10',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/892',
            name: '4 (2004) #11',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/52',
            name: '4 (2004) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1496',
            name: '4 (2004) #13',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1584',
            name: '4 (2004) #14',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1670',
            name: '4 (2004) #15',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1771',
            name: '4 (2004) #16',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1875',
            name: '4 (2004) #17',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1977',
            name: '4 (2004) #18',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/2120',
            name: '4 (2004) #19',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/2230',
            name: '4 (2004) #20',
          },
        ],
        returned: 20,
      },
      series: {
        available: 396,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009299/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/725',
            name: '4 (2004 - 2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1251',
            name: '4 Vol. 1: Wolf at the Door (2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1253',
            name: '4 Vol. 2: The Stuff of Nightmares (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1423',
            name: '4 Vol. 3: Divine Time (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9994',
            name: 'ACTS OF VENGEANCE CROSSOVERS OMNIBUS (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9995',
            name: 'ACTS OF VENGEANCE CROSSOVERS OMNIBUS (DM Only) (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/6079',
            name: 'Adam: Legend of the Blue Marvel (2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/672',
            name: 'Alias (2001 - 2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13383',
            name: 'Alias Omnibus (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/719',
            name: 'Alpha Flight (2004 - 2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/6666',
            name: 'Amazing Adventures (1970 - 1976)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/454',
            name: 'Amazing Spider-Man (1999 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2984',
            name: 'Amazing Spider-Man Annual (1964 - 2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/27985',
            name: 'Annihilation - Scourge: Fantastic Four (2019)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/6056',
            name: 'ANNIHILATION CLASSIC HC (2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/28069',
            name: 'Annihilation: Scourge (2020)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/744',
            name: 'Astonishing X-Men (2004 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/10030',
            name: 'Atlantis Attacks (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/10031',
            name: 'Atlantis Attacks (DM Only) (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3621',
            name: 'Avengers (1996 - 1997)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 2319,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009299/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/513',
            name: 'Interior #513',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/535',
            name: 'Interior #535',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/563',
            name: 'Interior #563',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/592',
            name: 'Interior #592',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/798',
            name: 'Fantastic Four (1998) #507',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/799',
            name: 'Interior #799',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/800',
            name: 'Fantastic Four (1998) #508',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/801',
            name: 'Interior #801',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/802',
            name: 'Fantastic Four (1998) #509',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/803',
            name: 'Interior #803',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/898',
            name: 'Fantastic Four (1998) #520',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/899',
            name: '1 of 5 - Galactus',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/912',
            name: 'Fantastic Four (1998) #512',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/913',
            name: 'Interior #913',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/914',
            name: 'Fantastic Four (1998) #516',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/915',
            name: 'Interior #915',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/916',
            name: 'Fantastic Four (1998) #513',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/917',
            name: 'Interior #917',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/918',
            name: 'Fantastic Four (1998) #514',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/919',
            name: 'Interior #919',
            type: 'interiorStory',
          },
        ],
        returned: 20,
      },
      events: {
        available: 24,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009299/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/233',
            name: 'Atlantis Attacks',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/234',
            name: 'Avengers Disassembled',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
            name: 'Chaos War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/238',
            name: 'Civil War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
            name: 'Dark Reign',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/240',
            name: 'Days of Future Present',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/246',
            name: 'Evolutionary War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/248',
            name: 'Fall of the Mutants',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/287',
            name: 'Heroic Age',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/251',
            name: 'House of M',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/252',
            name: 'Inferno',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/255',
            name: 'Initiative',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/154',
            name: 'Onslaught',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/319',
            name: 'Original Sin',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
            name: 'Secret Invasion',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/270',
            name: 'Secret Wars',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/323',
            name: 'Secret Wars (2015)',
          },
        ],
        returned: 20,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1009299/fantastic_four?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Fantastic_Four?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009299/fantastic_four?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009312,
      name: 'Galactus',
      description: '',
      modified: '2014-09-30T16:47:03-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/03/528d31a791308',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009312',
      comics: {
        available: 235,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009312/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12638',
            name: 'Alpha Flight (1983) #10',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12639',
            name: 'Alpha Flight (1983) #100',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4788',
            name: 'Annihilation (2006) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5655',
            name: 'Annihilation (2006) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5795',
            name: 'Annihilation (2006) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5976',
            name: 'Annihilation: Heralds of Galactus (2007) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/6175',
            name: 'Annihilation: Heralds of Galactus (2007) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4218',
            name: 'Annihilation: Silver Surfer (2006) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4315',
            name: 'Annihilation: Silver Surfer (2006) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4470',
            name: 'Annihilation: Silver Surfer (2006) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/66602',
            name: 'Annihilation: The Complete Collection Vol. 1 (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/29207',
            name: 'Avengers (2010) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/34139',
            name: 'Avengers (2010) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17754',
            name: 'Avengers (1996) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7131',
            name: 'Avengers (1963) #260',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7132',
            name: 'Avengers (1963) #261',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12402',
            name: 'Avengers Forever (1998) #10',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1033',
            name: 'Avengers Legends Vol. I: Avengers Forever (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/15895',
            name: 'Bullet Points (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5500',
            name: 'Bullet Points (2006) #1',
          },
        ],
        returned: 20,
      },
      series: {
        available: 110,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009312/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3613',
            name: 'Annihilation (2006 - 2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1864',
            name: 'Annihilation: Heralds of Galactus (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1078',
            name: 'Annihilation: Silver Surfer (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24256',
            name: 'Annihilation: The Complete Collection Vol. 1 (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
            name: 'Avengers (1963 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3621',
            name: 'Avengers (1996 - 1997)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9085',
            name: 'Avengers (2010 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2111',
            name: 'Avengers Forever (1998 - 1999)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/93',
            name: 'Avengers Legends Vol. I: Avengers Forever (2002)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2424',
            name: 'Bullet Points (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/994',
            name: 'Bullet Points (2006 - 2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/21004',
            name: 'Damage Control (1991)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2002',
            name: 'Daredevil (1964 - 1998)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/7696',
            name: 'Dark Reign: Zodiac (2009)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9045',
            name: 'Deadpool Team-Up (2009 - 2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/11518',
            name: 'Deadpool Team-Up (2010 - 2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/12988',
            name: 'Deadpool Team-Up Vol. 3 (2010 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24296',
            name: 'Doctor Strange (2018 - 2019)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3741',
            name: 'Doctor Strange, Sorcerer Supreme (1988 - 1996)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 257,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009312/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/694',
            name: 'Cover #694',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/898',
            name: 'Fantastic Four (1998) #520',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/899',
            name: '1 of 5 - Galactus',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/922',
            name: 'Fantastic Four (1998) #518',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/923',
            name: 'AVENGERS DISASSEMBLED TIE-IN! "FOURTITUDE" PART 2 (OF 3) With public opinion of the FF at an all-time low and with all of Manhat',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/924',
            name: 'Fantastic Four (1998) #519',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/925',
            name: 'AVENGERS DISASSEMBLED TIE-IN! "FOURTITUDE" FINALE! PART 3 (OF 3) Galactus the World-Eater is coming to Earth to choose one of th',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1412',
            name: 'Cover #1412',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1842',
            name: 'Cover #1842',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2253',
            name: 'Cover #2253',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2442',
            name: 'Cover #2442',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2446',
            name: 'Cover #2446',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5286',
            name: '1 of 1 - Thor',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5590',
            name: '1 of 5 XLS',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5592',
            name: '2 of 5 XLS',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5594',
            name: '3 of 5 XLS',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5596',
            name: '4 of 5 XLS',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5598',
            name: '5 of 5 XLS',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5612',
            name: '1 of 5 -',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5614',
            name: 'Bullet Points (2006) #2',
            type: 'cover',
          },
        ],
        returned: 20,
      },
      events: {
        available: 9,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009312/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/229',
            name: 'Annihilation',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/234',
            name: 'Avengers Disassembled',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
            name: 'Dark Reign',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/255',
            name: 'Initiative',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/336',
            name: 'Secret Empire',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/270',
            name: 'Secret Wars',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/271',
            name: 'Secret Wars II',
          },
        ],
        returned: 9,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1009312/galactus?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Galactus?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009312/galactus?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009330,
      name: 'Guardian',
      description: '',
      modified: '2011-05-19T11:07:05-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/50/4dd531d26079c',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009330',
      comics: {
        available: 36,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009330/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12690',
            name: 'Alpha Flight (1983) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12660',
            name: 'Alpha Flight (1983) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12715',
            name: 'Alpha Flight (1983) #52',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12757',
            name: 'Alpha Flight (1983) #90',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12653',
            name: 'Alpha Flight (1983) #113',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12672',
            name: 'Alpha Flight (1983) #130',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/6814',
            name: 'The Amazing Spider-Man (1963) #399',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12611',
            name: 'Black Panther (1998) #42',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12612',
            name: 'Black Panther (1998) #43',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12613',
            name: 'Black Panther (1998) #44',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37067',
            name: 'Chaos War: Alpha Flight (2010) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8549',
            name: 'Earth X (1999) #10',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4241',
            name: 'EARTH X TPB [NEW PRINTING] (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/13324',
            name: 'Fantastic Four (1996) #9',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/13180',
            name: 'Fantastic Four (1961) #357',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5280',
            name: 'Heroes Reborn: Fantastic Four (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/40632',
            name: 'Hulk (2008) #53',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/40630',
            name: 'Hulk (2008) #54',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/40626',
            name: 'Hulk (2008) #56',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/40622',
            name: 'Hulk (2008) #57',
          },
        ],
        returned: 20,
      },
      series: {
        available: 19,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009330/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2115',
            name: 'Black Panther (1998 - 2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13260',
            name: 'Chaos War: Alpha Flight (2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/378',
            name: 'Earth X (1999 - 2000)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1806',
            name: 'EARTH X TPB [NEW PRINTING] (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2123',
            name: 'Fantastic Four (1996 - 1997)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2121',
            name: 'Fantastic Four (1961 - 1998)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1812',
            name: 'Heroes Reborn: Fantastic Four (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3374',
            name: 'Hulk (2008 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2021',
            name: 'Incredible Hulk (1962 - 1999)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3289',
            name: 'Infinity War (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2059',
            name: 'Paradise X (2002 - 2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2431',
            name: 'Paradise X Vol. 1 (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2702',
            name: 'PARADISE X VOL. 2 TPB [NEW PRINTING] (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1987',
            name: 'The Amazing Spider-Man (1963 - 1998)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2258',
            name: 'Uncanny X-Men (1963 - 2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3654',
            name: 'Warlock and the Infinity Watch (1992 - 1995)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2262',
            name: 'Wolverine (1988 - 2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3637',
            name: 'X-Men Unlimited (1993 - 2003)',
          },
        ],
        returned: 19,
      },
      stories: {
        available: 39,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009330/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13019',
            name: 'The Monster Among Us!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/18935',
            name: 'Incredible Hulk (1962) #393',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/18936',
            name: 'The Closing Circle',
            type: '',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21131',
            name: 'Guardian Battles Alone!',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21145',
            name: 'And One Shall Surely Die !',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21173',
            name: 'No Future Part 3',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21215',
            name: 'Guardian: First of Alpha Flight',
            type: 'pinup',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21265',
            name: 'Flashback !',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21266',
            name: 'Specters',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21356',
            name: 'Cover #21356',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/24908',
            name: 'Earth X Chapter Ten',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/25085',
            name: 'Alliance',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/25087',
            name: 'The Kiber Chronicles',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/25089',
            name: '60 Minutes',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/25907',
            name: '[ALPHA FLIGHT #1 Preview]',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/26017',
            name: 'Cover #26017',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/26026',
            name: 'Paradise X Issue 2',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/26029',
            name: 'Cover #26029',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/26030',
            name: 'Paradise X Chapter 4',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/26034',
            name: 'Paradise X Issue 6',
            type: 'interiorStory',
          },
        ],
        returned: 20,
      },
      events: {
        available: 2,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009330/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
            name: 'Chaos War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
        ],
        returned: 2,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/868/guardian?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Guardian_%28James_Hudson%29?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009330/guardian?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009337,
      name: 'Havok',
      description: '',
      modified: '2013-10-23T12:39:26-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/e0/5261659ebeaf8',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009337',
      comics: {
        available: 348,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009337/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17701',
            name: 'Age of Apocalypse: The Chosen (1995) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12725',
            name: 'Alpha Flight (1983) #61',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/67716',
            name: 'Astonishing X-Men (2017) #13',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/67717',
            name: 'Astonishing X-Men (2017) #14',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/67718',
            name: 'Astonishing X-Men (2017) #15',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/67719',
            name: 'Astonishing X-Men (2017) #16',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/67720',
            name: 'Astonishing X-Men (2017) #17',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/45939',
            name: 'Cable and X-Force (2012) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/45951',
            name: 'Cable and X-Force (2012) #9',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/45952',
            name: 'Cable and X-Force (2012) #10',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20731',
            name: 'CLANDESTINE CLASSIC PREMIERE HC (Hardcover)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20603',
            name: 'Classic X-Men (1986) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20566',
            name: 'Classic X-Men (1986) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20567',
            name: 'Classic X-Men (1986) #13',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20589',
            name: 'Classic X-Men (1986) #33',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4072',
            name: 'Decimation: X-Men the Day After (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20374',
            name: 'Defenders (1972) #63',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8555',
            name: 'Earth X (1999) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8556',
            name: 'Earth X (1999) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4241',
            name: 'EARTH X TPB [NEW PRINTING] (Trade Paperback)',
          },
        ],
        returned: 20,
      },
      series: {
        available: 96,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009337/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3614',
            name: 'Age of Apocalypse: The Chosen (1995)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23262',
            name: 'Astonishing X-Men (2017 - 2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/16907',
            name: 'Cable and X-Force (2012 - 2014)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3874',
            name: 'CLANDESTINE CLASSIC PREMIERE HC (2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3751',
            name: 'Classic X-Men (1986 - 1990)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/18864',
            name: 'Cyclops (2014 - 2015)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1643',
            name: 'Decimation: X-Men the Day After (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3743',
            name: 'Defenders (1972 - 1986)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/378',
            name: 'Earth X (1999 - 2000)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1806',
            name: 'EARTH X TPB [NEW PRINTING] (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/16287',
            name: 'Gambit (2012 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/27271',
            name: 'Havok & Wolverine: Meltdown (2019)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/30175',
            name: 'Hellions (2020 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2021',
            name: 'Incredible Hulk (1962 - 1999)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3289',
            name: 'Infinity War (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2039',
            name: 'Marvel Comics Presents (1988 - 1995)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1440',
            name: 'MARVEL MASTERWORKS: THE UNCANNY X-MEN VOL. 2 HC (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3460',
            name: 'MARVEL MASTERWORKS: THE UNCANNY X-MEN VOL. 6 HC (2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1689',
            name: 'Marvel Masterworks: The X-Men Vol.6 (2006)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 394,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009337/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/594',
            name: 'X-MEN (2004) #164',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/624',
            name: 'X-MEN (2004) #162',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/630',
            name: 'X-MEN (2004) #166',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/632',
            name: 'X-MEN (2004) #167',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/634',
            name: 'X-MEN (2004) #168',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/638',
            name: 'X-MEN (2004) #170',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/640',
            name: '1 of 4 - Bizarre Love Triangle',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/648',
            name: '1 of 2- Black Panther crossover',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/660',
            name: 'X-MEN (2004) #181',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/666',
            name: 'X-MEN (2004) #184',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/668',
            name: 'X-MEN (2004) #185',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/670',
            name: 'X-MEN (2004) #186',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/672',
            name: 'X-MEN (2004) #187',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/680',
            name: '4 of 6 - Supernovas',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/776',
            name: 'UNCANNY X-MEN (1963) #475',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/778',
            name: 'UNCANNY X-MEN (1963) #476',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/781',
            name: 'UNCANNY X-MEN (1963) #478',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/789',
            name: 'UNCANNY X-MEN (1963) #482',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1745',
            name: 'UNCANNY X-MEN (1963) #433',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1888',
            name: 'New Mutants (2003) #9',
            type: 'cover',
          },
        ],
        returned: 20,
      },
      events: {
        available: 14,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009337/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/227',
            name: 'Age of Apocalypse',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/303',
            name: 'Age of X',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/233',
            name: 'Atlantis Attacks',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/240',
            name: 'Days of Future Present',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/246',
            name: 'Evolutionary War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/248',
            name: 'Fall of the Mutants',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/249',
            name: 'Fatal Attractions',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/252',
            name: 'Inferno',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/299',
            name: 'Messiah CompleX',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/154',
            name: 'Onslaught',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/276',
            name: 'War of Kings',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/280',
            name: 'X-Tinction Agenda',
          },
        ],
        returned: 14,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1009337/havok?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Havok?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009337/havok?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009343,
      name: 'Hercules',
      description: '',
      modified: '2013-11-14T14:47:08-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/d0/52052ebddfa53',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009343',
      comics: {
        available: 305,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009343/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12650',
            name: 'Alpha Flight (1983) #110',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/29277',
            name: 'Assault on New Olympus Prologue One-Shot (2009) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/45821',
            name: 'Astonishing X-Men (2004) #60',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/61373',
            name: 'Avengers (2016) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17490',
            name: 'Avengers (1998) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17501',
            name: 'Avengers (1998) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17512',
            name: 'Avengers (1998) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17523',
            name: 'Avengers (1998) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/61380',
            name: 'Avengers (2016) #8',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/6953',
            name: 'Avengers (1963) #10',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/61383',
            name: 'Avengers (2016) #11',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17507',
            name: 'Avengers (1998) #25',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17509',
            name: 'Avengers (1998) #27',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7263',
            name: 'Avengers (1963) #38',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7274',
            name: 'Avengers (1963) #39',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7286',
            name: 'Avengers (1963) #40',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7291',
            name: 'Avengers (1963) #42',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7292',
            name: 'Avengers (1963) #43',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17528',
            name: 'Avengers (1998) #44',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7293',
            name: 'Avengers (1963) #44',
          },
        ],
        returned: 20,
      },
      series: {
        available: 110,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009343/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9087',
            name: 'Assault on New Olympus Prologue One-Shot (2009)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/744',
            name: 'Astonishing X-Men (2004 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
            name: 'Avengers (1998 - 2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22547',
            name: 'Avengers (2016 - 2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
            name: 'Avengers (1963 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9086',
            name: 'Avengers Academy (2010 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1988',
            name: 'Avengers Annual (1967 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1340',
            name: 'Avengers Assemble (2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1737',
            name: 'Avengers Assemble Vol. 3 (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1816',
            name: 'Avengers Assemble Vol. 4 (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2111',
            name: 'Avengers Forever (1998 - 1999)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/157',
            name: 'Avengers Legends Vol. 2: The Korvac Saga (2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/93',
            name: 'Avengers Legends Vol. I: Avengers Forever (2002)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/26034',
            name: 'Avengers No Road Home (2019)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/158',
            name: 'Avengers Vol. 1: World Trust (2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13411',
            name: 'Avengers: Citizen Kang (2010 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/6473',
            name: 'AVENGERS: FIRST TO LAST PREMIERE HC (2008 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/6476',
            name: 'AVENGERS: FIRST TO LAST PREMIERE HC [DM ONLY] (2008 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1679',
            name: 'Avengers: Galactic Storm Vol. 2 (2006)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 348,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009343/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4185',
            name: '2 of 4 - 4XLS',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4620',
            name: '1 of 5 LXS',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4622',
            name: '2 of 5 LXS',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4624',
            name: '3 of 5 LXS',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4626',
            name: '4 of 5 LXS',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4628',
            name: '5 of 5 LXS',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/11034',
            name: 'Journey Into Mystery (1952) #124',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/11035',
            name: 'The Grandeur and the Glory',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/11037',
            name: 'Journey Into Mystery (1952) #125',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/11038',
            name: 'When Meet the Immortals',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/12847',
            name: 'Like a Phoenx!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/12957',
            name: 'Fantastic Four (1961) #333',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/12958',
            name: 'The Dream is Dead Part Two',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/14442',
            name: 'The Avengers Break Up!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/14445',
            name: 'AVENGERS (1963) #100',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/14557',
            name: 'AVENGERS (1963) #151',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/14584',
            name: 'AVENGERS (1963) #163',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/14606',
            name: 'AVENGERS (1963) #173',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/14775',
            name: 'Avengers (1963) #249',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/14805',
            name: 'Avengers (1963) #262',
            type: 'cover',
          },
        ],
        returned: 20,
      },
      events: {
        available: 12,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009343/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/310',
            name: 'Avengers VS X-Men',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
            name: 'Chaos War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
            name: 'Dark Reign',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/37',
            name: 'Maximum Security',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/336',
            name: 'Secret Empire',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
            name: 'Secret Invasion',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/271',
            name: 'Secret Wars II',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/273',
            name: 'Siege',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/305',
            name: 'Spider-Island',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/277',
            name: 'World War Hulk',
          },
        ],
        returned: 12,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/952/hercules?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Hercules_(Heracles)?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009343/hercules?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009351,
      name: 'Hulk',
      description:
        'Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.',
      modified: '2020-07-21T10:35:15-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009351',
      comics: {
        available: 1707,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009351/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/41112',
            name: '5 Ronin (Hardcover)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/36365',
            name: '5 Ronin (2010) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38753',
            name: '5 Ronin (2010) #2 (BROOKS COVER)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/43488',
            name: 'A+X (2012) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/43506',
            name: 'A+X (2012) #7',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/77060',
            name: 'Absolute Carnage: Immortal Hulk (2019) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/320',
            name: 'Actor Presents Spider-Man and the Incredible Hulk (2003) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38524',
            name: 'Age of X: Universe (2011) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38523',
            name: 'Age of X: Universe (2011) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/24053',
            name: 'All-New Savage She-Hulk (2009) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/24252',
            name: 'All-New Savage She-Hulk (2009) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12689',
            name: 'Alpha Flight (1983) #29',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12650',
            name: 'Alpha Flight (1983) #110',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12651',
            name: 'Alpha Flight (1983) #111',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12668',
            name: 'Alpha Flight (1983) #127',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/35528',
            name: 'Amazing Spider-Man (1999) #667',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/16904',
            name: 'Amazing Spider-Man Annual (1964) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/16886',
            name: 'Amazing Spider-Man Annual (1964) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/36956',
            name: 'Amazing Spider-Man Annual (2011) #38',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/67309',
            name: 'Ant-Man and the Wasp Adventures (Digest)',
          },
        ],
        returned: 20,
      },
      series: {
        available: 495,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009351/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/15276',
            name: '5 Ronin (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/12429',
            name: '5 Ronin (2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/16450',
            name: 'A+X (2012 - 2014)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/27632',
            name: 'Absolute Carnage: Immortal Hulk (2019)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/458',
            name: 'Actor Presents Spider-Man and the Incredible Hulk (2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13896',
            name: 'Age of X: Universe (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/7231',
            name: 'All-New Savage She-Hulk (2009)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/454',
            name: 'Amazing Spider-Man (1999 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2984',
            name: 'Amazing Spider-Man Annual (1964 - 2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13205',
            name: 'Amazing Spider-Man Annual (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24323',
            name: 'Ant-Man and the Wasp Adventures (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3621',
            name: 'Avengers (1996 - 1997)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22547',
            name: 'Avengers (2016 - 2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
            name: 'Avengers (1963 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9085',
            name: 'Avengers (2010 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
            name: 'Avengers (1998 - 2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24044',
            name: 'Avengers & The Infinity Gauntlet (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9859',
            name: 'Avengers & the Infinity Gauntlet (2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1988',
            name: 'Avengers Annual (1967 - 1994)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 2594,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009351/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/702',
            name: 'INCREDIBLE HULK (1999) #62',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/703',
            name: 'Interior #703',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/704',
            name: 'INCREDIBLE HULK (1999) #63',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/705',
            name: 'Interior #705',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/706',
            name: 'INCREDIBLE HULK (1999) #64',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/707',
            name: 'Interior #707',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/872',
            name: 'HULK: GRAY (2003) #2',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/873',
            name: 'Interior #873',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/874',
            name: 'HULK: GRAY (2003) #3',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/875',
            name: 'Interior #875',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1134',
            name: 'Interior #1134',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1217',
            name: 'INCREDIBLE HULK (1999) #68',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1218',
            name: 'Interior #1218',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1219',
            name: 'INCREDIBLE HULK (1999) #69',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1220',
            name: 'Interior #1220',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1221',
            name: 'INCREDIBLE HULK (1999) #70',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1222',
            name: 'Interior #1222',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1223',
            name: 'INCREDIBLE HULK (1999) #71',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1224',
            name: 'Interior #1224',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1225',
            name: 'INCREDIBLE HULK (1999) #75',
            type: 'cover',
          },
        ],
        returned: 20,
      },
      events: {
        available: 26,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009351/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/303',
            name: 'Age of X',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
            name: 'Chaos War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
            name: 'Dark Reign',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/297',
            name: 'Fall of the Hulks',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/248',
            name: 'Fall of the Mutants',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/251',
            name: 'House of M',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/315',
            name: 'Infinity',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/317',
            name: 'Inhumanity',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/255',
            name: 'Initiative',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/311',
            name: 'Marvel NOW!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/37',
            name: 'Maximum Security',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/154',
            name: 'Onslaught',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/319',
            name: 'Original Sin',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/266',
            name: 'Other - Evolve or Die',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/212',
            name: 'Planet Hulk',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/295',
            name: 'Realm of Kings',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
            name: 'Secret Invasion',
          },
        ],
        returned: 20,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1009351/hulk?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Hulk_(Bruce_Banner)?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009351/hulk?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009356,
      name: 'Human Torch',
      description: '',
      modified: '2013-10-18T17:31:30-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/70/5261a7f7b0917',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009356',
      comics: {
        available: 1177,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009356/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/388',
            name: '4 (2004) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/404',
            name: '4 (2004) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/471',
            name: '4 (2004) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/498',
            name: '4 (2004) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1812',
            name: '4 (2004) #7',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/571',
            name: '4 (2004) #8',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/556',
            name: '4 (2004) #9',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/811',
            name: '4 (2004) #10',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/892',
            name: '4 (2004) #11',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/52',
            name: '4 (2004) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/2230',
            name: '4 (2004) #20',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1328',
            name: '4 Vol. 1: Wolf at the Door (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1550',
            name: '4 Vol. 2: The Stuff of Nightmares (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/22856',
            name: 'Adam: Legend of the Blue Marvel (2008) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37262',
            name: 'Alias (2001) #15',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37255',
            name: 'Alias Omnibus (Hardcover)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12555',
            name: 'All-Winners Comics (1941) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12566',
            name: 'All-Winners Comics (1941) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12568',
            name: 'All-Winners Comics (1941) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12569',
            name: 'All-Winners Comics (1941) #4',
          },
        ],
        returned: 20,
      },
      series: {
        available: 279,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009356/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/725',
            name: '4 (2004 - 2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1251',
            name: '4 Vol. 1: Wolf at the Door (2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1253',
            name: '4 Vol. 2: The Stuff of Nightmares (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/6079',
            name: 'Adam: Legend of the Blue Marvel (2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/672',
            name: 'Alias (2001 - 2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13383',
            name: 'Alias Omnibus (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2114',
            name: 'All-Winners Comics (1941 - 1947)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9865',
            name: 'All-Winners Squad: Band of Heroes (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/454',
            name: 'Amazing Spider-Man (1999 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2984',
            name: 'Amazing Spider-Man Annual (1964 - 2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1967',
            name: 'AMAZING SPIDER-MAN OMNIBUS VOL. 1 HC (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/8890',
            name: 'Astonishing Tales: One Shots (The Thing) (2009)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3621',
            name: 'Avengers (1996 - 1997)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
            name: 'Avengers (1998 - 2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
            name: 'Avengers (1963 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1340',
            name: 'Avengers Assemble (2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1496',
            name: 'Avengers Assemble Vol. 2 (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1737',
            name: 'Avengers Assemble Vol. 3 (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1816',
            name: 'Avengers Assemble Vol. 4 (2007)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 1848,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009356/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/701',
            name: 'Interior #701',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/798',
            name: 'Fantastic Four (1998) #507',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/799',
            name: 'Interior #799',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/800',
            name: 'Fantastic Four (1998) #508',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/801',
            name: 'Interior #801',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/802',
            name: 'Fantastic Four (1998) #509',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/803',
            name: 'Interior #803',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/898',
            name: 'Fantastic Four (1998) #520',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/899',
            name: '1 of 5 - Galactus',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/912',
            name: 'Fantastic Four (1998) #512',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/913',
            name: 'Interior #913',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/914',
            name: 'Fantastic Four (1998) #516',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/915',
            name: 'Interior #915',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/916',
            name: 'Fantastic Four (1998) #513',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/917',
            name: 'Interior #917',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/918',
            name: 'Fantastic Four (1998) #514',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/919',
            name: 'Interior #919',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/920',
            name: 'Fantastic Four (1998) #517',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/921',
            name: 'Interior #921',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/922',
            name: 'Fantastic Four (1998) #518',
            type: 'cover',
          },
        ],
        returned: 20,
      },
      events: {
        available: 20,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009356/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/233',
            name: 'Atlantis Attacks',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/234',
            name: 'Avengers Disassembled',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
            name: 'Chaos War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/238',
            name: 'Civil War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
            name: 'Dark Reign',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/240',
            name: 'Days of Future Present',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/248',
            name: 'Fall of the Mutants',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/251',
            name: 'House of M',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/252',
            name: 'Inferno',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/255',
            name: 'Initiative',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/37',
            name: 'Maximum Security',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/154',
            name: 'Onslaught',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/336',
            name: 'Secret Empire',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
            name: 'Secret Invasion',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/270',
            name: 'Secret Wars',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/271',
            name: 'Secret Wars II',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/277',
            name: 'World War Hulk',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/60',
            name: 'World War Hulks',
          },
        ],
        returned: 20,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1009356/human_torch?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Human_Torch_%28Johnny_Storm%29?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009356/human_torch?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009366,
      name: 'Invisible Woman',
      description: '',
      modified: '2013-10-24T13:48:00-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/52695b9cd40b6',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009366',
      comics: {
        available: 730,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009366/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/356',
            name: '4 (2004) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/388',
            name: '4 (2004) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/404',
            name: '4 (2004) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/471',
            name: '4 (2004) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/498',
            name: '4 (2004) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/682',
            name: '4 (2004) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1812',
            name: '4 (2004) #7',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/571',
            name: '4 (2004) #8',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/556',
            name: '4 (2004) #9',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/811',
            name: '4 (2004) #10',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/892',
            name: '4 (2004) #11',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/52',
            name: '4 (2004) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/2120',
            name: '4 (2004) #19',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/2230',
            name: '4 (2004) #20',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1328',
            name: '4 Vol. 1: Wolf at the Door (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1550',
            name: '4 Vol. 2: The Stuff of Nightmares (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/22856',
            name: 'Adam: Legend of the Blue Marvel (2008) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38524',
            name: 'Age of X: Universe (2011) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38523',
            name: 'Age of X: Universe (2011) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12637',
            name: 'Alpha Flight (1983) #1',
          },
        ],
        returned: 20,
      },
      series: {
        available: 175,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009366/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/725',
            name: '4 (2004 - 2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1251',
            name: '4 Vol. 1: Wolf at the Door (2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1253',
            name: '4 Vol. 2: The Stuff of Nightmares (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/6079',
            name: 'Adam: Legend of the Blue Marvel (2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13896',
            name: 'Age of X: Universe (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/454',
            name: 'Amazing Spider-Man (1999 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/10030',
            name: 'Atlantis Attacks (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/10031',
            name: 'Atlantis Attacks (DM Only) (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
            name: 'Avengers (1963 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
            name: 'Avengers (1998 - 2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1340',
            name: 'Avengers Assemble (2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1496',
            name: 'Avengers Assemble Vol. 2 (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1816',
            name: 'Avengers Assemble Vol. 4 (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1503',
            name: 'Best of the Fantastic Four Vol. 1 (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/784',
            name: 'Black Panther (2005 - 2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2115',
            name: 'Black Panther (1998 - 2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2226',
            name: 'Black Panther: Civil War (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1995',
            name: 'Cable (1993 - 2002)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/693',
            name: 'Cable & Deadpool (2004 - 2008)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 959,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009366/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/798',
            name: 'Fantastic Four (1998) #507',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/799',
            name: 'Interior #799',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/800',
            name: 'Fantastic Four (1998) #508',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/801',
            name: 'Interior #801',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/802',
            name: 'Fantastic Four (1998) #509',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/803',
            name: 'Interior #803',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/898',
            name: 'Fantastic Four (1998) #520',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/899',
            name: '1 of 5 - Galactus',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/912',
            name: 'Fantastic Four (1998) #512',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/913',
            name: 'Interior #913',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/914',
            name: 'Fantastic Four (1998) #516',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/915',
            name: 'Interior #915',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/916',
            name: 'Fantastic Four (1998) #513',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/917',
            name: 'Interior #917',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/918',
            name: 'Fantastic Four (1998) #514',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/919',
            name: 'Interior #919',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/920',
            name: 'Fantastic Four (1998) #517',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/921',
            name: 'Interior #921',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/922',
            name: 'Fantastic Four (1998) #518',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/923',
            name: 'AVENGERS DISASSEMBLED TIE-IN! "FOURTITUDE" PART 2 (OF 3) With public opinion of the FF at an all-time low and with all of Manhat',
            type: 'interiorStory',
          },
        ],
        returned: 20,
      },
      events: {
        available: 20,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009366/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/303',
            name: 'Age of X',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/233',
            name: 'Atlantis Attacks',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/234',
            name: 'Avengers Disassembled',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
            name: 'Chaos War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/238',
            name: 'Civil War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
            name: 'Dark Reign',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/240',
            name: 'Days of Future Present',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/287',
            name: 'Heroic Age',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/252',
            name: 'Inferno',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/255',
            name: 'Initiative',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/37',
            name: 'Maximum Security',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/154',
            name: 'Onslaught',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/270',
            name: 'Secret Wars',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/271',
            name: 'Secret Wars II',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/309',
            name: 'Shattered Heroes',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/273',
            name: 'Siege',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/305',
            name: 'Spider-Island',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/277',
            name: 'World War Hulk',
          },
        ],
        returned: 20,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1009366/invisible_woman?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Invisible_Woman?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009366/invisible_woman?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009367,
      name: 'Iron Fist (Danny Rand)',
      description: '',
      modified: '2017-08-21T16:49:13-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/f0/52616788ebc63',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009367',
      comics: {
        available: 399,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009367/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/43504',
            name: 'A+X (2012) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/77062',
            name: 'Absolute Carnage: Lethal Protectors (2019) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/77063',
            name: 'Absolute Carnage: Lethal Protectors (2019) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/6794',
            name: 'The Amazing Spider-Man (1963) #380',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/32217',
            name: 'Amazing Spider-Man (1999) #653',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/35521',
            name: 'Amazing Spider-Man (1999) #654',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/39595',
            name: 'Amazing Spider-Man (1999) #654 (2nd Printing Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/35513',
            name: 'Amazing Spider-Man (1999) #666',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/35528',
            name: 'Amazing Spider-Man (1999) #667',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/35532',
            name: 'Amazing Spider-Man (1999) #668',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/29195',
            name: 'Avengers (2010) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/33335',
            name: 'Avengers (2010) #1 (HEROIC AGE VARIANT)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/33336',
            name: 'Avengers (2010) #1 (ROMITA JR. VARIANT)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/33483',
            name: 'Avengers (2010) #1 (DJURDJEVIC VARIANT)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/33562',
            name: 'Avengers (2010) #1 (ROMITA SR. VARIANT)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/33572',
            name: 'Avengers (2010) #1 (I AM AN AVENGER BLANK COVER VARIANT)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/29196',
            name: 'Avengers (2010) #10',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/29198',
            name: 'Avengers (2010) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/29202',
            name: 'Avengers (2010) #16',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/29218',
            name: 'Avengers Academy (2010) #3',
          },
        ],
        returned: 20,
      },
      series: {
        available: 115,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009367/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/16450',
            name: 'A+X (2012 - 2014)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/27633',
            name: 'Absolute Carnage: Lethal Protectors (2019)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/454',
            name: 'Amazing Spider-Man (1999 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9085',
            name: 'Avengers (2010 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9086',
            name: 'Avengers Academy (2010 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/15305',
            name: 'Avengers Vs. X-Men (2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4864',
            name: 'Avengers/Invaders (2008 - 2009)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2115',
            name: 'Black Panther (1998 - 2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/20944',
            name: 'Cage (1992 - 1993)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/832',
            name: 'Captain America (2004 - 2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/5061',
            name: 'Captain America: The Death of Captain America Vol. 1 (2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3127',
            name: 'Captain America: The Death of Captain America Vol. 1 Premiere (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1067',
            name: 'Civil War (2006 - 2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/28968',
            name: 'Contagion (2019 - 2020)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/449',
            name: 'Daredevil (1998 - 2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2002',
            name: 'Daredevil (1964 - 1998)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/6073',
            name: 'Daredevil Saga (2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22',
            name: 'DAREDEVIL VOL. 5: OUT TPB (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23968',
            name: 'Daredevil: Shadowland Omnibus (John Cassaday Cover) (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1646',
            name: 'Daredevil: The Devil, Inside and Out Vol. 1 (2006)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 450,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009367/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1111',
            name: '6 of 6 - The Devil in Cell Block D',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2363',
            name: '3 of 4 - Fear',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3151',
            name: 'Iron Fist (2004) #1',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3153',
            name: 'Iron Fist (2004) #2',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3155',
            name: 'Iron Fist (2004) #6',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3157',
            name: 'Iron Fist (2004) #5',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3159',
            name: 'Iron Fist (2004) #3',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3161',
            name: 'Iron Fist (2004) #4',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5874',
            name: 'Cover #5874',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5882',
            name: 'Cover #5882',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/6250',
            name: 'Immortal Iron Fist (2006) #1',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/6252',
            name: 'Immortal Iron Fist (2006) #2',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/6254',
            name: 'Immortal Iron Fist (2006) #3',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/7678',
            name: 'New Avengers (2004) #28',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/7703',
            name: '2 of 6 - Death of the Dream',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/7916',
            name: 'Immortal Iron Fist (2006) #4',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/8365',
            name: '4 of 5 - The Immortal Iron Fist',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/8367',
            name: 'Immortal Iron Fist (2006) #5',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/8701',
            name: 'Immortal Iron Fist (2006) #6',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/14194',
            name: 'Amazing Spider-Man (1963) #380',
            type: 'cover',
          },
        ],
        returned: 20,
      },
      events: {
        available: 11,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009367/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/310',
            name: 'Avengers VS X-Men',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/255',
            name: 'Initiative',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/311',
            name: 'Marvel NOW!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/151',
            name: 'Maximum Carnage',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/336',
            name: 'Secret Empire',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/271',
            name: 'Secret Wars II',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/59',
            name: 'Shadowland',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/309',
            name: 'Shattered Heroes',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/305',
            name: 'Spider-Island',
          },
        ],
        returned: 11,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1009367/iron_fist_danny_rand?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Iron_Fist_(Danny_Rand)?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009367/iron_fist_danny_rand?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009368,
      name: 'Iron Man',
      description:
        'Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.',
      modified: '2016-09-28T12:08:19-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009368',
      comics: {
        available: 2600,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009368/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/43495',
            name: 'A+X (2012) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/43506',
            name: 'A+X (2012) #7',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/22461',
            name: 'Adam: Legend of the Blue Marvel (2008) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/22856',
            name: 'Adam: Legend of the Blue Marvel (2008) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/23733',
            name: 'Adam: Legend of the Blue Marvel (2008) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/76359',
            name: 'Aero (2019) #11',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/76360',
            name: 'Aero (2019) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/30090',
            name: 'Age of Heroes (2010) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/33566',
            name: 'Age of Heroes (2010) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/30092',
            name: 'Age of Heroes (2010) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/30093',
            name: 'Age of Heroes (2010) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/67603',
            name: 'Age of Innocence: The Rebirth of Iron Man (1996) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38524',
            name: 'Age of X: Universe (2011) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38523',
            name: 'Age of X: Universe (2011) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21280',
            name: 'All-New Iron Manual (2008) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/55363',
            name: 'All-New, All-Different Avengers (2015) #10',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/55364',
            name: 'All-New, All-Different Avengers (2015) #11',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12653',
            name: 'Alpha Flight (1983) #113',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12668',
            name: 'Alpha Flight (1983) #127',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/55311',
            name: 'The Amazing Spider-Man (2017) #13',
          },
        ],
        returned: 20,
      },
      series: {
        available: 639,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009368/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/16450',
            name: 'A+X (2012 - 2014)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/6079',
            name: 'Adam: Legend of the Blue Marvel (2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/27392',
            name: 'Aero (2019 - 2020)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9790',
            name: 'Age of Heroes (2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24380',
            name: 'Age of Innocence: The Rebirth of Iron Man (1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13896',
            name: 'Age of X: Universe (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4897',
            name: 'All-New Iron Manual (2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/20443',
            name: 'All-New, All-Different Avengers (2015 - 2016)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/454',
            name: 'Amazing Spider-Man (1999 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2984',
            name: 'Amazing Spider-Man Annual (1964 - 2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1489',
            name: 'AMAZING SPIDER-MAN VOL. 10: NEW AVENGERS TPB (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/318',
            name: 'Amazing Spider-Man Vol. 6 (2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23446',
            name: 'Amazing Spider-Man: Worldwide Vol. 2 (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/6056',
            name: 'ANNIHILATION CLASSIC HC (2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/14818',
            name: 'Annihilators: Earthfall (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/14779',
            name: 'Art of Marvel Studios TPB Slipcase (2011 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9792',
            name: 'Astonishing Spider-Man & Wolverine (2010 - 2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/6792',
            name: 'Astonishing Tales (2009)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/6697',
            name: 'Astonishing Tales: Iron Man 2020 Digital Comic (2009)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 3926,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009368/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/670',
            name: 'X-MEN (2004) #186',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/892',
            name: 'THOR (1998) #81',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/960',
            name: '3 of ?',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/982',
            name: 'Interior #982',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/984',
            name: 'Interior #984',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/986',
            name: 'Interior #986',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/988',
            name: 'Interior #988',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/990',
            name: 'Interior #990',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/992',
            name: 'Interior #992',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/994',
            name: 'Interior #994',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/996',
            name: 'Interior #996',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/998',
            name: 'Interior #998',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1000',
            name: 'Interior #1000',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1002',
            name: 'AVENGERS DISASSEMBLED TIE-IN! Still reeling from recent traumas, Iron Man must face off against his evil doppelganger. Meanwhile',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1004',
            name: '"THE SINGULARITY" CONCLUSION! PART 4 (OF 4) The battle rages on between Iron Man and his doppelganger, but only one of them can ',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1018',
            name: 'Amazing Spider-Man (1999) #500',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1024',
            name: 'Avengers (1998) #80',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1026',
            name: 'Avengers (1998) #81',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1041',
            name: 'Avengers (1998) #502',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1051',
            name: 'Interior #1051',
            type: 'interiorStory',
          },
        ],
        returned: 20,
      },
      events: {
        available: 31,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009368/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/303',
            name: 'Age of X',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/231',
            name: 'Armor Wars',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/233',
            name: 'Atlantis Attacks',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/234',
            name: 'Avengers Disassembled',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/310',
            name: 'Avengers VS X-Men',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
            name: 'Chaos War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/238',
            name: 'Civil War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/239',
            name: 'Crossing',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
            name: 'Dark Reign',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/245',
            name: 'Enemy of the State',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/249',
            name: 'Fatal Attractions',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/251',
            name: 'House of M',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/315',
            name: 'Infinity',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/317',
            name: 'Inhumanity',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/255',
            name: 'Initiative',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/37',
            name: 'Maximum Security',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/154',
            name: 'Onslaught',
          },
        ],
        returned: 20,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/29/iron_man?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Iron_Man_(Anthony_Stark)?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009368/iron_man?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009382,
      name: 'Juggernaut',
      description: '',
      modified: '2013-11-20T17:15:17-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/c0/528d340442cca',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009382',
      comics: {
        available: 202,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009382/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/23252',
            name: 'Amazing Adventures (1970) #16',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/6626',
            name: 'The Amazing Spider-Man (1963) #229',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/6628',
            name: 'The Amazing Spider-Man (1963) #230',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/30302',
            name: 'Amazing Spider-Man (1999) #627',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/30303',
            name: 'Amazing Spider-Man (1999) #628',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17506',
            name: 'Avengers (1998) #24',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17507',
            name: 'Avengers (1998) #25',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17546',
            name: 'Avengers (1998) #60',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/29218',
            name: 'Avengers Academy (2010) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/35423',
            name: 'Avengers Academy (2010) #3 (WOMEN OF MARVEL VARIANT)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/35849',
            name: 'Avengers Academy (2010) #3 (MCKONE VARIANT)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/29219',
            name: 'Avengers Academy (2010) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4461',
            name: 'Avengers Assemble Vol. 3 (Hardcover)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1098',
            name: 'Avengers Vol. 1: World Trust (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/41191',
            name: 'Avengers Vs. X-Men (2012) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/42491',
            name: 'Avengers Vs. X-Men: Versus (2011) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/943',
            name: 'Call, the Vol. 2: The Precinct (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12845',
            name: 'Captain America (2002) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20556',
            name: 'Captain Marvel (2000) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1115',
            name: 'Captain Marvel Vol. 1: Nothing to Lose (Trade Paperback)',
          },
        ],
        returned: 20,
      },
      series: {
        available: 87,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009382/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/6666',
            name: 'Amazing Adventures (1970 - 1976)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/454',
            name: 'Amazing Spider-Man (1999 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
            name: 'Avengers (1998 - 2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9086',
            name: 'Avengers Academy (2010 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1737',
            name: 'Avengers Assemble Vol. 3 (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/158',
            name: 'Avengers Vol. 1: World Trust (2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/15305',
            name: 'Avengers Vs. X-Men (2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/16230',
            name: 'Avengers Vs. X-Men: Versus (2011 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/8',
            name: 'Call, the Vol. 2: The Precinct (2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/485',
            name: 'Captain America (2002 - 2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/690',
            name: 'Captain Marvel (2000 - 2002)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/175',
            name: 'Captain Marvel Vol. 1: Nothing to Lose (2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/105',
            name: 'Captain Marvel Vol. I (1999)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3874',
            name: 'CLANDESTINE CLASSIC PREMIERE HC (2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3751',
            name: 'Classic X-Men (1986 - 1990)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22990',
            name: 'Code of Honor (1997)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/789',
            name: 'Dark Avengers (2012 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2004',
            name: 'Deadpool (1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2005',
            name: 'Deadpool (1997 - 2002)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23602',
            name: 'Despicable Deadpool (2017 - 2018)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 230,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009382/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/614',
            name: 'X-MEN (2004) #159',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/618',
            name: 'X-MEN (2004) #158',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/620',
            name: 'X-MEN (2004) #160',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/622',
            name: 'X-MEN (2004) #161',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/624',
            name: 'X-MEN (2004) #162',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/698',
            name: 'UNCANNY X-MEN (1963) #435',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/745',
            name: '1 of 2 - Mojo Rising',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/747',
            name: '2 of 2 - Mojo Rising',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/752',
            name: 'Uncanny X-Men (1963) #463',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/753',
            name: '2 of 4 - Season of the Witch',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/754',
            name: 'Uncanny X-Men (1963) #465',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/755',
            name: '4 of 4 - Season of the Witch (HoM)',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1745',
            name: 'UNCANNY X-MEN (1963) #433',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2249',
            name: 'UNCANNY X-MEN (1963) #436',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2293',
            name: 'UNCANNY X-MEN (1963) #432',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2823',
            name: 'Cover #2823',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3794',
            name: 'IDENTITY DISC (2004) #3',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3796',
            name: 'IDENTITY DISC (2004) #2',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3798',
            name: 'IDENTITY DISC (2004) #1',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3800',
            name: 'IDENTITY DISC (2004) #4',
            type: 'cover',
          },
        ],
        returned: 20,
      },
      events: {
        available: 9,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009382/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/310',
            name: 'Avengers VS X-Men',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/251',
            name: 'House of M',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/252',
            name: 'Inferno',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/299',
            name: 'Messiah CompleX',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/154',
            name: 'Onslaught',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/309',
            name: 'Shattered Heroes',
          },
        ],
        returned: 9,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1009382/juggernaut?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Juggernaut_(Cain_Marko)?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009382/juggernaut?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1010904,
      name: 'Magus (Adam Warlock)',
      description: '',
      modified: '1969-12-31T19:00:00-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/f0/4c00358c0575c',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010904',
      comics: {
        available: 17,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1010904/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/39980',
            name: 'Annihilators: Earthfall (2011) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/22828',
            name: 'Captain Marvel (2002) #21',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/22829',
            name: 'Captain Marvel (2002) #22',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/22830',
            name: 'Captain Marvel (2002) #23',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/22831',
            name: 'Captain Marvel (2002) #24',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/29009',
            name: 'Guardians of the Galaxy (2008) #23',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/66283',
            name: 'Infinity Countdown Prime (2018) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/9292',
            name: 'Infinity War (1992) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/9293',
            name: 'Infinity War (1992) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/9294',
            name: 'Infinity War (1992) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/9295',
            name: 'Infinity War (1992) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/9296',
            name: 'Infinity War (1992) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/9297',
            name: 'Infinity War (1992) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/73554',
            name: 'Infinity War Omnibus (Hardcover)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/50905',
            name: 'Strange Tales (1951) #181',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/32983',
            name: 'The Thanos Imperative: Ignition (2010) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/66964',
            name: 'True Believers: Infinity War (2018) #1',
          },
        ],
        returned: 17,
      },
      series: {
        available: 9,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1010904/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/14818',
            name: 'Annihilators: Earthfall (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/6258',
            name: 'Captain Marvel (2002 - 2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4885',
            name: 'Guardians of the Galaxy (2008 - 2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24300',
            name: 'Infinity Countdown Prime (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2024',
            name: 'Infinity War (1992)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/26512',
            name: 'Infinity War Omnibus (2019)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2076',
            name: 'Strange Tales (1951 - 1968)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9803',
            name: 'The Thanos Imperative: Ignition (2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24222',
            name: 'True Believers: Infinity War (2018)',
          },
        ],
        returned: 9,
      },
      stories: {
        available: 21,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1010904/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/23962',
            name: 'Cover #23962',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/23964',
            name: 'Cover #23964',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/23966',
            name: 'Cover #23966',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/23968',
            name: 'Cover #23968',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/23970',
            name: 'Cover #23970',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/23972',
            name: 'Cover #23972',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/50182',
            name: 'Captain Marvel (2002) #21',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/50183',
            name: 'Interior #50183',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/50184',
            name: 'Captain Marvel (2002) #22',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/50185',
            name: 'Interior',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/50186',
            name: 'Captain Marvel (2002) #23',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/50187',
            name: 'Interior #50187',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/50188',
            name: 'Captain Marvel (2002) #24',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/50189',
            name: 'Interior #50189',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/63209',
            name: 'Cover #63209',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/74302',
            name: 'THE THANOS IMPERATIVE: IGNITION (2010) #1',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/90727',
            name: 'Annihilators: Earthfall (2011) #3',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/128925',
            name: 'Strange Tales (1951) #181',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/143709',
            name: 'cover from Infinity Countdown Prime (2018) #1',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/145083',
            name: 'cover from True Believers: Infinity War (2018) #1',
            type: 'cover',
          },
        ],
        returned: 20,
      },
      events: {
        available: 3,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1010904/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/295',
            name: 'Realm of Kings',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/294',
            name: 'The Thanos Imperative',
          },
        ],
        returned: 3,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/1334/magus?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Magus_%28Adam_Warlock%29?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1010904/magus_adam_warlock?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009469,
      name: 'Namorita',
      description: '',
      modified: '2013-11-20T17:14:56-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/4/03/528d33a253447',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009469',
      comics: {
        available: 62,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009469/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17537',
            name: 'Avengers (1998) #52',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7015',
            name: 'Avengers (1963) #156',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5844',
            name: 'Avengers Assemble Vol. 4 (Hardcover)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21565',
            name: 'Avengers/Invaders (2008) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1038',
            name: 'AVENGERS: THE KANG DYNASTY TPB (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/15546',
            name: 'Fantastic Four (1998) #27',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/15548',
            name: 'Fantastic Four (1998) #29',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/15563',
            name: 'Fantastic Four (1998) #42',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/15564',
            name: 'Fantastic Four (1998) #43',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/15565',
            name: 'Fantastic Four (1998) #44',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/15566',
            name: 'Fantastic Four (1998) #45',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/15567',
            name: 'Fantastic Four (1998) #46',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/15570',
            name: 'Fantastic Four (1998) #49',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/13179',
            name: 'Fantastic Four (1961) #356',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/13192',
            name: 'Fantastic Four (1961) #368',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/10033',
            name: 'Marvel Comics Presents (1988) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/19487',
            name: 'Marvel Two-in-One (1974) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/19526',
            name: 'Marvel Two-in-One (1974) #55',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/19547',
            name: 'Marvel Two-in-One (1974) #74',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/10284',
            name: 'Maximum Security (2000) #1',
          },
        ],
        returned: 20,
      },
      series: {
        available: 22,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009469/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
            name: 'Avengers (1963 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
            name: 'Avengers (1998 - 2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1816',
            name: 'Avengers Assemble Vol. 4 (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4864',
            name: 'Avengers/Invaders (2008 - 2009)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/98',
            name: 'AVENGERS: THE KANG DYNASTY TPB (2002)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/421',
            name: 'Fantastic Four (1998 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2121',
            name: 'Fantastic Four (1961 - 1998)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2039',
            name: 'Marvel Comics Presents (1988 - 1995)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3715',
            name: 'Marvel Two-in-One (1974 - 1983)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2049',
            name: 'Maximum Security (2000 - 2001)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23530',
            name: 'Namor: The Sub-Mariner (1990 - 1995)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2053',
            name: 'New Mutants Annual (1984 - 1991)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/839',
            name: 'New Warriors (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/16341',
            name: 'New Warriors (1990 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2504',
            name: 'Nova (2007 - 2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23001',
            name: 'Saga of the Sub-Mariner (1988 - 1989)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2989',
            name: 'Sub-Mariner (1968 - 1974)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3674',
            name: 'Super-Villain Team-Up (1975 - 1980)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9950',
            name: 'The Thanos Imperative (2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2083',
            name: 'Thor (1966 - 1996)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 70,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009469/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4314',
            name: 'New Warriors (2005) #1',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4315',
            name: '1 of 6',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4316',
            name: 'New Warriors (2005) #2',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4317',
            name: '2 of 6',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4318',
            name: 'New Warriors (2005) #3',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4319',
            name: '3 of 6',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4320',
            name: 'New Warriors (2005) #4',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4321',
            name: '4 of 6',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4322',
            name: 'New Warriors (2005) #5',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4323',
            name: '5 of 6',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4324',
            name: 'New Warriors (2005) #6',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4325',
            name: '6 of 6',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13013',
            name: '"War With the New Warriors"',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13107',
            name: 'Day of the Dark Side!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/14568',
            name: 'The Private War of Doctor Doom!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/17137',
            name: 'Thor (1966) #411',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/17140',
            name: 'Thor (1966) #412',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21624',
            name: 'Here Be Monsters!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/22810',
            name: 'Spring Break',
            type: '',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/26235',
            name: 'Illegal Aliens',
            type: 'interiorStory',
          },
        ],
        returned: 20,
      },
      events: {
        available: 7,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009469/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/233',
            name: 'Atlantis Attacks',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/32',
            name: 'Kings of Pain',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/37',
            name: 'Maximum Security',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/295',
            name: 'Realm of Kings',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/294',
            name: 'The Thanos Imperative',
          },
        ],
        returned: 7,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/1562/namorita?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Namorita?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009469/namorita?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009472,
      name: 'Nightcrawler',
      description: '',
      modified: '2013-10-17T15:06:41-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/40/526034979bc98',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009472',
      comics: {
        available: 620,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009472/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/72944',
            name: 'Age of X-Man: The Amazing Nightcrawler (2019) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/72945',
            name: 'Age of X-Man: The Amazing Nightcrawler (2019) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/72946',
            name: 'Age of X-Man: The Amazing Nightcrawler (2019) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/72947',
            name: 'Age of X-Man: The Amazing Nightcrawler (2019) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/72948',
            name: 'Age of X-Man: The Amazing Nightcrawler (2019) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/73065',
            name: 'Age Of X-Man: The Amazing Nightcrawler (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12637',
            name: 'Alpha Flight (1983) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12694',
            name: 'Alpha Flight (1983) #33',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/48019',
            name: 'Amazing X-Men (2013) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/48023',
            name: 'Amazing X-Men (2013) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/48024',
            name: 'Amazing X-Men (2013) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/51147',
            name: 'Amazing X-Men (2013) #14',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/45820',
            name: 'Astonishing X-Men (2004) #59',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/45821',
            name: 'Astonishing X-Men (2004) #60',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/45822',
            name: 'Astonishing X-Men (2004) #61',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17491',
            name: 'Avengers (1998) #10',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17546',
            name: 'Avengers (1998) #60',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1311',
            name: 'Avengers Assemble (Hardcover)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5844',
            name: 'Avengers Assemble Vol. 4 (Hardcover)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1098',
            name: 'Avengers Vol. 1: World Trust (Trade Paperback)',
          },
        ],
        returned: 20,
      },
      series: {
        available: 184,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009472/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/26373',
            name: 'Age Of X-Man: The Amazing Nightcrawler (2019)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/26332',
            name: 'Age of X-Man: The Amazing Nightcrawler (2019)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/18142',
            name: 'Amazing X-Men (2013 - 2015)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/744',
            name: 'Astonishing X-Men (2004 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
            name: 'Avengers (1998 - 2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1340',
            name: 'Avengers Assemble (2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1816',
            name: 'Avengers Assemble Vol. 4 (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/158',
            name: 'Avengers Vol. 1: World Trust (2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4002',
            name: 'Cable (2008 - 2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1995',
            name: 'Cable (1993 - 2002)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/8',
            name: 'Call, the Vol. 2: The Precinct (2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/485',
            name: 'Captain America (2002 - 2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/690',
            name: 'Captain Marvel (2000 - 2002)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/175',
            name: 'Captain Marvel Vol. 1: Nothing to Lose (2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/105',
            name: 'Captain Marvel Vol. I (1999)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3874',
            name: 'CLANDESTINE CLASSIC PREMIERE HC (2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3751',
            name: 'Classic X-Men (1986 - 1990)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/16542',
            name: 'Deadpool (2012 - 2015)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/26545',
            name: 'Death Of Wolverine Companion (2019)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 733,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009472/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/477',
            name: 'Cover #477',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/616',
            name: 'X-MEN (2004) #157',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/737',
            name: '2 of 5 - Savage Land',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/738',
            name: 'Uncanny X-Men (1963) #457',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/739',
            name: '3 of 5 - Savage Land',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/740',
            name: 'Uncanny X-Men (1963) #458',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/741',
            name: "4 of 5 - World's End",
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/742',
            name: 'Uncanny X-Men (1963) #459',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/743',
            name: "5 of 5 - World's End",
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/745',
            name: '1 of 2 - Mojo Rising',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/759',
            name: "1 of 3 - Grey's End",
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/760',
            name: 'Uncanny X-Men (1963) #467',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/761',
            name: "2 of 3 - Grey's End",
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/764',
            name: 'Uncanny X-Men (1963) #469',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/765',
            name: '1 of 3 -',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/766',
            name: 'Uncanny X-Men (1963) #470',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/767',
            name: "2 of 3 - Wand'ring Star",
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/768',
            name: 'UNCANNY X-MEN (1963) #471',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/770',
            name: 'UNCANNY X-MEN (1963) #472',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/772',
            name: 'UNCANNY X-MEN (1963) #473',
            type: 'cover',
          },
        ],
        returned: 20,
      },
      events: {
        available: 17,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009472/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/227',
            name: 'Age of Apocalypse',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/320',
            name: 'Axis',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
            name: 'Dark Reign',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/246',
            name: 'Evolutionary War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/248',
            name: 'Fall of the Mutants',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/249',
            name: 'Fatal Attractions',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/37',
            name: 'Maximum Security',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/299',
            name: 'Messiah CompleX',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/263',
            name: 'Mutant Massacre',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/154',
            name: 'Onslaught',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/336',
            name: 'Secret Empire',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/270',
            name: 'Secret Wars',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/271',
            name: 'Secret Wars II',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/277',
            name: 'World War Hulk',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/308',
            name: 'X-Men: Regenesis',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/279',
            name: 'X-Men: Second Coming',
          },
        ],
        returned: 17,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1009472/nightcrawler?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Nightcrawler?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009472/nightcrawler?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009476,
      name: 'Northstar',
      description: '',
      modified: '2012-05-30T14:06:10-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/c0/4c003d15985a0',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009476',
      comics: {
        available: 104,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009476/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17701',
            name: 'Age of Apocalypse: The Chosen (1995) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/72952',
            name: 'Age of X-Man: X-Tremists (2019) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12637',
            name: 'Alpha Flight (1983) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/39819',
            name: 'Alpha Flight (2011) #1 (Eaglesham Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12679',
            name: 'Alpha Flight (1983) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12690',
            name: 'Alpha Flight (1983) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38567',
            name: 'Alpha Flight (2011) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12701',
            name: 'Alpha Flight (1983) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12734',
            name: 'Alpha Flight (1983) #7',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12745',
            name: 'Alpha Flight (1983) #8',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12638',
            name: 'Alpha Flight (1983) #10',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1558',
            name: 'Alpha Flight (2004) #11',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12649',
            name: 'Alpha Flight (1983) #11',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12660',
            name: 'Alpha Flight (1983) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1647',
            name: 'Alpha Flight (2004) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12671',
            name: 'Alpha Flight (1983) #13',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12675',
            name: 'Alpha Flight (1983) #16',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12693',
            name: 'Alpha Flight (1983) #32',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12694',
            name: 'Alpha Flight (1983) #33',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12695',
            name: 'Alpha Flight (1983) #34',
          },
        ],
        returned: 20,
      },
      series: {
        available: 29,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009476/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3614',
            name: 'Age of Apocalypse: The Chosen (1995)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/26333',
            name: 'Age of X-Man: X-Tremists (2019)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13907',
            name: 'Alpha Flight (2011 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/719',
            name: 'Alpha Flight (2004 - 2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/18142',
            name: 'Amazing X-Men (2013 - 2015)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/744',
            name: 'Astonishing X-Men (2004 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13260',
            name: 'Chaos War: Alpha Flight (2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2039',
            name: 'Marvel Comics Presents (1988 - 1995)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1440',
            name: 'MARVEL MASTERWORKS: THE UNCANNY X-MEN VOL. 2 HC (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/32375',
            name: "Marvel's Voices: Pride (2021)",
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/563',
            name: 'New Mutants (2003 - 2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1764',
            name: 'New Mutants Classic Vol. 2 (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/267',
            name: 'New Mutants Vol 1: Back to School (2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1186',
            name: 'New Mutants Vol 1: Back to School (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/20374',
            name: 'Secret Defenders (1993 - 1995)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2258',
            name: 'Uncanny X-Men (1963 - 2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1723',
            name: 'Uncanny X-Men Omnibus Vol. 1 (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/184',
            name: 'Uncanny X-Men Vol. 2: Dominant Species (2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2262',
            name: 'Wolverine (1988 - 2003)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 120,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009476/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/596',
            name: 'New Mutants (2003) #8',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/597',
            name: 'Interior #597',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1745',
            name: 'UNCANNY X-MEN (1963) #433',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2079',
            name: 'New Mutants (2003) #7',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2941',
            name: 'Alpha Flight (2004) #11',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2942',
            name: '3 of 4 - Days of Future Present Past Participle',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2943',
            name: 'Alpha Flight (2004) #12',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2944',
            name: '4 of 4 - Days of Future Present Past Participle',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/15427',
            name: 'Shoot-Out at the Stampede!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21096',
            name: 'Alpha Flight (1983) #1',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21097',
            name: 'Tundra!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21100',
            name: 'Family Ties',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21124',
            name: 'Alpha Flight #12',
            type: 'ad',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21126',
            name: 'Bare Bones',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21128',
            name: 'Bare Bones Part II',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21132',
            name: 'Speaking of Experience',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21145',
            name: 'And One Shall Surely Die !',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21146',
            name: 'And One Shall Surely Die',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21165',
            name: 'Faith!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21167',
            name: 'No Future Part 1',
            type: 'cover',
          },
        ],
        returned: 20,
      },
      events: {
        available: 6,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009476/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/227',
            name: 'Age of Apocalypse',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
            name: 'Chaos War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/306',
            name: 'X-Men: Schism',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/279',
            name: 'X-Men: Second Coming',
          },
        ],
        returned: 6,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/1618/northstar?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Northstar?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009476/northstar?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009477,
      name: 'Nova',
      description: '',
      modified: '2016-08-25T14:11:04-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/00/51756578d2a75',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009477',
      comics: {
        available: 193,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009477/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12766',
            name: 'Alpha Flight (1983) #99',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12639',
            name: 'Alpha Flight (1983) #100',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4788',
            name: 'Annihilation (2006) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5078',
            name: 'Annihilation (2006) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5230',
            name: 'Annihilation (2006) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5529',
            name: 'Annihilation (2006) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5795',
            name: 'Annihilation (2006) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/78505',
            name: 'Annihilation - Scourge: Nova (2019) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/22433',
            name: 'ANNIHILATION CLASSIC HC (Hardcover)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4111',
            name: 'Annihilation: Nova (2006) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4221',
            name: 'Annihilation: Nova (2006) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4318',
            name: 'Annihilation: Nova (2006) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4473',
            name: 'Annihilation: Nova (2006) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/78870',
            name: 'Annihilation: Scourge (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4822',
            name: 'Annihilation: The Nova Corps (2006) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17494',
            name: 'Avengers (1998) #13',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17507',
            name: 'Avengers (1998) #25',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1795',
            name: 'Avengers Assemble Vol. 2 (Hardcover)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4461',
            name: 'Avengers Assemble Vol. 3 (Hardcover)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5844',
            name: 'Avengers Assemble Vol. 4 (Hardcover)',
          },
        ],
        returned: 20,
      },
      series: {
        available: 65,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009477/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23058',
            name: 'All-New Guardians of the Galaxy (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3613',
            name: 'Annihilation (2006 - 2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/27982',
            name: 'Annihilation - Scourge: Nova (2019)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/6056',
            name: 'ANNIHILATION CLASSIC HC (2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1081',
            name: 'Annihilation: Nova (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/28069',
            name: 'Annihilation: Scourge (2020)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1115',
            name: 'Annihilation: The Nova Corps (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
            name: 'Avengers (1998 - 2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1496',
            name: 'Avengers Assemble Vol. 2 (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1737',
            name: 'Avengers Assemble Vol. 3 (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1816',
            name: 'Avengers Assemble Vol. 4 (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/26475',
            name: 'Black Order (2018 - 2019)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22552',
            name: 'Champions (2016 - 2019)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/29119',
            name: 'Champions Vol. 1: Outlawed (2021)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3743',
            name: 'Defenders (1972 - 1986)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/15308',
            name: 'Defenders: Tournament of Heroes (2011 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3741',
            name: 'Doctor Strange, Sorcerer Supreme (1988 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2121',
            name: 'Fantastic Four (1961 - 1998)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/421',
            name: 'Fantastic Four (1998 - 2012)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 266,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009477/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4123',
            name: '5 of 6 - Master of the Ring',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4314',
            name: 'New Warriors (2005) #1',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4315',
            name: '1 of 6',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4316',
            name: 'New Warriors (2005) #2',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4317',
            name: '2 of 6',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4318',
            name: 'New Warriors (2005) #3',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4319',
            name: '3 of 6',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4320',
            name: 'New Warriors (2005) #4',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4321',
            name: '4 of 6',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4322',
            name: 'New Warriors (2005) #5',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4323',
            name: '5 of 6',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4324',
            name: 'New Warriors (2005) #6',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4325',
            name: '6 of 6',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4930',
            name: '1 of 5 - 5XLS',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4932',
            name: '2 of 5 - 5XLS',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4934',
            name: '3 of 5 - 5XLS',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4936',
            name: '4 of 5 - 5XLS',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4938',
            name: '5 of 5 - 5XLS',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5948',
            name: 'Annihilation: Nova (2006) #1',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5950',
            name: 'Annihilation: Nova (2006) #2',
            type: 'cover',
          },
        ],
        returned: 20,
      },
      events: {
        available: 11,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009477/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/229',
            name: 'Annihilation',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/293',
            name: 'Annihilation: Conquest',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/255',
            name: 'Initiative',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/32',
            name: 'Kings of Pain',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/37',
            name: 'Maximum Security',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/295',
            name: 'Realm of Kings',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
            name: 'Secret Invasion',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/294',
            name: 'The Thanos Imperative',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/276',
            name: 'War of Kings',
          },
        ],
        returned: 11,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1009477/nova?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Nova_%28Richard_Rider%29?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009477/nova?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009499,
      name: 'Polaris',
      description: '',
      modified: '2013-11-01T16:43:39-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/c0/5274122562b05',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009499',
      comics: {
        available: 265,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009499/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7455',
            name: 'Cable (1993) #76',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7457',
            name: 'Cable (1993) #78',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20603',
            name: 'Classic X-Men (1986) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20566',
            name: 'Classic X-Men (1986) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20567',
            name: 'Classic X-Men (1986) #13',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20589',
            name: 'Classic X-Men (1986) #33',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4072',
            name: 'Decimation: X-Men the Day After (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20374',
            name: 'Defenders (1972) #63',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20233',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #69',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8555',
            name: 'Earth X (1999) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8556',
            name: 'Earth X (1999) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4241',
            name: 'EARTH X TPB [NEW PRINTING] (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/24259',
            name: 'Fantastic Force (2009) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/25161',
            name: 'Fantastic Force (2009) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/3463',
            name: 'House of M: Uncanny X-Men (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/9202',
            name: 'Incredible Hulk (1962) #391',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/9203',
            name: 'Incredible Hulk (1962) #392',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17457',
            name: 'Infinity War (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/52069',
            name: 'Magneto (2014) #20',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/52070',
            name: 'Magneto (2014) #21',
          },
        ],
        returned: 20,
      },
      series: {
        available: 68,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009499/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1995',
            name: 'Cable (1993 - 2002)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3751',
            name: 'Classic X-Men (1986 - 1990)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1643',
            name: 'Decimation: X-Men the Day After (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3743',
            name: 'Defenders (1972 - 1986)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3741',
            name: 'Doctor Strange, Sorcerer Supreme (1988 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/378',
            name: 'Earth X (1999 - 2000)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1806',
            name: 'EARTH X TPB [NEW PRINTING] (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/7238',
            name: 'Fantastic Force (2009)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1412',
            name: 'House of M: Uncanny X-Men (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2021',
            name: 'Incredible Hulk (1962 - 1999)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3289',
            name: 'Infinity War (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/18407',
            name: 'Magneto (2014 - 2015)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1440',
            name: 'MARVEL MASTERWORKS: THE UNCANNY X-MEN VOL. 2 HC (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3460',
            name: 'MARVEL MASTERWORKS: THE UNCANNY X-MEN VOL. 6 HC (2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1595',
            name: 'Marvel Visionaries: Chris Claremont (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/8132',
            name: 'Moon Knight Vol. 5: Down South (2009 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/8131',
            name: 'Moon Knight Vol. 5: Down South (2009 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/8133',
            name: 'Ms. Marvel Vol. 6: Ascension (2009 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/8134',
            name: 'Ms. Marvel Vol. 7: Dark Reign (2009 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/8135',
            name: 'Ms. Marvel Vol. 7: Dark Reign (2009 - Present)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 309,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009499/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/594',
            name: 'X-MEN (2004) #164',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/624',
            name: 'X-MEN (2004) #162',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/630',
            name: 'X-MEN (2004) #166',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/634',
            name: 'X-MEN (2004) #168',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/636',
            name: 'X-MEN (2004) #169',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/638',
            name: 'X-MEN (2004) #170',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/648',
            name: '1 of 2- Black Panther crossover',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/660',
            name: 'X-MEN (2004) #181',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/668',
            name: 'X-MEN (2004) #185',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/672',
            name: 'X-MEN (2004) #187',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/749',
            name: '1 of 4 - Season of the Witch',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/776',
            name: 'UNCANNY X-MEN (1963) #475',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/781',
            name: 'UNCANNY X-MEN (1963) #478',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/783',
            name: 'UNCANNY X-MEN (1963) #479',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/787',
            name: 'UNCANNY X-MEN (1963) #481',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/789',
            name: 'UNCANNY X-MEN (1963) #482',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1745',
            name: 'UNCANNY X-MEN (1963) #433',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1776',
            name: 'UNCANNY X-MEN (1963) #434',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2047',
            name: 'UNCANNY X-MEN (1963) #440',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2293',
            name: 'UNCANNY X-MEN (1963) #432',
            type: 'cover',
          },
        ],
        returned: 20,
      },
      events: {
        available: 10,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009499/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/227',
            name: 'Age of Apocalypse',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/233',
            name: 'Atlantis Attacks',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/249',
            name: 'Fatal Attractions',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/251',
            name: 'House of M',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/32',
            name: 'Kings of Pain',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/154',
            name: 'Onslaught',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/336',
            name: 'Secret Empire',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/323',
            name: 'Secret Wars (2015)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/276',
            name: 'War of Kings',
          },
        ],
        returned: 10,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/1771/polaris?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Polaris?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009499/polaris?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009504,
      name: 'Professor X',
      description: '',
      modified: '2013-11-20T17:14:37-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/e0/528d3378de525',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009504',
      comics: {
        available: 421,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009504/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17701',
            name: 'Age of Apocalypse: The Chosen (1995) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12651',
            name: 'Alpha Flight (1983) #111',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/64883',
            name: 'Astonishing X-Men (2017) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/65263',
            name: 'Astonishing X-Men (2017) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/65405',
            name: 'Astonishing X-Men (2017) #7',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/66481',
            name: 'Astonishing X-Men (2017) #9',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1719',
            name: 'Astonishing X-Men (2004) #10',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/2842',
            name: 'Astonishing X-Men (2004) #11',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/67715',
            name: 'Astonishing X-Men (2017) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/2161',
            name: 'Astonishing X-Men (2004) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4022',
            name: 'Astonishing X-Men (2004) #14',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4253',
            name: 'Astonishing X-Men (2004) #15',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4736',
            name: 'Astonishing X-Men (2004) #16',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5188',
            name: 'Astonishing X-Men (2004) #18',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5417',
            name: 'Astonishing X-Men (2004) #19',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/6309',
            name: 'Astonishing X-Men (2004) #22',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17353',
            name: 'Astonishing X-Men (2004) #24',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17354',
            name: 'Astonishing X-Men (2004) #24 (Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21511',
            name: 'Astonishing X-Men (2004) #25',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21714',
            name: 'Astonishing X-Men (2004) #26',
          },
        ],
        returned: 20,
      },
      series: {
        available: 134,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009504/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3614',
            name: 'Age of Apocalypse: The Chosen (1995)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/744',
            name: 'Astonishing X-Men (2004 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23262',
            name: 'Astonishing X-Men (2017 - 2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24018',
            name: 'Astonishing X-Men by Charles Soule Vol. 1: Life of X (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/7576',
            name: 'Astonishing X-Men by Joss Whedon & John Cassaday (2009 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1464',
            name: 'Astonishing X-Men Vol. 1 (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1422',
            name: 'Astonishing X-Men Vol. 2: Dangerous (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1485',
            name: 'Astonishing X-Men Vol. 3: Torn (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/5055',
            name: 'Astonishing X-Men Vol. 4: Unstoppable (2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
            name: 'Avengers (1963 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1816',
            name: 'Avengers Assemble Vol. 4 (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/784',
            name: 'Black Panther (2005 - 2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1995',
            name: 'Cable (1993 - 2002)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/26396',
            name: 'Chamber (2002 - 2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3751',
            name: 'Classic X-Men (1986 - 1990)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3743',
            name: 'Defenders (1972 - 1986)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3741',
            name: 'Doctor Strange, Sorcerer Supreme (1988 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/378',
            name: 'Earth X (1999 - 2000)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1806',
            name: 'EARTH X TPB [NEW PRINTING] (2006)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 426,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009504/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/776',
            name: 'UNCANNY X-MEN (1963) #475',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/781',
            name: 'UNCANNY X-MEN (1963) #478',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/783',
            name: 'UNCANNY X-MEN (1963) #479',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/785',
            name: 'UNCANNY X-MEN (1963) #480',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/787',
            name: 'UNCANNY X-MEN (1963) #481',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/789',
            name: 'UNCANNY X-MEN (1963) #482',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1426',
            name: 'ULTIMATE X-MEN (2000) #49',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1432',
            name: 'ULTIMATE X-MEN (2000) #47',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1474',
            name: 'ULTIMATE X-MEN (2000) #71',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1478',
            name: 'ULTIMATE X-MEN (2000) #73',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1480',
            name: 'ULTIMATE X-MEN (2000) #74',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1482',
            name: 'ULTIMATE X-MEN (2000) #77',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2061',
            name: 'ULTIMATE X-MEN (2000) #42',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2249',
            name: 'UNCANNY X-MEN (1963) #436',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3233',
            name: 'X-MEN: THE END - MEN AND X-MEN (2006) #3',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3237',
            name: 'X-MEN: THE END - MEN AND X-MEN (2006) #6',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3329',
            name: '4 of 6 - Dangerous',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3330',
            name: '4 of 6 - Dangerous',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3335',
            name: '6 of 6 - Dangerous',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3336',
            name: '6 of 6 - Dangerous',
            type: 'interiorStory',
          },
        ],
        returned: 20,
      },
      events: {
        available: 15,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009504/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/227',
            name: 'Age of Apocalypse',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/303',
            name: 'Age of X',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/238',
            name: 'Civil War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
            name: 'Dark Reign',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/246',
            name: 'Evolutionary War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/249',
            name: 'Fatal Attractions',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/252',
            name: 'Inferno',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/37',
            name: 'Maximum Security',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/299',
            name: 'Messiah CompleX',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/154',
            name: 'Onslaught',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/270',
            name: 'Secret Wars',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/271',
            name: 'Secret Wars II',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/277',
            name: 'World War Hulk',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/306',
            name: 'X-Men: Schism',
          },
        ],
        returned: 15,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/1810/professor_x?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Professor_X?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009504/professor_x?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009512,
      name: 'Psylocke',
      description: '',
      modified: '2015-07-28T19:24:17-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/50/526961ce86539',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009512',
      comics: {
        available: 427,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009512/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/35204',
            name: '5 Ronin (2010) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38752',
            name: '5 Ronin (2010) #4 (MACK COVER)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/29317',
            name: 'ACTS OF VENGEANCE CROSSOVERS OMNIBUS (Hardcover)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/29318',
            name: 'ACTS OF VENGEANCE CROSSOVERS OMNIBUS (DM Only) (Hardcover)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12725',
            name: 'Alpha Flight (1983) #61',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/63833',
            name: 'Astonishing X-Men (2017) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/64205',
            name: 'Astonishing X-Men (2017) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/64883',
            name: 'Astonishing X-Men (2017) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/65055',
            name: 'Astonishing X-Men (2017) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/65263',
            name: 'Astonishing X-Men (2017) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/65405',
            name: 'Astonishing X-Men (2017) #7',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/66265',
            name: 'Astonishing X-Men (2017) #8',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/66481',
            name: 'Astonishing X-Men (2017) #9',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/67000',
            name: 'Astonishing X-Men (2017) #11',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/67715',
            name: 'Astonishing X-Men (2017) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/66299',
            name: 'Astonishing X-Men by Charles Soule Vol. 1: Life of X (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/67725',
            name: 'Astonishing X-Men By Charles Soule Vol. 2: A Man Called X (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5844',
            name: 'Avengers Assemble Vol. 4 (Hardcover)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/42489',
            name: 'Avengers Vs. X-Men: Versus (2011) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7389',
            name: 'Cable (1993) #16',
          },
        ],
        returned: 20,
      },
      series: {
        available: 101,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009512/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/12429',
            name: '5 Ronin (2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9994',
            name: 'ACTS OF VENGEANCE CROSSOVERS OMNIBUS (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9995',
            name: 'ACTS OF VENGEANCE CROSSOVERS OMNIBUS (DM Only) (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23262',
            name: 'Astonishing X-Men (2017 - 2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24018',
            name: 'Astonishing X-Men by Charles Soule Vol. 1: Life of X (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24425',
            name: 'Astonishing X-Men By Charles Soule Vol. 2: A Man Called X (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1816',
            name: 'Avengers Assemble Vol. 4 (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/16230',
            name: 'Avengers Vs. X-Men: Versus (2011 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1995',
            name: 'Cable (1993 - 2002)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/31892',
            name: 'Demon Days: X-Men (2021)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3741',
            name: 'Doctor Strange, Sorcerer Supreme (1988 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/14388',
            name: 'Essential X-Men Vol. 6 (All-New Edition) (2011 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2011',
            name: 'Excalibur (1988 - 1998)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/27547',
            name: 'Excalibur (2019 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/479',
            name: 'Exiles (2001 - 2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/27552',
            name: 'Fallen Angels (2019 - 2020)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2121',
            name: 'Fantastic Four (1961 - 1998)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/14151',
            name: 'Fear Itself: Uncanny X-Force (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/30175',
            name: 'Hellions (2020 - Present)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 497,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009512/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/737',
            name: '2 of 5 - Savage Land',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/738',
            name: 'Uncanny X-Men (1963) #457',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/739',
            name: '3 of 5 - Savage Land',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/740',
            name: 'Uncanny X-Men (1963) #458',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/741',
            name: "4 of 5 - World's End",
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/742',
            name: 'Uncanny X-Men (1963) #459',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/743',
            name: "5 of 5 - World's End",
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/744',
            name: 'Uncanny X-Men (1963) #460',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/745',
            name: '1 of 2 - Mojo Rising',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/747',
            name: '2 of 2 - Mojo Rising',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/749',
            name: '1 of 4 - Season of the Witch',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/752',
            name: 'Uncanny X-Men (1963) #463',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/753',
            name: '2 of 4 - Season of the Witch',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/756',
            name: 'Uncanny X-Men (1963) #464',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/757',
            name: '3 of 4 - Season of the Witch (HoM)',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/759',
            name: "1 of 3 - Grey's End",
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/760',
            name: 'Uncanny X-Men (1963) #467',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/761',
            name: "2 of 3 - Grey's End",
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/763',
            name: "3 of 3 - Grey's End",
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/764',
            name: 'Uncanny X-Men (1963) #469',
            type: 'cover',
          },
        ],
        returned: 20,
      },
      events: {
        available: 21,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009512/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/227',
            name: 'Age of Apocalypse',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/233',
            name: 'Atlantis Attacks',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
            name: 'Dark Reign',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/240',
            name: 'Days of Future Present',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/246',
            name: 'Evolutionary War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/248',
            name: 'Fall of the Mutants',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/249',
            name: 'Fatal Attractions',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/251',
            name: 'House of M',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/252',
            name: 'Inferno',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/37',
            name: 'Maximum Security',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/299',
            name: 'Messiah CompleX',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/263',
            name: 'Mutant Massacre',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/154',
            name: 'Onslaught',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/316',
            name: 'X-Men: Battle of the Atom',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/308',
            name: 'X-Men: Regenesis',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/306',
            name: 'X-Men: Schism',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/279',
            name: 'X-Men: Second Coming',
          },
        ],
        returned: 20,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1009512/psylocke?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Psylocke?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009512/psylocke?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009513,
      name: 'Puck',
      description: '',
      modified: '2012-09-17T13:21:57-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/d0/4c003c7cc0d8f',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009513',
      comics: {
        available: 65,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009513/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12637',
            name: 'Alpha Flight (1983) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12679',
            name: 'Alpha Flight (1983) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38567',
            name: 'Alpha Flight (2011) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/613',
            name: 'Alpha Flight (2004) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12649',
            name: 'Alpha Flight (1983) #11',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12660',
            name: 'Alpha Flight (1983) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12671',
            name: 'Alpha Flight (1983) #13',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12673',
            name: 'Alpha Flight (1983) #14',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12674',
            name: 'Alpha Flight (1983) #15',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12675',
            name: 'Alpha Flight (1983) #16',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12693',
            name: 'Alpha Flight (1983) #32',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12694',
            name: 'Alpha Flight (1983) #33',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12695',
            name: 'Alpha Flight (1983) #34',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12713',
            name: 'Alpha Flight (1983) #50',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12715',
            name: 'Alpha Flight (1983) #52',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12725',
            name: 'Alpha Flight (1983) #61',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12754',
            name: 'Alpha Flight (1983) #88',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12755',
            name: 'Alpha Flight (1983) #89',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12650',
            name: 'Alpha Flight (1983) #110',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12651',
            name: 'Alpha Flight (1983) #111',
          },
        ],
        returned: 20,
      },
      series: {
        available: 20,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009513/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/719',
            name: 'Alpha Flight (2004 - 2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13907',
            name: 'Alpha Flight (2011 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2115',
            name: 'Black Panther (1998 - 2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13830',
            name: 'Captain America (2011 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/378',
            name: 'Earth X (1999 - 2000)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1806',
            name: 'EARTH X TPB [NEW PRINTING] (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/31372',
            name: 'Gamma Flight (2021)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3374',
            name: 'Hulk (2008 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2039',
            name: 'Marvel Comics Presents (1988 - 1995)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2059',
            name: 'Paradise X (2002 - 2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2431',
            name: 'Paradise X Vol. 1 (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2702',
            name: 'PARADISE X VOL. 2 TPB [NEW PRINTING] (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2069',
            name: 'Spider-Man (1990 - 1998)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/17597',
            name: 'Uncanny X-Force (2013 - 2014)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2258',
            name: 'Uncanny X-Men (1963 - 2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9962',
            name: 'Wolverine (2010 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2262',
            name: 'Wolverine (1988 - 2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2098',
            name: 'X-Factor (1986 - 1998)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3637',
            name: 'X-Men Unlimited (1993 - 2003)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 81,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009513/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2929',
            name: 'Alpha Flight (2004) #5',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2930',
            name: 'Interior #2930',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21096',
            name: 'Alpha Flight (1983) #1',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21097',
            name: 'Tundra!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21124',
            name: 'Alpha Flight #12',
            type: 'ad',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21126',
            name: 'Bare Bones',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21127',
            name: 'Weapon Omega vs. Himself?!',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21128',
            name: 'Bare Bones Part II',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21132',
            name: 'Speaking of Experience',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21145',
            name: 'And One Shall Surely Die !',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21146',
            name: 'And One Shall Surely Die',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21165',
            name: 'Faith!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21169',
            name: 'No Future Part 2',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21170',
            name: 'Ordeal!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21172',
            name: 'Nightmare',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21174',
            name: 'The Hollow Man',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21175',
            name: 'What Lurks in Lake Ontario?',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21176',
            name: 'Biology Class',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21177',
            name: 'Sub-Mariner vs. Marrina',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21178',
            name: 'Blind Date',
            type: 'interiorStory',
          },
        ],
        returned: 20,
      },
      events: {
        available: 2,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009513/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
        ],
        returned: 2,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/1827/puck?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Puck_%28Eugene_Judd%29?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009513/puck?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009519,
      name: 'Puppet Master',
      description: '',
      modified: '1969-12-31T19:00:00-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/40/4c003c738f74c',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009519',
      comics: {
        available: 41,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009519/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7314',
            name: 'Avengers (1963) #63',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8550',
            name: 'Earth X (1999) #11',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4241',
            name: 'EARTH X TPB [NEW PRINTING] (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/13288',
            name: 'Fantastic Four (1961) #8',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/68018',
            name: 'Fantastic Four (2018) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/70748',
            name: 'Fantastic Four (2018) #13',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12939',
            name: 'Fantastic Four (1961) #14',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/15566',
            name: 'Fantastic Four (1998) #45',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/13118',
            name: 'Fantastic Four (1961) #300',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/13179',
            name: 'Fantastic Four (1961) #356',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/13180',
            name: 'Fantastic Four (1961) #357',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/13181',
            name: 'Fantastic Four (1961) #358',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/13190',
            name: 'Fantastic Four (1961) #366',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/13191',
            name: 'Fantastic Four (1961) #367',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/13193',
            name: 'Fantastic Four (1961) #369',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/13196',
            name: 'Fantastic Four (1961) #371',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/13197',
            name: 'Fantastic Four (1961) #372',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/13198',
            name: 'Fantastic Four (1961) #373',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/13220',
            name: 'Fantastic Four (1961) #393',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8707',
            name: 'Fantastic Four Annual (1963) #3',
          },
        ],
        returned: 20,
      },
      series: {
        available: 21,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009519/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
            name: 'Avengers (1963 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/378',
            name: 'Earth X (1999 - 2000)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1806',
            name: 'EARTH X TPB [NEW PRINTING] (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24554',
            name: 'Fantastic Four (2018 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2121',
            name: 'Fantastic Four (1961 - 1998)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/421',
            name: 'Fantastic Four (1998 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2012',
            name: 'Fantastic Four Annual (1963 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3090',
            name: 'Fantastic Four Omnibus Vol. 1 (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2435',
            name: 'Fantastic Four Omnibus Vol. 2 (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13330',
            name: 'Heroes for Hire (2010 - 2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3077',
            name: 'Iron Man and Power Pack (2007 - 2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23098',
            name: 'Iron Man and Power Pack (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2952',
            name: 'Marvel Masterworks: The Avengers Vol. 7 (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1404',
            name: 'MARVEL MASTERWORKS: THE INCREDIBLE HULK VOL. 2 HC (2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1671',
            name: 'MARVEL MASTERWORKS: THE INCREDIBLE HULK VOL. 3 HC (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3715',
            name: 'Marvel Two-in-One (1974 - 1983)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2288',
            name: 'Silver Surfer (1987 - 1998)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2076',
            name: 'Strange Tales (1951 - 1968)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2080',
            name: 'Tales to Astonish (1959 - 1968)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3667',
            name: 'Thing (1983 - 1986)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 50,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009519/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/10178',
            name: 'Cover #10178',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/12010',
            name: 'Let There Be Battle!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/12317',
            name: 'Cover #12317',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/12318',
            name: 'The Prince and the Puppet!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/12496',
            name: 'The Merciless Puppet Master',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/12885',
            name: 'Cover #12885',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/12886',
            name: 'Dearly Beloved…',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13012',
            name: 'FANTASTIC FOUR (1961) #356',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13013',
            name: '"War With the New Warriors"',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13019',
            name: 'The Monster Among Us!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13026',
            name: '"Whatever Happened to Alicia?!"',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13095',
            name: 'The Enemy Within!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13100',
            name: 'At the Mercy of the Puppet Master!',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13101',
            name: 'By Reed ... Betrayed!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13113',
            name: 'With Malice Toward All!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13127',
            name: 'This Flame, This Fury',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13133',
            name: 'No More the Hero!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13139',
            name: 'Shattered Lives!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13270',
            name: 'Fantastic Four (1961) #393',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13271',
            name: 'Days of Recent Past',
            type: 'interiorStory',
          },
        ],
        returned: 20,
      },
      events: {
        available: 1,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009519/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
        ],
        returned: 1,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/2742/puppet_master?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Puppet_Master?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009519/puppet_master?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009523,
      name: 'Quasar (Phyla-Vell)',
      description: '',
      modified: '2013-11-01T16:41:34-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/03/52741171e681e',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009523',
      comics: {
        available: 106,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009523/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17271',
            name: 'Annihilation: Conquest (2007) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17405',
            name: 'Annihilation: Conquest (2007) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17645',
            name: 'Annihilation: Conquest (2007) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20686',
            name: 'Annihilation: Conquest (2007) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20885',
            name: 'Annihilation: Conquest (2007) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21016',
            name: 'Annihilation: Conquest (2007) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/15992',
            name: 'Annihilation: Conquest - Quasar (2007) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/16176',
            name: 'Annihilation: Conquest - Quasar (2007) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/16573',
            name: 'Annihilation: Conquest - Quasar (2007) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/16574',
            name: 'Annihilation: Conquest - Quasar (2007) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/15891',
            name: 'Annihilation: Conquest Prologue (2007) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/66602',
            name: 'Annihilation: The Complete Collection Vol. 1 (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/29321',
            name: 'Atlantis Attacks (2011) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/29322',
            name: 'Atlantis Attacks (DM Only) (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5844',
            name: 'Avengers Assemble Vol. 4 (Hardcover)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12411',
            name: 'Avengers Forever (1998) #8',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1033',
            name: 'Avengers Legends Vol. I: Avengers Forever (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5368',
            name: 'Avengers: Galactic Storm Vol. 2 (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/3631',
            name: 'Avengers: Galactic Storm Vol.1 (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7775',
            name: 'Captain America (1968) #394',
          },
        ],
        returned: 20,
      },
      series: {
        available: 30,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009523/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3061',
            name: 'Annihilation: Conquest (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2524',
            name: 'Annihilation: Conquest - Quasar (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2420',
            name: 'Annihilation: Conquest Prologue (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24256',
            name: 'Annihilation: The Complete Collection Vol. 1 (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/10030',
            name: 'Atlantis Attacks (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/10031',
            name: 'Atlantis Attacks (DM Only) (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1816',
            name: 'Avengers Assemble Vol. 4 (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2111',
            name: 'Avengers Forever (1998 - 1999)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/93',
            name: 'Avengers Legends Vol. I: Avengers Forever (2002)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1679',
            name: 'Avengers: Galactic Storm Vol. 2 (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/359',
            name: 'Avengers: Galactic Storm Vol.1 (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1996',
            name: 'Captain America (1968 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/421',
            name: 'Fantastic Four (1998 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2121',
            name: 'Fantastic Four (1961 - 1998)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/28042',
            name: 'Guardians of the Galaxy (2020 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3289',
            name: 'Infinity War (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2039',
            name: 'Marvel Comics Presents (1988 - 1995)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1440',
            name: 'MARVEL MASTERWORKS: THE UNCANNY X-MEN VOL. 2 HC (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3715',
            name: 'Marvel Two-in-One (1974 - 1983)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2049',
            name: 'Maximum Security (2000 - 2001)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 166,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009523/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13113',
            name: 'With Malice Toward All!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/15394',
            name: 'Where No X-Man Has Gone Before!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/18092',
            name: 'The Crimson Crusade',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/23249',
            name: 'It Came From Within...',
            type: '',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/26022',
            name: 'Paradise X Issue 11',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/26040',
            name: 'Paradise X Issue 9',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/26205',
            name: 'Cover #26205',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/26231',
            name: 'The Secret History of The Avengers',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/26237',
            name: 'A World of Hurt',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/26239',
            name: 'Whatever the Cost!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/26282',
            name: 'Wha...Huh? (2005) #1',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/27821',
            name: "Hide-'N'-Seek!",
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/29681',
            name: 'Cover #29681',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/29682',
            name: 'Sleeping Dogs',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/29684',
            name: 'The Outlaw Trail',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/29687',
            name: 'Cover #29687',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/29688',
            name: 'The Final Calculation',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/31804',
            name: "It's Too Late to Stop Now!",
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/32657',
            name: 'Annihilation Conquest: Quasar (2007) #1',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/33424',
            name: 'Annihilation Conquest: Quasar (2007) #3',
            type: 'cover',
          },
        ],
        returned: 20,
      },
      events: {
        available: 7,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009523/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/293',
            name: 'Annihilation: Conquest',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/233',
            name: 'Atlantis Attacks',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/37',
            name: 'Maximum Security',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/270',
            name: 'Secret Wars',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/271',
            name: 'Secret Wars II',
          },
        ],
        returned: 7,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1009523/quasar_phyla-vell?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Quasar?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009523/quasar_phyla-vell?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009546,
      name: 'Rogue',
      description: '',
      modified: '2016-02-01T14:50:44-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/10/5112d84e2166c',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009546',
      comics: {
        available: 626,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009546/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/43495',
            name: 'A+X (2012) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37996',
            name: 'Age of X: Alpha (2010) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38524',
            name: 'Age of X: Universe (2011) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38523',
            name: 'Age of X: Universe (2011) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12694',
            name: 'Alpha Flight (1983) #33',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12725',
            name: 'Alpha Flight (1983) #61',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/63833',
            name: 'Astonishing X-Men (2017) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/64205',
            name: 'Astonishing X-Men (2017) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/64883',
            name: 'Astonishing X-Men (2017) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/65055',
            name: 'Astonishing X-Men (2017) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/65263',
            name: 'Astonishing X-Men (2017) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/65405',
            name: 'Astonishing X-Men (2017) #7',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/66265',
            name: 'Astonishing X-Men (2017) #8',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/66481',
            name: 'Astonishing X-Men (2017) #9',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/67715',
            name: 'Astonishing X-Men (2017) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/42732',
            name: 'Astonishing X-Men (2004) #51 (Djurdjevic Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/66299',
            name: 'Astonishing X-Men by Charles Soule Vol. 1: Life of X (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17491',
            name: 'Avengers (1998) #10',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7288',
            name: 'Avengers (1963) #401',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/6924',
            name: 'Avengers Annual (1967) #10',
          },
        ],
        returned: 20,
      },
      series: {
        available: 161,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009546/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/16450',
            name: 'A+X (2012 - 2014)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13603',
            name: 'Age of X: Alpha (2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13896',
            name: 'Age of X: Universe (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23262',
            name: 'Astonishing X-Men (2017 - 2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/744',
            name: 'Astonishing X-Men (2004 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24018',
            name: 'Astonishing X-Men by Charles Soule Vol. 1: Life of X (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
            name: 'Avengers (1998 - 2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
            name: 'Avengers (1963 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1988',
            name: 'Avengers Annual (1967 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1340',
            name: 'Avengers Assemble (2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1816',
            name: 'Avengers Assemble Vol. 4 (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3753',
            name: 'Bishop: The Last X-Man (1999 - 2001)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1995',
            name: 'Cable (1993 - 2002)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/16907',
            name: 'Cable and X-Force (2012 - 2014)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/26673',
            name: 'Captain Marvel (2019 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3874',
            name: 'CLANDESTINE CLASSIC PREMIERE HC (2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3751',
            name: 'Classic X-Men (1986 - 1990)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3745',
            name: 'Dazzler (1981 - 1986)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/20613',
            name: 'Deadpool (2015 - 2017)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 779,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009546/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/614',
            name: 'X-MEN (2004) #159',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/616',
            name: 'X-MEN (2004) #157',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/618',
            name: 'X-MEN (2004) #158',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/620',
            name: 'X-MEN (2004) #160',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/622',
            name: 'X-MEN (2004) #161',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/626',
            name: 'X-MEN (2004) #163',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/632',
            name: 'X-MEN (2004) #167',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/634',
            name: 'X-MEN (2004) #168',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/636',
            name: 'X-MEN (2004) #169',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/638',
            name: 'X-MEN (2004) #170',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/640',
            name: '1 of 4 - Bizarre Love Triangle',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/648',
            name: '1 of 2- Black Panther crossover',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/660',
            name: 'X-MEN (2004) #181',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/666',
            name: 'X-MEN (2004) #184',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/668',
            name: 'X-MEN (2004) #185',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/670',
            name: 'X-MEN (2004) #186',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/672',
            name: 'X-MEN (2004) #187',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/674',
            name: 'X-MEN (2004) #188',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/676',
            name: 'X-MEN (2004) #189',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/678',
            name: 'X-MEN (2004) #190',
            type: 'cover',
          },
        ],
        returned: 20,
      },
      events: {
        available: 25,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009546/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/227',
            name: 'Age of Apocalypse',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/303',
            name: 'Age of X',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/233',
            name: 'Atlantis Attacks',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/320',
            name: 'Axis',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/238',
            name: 'Civil War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
            name: 'Dark Reign',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/246',
            name: 'Evolutionary War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/248',
            name: 'Fall of the Mutants',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/249',
            name: 'Fatal Attractions',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/251',
            name: 'House of M',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/252',
            name: 'Inferno',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/37',
            name: 'Maximum Security',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/299',
            name: 'Messiah CompleX',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/263',
            name: 'Mutant Massacre',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/154',
            name: 'Onslaught',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/336',
            name: 'Secret Empire',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/270',
            name: 'Secret Wars',
          },
        ],
        returned: 20,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1009546/rogue?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Rogue?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009546/rogue?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009560,
      name: 'Sasquatch (Walter Langkowski)',
      description: '',
      modified: '2011-09-08T13:22:13-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009560',
      comics: {
        available: 96,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009560/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38570',
            name: 'Alpha Flight (2011) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/393',
            name: 'Alpha Flight (2004) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12637',
            name: 'Alpha Flight (1983) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/39819',
            name: 'Alpha Flight (2011) #1 (Eaglesham Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12679',
            name: 'Alpha Flight (1983) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38569',
            name: 'Alpha Flight (2011) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/456',
            name: 'Alpha Flight (2004) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/39818',
            name: 'Alpha Flight (2011) #2 (Eaglesham Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12690',
            name: 'Alpha Flight (1983) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/616',
            name: 'Alpha Flight (2004) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38565',
            name: 'Alpha Flight (2011) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/39820',
            name: 'Alpha Flight (2011) #3 (Eaglesham Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12701',
            name: 'Alpha Flight (1983) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38567',
            name: 'Alpha Flight (2011) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/677',
            name: 'Alpha Flight (2004) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/613',
            name: 'Alpha Flight (2004) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/572',
            name: 'Alpha Flight (2004) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/790',
            name: 'Alpha Flight (2004) #7',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/866',
            name: 'Alpha Flight (2004) #8',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/67',
            name: 'Alpha Flight (2004) #9',
          },
        ],
        returned: 20,
      },
      series: {
        available: 35,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009560/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13907',
            name: 'Alpha Flight (2011 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/719',
            name: 'Alpha Flight (2004 - 2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2115',
            name: 'Black Panther (1998 - 2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13260',
            name: 'Chaos War: Alpha Flight (2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2005',
            name: 'Deadpool (1997 - 2002)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4605',
            name: 'Deadpool Classic Vol. 1 (2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/7713',
            name: 'Deadpool Vol. 1: Secret Invasion (2009 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3741',
            name: 'Doctor Strange, Sorcerer Supreme (1988 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/378',
            name: 'Earth X (1999 - 2000)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1806',
            name: 'EARTH X TPB [NEW PRINTING] (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/479',
            name: 'Exiles (2001 - 2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/154',
            name: 'Exiles Vol. 3: Out of Time (2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/116',
            name: 'Exiles Vol. II: A World Apart (1999)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2121',
            name: 'Fantastic Four (1961 - 1998)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/823',
            name: 'G.L.a. (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/31372',
            name: 'Gamma Flight (2021)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3374',
            name: 'Hulk (2008 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24278',
            name: 'Immortal Hulk (2018 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/27927',
            name: "Immortal Hulk Director's Cut (2019)",
          },
        ],
        returned: 20,
      },
      stories: {
        available: 114,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009560/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2921',
            name: 'Alpha Flight (2004) #9',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2922',
            name: '1 of 4 - Days of Future Present Past Participle',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2923',
            name: 'Alpha Flight (2004) #1',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2924',
            name: 'Interior #2924',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2925',
            name: 'Alpha Flight (2004) #2',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2926',
            name: 'Interior #2926',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2927',
            name: 'Alpha Flight (2004) #6',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2928',
            name: 'Interior #2928',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2929',
            name: 'Alpha Flight (2004) #5',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2930',
            name: 'Interior #2930',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2931',
            name: 'Alpha Flight (2004) #3',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2932',
            name: 'Interior #2932',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2933',
            name: 'Alpha Flight (2004) #4',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2934',
            name: 'Interior #2934',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2935',
            name: 'Alpha Flight (2004) #7',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2936',
            name: '"WAXING POETIC" PART 1 (OF 2) Is the All-New, All-Different Alpha Flight really disbanding after only seven issues? Not if the r',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2937',
            name: 'Alpha Flight (2004) #8',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2938',
            name: '"WAXING POETIC" PART 2 (OF 2) Montreal faces its gravest hour as it falls under attack by…wax statues of the entire Marvel Unive',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2939',
            name: 'Alpha Flight (2004) #10',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2940',
            name: '2 of 4 - Days of Future Present Past Participle',
            type: 'interiorStory',
          },
        ],
        returned: 20,
      },
      events: {
        available: 4,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009560/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
            name: 'Chaos War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
            name: 'Secret Invasion',
          },
        ],
        returned: 4,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/1995/sasquatch?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Sasquatch_%28Walter_Langkowski%29?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009560/sasquatch_walter_langkowski?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009562,
      name: 'Scarlet Witch',
      description: '',
      modified: '2016-06-16T14:23:56-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/70/5261a7d7c394b',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009562',
      comics: {
        available: 537,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009562/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/43509',
            name: 'A+X (2012) #10',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12651',
            name: 'Alpha Flight (1983) #111',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/43221',
            name: 'Astonishing X-Men (2004) #51 (Create Your Own Wedding Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/93354',
            name: 'Atlantis Attacks: The Original Epic (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17751',
            name: 'Avengers (1996) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17490',
            name: 'Avengers (1998) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17501',
            name: 'Avengers (1998) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17756',
            name: 'Avengers (1996) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17757',
            name: 'Avengers (1996) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17512',
            name: 'Avengers (1998) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/62682',
            name: 'Avengers (2016) #3.1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17758',
            name: 'Avengers (1996) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17523',
            name: 'Avengers (1998) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17534',
            name: 'Avengers (1998) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17545',
            name: 'Avengers (1998) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17761',
            name: 'Avengers (1996) #7',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17556',
            name: 'Avengers (1998) #7',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17567',
            name: 'Avengers (1998) #8',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17762',
            name: 'Avengers (1996) #8',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17573',
            name: 'Avengers (1998) #9',
          },
        ],
        returned: 20,
      },
      series: {
        available: 183,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009562/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/16450',
            name: 'A+X (2012 - 2014)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/744',
            name: 'Astonishing X-Men (2004 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/31906',
            name: 'Atlantis Attacks: The Original Epic (2021)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22547',
            name: 'Avengers (2016 - 2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
            name: 'Avengers (1998 - 2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3621',
            name: 'Avengers (1996 - 1997)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
            name: 'Avengers (1963 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9859',
            name: 'Avengers & the Infinity Gauntlet (2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9086',
            name: 'Avengers Academy (2010 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1988',
            name: 'Avengers Annual (1967 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/26449',
            name: 'Avengers Annual (2000)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1340',
            name: 'Avengers Assemble (2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/15373',
            name: 'Avengers Assemble (2012 - 2014)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1496',
            name: 'Avengers Assemble Vol. 2 (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1737',
            name: 'Avengers Assemble Vol. 3 (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1816',
            name: 'Avengers Assemble Vol. 4 (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2929',
            name: 'Avengers Assemble Vol. 5 (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2384',
            name: 'Avengers Classic (2007 - 2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24152',
            name: 'Avengers Epic Collection: The Avengers/Defenders War (2018)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 608,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009562/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1024',
            name: 'Avengers (1998) #80',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1026',
            name: 'Avengers (1998) #81',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1040',
            name: 'Avengers (1998) #502',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1054',
            name: 'Avengers (1998) #72',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1947',
            name: 'Avengers (1998) #78',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1949',
            name: 'Avengers (1998) #79',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2295',
            name: 'Avengers (1998) #70',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2326',
            name: 'Avengers (1998) #74',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2863',
            name: 'Cover #2863',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3031',
            name: "Avengers: Earth's Mightiest Heroes (2004) #5",
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3032',
            name: '5 of 8 - 8XLS',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3033',
            name: "Avengers: Earth's Mightiest Heroes (2004) #6",
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3034',
            name: '6 of 8 - 8XLS',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3035',
            name: "Avengers: Earth's Mightiest Heroes (2004) #7",
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3036',
            name: '7 of 8 - 8XLS',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3037',
            name: "Avengers: Earth's Mightiest Heroes (2004) #8",
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3038',
            name: '8 of 8 - 8XLS',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3265',
            name: '2 of 2 - House of M Prelude',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3500',
            name: 'New Avengers (2004) #26',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4474',
            name: '1 of 8 XLS',
            type: 'cover',
          },
        ],
        returned: 20,
      },
      events: {
        available: 17,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009562/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/227',
            name: 'Age of Apocalypse',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/234',
            name: 'Avengers Disassembled',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/310',
            name: 'Avengers VS X-Men',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/320',
            name: 'Axis',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
            name: 'Dark Reign',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/251',
            name: 'House of M',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/315',
            name: 'Infinity',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/37',
            name: 'Maximum Security',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/154',
            name: 'Onslaught',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/319',
            name: 'Original Sin',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/336',
            name: 'Secret Empire',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/270',
            name: 'Secret Wars',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/271',
            name: 'Secret Wars II',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/273',
            name: 'Siege',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/219',
            name: 'Siege of Darkness',
          },
        ],
        returned: 17,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1009562/scarlet_witch?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Scarlet_Witch_(Wanda_Maximoff)?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009562/scarlet_witch?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009576,
      name: 'Shaman',
      description:
        'Dr. Michael Twoyoungmen was a surgeon who found that modern science was insufficient to accomplish everything he wished to do, and so he turned to mysticism that his grandfather told him about.',
      modified: '2011-05-10T15:51:36-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009576',
      comics: {
        available: 46,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009576/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12637',
            name: 'Alpha Flight (1983) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38570',
            name: 'Alpha Flight (2011) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/39819',
            name: 'Alpha Flight (2011) #1 (Eaglesham Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12679',
            name: 'Alpha Flight (1983) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12690',
            name: 'Alpha Flight (1983) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38565',
            name: 'Alpha Flight (2011) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/39820',
            name: 'Alpha Flight (2011) #3 (Eaglesham Variant)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12701',
            name: 'Alpha Flight (1983) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38567',
            name: 'Alpha Flight (2011) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12734',
            name: 'Alpha Flight (1983) #7',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12745',
            name: 'Alpha Flight (1983) #8',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12649',
            name: 'Alpha Flight (1983) #11',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12660',
            name: 'Alpha Flight (1983) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12675',
            name: 'Alpha Flight (1983) #16',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12684',
            name: 'Alpha Flight (1983) #24',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12695',
            name: 'Alpha Flight (1983) #34',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12713',
            name: 'Alpha Flight (1983) #50',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12725',
            name: 'Alpha Flight (1983) #61',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12753',
            name: 'Alpha Flight (1983) #87',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12754',
            name: 'Alpha Flight (1983) #88',
          },
        ],
        returned: 20,
      },
      series: {
        available: 10,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009576/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13907',
            name: 'Alpha Flight (2011 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2115',
            name: 'Black Panther (1998 - 2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3741',
            name: 'Doctor Strange, Sorcerer Supreme (1988 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3289',
            name: 'Infinity War (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1440',
            name: 'MARVEL MASTERWORKS: THE UNCANNY X-MEN VOL. 2 HC (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2258',
            name: 'Uncanny X-Men (1963 - 2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1723',
            name: 'Uncanny X-Men Omnibus Vol. 1 (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3654',
            name: 'Warlock and the Infinity Watch (1992 - 1995)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2262',
            name: 'Wolverine (1988 - 2003)',
          },
        ],
        returned: 10,
      },
      stories: {
        available: 52,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009576/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/15424',
            name: 'Chaos in Canada!',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/15427',
            name: 'Shoot-Out at the Stampede!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/15466',
            name: '...Something Wicked This Way Comes!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/15470',
            name: 'Rage!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21096',
            name: 'Alpha Flight (1983) #1',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21097',
            name: 'Tundra!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21123',
            name: 'Unleash the Beast !',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21124',
            name: 'Alpha Flight #12',
            type: 'ad',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21128',
            name: 'Bare Bones Part II',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21145',
            name: 'And One Shall Surely Die !',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21146',
            name: 'And One Shall Surely Die',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21164',
            name: 'Alpha Flight #127',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21165',
            name: 'Faith!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21169',
            name: 'No Future Part 2',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21170',
            name: 'Ordeal!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21174',
            name: 'The Hollow Man',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21181',
            name: 'Guardian is Dead. Who Will Lead Alpha Flight?',
            type: 'ad',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21188',
            name: 'Alpha Flight (1983) #2',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21189',
            name: 'Shadows of the Past',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21201',
            name: 'pin-up',
            type: '',
          },
        ],
        returned: 20,
      },
      events: {
        available: 2,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009576/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
        ],
        returned: 2,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/2064/shaman?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Shaman_%28Michael_Twoyoungmen%29?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009576/shaman?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009583,
      name: 'She-Hulk (Jennifer Walters)',
      description:
        'Seriously wounded, young lawyer Jennifer Walters was given a blood transfusion by her cousin Bruce Banner. Usually in better control of her powers and temper than the Hulk, She-Hulk has been a high profile New York lawyer as well as an upstanding member of both the Avengers and Fantastic Four.',
      modified: '2014-01-24T18:10:30-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/7/20/527bb5d64599e',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009583',
      comics: {
        available: 464,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009583/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/58636',
            name: "Marvel New Year's Eve Special Infinite Comic (2017) #1",
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/56017',
            name: 'A-Force (2016) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/56018',
            name: 'A-Force (2016) #7',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/56019',
            name: 'A-Force (2016) #8',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/56021',
            name: 'A-Force (2016) #10',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/22461',
            name: 'Adam: Legend of the Blue Marvel (2008) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37405',
            name: 'Age of Ultron (2013) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37406',
            name: 'Age of Ultron (2013) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/24053',
            name: 'All-New Savage She-Hulk (2009) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/24252',
            name: 'All-New Savage She-Hulk (2009) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/27533',
            name: 'All-New Savage She-Hulk (2009) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/60276',
            name: 'All-New, All-Different Avengers Annual (2016) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12725',
            name: 'Alpha Flight (1983) #61',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12651',
            name: 'Alpha Flight (1983) #111',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12668',
            name: 'Alpha Flight (1983) #127',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/29321',
            name: 'Atlantis Attacks (2011) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/29322',
            name: 'Atlantis Attacks (DM Only) (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/93354',
            name: 'Atlantis Attacks: The Original Epic (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17490',
            name: 'Avengers (1998) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/67002',
            name: 'Avengers (2018) #1',
          },
        ],
        returned: 20,
      },
      series: {
        available: 152,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009583/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/20606',
            name: 'A-Force (2016)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/6079',
            name: 'Adam: Legend of the Blue Marvel (2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/17318',
            name: 'Age of Ultron (2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/7231',
            name: 'All-New Savage She-Hulk (2009)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22190',
            name: 'All-New, All-Different Avengers Annual (2016)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/10030',
            name: 'Atlantis Attacks (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/10031',
            name: 'Atlantis Attacks (DM Only) (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/31906',
            name: 'Atlantis Attacks: The Original Epic (2021)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24229',
            name: 'Avengers (2018 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
            name: 'Avengers (1998 - 2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
            name: 'Avengers (1963 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1988',
            name: 'Avengers Annual (1967 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1340',
            name: 'Avengers Assemble (2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1737',
            name: 'Avengers Assemble Vol. 3 (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1816',
            name: 'Avengers Assemble Vol. 4 (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2384',
            name: 'Avengers Classic (2007 - 2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3971',
            name: 'Avengers Fairy Tales (2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/158',
            name: 'Avengers Vol. 1: World Trust (2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/227',
            name: 'Avengers Vol. 2: Red Zone (2003)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 537,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009583/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/698',
            name: 'UNCANNY X-MEN (1963) #435',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1054',
            name: 'Avengers (1998) #72',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1947',
            name: 'Avengers (1998) #78',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1949',
            name: 'Avengers (1998) #79',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2092',
            name: 'Interior #2092',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2249',
            name: 'UNCANNY X-MEN (1963) #436',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2326',
            name: 'Avengers (1998) #74',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3130',
            name: '1 of 1 - Hercules',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3132',
            name: 'Interior #3132',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3134',
            name: 'Interior #3134',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3136',
            name: 'Interior #3136',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3138',
            name: 'Interior #3138',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3140',
            name: 'Interior #3140',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3142',
            name: '"SPACE CASES" As a superhuman lawyer, SHE-HULK has tried some of the strangest cases on Earth... but all of that is about to cha',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3144',
            name: '"ENGAGEMENT RING" PART 2 (OF 2) A titanic tale of foxy boxing in outer space! Yes, FOXY BOXING! On a planet where might makes ri',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3145',
            name: '1 of 3 - Titania',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3146',
            name: '1 of 3 - Titania',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3148',
            name: '2 of 3 - Titania',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3150',
            name: '3 of 3 - Titania',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4125',
            name: '3 of 3 - Titannus War',
            type: 'cover',
          },
        ],
        returned: 20,
      },
      events: {
        available: 15,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009583/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/314',
            name: 'Age of Ultron',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/233',
            name: 'Atlantis Attacks',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
            name: 'Chaos War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/238',
            name: 'Civil War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
            name: 'Dark Reign',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/297',
            name: 'Fall of the Hulks',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/37',
            name: 'Maximum Security',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
            name: 'Secret Invasion',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/270',
            name: 'Secret Wars',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/271',
            name: 'Secret Wars II',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/277',
            name: 'World War Hulk',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/280',
            name: 'X-Tinction Agenda',
          },
        ],
        returned: 15,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1009583/she-hulk_jennifer_walters?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/She-Hulk_(Jennifer_Walters)?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009583/she-hulk_jennifer_walters?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009592,
      name: 'Silver Surfer',
      description:
        'When Zenn-La was threatened by the world-devouring entity known as Galactus, Norrin Radd stood up for his home planet and offered to work for Galactus, finding him new planets to eat, in exchange for saving his own. Years later, the Surfer has protected Earth and many other planets, becoming one of the greatest heroes in the universe.',
      modified: '2013-11-07T10:48:53-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/527bb6490a176',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009592',
      comics: {
        available: 533,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009592/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4788',
            name: 'Annihilation (2006) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5655',
            name: 'Annihilation (2006) #5',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5795',
            name: 'Annihilation (2006) #6',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/78506',
            name: 'Annihilation - Scourge: Silver Surfer (2019) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/16667',
            name: 'ANNIHILATION BOOK 2 (Hardcover)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/6175',
            name: 'Annihilation: Heralds of Galactus (2007) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/3985',
            name: 'Annihilation: Prologue (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/78870',
            name: 'Annihilation: Scourge (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4108',
            name: 'Annihilation: Silver Surfer (2006) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4218',
            name: 'Annihilation: Silver Surfer (2006) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4315',
            name: 'Annihilation: Silver Surfer (2006) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4470',
            name: 'Annihilation: Silver Surfer (2006) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/66602',
            name: 'Annihilation: The Complete Collection Vol. 1 (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4822',
            name: 'Annihilation: The Nova Corps (2006) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/36644',
            name: 'Annihilators (2010) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38642',
            name: 'Annihilators (2010) #1 (GARNER VARIANT)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/36647',
            name: 'Annihilators (2010) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38640',
            name: 'Annihilators (2010) #2 (DAVIS VARIANT)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/36646',
            name: 'Annihilators (2010) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38641',
            name: 'Annihilators (2010) #3 (DJURDJEVIC VARIANT)',
          },
        ],
        returned: 20,
      },
      series: {
        available: 172,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009592/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3613',
            name: 'Annihilation (2006 - 2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/27983',
            name: 'Annihilation - Scourge: Silver Surfer (2019)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2974',
            name: 'ANNIHILATION BOOK 2 (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1864',
            name: 'Annihilation: Heralds of Galactus (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1077',
            name: 'Annihilation: Prologue (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/28069',
            name: 'Annihilation: Scourge (2020)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1078',
            name: 'Annihilation: Silver Surfer (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24256',
            name: 'Annihilation: The Complete Collection Vol. 1 (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1115',
            name: 'Annihilation: The Nova Corps (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13025',
            name: 'Annihilators (2010 - 2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
            name: 'Avengers (1963 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3621',
            name: 'Avengers (1996 - 1997)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1988',
            name: 'Avengers Annual (1967 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1816',
            name: 'Avengers Assemble Vol. 4 (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/359',
            name: 'Avengers: Galactic Storm Vol.1 (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2424',
            name: 'Bullet Points (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/994',
            name: 'Bullet Points (2006 - 2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/693',
            name: 'Cable & Deadpool (2004 - 2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1338',
            name: 'Cable & Deadpool Vol. 2: The Burnt Offering (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/690',
            name: 'Captain Marvel (2000 - 2002)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 779,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009592/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/697',
            name: 'Interior #697',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1272',
            name: 'INCREDIBLE HULK (1999) #95',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1434',
            name: 'ULTIMATE X-MEN (2000) #48',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1605',
            name: 'Interior #1605',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1741',
            name: 'Interior #1741',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1773',
            name: 'Interior #1773',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1973',
            name: 'Interior #1973',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2020',
            name: 'Interior #2020',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2022',
            name: 'Interior #2022',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2024',
            name: 'Interior #2024',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2026',
            name: 'Interior #2026',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2028',
            name: 'Interior #2028',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2030',
            name: 'Interior #2030',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2032',
            name: "Gabe and Ellie, the most evolved of the Silver Surfer's abducted children, unleash the prophesied cataclysm on Earth. The Silver",
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2034',
            name: '"REVELATION" PART 8 (OF 8) Finally willing to make the ultimate sacrifice in defense of the Earth, the Silver Surfer battles a p',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2480',
            name: 'CABLE & DEADPOOL (2004) #10',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3099',
            name: '1 of 5',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4185',
            name: '2 of 4 - 4XLS',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5203',
            name: '5 of 5 - 5XLS',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5582',
            name: 'SENTINEL SQUAD O*N*E (2006) #2',
            type: 'cover',
          },
        ],
        returned: 20,
      },
      events: {
        available: 13,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009592/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/229',
            name: 'Annihilation',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/235',
            name: 'Blood and Thunder',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
            name: 'Chaos War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/252',
            name: 'Inferno',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/255',
            name: 'Initiative',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/37',
            name: 'Maximum Security',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/212',
            name: 'Planet Hulk',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/271',
            name: 'Secret Wars II',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/309',
            name: 'Shattered Heroes',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/294',
            name: 'The Thanos Imperative',
          },
        ],
        returned: 13,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1009592/silver_surfer?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Silver_Surfer?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009592/silver_surfer?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1010761,
      name: 'Sleepwalker',
      description:
        'Sleepwalkers are guardians of the Mindscape -- they apprehended beings that invade the sleeping minds of humans.',
      modified: '1969-12-31T19:00:00-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/30/4c0037640501a',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010761',
      comics: {
        available: 13,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1010761/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/42570',
            name: 'Avenging Spider-Man (2011) #19',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/67950',
            name: 'Captain Marvel: Carol Danvers - The Ms. Marvel Years Vol. 2 (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20208',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #46',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/73197',
            name: 'Infinity Wars: Sleepwalker (2018) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/73199',
            name: 'Infinity Wars: Sleepwalker (2018) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/73200',
            name: 'Infinity Wars: Sleepwalker (2018) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/73201',
            name: 'Infinity Wars: Sleepwalker (2018) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/73198',
            name: 'Infinity Wars: Sleepwalker  (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/3204',
            name: 'Marvel Team-Up (2004) #15',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/3412',
            name: 'Marvel Team-Up (2004) #16',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/3932',
            name: 'Marvel Team-Up (2004) #18',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/70767',
            name: 'Moon Girl and Devil Dinosaur (2015) #41',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/10781',
            name: 'Spider-Man (1990) #22',
          },
        ],
        returned: 13,
      },
      series: {
        available: 8,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1010761/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/14246',
            name: 'Avenging Spider-Man (2011 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24528',
            name: 'Captain Marvel: Carol Danvers - The Ms. Marvel Years Vol. 2 (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3741',
            name: 'Doctor Strange, Sorcerer Supreme (1988 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/26410',
            name: 'Infinity Wars: Sleepwalker (2018 - 2019)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/26411',
            name: 'Infinity Wars: Sleepwalker  (2019)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/813',
            name: 'Marvel Team-Up (2004 - 2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/20839',
            name: 'Moon Girl and Devil Dinosaur (2015 - 2019)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2069',
            name: 'Spider-Man (1990 - 1998)',
          },
        ],
        returned: 8,
      },
      stories: {
        available: 13,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1010761/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4131',
            name: '1 of 3',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4133',
            name: '2 of 4 - League of Losers',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4137',
            name: '4 of 4 - League of Losers',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/23761',
            name: 'interior to Spider-Man (1990) #22',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/95922',
            name: 'Cover #95922',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/147544',
            name: 'cover from CAPTAIN MARVEL: CAROL DANVERS - THE MS. MARVEL YEARS VOL. 2 TPB (2018) #2',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/148881',
            name: 'cover from Doctor Strange, Sorcerer Supreme (1988) #46',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/157511',
            name: 'cover from Moon Girl and Devil Dinosaur (2015) #41',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/163073',
            name: 'cover from Infinity Wars: Sleepwalker (2018) #1',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/163075',
            name: 'cover from INFINITY WARS: SLEEPWALKER TPB (2019) #1',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/163077',
            name: 'cover from Infinity Wars: Sleepwalker (2018) #2',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/163079',
            name: 'cover from Infinity Wars: Sleepwalker (2018) #3',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/163081',
            name: 'cover from Infinity Wars: Sleepwalker (2018) #4',
            type: 'cover',
          },
        ],
        returned: 13,
      },
      events: {
        available: 1,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1010761/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
        ],
        returned: 1,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/2141/sleepwalker?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Sleepwalker?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1010761/sleepwalker?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009629,
      name: 'Storm',
      description:
        'Ororo Monroe is the descendant of an ancient line of African priestesses, all of whom have white hair, blue eyes, and the potential to wield magic.',
      modified: '2016-05-26T11:50:27-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/40/526963dad214d',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009629',
      comics: {
        available: 845,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009629/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17701',
            name: 'Age of Apocalypse: The Chosen (1995) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/43498',
            name: 'A+X (2012) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37996',
            name: 'Age of X: Alpha (2010) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12676',
            name: 'Alpha Flight (1983) #17',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12694',
            name: 'Alpha Flight (1983) #33',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12725',
            name: 'Alpha Flight (1983) #61',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12668',
            name: 'Alpha Flight (1983) #127',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21511',
            name: 'Astonishing X-Men (2004) #25',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21714',
            name: 'Astonishing X-Men (2004) #26',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21941',
            name: 'Astonishing X-Men (2004) #27',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/23087',
            name: 'Astonishing X-Men (2004) #28',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/23937',
            name: 'Astonishing X-Men (2004) #29',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/24501',
            name: 'Astonishing X-Men (2004) #30',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/24503',
            name: 'Astonishing X-Men (2004) #32',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/24504',
            name: 'Astonishing X-Men (2004) #33',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/24505',
            name: 'Astonishing X-Men (2004) #34',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/30332',
            name: 'Astonishing X-Men (2004) #35',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38318',
            name: 'Astonishing X-Men (2004) #38',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38319',
            name: 'Astonishing X-Men (2004) #40',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/39318',
            name: 'Astonishing X-Men (2004) #44',
          },
        ],
        returned: 20,
      },
      series: {
        available: 217,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009629/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/16450',
            name: 'A+X (2012 - 2014)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3614',
            name: 'Age of Apocalypse: The Chosen (1995)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13603',
            name: 'Age of X: Alpha (2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/744',
            name: 'Astonishing X-Men (2004 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/31906',
            name: 'Atlantis Attacks: The Original Epic (2021)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
            name: 'Avengers (1998 - 2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9085',
            name: 'Avengers (2010 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
            name: 'Avengers (1963 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1340',
            name: 'Avengers Assemble (2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/15305',
            name: 'Avengers Vs. X-Men (2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3626',
            name: 'Bishop (1994 - 1995)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/20912',
            name: 'Black Panther (2016 - 2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2115',
            name: 'Black Panther (1998 - 2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24291',
            name: 'Black Panther (2018 - 2021)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/784',
            name: 'Black Panther (2005 - 2008)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/31553',
            name: 'Black Panther (2021 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/6804',
            name: 'Black Panther (2009 - 2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23017',
            name: 'Black Panther and the Crew (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3850',
            name: 'Black Panther Annual (2008)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 984,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009629/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/497',
            name: 'Interior #497',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/648',
            name: '1 of 2- Black Panther crossover',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/650',
            name: '2 of 2- Black Panther crossover',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/737',
            name: '2 of 5 - Savage Land',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/738',
            name: 'Uncanny X-Men (1963) #457',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/739',
            name: '3 of 5 - Savage Land',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/742',
            name: 'Uncanny X-Men (1963) #459',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/743',
            name: "5 of 5 - World's End",
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/745',
            name: '1 of 2 - Mojo Rising',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/747',
            name: '2 of 2 - Mojo Rising',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/749',
            name: '1 of 4 - Season of the Witch',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/760',
            name: 'Uncanny X-Men (1963) #467',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/761',
            name: "2 of 3 - Grey's End",
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/765',
            name: '1 of 3 -',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/767',
            name: "2 of 3 - Wand'ring Star",
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/768',
            name: 'UNCANNY X-MEN (1963) #471',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/770',
            name: 'UNCANNY X-MEN (1963) #472',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1420',
            name: 'ULTIMATE X-MEN (2000) #43',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1422',
            name: 'ULTIMATE X-MEN (2000) #44',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1426',
            name: 'ULTIMATE X-MEN (2000) #49',
            type: 'cover',
          },
        ],
        returned: 20,
      },
      events: {
        available: 30,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009629/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/227',
            name: 'Age of Apocalypse',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/303',
            name: 'Age of X',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/233',
            name: 'Atlantis Attacks',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/310',
            name: 'Avengers VS X-Men',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/238',
            name: 'Civil War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
            name: 'Dark Reign',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/240',
            name: 'Days of Future Present',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/245',
            name: 'Enemy of the State',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/246',
            name: 'Evolutionary War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/248',
            name: 'Fall of the Mutants',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/249',
            name: 'Fatal Attractions',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/251',
            name: 'House of M',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/252',
            name: 'Inferno',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/334',
            name: 'Inhumans Vs. X-Men',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/255',
            name: 'Initiative',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/37',
            name: 'Maximum Security',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/299',
            name: 'Messiah CompleX',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/263',
            name: 'Mutant Massacre',
          },
        ],
        returned: 20,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1009629/storm?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Storm?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009629/storm?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009646,
      name: 'Talisman (Elizabeth Twoyoungmen)',
      description:
        'Elizabeth Twoyoungmen was born in Calgary, Alberta, Canada, the daughter of Michael Twoyoungman (Shaman) of the Canadian superhero team Alpha Flight.',
      modified: '1969-12-31T19:00:00-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009646',
      comics: {
        available: 10,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009646/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12678',
            name: 'Alpha Flight (1983) #19',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12725',
            name: 'Alpha Flight (1983) #61',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12753',
            name: 'Alpha Flight (1983) #87',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12754',
            name: 'Alpha Flight (1983) #88',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12755',
            name: 'Alpha Flight (1983) #89',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12757',
            name: 'Alpha Flight (1983) #90',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12650',
            name: 'Alpha Flight (1983) #110',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12651',
            name: 'Alpha Flight (1983) #111',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12668',
            name: 'Alpha Flight (1983) #127',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20218',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #55',
          },
        ],
        returned: 10,
      },
      series: {
        available: 2,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009646/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3741',
            name: 'Doctor Strange, Sorcerer Supreme (1988 - 1996)',
          },
        ],
        returned: 2,
      },
      stories: {
        available: 10,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009646/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21126',
            name: 'Bare Bones',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21128',
            name: 'Bare Bones Part II',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21165',
            name: 'Faith!',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21187',
            name: 'Turn Again, Turn Again, Time In They Flight',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21288',
            name: '...Inquistition',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21348',
            name: 'Building Blocks Part One: Loyalty',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21350',
            name: 'Building Blocks Part Two: Trust',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21352',
            name: 'Building Blocks Part Three: Faith',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/21357',
            name: 'Building Blocks Part 4: Strength',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43317',
            name: 'World Enough, And Time...',
            type: 'interiorStory',
          },
        ],
        returned: 10,
      },
      events: {
        available: 1,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009646/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
        ],
        returned: 1,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/2287/talisman?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Talisman_(Elizabeth_Twoyoungmen)?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009646/talisman_elizabeth_twoyoungmen?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
    {
      id: 1009652,
      name: 'Thanos',
      description:
        'The Mad Titan Thanos, a melancholy, brooding individual, consumed with the concept of death, sought out personal power and increased strength, endowing himself with cybernetic implants until he became more powerful than any of his brethren.',
      modified: '2016-05-05T15:35:19-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/40/5274137e3e2cd',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009652',
      comics: {
        available: 274,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009652/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12651',
            name: 'Alpha Flight (1983) #111',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5078',
            name: 'Annihilation (2006) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5529',
            name: 'Annihilation (2006) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/3985',
            name: 'Annihilation: Prologue (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4108',
            name: 'Annihilation: Silver Surfer (2006) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4218',
            name: 'Annihilation: Silver Surfer (2006) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4315',
            name: 'Annihilation: Silver Surfer (2006) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4470',
            name: 'Annihilation: Silver Surfer (2006) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4822',
            name: 'Annihilation: The Nova Corps (2006) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/29198',
            name: 'Avengers (2010) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/6981',
            name: 'Avengers (1963) #125',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7131',
            name: 'Avengers (1963) #260',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/32477',
            name: 'Avengers & the Infinity Gauntlet (2010) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/32479',
            name: 'Avengers & the Infinity Gauntlet (2010) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/32481',
            name: 'Avengers & the Infinity Gauntlet (2010) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/32483',
            name: 'Avengers & the Infinity Gauntlet (2010) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/32993',
            name: 'AVENGERS & THE INFINITY GAUNTLET GN-TPB (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/66397',
            name: 'Avengers & The Infinity Gauntlet (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/6943',
            name: 'Avengers Annual (1967) #7',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/41354',
            name: 'Avengers Assemble (2012) #3',
          },
        ],
        returned: 20,
      },
      series: {
        available: 131,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009652/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3613',
            name: 'Annihilation (2006 - 2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1077',
            name: 'Annihilation: Prologue (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1078',
            name: 'Annihilation: Silver Surfer (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1115',
            name: 'Annihilation: The Nova Corps (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
            name: 'Avengers (1963 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9085',
            name: 'Avengers (2010 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24044',
            name: 'Avengers & The Infinity Gauntlet (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9859',
            name: 'Avengers & the Infinity Gauntlet (2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/10035',
            name: 'AVENGERS & THE INFINITY GAUNTLET GN-TPB (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1988',
            name: 'Avengers Annual (1967 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/15373',
            name: 'Avengers Assemble (2012 - 2014)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23804',
            name: 'Avengers by Brian Michael Bendis: The Complete Collection Vol. 3 (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23143',
            name: 'Avengers by Jonathan Hickman Omnibus Vol. 1 (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/31307',
            name: 'Avengers Mech Strike (2021)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24135',
            name: 'Avengers vs. Thanos (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/20555',
            name: 'Avengers: Celestial Quest (2001)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22468',
            name: 'AVENGERS: THE COMPLETE CELESTIAL MADONNA SAGA TPB (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/26494',
            name: 'Black Order: The Warmasters Of Thanos (2019)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/690',
            name: 'Captain Marvel (2000 - 2002)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 301,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009652/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/694',
            name: 'Cover #694',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/695',
            name: 'Interior #695',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1412',
            name: 'Cover #1412',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1413',
            name: 'Interior #1413',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1602',
            name: 'Cover #1602',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1603',
            name: 'Interior #1603',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1800',
            name: 'Cover #1800',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1801',
            name: 'Interior #1801',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1842',
            name: 'Cover #1842',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1843',
            name: 'Interior #1843',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2253',
            name: 'Cover #2253',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2254',
            name: 'Interior #2254',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2436',
            name: 'Cover #2436',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2437',
            name: 'Interior #2437',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2438',
            name: 'Cover #2438',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2439',
            name: 'Interior #2439',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2440',
            name: 'Cover #2440',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2441',
            name: 'Interior #2441',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2442',
            name: 'Cover #2442',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2443',
            name: 'Interior #2443',
            type: 'interiorStory',
          },
        ],
        returned: 20,
      },
      events: {
        available: 8,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009652/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/229',
            name: 'Annihilation',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/235',
            name: 'Blood and Thunder',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/315',
            name: 'Infinity',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/319',
            name: 'Original Sin',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/295',
            name: 'Realm of Kings',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/271',
            name: 'Secret Wars II',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/294',
            name: 'The Thanos Imperative',
          },
        ],
        returned: 8,
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1009652/thanos?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Thanos?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009652/thanos?utm_campaign=apiRef&utm_source=197ec015335383930e3be86c2a80d4ed',
        },
      ],
    },
  ] as any;

  constructor(
    private readonly jarvisService: JarvisService,
    private readonly storage: StorageService
  ) {}

  ngOnInit(): void {
    // this.jarvisService.getLandingCharacters().subscribe((data) => {
    //   console.log(data);
    //   this.characters = data;
    // });
  }

  searchCharacter(characterName: any) {
    console.log('searchCharacter');

    this.jarvisService.searchCharacter(characterName).subscribe((data) => {
      console.log(data);
      this.characters = data;
    });
  }

  addCharacter(character: any) {
    this.jarvisService.addCharacter(character);
  }

  deleteCharacter(character: any) {
    this.jarvisService.deleteCharacter(character);
  }
}
