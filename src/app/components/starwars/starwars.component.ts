import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})
export class StarwarsComponent implements OnInit {

  listaPersonajes: any = [
    {
      id: 1,
      name: 'Luke Skywalker',
      homeworld: 'tatooine',
      description: 'Luke Skywalker, a Force-sensitive human male, was a legendary Jedi Master who fought in the Galactic Civil War during the reign of the Galactic Empire.',
      wiki: 'http://starwars.wikia.com/wiki/Luke_Skywalker',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg',
    },
    {
      id: 2,
      name: 'C-3PO',
      homeworld: 'tatooine',
      description: '',
      wiki: 'http://starwars.wikia.com/wiki/C-3PO',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png',
    },
    {
      id: 3,
      name: 'R2-D2',
      homeworld: 'naboo',
      description: '',
      wiki: 'http://starwars.wikia.com/wiki/R2-D2',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png',
    },
    {
      id: 4,
      name: 'Darth Vader',
      homeworld: 'tatooine',
      description: '',
      wiki: 'http://starwars.wikia.com/wiki/Anakin_Skywalker',
      image: 'https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg',
    },
    {
      id: 5,
      name: 'Leia Organa',
      homeworld: 'alderaan',
      description: '',
      wiki: 'http://starwars.wikia.com/wiki/Leia_Organa',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png',
    },
    {
      id: 6,
      name: 'Owen Lars',
      homeworld: 'tatooine',
      description: '',
      wiki: 'http://starwars.wikia.com/wiki/Owen_Lars',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png',
    },
    {
      id: 7,
      name: 'Beru Whitesun lars',
      homeworld: 'tatooine',
      description: '',
      wiki: 'http://starwars.wikia.com/wiki/Beru_Whitesun_Lars',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png',
    },
    {
      id: 8,
      name: 'R5-D4',
      homeworld: 'tatooine',
      description: '',
      wiki: 'http://starwars.wikia.com/wiki/R5-D4',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png',
    },
    {
      id: 9,
      name: 'Biggs Darklighter',
      homeworld: 'tatooine',
      description: '',
      wiki: 'http://starwars.wikia.com/wiki/Biggs_Darklighter',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png',
    },
    {
      id: 10,
      name: 'Obi-Wan Kenobi',
      homeworld: 'stewjon',
      description: '',
      wiki: 'http://starwars.wikia.com/wiki/Obi-Wan_Kenobi',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg',
    },
    {
      id: 11,
      name: 'Anakin Skywalker',
      homeworld: 'tatooine',
      description: 'Anakin Skywalker was a legendary Force-sensitive human male who was a Jedi Knight of the Galactic Republic and the prophesied Chosen One of the Jedi Order, destined to bring balance to the Force.',
      wiki: 'http://starwars.wikia.com/wiki/Anakin_Skywalker',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png',
    },
    {
      id: 12,
      name: 'Wilhuff Tarkin',
      homeworld: 'eriadu',
      description: '',
      wiki: 'http://starwars.wikia.com/wiki/Wilhuff_Tarkin',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg',
    },
    {
      id: 13,
      name: 'Darth Sidious',
      homeworld: 'naboo',
      description: 'Darth Sidious, born Sheev Palpatine and also known simply as the Emperor, was a human male Dark Lord of the Sith and Emperor of the Galactic Empire.',
      wiki: 'https://starwars.fandom.com/wiki/Darth_Sidious',
      image: 'https://i.pinimg.com/564x/af/b7/20/afb720e6849db1b07818c0489320136f.jpg',
    }
  ];

  constructor(){ }

  ngOnInit(): void {
      
  }
}
