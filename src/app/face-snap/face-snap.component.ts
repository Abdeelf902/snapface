import { Component, OnInit, Input,ViewEncapsulation } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
  encapsulation: ViewEncapsulation.None as ViewEncapsulation | undefined

})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  faceSnaps: FaceSnap[] = [];
  snaps: number = 0;
  buttonText: string = 'Oh Snap!';


    ngOnInit() {


          this.faceSnaps = [
            {
              title: 'Archibald',
              description: 'Mon meilleur ami depuis tout petit !',
              imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
              createdDate: new Date(),
              snaps: 6,
              location: 'Paris'
            },
            {
              title: 'Three Rock Mountain',
              description: 'Un endroit magnifique pour les randonnées.',
              imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
              createdDate: new Date(),
              snaps: 6,
              location: 'la montagne'
            },
            {
              title: 'Un bon repas',
              description: 'Mmmh que c\'est bon !',
              imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
              createdDate: new Date(),
              snaps: 23,
              location:'la mer'
            },
            {
              title: 'Sunset at the Beach',
              description: 'Un coucher de soleil spectaculaire sur la plage.',
              imageUrl: 'https://cdn.bhdw.net/im/tropical-sunset-and-palm-trees-on-the-sea-beach-wallpaper-2548_w635.webp',
              createdDate: new Date(),
              snaps: 45,
              location: 'Nice',
            },
            {
              title: 'City Lights',
              description: 'Les lumières de la ville la nuit sont incroyables !',
              imageUrl: 'https://s1.1zoom.me/b5050/400/423374-svetik_3840x2160.jpg',
              createdDate: new Date(),
              snaps: 67,
              location: 'Paris',
            },{
              title: 'Mountain Retreat',
              description: 'Échapper à la routine dans les montagnes.',
              imageUrl: 'https://www.trip-voyages.com/wp-content/uploads/2016/02/montagne1.jpeg',
              createdDate: new Date(),
              snaps: 78,
              location: 'Chamonix',
            }
          ];
    }
     onSnap() {
        if (this.buttonText === 'Oh Snap!') {
          this.faceSnap.snaps++;
          this.buttonText = 'Oops, unSnap!';
        } else {
          this.faceSnap.snaps--;
          this.buttonText = 'Oh Snap!'
        }}}
