import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/myfirst.component'; 
import { MySecondComponent } from './my-second/my-second.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import { DatabindingStringInterpolationComponent } from './databinding-string-interpolation/databinding-string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule }   from '@angular/forms';
import { DiretivaNgStyleComponent } from './diretiva-ng-style/diretiva-ng-style.component';
import {MatRadioModule} from '@angular/material/radio';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { SubNgIfComponent } from './ng-if/sub-ng-if/sub-ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { NgForFormComponent } from './ng-for-form/ng-for-form.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { ClientComponent } from './input-binding/client/client.component';
import { EventComponent } from './event/event.component';
import { ChildItemComponent } from './event/child-item/child-item.component';
import { ClientsComponent } from './clients/clients.component';
import { ItemClientComponent } from './clients/item-client/item-client.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { TimerComponent } from './parent-child/timer/timer.component';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { NameChangesComponent } from './on-changes/name-changes/name-changes.component';
import { InterceptingComponent } from './intercepting/intercepting.component';
import { NameComponent } from './intercepting/name/name.component';
import { MainLifeCycleComponent } from './main-life-cycle/main-life-cycle.component';
import { LifecycleChildComponent } from './main-life-cycle/lifecycle-child/lifecycle-child.component';
import {MatChipsModule} from '@angular/material/chips';
import { ChildChildComponent } from './main-life-cycle/lifecycle-child/child-child/child-child.component';
import { CheckComponent } from './check/check.component';
import { CheckChildComponent } from './Check/check-child/check-child.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {Module1Module} from './module1/module1.module';
import {Module2Module} from './module2/module2.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductFormComponent } from './product-form/product-form.component';
import { DepartmentFromComponent } from './department-from/department-from.component';
import { ProductsTableComponent } from './products-table/products-table.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { BasicComponent } from './basic/basic.component';
import { ColdObservablesComponent } from './cold-observables/cold-observables.component';
import { HotObservablesIntroComponent } from './hot-observables-intro/hot-observables-intro.component';
import { HotObservablesComponent } from './hot-observables/hot-observables.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectChildComponent } from './subjects/subject-child/subject-child.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MySecondComponent,
    DatabindingStringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    DiretivaNgStyleComponent,
    NgClassComponent,
    NgIfComponent,
    SubNgIfComponent,
    NgForComponent,
    NgForFormComponent,
    NgSwitchComponent,
    NgTemplateComponent,
    NgContainerComponent,
    NgContentComponent,
    InputBindingComponent,
    ClientComponent,
    EventComponent,
    ChildItemComponent,
    ClientsComponent,
    ItemClientComponent,
    ParentChildComponent,
    TimerComponent,
    OnChangesComponent,
    NameChangesComponent,
    InterceptingComponent,
    NameComponent,
    MainLifeCycleComponent,
    LifecycleChildComponent,
    ChildChildComponent,
    CheckComponent,
    CheckChildComponent,
    ProductFormComponent,
    DepartmentFromComponent,
    ProductsTableComponent,
    BasicComponent,
    ColdObservablesComponent,
    HotObservablesIntroComponent,
    HotObservablesComponent,
    SubjectsComponent,
    SubjectChildComponent, 
  ],
  imports: [  
    BrowserModule, 
    BrowserAnimationsModule, 
    MatSliderModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule, 
    MatStepperModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatRadioModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatProgressBarModule,
    MatChipsModule,
    MatSlideToggleModule,
    Module1Module,
    Module2Module,
    FlexLayoutModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
