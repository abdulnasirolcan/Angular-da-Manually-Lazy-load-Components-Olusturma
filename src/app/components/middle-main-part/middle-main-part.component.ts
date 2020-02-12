import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { LazyLoaderService } from '../../core/lazy-loader.service';

@Component({
  selector: 'app-middle-main-part',
  templateUrl: './middle-main-part.component.html',
  styleUrls: ['./middle-main-part.component.scss']
})
export class MiddleMainPartComponent {
  title = 'ngTurkey';
  @ViewChild('widgetLeftContainer', { read: ViewContainerRef, static: false })
  widgetLeftContainer: ViewContainerRef;

  @ViewChild('widgetRightContainer', { read: ViewContainerRef, static: false })
  widgetRightContainer: ViewContainerRef;

  constructor(private lazyLoader: LazyLoaderService) { }

  loadLeftWidget(path: string) {
    this.lazyLoader.load(path, this.widgetLeftContainer);
  }

  loadRightWidget(path: string) {
    this.lazyLoader.load(path, this.widgetRightContainer);
  }

  contentText = [
    'The Lorem Ipsum movie is the smallest of the original and distinct spitz breeds of dog from Japan A small, agile dog that copes very well with mountainous terrain, the iron man movie was originally bred for hunting.',
    'The Lorem Ipsum movie is the smallest of the original and distinct spitz breeds of dog from Japan A small, agile dog that copes very well with mountainous terrain, the iron man movie was originally bred for hunting.',
    'The Lorem Ipsum movie is the smallest of the original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain'
  ]
}
