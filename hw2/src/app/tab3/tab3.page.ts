import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private nativeStorage: NativeStorage) {}

  setItem(reference: string, value: any) {
    this.nativeStorage.setItem('freakyItem1', { property: 'value', anotherProperty: 'anotherValue' })
      .then(
        (data) => console.log('Stored first item!',data),
        error => console.error('Error storing item', error)
      );
  }

  getItem(reference: string) {
    this.nativeStorage.getItem('freakyItem1')
      .then(
        data => console.log(data),
        error => console.error(error)
      );
  }

  keys() {
    this.nativeStorage.keys()
      .then(
        data => console.log(data),
        error => console.error(error)
      );
  }

  remove(reference: string) {
    this.nativeStorage.remove('freakyItem2')
      .then(
        data => console.log(data),
        error => console.error(error)
      );
  }

  clear() {
    this.nativeStorage.clear()
    .then(
      data => console.log(data),
      error => console.error(error)
    );
  }
}
