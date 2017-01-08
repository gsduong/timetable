/**
 * Created by gsduong on 1/8/17.
 */
import { Category } from "../category";
import { CATEGORYLIST } from "../category";
import { Subject } from "../subject";
import { SUBJECTLIST } from "../subject";
import { Injectable } from '@angular/core';

@Injectable()
export class ListService {
  title: string; // "Category" or "Subject"
  items: Array<any>;
  selectedItem: any;
  status: number; // 1 for Category, 0 for Subjects (in category)

  getCategories(): Promise<Category[]> {
    return Promise.resolve(CATEGORYLIST);
  }
  getCategory(id: number): Promise<Category> {
    return this.getCategories()
      .then(categories => categories.find(category => category.getId() == id));
  }

  getSubjects(): Promise<Subject[]> {
    return Promise.resolve(SUBJECTLIST);
  }
  getSubjectsByCategoryId(category_id: number): Promise<Subject[]> {
    return this.getSubjects()
      .then(subjects => subjects.filter(subject => subject.getCategory().getId() === category_id));
  }

  getSubject(id: number): Promise<Subject> {
    return this.getSubjects()
      .then(subjects => subjects.find(subject => subject.getId() === id));
  }

  init(): void {
    this.getCategories().then(categories => this.items = categories);
    this.title = "Category";
    this.status = 1;
  }

  onCategorySelect(category: Category): void {
    this.selectedItem = category;
    this.getSubjectsByCategoryId(category.getId()).then(subjects => this.items = subjects);
    this.title = "Subject";
    this.status = 0;
  }

  onBackSelect(): void {
    this.init();
    this.title = "Category";
    this.status = 1;
  }

  isListOfCategories(): boolean {
    return this.status == 1;
  }
}
