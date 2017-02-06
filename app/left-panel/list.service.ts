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
      .then(subjects => subjects.filter(subject => subject.getCategoryId() === category_id));
  }

  getSubject(id: number): Promise<Subject> {
    return this.getSubjects()
      .then(subjects => subjects.find(subject => subject.getId() === id));
  }
  onQueryUpdate(query: string): Promise<Subject[]> {
    if (query !== "") return this.getSubjects()
      .then(subjects => subjects.filter(subject => subject.getName().toLowerCase().indexOf(query.toLowerCase()) !== -1));
    else return this.getSubjects();
  }
}
