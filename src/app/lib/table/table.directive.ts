import { Directive, HostBinding, input } from '@angular/core';

@Directive({
  selector: '[appTable]',
  standalone: true,
})
export class TableDirective {
  columns = input.required<number | (number | string)[]>({ alias: 'appTable' });

  @HostBinding('style.display')
  readonly display = 'grid';

  @HostBinding('style.grid-template-columns')
  get gritTemplateColumns(): string {
    const columns = this.columns();
    if (typeof columns === 'number') {
      return `repeat(${columns}, 1fr)`;
    }
    return columns
      .map((col) => {
        if (typeof col === 'number') {
          return `${col}fr`;
        }
        return col;
      })
      .join(' ');
  }
}
