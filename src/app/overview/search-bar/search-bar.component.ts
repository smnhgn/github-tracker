import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
  @Output() textChange = new EventEmitter<string>();

  change(text: string) {
    this.textChange.emit(text);
  }
}
