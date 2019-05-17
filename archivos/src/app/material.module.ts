import { NgModule } from '@angular/core';

// importar el CDK para drag and drop para material versión 7.0.2
import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule, 
    MatOptionModule,
    MatSidenavModule,
    MatTabsModule,
    MatDialogModule,
    MatProgressBarModule,
    MatTreeModule,
    MatListModule,
    MatDividerModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatButtonToggleModule
  } from '@angular/material';



  const MAT_MODULES = [
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatOptionModule,
    MatSidenavModule,
    MatTabsModule,
    MatDialogModule,
    MatProgressBarModule,
    MatTreeModule,
    MatListModule,
    MatDividerModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatButtonToggleModule
  ]

@NgModule({
  imports: [
    ...MAT_MODULES
  ],
  exports: [
    ...MAT_MODULES
  ]
})
export class MaterialModule {}
