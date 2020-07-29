import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { OrigamiFormsModule } from '@codebakery/origami/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { ListComponent } from './list/list.component';
import { TableComponent } from './table/table.component';

import '@ui5/webcomponents-base/dist/features/browsersupport/Edge';
import '@ui5/webcomponents-localization/dist/Assets.js';
import '@ui5/webcomponents-fiori/dist/Assets.js';
import '@ui5/webcomponents-icons/dist/Assets.js';

// UI5 Web Components used
import '@ui5/webcomponents/dist/Button';
import '@ui5/webcomponents-fiori/dist/ShellBar';
import '@ui5/webcomponents/dist/Title';
import '@ui5/webcomponents/dist/Input';
import '@ui5/webcomponents/dist/DatePicker';
import '@ui5/webcomponents/dist/List';
import '@ui5/webcomponents/dist/CustomListItem';
import '@ui5/webcomponents/dist/Panel';
import '@ui5/webcomponents/dist/Dialog';
import '@ui5/webcomponents/dist/Label';
import '@ui5/webcomponents/dist/TextArea';
import '@ui5/webcomponents/dist/StandardListItem';
import '@ui5/webcomponents/dist/Table';
import '@ui5/webcomponents/dist/TableColumn';
import '@ui5/webcomponents/dist/TableRow';
import '@ui5/webcomponents/dist/TableCell';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    UserInputComponent,
    TableComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    OrigamiFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
