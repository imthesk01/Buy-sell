import { Component, OnInit } from '@angular/core';
//import { fakeMyListings } from '../fake-data';
import { ListingsService } from '../listings.service'
import { Listing } from '../types';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor(
    private listingsService: ListingsService,
  ) { }

  ngOnInit(): void {
    this.listingsService.getListingsForUser()
      .subscribe(listings => this.listings = listings);
  }

  onDeleteClicked(listingId: string): void {
    this.listingsService.deleteListing(listingId)
      .subscribe(() => {
        this.listings = this.listings.filter(
          listing => listing.id !== listingId
        );
      });
  }
}











// @Component({
//   selector: 'app-my-listings-page',
//   templateUrl: './my-listings-page.component.html',
//   styleUrls: ['./my-listings-page.component.css']
// })

// export class MyListingsPageComponent implements OnInit {
//   listings: Listing[] = [];

//   constructor(
//     private listingsService: ListingsService,
//     private router: Router) { }

//   ngOnInit(): void {
//     this.getListings();
//   }

//   getListings():void{
//     this.listingsService.getListings()
//     .subscribe(resp => {
//       console.log(resp);
//       this.listings=resp;
//     })
//   }


//   onDeleteClicked(listingId: string): void {
//     this.listingsService.deleteListing(listingId)
//     .subscribe(data => {
//       console.log(data);
//       this.gethome();
//     })
//     //alert(`Deleting your listing with id ${listingId}`);
//   }

//   gethome(){
//     this.router.navigate(['/']);
//   }

// }
