import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../apiService';
import { Product } from '../types/product';
import { EpochToDatePipe } from '../shared/pipes/epoch-to-date.pipe';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../types/user';
import { Location } from '@angular/common';
import { map, switchMap } from 'rxjs';
import { UserComment } from '../types/comment';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [EpochToDatePipe, FormsModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  user: User = {
    "username": '',
    "email": '',
    "password": '',
    "tel": '',
    "_createdOn": 0,
    "_id": '',
    "accessToken": '',
  };

  product: Product = {
    name: '',
    price: 0,
    image: '',
    description: '',
    seller: '',
    tel: '',
    _ownerId: '',
    _createdOn: 0,
    _id: '',
  };

  comments: UserComment[] = []

  isEditMode: boolean = false;
  isLogged: boolean = false;
  isOwner: boolean = false;

  constructor(private userService: UserService, private apiService: ApiService, private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['productId'];

    this.apiService.getSingleProduct(id).pipe(
      map(product => {
        if (product.price < 300) {
          product.name += " - SPECIAL OFFER!";
        }
        return product;
      }),
      switchMap(product => {
        this.product = product;
        this.checkIfOwner();
        return this.apiService.getCommentsByProduct(this.product._id).pipe();
      })
    ).subscribe({
      next: (comments) => {
        this.comments = comments.filter(comment => comment.productId === this.product._id);
        console.log(this.comments);
      },
      error: (err) => {
        console.error('Error fetching product or comment information:', err);
      }
    });

    this.checkIfLogged();

    if (this.isLogged) {
      this.userService.profileInfo().subscribe({
        next: (data) => {
          this.user = data;
          this.checkIfOwner();
        },
        error: (err) => {
          console.error('Error fetching profile information:', err);
        }
      });
    }
  }


  checkIfLogged() {
    if (document.cookie) {
      this.isLogged = true;
    }
  }

  checkIfOwner() {
    if (this.product && this.user) {
      if (this.product._ownerId === this.user._id) {
        this.isOwner = true;
      }
    }
  };

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  saveProduct(form: NgForm) {
    if (form.invalid) {
      this.router.navigate(['/catalog']);
      return
    }

    if (!this.user) {
      this.router.navigate(['/catalog']);
      return
    }
    const { name, price, image, description } = form.value;
    const { username, tel } = this.user;
    const id = this.product._id;
    const ownerId = this.user._id;

    if (!(ownerId === this.product._ownerId)) {
      this.router.navigate(['/catalog']);
      return
    }

    this.apiService.editProduct(id, name, price, image, description, username, tel).subscribe(() => {
      this.toggleEditMode();
    });
  }

  deleteProduct() {
    const id = this.product._id;
    this.apiService.deleteProduct(id).subscribe({
      next: () => {
        this.location.back();
      },
      error: (err) => {
        console.error('Error deleting product:', err);
      }
    });
  }

  saveComment(loginForm: NgForm) {
    const productId = this.product._id;
    const author = this.user.username;
    const { text } = loginForm.value;

    this.apiService.createComment(productId, text, author).subscribe({
      next: () => {
        loginForm.reset();

        this.apiService.getCommentsByProduct(productId).subscribe({
          next: (comments) => {
            this.comments = comments.filter(comment => comment.productId === productId);
          },
          error: (err) => {
            console.error('Error fetching updated comments:', err);
          }
        });
      },
      error: (err) => {
        console.error('Error creating a comment', err);
      }
    })
  }
}
