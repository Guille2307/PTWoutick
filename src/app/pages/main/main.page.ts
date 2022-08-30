import { Component, OnInit } from '@angular/core';
import {
  LoadingController,
  MenuController,
  ModalController,
} from '@ionic/angular';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  termino: string;
  images: any;
  noTermino = 'No se encotró una imagen con la esta palabra';
  constructor(
    private imagesService: ImagesService,
    private loadingCtrl: LoadingController,
    private menuCrtl: MenuController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}
  onSearch(event) {
    this.termino = event.detail.value;
    this.termino = this.termino.toLowerCase();
    if (!this.termino) {
      return this.noTermino;
    } else {
      this.imagesService.getImages(this.termino).subscribe((images) => {
        this.images = images;
        this.termino = this.termino.toLowerCase();
      });
    }
  }
  showLoadingEvent() {
    this.showLoading();
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 100,
    });

    loading.present();
  }
  showMenu() {
    this.menuCrtl.open('first');
  }

  async onShowDetail(id: string) {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: { id },
    });
    modal.present();
  }
}
