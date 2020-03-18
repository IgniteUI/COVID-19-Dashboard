import { Component, OnInit, Input } from '@angular/core';
import { RemoteDataService } from '../services/data.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [RemoteDataService]
})
export class FooterComponent implements OnInit {
  @Input() date: Date;
  constructor(private dataService: RemoteDataService) { }

  ngOnInit(): void {
    const result$ = this.dataService.getLatestCommits();
    result$.subscribe(data => {
      debugger;
      this.date = new Date(data[0].commit.author.date);
    });
  }
}
