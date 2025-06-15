import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Person } from '../models/person.model';

@Component({
  standalone: true,
  selector: 'app-consolidated-data',
  templateUrl: './consolidated-data.html',
  styleUrls: ['./consolidated-data.scss'],
  imports: [CommonModule, FormsModule],
})
export class ConsolidatedDataComponent implements OnInit {
  allData: Person[] = [];
  filteredData: Person[] = [];
  searchText = '';
  lastUpdated = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getConsolidatedData().subscribe((response) => {
      this.allData = response.person ?? [];
      this.filteredData = [...this.allData];
      this.lastUpdated = new Date(response.lastUpdate).toLocaleString();
    });
  }

  onSearch(): void {
    const text = this.searchText.toLowerCase();

    this.filteredData = this.allData.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(text)
    );
  }
}
