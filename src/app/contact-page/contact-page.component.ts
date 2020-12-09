import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';
//import { fakeListings } from '../fake-data';
//import { SMTPClient } from 'emailjs';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  [x: string]: any;
  email: string = '';
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingsService: ListingsService,
  ) { }



  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listingsService.getlistingbyId(id)
      .subscribe(listing => {
        this.listing = listing;
        this.message = `Hi, I'm interested in your ${this.listing.name.toLowerCase()}!`;
      });
  }

  sendMessage(): void {
    alert('Your message has been sent!');
    this.router.navigateByUrl('/listings');
  }
}
