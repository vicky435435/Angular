import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignComponent } from './component/campaign/campaign.component';
import { TestComponent } from './component/test/test.component';


const routes: Routes = [
  
  {
    path: '',redirectTo:'home',pathMatch:'full'
  },
 
  {
    path: 'campaign',component:CampaignComponent

  },
  {
    path: 'test',component:TestComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
