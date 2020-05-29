import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public mapa: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.mapa = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
