import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() id;
  details: any;

  constructor(
    private imagesService: ImagesService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.imagesService.getImageDetail(this.id).subscribe((details) => {
      this.details = details;
    });
  }
  comeBack() {
    this.modalCtrl.dismiss();
  }
}
