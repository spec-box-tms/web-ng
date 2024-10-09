import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { TuiTable, TuiTableSortable, TuiTableSortPipe, TuiTableSortBy } from '@taiga-ui/addon-table';
import { RendererBase } from '../renderer-base';
import { Tokens } from 'marked';
import { MarkdownTokenRendererComponent } from "../../markdown-token-renderer/markdown-token-renderer.component";
import { TuiLet } from '@taiga-ui/cdk';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TuiTable, MarkdownTokenRendererComponent, TuiLet, TuiTableSortPipe, TuiTableSortable, TuiTableSortBy],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent extends RendererBase<Tokens.Table> {
  columns = computed(() => {
    const token = this.token();
    return token.header.map((cell) => cell.text);
  });

  columnTokens = computed(() => {
    return this.token().header;
  });

  rows = computed(() => {
    return this.token().rows;
  });
}
