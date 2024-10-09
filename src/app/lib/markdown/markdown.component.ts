import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  OnInit,
} from '@angular/core';
import {
  MarkdownService,
  MarkdownComponent as NgxMarkdownComponent,
} from 'ngx-markdown';
import { ol } from './formatters/ol.formatter';
import { ul } from './formatters/ul.formatter';
import { li } from './formatters/li.formatter';
import { MarkdownService as MyMarkdownService } from './markdown.service';
import { JsonPipe } from '@angular/common';
import { MarkdownCustomComponent } from "./markdown-custom.component";

@Component({
  selector: 'app-markdown',
  standalone: true,
  imports: [NgxMarkdownComponent, JsonPipe, MarkdownCustomComponent],
  templateUrl: './markdown.component.html',
  styleUrl: './markdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkdownComponent implements OnInit {
  // private markdownService = inject(MarkdownService);
  private myMarkdownService = inject(MyMarkdownService);

  value = input.required<string>();

  tokens = computed(() => this.myMarkdownService.parse(this.value()));

  ngOnInit(): void {
    // this.markdownService.renderer.list = (body, ordered, start) => {
    //   return ordered ? ol(body, start) : ul(body);
    // };
    // this.markdownService.renderer.listitem = (text, task, checked) => {
    //   return li(text);
    // };

    // this.markdownService.renderer.table = (header, body) => {
    //   return `
    //   <table class="tui-table tui-table_font-size_s">
    //     <thead>
    //       ${header}
    //     </thead>
    //     <tbody>
    //       ${body}
    //     </tbody>
    //   </table>`;
    // };

    // this.markdownService.renderer.tablerow = (content) => {
    //   return `<tr class="tui-table__tr">${content}</tr>`
    // }

    // this.markdownService.renderer.tablecell = (content, flags) => {
    //   if(flags.header) {
    //     return `<th class="tui-table__th">${content}</th>`; 
    //   }
    //   return `<td class="tui-table__td">${content}</td>`;
    // };

    // this.markdownService.renderer.text = (text) => {
    //   const pattern = /\$([A-Za-z][A-Za-z0-9-_]*)/g; // Regex pattern to match
    //   return text.replace(pattern, (match: string) => {
    //       return `<a href="#">${match}</a>`;
    //     });
    // }
  }
}
