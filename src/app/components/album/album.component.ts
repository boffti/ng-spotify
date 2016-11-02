import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../../../Artist';
import { Album } from '../../../Album';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    moduleId: 'moduleId',
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.css']

})
export class AlbumComponent implements OnInit {
    id: string;
    album: Album[];

    constructor(private _spotifeService: SpotifyService,
    private _route: ActivatedRoute) {

    }

    ngOnInit() {
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._spotifeService.getAlbum(id)
                    .subscribe(album => {
                        this.album = album;
                    })
            });
    }
}
